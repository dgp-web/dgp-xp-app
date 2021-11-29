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

    private app: Application;

    // TODO: Compose appConfig via modules
    protected constructor(
        protected readonly config: TAppConfig
    ) {
        this.app = express();

        this.app.use(cors(this.config.corsOptions));

        this.app.use(express.static(this.config.clientAppDir));
        this.app.use(this.config.assetsRoute, express.static(this.config.assetsDir));
        this.app.use(bodyParser.urlencoded(this.config.bodyParserOptionsUrlEncoded));
        this.app.use(bodyParser.json(this.config.bodyParserOptionsJson));
    }

    start() {
        this.init$(this.app).then(() => this.app.listen(this.config.port, () => {
            console.log(this.config.appName + " has started.");
        }));
    }

    private async init$(app: Application) {

        if (!isNullOrUndefined(this.config.initializationRequestHandler)) {
            app.use("*", this.config.initializationRequestHandler);
        }

        app.use(this.config.swaggerRoute, swaggerUi.serve,
            swaggerUi.setup(this.config.swaggerJson, this.config.swaggerUIOptions), async (_req, res) => {
                return res.send(swaggerUi.generateHTML(this.config.swaggerJson));
            });

        await this.initialize$(app);
        app.use(errorHandler);

        app.get("/*", (req, res) => {
            res.sendFile(this.config.clientAppDir + "/index.html");
        });

        if (!isNullOrUndefined(this.config.initializationRequestHandler)) {
            removeRouteHandler(app, this.config.initializationRequestHandler.name);
        }
    }

    protected abstract initialize$(app: Application);

}
