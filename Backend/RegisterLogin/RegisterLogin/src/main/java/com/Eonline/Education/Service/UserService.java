package com.Eonline.Education.Service;


import com.Eonline.Education.modals.Account;
import com.Eonline.Education.modals.Education;
import com.Eonline.Education.modals.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {

	public User findUserById(Long userId) throws Exception;
	public User findUserProfileByJwt(String jwt) throws Exception;
	public List<User> findAllUsers();
	public ResponseEntity<?> getAccount_Details(String email);
	ResponseEntity<?> updateAccount_Details(String email, Account userAccount);
	public int generateSixDigitNumber();
	public ResponseEntity<?> updateEduction_Details(String email, Education userEducation);
	public ResponseEntity<?> getEducation_Details(String email);
}
