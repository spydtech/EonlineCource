package com.Eonline.Education.repository;

import com.Eonline.Education.modals.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {




    List<Meeting> findAllByGroupId(Long groupId);
}
