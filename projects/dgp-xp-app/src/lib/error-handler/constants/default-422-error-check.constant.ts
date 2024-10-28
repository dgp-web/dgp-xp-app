import { ErrorCheck } from "../models/error-check.model";
import { ValidateError } from "@tsoa/runtime";

export const default422ErrorCheck: ErrorCheck = payload => {
    const err = payload.err;
    const req = payload.req;
    const res = payload.res;

    if (err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        const status = 422;
        const result = {
            message: "Validation Failed",
            details: err?.fields,
        };

        return {hasHandledError: true, result, status};
    }


    return {hasHandledError: false};
}