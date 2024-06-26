package com.Eonline.Education.repository;

import com.Eonline.Education.modals.TraineeCredentialGenerator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TraineeRepository extends JpaRepository<TraineeCredentialGenerator, Long> {
    TraineeCredentialGenerator findByUserName(String userName);
    boolean existsByEmail(String email);
    TraineeCredentialGenerator findByEmail(String email);
}
