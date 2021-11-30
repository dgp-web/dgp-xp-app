import { Application } from "express";

export interface TsoaEngineConfig {
    readonly registerRoutes: (app: Application) => void;
}