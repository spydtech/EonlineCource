package com.Eonline.Education.Service;

import com.Eonline.Education.modals.TraineeCredentialGenerator;
import jakarta.mail.MessagingException;

import java.util.List;

public interface TraineeService {
    String createUserName(TraineeCredentialGenerator traineeCredentialGenerator) throws MessagingException;

    void logInTrainee(TraineeCredentialGenerator trainee);

    void logOutTrainee(String username);

    public List<TraineeCredentialGenerator> getAllTrainees();
}


//package com.Eonline.Education.Service;
//
//import com.Eonline.Education.modals.TraineeCredentialGenerator;
//import jakarta.mail.MessagingException;
//
//public interface TraineeService {
//    String createUserName(TraineeCredentialGenerator traineeCredentialGenerator) throws MessagingException;
//}
