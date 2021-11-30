import { DgpXpModule } from "../../functions";
import { OpenApiConfig } from "./models";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { OPEN_API_CONFIG } from "./constants";

@DgpXpModule({})
export class OpenApiModule {

    static forRoot(payload: OpenApiConfig): ModuleWithProviders<OpenApiModule> {
        return {
            module: OpenApiModule,
            providers: [{
                provide: OPEN_API_CONFIG,
                useValue: payload
            }]
        };
    }

}