import { DgpXpModuleRef } from "../models";
import { getDgpXpModuleMetadata } from "./get-dgp-xp-module-metadata.function";
import { Type } from "injection-js";

export function bootstrapModule<TModule extends Type>(
    payload: TModule
): Promise<DgpXpModuleRef<TModule>> {

    const metadata = getDgpXpModuleMetadata(payload);
    console.log("metadata of ", payload.name, metadata);

    // new DgpXpApp({} as any);

    return null;

    /*
        return new App({
            isDevelopment: true
        }).init$() as null;
    */

}