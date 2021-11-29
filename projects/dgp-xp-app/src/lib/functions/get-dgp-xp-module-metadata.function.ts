import { Type } from "injection-js";
import { DgpXpModuleMetadata } from "../models";
import { getDecoratorMetadata } from "./get-decorator-metadata.function";

export function getDgpXpModuleMetadata(decoratedClass: Type): DgpXpModuleMetadata {
    return getDecoratorMetadata<DgpXpModuleMetadata>(decoratedClass);
}