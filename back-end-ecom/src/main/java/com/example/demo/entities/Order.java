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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "orders")
public class Order {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;


	@Column(name = "order_id")
	private Integer OrderId ;
	
	@ManyToOne
	private User user;  
	private int totleDiscountPrice;
	
	
	
	
	
	@Column(name = "image_url")
	private String imageUrl ;
	@Embedded
	@ElementCollection
	@Column(name = "size ")
	
	private Set<Size> size=new HashSet<>();
	
	@OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
	private List<OrderItem> orderItems=new ArrayList<>();
	
	
	private LocalDateTime orderDate;
	
	private LocalDateTime deliverOrder;
	@OneToOne
	
	private Address shipingAddress;
	
	@Embedded
	
	private PaymentDetails paymentDetails=new PaymentDetails();
	
	private Integer dsicount;
	
	private String orderStutString;
	
	private int stepStatus;
	
	
	private int totlItem;
	private LocalDateTime createAtt; 
	
	
	
	
	@Column(name = "totalPrice")
	private int totalPrice;




	public Long getId() {
		return id;
	}




	public void setId(Long id) {
		this.id = id;
	}




	public Integer getOrderId() {
		return OrderId;
	}




	public void setOrderId(Integer orderId) {
		OrderId = orderId;
	}




	public User getUser() {
		return user;
	}




	public void setUser(User user) {
		this.user = user;
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




	public List<OrderItem> getOrderItems() {
		return orderItems;
	}




	public void setOrderItems(List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}




	public LocalDateTime getOrderDate() {
		return orderDate;
	}




	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}




	public LocalDateTime getDelevOrder() {
		return deliverOrder;
	}




	public void setDelevOrder(LocalDateTime delevOrder) {
		this.deliverOrder = delevOrder;
	}




	public Address getShipingAddress() {
		return shipingAddress;
	}




	public void setShipingAddress(Address shipingAddress) {
		this.shipingAddress = shipingAddress;
	}




	public PaymentDetails getPaymentDetails() {
		return paymentDetails;
	}




	public void setPaymentDetails(PaymentDetails paymentDetails) {
		this.paymentDetails = paymentDetails;
	}




	public Integer getDsicount() {
		return dsicount;
	}




	public void setDsicount(Integer dsicount) {
		this.dsicount = dsicount;
	}




	public String getOrderStutString() {
		return orderStutString;
	}




	public void setOrderStutString(String orderStutString) {
		this.orderStutString = orderStutString;
	}




	public int getTotlItem() {
		return totlItem;
	}




	public void setTotlItem(int totlItem) {
		this.totlItem = totlItem;
	}




	public int getTotalPrice() {
		return totalPrice;
	}




	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}




	public Order(Long id, Integer orderId, User user, String imageUrl, Set<Size> size, List<OrderItem> orderItems,
			LocalDateTime orderDate, LocalDateTime delevOrder, Address shipingAddress, PaymentDetails paymentDetails,
			Integer dsicount, String orderStutString, int totlItem, int totalPrice,int totleDiscountPrice,LocalDateTime createAtt) {
		super();
		this.id = id;
		OrderId = orderId;
		this.user = user;
		this.imageUrl = imageUrl;
		this.size = size;
		this.orderItems = orderItems;
		this.orderDate = orderDate;
		this.deliverOrder = delevOrder;
		this.shipingAddress = shipingAddress;
		this.paymentDetails = paymentDetails;
		this.dsicount = dsicount;
		this.orderStutString = orderStutString;
		this.totlItem = totlItem;
		this.totalPrice = totalPrice;
		this.totleDiscountPrice=totleDiscountPrice;
		this.createAtt=createAtt;
	}




	public Order() {
		super();
	}




	public int getTotleDiscountPrice() {
		return totleDiscountPrice;
	}




	public void setTotleDiscountPrice(int totleDiscountPrice) {
		this.totleDiscountPrice = totleDiscountPrice;
	}




	public LocalDateTime getCreateAtt() {
		return createAtt;
	}




	public void setCreateAtt(LocalDateTime createAtt) {
		this.createAtt = createAtt;
	}




	public int getStepDelvry() {
		return stepStatus;
	}




	public void setStepDelvry(int stepDelvry) {
		this.stepStatus = stepDelvry;
	}

	
	
}
