package com.Eonline.Education.repository;

import com.Eonline.Education.modals.SaveEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SaveRepository extends JpaRepository<SaveEntity, Integer> {

	

}
