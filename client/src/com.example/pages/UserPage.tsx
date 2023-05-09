import React, {useEffect, useState} from "react";
import {UserService} from "./UserService";
import {User} from "../model/User";
import {useParams} from "react-router-dom";

export default function UserPage() {
    const {id} = useParams<{ id: string }>();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        async function getUser() {
            const UserServiceInstance = new UserService();
            const response = await UserServiceInstance.getUserById(id);

            setUser(response);
        }

        getUser();
    }, )

    return (
        <div>
            <h2>User page</h2>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Patronymic</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>{user?.userId}</td>
                <td>{user?.firstname}</td>
                <td>{user?.lastname}</td>
                <td>{user?.patronymic}</td>
                {/*<td>{user?.birthDate.toLocaleDateString()}</td>*/}
                <td>{user?.gender}</td>
                </tr>
                </tbody>
            </table>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    );
}

