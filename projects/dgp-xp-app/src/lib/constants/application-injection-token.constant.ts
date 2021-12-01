import { InjectionToken } from "injection-js";
import { Application } from "express";

export const APPLICATION = new InjectionToken<Application>("application");