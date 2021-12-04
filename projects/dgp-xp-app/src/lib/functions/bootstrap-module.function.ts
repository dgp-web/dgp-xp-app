import { Provider, ReflectiveInjector, Type } from "injection-js";
import { getNestedDgpXpModuleMetadata } from "./get-nested-dgp-xp-module-metadata.function";
import * as express from "express";
import { Application } from "express";
import { setRootInjector } from "./root-injector.functions";
import {
    CLIENT_HOST_CONFIG,
    ClientHostConfig,
    EXPRESS_MIDDLEWARE_CONFIG,
    ExpressInitializationService,
    ExpressMiddlewareConfig,
    SWAGGER_UI_EXPRESS_CONFIG,
    SwaggerUiExpressConfig,
    TSOA_ENGINE_CONFIG,
    TsoaEngineConfig
} from "../features";
import * as swaggerUi from "swagger-ui-express";
import { removeRouteHandler } from "./remove-route-handler.function";
import { APPLICATION } from "../constants";
import { STATIC_FILES_CONFIG, StaticFilesConfig } from "../features/static-files";

export const additionalProviders = new Array<Provider>();

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

    let rootInjector = ReflectiveInjector.resolveAndCreate([{
        provide: APPLICATION, useValue: expressApp
    },
        ...additionalProviders,
        ...metadata.providers,
        ...metadata.controllers
    ]);

    setRootInjector(rootInjector);

    metadata.controllers.forEach(controller => {
        rootInjector.resolveAndInstantiate(controller);
    });

    try {
        const staticFilesConfig = rootInjector.get(STATIC_FILES_CONFIG) as StaticFilesConfig;
        expressApp.use(staticFilesConfig.route, express.static(staticFilesConfig.staticFilesDirectory));
    } catch (e) {
        console.error(e);
    }

    try {
        const clientHostConfig = rootInjector.get(CLIENT_HOST_CONFIG) as ClientHostConfig;
        if (clientHostConfig.route) {
            expressApp.use(clientHostConfig.route, express.static(clientHostConfig.clientDirectory));
        } else {
            expressApp.use(express.static(clientHostConfig.clientDirectory));
        }
    } catch (e) {
        console.error(e);
    }

    try {
        const initializationConfig = rootInjector.get(EXPRESS_MIDDLEWARE_CONFIG) as ExpressMiddlewareConfig;
        if (initializationConfig.initializationRequestHandler) {
            expressApp.use("*", initializationConfig.initializationRequestHandler);
        }

        if (initializationConfig.initializationServiceProvider) {
            rootInjector = ReflectiveInjector.resolveAndCreate([initializationConfig.initializationServiceProvider], rootInjector);
        }

    } catch (e) {
        console.error(e);
    }

    /**
     * tryAddOpenApiToApp$
     */
    try {
        const openApiConfig = rootInjector.get(SWAGGER_UI_EXPRESS_CONFIG) as SwaggerUiExpressConfig
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

    try {
        const initializationConfig = rootInjector.get(EXPRESS_MIDDLEWARE_CONFIG) as ExpressMiddlewareConfig;

        if (initializationConfig.initializationServiceProvider) {
            const initializationService = rootInjector.get(initializationConfig.initializationServiceProvider.provide) as ExpressInitializationService;
            await initializationService.initialize$(expressApp);
        }

    } catch (e) {
        console.error(e);
    }

    try {
        const clientHostConfig = rootInjector.get(CLIENT_HOST_CONFIG) as ClientHostConfig;
        if (clientHostConfig.route) {
            expressApp.get(clientHostConfig.route + "/*", (req, res) => {
                res.sendFile(clientHostConfig.clientDirectory + "/index.html");
            });
        } else {
            expressApp.get("/*", (req, res) => {
                res.sendFile(clientHostConfig.clientDirectory + "/index.html");
            });
        }
    } catch (e) {
        console.error(e);
    }

    try {
        const initializationConfig = rootInjector.get(EXPRESS_MIDDLEWARE_CONFIG) as ExpressMiddlewareConfig;
        removeRouteHandler(expressApp, initializationConfig.initializationRequestHandler.name);
    } catch (e) {
        console.error(e);
    }

    return new Promise((resolve, reject) => {
        expressApp.listen(3000, () => resolve());
    });

}