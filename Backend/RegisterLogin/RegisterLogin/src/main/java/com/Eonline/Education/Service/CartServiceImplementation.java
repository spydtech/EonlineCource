package com.Eonline.Education.Service;

import com.Eonline.Education.Request.AddItemRequest;
import com.Eonline.Education.exceptions.CourseException;
import com.Eonline.Education.modals.Cart;
import com.Eonline.Education.modals.CartItem;
import com.Eonline.Education.modals.Course;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.CartRepository;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImplementation implements CartService {

    private final CartRepository cartRepository;
    private final CartItemService cartItemService;
    private final CourseService courseService;
    public CartServiceImplementation(CartRepository cartRepository,CartItemService cartItemService,
                                     CourseService courseService) {
        this.cartRepository=cartRepository;
        this.courseService=courseService;
        this.cartItemService=cartItemService;
    }

    @Override
    public Cart createCart(User user) {

        Cart cart = new Cart();
        cart.setUser(user);

        return cartRepository.save(cart);
    }

    public Cart findUserCart(Long userId) {
        Cart cart =	cartRepository.findByUserId(userId);
        int totalPrice=0;
        int totalDiscountedPrice=0;
        int totalItem=0;
        for(CartItem cartsItem : cart.getCartItems()) {
            totalPrice+=cartsItem.getPrice();
            totalDiscountedPrice+=cartsItem.getDiscountedPrice();
            totalItem+=cartsItem.getQuantity();
        }

        cart.setTotalPrice(totalPrice);
        cart.setTotalItem(cart.getCartItems().size());
        cart.setTotalDiscountedPrice(totalDiscountedPrice);
        cart.setDiscount(totalPrice-totalDiscountedPrice);
        cart.setTotalItem(totalItem);

        return cartRepository.save(cart);

    }

    @Override
    public CartItem addCartItem(Long userId, AddItemRequest req) throws CourseException{
        Cart cart=cartRepository.findByUserId(userId);
        Course course=courseService.findCourseById(req.getCourseId());

        CartItem isPresent=cartItemService.isCartItemExist(cart, course, userId);

        if(isPresent == null) {
            CartItem cartItem = new CartItem();
            cartItem.setCourse(course);
            cartItem.setCart(cart);
            cartItem.setQuantity(req.getQuantity());
            cartItem.setUserId(userId);


            int price=course.getDiscountedPrice();
            cartItem.setPrice(price);


            CartItem createdCartItem=cartItemService.createCartItem(cartItem);
            cart.getCartItems().add(createdCartItem);
            return createdCartItem;
        }


        return isPresent;
    }


}
