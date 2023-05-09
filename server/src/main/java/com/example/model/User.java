package com.example.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Container for User's entity data, getter and setter methods.
 * @see User
 */
@Entity
@Table(name = "user")
public class User {

    /**
     * Id.
     */
    @Id
    @GeneratedValue()
    @Column(name = "user_id")
    private Long userId;

    /**
     * Firstname.
     */
    @Column
    private String firstname;

    /**
     * Lastname.
     */
    @Column
    private String lastname;

    /**
     * Patronymic.
     */
    private String patronymic;

    /**
     * Gender.
     */
    @Column
    @Enumerated(EnumType.STRING)
    private Gender gender;

    /**
     * Birthday.
     */
    @Column
    private Date birthday;

    public User() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
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

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", patronymic='" + patronymic + '\'' +
                ", birthday=" + birthday +
                ", gender=" + gender +
                '}';
    }
}
