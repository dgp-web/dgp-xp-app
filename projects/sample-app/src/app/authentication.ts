import * as express from "express";

/*
 * Info: This name is a convention that TSOA
 * searches for. Changing it results in transpilation
 * errors.
 */
export function expressAuthentication(
    request: express.Request,
    securityName: string,
    scopes?: string[]
): Promise<any> {

    return Promise.resolve();

}
