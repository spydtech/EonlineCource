package com.Eonline.Education.Controller;

import com.Eonline.Education.Request.PaymentRequest;
import com.Eonline.Education.Service.PaymentService;
import com.Eonline.Education.modals.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/store-payment")
    public void storePayment(@RequestBody PaymentRequest paymentRequest) {
        paymentService.processPayment(paymentRequest);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Payment>> getAllPayments(){
        return new ResponseEntity<>(paymentService.getAllPayments(), HttpStatus.OK);
    }


    @GetMapping("/user/{userId}")
    public List<Payment> getUserPayments(@PathVariable Long userId) {
        return paymentService.getUserPayments(userId);
    }
}
