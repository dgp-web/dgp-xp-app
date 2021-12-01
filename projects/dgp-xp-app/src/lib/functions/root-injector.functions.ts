import { ReflectiveInjector } from "injection-js";

let rootInjector: ReflectiveInjector;

export function setRootInjector(injector: ReflectiveInjector) {
    rootInjector = injector;
}

export function getRootInjector(): ReflectiveInjector {
    return rootInjector;
}
