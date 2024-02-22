package com.example.demo.conrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.configuration.JwtProvider;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.repositories.UserRepository;
import com.example.demo.requests.LoginRequest;
import com.example.demo.response.AuthResponce;
import com.example.demo.services.CustemeUserServiceImplementation;


@RestController
@RequestMapping("/auth")
public class AuthController {
	
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JwtProvider jwtProvider;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustemeUserServiceImplementation custemeUserServiceImplementation;
	
		
	public AuthController() {
		
	}
	public AuthController(UserRepository userRepository, JwtProvider jwtProvider, PasswordEncoder passwordEncoder,
			CustemeUserServiceImplementation custemeUserServiceImplementation) {
		
		this.userRepository = userRepository;
		this.jwtProvider = jwtProvider;
		this.passwordEncoder = passwordEncoder;
		this.custemeUserServiceImplementation = custemeUserServiceImplementation;
		
		
	}




	@GetMapping("")
	private String sayHeloo() {
		
		
		return "hellow world";
		

	}
	
	@PostMapping("/signup")
	
	public ResponseEntity<AuthResponce> createUserhandeler(@RequestBody User user) throws UserException{
		String emailString=user.getEmail();
		String passowwrd=user.getPassword();
		String firstName=user.getFirstName();
		String lastName= user.getLastName();
	
		
		User isEmailExist=userRepository.findByEmail(emailString);
		if(isEmailExist!=null) {
			throw  new UserException("eamilis already used");
		}
		User createdUser=new User();
		createdUser.setEmail(emailString);
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);
		createdUser.setPassword(passwordEncoder.encode(passowwrd));
		
		
		User saveUser=userRepository.save(createdUser); 
		
		
		Authentication authentication= new UsernamePasswordAuthenticationToken(saveUser.getEmail(), saveUser.getPassword());
		SecurityContextHolder .getContext().setAuthentication(authentication);
		String tokenString=jwtProvider.gnerateToken(authentication);
		AuthResponce authResponce=new AuthResponce();
		authResponce.setJwt(tokenString);
		authResponce.setMessageString("signup in success");
		
		return new ResponseEntity<AuthResponce>(authResponce,HttpStatus.CREATED);
 	}
	@PostMapping("/signin")
	public ResponseEntity<AuthResponce> loginUserHandeler(@RequestBody LoginRequest loginRequest){
		
		String userName=loginRequest.getEmail();
		String passowrd=loginRequest.getPassowrd();
		
		Authentication authentication= authenivate(userName,passowrd);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String tokenString=jwtProvider.gnerateToken(authentication);
		AuthResponce authResponce=new AuthResponce();
		authResponce.setJwt(tokenString);
		authResponce.setMessageString("signup in success");
		
		
		return new ResponseEntity<AuthResponce>(authResponce,HttpStatus.CREATED);
	}

	private Authentication authenivate(String userName, String passowrd) {
		// TODO Auto-generated method stub
		UserDetails userDetails=custemeUserServiceImplementation.loadUserByUsername(userName);
		if(userDetails==null) {
			throw new BadCredentialsException("invalid username");
			
		}
		
		if (passowrd == null || passowrd.isEmpty()) {
		    // Handle the null or empty password case here
		    throw new IllegalArgumentException("Password cannot be null or empty");
		}
		if(!passwordEncoder.matches(passowrd, userDetails.getPassword())) {
			throw new BadCredentialsException("invalid passowrd");
		}
		
		return new UsernamePasswordAuthenticationToken(userDetails, null,userDetails.getAuthorities());
	}
	
	

}
