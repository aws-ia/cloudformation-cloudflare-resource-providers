import axios, {AxiosResponse} from "axios";

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

export type CloudflarePaginatedResponse<T> = {
    result_info: {
        page: number
        per_page: number
        count: number
        total_count: number
        total_pages: number
    }
} & CloudflareResponse<T>

export class CloudflareClient {
    private baseUrl: string;
    private apiKey: string;
    private userAgent: string;

    constructor(baseUrl: string, apiKey: string, userAgent?: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.userAgent = userAgent;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}, headers?: {[key: string]: string}): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `${this.baseUrl}${path}`,
            params: params,
            method: method,
            data: body,
            headers: {
                'User-Agent': this.userAgent || "AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource",
                Authorization: `Bearer ${this.apiKey}`,
                'Content-type': 'application/json; charset=utf-8',
                Accept: 'application/json; charset=utf-8',
                ...headers
            }
        });
    }

    public async paginate<ResponseType extends CloudflarePaginatedResponse<ResultType[]>, ResultType>(method: 'get' | 'put' | 'post' | 'delete', path: string, transform: (response: AxiosResponse<ResponseType>) => ResultType[], params: any = {}, body?: {}, headers?: {[key: string]: string}): Promise<ResultType[]> {
        const results: ResultType[] = [];

        let delegateParams = {
            page: 1,
            ...params
        }
        let hasNextPage = true

        while (hasNextPage) {
            const response = await this.doRequest<ResponseType>(method, path, delegateParams, body, headers);
            results.push(...transform(response));
            hasNextPage = delegateParams.page < response.data.result_info.total_pages;
            delegateParams = Object.assign({}, delegateParams, {
                page: delegateParams.page + 1
            });
        }

        return results;
    }
}