import { InjectionToken } from "injection-js";
import { ExpressMiddlewareConfig } from "../models";

export const EXPRESS_MIDDLEWARE_CONFIG = new InjectionToken<ExpressMiddlewareConfig>("ExpressMiddlewareConfig");
