package com.Eonline.Education.Service;

import com.Eonline.Education.modals.Notification;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.NotificationRepository;
import com.Eonline.Education.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService{

    @Autowired
     NotificationRepository notificationRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public Notification createNotification(String email, String message) {
        Notification notification = new Notification();
        notification.setMessage(message);
        notification.setTimestamp(LocalDateTime.now());
        User user=userRepository.findByEmail(email);
        if(user!=null){
        notification.setUserId(user.getId());
        notification.setEmail(email);
        }
        notification.setRead(false);
        System.out.println("Saving notification: " + notification);
        return notificationRepository.save(notification);
    }

    @Override
    public List<Notification> getUnreadNotifications(String  email) {
        return notificationRepository.findByEmailAndReadFalse(email);
    }

    @Override
    public void markAsRead(Long notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notification not found"));
        notification.setRead(true);
        notificationRepository.save(notification);
    }
}

