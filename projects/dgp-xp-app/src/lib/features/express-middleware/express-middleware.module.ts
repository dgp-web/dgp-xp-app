import { DgpXpModule } from "../../functions";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { EXPRESS_MIDDLEWARE_CONFIG } from "./constants";
import { ExpressMiddlewareConfig } from "./models";

@DgpXpModule({})
export class ExpressMiddlewareModule {

    static forRoot(payload: ExpressMiddlewareConfig): ModuleWithProviders<ExpressMiddlewareModule> {
        return {
            module: ExpressMiddlewareModule,
            providers: [{
                provide: EXPRESS_MIDDLEWARE_CONFIG,
                useValue: payload
            }]
        };
    }

}