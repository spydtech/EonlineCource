//package com.Eonline.Education.Service;
//
//
//import com.Eonline.Education.exceptions.OrderException;
//import com.Eonline.Education.modals.Order;
//import com.Eonline.Education.modals.User;
//import com.Eonline.Education.repository.OrderRepository;
//import com.Eonline.Education.user.OrderStatus;
//import com.Eonline.Education.user.PaymentStatus;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class OrderServiceImplementation implements OrderService{
//    @Autowired
//    OrderRepository orderRepository;
//    @Override
//    public Order createOrder(User user) {
//        return null;
//    }
//
//    @Override
//    public Order findOrderById(Long orderId) throws OrderException {
//        Optional<Order> opt=orderRepository.findById(orderId);
//
//        if(opt.isPresent()) {
//            return opt.get();
//        }
//        throw new OrderException("order not exist with id "+orderId);
//
//    }
//
//    @Override
//    public List<Order> usersOrderHistory(Long userId) {
//        List<Order> orders=orderRepository.getUsersOrders(userId);
//        return orders;
//
//    }
//
//    @Override
//    public Order placedOrder(Long orderId) throws OrderException {
//        Order order=findOrderById(orderId);
//
//        order.setOrderStatus(OrderStatus.PLACED);
//        order.getPaymentDetails().setStatus(PaymentStatus.COMPLETED);
//        return order;
//    }
//
//    @Override
//    public Order confirmedOrder(Long orderId) throws OrderException {
//        Order order=findOrderById(orderId);
//        order.setOrderStatus(OrderStatus.CONFIRMED);
//
//
//        return orderRepository.save(order);
//    }
//
//    @Override
//    public Order cancledOrder(Long orderId) throws OrderException {
//        Order order=findOrderById(orderId);
//        order.setOrderStatus(OrderStatus.CONFIRMED);
//
//
//        return orderRepository.save(order);
//    }
//
//    @Override
//    public List<Order> getAllOrders() {
//        return orderRepository.findAllByOrderByCreatedAtDesc();
//    }
//
//    @Override
//    public void deleteOrder(Long orderId) throws OrderException {
//        Order order =findOrderById(orderId);
//
//        orderRepository.deleteById(orderId);
//
//    }
//}
