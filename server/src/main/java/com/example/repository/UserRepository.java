package com.example.repository;

import com.example.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Handles the database operation as create, read, update, delete an {@link User} object.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {


}
