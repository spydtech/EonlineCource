package com.example.RegisterLogin.repository;

import com.example.RegisterLogin.modals.EmailVerfication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailVerficationRepository extends JpaRepository<EmailVerfication,Long> {
    EmailVerfication findByUserId(Long id);

    boolean existsByUserId(Long id);
}
