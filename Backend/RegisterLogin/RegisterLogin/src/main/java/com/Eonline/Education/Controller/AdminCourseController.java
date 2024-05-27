package com.Eonline.Education.Controller;

import com.Eonline.Education.Request.CreateCourseRequest;
import com.Eonline.Education.Service.CourseService;
import com.Eonline.Education.exceptions.CourseException;
import com.Eonline.Education.modals.Course;
import com.Eonline.Education.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/courses")
public class AdminCourseController {

    private CourseService courseService;

    public AdminCourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/")
    public ResponseEntity<Course> createProductHandler(@RequestBody CreateCourseRequest req) throws CourseException {

        Course createdCourse = courseService.createCourse(req);

        return new ResponseEntity<Course>(createdCourse, HttpStatus.ACCEPTED);

    }

    @DeleteMapping("/{courseId}/delete")
    public ResponseEntity<ApiResponse> deleteProductHandler(@PathVariable Long productId) throws CourseException{

        System.out.println("dlete ccurse controller .... ");
        String msg=courseService.deleteCourse(productId);
        System.out.println("dlete course controller .... msg "+msg);
        ApiResponse res=new ApiResponse(msg,true);

        return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);

    }

    @GetMapping("/all")
    public ResponseEntity<List<Course>> findAllCourses(){

        List<Course> courses = courseService.getAllCourses();

        return new ResponseEntity<List<Course>>(courses,HttpStatus.OK);
    }

    @GetMapping("/recent")
    public ResponseEntity<List<Course>> recentlyAddedCourse(){

        List<Course> courses = courseService.recentlyAddedCourse();

        return new ResponseEntity<List<Course>>(courses, HttpStatus.OK);
    }


    @PutMapping("/{courseId}/update")
    public ResponseEntity<Course> updateCourseHandler(@RequestBody Course req,@PathVariable Long courseId) throws CourseException{

        Course updatedCourse=courseService.updateCourse(courseId, req);

        return new ResponseEntity<Course>(updatedCourse,HttpStatus.OK);
    }

    @PostMapping("/creates")
    public ResponseEntity<ApiResponse> createMultipleCourse(@RequestBody CreateCourseRequest[] reqs) throws CourseException{

        for(CreateCourseRequest course:reqs) {
            courseService.createCourse(course);
        }

        ApiResponse res=new ApiResponse("courses created successfully",true);
        return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
    }

}