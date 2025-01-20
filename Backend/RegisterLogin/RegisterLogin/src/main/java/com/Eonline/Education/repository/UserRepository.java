package com.Eonline.Education.repository;

import java.util.List;
import java.util.Optional;

import com.Eonline.Education.modals.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {


     List<User> findAllByOrderByCreatedAtDesc();

    boolean existsByEmail(String userEmail);

    User findByEmail(String email);
}
