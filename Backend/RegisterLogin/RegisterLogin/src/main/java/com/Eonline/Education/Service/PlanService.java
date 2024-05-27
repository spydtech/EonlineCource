package com.Eonline.Education.Service;

import com.Eonline.Education.modals.Plan;
import com.Eonline.Education.repository.PlanRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Arrays;

@Service
public class PlanService {

    @Autowired
    private PlanRepository planRepository;

    @PostConstruct
    public void initPlans() {
        if (planRepository.count() == 0) {
            Plan basicPlan = new Plan(Plan.PlanType.BASIC, "Basic Plan Description");
            Plan premiumPlan = new Plan(Plan.PlanType.PREMIUM, "Premium Plan Description");
            Plan advancedPlan = new Plan(Plan.PlanType.ADVANCED, "Advanced Plan Description");
            planRepository.saveAll(Arrays.asList(basicPlan, premiumPlan, advancedPlan));
        }
    }
}
