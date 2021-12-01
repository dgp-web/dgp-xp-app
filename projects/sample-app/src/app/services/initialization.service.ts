import { InitializationService } from "dgp-xp-app";
import { Application } from "express";

export class InitializationServiceImpl extends InitializationService {
    async initialize$(app: Application): Promise<void> {
        console.log(app);
    }
}