import "./polyfills";
import { App } from "./app/app";

const app = new App({isDevelopment: true});
app.init$().then(() => console.log("Sample app has started."));
