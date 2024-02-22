package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
@Service

public class CustemeUserServiceImplementation implements UserDetailsService{
	@Autowired
	UserRepository userRepository;
	
	public CustemeUserServiceImplementation(UserRepository userRepository) {
		// TODO Auto-generated constructor stub
		this.userRepository=userRepository;
		
		
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		User user=userRepository.findByEmail(username);
	
		
		
		if(user==null) {
			throw new UsernameNotFoundException("username not found");
			
		}
		
		List<GrantedAuthority> authorities=new ArrayList<>();
		
		return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
		
		
	}

}
