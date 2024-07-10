package com.Eonline.Education.modals;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@RequiredArgsConstructor
@Data
@Table(name = "FullStackWebDevelopmentDetails")

public class FullStackWebDevelopmentDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String courseName;


    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "user_email", referencedColumnName = "email")
    private User user;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "trainee_email", referencedColumnName = "email")
    private TraineeCredentialGenerator traineeCredentialGenerator;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", referencedColumnName = "id")
    private FullStackWebDevelopment fullStackWebDevelopment;


    /*@PrePersist
    @PreUpdate
    public void setCourseName() {
        this.courseName = this.getClass().getAnnotation(Table.class).name();
    }
}*/
// (name = "user_email", referencedColumnName = "email")

//  (name = "trainee_email", referencedColumnName = "email")
}