import { InitializationRequestHandler } from "../../../models";
import { InitializationServiceProvider } from "./initialization-service-provider.model";

export interface InitializationConfig {
    readonly initializationRequestHandler: InitializationRequestHandler;
    readonly initializationServiceProvider?: InitializationServiceProvider;
}

