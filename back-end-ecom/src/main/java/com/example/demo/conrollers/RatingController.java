package com.example.demo.conrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Rating;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.requests.RatingRequest;
import com.example.demo.services.RatinService;
import com.example.demo.services.UserService;
@RestController
@RequestMapping("/api/rating")
public class RatingController {
	
	@Autowired
	private RatinService ratinService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	public ResponseEntity<Rating> creatRating(@RequestBody RatingRequest req,@RequestHeader("Authorization") String jwt) throws UserException,ProductException{
		
		User user=userService.findUserProfilByjwt(jwt);
		Rating rating=ratinService.createRating(req, user);
		
		return new ResponseEntity<Rating>(rating,HttpStatus.CREATED);
	}
	
	@GetMapping("/product/{productId}")
	
	public ResponseEntity<List<Rating>> userOrderhistory(@PathVariable Long productId,@RequestHeader("Authorization") String jwt) throws UserException{
		
		List<Rating> rating=ratinService.getProductRating(productId);
		return new ResponseEntity<>(rating,HttpStatus.CREATED);
		
	}
	

	

}
