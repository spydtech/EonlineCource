package com.example.RegisterLogin.repository;

import com.example.RegisterLogin.modals.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends JpaRepository<Education,String> {


    Education findByUserId(long userEducationID);

    boolean existsByUserId(long currentEduUserId);
}
