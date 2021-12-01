import { DgpXpModule } from "../../functions";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { INITIALIZATION_CONFIG } from "./constants";
import { InitializationConfig } from "./models";

@DgpXpModule({})
export class InitializationModule {

    static forRoot(payload: InitializationConfig): ModuleWithProviders<InitializationModule> {
        return {
            module: InitializationModule,
            providers: [{
                provide: INITIALIZATION_CONFIG,
                useValue: payload
            }]
        };
    }

}