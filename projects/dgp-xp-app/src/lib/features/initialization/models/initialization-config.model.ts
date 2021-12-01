import { InitializationRequestHandler } from "../../../models";
import { InitializationServiceProvider } from "./initialization-service-provider.model";
import { ConfigurationServiceProvider } from "./configuration-service-provider.model";

export interface InitializationConfig {
    readonly initializationRequestHandler: InitializationRequestHandler;
    readonly configurationServiceProvider?: ConfigurationServiceProvider;
    readonly initializationServiceProvider?: InitializationServiceProvider;
}

