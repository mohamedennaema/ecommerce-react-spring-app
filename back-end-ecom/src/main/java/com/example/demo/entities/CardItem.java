package com.example.demo.entities;





import com.fasterxml.jackson.annotation.JsonBackReference;



import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class CardItem {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	
	
	
	 @ManyToOne
	@JoinColumn(name = "card_id")
	 @JsonBackReference
	private Card card;
	
	@ManyToOne
	private Product product;
	
    private Long userId;

	private String size;
	
	private int quantity;
	private Integer price;
	private int totalDiscountedPrice;
	private int discounte;
	private int discountePrice;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Card getCard() {
		return card;
	}
	public void setCard(Card card) {
		this.card = card;
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
	public int getQuintity() {
		return quantity;
	}
	public void setQuintity(int quintity) {
		this.quantity = quintity;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public int getTotledescountPrice() {
		return totalDiscountedPrice;
	}
	public void setTotledescountPrice(int totledescountPrice) {
		this.totalDiscountedPrice = totledescountPrice;
	}
	public int getDiscounte() {
		return discounte;
	}
	public void setDiscounte(int discounte) {
		this.discounte = discounte;
	}
	public CardItem(Long id, Card card, Product product, String size, int quintity, Integer price,
			int totledescountPrice, int discounte, int discounPrice,Long userId) {
		super();
		this.id = id;
		this.card = card;
		this.product = product;
		this.size = size;
		this.quantity = quintity;
		this.price = price;
		this.totalDiscountedPrice = totledescountPrice;
		this.discounte = discounte;
		this.discountePrice=discounPrice;
		this.userId=userId;
	}
	public CardItem() {
		super();
	}
	public int getDiscountePrice() {
		return discountePrice;
	}
	public void setDiscountePrice(int discountePrice) {
		this.discountePrice = discountePrice;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	
	
}
