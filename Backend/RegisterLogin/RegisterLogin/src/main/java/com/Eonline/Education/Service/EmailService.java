package com.Eonline.Education.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendOtpEmail(String toEmail, String otp) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(toEmail);
        helper.setSubject("OTP Verification");
        helper.setText("Your OTP for registration is: " + otp);
        mailSender.send(message);
    }

    public void sendEmployeeID(String toEmail, String employeeId) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(toEmail);
        helper.setSubject("Employee Registration Is Successfully Completed");
        helper.setText("Your Employee ID : " + employeeId);
        mailSender.send(message);
    }

    public void sendUserNameAndPassword(String toEmail, String userName,String password ) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(toEmail);
        helper.setSubject("Sending Username And Password");
        //  helper.setText("Your username for registration is: " + userName);
        helper.setText("Your userName for registration is: "+userName+" Your password for registration is: " + password);

        mailSender.send(message);

    }

}
