import { InjectionToken } from "injection-js";
import { SwaggerUiConfig } from "../models";

export const SWAGGER_UI_CONFIG = new InjectionToken<SwaggerUiConfig>("SwaggerUiConfig");