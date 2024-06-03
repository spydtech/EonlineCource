//package com.Eonline.Education.Service;
//
//import com.Eonline.Education.Request.RatingRequest;
//import com.Eonline.Education.exceptions.CourseException;
//import com.Eonline.Education.modals.Course;
//import com.Eonline.Education.modals.Rating;
//import com.Eonline.Education.modals.User;
//import com.Eonline.Education.repository.RatingRepository;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Service
//public class RatingServiceImplementation implements RatingServices {
//
//    private RatingRepository ratingRepository;
//    private CourseService courseService;
//
//    public RatingServiceImplementation(RatingRepository ratingRepository,CourseService productService) {
//        this.ratingRepository=ratingRepository;
//        this.courseService=productService;
//    }
//
//    @Override
//    public Rating createRating(RatingRequest req, User user) throws CourseException {
//
//        Course course=courseService.findCourseById(req.getcourseId());
//
//        Rating rating=new Rating();
//        rating.setCourse(course);
//        rating.setUser(user);
//        rating.setRating(req.getRating());
//        rating.setCreatedAt(LocalDateTime.now());
//        return ratingRepository.save(rating);
//    }
//
//    @Override
//    public List<Rating> getCourseRating(Long courseId) {
//        return ratingRepository.getAllcourseRating(courseId) ;
//    }
//
////    @Override
////    public Rating createRating(RatingRequest req, User user) throws CourseException {
////
////        Course product=courseService.findCourseById(req.getCourseId());
////
////        Rating rating=new Rating();
////        rating.setCourse(course);
////        rating.setUser(user);
////        rating.setRating(req.getRating());
////        rating.setCreatedAt(LocalDateTime.now());
////
////        return ratingRepository.save(rating);
////    }
////
////    @Override
////    public List<Rating> getProductsRating(Long productId) {
////        // TODO Auto-generated method stub
////        return ratingRepository.getCourseRating(courseId);
////    }
//}
