import { Injectable } from "injection-js";
import { User } from "../models/user.model";

@Injectable()
export class UserService {

    getCurrentUser$(): Promise<User> {
        console.log("Test");
        return Promise.reject("Not implemented");
    }

}
