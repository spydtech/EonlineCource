package com.Eonline.Education.Controller;

import com.Eonline.Education.Service.CourseService;
import com.Eonline.Education.modals.Course;

import com.Eonline.Education.user.CourseList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    // Get all courses
    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    // Get course by ID
    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id);
    }

    // Create a new course
//    @PostMapping()
//    public Course createCourse(@RequestBody Course course) {
//        return courseService.saveCourse(course);
//    }

    // Update an existing course
    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable Long id, @RequestBody Course course) {
        course.setId(id);
        return courseService.saveCourse(course);
    }

    // Delete a course
    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
    }

    @GetMapping("/category/{categoryId}")
    public List<Course> getCoursesByCategory(@PathVariable Long categoryId) {
        return courseService.getCoursesByCategory(categoryId);
    }

    @PostMapping("/{categoryId}")
    public ResponseEntity<Course> createCourse(@PathVariable Long categoryId, @RequestBody Course course) {
        Course course1 = courseService.saveCourse(course, categoryId);
        return new ResponseEntity<>(course, HttpStatus.CREATED);
    }
}




























































//package com.Eonline.Education.Controller;
//
//import com.Eonline.Education.Service.CourseService;
//import com.Eonline.Education.exceptions.CourseException;
//import com.Eonline.Education.modals.Course;
//import org.springframework.data.domain.Page;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//public class UserCourseController {
//
//    private CourseService courseService;
//
//    public UserCourseController(CourseService courseService) {
//        this.courseService=courseService;
//    }
//
//
//    @GetMapping("/courses")
//    public ResponseEntity<Page<Course>> findCourseByCategoryHandler(@RequestParam String category,
//                                                                        @RequestParam Integer minPrice,
//                                                                      @RequestParam Integer maxPrice, @RequestParam Integer minDiscount, @RequestParam String sort,
//                                                                      @RequestParam String stock, @RequestParam Integer pageNumber, @RequestParam Integer pageSize){
//
//
//        Page<Course> res= courseService.getAllCourse(category, minPrice, maxPrice, minDiscount, sort,stock,pageNumber,pageSize);
//
//        System.out.println("complete courses");
//        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
//
//    }
//
//
//
//    @GetMapping("/courses/id/{courseId}")
//    public ResponseEntity<Course> findProductByIdHandler(@PathVariable Long courseId) throws CourseException {
//
//        Course course=courseService.findCourseById(courseId);
//
//        return new ResponseEntity<Course>(course,HttpStatus.ACCEPTED);
//    }
//
//    @GetMapping("/courses/search")
//    public ResponseEntity<List<Course>> searchProductHandler(@RequestParam String q){
//
//        List<Course> courses=courseService.searchCourse(q);
//
//        return new ResponseEntity<List<Course>>(courses,HttpStatus.OK);
//
//    }
//}