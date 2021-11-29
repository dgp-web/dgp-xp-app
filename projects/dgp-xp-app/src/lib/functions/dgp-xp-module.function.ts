import { DgpXpModuleMetadata } from "../models";
import { Type } from "injection-js";

export const decoratorMetadataKVS = {};

export function registerDecoratorMetadata<TMetadata = any>(payload: {
    readonly decoratedClass: Type;
    readonly metadata: TMetadata;
}): void {
    decoratorMetadataKVS[payload.decoratedClass.name] = payload.metadata;
}

export function getDecoratorMetadata<TMetadata>(decoratedClass: Type): TMetadata {
    return decoratorMetadataKVS[decoratedClass.name];
}

export function registerDgpXpModuleMetadata(payload: {
    readonly decoratedClass: Type;
    readonly metadata: DgpXpModuleMetadata;
}) {
    registerDecoratorMetadata<DgpXpModuleMetadata>(payload);
}

export function getDgpXpModuleMetadata(decoratedClass: Type): DgpXpModuleMetadata {
    return getDecoratorMetadata<DgpXpModuleMetadata>(decoratedClass);
}

export function DgpXpModule(metadata: DgpXpModuleMetadata): any {

    return (decoratedClass: Type) => {
        registerDgpXpModuleMetadata({decoratedClass, metadata});
    };

}
