package com.Eonline.Education.response;

import com.Eonline.Education.user.TaskStatus;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TaskResponse {
    private String file;
    private String name;
    private String description;
    private TaskStatus status;
    private Long taskId;
}
