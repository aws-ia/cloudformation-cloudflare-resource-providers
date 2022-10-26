import axios, {AxiosResponse} from "axios";
import {LoggerProxy} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/log-delivery";

export type CloudflareResponse<T> = {
    success: boolean
    errors: CloudflareError[]
    messages: string[]
    result: T
}

export type CloudflareError = {
    code: number
    message: string
}

export type PaginatedResponseType = {
    totalCount: number
    pageSize: number
    nextPageKey: string
}

export class CloudflareClient {
    private baseUrl: string;
    private apiKey: string;
    private userAgent: string;

    constructor(baseUrl: string, apiKey: string, userAgent: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.userAgent = userAgent;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}, logger?: LoggerProxy): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `${this.baseUrl}${path}`,
            params: params,
            method: method,
            data: body,
            headers: {
                'User-Agent': this.userAgent || "AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource",
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
}