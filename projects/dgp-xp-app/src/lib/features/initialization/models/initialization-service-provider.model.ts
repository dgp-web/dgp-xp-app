import { InitializationService } from "../services";
import { Type } from "injection-js";

export interface InitializationServiceProvider {
    readonly provide: any;
    readonly useClass: Type<InitializationService>;
}