import { Provider, Type } from "injection-js";

export interface ResolvedDgpXpModuleMetadata {
    readonly controllers?: ReadonlyArray<Type>;
    readonly providers?: ReadonlyArray<Provider>;
}