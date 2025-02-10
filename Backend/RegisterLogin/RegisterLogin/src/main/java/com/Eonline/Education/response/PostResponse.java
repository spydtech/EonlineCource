package com.Eonline.Education.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Lob;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class PostResponse {
    private Long id;
    private String name;
    private String content;
    private String postedBY;
    private byte[] video;
    private byte[] img;
    private String mediaType;
    private LocalDateTime dateTime;
    private int likeCount;
    private int viewCount;
    private List<String> tags;
    private byte[] profilePicture;

}
