import { InjectionToken } from "injection-js";
import { Application } from "express";

export const EXPRESS_APPLICATION = new InjectionToken<Application>("ExpressApplication");