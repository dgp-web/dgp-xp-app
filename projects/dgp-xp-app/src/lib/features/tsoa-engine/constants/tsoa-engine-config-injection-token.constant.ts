import { InjectionToken } from "injection-js";
import { TsoaEngineConfig } from "../models";

export const TSOA_ENGINE_CONFIG = new InjectionToken<TsoaEngineConfig>("TsoaEngineConfig");