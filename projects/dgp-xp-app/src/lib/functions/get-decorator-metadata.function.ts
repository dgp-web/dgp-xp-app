import { Type } from "injection-js";
import { decoratorMetadataKVS } from "../constants";

export function getDecoratorMetadata<TMetadata>(decoratedClass: Type): TMetadata {
    return decoratorMetadataKVS[decoratedClass.name];
}