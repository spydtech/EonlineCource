package com.Eonline.Education.modals;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Month;
import java.time.Year;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="Education_Details")
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nameOfInstitution;

    private String degree;

    @JsonFormat(pattern="MM")
    private   Month startMonth;
    @JsonFormat(pattern="yyyy")
    private Year startYear;
    @JsonFormat(pattern="MM")
    private Month  graduationMonth;
    @JsonFormat(pattern="yyyy")
    private Year graduationYear;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
