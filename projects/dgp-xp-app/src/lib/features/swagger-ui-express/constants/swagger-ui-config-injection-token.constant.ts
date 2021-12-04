import { InjectionToken } from "injection-js";
import { SwaggerUiExpressConfig } from "../models";

export const SWAGGER_UI_EXPRESS_CONFIG = new InjectionToken<SwaggerUiExpressConfig>("SwaggerUiExpressConfig");