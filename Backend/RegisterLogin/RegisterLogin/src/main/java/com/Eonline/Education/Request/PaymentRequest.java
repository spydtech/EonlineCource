package com.Eonline.Education.Request;

import com.Eonline.Education.response.CourseDetailResponse;
import lombok.Data;
import java.util.List;

@Data
public class PaymentRequest {
    private Long userId;
    private String firstName;
    private String lastName;
    private String userEmail;
    private List<CourseDetailResponse> courseDetails; // Change this to a List of CourseDetail objects
    private Double totalAmount;
    private String razorpayPaymentId;
    private String paymentMethod;
}