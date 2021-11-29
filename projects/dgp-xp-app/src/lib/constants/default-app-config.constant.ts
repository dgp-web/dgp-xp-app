import { AppConfig } from "../models/app-config.model";

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