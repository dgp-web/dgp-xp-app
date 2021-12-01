import { Injector } from "injection-js";

export abstract class DgpXpModuleRef<T> {

    abstract get injector(): Injector;

    abstract get Instance(): T;

}