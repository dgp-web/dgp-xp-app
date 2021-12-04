import { ExpressInitializationService } from "../services";
import { Type } from "injection-js";

export interface ExpressInitializationServiceProvider {
    readonly provide: any;
    readonly useClass: Type<ExpressInitializationService>;
}