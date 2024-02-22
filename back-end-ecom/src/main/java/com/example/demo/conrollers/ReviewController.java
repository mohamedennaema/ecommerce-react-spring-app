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

import com.example.demo.entities.Review;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.requests.ReviewRequest;
import com.example.demo.services.ReviewService;
import com.example.demo.services.UserService;
@RestController
@RequestMapping("/api/review")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	public ResponseEntity<Review> creatRating(@RequestBody ReviewRequest req,@RequestHeader("Authorization") String jwt) throws UserException,ProductException{
		
		User user=userService.findUserProfilByjwt(jwt);
		Review review=reviewService.createReview(req, user);
		
		return new ResponseEntity<Review>(review,HttpStatus.CREATED);
	}
	
	@GetMapping("/product/{productId}")
	
	public ResponseEntity<List<Review>> userOrderhistory(@PathVariable Long productId,@RequestHeader("Authorization") String jwt) throws UserException{
	
		List<Review> reviews=reviewService.getProductReviews(productId);
		return new ResponseEntity<>(reviews,HttpStatus.CREATED);
		
	}

}
