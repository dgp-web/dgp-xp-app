import { createSSEMiddleware, SSEMiddleWareConfig } from "../../../create-sse-middleware.function";
import { getRootInjector } from "../../../functions";
import { Application } from "express";
import { Observable } from "rxjs";
import { EXPRESS_APPLICATION } from "../../../constants";

// TODO: Ensure deRegistration works as well

export function registerSSEMiddleware(payload: {
    readonly obs$: Observable<any>;
    readonly route: string;
    readonly config: SSEMiddleWareConfig;
}) {

    const obs$ = payload.obs$;
    const route = payload.route;
    const config = payload.config;

    const injector = getRootInjector();
    const expressApp = injector.get(EXPRESS_APPLICATION) as Application;

    const middleware = createSSEMiddleware(obs$, config);

    expressApp.use(route, middleware);

}

export function SSE(route: string, config: SSEMiddleWareConfig): Function {

    return (decoratedClass: Function,
            propertyKey: string,
            descriptor: PropertyDescriptor
    ) => {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args) as Observable<any>;
            const obs$ = result;
            registerSSEMiddleware({obs$, config, route});
            return result;
        };

        return;
    };

}