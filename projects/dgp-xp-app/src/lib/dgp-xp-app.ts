import * as express from "express";
import { Application } from "express";
import * as cors from "cors";
import { CorsOptions } from "cors";
import * as swaggerUi from "swagger-ui-express";
import { SwaggerUiOptions } from "swagger-ui-express";
import { OptionsJson, OptionsUrlencoded } from "body-parser";
import { errorHandler } from "./error-handler";
import { removeRouteHandler } from "./remove-route-handler.function";
import { isNullOrUndefined } from "util";
import bodyParser = require("body-parser");

export type InitializationRequestHandler = (err: unknown, req: express.Request,
                                            res: express.Response, next: express.NextFunction) => express.Response | void;

export interface Environment {
    readonly isDevelopment?: boolean;
}

export interface AppConfig extends Environment {
    readonly appName: string;
    readonly assetsDir: string;
    readonly assetsRoute: string;
    readonly clientAppDir: string;
    readonly swaggerUIOptions: SwaggerUiOptions;
    readonly swaggerRoute: string;
    readonly swaggerJson: any;
    readonly bodyParserOptionsJson: OptionsJson;
    readonly bodyParserOptionsUrlEncoded: OptionsUrlencoded;
    readonly port: number;
    readonly corsOptions: CorsOptions;
    readonly initializationRequestHandler: InitializationRequestHandler;
}

export const defaultAppConfig = {
    appName: "Application",
    assetsRoute: "/assets",
    swaggerUIOptions: {
        customSiteTitle: "App",
        customfavIcon: "/assets/favicon.ico"
    },
    swaggerRoute: "/api/docs",
    bodyParserOptionsJson: {
        limit: "50mb"
    },
    bodyParserOptionsUrlEncoded: {extended: true},
    port: 3000
} as AppConfig;

export abstract class DgpXpApp<TAppConfig extends AppConfig = AppConfig> {

    private app: Application;

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
