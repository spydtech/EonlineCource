package com.Eonline.Education.Request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatGroupRequest {
    private String groupName;
    private List<String> users;
    private List<String> trainees;
}
