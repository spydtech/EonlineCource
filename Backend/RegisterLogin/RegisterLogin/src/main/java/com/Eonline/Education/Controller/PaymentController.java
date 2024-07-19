package com.Eonline.Education.Controller;

import com.Eonline.Education.Request.PaymentRequest;
import com.Eonline.Education.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/store-payment")
    public void storePayment(@RequestBody PaymentRequest paymentRequest) {
        paymentService.processPayment(paymentRequest);
    }
}
