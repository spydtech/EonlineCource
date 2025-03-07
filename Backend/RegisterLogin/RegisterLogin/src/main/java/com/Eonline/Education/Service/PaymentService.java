package com.Eonline.Education.Service;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.Request.PaymentRequest;
import com.Eonline.Education.modals.Payment;
import com.Eonline.Education.repository.PaymentRepository;
import com.Eonline.Education.user.PaymentStatus;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class PaymentService {

    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    OtpService otpService;
    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    NotificationService notificationService;

    public Payment processPayment(PaymentRequest paymentRequest) {
        Payment payment = new Payment();
        List<Payment> payments = paymentRepository.findAllByUserEmail(paymentRequest.getUserEmail());
        if (!payments.isEmpty()) {
            Payment payment1 = payments.get(0);
            payment.setUserId(payment1.getUserId());
        } else {
            String userId = otpService.generateUserId();
            payment.setUserId(userId);
        }

        payment.setUserName(paymentRequest.getFirstName() + " " + paymentRequest.getLastName());
        payment.setUserEmail(paymentRequest.getUserEmail());
        payment.setRazorpayPaymentId(paymentRequest.getRazorpayPaymentId());
        payment.setTotalAmount(paymentRequest.getTotalAmount());
        payment.setPaymentMethod(paymentRequest.getPaymentMethod());
        payment.setPaymentStatus(PaymentStatus.COMPLETED);

        // Extract the first course's duration (assuming one expiry date is needed)
        LocalDate joiningDate = LocalDate.now();
        payment.setJoiningDate(joiningDate);

        // Extract course duration from the first course
        int courseDurationMonths = 0;
        if (paymentRequest.getCourseDetails() != null && !paymentRequest.getCourseDetails().isEmpty()) {
            try {
                // Convert "2 months" to integer 2
                String durationString = paymentRequest.getCourseDetails().get(0).getCourseDuration();
                courseDurationMonths = Integer.parseInt(durationString.split(" ")[0]);
            } catch (Exception e) {
                courseDurationMonths = 0; // Default to 0 if parsing fails
            }
        }
        LocalDate expiryDate = joiningDate.plusMonths(courseDurationMonths);
        payment.setExpiryDate(expiryDate);

        // Convert course details into JSON string
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, Object> courseDetailsMap = new HashMap<>();
            courseDetailsMap.put("courseDetails", paymentRequest.getCourseDetails());
            payment.setCourseDetails(objectMapper.writeValueAsString(courseDetailsMap));
        } catch (Exception e) {
            e.printStackTrace();
        }
         notificationService.createNotification(paymentRequest.getUserEmail(), "payment successfully");
        paymentRepository.save(payment);
        return payment;
    }

    // These methods were outside the class. Now moved inside.
    public List<Payment> getAllPayments() {
        try {
            return paymentRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    public List<Payment> getUserPaymentHistory(String jwt) {
        String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
        return paymentRepository.findAllByUserEmail(email);
    }
}