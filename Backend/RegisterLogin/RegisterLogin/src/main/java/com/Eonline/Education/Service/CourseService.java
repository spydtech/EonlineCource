package com.Eonline.Education.Service;

import com.Eonline.Education.Request.CreateCourseRequest;
import com.Eonline.Education.exceptions.CourseException;
import com.Eonline.Education.modals.Course;
import org.springframework.data.domain.Page;

import java.util.List;

public interface CourseService {

    Course createCourse(CreateCourseRequest req);

    String deleteCourse(Long courseId) throws CourseException;

    Course updateCourse(Long courseId, Course req) throws CourseException;

    List<Course> getAllCourses();

    Course findCourseById(Long id) throws CourseException;

    List<Course> findCourseByCategory(String category);

    List<Course> searchCourse(String query);

    Page<Course> getAllCourse(String category,
                               Integer minPrice, Integer maxPrice, Integer minDiscount, String sort,
                               String stock, Integer pageNumber, Integer pageSize);

    List<Course> recentlyAddedCourse();
}
