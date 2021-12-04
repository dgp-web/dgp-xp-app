import { InitializationRequestHandler } from "../../../models";
import { ExpressInitializationServiceProvider } from "./express-initialization-service-provider.model";
import { ExpressConfigurationServiceProvider } from "./express-configuration-service-provider.model";

export interface ExpressMiddlewareConfig {
    readonly initializationRequestHandler: InitializationRequestHandler;
    readonly configurationServiceProvider?: ExpressConfigurationServiceProvider;
    readonly initializationServiceProvider?: ExpressInitializationServiceProvider;
}

