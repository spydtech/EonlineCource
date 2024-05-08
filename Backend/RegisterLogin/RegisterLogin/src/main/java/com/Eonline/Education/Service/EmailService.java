package com.Eonline.Education.Service;

import com.Eonline.Education.response.EmailVerficationInput;

public interface EmailService {


    String sendSimpleMail(String details);


    String verifyingCode(String emailId, EmailVerficationInput emailVerficationInput);
}
