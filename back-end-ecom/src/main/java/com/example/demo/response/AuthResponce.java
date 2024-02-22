package com.example.demo.response;

public class AuthResponce {
	
	private String jwt;
	private String messageString;
	public AuthResponce(String jwt, String messageString) {
		super();
		this.jwt = jwt;
		this.messageString = messageString;
	}
	public AuthResponce() {
		
	}
	public String getJwt() {
		return jwt;
	}
	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
	public String getMessageString() {
		return messageString;
	}
	public void setMessageString(String messageString) {
		this.messageString = messageString;
	}
	
	
	

}
