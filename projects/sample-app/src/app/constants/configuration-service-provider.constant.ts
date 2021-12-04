import { ExpressConfigurationService, ExpressConfigurationServiceProvider } from "dgp-xp-app";
import { ConfigurationServiceImpl } from "../services/configuration.service";

export const configurationServiceProvider: ExpressConfigurationServiceProvider = {
    provide: ExpressConfigurationService,
    useClass: ConfigurationServiceImpl
};