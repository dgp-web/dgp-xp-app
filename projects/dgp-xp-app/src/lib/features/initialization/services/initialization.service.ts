export abstract class InitializationService {
    abstract initialize$(): Promise<void>;
}