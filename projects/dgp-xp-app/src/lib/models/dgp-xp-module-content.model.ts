import {Provider} from "injection-js";

export interface DgpXpModuleContent {
    readonly imports?: ReadonlyArray<any>;
    readonly providers?: ReadonlyArray<Provider>;
}
