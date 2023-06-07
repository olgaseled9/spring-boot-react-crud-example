import React, {useEffect, useRef, useState} from "react";
import {UserService} from "./UserService";
import {User} from "../model/User";

/**
 * Page displays list of all users {@link User}.
 */
export default function UserListPage() {
    const [users, setUsers] = useState<User[]>([]);
    const UserServiceInstance = useRef(new UserService());

    useEffect(() => {
        async function getUsers() {
            const response = await UserServiceInstance.current.getListUsers();

            setUsers(response);
        }

        getUsers();
    }, [])


    if (!users) {
        return <div>Oops, something went wrong” error...</div>
    }

    const removeUser = async (id ?: string) => {
        const confirmed = window.confirm("Are you sure you wish to remove this user?");

        if (confirmed) {
            await UserServiceInstance.current.removeById(id);
            window.location.reload();
        }
    };

    return (
        <div>
            <h2>List of users</h2>
            <div>
                <button
                    onClick={() => {
                        window.location.href = `/add`;
                    }}
                >
                    Add user
                </button>
                <table>
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Patronymic</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={`${index}`}>
                            <td>{user.userId}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.patronymic}</td>
                            <td>{user.birthDate.toLocaleDateString()}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        window.location.href = `/user/${user.userId}`;
                                    }}
                                >
                                    View
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        window.location.href = `/edit/${user.userId}`;
                                    }}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button onClick={() => removeUser(user.userId)}>
                                    Remove
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

