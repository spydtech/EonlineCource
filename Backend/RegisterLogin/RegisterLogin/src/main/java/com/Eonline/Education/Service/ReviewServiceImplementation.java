//package com.Eonline.Education.Service;
//
//import com.Eonline.Education.Request.ReviewRequest;
//import com.Eonline.Education.exceptions.CourseException;
//import com.Eonline.Education.modals.Course;
//import com.Eonline.Education.modals.Rating;
//import com.Eonline.Education.modals.Review;
//import com.Eonline.Education.modals.User;
//import com.Eonline.Education.repository.CourseRepository;
//import com.Eonline.Education.repository.ReviewRepository;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Service
//public class ReviewServiceImplementation implements  ReviewService{
//
//    private ReviewRepository reviewRepository;
//    private CourseService courseService;
//    private CourseRepository courseRepository;
//
//    public ReviewServiceImplementation(ReviewRepository reviewRepository,CourseService courseService,CourseRepository courseRepository) {
//        this.reviewRepository=reviewRepository;
//        this.courseService=courseService;
//        this.courseRepository=courseRepository;
//    }
//
//    @Override
//    public Review createReview(ReviewRequest req, User user) throws CourseException {
//
//        Course course=courseService.findCourseById(req.getCourseId());
//
//        Review review=new Review();
//
//        review.setUser(user);
//        review.setCourse(course);
//        review.setReview(req.getReview());
//        review.setCreatedAt(LocalDateTime.now());
//
//       // course.getReview().add(review);
//        courseRepository.save(course);
//        return reviewRepository.save(review);
//
//
//    }
//
//    @Override
//    public List<Review> getAllReview(Long courseId) {
//        return reviewRepository.getAllCourseReview(courseId);
//    }
//
//////		product.getReviews().add(review);
////        productRepository.save(product);
////        return reviewRepository.save(review);
////    }
////
////    @Override
////    public List<Review> getAllReview(Long productId) {
////
////        return reviewRepository.getAllProductsReview(productId);
////    }
//
//}
