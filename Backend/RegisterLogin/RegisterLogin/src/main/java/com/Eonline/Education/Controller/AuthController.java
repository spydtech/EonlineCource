package com.Eonline.Education.Controller;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.Request.LoginRequest;
import com.Eonline.Education.Request.GoogleAuthRequest;
import com.Eonline.Education.Service.CustomUserDetails;
import com.Eonline.Education.Service.EmailService;
import com.Eonline.Education.Service.NotificationService;
import com.Eonline.Education.Service.OtpService;
import com.Eonline.Education.exceptions.AuthenticationBasedException;
import com.Eonline.Education.modals.OtpVerificationRequest;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.modals.UserRegistrationRequest;
import com.Eonline.Education.repository.UserRepository;
import com.Eonline.Education.response.AuthResponse;
import com.Eonline.Education.user.UserRole;
import com.Eonline.Education.user.UserStatus;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtTokenProvider jwtTokenProvider;
    @Autowired private CustomUserDetails customUserDetails;
    @Autowired private EmailService emailService;
    @Autowired private OtpService otpService;
    @Autowired private NotificationService notificationService;

    private String generatedOtp;
    private String email;
    private String registeredFirstName;
    private String registeredLastName;
    private String registeredPassword;
    private UserRole registeredRole;

    @Value("${google.client-id}")
    private String googleClientId;

    // ========== Registration ==========
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegistrationRequest request) throws MessagingException, AuthenticationBasedException {
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already registered.");
        }

        generatedOtp = otpService.generateOtp();
        emailService.sendOtpEmail(request.getEmail(), generatedOtp);

        email = request.getEmail();
        registeredFirstName = request.getFirstName();
        registeredLastName = request.getLastName();
        registeredPassword = request.getPassword();
        registeredRole = UserRole.CUSTOMER;

        return ResponseEntity.ok("OTP sent successfully.");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody OtpVerificationRequest request) throws AuthenticationBasedException {
        if (generatedOtp != null && request.getOtp().equals(generatedOtp)) {
            User created = new User();
            created.setFirstName(registeredFirstName);
            created.setLastName(registeredLastName);
            created.setEmail(email);
            created.setRole(String.valueOf(registeredRole));
            created.setStatus(UserStatus.INACTIVE);
            created.setPassword(passwordEncoder.encode(registeredPassword));
            User savedUser = userRepository.save(created);

            Authentication authentication = new UsernamePasswordAuthenticationToken(email, registeredPassword);
            SecurityContextHolder.getContext().setAuthentication(authentication);

            String token = jwtTokenProvider.generateToken(authentication);
            AuthResponse authResponse = new AuthResponse(token, true);

            generatedOtp = null;
            email = null;
            registeredFirstName = null;
            registeredLastName = null;

            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } else {
            return ResponseEntity.badRequest().body(new AuthResponse(null, false, "Invalid OTP. Registration failed."));
        }
    }

    // ========== Login ==========
    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequest loginRequest) {
        try {
            String username = loginRequest.getEmail();
            String password = loginRequest.getPassword();

            Authentication authentication = authenticate(username, password);
            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user = userRepository.findByEmail(username);
            user.setStatus(UserStatus.ACTIVE);
            userRepository.save(user);

            String token = jwtTokenProvider.generateToken(authentication);
            AuthResponse authResponse = new AuthResponse(token, true);
            authResponse.setRole(user.getRole());

            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);
        if (userDetails == null || !passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

    // ========== Logout ==========
    @PostMapping("/logout/{email}")
    public ResponseEntity<String> logoutUser(@PathVariable String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
        user.setStatus(UserStatus.INACTIVE);
        userRepository.save(user);
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("User logged out successfully.");
    }

    // ========== Forgot Password ==========
    @PostMapping("/forget")
    public ResponseEntity<String> forgetPassword(@RequestBody User user) throws MessagingException, AuthenticationBasedException {
        User emailUser = userRepository.findByEmail(user.getEmail());
        if (emailUser != null) {
            generatedOtp = otpService.generateOtp();
            emailService.sendOtpEmail(user.getEmail(), generatedOtp);
            return ResponseEntity.ok("OTP sent successfully.");
        } else {
            return ResponseEntity.badRequest().body("Invalid email.");
        }
    }

    @PostMapping("/validating-otp")
    public ResponseEntity<String> validatingOtp(@RequestBody OtpVerificationRequest request) throws AuthenticationBasedException {
        if (generatedOtp != null && request.getOtp().equals(generatedOtp)) {
            return new ResponseEntity<>("OTP verified.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid OTP.", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/confirmpwd/{email}")
    public ResponseEntity<String> confirmPassword(@PathVariable String email, @RequestBody User user) {
        String password = user.getPassword();
        String confirmPassword = user.getConfirmPassword();

        if (!password.equals(confirmPassword)) {
            return new ResponseEntity<>("Passwords do not match", HttpStatus.BAD_REQUEST);
        }

        User existingUser = userRepository.findByEmail(email);
        if (existingUser == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }

        existingUser.setPassword(passwordEncoder.encode(password));
        existingUser.setConfirmPassword(passwordEncoder.encode(confirmPassword));
        userRepository.save(existingUser);

        notificationService.createNotification(existingUser.getEmail(), "Password updated successfully");
        return new ResponseEntity<>("Password updated successfully", HttpStatus.OK);
    }

    // ========== Google Login ==========
    @PostMapping("/google")
    public ResponseEntity<?> googleAuth(@RequestBody GoogleAuthRequest googleAuthRequest) {
        try {
            GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), new GsonFactory())
                    .setAudience(Collections.singletonList(googleClientId))
                    .build();

            GoogleIdToken idToken = verifier.verify(googleAuthRequest.getToken());
            if (idToken != null) {
                GoogleIdToken.Payload payload = idToken.getPayload();

                String email = payload.getEmail();
                String name = (String) payload.get("name");
                String pictureUrl = (String) payload.get("picture");

                User user = userRepository.findByEmail(email);
                if (user == null) {
                    user = new User();
                    user.setEmail(email);
                    user.setFirstName(name);
                    user.setRole("CUSTOMER");
                    user.setStatus(UserStatus.ACTIVE);
                    user.setProfilePicture(pictureUrl);
                    userRepository.save(user);
                }

                Authentication auth = new UsernamePasswordAuthenticationToken(email, null, null);
                String token = jwtTokenProvider.generateToken(auth);

                AuthResponse authResponse = new AuthResponse(token, true);
                authResponse.setRole(user.getRole());

                return new ResponseEntity<>(authResponse, HttpStatus.OK);
            } else {
                return ResponseEntity.badRequest().body("Invalid Google token");
            }
        } catch (GeneralSecurityException | IOException e) {
            return ResponseEntity.badRequest().body("Google authentication failed");
        }
    }
}
