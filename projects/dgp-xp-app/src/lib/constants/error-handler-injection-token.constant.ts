import { InjectionToken } from "injection-js";
import { ErrorHandler } from "../models/error-handler.model";

export const ERROR_HANDLER = new InjectionToken<ErrorHandler>("ErrorHandler");