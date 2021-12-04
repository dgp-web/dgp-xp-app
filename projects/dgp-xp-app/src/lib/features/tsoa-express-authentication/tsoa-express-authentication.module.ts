import { DgpXpModule } from "../../functions";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { TsoaExpressAuthenticationScheme } from "./models";
import { TSOA_EXPRESS_AUTHENTICATION_SCHEME } from "./constants";

@DgpXpModule({})
export class TsoaExpressAuthenticationModule {

    static forRoot(payload: TsoaExpressAuthenticationScheme): ModuleWithProviders<TsoaExpressAuthenticationModule> {
        return {
            module: TsoaExpressAuthenticationModule,
            providers: [{
                provide: TSOA_EXPRESS_AUTHENTICATION_SCHEME,
                useValue: payload
            }]
        };
    }


}
