import { ExpressConfigurationService } from "../services";
import { Type } from "injection-js";

export interface ExpressConfigurationServiceProvider {
    readonly provide: any;
    readonly useClass: Type<ExpressConfigurationService>;
}