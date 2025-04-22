package com.Eonline.Education.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
public class PostResponse {

    // Getters and Setters for all fields
    private Long id;
    private String name;
    private String content;
    private String postedBY;
    private List<byte[]> imageList;  // This will store images as byte arrays
    private List<byte[]> videoList;  // This will store videos as byte arrays
    private String mediaType;  // If you want to store the media type (image, video, etc.)
    private LocalDateTime dateTime;
    private int likeCount;
    private int viewCount;
    private List<String> tags;
    private byte[] profilePicture;  // Profile picture as a byte array

}
