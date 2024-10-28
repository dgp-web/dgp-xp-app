import { ErrorCheck } from "../models/error-check.model";

export const defaultErrorCheck: ErrorCheck = payload => {
    const err = payload.err;

    if (err !== null && err !== undefined) {
        if (err instanceof Error) {
            const status = (err as any).status || 500;
            const result = {
                status,
                name: err.name,
                message: err.message
            };

            return {hasHandledError: true, status, result};
        } else {
            const status = (err as any).status || 500;
            const result = {
                status,
                name: (err as any).name || "Internal Server Error",
                message: (err as any).message || JSON.stringify(err)
            };

            return {hasHandledError: true, status, result};
        }
    }

    return {hasHandledError: false};
}