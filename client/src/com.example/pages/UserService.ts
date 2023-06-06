import {User} from "../model/User";
import {Gender} from "../model/Gender";

const SERVER_BASE_URL = "http://localhost:8888";

/**
 * User's service.
 */
export class UserService {

    async getUserById(id: string | undefined): Promise<User> {
        const response = await fetch(SERVER_BASE_URL + "/users/" + id, {

        });

        const user = await response.json();
        console.log("Get User:", user);

        return this.createUserModel(user);
    }

    async getListUsers(): Promise<User[]> {
        const response = await fetch(SERVER_BASE_URL, {
        });

        const users = await response.json();
        console.log("Get User's list:", users);

        return this.createListUserModel(users);
    }

    private createListUserModel(users: any) {
        return users?.map((user: any) => this.createUserModel(user));
    }

    private createUserModel(user: any) {
        console.log("user", user);
        const userModel = new User();
        userModel.userId = user.userId;
        userModel.firstname = user.firstname;
        userModel.lastname = user.lastname;
        userModel.patronymic = user.patronymic;
        userModel.gender = user.gender as Gender;
        // userModel.birthDate = new Date('{user.birthDate});
        return userModel;
    }

}
