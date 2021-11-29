import { DgpXpModule, HttpClientModule } from "dgp-xp-app";

@DgpXpModule({
    imports: [
        HttpClientModule
    ],
    providers: []
})
export class AppModule {
}