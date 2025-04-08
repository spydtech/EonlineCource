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

	private String firstName;
	private String lastName;
	private String password;

	@Column(unique = true)
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

	// ✅ For Google login (URL)
	private String profilePicture;

	// ✅ For local uploads (image data)
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

	// Uncomment if needed later
	// @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	// private List<Payment> payments;
}
