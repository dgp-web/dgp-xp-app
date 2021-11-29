import { DgpXpModuleRef } from "../models";

export function bootstrapModule<TModule>(payload: TModule): Promise<DgpXpModuleRef<TModule>> {

    // TODO: Pass providers in there

    return null;

    /*
        return new App({
            isDevelopment: true
        }).init$() as null;
    */

}