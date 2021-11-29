import { DgpXpModuleContent } from "../models";

export function DgpXpModule(payload: DgpXpModuleContent): any {

    console.log("payload", payload);
    // TODO: Do something with this rant

    return (foo: any) => {
        console.log("foo", foo);
    };

}