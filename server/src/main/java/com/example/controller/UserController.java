package com.example.controller;

import com.example.dto.UserDto;
import com.example.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Http handler for {@link UserDto}.
 *
 */
@RestController
@RequestMapping("/")
@CrossOrigin(origins = { "http://localhost:3000"})
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<UserDto> getAll() {
        return service.findAll();
    }

    @GetMapping(value = "users/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> findById(@PathVariable String id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping("/add")
    public ResponseEntity<Void> add(@RequestBody UserDto userDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            LOGGER.error("Cannot add a new user.");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            service.create(userDto);
            LOGGER.error("Successfully added a new user.");
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<Void> updateUser(@RequestBody UserDto updatedUser, BindingResult bindingResult, @PathVariable String id) {
        if (bindingResult.hasErrors()) {
            LOGGER.error(String.format("Cannot update an user: %s", updatedUser));
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            UserDto oldUser= service.findById(id);
            service.update(oldUser, updatedUser);
            LOGGER.info(String.format("User are updated: %s", updatedUser));
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
