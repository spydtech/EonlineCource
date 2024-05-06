package com.example.RegisterLogin.Service;

import com.example.RegisterLogin.response.EmailVerficationInput;

public interface EmailService {


    String sendSimpleMail(String details);


    String verifyingCode(String emailId, EmailVerficationInput emailVerficationInput);
}
