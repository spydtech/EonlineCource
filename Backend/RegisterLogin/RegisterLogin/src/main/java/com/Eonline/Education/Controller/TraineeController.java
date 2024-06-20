package com.Eonline.Education.Controller;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.Service.CustomerTraineeDeatils;
import com.Eonline.Education.Service.TraineeService;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/trainee")
public class TraineeController {

    @Autowired
    TraineeService traineeService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    CustomerTraineeDeatils customerTraineeDeatils;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/register")
    public ResponseEntity<?> creatingLoginCredentials(@RequestBody TraineeCredentialGenerator traineeCredentialGenerator) throws MessagingException {
        return new ResponseEntity<>(traineeService.creatingUserName(traineeCredentialGenerator), HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody TraineeCredentialGenerator traineeCredentialGenerator) {

        System.out.println(traineeCredentialGenerator.getUserName() + " ----- " + traineeCredentialGenerator.getPassword());

        Authentication authentication = authenticate(traineeCredentialGenerator.getUserName(), traineeCredentialGenerator.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse();

        authResponse.setStatus(true);
        authResponse.setJwt(token);

        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customerTraineeDeatils.loadUserByUsername(username);

        System.out.println("sign in traineeDetails - " + userDetails);

        if (userDetails == null) {
            System.out.println("sign in traineeDetails - null " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            System.out.println("sign in traineeDetails - password not match " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
