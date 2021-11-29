import { DgpXpModuleContent, DgpXpModuleRef } from "../models";

export function DgpXpModule(payload?: DgpXpModuleContent): any {

    console.log("payload", payload);
    // TODO: Collect all providers into some central repository

    return (decoratedClass: any) => {
        console.log("decoratedClass", decoratedClass);
    };

}
