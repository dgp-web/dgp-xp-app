import { ConfigurationService } from "../services";
import { Type } from "injection-js";

export interface ConfigurationServiceProvider {
    readonly provide: any;
    readonly useClass: Type<ConfigurationService>;
}