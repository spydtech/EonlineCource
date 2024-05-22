package com.Eonline.Education.Request;

public class RatingRequest {
  private Long courseId;
    private double rating;
    public Long getcourseId() {
        return courseId;
    }
    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }
    public double getRating() {
        return rating;
    }
    public void setRating(double rating) {
        this.rating = rating;
    }
}
