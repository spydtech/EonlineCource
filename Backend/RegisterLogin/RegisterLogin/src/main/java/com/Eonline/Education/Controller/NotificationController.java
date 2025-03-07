package com.Eonline.Education.Controller;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.Service.NotificationService;
import com.Eonline.Education.modals.Notification;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @PostMapping("/create")
    public ResponseEntity<String> createNotification(
            @RequestParam String email,
            @RequestParam String message) {
        notificationService.createNotification(email, message);
        return ResponseEntity.ok("Notification created successfully");
    }

    @GetMapping("/unread")
    public ResponseEntity<List<Notification>> getUnreadNotifications(@RequestHeader("Authorization") String jwt) {
        String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
        User user = userRepository.findByEmail(email);
        return ResponseEntity.ok(notificationService.getUnreadNotifications(user.getEmail()));
    }

    @PutMapping("/read/{notificationId}")
    public ResponseEntity<String> markAsRead(@PathVariable Long notificationId) {
        notificationService.markAsRead(notificationId);
        return ResponseEntity.ok("Notification marked as read");
    }
    @DeleteMapping("/clear/notifications/{email}")
    public String clearNotifications(@PathVariable String email){
        return notificationService.clearNotifications(email);
    }
}
