import "./polyfills";
import { App } from "./app/app";
import { defaultAppConfig } from "dgp-xp-app";

import("../build/swagger.json").then(swaggerJson => {

    const app = new App({
        ...defaultAppConfig,
        isDevelopment: true,
        assetsDir: "./src/app/assets",
        clientAppDir: "client",
        swaggerUIOptions: {
            ...defaultAppConfig.swaggerUIOptions,
            customSiteTitle: "Demo API"
        },
        swaggerRoute: "/api/docs",
        swaggerJson,
    });

    app.start();
});