package com.Eonline.Education.modals; // Corrected the package name typo

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
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
//	@Column(name = "email", unique = true) // Added unique constraint to email
	private String email;

	@Column(name = "created_at")
	private Date createdAt = new Date(); // Initialize createdAt with the current date

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

	@Version
	private int version; // Optimistic locking version field

	private String bio;

	private LocalDate dateOfBirth;
	@Lob
	private byte[] profilePhoto;

	@Lob
	private byte[] coverPhoto;

	private String gender;

	private String location;

	private String phoneNumber;

	private String website;

	private String confirmPassword;

}
