package com.example.demo.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.configuration.JwtProvider;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.repositories.UserRepository;

@Service

public class UserServiceImplementation  implements UserService{
	
	
	
	private UserRepository userRepository;
	private JwtProvider jwtProvider;
	

	public UserRepository getUserRepo() {
		return userRepository;
	}

	public void setUserRepo(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public JwtProvider getJwtProvider() {
		return jwtProvider;
	}

	public void setJwtProvider(JwtProvider jwtProvider) {
		this.jwtProvider = jwtProvider;
	}

	public UserServiceImplementation(UserRepository userRepository, JwtProvider jwtProvider) {
		super();
		this.userRepository = userRepository;
		this.jwtProvider = jwtProvider;
	}

	@Override
	public User findUserById(long userId) throws UserException {
		Optional<User> user=userRepository.findById(userId);
		if(user.isPresent()) {
			return user.get();
		}throw new UserException("this product is not found");
		
	}

	@Override
	public User findUserProfilByjwt(String jwt) throws UserException {
		// TODO Auto-generated method stub
		String email=jwtProvider.getEmailFromToken(jwt);
		
		User user=userRepository.findByEmail(email);
		if(user==null) {
			throw new UserException("user is  not found");
		}
		return user;
	}

}
