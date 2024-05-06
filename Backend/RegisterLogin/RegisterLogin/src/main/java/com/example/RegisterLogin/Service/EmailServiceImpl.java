package com.example.RegisterLogin.Service;

import com.example.RegisterLogin.modals.EmailVerfication;
import com.example.RegisterLogin.modals.User;
import com.example.RegisterLogin.repository.EmailVerficationRepository;
import com.example.RegisterLogin.repository.UserRepository;
import com.example.RegisterLogin.response.EmailVerficationInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailVerficationRepository emailVerficationRepository;

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}") private String sender;

    // Method 1
    // To send a simple email
    public String sendSimpleMail(String EmailId)
    {

        // Try block to check for exceptions
        try {
            User CurrentVerficationUser = userRepository.findByEmail(EmailId);
            EmailVerfication verfication = new EmailVerfication();
            int Code =userService.generateSixDigitNumber();

            if (!emailVerficationRepository.existsByUserId(CurrentVerficationUser.getId())) {
                verfication.setUser(CurrentVerficationUser);
                verfication.setVerificationCode(Code);
                emailVerficationRepository.save(verfication);
            }
            else{
                EmailVerfication verficationExistingId = emailVerficationRepository.findByUserId(CurrentVerficationUser.getId());
                verficationExistingId.setVerificationCode(Code);
                emailVerficationRepository.save(verficationExistingId);

            }

            // Creating a simple mail message
            SimpleMailMessage mailMessage
                    = new SimpleMailMessage();

            // Setting up necessary details
            mailMessage.setFrom(sender);
            mailMessage.setTo(EmailId);
            mailMessage.setText("Your Email verification code is "+Code);
            mailMessage.setSubject("Email Verification");

            // Sending the mail
            javaMailSender.send(mailMessage);
            return "Mail Sent Successfully...";
        }

        // Catch block to handle the exceptions
        catch (Exception e) {
            return "Error while Sending Mail";
        }
    }

    @Override
    public String verifyingCode(String emailId, EmailVerficationInput emailVerficationInput) {
        User verifyUser = userRepository.findByEmail(emailId);
        EmailVerfication verifyEmail =emailVerficationRepository.findByUserId(verifyUser.getId());
        int currentCode =verifyEmail.getVerificationCode();
        if(( emailVerficationInput.getVerificationCode() == currentCode))
        {

            return "verification successful";
        }
        else  {
            return "incorrect verification code";
        }


    }


}
