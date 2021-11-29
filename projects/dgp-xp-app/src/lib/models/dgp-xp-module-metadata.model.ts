import {Provider} from "injection-js";

export interface DgpXpModuleMetadata {
    readonly imports?: ReadonlyArray<any>;
    readonly providers?: ReadonlyArray<Provider>;
}
