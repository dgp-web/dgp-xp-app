import { AppConfig } from "./models/app-config.model";
import { ReflectiveInjector } from "injection-js";
import * as swaggerUi from "swagger-ui-express";
import { Application } from "express";
import { initializationRequestHandler } from "./util/initialization-request-handler";
import { removeStartupRoute } from "./util/remove-startup-route.function";
import { UserController } from "./controllers/user.controller";
import { RegisterRoutes } from "../../build/routes";
import { setRootInjector } from "../../../dgp-xp-app/src/public-api";
import express = require("express");
import bodyParser = require("body-parser");

const cors = require("cors");

export class App {

    private rootInjector: ReflectiveInjector;

    constructor(
        private readonly config: AppConfig
    ) {
    }

    async init$(): Promise<void> {
        const app: Application = express();

        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json({limit: "50mb"}));

        app.use("*", initializationRequestHandler);

        this.rootInjector = ReflectiveInjector.resolveAndCreate([
            UserController
        ]);

        setRootInjector(this.rootInjector);

        const options: swaggerUi.SwaggerUiOptions = {
            customSiteTitle: "Sample app",
            customfavIcon: "/assets/favicon.ico"
        };

        app.use("/docs", swaggerUi.serve, swaggerUi.setup(await import("../../build/swagger.json"), options), async (_req, res) => {

            return res.send(
                swaggerUi.generateHTML(await import("../../build/swagger.json"))
            );
        });

        RegisterRoutes(app);

        app.listen(3000, () => {

        });

        await this.runStartupTasks();

        removeStartupRoute(app, initializationRequestHandler.name);

    }

    runStartupTasks() {
        return Promise.resolve();
    }

}
