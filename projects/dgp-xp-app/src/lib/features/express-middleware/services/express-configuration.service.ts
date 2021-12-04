import { Application } from "express";

export abstract class ExpressConfigurationService {
    abstract configure$(app: Application): Promise<void>;
}