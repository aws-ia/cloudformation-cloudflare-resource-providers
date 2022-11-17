import {AbstractCloudflareResource} from "../../Cloudflare-Common/src/abstract-cloudflare-resource";
import {ResourceModel, TypeConfigurationModel} from './models';
import {CloudflareClient, CloudflareResponse} from "../../Cloudflare-Common/src/cloudflare-client";
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {CaseTransformer, Transformer} from "../../Cloudflare-Common/src/util";
import {version} from "../package.json";

// The type below are only partial representation of what the API is returning. It's only needed for TypeScript niceties
type LoadBalancer = {
    id: string
}

class Resource extends AbstractCloudflareResource<ResourceModel, LoadBalancer, LoadBalancer, LoadBalancer, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<LoadBalancer> {
        if (!model.id) {
            throw new exceptions.NotFound(this.typeName, null);
        }

        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<CloudflareResponse<LoadBalancer>>(
            'get',
            `/zones/${model.zoneId}/load_balancers/${model.id}`);

        return response.data.result;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<CloudflareResponse<LoadBalancer[]>>(
            'get',
            `/zones/${model.zoneId}/load_balancers/`);
        return response.data.result.map(loadBalancer => this.setModelFrom(model, loadBalancer));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<LoadBalancer> {
        const body = Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform();
        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<CloudflareResponse<LoadBalancer>>(
            'post',
            `/zones/${(model.zoneId)}/load_balancers`,
            {},
            body);

        return response.data.result;
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<LoadBalancer> {
        let body = Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform();
        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<CloudflareResponse<LoadBalancer>>(
            'put',
            `/zones/${model.zoneId}/load_balancers/${model.id}`,
            {},
            body);
        return response.data.result;
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<CloudflareResponse<LoadBalancer>>(
            'delete',
            `/zones/${model.zoneId}/load_balancers/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: LoadBalancer): ResourceModel {
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
        // Delete a couple of unused fields that are returned by the API
        delete (<any>resourceModel)?.adaptiveRouting;
        delete (<any>resourceModel)?.locationStrategy;
        delete resourceModel.sessionAffinityAttributes;

        return resourceModel;
    }


}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
