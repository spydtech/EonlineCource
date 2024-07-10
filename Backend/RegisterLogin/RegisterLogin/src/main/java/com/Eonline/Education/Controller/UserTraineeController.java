package com.Eonline.Education.Controller;

import com.Eonline.Education.Request.MainAndSubCourseName;
import com.Eonline.Education.Request.UserTraineeCourseRequest;
import com.Eonline.Education.Service.UserTraineeCourseService;
import com.Eonline.Education.response.CourseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/trainee")
public class UserTraineeController {
    @Autowired
    private UserTraineeCourseService userTraineeCourseService;

    @PostMapping
    public ResponseEntity<String> addSubCourseName(@RequestBody MainAndSubCourseName mainAndSubCourseName){
        return new ResponseEntity<>(userTraineeCourseService.addMainCourseDetails(mainAndSubCourseName),HttpStatus.OK);

    }

    @PostMapping("/save")
    public ResponseEntity  addSubCourse(@RequestBody UserTraineeCourseRequest userTraineeCourseRequest){
        return new ResponseEntity(userTraineeCourseService.addUserTraineeCourseDetails(userTraineeCourseRequest), HttpStatus.OK);
    }

    @GetMapping("/userEmail/{user_email}")
    public ResponseEntity<List<CourseResponse>> getSubCourse(@PathVariable String user_email){
        return new ResponseEntity<>(userTraineeCourseService.getFullStackWebDevelopmentDetailsByEmail(user_email), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<List<CourseResponse>> getSubCourseByCourseName(@PathVariable String name){
        return new ResponseEntity<>(userTraineeCourseService.getFullStackWebDevelopmentDetailsByCourse(name), HttpStatus.OK);
    }

}
