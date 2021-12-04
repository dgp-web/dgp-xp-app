import { DgpXpModule } from "../../functions/dgp-xp-module.function";
import { ClientHostConfig } from "./models";
import { ModuleWithProviders } from "../../models/module-with-providers.model";
import { CLIENT_HOST_CONFIG } from "./constants";

@DgpXpModule({})
export class ClientHostModule {

    static forRoot(payload: ClientHostConfig): ModuleWithProviders<ClientHostModule> {
        return {
            module: ClientHostModule,
            providers: [{
                provide: CLIENT_HOST_CONFIG,
                useValue: payload
            }]
        };
    }

}
