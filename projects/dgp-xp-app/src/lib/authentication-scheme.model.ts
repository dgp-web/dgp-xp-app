import * as express from "express";

export type AuthenticationScheme = <TUser = any>(request: express.Request,
                                                 securityName: string,
                                                 scopes?: string[]) => Promise<TUser>;

export type Authentication = AuthenticationScheme;
