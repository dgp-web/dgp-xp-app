import { ExpressInitializationService, ExpressInitializationServiceProvider } from "dgp-xp-app";
import { InitializationServiceImpl } from "../services/initialization.service";

export const initializationServiceProvider: ExpressInitializationServiceProvider = {
    provide: ExpressInitializationService,
    useClass: InitializationServiceImpl
};