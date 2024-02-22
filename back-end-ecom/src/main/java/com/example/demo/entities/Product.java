package com.example.demo.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;


	private String title;
	
	private String description;
	

	private String brand;
	
	private String color;
	
	@Column(name = "image_url")
	private String imageUrl ;
	@Embedded
	@ElementCollection
	@Column(name = "size ")
	
	private Set<Size> size=new HashSet<>();
	
	
	@Column(name = "price")
	private int price;
	
	public Set<Size> getSize() {
		return size;
	}

	public void setSize(Set<Size> size) {
		this.size = size;
	}

	@Column(name = "discount_price")
	private int discountPrice;
	@Column(name = "disscount_persent")
	private int discountPersent;
	
	@Column(name = "quantity")
	private int quantity;
	
	
	@OneToMany(mappedBy = "product",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Rating> ratings=new ArrayList<>();
	
	@Column(name = "num_rating")
	private int numOrders;
	
	
	private Double numRatings;

	@OneToMany(mappedBy = "product",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Review> reviews= new ArrayList<>();
	
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category  category;
	
	private LocalDateTime createAtt; 
	
	
	
	
	public Product() {
	}

	public Product(Long id, String title, String desc, String brand, String color, String imageUrl, Set<Size> sqzeSet,
			int price, int discountPrice, int discountPersent, int quantity, List<Rating> ratings, int numRating,
			List<Review> reviews, Category category, LocalDateTime createAtt) {
		super();
		this.id = id;
		this.title = title;
		this.description = desc;
		this.brand = brand;
		this.color = color;
		this.imageUrl = imageUrl;
		this.size = sqzeSet;
		this.price = price;
		this.discountPrice = discountPrice;
		this.discountPersent = discountPersent;
		this.quantity = quantity;
		this.ratings = ratings;
		this.numOrders = numRating;
		this.reviews = reviews;
		this.category = category;
		this.createAtt = createAtt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
		return numOrders;
	}

	public void setNumRating(int numRating) {
		this.numOrders = numRating;
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

	public  Double getNumRatings() {
		return numRatings;
	}

	public void setNumRatings(Double numRatings ) {
		this.numRatings = numRatings;
	}

	
}
