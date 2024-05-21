package com.Eonline.Education.modals;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    @Column(name = "title", nullable = false)
    private String title;

    @NotBlank(message = "Description is required")
    @Column(name = "description", nullable = false)
    private String description;

    @NotNull(message = "Price is required")
    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "discounted_price")
    private int discountedPrice;

    @NotNull(message = "Discount percentage is required")
    @PositiveOrZero(message = "Discount percentage must be non-negative")
    @Max(value = 100, message = "Discount percentage cannot exceed 100")
    @Column(name = "discount_percent", nullable = false)
    private int discountPercent;

    @CreatedDate
    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    // Custom constructor
    public Course(String title, String description, int price, int discountedPrice, int discountPercent) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.discountPercent = discountPercent;
    }
}
