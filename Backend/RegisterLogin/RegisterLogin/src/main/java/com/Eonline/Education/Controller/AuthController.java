package com.Eonline.Education.Controller;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.Request.LoginRequest;
import com.Eonline.Education.Service.CustomUserDetails;
import com.Eonline.Education.Service.EmailService;
import com.Eonline.Education.Service.OtpService;
import com.Eonline.Education.exceptions.UserException;
import com.Eonline.Education.modals.OtpVerificationRequest;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.modals.UserRegistrationRequest;
import com.Eonline.Education.repository.UserRepository;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;
    private CustomUserDetails customUserDetails;
    @Autowired
    private EmailService emailService;

    @Autowired
    private OtpService otpService;

    private String generatedOtp;
    private String email;
    private String registeredUserName;

    private String registeredPassword;


    public AuthController(UserRepository userRepository,PasswordEncoder passwordEncoder,JwtTokenProvider jwtTokenProvider,CustomUserDetails customUserDetails){
        this.userRepository=userRepository;
        this.passwordEncoder=passwordEncoder;
        this.jwtTokenProvider=jwtTokenProvider;
        this.customUserDetails=customUserDetails;

    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegistrationRequest request) throws MessagingException, jakarta.mail.MessagingException, UserException {
        // Check if the email is already registered
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already registered.");
        }

        // Generate OTP
        generatedOtp = otpService.generateOtp();

        // Send OTP via email
        emailService.sendOtpEmail(request.getEmail(), generatedOtp);

        // Store registered email for OTP verification
        email = request.getEmail();

        registeredUserName = request.getUserName();
        registeredPassword = request.getPassword();

        User isEmailExist=userRepository.findByEmail(email);

        return ResponseEntity.ok("OTP sent successfully.");
    }

//    @PostMapping("/checkEmail")
//    public ResponseEntity<String> checkEmail(@RequestBody String email) {
//        // Check if the email is already registered
//        if (userRepository.existsByEmail(email)) {
//            return ResponseEntity.badRequest().body("Email is already registered.");
//        }
//        return ResponseEntity.ok("Email is available."); // Email is not registered
//    }

    @PostMapping("/verify-otp")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody OtpVerificationRequest request) throws UserException {
            if(generatedOtp !=null && request.getOtp().equals(generatedOtp)){
                User created = new User();
                created.setUserName(registeredUserName);
                created.setEmail(email);
                created.setPassword(passwordEncoder.encode(registeredPassword));
                userRepository.save(created);


                Authentication authentication = new UsernamePasswordAuthenticationToken(email, registeredPassword);
                SecurityContextHolder.getContext().setAuthentication(authentication);

                String token = jwtTokenProvider.generateToken(authentication);
                AuthResponse authResponse= new AuthResponse(token,true);
                // Clear stored OTP and registered email after successful registration
                generatedOtp = null;
                email = null;
                registeredUserName = null;
                registeredPassword = null;
                return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.OK);

            }else {
                // OTP verification failed
                return ResponseEntity.badRequest().body(new AuthResponse(null, false, "Invalid OTP. Registration failed."));
            }
    }



    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        System.out.println(username +" ----- "+password);

        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);


        String token = jwtTokenProvider.generateToken(authentication);
        AuthResponse authResponse= new AuthResponse();

        authResponse.setStatus(true);
        authResponse.setJwt(token);

        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);

        System.out.println("sign in userDetails - "+userDetails);

        if (userDetails == null) {
            System.out.println("sign in userDetails - null " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            System.out.println("sign in userDetails - password not match " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}