package com.Eonline.Education.modals;

import com.Eonline.Education.user.UserStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

//	@NotBlank(message = "First name is required")
//	@Column(name = "first_name")
	private String firstName;

//	@NotBlank(message = "Last name is required")
//	@Column(name = "last_name")
	private String lastName;

//	@NotBlank(message = "Password is required")
//	@Column(name = "password")
	private String password;

//	@NotBlank(message = "Email is required")
//	@Email(message = "Email should be valid")
//	@Column(name = "email", unique = true)
	private String email;

	@Column(name = "created_at")
	private Date createdAt = new Date();

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private Account account;

	@Column(name = "role")
	private String role;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Order> orders;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private Education education;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private CalendarEvent calendarEvent;

	@ManyToOne
	@JoinColumn(name = "plan_id")
	private Plan plan;

	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] profilePhoto;


	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] coverPhoto;


	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<TaskUser> taskUsers = new ArrayList<>();

	@Version
	private int version;

	private String bio;

	private LocalDate dateOfBirth;

	private String gender;

	private String location;

	private String phoneNumber;

	private String website;
	@Enumerated(EnumType.STRING)
	private UserStatus status;

	private String confirmPassword;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Enrollment> enrollments;

//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Payment> payments;




}
