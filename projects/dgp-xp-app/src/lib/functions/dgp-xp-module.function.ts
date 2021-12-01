import "reflect-metadata";
import { DgpXpModuleMetadata } from "../models";
import { Type } from "injection-js";
import { registerDgpXpModuleMetadata } from "./register-dgp-xp-module-metadata.function";

export function DgpXpModule(metadata: DgpXpModuleMetadata): any {

    return (decoratedClass: Type) => {
        registerDgpXpModuleMetadata({decoratedClass, metadata});
    };

}
