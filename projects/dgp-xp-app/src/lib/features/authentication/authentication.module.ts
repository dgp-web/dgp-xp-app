import { DgpXpModule } from "../../functions";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { AuthenticationScheme } from "./models";
import { AUTHENTICATION_SCHEME } from "./constants";

@DgpXpModule({})
export class AuthenticationModule {

    static forRoot(payload: AuthenticationScheme): ModuleWithProviders<AuthenticationModule> {
        return {
            module: AuthenticationModule,
            providers: [{
                provide: AUTHENTICATION_SCHEME,
                useValue: payload
            }]
        };
    }


}
