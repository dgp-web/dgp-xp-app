import * as express from "express";

export type TsoaExpressAuthenticationScheme = <TUser = any>(request: express.Request,
                                                            securityName: string,
                                                            scopes?: string[]) => Promise<TUser>;
