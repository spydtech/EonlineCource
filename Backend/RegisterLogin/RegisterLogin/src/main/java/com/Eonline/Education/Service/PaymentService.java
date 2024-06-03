package com.Eonline.Education.Service;

import com.Eonline.Education.Request.CourseRequest;
import com.Eonline.Education.Request.PaymentRequest;
import com.Eonline.Education.modals.Course;
import com.Eonline.Education.modals.Payment;
import com.Eonline.Education.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public void processPayment(PaymentRequest paymentRequest) {
        Payment payment = new Payment();
        payment.setUserId(paymentRequest.getUserId());
        payment.setCourses(mapCourseRequests(paymentRequest.getCourses()));
        payment.setTotalAmount(paymentRequest.getTotalAmount());
        payment.setRazorpayPaymentId(paymentRequest.getRazorpayPaymentId());

        paymentRepository.save(payment);
    }

    private List<Course> mapCourseRequests(List<CourseRequest> courseRequests) {
        return courseRequests.stream()
                .map(this::mapCourseRequest)
                .collect(Collectors.toList());
    }

    private Course mapCourseRequest(CourseRequest courseRequest) {
        Course course = new Course();
        course.setCourseId(courseRequest.getCourseId());
        course.setCourseName(courseRequest.getCourseName());
        course.setCoursePrice(courseRequest.getCoursePrice());
        return course;
    }
}