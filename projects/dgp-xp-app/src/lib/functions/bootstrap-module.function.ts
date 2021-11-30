import { ReflectiveInjector, Type } from "injection-js";
import { getNestedDgpXpModuleMetadata } from "./get-nested-dgp-xp-module-metadata.function";
import * as express from "express";
import { Application } from "express";
import { setRootInjector } from "./root-injector.functions";
import { SWAGGER_UI_CONFIG, SwaggerUiConfig, TSOA_ENGINE_CONFIG, TsoaEngineConfig } from "../features";
import * as swaggerUi from "swagger-ui-express";

export async function bootstrapModule<TModule extends Type>(
    payload: TModule
): Promise<void> {

    const metadata = getNestedDgpXpModuleMetadata(payload);

    /**
     * Create express app
     */

    const expressApp: Application = express();

    /**
     * Create data handling
     */

    const rootInjector = ReflectiveInjector.resolveAndCreate([
        ...metadata.providers, ...metadata.controllers
    ]);

    setRootInjector(rootInjector);

    metadata.controllers.forEach(controller => {
        rootInjector.resolveAndInstantiate(controller);
    });

    /**
     * tryAddOpenApiToApp$
     */
    try {
        const openApiConfig = rootInjector.get(SWAGGER_UI_CONFIG) as SwaggerUiConfig
        const swaggerJson = await import (openApiConfig.swaggerJsonPath)

        expressApp.use(openApiConfig.swaggerRoute, swaggerUi.serve,
            swaggerUi.setup(swaggerJson, openApiConfig), async (_req, res) => {
                return res.send(swaggerUi.generateHTML(swaggerJson));
            }
        );

    } catch (e) {
        console.error(e);
    }

    try {
        const tsoaEngineConfig = rootInjector.get(TSOA_ENGINE_CONFIG) as TsoaEngineConfig;
        tsoaEngineConfig.registerRoutes(expressApp);
    } catch (e) {
        console.error(e);
    }

    return new Promise((resolve, reject) => {
        expressApp.listen(3000, () => resolve());
    });

}