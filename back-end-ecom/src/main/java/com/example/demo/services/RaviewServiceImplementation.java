package com.example.demo.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.entities.Review;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.repositories.ReviewRepository;
import com.example.demo.requests.ReviewRequest;
@Service
public class RaviewServiceImplementation implements ReviewService {
	
	private ReviewRepository reviewRepository;
	private ProductService productService;
	private ProductRepository  productRepository;

	
	

	public RaviewServiceImplementation(ReviewRepository reviewRepository, ProductService productService, ProductRepository productRepository) {
		super();
		this.reviewRepository = reviewRepository;
		this.productService = productService;
		this.productRepository = productRepository;
	}


	@Override
	public String toString() {
		return "RaviewServiceImpl [reviewRepo=" + reviewRepository + ", productService=" + productService + ", productRepo="
				+ productRepository + "]";
	}


	public ReviewRepository getReviewRepo() {
		return reviewRepository;
	}


	public void setReviewRepo(ReviewRepository reviewRepository) {
		this.reviewRepository = reviewRepository;
	}


	public ProductService getProductService() {
		return productService;
	}


	public void setProductService(ProductService productService) {
		this.productService = productService;
	}


	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		Product product=productService.findProductById(req.getProductId());
		Review review=new Review();

		review.setProduct(product);
		review.setUser(user);
		review.setReview(req.getRaview());
		
		review.setCreatedAtt(LocalDateTime.now());
		
		return  reviewRepository.save(review);
	}

	@Override
	public List<Review> getProductReviews(Long productId) {
		// TODO Auto-generated method stub
		return reviewRepository.getAllProductRating(productId);
	}

}
