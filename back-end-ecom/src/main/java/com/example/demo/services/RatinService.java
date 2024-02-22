package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Rating;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.requests.RatingRequest;

public interface RatinService {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
    public List<Rating>  getProductRating(Long productId);
}
