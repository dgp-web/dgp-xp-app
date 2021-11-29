import "./polyfills";
import { App } from "./app/app";

import { DgpXpModule } from "dgp-xp-app";

@DgpXpModule({
    providers: []
})
export class AppModule {

}

const app = new App({isDevelopment: true});
app.init$().then(() => console.log("Sample app has started."));
