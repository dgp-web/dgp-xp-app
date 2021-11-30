import { AuthenticationModule, DgpXpModule, HttpClientModule, OpenApiModule } from "dgp-xp-app";
import { UserController } from "./app/controllers/user.controller";
import * as path from "path";

@DgpXpModule({
    imports: [
        AuthenticationModule,
        HttpClientModule,
        OpenApiModule.forRoot({
            openApiRoute: "/api/docs",
            openApiJsonPath: path.join(__dirname, "../build/swagger.json")
        })
    ],
    providers: [],
    controllers: [
        UserController
    ]
})
export class AppModule {
}