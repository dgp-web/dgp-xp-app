import { AuthenticationModule, DgpXpModule, HttpClientModule, SwaggerUiModule, TsoaEngineModule } from "dgp-xp-app";
import { UserController } from "./app/controllers/user.controller";
import * as path from "path";
import { RegisterRoutes } from "../build/routes";

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
        AuthenticationModule
    ],
    controllers: [
        UserController
    ]
})
export class AppModule {
}