package com.Eonline.Education.modals;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * Represents an item in the shopping cart.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@Entity
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id", nullable = false)
    private Cart cart;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Size(max = 50, message = "Size must be less than or equal to 50 characters")
    @Column(name = "size")
    private String size;

    @Positive(message = "Quantity must be positive")
    @Column(name = "quantity")
    private int quantity;


    private int price;

    private int discountedPrice;

    @NotNull(message = "User ID is required")
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, price, course, size);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        CartItem other = (CartItem) obj;
        return Objects.equals(id, other.id) &&
                Objects.equals(price, other.price) &&
                Objects.equals(course, other.course) &&
                Objects.equals(size, other.size);
    }
}


//    @Override
//    public boolean equals(Object obj) {
//        if (this == obj)
//            return true;
//        if (obj == null)
//            return false;
//        if (getClass() != obj.getClass())
//            return false;
//        CartItem other = (CartItem) obj;
//        return Objects.equals(id, other.id) && Double.doubleToLongBits(price) == Double.doubleToLongBits(other.price)
//                && Objects.equals(course, other.course) && Objects.equals(size, other.size);
//    }



