package com.Eonline.Education.Service;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.Request.LoginRequest;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
import com.Eonline.Education.repository.TraineeRepository;
import com.Eonline.Education.response.AuthResponse;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Random;

@Service
public class TraineeServiceImpl implements TraineeService {

    @Autowired
    TraineeRepository traineeCredentialRepository;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private EmailService emailService;

    public String creatingUserName(TraineeCredentialGenerator traineeCredentialGenerator) throws MessagingException {
        if (traineeCredentialRepository.existsByEmail(traineeCredentialGenerator.getEmail())) {
            return "Email is already registered.";
        }

        emailService.sendUserNameAndPassword(traineeCredentialGenerator.getEmail(), traineeCredentialGenerator.getUserName(), traineeCredentialGenerator.getPassword());
        traineeCredentialGenerator.setPassword(passwordEncoder.encode(traineeCredentialGenerator.getPassword()));
        traineeCredentialRepository.save(traineeCredentialGenerator);

        return "UserName and password is sent successfully";
    }

}
