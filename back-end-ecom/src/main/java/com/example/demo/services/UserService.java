package com.example.demo.services;



import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.UserException;

public interface UserService {
	
	
	public User findUserById(long userId) throws UserException;
	public User findUserProfilByjwt(String jwt) throws UserException;  
}
