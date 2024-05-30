package com.Eonline.Education.Controller;

import com.Eonline.Education.Service.CalendarEventService;
import com.Eonline.Education.modals.CalendarEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/CalendarEvent")
public class CalendarEventController {

    @Autowired
    private CalendarEventService calendarEventService;


    @GetMapping("/{Email}")
    public ResponseEntity<?> getEvents(@PathVariable String Email){

        return calendarEventService.getAllEvents(Email);
    }

    @PostMapping("/{Email}")
    public CalendarEvent createEvent(@PathVariable String Email,@RequestBody CalendarEvent calendarEvent){
        return calendarEventService.addEvent(calendarEvent,Email);
    }

    @DeleteMapping("/{Email}")
    public void deleteEvent(@PathVariable String Email){
        calendarEventService.deleteEvent(Email);
    }


}
