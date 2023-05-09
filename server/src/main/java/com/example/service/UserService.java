package com.example.service;

import com.example.dto.UserDto;

import java.util.List;

public interface UserService {
    void create(UserDto userDto);

    List<UserDto> findAll();

    UserDto findById(Long id);

    void deleteById(Long id);

}
