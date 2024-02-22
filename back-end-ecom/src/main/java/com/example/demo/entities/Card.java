package com.example.demo.entities;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;


@Entity
public class Card {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id",nullable = false)
	private User user;
	

	@OneToMany(mappedBy ="card")
	
	private    Set<CardItem> cardItems=new HashSet<>();
	
	@Column(name = "totale_price")
	private int totlePrice;
	
	@Column(name = "totle_item")
	private int totleitem;
	
	@Column(name ="totle_descountPrice")
	
	private int totleDiscountPrice;
	
	private int discount;

	public Card(Long id, User user, Set<CardItem> cardItems, int totlePrice, int totleitem, int totleDiscountPrice,
			int discount) {
		super();
		this.id = id;
		this.user = user;
		this.cardItems = cardItems;
		this.totlePrice = totlePrice;
		this.totleitem = totleitem;
		this.totleDiscountPrice = totleDiscountPrice;
		this.discount = discount;
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

	public Set<CardItem> getCardItems() {
		return cardItems;
	}

	public void setCardItems(Set<CardItem> cardItems) {
		this.cardItems = cardItems;
	}

	public int getTotlePrice() {
		return totlePrice;
	}

	public void setTotlePrice(int totlePrice) {
		this.totlePrice = totlePrice;
	}

	public int getTotleitem() {
		return totleitem;
	}

	public void setTotleitem(int totleitem) {
		this.totleitem = totleitem;
	}

	public int getTotleDiscountPrice() {
		return totleDiscountPrice;
	}

	public void setTotleDiscountPrice(int totleDiscountPrice) {
		this.totleDiscountPrice = totleDiscountPrice;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public Card() {
		super();
	}
	
	
	
	
	

}
