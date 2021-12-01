import { AuthenticationModule, DgpXpModule, HttpClientModule, InitializationModule, SwaggerUiModule, TsoaEngineModule } from "dgp-xp-app";
import { UserController } from "./app/controllers/user.controller";
import * as path from "path";
import { RegisterRoutes } from "../build/routes";
import { http503ServiceUnavailableTemplate } from "./app/util/http-503-service-unavailable-template";
import { initializationServiceProvider } from "./app/constants/initialization-service-provider.constant";
import { authentication } from "./app/constants/authentication.constant";

// TODO: EffectsModule, EntityDbModule

@DgpXpModule({
    imports: [
        TsoaEngineModule.forRoot({
            registerRoutes: RegisterRoutes
        }),
        SwaggerUiModule.forRoot({
            swaggerRoute: "/api/docs",
            swaggerJsonPath: path.join(__dirname, "../build/swagger.json")
        }),
        HttpClientModule,
        AuthenticationModule.forRoot(authentication),
        InitializationModule.forRoot({
            initializationRequestHandler: (err, req, res) => {
                res.status(503);
                res.send(http503ServiceUnavailableTemplate);
            },
            initializationServiceProvider
        })
    ],
    controllers: [
        UserController
    ]
})
export class AppModule {
}