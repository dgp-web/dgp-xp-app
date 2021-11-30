import { Type } from "injection-js";
import { ModuleWithProviders } from "./module-with-providers.model";

export type ModuleOrModuleWithProviders = Type | ModuleWithProviders<Type>;