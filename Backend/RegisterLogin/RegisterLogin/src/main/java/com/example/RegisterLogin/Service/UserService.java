package com.example.RegisterLogin.Service;


import com.example.RegisterLogin.modals.User;

import java.util.List;

public interface UserService {

	public User findUserById(Long userId) throws Exception;
	public User findUserProfileByJwt(String jwt) throws Exception;
	public List<User> findAllUsers();


}
