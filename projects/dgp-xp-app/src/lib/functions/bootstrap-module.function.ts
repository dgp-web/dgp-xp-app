import { ReflectiveInjector, Type } from "injection-js";
import { getNestedDgpXpModuleMetadata } from "./get-nested-dgp-xp-module-metadata.function";
import * as express from "express";
import { Application } from "express";
import { setRootInjector } from "./root-injector.functions";
import { OPEN_API_CONFIG, OpenApiConfig } from "../features";
import * as swaggerUi from "swagger-ui-express";

export async function bootstrapModule<TModule extends Type>(
    payload: TModule
): Promise<void> {

    const metadata = getNestedDgpXpModuleMetadata(payload);

    /**
     * Create express app
     */

    const expressApp: Application = express();


    // TODO: Check if swagger module is included

    /**
     * Create data handling
     */

    const rootInjector = ReflectiveInjector.resolveAndCreate([
        ...metadata.providers, ...metadata.controllers
    ]);

    setRootInjector(rootInjector);

    try {
        const openApiConfig = rootInjector.get(OPEN_API_CONFIG) as OpenApiConfig
        const swaggerJson = await import (openApiConfig.openApiJsonPath)

        expressApp.use(openApiConfig.openApiRoute, swaggerUi.serve,
            swaggerUi.setup(swaggerJson, openApiConfig), async (_req, res) => {
                return res.send(swaggerUi.generateHTML(swaggerJson));
            }
        );
    } catch (e) {
        console.error(e);
    }

    metadata.controllers.forEach(controller => {
        rootInjector.resolveAndInstantiate(controller);
    });

    return new Promise((resolve, reject) => {
        expressApp.listen(3000, () => resolve());
    });

}