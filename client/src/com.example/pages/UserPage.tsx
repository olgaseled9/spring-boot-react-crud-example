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

    if (!user) {
        return <div>Oops, something went wrong” error...</div>
    }

    return (
        <div>
            <h2>User page</h2>
            <table>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Patronymic</th>
                    <th>Gender</th>
                    <th>Birthday</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>{user.userId}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.patronymic}</td>
                <td>{user.gender}</td>
                <td>{user.birthDate.toLocaleDateString()}</td>
                </tr>
                </tbody>
            </table>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    );
}

