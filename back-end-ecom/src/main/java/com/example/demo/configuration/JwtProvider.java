package com.example.demo.configuration;


import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtProvider {
	
	SecretKey key=Keys.hmacShaKeyFor(JwtConst.SECET_KEY.getBytes());
	
	
	public String gnerateToken(Authentication auth) {
		String jwt=Jwts.builder()
				.setIssuedAt(new Date())
				.setExpiration(new Date( new Date().getTime()+845000000))
				.claim("email", auth.getName())
				.signWith(key).compact();
		return jwt;
	}
	
	public String  getEmailFromToken(String jwt) {
		// TODO Auto-generated method stub
		
		jwt=jwt.substring(7);
		
		Claims claims=Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
		 String email=String.valueOf(claims.get("email"));
		 
		 return email;  

	}

}
