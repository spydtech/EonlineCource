package com.Eonline.Education.Request;

import lombok.Data;

@Data
public class CourseRequest {
    private Long courseId;
    private String courseName;
    private double coursePrice;

    // Getters and setters
    // You can generate these using your IDE or manually define them
    // Ensure to add appropriate constructors and other methods as needed
}