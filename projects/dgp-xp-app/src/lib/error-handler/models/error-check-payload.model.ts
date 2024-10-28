import * as express from "express";

export interface ErrorCheckPayload {
    readonly err: unknown;
    readonly req: express.Request;
    readonly res: express.Response;
    readonly next: express.NextFunction;
}

