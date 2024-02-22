package com.example.demo.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.entities.Rating;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.repositories.RatingRepository;
import com.example.demo.requests.RatingRequest;
@Service
public class RatingServiceImplementation  implements RatinService {
	@Autowired
	private RatingRepository ratingRepository;
	@Autowired
	private ProductService productService;
	@Autowired 
	private ProductRepository productRepository;
	
	
	
	
	public RatingRepository getRatingRepo() {
		return ratingRepository;
	}

	public void setRatingRepo(RatingRepository ratingRepository) {
		this.ratingRepository = ratingRepository;
	}

	public ProductService getProductService() {
		return productService;
	}

	public void setProductService(ProductService productService) {
		this.productService = productService;
	}

	public RatingServiceImplementation() {
		super();
	}

	public RatingServiceImplementation(RatingRepository ratingRepository, ProductService productService) {
		super();
		this.ratingRepository = ratingRepository;
		this.productService = productService;
	}

	
	@Override
	public Rating createRating(RatingRequest req, User user) throws ProductException {
		
		Product product=productService.findProductById(req.getProductId());
		List<Rating> ratings=product.getRatings();
		Double evergDouble=0.0;
		
		
		Rating rating=new Rating();

		rating.setProduct(product);
		rating.setUser(user);
		rating.setRating(req.getRatinge());
		
		rating.setCreatedAtt(LocalDateTime.now());
		Rating ratingsRating=ratingRepository.save(rating);
        Double s=0.0;
       
		
		for (Rating ratin : ratings) {
			int length=ratings.size();
			
			s += ratin.getRating()/length;
			
			 
		}
		
		
		product.setNumRatings( Math.floor(s));
		productRepository.save(product);
		
		return ratingsRating;
		
	}

	@Override
	public List<Rating> getProductRating(Long productId) {
		
		
		return ratingRepository.getAllProductRating(productId);
	}

}
