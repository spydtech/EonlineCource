package com.Eonline.Education.Service;

import com.Eonline.Education.exceptions.MandatoryFieldMissingException;
import com.Eonline.Education.modals.ChatGroup;
import com.Eonline.Education.modals.Meeting;
import com.Eonline.Education.repository.ChatGroupRepository;
import com.Eonline.Education.repository.MeetingRepository;
import com.Eonline.Education.response.ApiResponse;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MeetingServiceImpl implements MeetingService{
    @Autowired
    MeetingRepository meetingRepository;
    @Autowired
    ChatGroupRepository chatGroupRepository;
    @Override
    public ApiResponse meetSave(Meeting meeting) {
        Meeting meeting1=new Meeting();
        Optional<ChatGroup> optional=chatGroupRepository.findByNameIgnoreCase(meeting.getGroup());
        if(optional.isPresent()) {
            ChatGroup group=optional.get();
            meeting1.setGroup(group.getName());
            meeting1.setMeetingTitle(meeting.getMeetingTitle());
            meeting1.setFromDate(meeting.getFromDate());
            meeting1.setToDate(meeting.getToDate());
            meeting1.setFromTime(meeting.getFromTime());
            meeting1.setToTime(meeting.getToTime());
            meetingRepository.save(meeting1);
           return new ApiResponse(meeting1);
        }else{
            return new ApiResponse("group not found");
        }
    }
}
