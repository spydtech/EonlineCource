package com.Eonline.Education.Request;

public class ReviewRequest {

    private Long courseId;
    private String review;
    public Long getCourseId() {
        return courseId;
    }
    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }
    public String getReview() {
        return review;
    }
    public void setReview(String review) {
        this.review = review;
    }

}
