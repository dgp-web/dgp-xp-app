import { ExpressConfigurationService } from "dgp-xp-app";
import { Application } from "express";

export class ConfigurationServiceImpl extends ExpressConfigurationService {
    async configure$(app: Application): Promise<void> {

    }
}