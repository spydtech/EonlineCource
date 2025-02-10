package com.Eonline.Education.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Eonline.Education.modals.Post;



@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	List<Post> findByNameContainingIgnoreCase(String name);
	Optional<Post> findByPostedBY(String postedBY);


	List<Post> findAllByPostedBY(String email);
}