import { AuthenticationModule, DgpXpModule, HttpClientModule, SwaggerUiModule, TsoaEngineModule, InitializationModule } from "dgp-xp-app";
import { UserController } from "./app/controllers/user.controller";
import * as path from "path";
import { RegisterRoutes } from "../build/routes";
import { http503ServiceUnavailableTemplate } from "./app/util/http-503-service-unavailable-template";

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
        AuthenticationModule,
        InitializationModule.forRoot({
            initializationRequestHandler: (err, req, res) => {
                res.status(503);
                res.send(http503ServiceUnavailableTemplate);
            }
        })
    ],
    controllers: [
        UserController
    ]
})
export class AppModule {
}