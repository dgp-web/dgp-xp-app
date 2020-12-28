import * as express from "express";
import { ValidateError } from "@tsoa/runtime";

export function errorHandler(
    err: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): express.Response | void {

    if (err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        return res.status(422).json({
            message: "Validation Failed",
            details: err?.fields,
        });
    }
    if (err instanceof Error) {

        const status = (err as any).status;

        return res.status((err as any).status).json({
            status,
            name: err.name,
            message: err.message
        });
    }

    next();
}