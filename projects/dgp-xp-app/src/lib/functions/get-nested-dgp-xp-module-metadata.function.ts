import { ModuleOrModuleWithProviders, ResolvedDgpXpModuleMetadata } from "../models";
import { Mutable } from "data-modeling";
import { getDgpXpModuleMetadata } from "./get-dgp-xp-module-metadata.function";

export function getNestedDgpXpModuleMetadata(
    decoratedClass: ModuleOrModuleWithProviders,
    result: Mutable<ResolvedDgpXpModuleMetadata> = {
        controllers: [],
        providers: []
    }): ResolvedDgpXpModuleMetadata {

    const metadata = getDgpXpModuleMetadata(decoratedClass);

    if (metadata.controllers) result.controllers = result.controllers.concat(metadata.controllers);
    if (metadata.providers) result.providers = result.providers.concat(metadata.providers);

    if (metadata.imports) {
        metadata.imports.forEach(type => {
            getNestedDgpXpModuleMetadata(type, result);
        });
    }

    return result as unknown as ResolvedDgpXpModuleMetadata;
}