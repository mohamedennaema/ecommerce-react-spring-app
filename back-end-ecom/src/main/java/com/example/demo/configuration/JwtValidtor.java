package com.example.demo.configuration;

import java.io.IOException;
import java.util.List;

import javax.crypto.SecretKey;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtValidtor extends OncePerRequestFilter  {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		String jwt=request.getHeader(JwtConst.JWT_HEADER);
		if(jwt!=null) {
			
			jwt=jwt.substring(7);
			
			try {
				
				SecretKey key=Keys.hmacShaKeyFor(JwtConst.SECET_KEY.getBytes());
				 Claims claims=Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
				 String email=String.valueOf(claims.get("email"));
				 String authprite=String.valueOf(claims.get("authorities"));
				 
				List<GrantedAuthority> auth=AuthorityUtils.commaSeparatedStringToAuthorityList(authprite);
				Authentication authentication=new UsernamePasswordAuthenticationToken(email,null,auth );
				
				SecurityContextHolder.getContext().setAuthentication(authentication);  
				
			} catch (Exception e) {
				// TODO: handle exception
				throw new BadCredentialsException("ivalid tocken .. from");
				
			}
		}
		filterChain.doFilter(request, response);
		
	}

	
	
	
}
