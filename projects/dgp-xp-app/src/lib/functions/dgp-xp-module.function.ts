import { DgpXpModuleContent } from "../models";
import "reflect-metadata";

export const metadataKVS = {};

export function DgpXpModule(payload: DgpXpModuleContent): any {

    // console.log("payload", payload);
    // TODO: Collect all providers into some central repository

    return (decoratedClass: any) => {

        metadataKVS[decoratedClass.name] = payload;

        //  console.log("decoratedClass", decoratedClass);
        // Reflect.defineMetadata("custom:annotations:test", "test", decoratedClass, "any");
    };

}
