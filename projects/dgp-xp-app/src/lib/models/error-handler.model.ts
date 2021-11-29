import * as express from "express";

export type ErrorHandler = (
    err: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => express.Response | void;