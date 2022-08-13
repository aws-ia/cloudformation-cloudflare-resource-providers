import axios, {AxiosResponse} from "axios";
import {LoggerProxy} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/log-delivery";

export type ApiErrorResponse = {
    message: string,
    name: string,
    code: number,
    status: string
}

export type PaginatedResponseType = {
    totalCount: number
    pageSize: number
    nextPageKey: string
}

export class CloudflareClient {
    private baseUrl: string;
    private apiKey: string;

    constructor(baseUrl: string, apiKey: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}, logger?: LoggerProxy): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `${this.baseUrl}${path}`,
            params: params,
            method: method,
            data: this.sanitizePayload(body),
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                'Content-type': 'application/json; charset=utf-8',
                Accept: 'application/json; charset=utf-8'
            }
        });
    }

    public async paginate<ResponseType extends PaginatedResponseType, ResultType>(method: 'get' | 'put' | 'post' | 'delete', path: string, transform: (response: AxiosResponse<ResponseType>) => ResultType[], params: any = {}, body?: {}): Promise<ResultType[]> {
        const results: ResultType[] = [];

        let page = 1;
        params.nexPageToken = undefined;

        while (params.nexPageToken || page === 1) {
            const response = await this.doRequest<ResponseType>(method, `${path}`);
            results.push(...transform(response))
            params.nexPageToken = response.data ? response.data.nextPageKey : undefined;
            page++;
        }

        return results;
    }

    private sanitizePayload(model: { [key: string]: any }) {
        if (!model) {
            return model;
        }

        return Object.keys(model).reduce((map, key) => {
            let value = model[key];
            if (value && value instanceof Object && !(value instanceof Array) && !(value instanceof Set)) {
                value = this.sanitizePayload(value);
            }
            if (value && value instanceof Set) {
                value = Array.of(...value);
            }
            if (value && Array.isArray(value)) {
                value = value.map(item => item && item instanceof Object && !(item instanceof Array) && !(item instanceof Set)
                    ? this.sanitizePayload(item)
                    : item);
            }
            if (key == "Ios") {
                map["iOS"] = value;
            } else if (key == "AuthURL") {
                map["authURL"] = value;
            } else if (key != "OktaAccess") {
                map[key.substring(0, 1).toLocaleLowerCase() + key.substring(1)] = value;
            }
            return map;
        }, {} as { [key: string]: any })
    }
}