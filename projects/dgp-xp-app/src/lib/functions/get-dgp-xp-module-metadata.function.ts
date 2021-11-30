import { Type } from "injection-js";
import { DgpXpModuleMetadata, ModuleOrModuleWithProviders } from "../models";
import { getDecoratorMetadata } from "./get-decorator-metadata.function";
import { ModuleWithProviders } from "../models/module-with-providers.model";

export function getDgpXpModuleMetadata(payload: ModuleOrModuleWithProviders): DgpXpModuleMetadata {

    let metadata = getDecoratorMetadata<DgpXpModuleMetadata>(payload as Type);
    if (!metadata) metadata = getDecoratorMetadata<DgpXpModuleMetadata>((payload as ModuleWithProviders<Type>).module);

    return metadata;
}