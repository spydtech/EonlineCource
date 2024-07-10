package com.Eonline.Education.Service;

import com.Eonline.Education.Request.MainAndSubCourseName;
import com.Eonline.Education.Request.UserTraineeCourseRequest;
import com.Eonline.Education.modals.FullStackWebDevelopment;
import com.Eonline.Education.modals.FullStackWebDevelopmentDetails;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.FullStackWebDevelopmentDetailsRepository;
import com.Eonline.Education.repository.FullStackWebDevelopmentRepository;
import com.Eonline.Education.repository.TraineeRepository;
import com.Eonline.Education.repository.UserRepository;
import com.Eonline.Education.response.AllCourseResponse;
import com.Eonline.Education.response.CourseResponse;
import com.Eonline.Education.user.CourseList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class UserTraineeCourseServiceImplementation implements UserTraineeCourseService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TraineeRepository traineeRepository;

    @Autowired
    private FullStackWebDevelopmentRepository fullStackWebDevelopmentRepository;

    @Autowired
    private FullStackWebDevelopmentDetailsRepository fullStackWebDevelopmentDetailsRepository;

    ResponseEntity currentCourseResponse;

    String addingCourseNameInFullStack;

    List<FullStackWebDevelopmentDetails> returnDetails;

    @Override
    public String addMainCourseDetails(MainAndSubCourseName mainAndSubCourseName) {

        CourseList currentCourseName = CourseList.valueOf(mainAndSubCourseName.getMainCourseName().toUpperCase());

        switch (currentCourseName) {
            case FULLSTACKWEBDEVELOPMENT:
                addingCourseNameInFullStack = addingSubCourseInFullStack(mainAndSubCourseName);

                break;
            case DATA:
//                currentCourseResponse=SavingJavaData(userTraineeCourseRequest);
                break;
            default:
                System.out.println("No Course!");
                break;
        }
        return addingCourseNameInFullStack;
    }

    public String addingSubCourseInFullStack(MainAndSubCourseName mainAndSubCourseName) {
        FullStackWebDevelopment addingCourseName = new FullStackWebDevelopment();

        String currentSubCourseName = mainAndSubCourseName.getSubCourseName().toLowerCase();

        if (!fullStackWebDevelopmentRepository.existsByCourseName(currentSubCourseName)) {

            addingCourseName.setCourseName(currentSubCourseName);
            fullStackWebDevelopmentRepository.save(addingCourseName);
        } else {
            return "The Course is already in FullStackWebDevelopment " + currentSubCourseName;
        }
        return "The Course: " + currentSubCourseName + "is added in FullStackWebDevelopment";
    }

    //Getting All The Courses in FullStackWebDevelopment;
    public AllCourseResponse getAllFullStackWebDevelopmentDetails() {
        // Fetch all course details
        List<FullStackWebDevelopmentDetails> returnDetailsList = fullStackWebDevelopmentDetailsRepository.findAll();

        // Grouping courses by their names
        Map<String, List<FullStackWebDevelopmentDetails>> coursesMap = returnDetailsList.stream()
                .collect(Collectors.groupingBy(details -> details.getFullStackWebDevelopment().getCourseName()));

        List<AllCourseResponse.CourseDetails> courseDetailsList = new ArrayList<>();

        for (Map.Entry<String, List<FullStackWebDevelopmentDetails>> entry : coursesMap.entrySet()) {
            String courseName = entry.getKey();
            List<FullStackWebDevelopmentDetails> detailsList = entry.getValue();

            List<AllCourseResponse.UserDetails> users = detailsList.stream()
                    .map(details -> new AllCourseResponse.UserDetails(
                            details.getUser().getId(),
                            details.getUser().getFirstName() + " " + details.getUser().getLastName(),
                            details.getUser().getEmail()
                    ))
                    .collect(Collectors.toList());

            List<AllCourseResponse.TraineeDetails> trainees = detailsList.stream()
                    .map(details -> new AllCourseResponse.TraineeDetails(
                            details.getTraineeCredentialGenerator().getId(),
                            details.getTraineeCredentialGenerator().getFirstName() + " " + details.getTraineeCredentialGenerator().getLastName(),
                            details.getTraineeCredentialGenerator().getEmail()
                    ))
                    .collect(Collectors.toList());

            courseDetailsList.add(new AllCourseResponse.CourseDetails(courseName, users, trainees));
        }

        return new AllCourseResponse(courseDetailsList);
    }


    //Main Course List
    @Override
    public ResponseEntity addUserTraineeCourseDetails(UserTraineeCourseRequest userTraineeCourseRequest) {

        CourseList currentCourseName = CourseList.valueOf(userTraineeCourseRequest.getMainCourseName().toUpperCase());

        switch (currentCourseName) {
            case FULLSTACKWEBDEVELOPMENT:
                currentCourseResponse = savingFullStackWebDevelopmentDetails(userTraineeCourseRequest);

                break;
            case DATA:
//                currentCourseResponse=SavingJavaData(userTraineeCourseRequest);
                break;
            default:
                System.out.println("No Course!");
                break;
        }
        return currentCourseResponse;
    }

    @Override
    public List<CourseResponse> getFullStackWebDevelopmentDetailsByEmail(String email) {
        return List.of();
    }

    @Override
    public List<CourseResponse> getFullStackWebDevelopmentDetailsByCourse(String courseName) {
        return List.of();
    }


    //FullStackWebDevelopment Table Saving Data
    public ResponseEntity savingFullStackWebDevelopmentDetails(UserTraineeCourseRequest userTraineeCourseRequest) {
        User fullStackUser = userRepository.findByEmail(userTraineeCourseRequest.getUserEmail());

        TraineeCredentialGenerator fullStackTrainee = traineeRepository.findByEmail(userTraineeCourseRequest.getTraineeEmail());

        FullStackWebDevelopment subCourseNameId = fullStackWebDevelopmentRepository.findByCourseName(userTraineeCourseRequest.getSubCourseName().toLowerCase());

        FullStackWebDevelopmentDetails addingDetails = new FullStackWebDevelopmentDetails();

        if (!fullStackWebDevelopmentDetailsRepository.existsByUserEmailAndCourseName(fullStackUser.getEmail(), subCourseNameId.getCourseName())) {
            addingDetails.setUser(fullStackUser);
            addingDetails.setTraineeCredentialGenerator(fullStackTrainee);
            addingDetails.setFullStackWebDevelopment(subCourseNameId);
            addingDetails.setCourseName(subCourseNameId.getCourseName());

            fullStackWebDevelopmentDetailsRepository.save(addingDetails);
        } else {
            return new ResponseEntity("User with this " + fullStackUser.getEmail() + " alreay exists", HttpStatus.OK);
        }

        return new ResponseEntity(getFullStackWebDevelopmentDetailsByEmail(userTraineeCourseRequest.getUserEmail()), HttpStatus.CREATED);
    }


}
