package com.Eonline.Education.Controller;

import com.Eonline.Education.Service.NotificationService;
import com.Eonline.Education.Service.UserService;
import com.Eonline.Education.modals.Account;
import com.Eonline.Education.modals.Education;
import com.Eonline.Education.modals.PasswordChange;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@Validated
public class UserController {
    @Autowired
    UserRepository userRepository;

    private final UserService userService;
    private final NotificationService notificationService;

    public UserController(UserService userService, NotificationService notificationService) {
        this.userService = userService;
        this.notificationService = notificationService;
    }

    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
    }

    @GetMapping("/getAccountDetail/{emailid}")
    public ResponseEntity<?> getUserDetails(@PathVariable("emailid") String emailid) {
        return userService.getAccountDetails(emailid);
    }

    @PutMapping("/updateUserDetails/{emailid}")
    public ResponseEntity<?> updateUserDetails(@PathVariable("emailid") String emailid, @RequestBody Account userAccount) {
        ResponseEntity<?> response = userService.updateAccountDetails(emailid, userAccount);
        notificationService.sendNotification(emailid, "Your account details have been updated.");
        return response;
    }

    @GetMapping("/getEducationDetail/{emailid}")
    public ResponseEntity<?> getUserEducationDetails(@PathVariable("emailid") String emailid) {
        return userService.getEducationDetails(emailid);
    }

    @PutMapping("/updateUserEducationDetails/{emailid}")
    public ResponseEntity<?> updateUserEducationDetails(@PathVariable("emailid") String emailid, @RequestBody Education userEducation) {
        ResponseEntity<?> response = userService.updateEducationDetails(emailid, userEducation);
        notificationService.sendNotification(emailid, "Your education details have been updated.");
        return response;
    }


    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userUpdate) {
        return new ResponseEntity<>(userService.updateDetails(id,userUpdate),HttpStatus.OK);

    }
    @PutMapping("/password/{id}")
    public ResponseEntity<String> updatePassword(@PathVariable Long id,@RequestBody PasswordChange passwordChange){
        return new ResponseEntity<>(userService.updatePassword(id,passwordChange),HttpStatus.CREATED);
    }
}



//package com.Eonline.Education.Controller;
//
//import com.Eonline.Education.Service.UserService;
//import com.Eonline.Education.modals.Account;
//import com.Eonline.Education.modals.Education;
//import com.Eonline.Education.modals.User;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//
//    private UserService userService;
//
//    public UserController(UserService userService) {
//        this.userService=userService;
//    }
//
//    @GetMapping("/profile")
//    public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws Exception {
//
//        System.out.println("/api/users/profile");
//        User user=userService.findUserProfileByJwt(jwt);
//        return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
//    }
//
//    @GetMapping("/getAccountDetail/{emailid}")
//    public ResponseEntity<?> getUserDetails(@PathVariable("emailid") String emailid) {
//        return userService.getAccountDetails(emailid);
//    }
//
//    @PutMapping("/updateUserDetails/{emailid}")
//    public ResponseEntity<?> updateUserDetails(@PathVariable("emailid") String emailid, @RequestBody Account userAccount) {
//        return userService.updateAccountDetails(emailid,userAccount);
//    }
//    // Sending a simple Email
//
//    @GetMapping("/getEducationDetail/{emailid}")
//    public ResponseEntity<?> getUserEducationDetails(@PathVariable("emailid") String emailid) {
//        return userService.getEducationDetails(emailid);
//    }
//
//    @PutMapping("/updateUserEducationDetails/{emailid}")
//    public ResponseEntity<?> updateUserEducationDetails(@PathVariable("emailid") String emailid, @RequestBody Education userEducation) {
//        return userService.updateEducationDetails(emailid,userEducation);
//    }
//
//}