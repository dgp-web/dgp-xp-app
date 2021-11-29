import { Type } from "injection-js";
import { decoratorMetadataKVS } from "../constants";

export function registerDecoratorMetadata<TMetadata = any>(payload: {
    readonly decoratedClass: Type;
    readonly metadata: TMetadata;
}): void {
    decoratorMetadataKVS[payload.decoratedClass.name] = payload.metadata;
}