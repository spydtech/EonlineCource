package com.Eonline.Education.Service;


import com.Eonline.Education.modals.TraineeCredentialGenerator;
import jakarta.mail.MessagingException;

public interface TraineeService {
    public String creatingUserName(TraineeCredentialGenerator traineeCredentialGenerator) throws MessagingException;



}