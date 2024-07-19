package com.Eonline.Education.modals;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userId;
    private String userName; // Concatenated firstName and lastName
    private String userEmail;

    private String courseDetails; // JSON string containing course names and prices

    private Double totalAmount;
    private String razorpayPaymentId;
    @Column(name = "created_at")
    private Date createdAt = new Date();

    // Getters and Setters
}
