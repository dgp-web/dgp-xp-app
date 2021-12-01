import { InjectionToken } from "injection-js";
import { Environment } from "../models/environment.model";

export const ENVIRONMENT = new InjectionToken<Environment>("Environment");