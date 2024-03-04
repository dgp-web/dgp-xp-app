import { DemoAppConfig } from "./models/app-config.model";
import { ReflectiveInjector } from "injection-js";
import { Application } from "express";
import { UserController } from "./controllers/user.controller";
import { RegisterRoutes } from "../../build/routes";
import { DgpXpApp, setRootInjector } from "dgp-xp-app";
import { UserService } from "./services/user.service";

export class App extends DgpXpApp<DemoAppConfig> {

    private rootInjector: ReflectiveInjector;

    async initialize$(app: Application) {

        this.rootInjector = ReflectiveInjector.resolveAndCreate([
            UserController,
            UserService
        ]);

        setRootInjector(this.rootInjector);

        RegisterRoutes(app);

        await this.runStartupTasks();

    }

    runStartupTasks() {
        return Promise.resolve();
    }

}
