import React, {useEffect, useState} from "react";
import {UserService} from "./UserService";
import {User} from "../model/User";

export default function UserListPage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function getUsers() {
            const UserServiceInstance = new UserService();
            const response = await UserServiceInstance.getListUsers();

            setUsers(response);
        }

        getUsers();
    }, [])

    return (
        <div>
            <h2>Users List</h2>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Patronymic</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>View</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={`${index}`}>
                            <td>{user?.userId}</td>
                            <td>{user?.firstname}</td>
                            <td>{user?.lastname}</td>
                            <td>{user?.patronymic}</td>
                            {/*<td>{user?.birthDate.toString()}</td>*/}
                            <td>{user?.gender}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        window.location.href = `/user/${user.userId}`;
                                    }}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

