import { Application } from "express";

export function removeRouteHandler(app: Application, startupRouteHandlerName: string) {
    const routes = app._router.stack;
    routes.forEach(removeMiddlewares);
    function removeMiddlewares(route, i, routes) {
        switch (route.handle.name) {
            case startupRouteHandlerName:
                routes.splice(i, 1);
        }
        if (route.route)
            route.route.stack.forEach(removeMiddlewares);
    }
}
