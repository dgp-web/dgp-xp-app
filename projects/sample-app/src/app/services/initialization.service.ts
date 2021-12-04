import { ExpressInitializationService } from "dgp-xp-app";
import { Application } from "express";

export class InitializationServiceImpl extends ExpressInitializationService {
    async initialize$(app: Application): Promise<void> {

    }
}