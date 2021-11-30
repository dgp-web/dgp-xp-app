import { DgpXpModuleRef } from "../models";
import { ReflectiveInjector, Type } from "injection-js";
import { getNestedDgpXpModuleMetadata } from "./get-nested-dgp-xp-module-metadata.function";
import * as express from "express";
import { Application } from "express";
import { setRootInjector } from "./root-injector.functions";

export function bootstrapModule<TModule extends Type>(
    payload: TModule
): Promise<void> {

    const metadata = getNestedDgpXpModuleMetadata(payload);

    const expressApp: Application = express();

    const rootInjector = ReflectiveInjector.resolveAndCreate([
        ...metadata.providers,
        ...metadata.controllers
    ]);

    setRootInjector(rootInjector);

    console.log("metadata of ", payload.name, metadata);

    metadata.controllers.forEach(controller => {
        rootInjector.resolveAndInstantiate(controller);
    });

    // TODO: getNestedDgpXpModuleMetadata

    // new DgpXpApp({} as any);

    return Promise.resolve();

    /*
        return new App({
            isDevelopment: true
        }).init$() as null;
    */

}