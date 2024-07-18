package com.Eonline.Education.modals;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    private Long userId;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id")
    private List<Course> courses;

    private double totalAmount;

    private String razorpayPaymentId;

    // Getters and setters, constructors, and other methods

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private User user;
}