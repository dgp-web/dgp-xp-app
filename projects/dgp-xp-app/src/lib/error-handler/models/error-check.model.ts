import { ErrorCheckResult } from "./error-check-result.model";
import { ErrorCheckPayload } from "./error-check-payload.model";

export type ErrorCheck = (payload: ErrorCheckPayload) => ErrorCheckResult;