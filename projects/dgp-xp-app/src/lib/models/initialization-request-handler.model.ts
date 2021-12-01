import * as express from "express";

export type InitializationRequestHandler = (err: unknown, req: express.Request,
                                            res: express.Response, next: express.NextFunction) => express.Response | void;