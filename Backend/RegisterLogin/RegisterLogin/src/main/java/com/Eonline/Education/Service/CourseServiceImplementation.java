package com.Eonline.Education.Service;

import com.Eonline.Education.Request.CreateCourseRequest;
import com.Eonline.Education.exceptions.CourseException;
import com.Eonline.Education.modals.Course;
import com.Eonline.Education.repository.CourseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseServiceImplementation implements CourseService {
    private CourseRepository courseRepository;
    private UserService userService;

    public CourseServiceImplementation(CourseRepository courseRepository, UserService userService) {
        this.courseRepository = courseRepository;
        this.userService = userService;
    }

    @Override
    public Course createCourse(CreateCourseRequest req) {
        Course course = new Course();
        course.setTitle(req.getTitle());
        course.setDescription(req.getDescription());
        course.setDiscountedPrice(req.getDiscountedPrice());
        course.setDiscountPercent(req.getDiscountPercent());
        course.setPrice(req.getPrice());
        course.setCreatedAt(LocalDateTime.now());

        Course savedCourse = courseRepository.save(course);
        System.out.println("courses - " + course);

        return savedCourse;
    }

    @Override
    public String deleteCourse(Long courseId) throws CourseException {
        Course course = findCourseById(courseId);
        System.out.println("delete course " + course.getId() + " - " + courseId);
        courseRepository.delete(course);
        return "course deleted Successfully";
    }

    @Override
    public Course updateCourse(Long courseId, Course req) throws CourseException {
        Course course = findCourseById(courseId);
        if (req.getDescription() != null) {
            course.setDescription(req.getDescription());
        }
        return courseRepository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course findCourseById(Long id) throws CourseException {
        Optional<Course> opt = courseRepository.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        }
        throw new CourseException("course not found with id " + id);
    }

    @Override
    public List<Course> findProductByCategory(String category) {
        // Implement category-based filtering if needed
        return List.of();
    }

    @Override
    public List<Course> searchProduct(String query) {
        return courseRepository.searchProduct(query);
    }

    @Override
    public Page<Course> getAllProduct(String category, List<String> colors, List<String> sizes,
                                      Integer minPrice, Integer maxPrice, Integer minDiscount,
                                      String sort, String stock, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Course> courses = courseRepository.filterCourses(minPrice, maxPrice, minDiscount, sort);

        // If stock filtering is required, uncomment and implement accordingly
        // if (stock != null) {
        //     if (stock.equals("in_stock")) {
        //         courses = courses.stream().filter(c -> c.getQuantity() > 0).collect(Collectors.toList());
        //     } else if (stock.equals("out_of_stock")) {
        //         courses = courses.stream().filter(c -> c.getQuantity() < 1).collect(Collectors.toList());
        //     }
        // }

        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), courses.size());

        List<Course> pageContent = courses.subList(startIndex, endIndex);
        return new PageImpl<>(pageContent, pageable, courses.size());
    }

    @Override
    public List<Course> recentlyAddedCourse() {
        return courseRepository.findTop10ByOrderByCreatedAtDesc();
    }
}
