package com.Eonline.Education.modals;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@Entity
public class FullStackWebDevelopment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseName;

    @OneToOne(mappedBy = "fullStackWebDevelopment", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private FullStackWebDevelopmentDetails fullStackWebDevelopmentDetails;
}
