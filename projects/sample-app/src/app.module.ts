import { AuthenticationModule, DgpXpModule, HttpClientModule, SwaggerUiModule, TsoaEngineModule } from "dgp-xp-app";
import { UserController } from "./app/controllers/user.controller";
import * as path from "path";
import { RegisterRoutes } from "../build/routes";

@DgpXpModule({
    imports: [
        AuthenticationModule,
        HttpClientModule,
        SwaggerUiModule.forRoot({
            swaggerRoute: "/api/docs",
            swaggerJsonPath: path.join(__dirname, "../build/swagger.json")
        }),
        TsoaEngineModule.forRoot({
            registerRoutes: RegisterRoutes
        })
    ],
    providers: [],
    controllers: [
        UserController
    ]
})
export class AppModule {
}