import { Type } from "injection-js";
import { DgpXpModuleMetadata } from "../models";
import { registerDecoratorMetadata } from "./register-decorator-metadata.function";

export function registerDgpXpModuleMetadata(payload: {
    readonly decoratedClass: Type;
    readonly metadata: DgpXpModuleMetadata;
}) {
    registerDecoratorMetadata<DgpXpModuleMetadata>(payload);
}