package com.Eonline.Education.Service;

import com.Eonline.Education.Request.CourseRequest;
import com.Eonline.Education.Request.PaymentRequest;
import com.Eonline.Education.modals.Course;
import com.Eonline.Education.modals.Payment;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.PaymentRepository;
import com.Eonline.Education.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private UserRepository userRepository;

    public void processPayment(PaymentRequest paymentRequest) {
        Payment payment = mapPaymentRequestToEntity(paymentRequest);
        paymentRepository.save(payment);
    }

    private Payment mapPaymentRequestToEntity(PaymentRequest paymentRequest) {
        Payment payment = new Payment();
        User user = userRepository.findById(paymentRequest.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID: " + paymentRequest.getUserId()));
        payment.setUser(user);
        payment.setCourses(mapCourseRequests(paymentRequest.getCourses()));
        payment.setTotalAmount(paymentRequest.getTotalAmount());
        payment.setRazorpayPaymentId(paymentRequest.getRazorpayPaymentId());
        return payment;
    }

    private List<Course> mapCourseRequests(List<CourseRequest> courseRequests) {
        return courseRequests.stream()
                .map(this::mapCourseRequest)
                .collect(Collectors.toList());
    }

    private Course mapCourseRequest(CourseRequest courseRequest) {
        Course course = new Course();
        course.setId(courseRequest.getCourseId());
        course.setName(courseRequest.getCourseName());
        course.setPrice(courseRequest.getCoursePrice());
        return course;
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public List<Payment> getUserPayments(Long userId) {
        return paymentRepository.findByUserId(userId);
    }
}
