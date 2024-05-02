package com.example.RegisterLogin.Controller;

import com.example.RegisterLogin.Service.EmailService;
import com.example.RegisterLogin.Service.UserService;
import com.example.RegisterLogin.exceptions.UserException;
import com.example.RegisterLogin.modals.Account;
import com.example.RegisterLogin.modals.User;
import com.example.RegisterLogin.response.EmailVerficationInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;
    @Autowired
    private EmailService emailService;

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
    @PostMapping("/sendMail/{EmailId}")
    public String sendMail(@PathVariable ("EmailId") String EmailId)
    {
        String status
                = emailService.sendSimpleMail(EmailId);

        return status;
    }

    @GetMapping("/verfication/{EmailId}")
    public String verifyCode(@PathVariable ("EmailId") String EmailId, @RequestBody EmailVerficationInput emailVerficationInput){
        String status =emailService.verifyingCode(EmailId,emailVerficationInput);

        return status;
    }

}