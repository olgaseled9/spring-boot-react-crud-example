import {User} from "../model/User";

const SERVER_BASE_URL = "http://localhost:8888";

/**
 * User's service.
 */
export class UserService {

    async getUserById(id: string | undefined): Promise<User> {
        const response = await fetch(SERVER_BASE_URL + "/users/" + id, {});

        const user = await response.json();
        console.log("Get User:", user);

        return this.convertToModel(user);
    }

    async getListUsers(): Promise<User[]> {
        const response = await fetch(SERVER_BASE_URL, {});

        const users = await response.json();
        console.log("Get User's list:", users);

        return this.createListUserModel(users);
    }

    async removeById(userId ?: string) {
        await fetch(SERVER_BASE_URL + "/" + userId, {
            method: "DELETE"
        });
    }

    async updateUser(user: any) {
        const userToUpdate = this.convertBack(user);
        console.log("Get user to update:", userToUpdate);
        await fetch(SERVER_BASE_URL + "/user/" + userToUpdate.userId, {
            method: "PUT",
            body: JSON.stringify(userToUpdate.toJson()),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Update user: ", user)
                }
            });
    }

    async addUser(user: User) {
        const newUser = this.convertBack(user);
        newUser.userId = "-1";
        console.log("Add new user: ", newUser)
        await fetch(SERVER_BASE_URL + "/add", {
            method: "POST",
            body: JSON.stringify(newUser.toJson()),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Add new user: ", user)
                }
            });
    }

    private createListUserModel(users: any) {
        return users?.map((user: any) => this.convertToModel(user));
    }

    private convertToModel(user: any) {

        const userModel = new User();
        userModel.userId = user.userId;
        userModel.firstname = user.firstname;
        userModel.lastname = user.lastname;
        userModel.patronymic = user.patronymic;
        userModel.gender = user.gender;
        userModel.birthDate = new Date(Date.parse(user.birthday));
        console.log("userModel:", userModel);

        return userModel;
    }

    private convertBack(object: any) {
        const user = new User();
        user.userId = object._userId;
        user.firstname = object._firstname;
        user.lastname = object._lastname;
        user.patronymic = object._patronymic;
        user.birthDate = new Date(object._birthDate);
        user.gender = object._gender;
        return user;
    }

}
