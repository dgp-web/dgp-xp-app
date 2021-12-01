import * as express from "express";
import { AUTHENTICATION_SCHEME, AuthenticationScheme, getRootInjector } from "dgp-xp-app";

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

    const authentication = getRootInjector().get(AUTHENTICATION_SCHEME) as AuthenticationScheme

    console.log("Got authentication: ", authentication);
    console.log(securityName);
    console.log(scopes);

    return Promise.resolve();

}
