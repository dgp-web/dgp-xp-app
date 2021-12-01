import { Application } from "express";

export abstract class InitializationService {
    abstract initialize$(app: Application): Promise<void>;
}