package com.Eonline.Education.response;

import com.Eonline.Education.user.TaskStatus;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class TaskResponse {
    private String file;
    private String name;
    private String description;
    private TaskStatus status;
}
