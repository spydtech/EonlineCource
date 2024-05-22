package com.Eonline.Education.repository;

import com.Eonline.Education.modals.Course;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    @Query("SELECT c FROM Course c WHERE " +
            "((:minPrice IS NULL AND :maxPrice IS NULL) OR (c.discountedPrice BETWEEN :minPrice AND :maxPrice)) AND " +
            "(:minDiscount IS NULL OR c.discountPercent >= :minDiscount) " +
            "ORDER BY CASE WHEN :sort = 'price_low' THEN c.discountedPrice END ASC, " +
            "CASE WHEN :sort = 'price_high' THEN c.discountedPrice END DESC, " +
            "c.createdAt DESC")
    List<Course> filterCourses(@Param("minPrice") Integer minPrice,
                               @Param("maxPrice") Integer maxPrice,
                               @Param("minDiscount") Integer minDiscount,
                               @Param("sort") String sort);

    List<Course> findTop10ByOrderByCreatedAtDesc();

    @Query("SELECT c FROM Course c WHERE c.title LIKE %:query% OR c.description LIKE %:query%")
    List<Course> searchProduct(@Param("query") String query);
}