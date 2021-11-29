import { AuthenticationModule, DgpXpModule, HttpClientModule, OpenApiModule } from "dgp-xp-app";

@DgpXpModule({
    imports: [
        AuthenticationModule,
        HttpClientModule,
        OpenApiModule.forRoot({
            openApiJsonPath: "../../swagger.json"
        })
    ],
    providers: []
})
export class AppModule {
}