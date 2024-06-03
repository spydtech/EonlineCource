package com.Eonline.Education.Request;

import lombok.Data;

import java.util.List;

@Data
public class PaymentRequest {
    private Long userId;
    private List<CourseRequest> courses;
    private double totalAmount;
    private String razorpayPaymentId;

    // Getters and setters
    // You can generate these using your IDE or manually define them
    // Ensure to add appropriate constructors and other methods as needed
}