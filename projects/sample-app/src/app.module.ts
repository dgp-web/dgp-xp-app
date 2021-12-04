import {
    DgpXpModule,
    ExpressMiddlewareModule,
    HttpClientModule,
    SwaggerUiExpressModule,
    TsoaEngineModule,
    TsoaExpressAuthenticationModule
} from "dgp-xp-app";
import { UserController } from "./app/controllers/user.controller";
import * as path from "path";
import { RegisterRoutes } from "../build/routes";
import { http503ServiceUnavailableTemplate } from "./app/util/http-503-service-unavailable-template";
import { initializationServiceProvider } from "./app/constants/initialization-service-provider.constant";
import { authentication } from "./app/constants/authentication.constant";
import { configurationServiceProvider } from "./app/constants/configuration-service-provider.constant";

@DgpXpModule({
    imports: [
        ExpressMiddlewareModule.forRoot({
            initializationRequestHandler: (err, req, res) => {
                res.status(503);
                res.send(http503ServiceUnavailableTemplate);
            },
            configurationServiceProvider,
            initializationServiceProvider
        }),
        TsoaEngineModule.forRoot({
            registerRoutes: RegisterRoutes
        }),
        TsoaExpressAuthenticationModule.forRoot(authentication),
        SwaggerUiExpressModule.forRoot({
            swaggerRoute: "/api/docs",
            swaggerJsonPath: path.join(__dirname, "../build/swagger.json")
        }),
        HttpClientModule
    ],
    controllers: [
        UserController
    ]
})
export class AppModule {
}