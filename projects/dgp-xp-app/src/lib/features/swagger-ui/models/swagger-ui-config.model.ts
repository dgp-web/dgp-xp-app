import { SwaggerUiOptions } from "swagger-ui-express";

export interface SwaggerUiConfig extends SwaggerUiOptions {
    readonly swaggerRoute: string;
    readonly swaggerJsonPath: string;
}