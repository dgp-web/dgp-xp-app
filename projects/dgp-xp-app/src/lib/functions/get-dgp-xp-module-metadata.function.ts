import { Type } from "injection-js";
import { DgpXpModuleMetadata, ModuleOrModuleWithProviders } from "../models";
import { getDecoratorMetadata } from "./get-decorator-metadata.function";
import { ModuleWithProviders } from "../models/module-with-providers.model";

export function getDgpXpModuleMetadata(payload: ModuleOrModuleWithProviders): DgpXpModuleMetadata {

    let metadata = getDecoratorMetadata<DgpXpModuleMetadata>(payload as Type);
    if (!metadata) {
        const moduleWithProviders = payload as ModuleWithProviders<Type>;
        metadata = getDecoratorMetadata<DgpXpModuleMetadata>(moduleWithProviders.module);

        if (!metadata.providers) (metadata as any).providers = [];

        (metadata as any).providers = metadata.providers.concat(moduleWithProviders.providers);
    }

    return metadata;
}