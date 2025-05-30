package com.Eonline.Education.Controller;

import com.Eonline.Education.Service.UserService;
import com.Eonline.Education.modals.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@RestController
@RequestMapping("/api/admin")
public class AdminUserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(@RequestHeader("Authorization") String jwt)  {

        System.out.println("/api/users/profile");
        List<User> user=userService.findAllUsers();
        return new ResponseEntity<>(user,HttpStatus.ACCEPTED);
    }
}
