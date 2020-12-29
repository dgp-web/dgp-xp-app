import * as path from "path";
import * as express from "express";
import { Application } from "express";
import * as cors from "cors";
import { CorsOptions } from "cors";
import * as swaggerUi from "swagger-ui-express";
import { SwaggerUiOptions } from "swagger-ui-express";
import { OptionsJson, OptionsUrlencoded } from "body-parser";
import { errorHandler } from "./error-handler";
import { removeRouteHandler } from "./remove-route-handler.function";
import bodyParser = require("body-parser");

export type InitializationRequestHandler = (err: unknown, req: express.Request,
                                            res: express.Response, next: express.NextFunction) => express.Response | void;

export interface AppConfig {
    readonly appName: string;
    readonly assetsDir: string;
    readonly assetsRoute: string;
    readonly clientAppPath: string;
    readonly swaggerUIOptions: SwaggerUiOptions;
    readonly swaggerRoute: string;
    readonly swaggerJson: any;
    readonly bodyParserOptionsJson: OptionsJson;
    readonly bodyParserOptionsUrlEncoded: OptionsUrlencoded;
    readonly port: number;
    readonly corsOptions: CorsOptions;
    readonly initializationRequestHandler: InitializationRequestHandler;
}

export const defaultAppConfig: Partial<AppConfig> = {
    appName: "Application",
    assetsDir: "./assets",
    assetsRoute: "/assets",
    swaggerUIOptions: {
        customSiteTitle: "App",
        customfavIcon: "/assets/favicon.ico"
    },
    swaggerRoute: "/docs",
    bodyParserOptionsJson: {
        limit: "50mb"
    },
    bodyParserOptionsUrlEncoded: {extended: true},
    port: 3000
};

export abstract class DgpXpApp<TAppConfig extends AppConfig = AppConfig> {

    private app: Application;

    protected constructor(
        protected readonly config: TAppConfig
    ) {
        this.app = express();

        const assetsDistPath = path.join(__dirname, this.config.assetsDir);

        this.app.use(cors(this.config.corsOptions));

        this.app.use(this.config.assetsRoute, express.static(assetsDistPath));
        this.app.use(bodyParser.urlencoded(this.config.bodyParserOptionsUrlEncoded));
        this.app.use(bodyParser.json(this.config.bodyParserOptionsJson));
    }

    start() {
        this.initialize$(this.app).then(() => this.app.listen(this.config.port, () => {
            console.log(this.config.appName + " has started.");
        }));
    }

    private async initialize$(app: Application) {
        const appDistPath = path.join(__dirname, this.config.clientAppPath);

        app.use("*", this.config.initializationRequestHandler);

        app.use(this.config.swaggerRoute, swaggerUi.serve,
            swaggerUi.setup(this.config.swaggerJson, this.config.swaggerUIOptions), async (_req, res) => {
                return res.send(swaggerUi.generateHTML(this.config.swaggerJson));
            });

        await this.init$(app);
        app.use(errorHandler);

        app.get("/*", (req, res) => {
            res.sendFile(appDistPath + "/index.html");
        });

        await this.runStartupTasks();
        removeRouteHandler(app, this.config.initializationRequestHandler.name);
    }

    protected abstract init$(app: Application);

    protected abstract runStartupTasks(): Promise<void>;

}
