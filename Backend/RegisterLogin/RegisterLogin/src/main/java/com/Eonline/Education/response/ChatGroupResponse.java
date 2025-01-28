package com.Eonline.Education.response;

import com.Eonline.Education.modals.User;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ChatGroupResponse {
    private long id;
    private String groupName;
    private List<UserResponse> users;
    private List<UserResponse> trainees;
}
