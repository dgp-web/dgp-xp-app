import { Environment } from "./environment.model";
import { SwaggerUiOptions } from "swagger-ui-express";
import { OptionsJson, OptionsUrlencoded } from "body-parser";
import * as cors from "cors";
import { InitializationRequestHandler } from "./initialization-request-handler.model";

export interface AppConfig extends Environment {
    readonly appName: string;
    readonly assetsDir: string;
    readonly assetsRoute: string;
    readonly clientAppDir: string;
    readonly swaggerUIOptions: SwaggerUiOptions;
    readonly swaggerRoute: string;
    readonly swaggerJson: any;
    readonly bodyParserOptionsJson: OptionsJson;
    readonly bodyParserOptionsUrlEncoded: OptionsUrlencoded;
    readonly port: number;
    readonly corsOptions: any;
    readonly initializationRequestHandler: InitializationRequestHandler;
}