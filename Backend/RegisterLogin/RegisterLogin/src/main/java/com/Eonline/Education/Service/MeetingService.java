package com.Eonline.Education.Service;

import com.Eonline.Education.modals.Enrollment;
import com.Eonline.Education.modals.Meeting;
import com.Eonline.Education.response.ApiResponse;

public interface MeetingService {
    ApiResponse meetSave(Meeting meeting);
}
