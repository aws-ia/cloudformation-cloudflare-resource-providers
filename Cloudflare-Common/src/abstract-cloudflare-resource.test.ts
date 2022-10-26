import {AbstractCloudflareResource} from "./abstract-cloudflare-resource";
import {BaseModel, ResourceHandlerRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {CloudflareResponse} from "./cloudflare-client";
import {AxiosError, AxiosResponse} from "axios";
import {
    AccessDenied,
    InternalFailure,
    InvalidCredentials,
    InvalidRequest,
    NotFound, ServiceInternalError,
    ServiceLimitExceeded
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

class TestAbstractPagerDutyResource extends AbstractCloudflareResource<BaseModel, {}, {}, {}, {}> {
    create(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    delete(model: BaseModel): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    list(model: BaseModel): Promise<BaseModel[]> {
        return Promise.resolve([]);
    }

    newModel(partial: any): BaseModel {
        return undefined;
    }

    setModelFrom(model: BaseModel, from: {} | undefined): BaseModel {
        return undefined;
    }

    update(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }
}

describe('AbstractCloudflareResource', () => {
    describe('processRequestException', () => {
        let testInstance: TestAbstractPagerDutyResource;

        beforeAll(() => {
            testInstance = new TestAbstractPagerDutyResource('foo', BaseModel);
        });

        it.each([
            [InvalidRequest, '400'],
            [AccessDenied, '401'],
            [NotFound, '404'],
            [ServiceLimitExceeded, '429'],
            [ServiceInternalError, '500'],
            [ServiceInternalError, null],
            [ServiceInternalError, undefined]
        ])('throws a %p if the request has a HTTP %s status code', (errorType, statusCode) => {
            const error = 'Forced error';
            let axiosError = new AxiosError<CloudflareResponse<any>>(error);
            axiosError.status = statusCode;

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e).toBeInstanceOf(errorType);
                if (e instanceof NotFound) {
                    expect(e.message).not.toContain(error);
                } else {
                    expect(e.message).toContain(error);
                }
            }
        });

        it('serialize error messages into exception message, if any', () => {
            const error = 'Forced error';
            let response: CloudflareResponse<any> = {
                success: false,
                result: null,
                messages: [
                    'foo',
                    'bar'
                ],
                errors: [
                    {
                        message: 'Forced error',
                        code: 123456,
                    }
                ]
            };
            const axiosError = new AxiosError<CloudflareResponse<any>>(error, undefined, undefined, undefined, {
                data: response
            } as AxiosResponse);
            axiosError.status = '400';

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e.message).toContain(error);
                response.messages.forEach(message => {
                    expect(e.message).toContain(message);
                });
                response.errors.forEach(error => {
                    expect(e.message).toContain(`[Code ${error.code}] ${error.message}`);
                });
            }
        });
    });
});
