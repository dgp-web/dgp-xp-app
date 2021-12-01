import { Application } from "express";

export abstract class ConfigurationService {
    abstract configure$(app: Application): Promise<void>;
}