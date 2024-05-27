package com.Eonline.Education.Controller;

import com.Eonline.Education.modals.Plan;

import com.Eonline.Education.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/plans")
public class PlanController {

    @Autowired
    private PlanRepository planRepository;

    // Get all plans
    @GetMapping
    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    // Get a plan by ID
    @GetMapping("/{id}")
    public ResponseEntity<Plan> getPlanById(@PathVariable Long id) {
        Optional<Plan> plan = planRepository.findById(id);
        return plan.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new plan - Admin only
    @PostMapping
    //@Secured("ROLE_ADMIN")
    public ResponseEntity<Plan> createPlan(@RequestBody Plan plan) {
        if (plan.getId() != null) {
            return ResponseEntity.badRequest().body(null);
        }
        Plan savedPlan = planRepository.save(plan);
        return ResponseEntity.ok(savedPlan);
    }

    // Update an existing
    @PutMapping("/{id}")
   // @Secured("ROLE_ADMIN")
    public ResponseEntity<Plan> updatePlan(@PathVariable Long id, @RequestBody Plan planDetails) {
        Optional<Plan> optionalPlan = planRepository.findById(id);
        if (optionalPlan.isPresent()) {
            Plan plan = optionalPlan.get();
            plan.setName(planDetails.getName());
            plan.setDescription(planDetails.getDescription());
            plan.setPlanType(planDetails.getPlanType());
            Plan updatedPlan = planRepository.save(plan);
            return ResponseEntity.ok(updatedPlan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a plan - Admin only
    @DeleteMapping("/{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Void> deletePlan(@PathVariable Long id) {
        if (planRepository.existsById(id)) {
            planRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
