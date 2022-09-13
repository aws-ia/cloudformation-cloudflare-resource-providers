import {AbstractCloudflareResource} from "../../Cloudflare-Common/src/abstract-cloudflare-resource";
import {ResourceModel, TypeConfigurationModel} from './models';
import {CloudflareClient} from "../../Cloudflare-Common/src/cloudflare-client";
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {CaseTransformer, Transformer} from "../../Cloudflare-Common/src/util";
import {version} from "../package.json";

interface CallbackContext extends Record<string, any> {}

type LoadBalancers = {
    success: boolean,
    errors: string[],
    messages: string[],
    result: any[]
};
// The type below are only partial representation of what the API is returning. It's only needed for TypeScript niceties
type LoadBalancer = {
    success: boolean,
    errors: string[],
    messages: string[],
    result: any
}

class Resource extends AbstractCloudflareResource<ResourceModel, ResourceModel, ResourceModel, ResourceModel, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        if(!model.id) {
            throw new exceptions.AlreadyExists(this.typeName, null);
        }

        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<LoadBalancer>(
            'get',
            `/zones/${model.zoneId}/load_balancers/${model.id}`,
            null,null, this.loggerProxy);

        return new ResourceModel(response.data.result);
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<LoadBalancers>(
                'get',
                `/zones/${model.zoneId}/load_balancers/`,
                null, null, this.loggerProxy);
        return response.data.result.map(group => this.setModelFrom(new ResourceModel(model), new ResourceModel(group)));
    }

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        const body = Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform();
        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<LoadBalancer>(
            'post',
            `/zones/${(model.zoneId)}/load_balancers`,
            {},
            body,
            this.loggerProxy);

        return new ResourceModel(response.data.result);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<ResourceModel> {
        let body = Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
            .transform();
        const response = await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<LoadBalancer>(
            'put',
            `/zones/${model.zoneId}/load_balancers/${model.id}`,
            {},
            body,
            this.loggerProxy);
        return new ResourceModel(response.data.result);
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel): Promise<void> {
        await new CloudflareClient(typeConfiguration.cloudflareAccess.url, typeConfiguration.cloudflareAccess.apiKey, this.userAgent).doRequest<LoadBalancer>(
            'delete',
            `/zones/${model.zoneId}/load_balancers/${model.id}`,
            null,
            null,
            this.loggerProxy);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
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

        delete resourceModel.sessionAffinityAttributes;

        return resourceModel;
    }


}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
