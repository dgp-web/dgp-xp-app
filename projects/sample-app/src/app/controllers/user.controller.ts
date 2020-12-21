import { Injectable } from "injection-js";
import { Get, Route, Tags } from "tsoa";
import { User } from "../models/user.model";

@Injectable()
@Route(`api/v1/users`)
@Tags("Users")
export class UserController {

    @Get()
    getCurrentUser$(): Promise<User> {
        return Promise.reject("Not implemented");
    }

}
