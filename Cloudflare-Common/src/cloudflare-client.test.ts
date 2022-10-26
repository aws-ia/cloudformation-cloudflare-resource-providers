import {CloudflareClient, CloudflarePaginatedResponse} from "./cloudflare-client";
import axios from "axios";
import Mock = jest.Mock;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.request.mockResolvedValue({});

type TestPaginationResults = {
    results: number[]
} & CloudflarePaginatedResponse<number[]>;

describe('CloudflareClient', () => {
    describe('doRequest', () => {
        const url = 'https://api.cloudflare.com';
        const token = 'aabbccddee';
        const testInstance = new CloudflareClient(url, token);

        it('sets the request URL based on the main URL + path', async () => {
            const path = '/foo/bar';

            await testInstance.doRequest('get', path);

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                url: `${url}${path}`
            }));
        });

        it('sets the request headers based on the token', async () => {
            const path = '/foo/bar';

            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest('get', path);

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json; charset=utf-8',
                    Accept: 'application/json; charset=utf-8',
                    'User-Agent': 'AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource'
                }
            }));
        });

        it.each([
            {foo: 'bar'},
            'foo=bar',
            undefined,
            null
        ])('sets the request params to "%p"', async (params) => {
            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest('get', '/foo/bar', params);

            expect(mockedAxios.request).toHaveBeenCalledWith(!!params
                ? expect.objectContaining({
                    params: params
                }) : expect.not.objectContaining({
                    params: undefined
                }));
        });

        it.each([
            'get',
            'put',
            'post',
            'delete'
        ])('sets the request method to "%p"', async (method) => {
            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest(method as 'get' | 'put' | 'post' | 'delete', '/foo/bar');

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                method: method
            }));
        });
    });

    describe('paginate', () => {
        let testInstance: CloudflareClient;

        beforeEach(() => {
            testInstance = new CloudflareClient('https://api.cloudflare.com', 'aaabbbcccdddeee');
            testInstance.doRequest = jest.fn().mockResolvedValue({});
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it.each([
           1, 3, 5, 20, 100
        ])('calls "doRequest" for each %d page(s)', async (pageCount) => {
            const perPage = 10;
            const method = 'get';
            const path = '/foo/bar';
            const body = {
                foo: 'bar',
                hello: 123
            };

            for (let i = 0; i < pageCount; i++) {
                (testInstance.doRequest as Mock).mockResolvedValueOnce({
                    data: {
                        result_info: {
                            page: i + 1,
                            per_page: perPage,
                            count: perPage,
                            total_count: perPage * (1 + pageCount),
                            total_pages: pageCount
                        }
                    }
                });
            }

            await testInstance.paginate(method, path, () => [], undefined, body);

            expect(testInstance.doRequest).toHaveBeenCalledTimes(pageCount);
            for (let i = 0; i < pageCount; i++) {
                const params = {
                    page: i + 1
                };
                expect(testInstance.doRequest).toHaveBeenCalledWith(method, path, params, body, undefined);
            }
        });

        it('aggregate results of each page', async () => {
            const perPage = 10;
            const method = 'get';
            const path = '/foo/bar';
            const params = {
                limit: 200
            };
            const body = {
                foo: 'bar',
                hello: 123
            }
            const pageCount = 3;
            const results = [1, 2, 3];

            for (let i = 0; i < pageCount; i++) {
                (testInstance.doRequest as Mock).mockResolvedValueOnce({
                    data: {
                        results: results,
                        result_info: {
                            page: i + 1,
                            per_page: perPage,
                            count: perPage,
                            total_count: perPage * (1 + pageCount),
                            total_pages: pageCount
                        }
                    }
                });
            }

            const allResults = await testInstance.paginate<TestPaginationResults, number>(
                method,
                path,
                (response) => response.data.results,
                params,
                body);

            expect(allResults.length).toBe(results.length * pageCount);
        });
    });
});