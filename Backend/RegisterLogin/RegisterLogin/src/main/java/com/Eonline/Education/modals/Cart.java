package com.Eonline.Education.modals;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

/**
 * Represents a shopping cart entity.
 */
@Entity
@Table(name = "cart")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CartItem> cartItems = new HashSet<>();

    @Column(name = "total_price")
    private double totalPrice;

    @Column(name = "total_item")
    private int totalItem;

    @Column(name = "total_discounted_price")
    private int totalDiscountedPrice;

    @Column(name = "discount")
    private int discount;

    /**
     * Constructs a new Cart for a given user with default values.
     *
     * @param user the user associated with this cart
     */
    public Cart(User user) {
        this.user = user;
        this.totalPrice = 0;
        this.totalItem = 0;
        this.totalDiscountedPrice = 0;
        this.discount = 0;
    }

    // Getters and setters (if not using Lombok)
}
