package com.example.demo.requests;

public class AddItemRequest {
	
	
	private Long productid;
	private String size;
	private int quantity;
	private Integer price;
	
	
	public Long getProductid() {
		return productid;
	}
	public void setProductid(Long productid) {
		this.productid = productid;
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
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public AddItemRequest(Long productid, String size, int quantity, Integer price) {
		super();
		this.productid = productid;
		this.size = size;
		this.quantity = quantity;
		this.price = price;
	}
	
	
	
	

}
