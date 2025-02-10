package com.Eonline.Education.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class UserResponse {
    private String email;
    private String fullName;
    private Long userId;
    private Date createdAt;


}
