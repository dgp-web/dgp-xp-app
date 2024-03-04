import { Injectable } from "injection-js";
import { Get, Route, Tags } from "tsoa";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@Injectable()
@Route(`api/v1/users`)
@Tags("Users")
export class UserController {

    constructor(
        private readonly userService: UserService
    ) {
    }

    @Get()
    getCurrentUser$(): Promise<User> {
        return this.userService.getCurrentUser$();
    }

}
