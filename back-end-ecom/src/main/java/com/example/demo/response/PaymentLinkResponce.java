package com.example.demo.response;

public class PaymentLinkResponce {
	public PaymentLinkResponce() {
		// TODO Auto-generated constructor stub
	}
	
	public String getPayment_link_url() {
		return payment_link_url;
	}

	public void setPayment_link_url(String payment_link_url) {
		this.payment_link_url = payment_link_url;
	}

	public String getPayment_link_id() {
		return payment_link_id;
	}

	public PaymentLinkResponce(String payment_link_url, String payment_link_id,String clientSecre) {
		super();
		this.payment_link_url = payment_link_url;
		this.payment_link_id = payment_link_id;
        this.clientSecret=clientSecre;
	}

	public void setPayment_link_id(String payment_link_id) {
		this.payment_link_id = payment_link_id;
	}

	public String getClientSecret() {
		return clientSecret;
	}

	public void setClientSecret(String clientSecret) {
		this.clientSecret = clientSecret;
	}

	private String payment_link_url;
	
	private String payment_link_id;
	 private String clientSecret;
}
