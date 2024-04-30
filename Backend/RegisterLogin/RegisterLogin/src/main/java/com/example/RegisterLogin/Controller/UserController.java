package com.example.RegisterLogin.Controller;

import com.example.RegisterLogin.Service.UserService;
import com.example.RegisterLogin.exceptions.UserException;
import com.example.RegisterLogin.modals.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}