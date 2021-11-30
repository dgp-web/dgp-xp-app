import { Provider, Type } from "injection-js";

export interface ModuleWithProviders<TModule> {
    readonly module: Type<TModule>;
    readonly providers?: Provider[];
}