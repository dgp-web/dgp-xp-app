import { Injectable } from "injection-js";
import { Get, Route, Security, Tags } from "tsoa";
import { User } from "../models/user.model";
import { SSE } from "dgp-xp-app";
import { Observable, Subject } from "rxjs";

@Injectable()
@Route(`api/v1/users`)
@Tags("Users")
export class UserController {

    @Security("Bearer", ["test"])
    @Get()
    getCurrentUser$(): Promise<User> {
        return Promise.reject("Not implemented");
    }

    @SSE("test", {
        headers: {
            "Access-Control-Allow-Origin": ""
        }
    })
    sseTest$(): Observable<string> {
        return new Subject<string>();
    }

}
