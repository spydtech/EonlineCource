package com.example.RegisterLogin.Service;


import com.example.RegisterLogin.modals.Account;
import com.example.RegisterLogin.modals.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {

	public User findUserById(Long userId) throws Exception;
	public User findUserProfileByJwt(String jwt) throws Exception;
	public List<User> findAllUsers();
	public ResponseEntity<?> getAccount_Details(String email);

	ResponseEntity<?> updateAccount_Details(String email, Account userAccount);
}
