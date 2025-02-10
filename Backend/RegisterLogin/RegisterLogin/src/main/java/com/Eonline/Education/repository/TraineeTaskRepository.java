package com.Eonline.Education.repository;

import com.Eonline.Education.modals.TraineeTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TraineeTaskRepository extends JpaRepository<TraineeTask , Long> {
}
