import { Provider, Type } from "injection-js";

export interface DgpXpModuleMetadata {
    readonly controllers?: ReadonlyArray<Type>;
    readonly imports?: ReadonlyArray<any>;
    readonly providers?: ReadonlyArray<Provider>;
}

