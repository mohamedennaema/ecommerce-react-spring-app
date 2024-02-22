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
public class Rating {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	
	@Column(name = "rating")
	private Double rating;
	
	@ManyToOne
	@JoinColumn(name = "user_id",nullable = false)
	private User user;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "product_id",nullable = false)
	private Product product;
	
	private LocalDateTime createdAtt;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
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
