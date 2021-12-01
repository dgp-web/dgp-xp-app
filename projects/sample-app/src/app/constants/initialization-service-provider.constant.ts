import { InitializationService, InitializationServiceProvider } from "dgp-xp-app";
import { InitializationServiceImpl } from "../services/initialization.service";

export const initializationServiceProvider: InitializationServiceProvider = {
    provide: InitializationService,
    useClass: InitializationServiceImpl
};