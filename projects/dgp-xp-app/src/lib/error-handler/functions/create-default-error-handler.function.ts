import { createErrorHandler } from "./create-error-handler.function";
import { default422ErrorCheck } from "../constants/default-422-error-check.constant";
import { defaultErrorCheck } from "../constants/default-error-check.constant";

export function createDefaultErrorHandler() {
    return createErrorHandler({
        errorChecks: [default422ErrorCheck, defaultErrorCheck]
    });
}