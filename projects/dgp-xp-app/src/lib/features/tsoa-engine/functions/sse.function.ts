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

    // TODO: Get authenicationInfo from other decorator!

    return (decoratedClass: Function,
            propertyKey: string,
            descriptor: PropertyDescriptor
    ) => {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const obs$ = originalMethod.apply(this, args) as Observable<any>;
            // TODO: Check if the result is an observable
            registerSSEMiddleware({obs$, config, route});
            /**
             * We do not return the Observable result of the original method here so the
             * request doesn't complete.
             *
             * Instead, we pipe results through an sse response.
             */
            return;
        };

        return;
    };

}