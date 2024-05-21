package com.Eonline.Education.repository;


import com.Eonline.Education.modals.Cart;
import com.Eonline.Education.modals.CartItem;
import com.Eonline.Education.modals.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    @Query("SELECT ci From CartItem ci Where ci.cart=:cart And ci.course=:course  And ci.userId=:userId")
    public CartItem isCartItemExist(@Param("cart") Cart cart, @Param("course") Course course,  @Param("userId")Long userId);

}
