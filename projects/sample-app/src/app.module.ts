import { AuthenticationModule, DgpXpModule, HttpClientModule, OpenApiModule } from "dgp-xp-app";
import { UserController } from "./app/controllers/user.controller";

@DgpXpModule({
    imports: [
        AuthenticationModule,
        HttpClientModule,
        OpenApiModule.forRoot({
            openApiJsonPath: "../../swagger.json"
        })
    ],
    providers: [],
    controllers: [
        UserController
    ]
})
export class AppModule {
}