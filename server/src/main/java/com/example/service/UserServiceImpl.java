package com.example.service;

import com.example.dto.UserDto;
import com.example.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository repository;

    private final UserMapper mapper;

    public UserServiceImpl(UserRepository repository, UserMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public void create(UserDto userDto) {
        try {
            repository.save(mapper.convertBack(userDto));
            LOGGER.info("User is successfully created : " + userDto);
        } catch (DataAccessException e) {
            throw new ServiceException(String.format("Not able to add new user : %s", userDto), e);
        }
    }

    @Override
    public List<UserDto> findAll() {
        try {
            return repository.findAll().stream()
                    .map(mapper::convertToDto)
                    .collect(Collectors.toList());
        } catch (DataAccessException e) {
            throw new ServiceException("Not able to get all users. ", e);
        }
    }

    @Override
    public UserDto findById(String id) {
        return mapper.convertToDto(
                repository.findById(Long.valueOf(id))
                        .orElseThrow(
                                () -> new ServiceException("User not found")));
    }

    @Override
    public void deleteById(String id) {
        try {
            repository.deleteById(Long.valueOf(id));
            LOGGER.info(String.format("User is successfully deleted with id = %s", id));
        } catch (DataAccessException e) {
            throw new ServiceException(String.format("Cannot be removed user with id = %s", id), e);
        }
    }

    @Override
    public void update(UserDto oldUser, UserDto updatedUser) {
        oldUser.setFirstname(updatedUser.getFirstname());
        oldUser.setLastname(updatedUser.getLastname());
        oldUser.setPatronymic(updatedUser.getPatronymic());
        oldUser.setBirthday(updatedUser.getBirthday());
        oldUser.setGender(updatedUser.getGender());
        try {
            repository.save(mapper.convertBack(oldUser));
            LOGGER.info(String.format("User is successfully updated : %s", updatedUser));
        } catch (DataAccessException e) {
            throw new ServiceException(String.format("Not able to update user : %s", oldUser), e);
        }
    }
}
