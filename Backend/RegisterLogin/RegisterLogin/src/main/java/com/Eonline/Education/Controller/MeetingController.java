package com.Eonline.Education.Controller;

import com.Eonline.Education.Service.MeetingService;
import com.Eonline.Education.modals.Enrollment;
import com.Eonline.Education.modals.Meeting;
import com.Eonline.Education.response.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/meeting")
public class MeetingController {
    @Autowired
    MeetingService meetingService;
    @PostMapping("/save")
    public ApiResponse meetSave(@RequestBody Meeting meeting) {
        return meetingService.meetSave(meeting);
    }
}
