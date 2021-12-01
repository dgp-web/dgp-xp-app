import { Provider } from "injection-js";
import { additionalProviders, bootstrapModule } from "./bootstrap-module.function";

export function platformExpress(providers?: ReadonlyArray<Provider>) {

    if (providers) {
        providers.forEach(x => additionalProviders.push(x));
    }

    return {bootstrapModule};
}