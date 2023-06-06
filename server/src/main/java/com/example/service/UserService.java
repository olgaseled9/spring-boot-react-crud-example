package com.example.service;

import com.example.dto.UserDto;

import java.util.List;

/**
 * Implementation of {@link UserService}.
 */
public interface UserService {
    void create(UserDto userDto);

    List<UserDto> findAll();

    UserDto findById(String id);

    void deleteById(String id);

    void update(UserDto oldUser, UserDto updatedUser);

}
