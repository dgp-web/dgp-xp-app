import { Inject, Injectable } from "injection-js";
import * as fetch from "node-fetch";
import { Environment } from "../../../dgp-xp-app";
import { defaultHttpsAgent, ENVIRONMENT } from "../constants";
import { NodeFetchRequestConfig } from "../models";

@Injectable()
export class HttpClient {

    constructor(
        @Inject(ENVIRONMENT)
        protected readonly environment: Environment
    ) {
    }

    get<TResult>(uri: string, config?: NodeFetchRequestConfig): Promise<TResult> {
        config = config ? {...config, method: "GET"} : {method: "GET"};
        return this.createRequest$<TResult>(uri, null, config);
    }

    delete<TResult>(uri: string, config?: NodeFetchRequestConfig): Promise<TResult> {
        config = config ? {...config, method: "DELETE"} : {method: "DELETE"};
        return this.createRequest$<TResult>(uri, null, config);
    }

    post<TResult>(uri: string, body: any, config?: NodeFetchRequestConfig): Promise<TResult> {
        config = config ? {...config, method: "POST"} : {method: "POST"};
        return this.createRequest$<TResult>(uri, body, config);
    }

    put<TResult>(uri: string, body: any, options?: NodeFetchRequestConfig): Promise<TResult> {
        options = options ? {...options, method: "PUT"} : {method: "PUT"};
        return this.createRequest$<TResult>(uri, body, options);
    }

    private createRequest$<TResult>(uri: string, body?: any, config?: NodeFetchRequestConfig): Promise<TResult> {
        config = config || {} as fetch.RequestInit;
        if (config.json === null || config.json === undefined) config.json = true;

        if (body) {
            if (config.json) {
                config.body = JSON.stringify(body);
            } else {
                config.body = body;
            }
        }

        /**
         * We do not have https on local environment.
         */
        if (!this.environment.isDevelopment) config.agent = defaultHttpsAgent;

        const request$ = fetch.default(uri, config);

        if (config.json) {

            return request$.then(x => {

                if (!x.ok) {
                    // TODO: Refactor this towards a better structure
                    return x.json().catch(error => {
                        throw {
                            status: x.status,
                            name: x.statusText,
                            message: JSON.stringify(error)
                        };
                    }).then(message => {
                        throw {
                            status: x.status,
                            name: x.statusText,
                            message
                        };
                    });

                }

                const contentType = x.headers.get("content-type");
                if (contentType?.includes("application/json")) return x.json();
                return x.text();
            });
        } else {
            return request$ as any;
        }

    }

}