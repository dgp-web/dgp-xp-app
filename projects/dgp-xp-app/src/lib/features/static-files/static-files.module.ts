import { DgpXpModule } from "../../functions/dgp-xp-module.function";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { StaticFilesConfig } from "./models";
import { STATIC_FILES_CONFIG } from "./constants";

@DgpXpModule({})
export class StaticFilesModule {

    static forRoot(config: StaticFilesConfig): ModuleWithProviders<StaticFilesModule> {
        return {
            module: StaticFilesModule,
            providers: [{
                provide: STATIC_FILES_CONFIG,
                useValue: config
            }]
        };
    }

}