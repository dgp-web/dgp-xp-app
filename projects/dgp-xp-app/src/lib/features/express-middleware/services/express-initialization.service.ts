import { Application } from "express";

export abstract class ExpressInitializationService {
    abstract initialize$(app: Application): Promise<void>;
}