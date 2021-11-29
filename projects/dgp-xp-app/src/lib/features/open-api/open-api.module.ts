import { DgpXpModule } from "../../functions";
import { Provider, Type } from "injection-js";
import { OpenApiConfig } from "./models";

export interface ModuleWithProviders<TModule> {
    module: Type<TModule>;
    providers?: Provider[];
}

@DgpXpModule({})
export class OpenApiModule {

    static forRoot(payload: OpenApiConfig): ModuleWithProviders<OpenApiModule> {
        return {
            module: OpenApiModule
        };
    }

}