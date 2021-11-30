import * as express from "express";
import { Application } from "express";
import * as cors from "cors";
import * as swaggerUi from "swagger-ui-express";
import { errorHandler, removeRouteHandler } from "./functions";
import { isNullOrUndefined } from "util";
import { AppConfig } from "./models";
import bodyParser = require("body-parser");

// TODO: Extract InitializationModule

export abstract class DgpXpApp<TAppConfig extends AppConfig = AppConfig> {

    private expressApp: Application;

    // TODO: Compose appConfig via modules
    protected constructor(
        protected readonly config: TAppConfig
    ) {
        this.expressApp = express();

        this.expressApp.use(cors(this.config.corsOptions));


        // TODO: Do this only when the ClientHostModule is used
        this.expressApp.use(express.static(this.config.clientAppDir));

        // TODO: Do this only when the StaticFileHostModule is used
        this.expressApp.use(this.config.assetsRoute, express.static(this.config.assetsDir));

        this.expressApp.use(bodyParser.urlencoded(this.config.bodyParserOptionsUrlEncoded));
        this.expressApp.use(bodyParser.json(this.config.bodyParserOptionsJson));
    }

    start() {
        this.init$(this.expressApp).then(() => this.expressApp.listen(this.config.port, () => {
            console.log(this.config.appName + " has started.");
        }));
    }

    private async init$(app: Application) {

        // TODO: Do this only when the InitializationModule is used
        if (!isNullOrUndefined(this.config.initializationRequestHandler)) {
            app.use("*", this.config.initializationRequestHandler);
        }

        // TODO: Do this only when the OpenApiModule isUsed
        app.use(this.config.swaggerRoute, swaggerUi.serve,
            swaggerUi.setup(this.config.swaggerJson, this.config.swaggerUIOptions), async (_req, res) => {
                return res.send(swaggerUi.generateHTML(this.config.swaggerJson));
            });

        await this.initialize$(app);
        app.use(errorHandler);

        // TODO: Do this only when the ClientHostModule is used
        app.get("/*", (req, res) => {
            res.sendFile(this.config.clientAppDir + "/index.html");
        });

        // TODO: Do this only when the InitializationModule is used
        if (!isNullOrUndefined(this.config.initializationRequestHandler)) {
            removeRouteHandler(app, this.config.initializationRequestHandler.name);
        }
    }

    protected abstract initialize$(app: Application);

}
