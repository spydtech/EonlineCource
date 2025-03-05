package com.Eonline.Education.exceptions;

import com.Eonline.Education.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.HttpRequestMethodNotSupportedException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MandatoryFieldNotFoundException.class)
    public ResponseEntity<ApiResponse> handleMandatoryFiledException(MandatoryFieldNotFoundException ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse(ex.getMessage(), 400, request.getDescription(false)),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ApiResponse> handleMethodNotSupportedException(HttpRequestMethodNotSupportedException ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse(ex.getMessage(), 405, request.getDescription(false)),
                HttpStatus.METHOD_NOT_ALLOWED
        );
    }

    @ExceptionHandler(AuthenticationBasedException.class)
    public ResponseEntity<ApiResponse> handleAuthenticationException(AuthenticationBasedException ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse(ex.getMessage(), 401, request.getDescription(false)),
                HttpStatus.UNAUTHORIZED
        );
    }

    @ExceptionHandler(ForbiddenException.class)
    public ResponseEntity<ApiResponse> handleForbiddenException(ForbiddenException ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse("Access denied: You do not have permission to access this resource", 403, request.getDescription(false)),
                HttpStatus.FORBIDDEN
        );
    }

    @ExceptionHandler(DuplicateValueException.class)
    public ResponseEntity<ApiResponse> handleDuplicateValueException(DuplicateValueException ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse(ex.getMessage(), 409, request.getDescription(false)),
                HttpStatus.CONFLICT
        );
    }

    @ExceptionHandler(PatternNotMatchException.class)
    public ResponseEntity<ApiResponse> handlePatternNotMatchException(PatternNotMatchException ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse(ex.getMessage(), 400, request.getDescription(false)),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ApiResponse> handleNotFoundException(NotFoundException ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse(ex.getMessage(), 404, request.getDescription(false)),
                HttpStatus.NOT_FOUND
        );
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiResponse> handleRuntimeException(RuntimeException ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse(ex.getMessage(), 500, request.getDescription(false)),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse> handleGenericException(Exception ex, WebRequest request) {
        return new ResponseEntity<>(
                composeApiResponse("An unexpected error occurred", 500, request.getDescription(false)),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    private ApiResponse composeApiResponse(String message, int code, String payload) {
        return new ApiResponse(code, payload, message);
    }
}
