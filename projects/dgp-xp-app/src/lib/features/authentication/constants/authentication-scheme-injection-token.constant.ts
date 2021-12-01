import { InjectionToken } from "injection-js";
import { AuthenticationScheme } from "../models";

export const AUTHENTICATION_SCHEME = new InjectionToken<AuthenticationScheme>("AuthenticationScheme");
