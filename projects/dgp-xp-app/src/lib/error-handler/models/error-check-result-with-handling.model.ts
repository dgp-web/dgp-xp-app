export interface ErrorCheckResultWithHandling {
    readonly hasHandledError: true;
    readonly status: number;
    readonly result: any;
}