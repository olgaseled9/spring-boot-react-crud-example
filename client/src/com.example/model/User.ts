import {Gender} from "./Gender";

/**
 * User's view model.
 */
export class User {

    /**
     * Id.
     */
    private _userId: string;

    /**
     * Firstname.
     */
    private _firstname: string;

    /**
     * Lastname.
     */
    private _lastname: string;

    /**
     * Patronymic.
     */
    private _patronymic: string;

    /**
     * Gender.
     */
    private _gender: Gender;

    /**
     * Birthday.
     */
    private _birthDate: Date;


    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get patronymic(): string {
        return this._patronymic;
    }

    set patronymic(value: string) {
        this._patronymic = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    toJson(): Object {
        return {
            "userId": this._userId,
            "firstname": this._firstname,
            "lastname": this._lastname,
            "patronymic": this._patronymic,
            "birthday": this._birthDate?.toISOString(),
            "gender": this._gender,
        };
    }

}