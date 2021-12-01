import { InitializationService } from "dgp-xp-app";

export class InitializationServiceImpl extends InitializationService {
    async initialize$(): Promise<void> {
        console.log("Initialize");
    }
}