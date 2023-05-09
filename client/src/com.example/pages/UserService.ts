import {User} from "../model/User";

const SERVER_BASE_URL = "http://localhost:8888";

/**
 * User's service.
 */
export class UserService {

    async getUserById(id: string | undefined): Promise<User> {
        const response = await fetch(SERVER_BASE_URL, {});

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
        return new User(user?.userId, user?.firstname, user.lastname, user?.patronymic, user?.birthday, user?.gender);
    }

}
