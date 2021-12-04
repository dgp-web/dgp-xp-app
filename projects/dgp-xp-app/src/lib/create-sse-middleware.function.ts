import * as express from "express";
import { Observable } from "rxjs";
import { TsoaExpressAuthentication } from "./features/tsoa-express-authentication/models";

export interface SSEMiddleWareConfig {
    readonly headers: {
        readonly "Access-Control-Allow-Origin": string;
    };
    readonly authentication?: TsoaExpressAuthentication;
    readonly securityName?: string;
    readonly scopes?: string[];
}

export function createSSEMiddleware<T>(obs$: Observable<T>, config: SSEMiddleWareConfig) {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {

        try {
            await config.authentication(req, config.securityName, config.scopes);
        } catch (error) {
            next(error);
        }

        try {

            /**
             * Has been implemented according to instruction
             * -----
             * See https://stackoverflow.com/questions/34657222/how-to-use-server-sent-events-in-express-js
             */
            res.setHeader("Cache-Control", "no-cache");
            res.setHeader("Connection", "keep-alive");
            res.setHeader("Content-Type", "text/event-stream");
            /**
             * This is needed so requests don't get buffered for HTTPS
             * -----
             * See https://stackoverflow.com/questions/13672743/eventsource-server-sent-events-through-nginx
             */
            res.setHeader("X-Accel-Buffering", "no");
            res.setHeader("Access-Control-Allow-Origin", config.headers["Access-Control-Allow-Origin"]);
            res.flushHeaders(); // flush the headers to establish SSE with client

            const subscription = obs$.subscribe(item => {
                res.write(`data: ${JSON.stringify(item)}\n\n`);
            }, x => console.error(x));

            // If client closes connection, stop sending events
            res.on("close", () => {
                console.log("The client closed the SSE connection");
                subscription.unsubscribe();
                res.end();
            });

            // Handle error cases
            res.on("error", () => {
                console.log("The SSE connection was closed due to an error");
                subscription.unsubscribe();
                res.end();
            });

        } catch (error) {
            next(error);
        }

    };
}
