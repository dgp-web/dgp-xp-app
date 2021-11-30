import { SwaggerUiOptions } from "swagger-ui-express";

export interface OpenApiConfig extends SwaggerUiOptions {
    readonly openApiRoute: string;
    readonly openApiJsonPath: string;
}