package com.example.demo.requests;

public class LoginRequest {
	
	private String email;
	
	private String passowrd;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassowrd() {
		return passowrd;
	}

	public void setPassowrd(String passowrd) {
		this.passowrd = passowrd;
	}

	public LoginRequest(String email, String passowrd) {
		super();
		this.email = email;
		this.passowrd = passowrd;
	}
	
	
	

}
