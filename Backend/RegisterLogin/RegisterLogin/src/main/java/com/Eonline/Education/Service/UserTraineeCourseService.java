package com.Eonline.Education.Service;

import com.Eonline.Education.Request.MainAndSubCourseName;
import com.Eonline.Education.Request.UserTraineeCourseRequest;

import com.Eonline.Education.response.AllCourseResponse;
import com.Eonline.Education.response.CourseResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserTraineeCourseService {


     String addMainCourseDetails(MainAndSubCourseName mainAndSubCourseName);

     String addingSubCourseInFullStack(MainAndSubCourseName mainAndSubCourseName);

     AllCourseResponse getAllFullStackWebDevelopmentDetails();

     ResponseEntity addUserTraineeCourseDetails(UserTraineeCourseRequest userTraineeCourseRequest);

    List<CourseResponse> getFullStackWebDevelopmentDetailsByEmail(String email);

    List<CourseResponse> getFullStackWebDevelopmentDetailsByCourse(String courseName);

}
