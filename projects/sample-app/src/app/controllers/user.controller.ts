import { Injectable } from "injection-js";
import { Get, Route, Security, Tags } from "tsoa";
import { User } from "../models/user.model";

@Injectable()
@Route(`api/v1/users`)
@Tags("Users")
export class UserController {

    @Security("Bearer", ["test"])
    @Get()
    getCurrentUser$(): Promise<User> {
        return Promise.reject("Not implemented");
    }

}
