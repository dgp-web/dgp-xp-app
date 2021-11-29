import { IocContainer, IocContainerFactory } from "@tsoa/runtime";
import { getRootInjector } from "dgp-xp-app";

export class Container implements IocContainer {

    get<T>(controller: { prototype: T }): T {
        return getRootInjector().get(controller);
    }

}

const iocContainer: IocContainerFactory = function (request: Request): IocContainer {
    return new Container();
}

export { iocContainer };
