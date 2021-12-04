import { TsoaExpressAuthentication } from "dgp-xp-app";

export const authentication: TsoaExpressAuthentication = (request, securityName, scopes) => Promise.resolve<any>(null);