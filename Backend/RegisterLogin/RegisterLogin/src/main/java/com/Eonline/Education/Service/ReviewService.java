package com.Eonline.Education.Service;

import com.Eonline.Education.Request.ReviewRequest;
import com.Eonline.Education.exceptions.CourseException;
import com.Eonline.Education.modals.Review;
import com.Eonline.Education.modals.User;

import java.util.List;

public interface ReviewService {

    public Review createReview(ReviewRequest req, User user) throws CourseException;

    public List<Review> getAllReview(Long courseId);
}
