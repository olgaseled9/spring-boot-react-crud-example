package com.example.service;
/**
 * Thrown when entity cannot be found, added, updated or removed.
 */
public class ServiceException extends RuntimeException {

    public ServiceException(String message, Throwable cause) {
        super(message, cause);
    }

    public ServiceException(String message) {
        super(message);
    }
}
