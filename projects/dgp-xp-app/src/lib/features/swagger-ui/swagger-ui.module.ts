import { DgpXpModule } from "../../functions";
import { SwaggerUiConfig } from "./models";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { SWAGGER_UI_CONFIG } from "./constants";

@DgpXpModule({})
export class SwaggerUiModule {

    static forRoot(payload: SwaggerUiConfig): ModuleWithProviders<SwaggerUiModule> {
        return {
            module: SwaggerUiModule,
            providers: [{
                provide: SWAGGER_UI_CONFIG,
                useValue: payload
            }]
        };
    }

}