import { ErrorCheckResultWithHandling } from "./error-check-result-with-handling.model";
import { ErrorCheckResultWithoutHandling } from "./error-check-result-without-handling.model";

export type ErrorCheckResult = ErrorCheckResultWithHandling | ErrorCheckResultWithoutHandling;