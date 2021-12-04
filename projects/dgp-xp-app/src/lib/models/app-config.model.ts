import { Environment } from "./environment.model";
import { SwaggerUiOptions } from "swagger-ui-express";
import { OptionsJson, OptionsUrlencoded } from "body-parser";
import { ExpressMiddlewareConfig } from "../features/express-middleware/models/express-middleware-config";

export interface OpenApiConfig {
    readonly swaggerUIOptions: SwaggerUiOptions;
    readonly swaggerRoute: string;
    readonly swaggerJson: any;
}

export interface BodyParseConfig {
    readonly bodyParserOptionsJson: OptionsJson;
    readonly bodyParserOptionsUrlEncoded: OptionsUrlencoded;
}

export interface AssetsConfig {
    readonly assetsDir: string;
    readonly assetsRoute: string;
}

export interface ClientHost {
    readonly clientAppDir: string;
}

export interface AppMetadata {
    readonly appName: string;
}

export interface AppHostingOptions {
    readonly port: number;
}

export interface WithCorsOptions {
    readonly corsOptions: any;
}

export interface AppConfig extends AppMetadata,
    WithCorsOptions,
    ExpressMiddlewareConfig,
    ClientHost,
    Environment,
    OpenApiConfig,
    AssetsConfig,
    BodyParseConfig,
    AppHostingOptions {

}