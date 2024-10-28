import { ErrorCheck } from "../models/error-check.model";
import { ErrorHandler } from "../models/error-handler.model";
import * as express from "express";

export function createErrorHandler(payload: {
    readonly errorChecks: ReadonlyArray<ErrorCheck>;
}): ErrorHandler {

    const cases = payload.errorChecks;

    return (
        err: unknown,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): express.Response | void => {

        for (let i = 0; i < cases.length; i++) {
            const errorCase = cases[i];

            const result = errorCase({err, req, res, next});
            if (result.hasHandledError) {
                return res.status(result.status).json(result.result);
            }
        }

        next();
    };

}