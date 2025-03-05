package com.Eonline.Education.repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.Eonline.Education.modals.User;
import com.Eonline.Education.user.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    User findByEmail(String email);
     List<User> findAllByOrderByCreatedAtDesc();

    boolean existsByEmail(String userEmail);

    List<User> findAllByStatus(UserStatus userStatus);
}
