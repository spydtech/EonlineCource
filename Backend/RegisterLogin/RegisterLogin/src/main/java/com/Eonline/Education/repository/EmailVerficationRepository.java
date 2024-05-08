package com.Eonline.Education.repository;

import com.Eonline.Education.modals.EmailVerfication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailVerficationRepository extends JpaRepository<EmailVerfication,Long> {
    EmailVerfication findByUserId(Long id);

    boolean existsByUserId(Long id);
}
