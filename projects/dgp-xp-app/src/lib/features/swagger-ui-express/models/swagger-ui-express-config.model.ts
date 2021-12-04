import { SwaggerUiOptions } from "swagger-ui-express";

export interface SwaggerUiExpressConfig extends SwaggerUiOptions {
    readonly swaggerRoute: string;
    readonly swaggerJsonPath: string;
}