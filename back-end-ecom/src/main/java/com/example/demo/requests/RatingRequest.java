package com.example.demo.requests;

public class RatingRequest {
	private Long productId;
	
	private double ratinge;

	public RatingRequest(Long productId, double ratinge) {
		super();
		this.productId = productId;
		this.ratinge = ratinge;
	}

	public RatingRequest() {
		super();
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public double getRatinge() {
		return ratinge;
	}

	public void setRatinge(double ratinge) {
		this.ratinge = ratinge;
	}
	
	
	

}
