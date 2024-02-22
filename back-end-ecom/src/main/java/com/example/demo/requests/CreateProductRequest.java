package com.example.demo.requests;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.example.demo.entities.Category;
import com.example.demo.entities.Rating;
import com.example.demo.entities.Review;
import com.example.demo.entities.Size;



public class CreateProductRequest {

	private String title;
	
	private String description;
	

	private String brand;
	
	private String color;
	
	
	private String imageUrl ;
	
	
	private String topLevelCategory;
	
	private String secondLevelCategory;
	
	
	private String thirdLevelCategory ;
	
	
	
	private Set<Size> size=new HashSet<>();
	
	
	
	private int price;

	private int discountPrice;
	
	
	private int discountPersent;
	
	private int quantity;
	
	
	private List<Rating> ratings=new ArrayList<>();
	private int numRating;
	

	private List<Review> reviews= new ArrayList<>();
	private Category  category;
	
	private LocalDateTime createAtt;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDesc() {
		return description;
	}

	public void setDesc(String desc) {
		this.description = desc;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Set<Size> getSize() {
		return size;
	}

	public void setSize(Set<Size> size) {
		this.size = size;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getDiscountPrice() {
		return discountPrice;
	}

	public void setDiscountPrice(int discountPrice) {
		this.discountPrice = discountPrice;
	}

	public int getDiscountPersent() {
		return discountPersent;
	}

	public void setDiscountPersent(int discountPersent) {
		this.discountPersent = discountPersent;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public List<Rating> getRatings() {
		return ratings;
	}

	public void setRatings(List<Rating> ratings) {
		this.ratings = ratings;
	}

	public int getNumRating() {
		return numRating;
	}

	public void setNumRating(int numRating) {
		this.numRating = numRating;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public LocalDateTime getCreateAtt() {
		return createAtt;
	}

	public void setCreateAtt(LocalDateTime createAtt) {
		this.createAtt = createAtt;
	}

	public CreateProductRequest(String title, String desc, String brand, String color, String imageUrl, Set<Size> size,
			int price, int discountPrice, int discountPersent, int quantity, List<Rating> ratings, int numRating,
			List<Review> reviews, Category category, LocalDateTime createAtt) {
		super();
		this.title = title;
		this.description = desc;
		this.brand = brand;
		this.color = color;
		this.imageUrl = imageUrl;
		this.size = size;
		this.price = price;
		this.discountPrice = discountPrice;
		this.discountPersent = discountPersent;
		this.quantity = quantity;
		this.ratings = ratings;
		this.numRating = numRating;
		this.reviews = reviews;
		this.category = category;
		this.createAtt = createAtt;
	}

	public String getTopLavelCat() {
		return topLevelCategory;
	}

	public void setTopLavelCat(String topLavelCat) {
		this.topLevelCategory = topLavelCat;
	}

	public String getSeconLavelCat() {
		return secondLevelCategory;
	}

	public void setSeconLavelCat(String seconLavelCat) {
		this.secondLevelCategory = seconLavelCat;
	}

	public String getThirdLavelCat() {
		return thirdLevelCategory;
	}

	public void setThirdLavelCat(String thirdLavelCat) {
		this.thirdLevelCategory = thirdLavelCat;
	} 
	
	
	

}
