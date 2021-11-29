import { DgpXpModuleRef } from "../models";
import { DgpXpApp } from "../dgp-xp-app";
import "reflect-metadata";
import { metadataKVS } from "./dgp-xp-module.function";

// https://stackoverflow.com/questions/41144335/get-list-of-attribute-decorators-in-typescript
export function getDecorators(target: any, propertyName: string | symbol): string[] {
    // get info about keys that used in current property
    console.log("Reflect.getMetadataKeys", Reflect.getMetadataKeys(target));
    const keys: any[] = Reflect.getMetadataKeys(target, propertyName);
    const decorators = keys
        // filter your custom decorators
        .filter(key => key.toString().startsWith("custom:annotations"))
        .reduce((values, key) => {
            // get metadata value.
            const currValues = Reflect.getMetadata(key, target, propertyName);
            return values.concat(currValues);
        }, []);

    return decorators;
}

export function bootstrapModule<TModule>(payload: TModule): Promise<DgpXpModuleRef<TModule>> {

    // TODO: Pass providers in there
    // TODO: Get metadata

    const asda = metadataKVS[(payload as any).name];
    console.log("metadata of ", (payload as any).name, asda);

    // new DgpXpApp({} as any);

    return null;

    /*
        return new App({
            isDevelopment: true
        }).init$() as null;
    */

}