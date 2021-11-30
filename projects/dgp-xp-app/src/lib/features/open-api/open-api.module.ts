import { DgpXpModule } from "../../functions";
import { OpenApiConfig } from "./models";
import { ModuleWithProviders } from "../../models/module-with-providers.model";

@DgpXpModule({})
export class OpenApiModule {

    static forRoot(payload: OpenApiConfig): ModuleWithProviders<OpenApiModule> {
        return {
            module: OpenApiModule
        };
    }

}