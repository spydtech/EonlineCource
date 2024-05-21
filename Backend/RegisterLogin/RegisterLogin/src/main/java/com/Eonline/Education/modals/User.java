package com.Eonline.Education.modals;

import com.Eonline.Education.user.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCrypt;

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
	@Size(min = 6, message = "Password must be at least 6 characters")
	@JsonIgnore // Prevent password from being serialized
	@Column(name = "password")
	private String password;

	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
	@Column(name = "email", unique = true)
	private String email;

	@Column(name = "created_at")
	private Date createdAt;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private Account account;

//	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
//	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn
	private OtpVerificationRequest otpVerificationRequest;

	@Enumerated(EnumType.STRING)
	@Column(name = "role")
	private UserRole role;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Order> orders;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private Education education;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private BioData bioData;

	@Version
	private int version; // Optimistic locking version field

	// Constructor, getters, and setters

	// Hashing password before setting it
	public void setPassword(String password) {
		// Perform password hashing before setting it
		this.password = hashPassword(password);
	}

	// Hashing method using BCrypt
	private String hashPassword(String password) {
		return BCrypt.hashpw(password, BCrypt.gensalt());
	}
}
