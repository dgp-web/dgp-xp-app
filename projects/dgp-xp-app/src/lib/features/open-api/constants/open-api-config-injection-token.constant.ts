import { InjectionToken } from "injection-js";
import { OpenApiConfig } from "../models";

export const OPEN_API_CONFIG = new InjectionToken<OpenApiConfig>("OpenApiConfig");