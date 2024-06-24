package com.Eonline.Education.Service;

import com.Eonline.Education.modals.TraineeCredentialGenerator;
import jakarta.mail.MessagingException;

public interface TraineeService {
    String createUserName(TraineeCredentialGenerator traineeCredentialGenerator) throws MessagingException;

    void logInTrainee(TraineeCredentialGenerator trainee);

    void logOutTrainee(String username);
}


//package com.Eonline.Education.Service;
//
//import com.Eonline.Education.modals.TraineeCredentialGenerator;
//import jakarta.mail.MessagingException;
//
//public interface TraineeService {
//    String createUserName(TraineeCredentialGenerator traineeCredentialGenerator) throws MessagingException;
//}
