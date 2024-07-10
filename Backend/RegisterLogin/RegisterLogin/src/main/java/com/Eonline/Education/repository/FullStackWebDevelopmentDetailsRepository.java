package com.Eonline.Education.repository;

import com.Eonline.Education.modals.FullStackWebDevelopmentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FullStackWebDevelopmentDetailsRepository extends JpaRepository<FullStackWebDevelopmentDetails,Long> {
   // FullStackWebDevelopmentDetails findByUserEmail(String userEmail);

    boolean existsByUserEmailAndCourseName(String email, String courseName);

    List<FullStackWebDevelopmentDetails> findByUserEmail(String email);

    List<FullStackWebDevelopmentDetails> findAllByCourseName(String courseName);
}
