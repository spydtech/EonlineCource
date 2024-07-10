package com.Eonline.Education.repository;

import com.Eonline.Education.modals.FullStackWebDevelopment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FullStackWebDevelopmentRepository extends JpaRepository<FullStackWebDevelopment,Long> {
    FullStackWebDevelopment findByCourseName(String lowerCase);

    boolean existsByCourseName(String currentSubCourseName);
}
