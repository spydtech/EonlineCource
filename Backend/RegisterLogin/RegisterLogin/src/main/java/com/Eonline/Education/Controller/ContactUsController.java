package com.Eonline.Education.Controller;

import com.Eonline.Education.Service.ContactUsService;
import com.Eonline.Education.modals.ContactUs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContactUsController {
    @Autowired
    ContactUsService contactUsService;

    @PostMapping("/saveContactUs")
    public ResponseEntity<ContactUs> saveContactUsDetails(@RequestBody ContactUs contactUs){
        return new ResponseEntity<>(contactUsService.saveContactDetails(contactUs), HttpStatus.CREATED);
    }
}
