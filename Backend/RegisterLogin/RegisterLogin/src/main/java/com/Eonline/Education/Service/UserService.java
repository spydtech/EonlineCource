package com.Eonline.Education.Service;

import com.Eonline.Education.modals.Account;
import com.Eonline.Education.modals.Education;
import com.Eonline.Education.modals.PasswordChange;
import com.Eonline.Education.modals.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {

	User findUserById(Long userId) throws Exception;

	User findUserProfileByJwt(String jwt) throws Exception;

	List<User> findAllUsers();

	ResponseEntity<?> getAccountDetails(String email);

	ResponseEntity<?> updateAccountDetails(String email, Account userAccount);

	int generateSixDigitNumber();

	ResponseEntity<?> updateEducationDetails(String email, Education userEducation);

	ResponseEntity<?> getEducationDetails(String email);

	public User findByEmail(String email);

	public User saveUser(User user);

	public User updateDetails(long id,User userUpdate);

	public String updatePassword(long userId, PasswordChange passwordChange);




}
