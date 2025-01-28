package com.Eonline.Education.repository;

import com.Eonline.Education.modals.ChatGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatGroupRepository extends JpaRepository<ChatGroup, Long> {

    Optional<ChatGroup> findByNameIgnoreCase(String group);

    Optional<ChatGroup> findByName(String groupName);

}
