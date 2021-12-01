import { platformExpress } from "dgp-xp-app";
import "./polyfills";
import { AppModule } from "./app.module";
// TODO: platformExpress([<providers> for AppConfig])
// TODO: ConfigurationService configure$(app: Application)

platformExpress([])
    .bootstrapModule(AppModule)
    .then(() => console.log("Sample app has started."));
