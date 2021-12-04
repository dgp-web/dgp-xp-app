import { InjectionToken } from "injection-js";
import { StaticFilesConfig } from "../models";

export const STATIC_FILES_CONFIG = new InjectionToken<StaticFilesConfig>("StaticFilesConfig");