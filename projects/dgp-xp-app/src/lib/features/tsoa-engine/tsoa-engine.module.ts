import { DgpXpModule } from "../../functions";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { TsoaEngineConfig } from "./models";
import { TSOA_ENGINE_CONFIG } from "./constants";

@DgpXpModule({})
export class TsoaEngineModule {

    static forRoot(payload: TsoaEngineConfig): ModuleWithProviders<TsoaEngineModule> {
        return {
            module: TsoaEngineModule,
            providers: [{
                provide: TSOA_ENGINE_CONFIG,
                useValue: payload
            }]
        };
    }

}