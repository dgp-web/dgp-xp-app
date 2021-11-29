import {Provider} from "injection-js";

export interface DgpXpModuleContent {
    readonly imports?: ReadonlyArray<DgpXpModuleContent>;
    readonly providers?: ReadonlyArray<Provider>;
}
