package com.example.demo.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Review {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "product_id")
	private Product product;
	
	@Column(name = "review")
	private String review;
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	
	private LocalDateTime createdAtt;
	
	
	public Review() {
		super();
	}

	public Review(Long id, User user, Product product, LocalDateTime createdAtt,String review) {
		super();
		this.id = id;
		this.user = user;
		this.product = product;
		this.createdAtt = createdAtt;
		this.review=review;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public LocalDateTime getCreatedAtt() {
		return createdAtt;
	}

	public void setCreatedAtt(LocalDateTime createdAtt) {
		this.createdAtt = createdAtt;
	}

	
	
}
