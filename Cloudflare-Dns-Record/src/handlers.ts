import {AbstractCloudflareResource} from "../../Cloudflare-Common/src/abstract-cloudflare-resource";
import {ResourceModel, TypeConfigurationModel} from './models';
import {
    CloudflareClient,
    CloudflarePaginatedResponse,
    CloudflareResponse
} from "../../Cloudflare-Common/src/cloudflare-client";
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {CaseTransformer, Transformer} from "../../Cloudflare-Common/src/util";
import {version} from "../package.json";

// The type below are only partial representation of what the API is returning. It's only needed for TypeScript niceties
type DnsRecord = {
    id: string
}

class Resource extends AbstractCloudflareResource<ResourceModel, DnsRecord, DnsRecord, DnsRecord, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<DnsRecord> {
        let baseUrl = typeConfiguration.cloudflareAccess.url;
        let apiKey = typeConfiguration.cloudflareAccess.apiKey;

        if (!model.id) {
            throw new exceptions.AlreadyExists(this.typeName, null);
        }

        const response = await new CloudflareClient(baseUrl, apiKey, this.userAgent).doRequest<CloudflareResponse<DnsRecord>>(
            'get',
            `/zones/${model.zoneId}/dns_records/${model.id}`);


        return response.data.result;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const dnsRecords = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).paginate<CloudflarePaginatedResponse<DnsRecord[]>, DnsRecord>(
            'get',
            `/zones/${model.zoneId}/dns_records/`,
            response1 => response1.data.result);

        return dnsRecords.map(dnsRecord => this.setModelFrom(new ResourceModel(), dnsRecord));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<DnsRecord> {
        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<CloudflareResponse<DnsRecord>>(
            'post',
            `/zones/${(model.zoneId)}/dns_records`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform());

        return response.data.result;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<DnsRecord> {
        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<CloudflareResponse<DnsRecord>>(
            'put',
            `/zones/${model.zoneId}/dns_records/${model.id}`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform());
        return response.data.result;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<CloudflareResponse<DnsRecord>>(
            'delete',
            `/zones/${model.zoneId}/dns_records/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: DnsRecord): ResourceModel {
        if (!from) {
            return model;
        }
        let resourceModel = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });

        return resourceModel;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
