package com.Eonline.Education.Controller;

import com.Eonline.Education.Service.UserService;
import com.Eonline.Education.modals.Account;
import com.Eonline.Education.modals.Education;
import com.Eonline.Education.modals.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService=userService;
    }

    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws Exception {

        System.out.println("/api/users/profile");
        User user=userService.findUserProfileByJwt(jwt);
        return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
    }

    @GetMapping("/getAccountDetail/{emailid}")
    public ResponseEntity<?> getUserDetails(@PathVariable("emailid") String emailid) {
        return userService.getAccount_Details(emailid);
    }

    @PutMapping("/updateUserDetails/{emailid}")
    public ResponseEntity<?> updateUserDetails(@PathVariable("emailid") String emailid, @RequestBody Account userAccount) {
        return userService.updateAccount_Details(emailid, userAccount);
    }
    // Sending a simple Email

    @GetMapping("/getEducationDetail/{emailid}")
    public ResponseEntity<?> getUserEducationDetails(@PathVariable("emailid") String emailid) {
        return userService.getEducation_Details(emailid);
    }

    @PutMapping("/updateUserEducationDetails/{emailid}")
    public ResponseEntity<?> updateUserEducationDetails(@PathVariable("emailid") String emailid, @RequestBody Education userEducation) {
        return userService.updateEduction_Details(emailid, userEducation);
    }

}