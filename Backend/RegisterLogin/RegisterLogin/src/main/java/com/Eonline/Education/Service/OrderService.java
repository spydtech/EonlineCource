package com.Eonline.Education.Service;

import com.Eonline.Education.exceptions.OrderException;
import com.Eonline.Education.modals.Order;
import com.Eonline.Education.modals.User;

import java.util.List;

public interface OrderService {
    public Order createOrder(User user);

    public Order findOrderById(Long orderId) throws OrderException;

    public List<Order> usersOrderHistory(Long userId);

    public Order placedOrder(Long orderId) throws OrderException;

    public Order confirmedOrder(Long orderId)throws OrderException;





    public Order cancledOrder(Long orderId) throws OrderException;

    public List<Order>getAllOrders();

    public void deleteOrder(Long orderId) throws OrderException;

}
