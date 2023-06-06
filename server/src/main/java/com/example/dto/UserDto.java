package com.example.dto;

import java.time.LocalDate;

/**
 * Container for User's representing data, getter and setter methods.
 *
 * @see UserDto
 */
public class UserDto {

    /**
     * Id.
     */
    private String userId;

    /**
     * Firstname.
     */
    private String firstname;

    /**
     * Lastname.
     */
    private String lastname;

    /**
     * Patronymic.
     */
    private String patronymic;

    /**
     * Birthday.
     */
    private LocalDate birthday;

    /**
     * Gender.
     */
    private GenderDto gender;

    public UserDto() {
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public GenderDto getGender() {
        return gender;
    }

    public void setGender(GenderDto gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "userId=" + userId +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", patronymic='" + patronymic + '\'' +
                ", birthday=" + birthday +
                ", gender=" + gender +
                '}';
    }
}
