import {User} from "../model/User";
import {UserService} from "./UserService";
import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Gender} from "../model/Gender";


/**
 * User's edit page {@link User}.
 */
export default function UserEditPage() {

    const {id} = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const UserServiceInstance = useRef(new UserService());

    useEffect(() => {
        async function getUser() {
            const response = await UserServiceInstance.current.getUserById(id);
            setUser(response);
        }

        getUser();
    }, []);


    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm();

    if (!user) {
        return <div>Oops, something went wrong” error...</div>
    }

    const currentDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }) as User);
        console.log("onChange FIELD_NAME =", name, " FIELD_VALUE", value)
        console.log("onChange userModel = ", user)
    };

    const onSubmit = async () => {
        await UserServiceInstance.current.updateUser(user);
        window.location.href = '/';
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><label>Firstname</label>
                    <input
                        {...register("_firstname", {
                            required: "Field is required!",
                            minLength: {
                                value: 2,
                                message: "Minimum 2 characters!"
                            },
                            maxLength: {
                                value: 40,
                                message: "Maximum 40 characters!"
                            },
                            pattern: {
                                value: new RegExp("[a-zA-Zа-яА-я]+"),
                                message: "Please, enter only russian and latin alphabetical characters!"
                            }
                        })}
                        value={user.firstname}
                        onChange={onChange}
                    />
                    <div className="error">{errors?._firstname &&
                        <p>{errors?._firstname?.message?.toString() || "Error!"}</p>}</div>
                </div>
                <div><label>Lastname</label>
                    <input
                        {...register("_lastname", {
                            required: "Field is required!",
                            minLength: {
                                value: 2,
                                message: "Minimum 2 characters!"
                            },
                            maxLength: {
                                value: 50,
                                message: "Maximum 50 characters!"
                            },
                            pattern: {
                                value: new RegExp("[a-zA-Zа-яА-я-]+"),
                                message: "Please, enter only russian and latin alphabetical characters!"
                            }
                        })}
                        onChange={onChange}
                        value={user.lastname}
                    />
                    <div className="error">{errors?._lastname &&
                        <p>{errors?._lastname?.message?.toString() || "Error!"}</p>}</div>
                </div>
                <div><label>Patronymic</label>
                    <input
                        {...register("_patronymic", {
                            required: "Field is required!",
                            minLength: {
                                value: 2,
                                message: "Minimum 2 characters!"
                            },
                            maxLength: {
                                value: 50,
                                message: "Maximum 50 characters!"
                            },
                            pattern: {
                                value: new RegExp("[a-zA-Zа-яА-я-]+"),
                                message: "Please, enter only russian and latin alphabetical characters!"
                            }
                        })}
                        value={user.patronymic}
                        onChange={onChange}
                    />
                    <div className="error">{errors?._patronymic &&
                        <p>{errors?._patronymic?.message?.toString() || "Error!"}</p>}</div>
                </div>
                <div color="input "><label>Birthday</label>
                    <input className="input"
                           {...register("_birthDate", {
                               required: "Field is required!",
                               min: {
                                   value: "1900-12-31",
                                   message: "Minimum date is 31.12.1900"
                               },
                               max: {
                                   value: currentDate.replaceAll("/", ".").toString(),
                                   message: "Maximum date is " + currentDate.replaceAll("/", ".")
                               }
                           })}
                           type="date"
                           onChange={onChange}
                           value={user.birthDate ? user?.birthDate.toISOString().substring(0, 10) : user.birthDate}
                    />
                    <div className="error">{errors?._birthDate &&
                        <p>{errors?._birthDate?.message?.toString() || "Error!"}</p>}</div>
                </div>
                <div><label>Gender</label>
                    <select className="input"
                            {...register("_gender", {
                                required: "Field is required!",
                            })}
                            onChange={onChange}
                            value={user.gender}
                    >
                        <option value={Gender.FEMALE}>Female</option>
                        <option value={Gender.MALE}>Male</option>
                    </select>
                    <div className="error">{errors?._gender &&
                        <p>{errors?._gender?.message?.toString() || "Error!"}</p>}</div>
                </div>
                <div className="button-container">
                    <button type="submit">Save</button>
                    <button onClick={() => window.location.href = `/`}>Back</button>
                </div>
            </form>
        </div>
    );
};
