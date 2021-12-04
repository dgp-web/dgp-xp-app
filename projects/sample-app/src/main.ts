import {platformServer} from "dgp-xp-app";
import "./polyfills";
import {AppModule} from "./app.module";
// TODO: ConfigurationService configure$(app: Application)

platformServer([])
    .bootstrapModule(AppModule)
    .then(() => console.log("Sample app has started."));
