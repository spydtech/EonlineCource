package com.Eonline.Education.response;

import com.Eonline.Education.user.UserStatus;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Data
public class GroupUsersResponse {
    private String chatGroupName;
    private String userName;
    private String userEmail;
    private UserStatus status;
    private Map<String, Object> courses;
    private LocalDate joiningDate;
    private LocalDate expiryDate;
    private String traineeName;
    private String traineeEmail;


    public GroupUsersResponse(String chatGroupName, String userName, String userEmail, UserStatus status, Map<String, Object> courses, LocalDate joiningDate, LocalDate expiryDate) {
        this.chatGroupName = chatGroupName;
        this.userName = userName;
        this.userEmail = userEmail;
        this.status = status;
        this.courses = courses;
        this.joiningDate = joiningDate;
        this.expiryDate = expiryDate;
    }

    public GroupUsersResponse(String chatGroupName, String userName, String userEmail, UserStatus status,
                              Map<String, Object> courses, LocalDate joiningDate,
                              LocalDate expiryDate, String traineeName, String traineeEmail) {
        this.chatGroupName = chatGroupName;
        this.userName = userName;
        this.userEmail = userEmail;
        this.status = status;
        this.courses = courses;
        this.joiningDate = joiningDate;
        this.expiryDate = expiryDate;
        this.traineeName=traineeName;
        this.traineeEmail=traineeEmail;
    }
}
