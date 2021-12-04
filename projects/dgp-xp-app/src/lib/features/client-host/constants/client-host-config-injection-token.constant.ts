import { InjectionToken } from "injection-js";
import { ClientHostConfig } from "../models";

export const CLIENT_HOST_CONFIG = new InjectionToken<ClientHostConfig>("ClientHostConfig");
