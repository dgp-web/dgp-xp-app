import { InjectionToken } from "injection-js";
import { InitializationConfig } from "../models";

export const INITIALIZATION_CONFIG = new InjectionToken<InitializationConfig>("InitializationConfig");
