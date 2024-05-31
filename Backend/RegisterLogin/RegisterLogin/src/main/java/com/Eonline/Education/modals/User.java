package com.Eonline.Education.modals;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

	@NotBlank(message = "First name is required")
	@Column(name = "first_name")
	private String firstName;

	@NotBlank(message = "Last name is required")
	@Column(name = "last_name")
	private String lastName;

	@NotBlank(message = "Password is required")
	@Column(name = "password")
	private String password;

	@NotBlank(message = "Email is required")
	@Column(name = "email")
	private String email;

	@Column(name = "created_at")
	private Date createdAt;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private Account account;


	@Column(name = "role")
	private String role;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Order> orders;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private Education education;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private BioData bioData;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private CalendarEvent calendarEvent;


	@ManyToOne
	@JoinColumn(name = "plan_id")
	private Plan plan;

	@Version
	private int version; // Optimistic locking version field

//	// Constructor, getters, and setters
//
//	// Hashing password before setting it
//	public void setPassword(String password) {
//		// Perform password hashing before setting it
//		this.password = hashPassword(password);
//	}
//
//	// Hashing method using BCrypt
//	private String hashPassword(String password) {
//		return BCrypt.hashpw(password, BCrypt.gensalt());
//	}
}
