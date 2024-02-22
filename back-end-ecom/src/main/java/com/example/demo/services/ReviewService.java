package com.example.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Review;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.requests.ReviewRequest;
@Service
public interface ReviewService {
	
	public Review createReview(ReviewRequest req,User user) throws ProductException;
    public List<Review>  getProductReviews(Long productId);

}
