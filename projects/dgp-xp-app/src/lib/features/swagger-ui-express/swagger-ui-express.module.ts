import { DgpXpModule } from "../../functions";
import { SwaggerUiExpressConfig } from "./models";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { SWAGGER_UI_EXPRESS_CONFIG } from "./constants";

@DgpXpModule({})
export class SwaggerUiExpressModule {

    static forRoot(payload: SwaggerUiExpressConfig): ModuleWithProviders<SwaggerUiExpressModule> {
        return {
            module: SwaggerUiExpressModule,
            providers: [{
                provide: SWAGGER_UI_EXPRESS_CONFIG,
                useValue: payload
            }]
        };
    }

}