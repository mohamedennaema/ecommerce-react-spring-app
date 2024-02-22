package com.example.demo.requests;

public class ReviewRequest {

    private Long productId;
	
	private String  review;

	public ReviewRequest(Long productId, String raview) {
		super();
		this.productId = productId;
		this.review = raview;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getRaview() {
		return review;
	}

	public void setRaview(String raview) {
		this.review = raview;
	}
	
	
	
	
	
	
}
