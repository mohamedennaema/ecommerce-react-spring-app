package com.example.demo.entities;



public class PaymentDetails {
	
	

	private String paymentMethod;
	private String status;
	

	private String paymentId;
	private String rasorpayPaymentLinkId;
	
	private String rasorpayPaymentLinkRederndId;
	private String rasorpayPaymentLinkStatus;
	private String rasorpayPaymeenId;
	public String getPaymentMethod() {
		return paymentMethod;
	}
	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public String getRasorpayPaymentLinkId() {
		return rasorpayPaymentLinkId;
	}
	public void setRasorpayPaymentLinkId(String rasorpayPaymentLinkId) {
		this.rasorpayPaymentLinkId = rasorpayPaymentLinkId;
	}
	public String getRasorpayPaymentLinkRederndId() {
		return rasorpayPaymentLinkRederndId;
	}
	public void setRasorpayPaymentLinkRederndId(String rasorpayPaymentLinkRederndId) {
		this.rasorpayPaymentLinkRederndId = rasorpayPaymentLinkRederndId;
	}
	public String getRasorpayPaymentLinkStatus() {
		return rasorpayPaymentLinkStatus;
	}
	public void setRasorpayPaymentLinkStatus(String rasorpayPaymentLinkStatus) {
		this.rasorpayPaymentLinkStatus = rasorpayPaymentLinkStatus;
	}
	public String getRasorpayPaymeenId() {
		return rasorpayPaymeenId;
	}
	public void setRasorpayPaymeenId(String rasorpayPaymeenId) {
		this.rasorpayPaymeenId = rasorpayPaymeenId;
	}
	public PaymentDetails(String paymentMethod, String status, String paymentId, String rasorpayPaymentLinkId,
			String rasorpayPaymentLinkRederndId, String rasorpayPaymentLinkStatus, String rasorpayPaymeenId) {
		super();
		this.paymentMethod = paymentMethod;
		this.status = status;
		this.paymentId = paymentId;
		this.rasorpayPaymentLinkId = rasorpayPaymentLinkId;
		this.rasorpayPaymentLinkRederndId = rasorpayPaymentLinkRederndId;
		this.rasorpayPaymentLinkStatus = rasorpayPaymentLinkStatus;
		this.rasorpayPaymeenId = rasorpayPaymeenId;
	}
	public PaymentDetails() {
		super();
	}
	
	
	
	
}
