package com.example.service;

import com.example.dto.UserDto;
import com.example.model.User;
import org.mapstruct.Mapper;

/**
 * Convert {@link User} to {@link UserDto}.
 */
@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto convertToDto(User user);

    User convertBack(UserDto userDto);
}
