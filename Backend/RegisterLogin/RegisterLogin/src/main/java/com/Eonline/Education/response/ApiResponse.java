package com.Eonline.Education.response;


public class ApiResponse {

    private String message;
    private boolean status;
    private Object payload;


    public ApiResponse(String message, boolean status) {
        this.message = message;
        this.status = status;
    }

    public ApiResponse(String message) {
        this.message = message;
    }

    public ApiResponse(String message, Object payload) {
        this.message = message;
        this.payload = payload;
    }

    public ApiResponse(Object payload) {
        this.payload = payload;
    }

    public ApiResponse() {

    }

    public ApiResponse(int i, String userNotAuthenticated, Object o) {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Object getPayload() {
        return payload;
    }

    public void setPayload(Object payload) {
        this.payload = payload;
    }


}
