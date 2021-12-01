import { DgpXpModule } from "../../functions";
import { HttpClient } from "./services";

@DgpXpModule({
    providers: [
        HttpClient
    ]
})
export class HttpClientModule {
}
