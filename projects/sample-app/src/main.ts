import { bootstrapModule } from "dgp-xp-app";
import "./polyfills";
import { AppModule } from "./app.module";

bootstrapModule(AppModule)
    .then(() => console.log("Sample app has started."));

/*
const app = new App({isDevelopment: true});
app.init$().then(() => console.log("Sample app has started."));
*/
