import {CloudflareResponse} from "./cloudflare-client";
import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError} from "axios";
import {AbstractBaseResource} from "./abstract-base-resource";

export abstract class AbstractCloudflareResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationModel> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, AxiosError<CloudflareResponse<unknown>>, TypeConfigurationModel> {

    processRequestException(e: AxiosError<CloudflareResponse<unknown>>, request: ResourceHandlerRequest<ResourceModelType>) {
        const response = e.response?.data;
        let errors = [e.message];
        if (response?.messages.length > 0) {
            errors = errors.concat(response.messages);
        }
        if (response?.errors.length > 0) {
            errors = errors.concat(response.errors.map(error => `[Code ${error.code}] ${error.message}`));
        }

        const errorMessage = errors.join('\n');

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;
        switch (status) {
            case 400:
                throw new exceptions.InvalidRequest(errorMessage);
            case 401:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.ServiceInternalError(`Unexpected error occurred while talking to the Cloudflare API: ${errorMessage}`);
        }
    }
}