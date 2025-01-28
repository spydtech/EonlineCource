package com.Eonline.Education.repository;


import com.Eonline.Education.modals.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository  extends JpaRepository<Task,Long> {


    Task findByUserIdAndDescription(Long id, String taskName);
    Task findByUserId(Long id);

    List<Task> findAllByUserId(Long id);
}