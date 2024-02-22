package com.example.demo.entities;

import java.time.LocalDateTime;




import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;


@Entity
public class OrderItem {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	
	@JsonIgnore
	@ManyToOne
	private Order order;
	
	@ManyToOne
	
	private Product product;
	

	
	private String size;
	
	private int quantity;
	private int price;
	private Integer discountPrice;
	private Long userId;
	
	private LocalDateTime deliveryDateTime;

	public OrderItem() {
		super();
	}

	public OrderItem(Long id, Order order, Product product, String size, int quantity, int price, Integer discountPrice,
			Long userId, LocalDateTime deliveryDateTime) {
		super();
		this.id = id;
		this.order = order;
		this.product = product;
		this.size = size;
		this.quantity = quantity;
		this.price = price;
		this.discountPrice = discountPrice;
		this.userId = userId;
		this.deliveryDateTime = deliveryDateTime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public Integer getDiscountPrice() {
		return discountPrice;
	}

	public void setDiscountPrice(Integer discountPrice) {
		this.discountPrice = discountPrice;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public LocalDateTime getDeliveryDateTime() {
		return deliveryDateTime;
	}

	public void setDeliveryDateTime(LocalDateTime deliveryDateTime) {
		this.deliveryDateTime = deliveryDateTime;
	}
	
	
	
	
	
	
	
	
	
}
