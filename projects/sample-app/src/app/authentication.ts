import * as express from "express";
import { TSOA_EXPRESS_AUTHENTICATION_SCHEME, TsoaExpressAuthentication, getRootInjector } from "dgp-xp-app";

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

    const authentication = getRootInjector().get(TSOA_EXPRESS_AUTHENTICATION_SCHEME) as TsoaExpressAuthentication

    console.log("Got authentication: ", authentication);
    console.log(securityName);
    console.log(scopes);

    return Promise.resolve();

}
