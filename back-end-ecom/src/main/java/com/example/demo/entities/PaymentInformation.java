package com.example.demo.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;


public class PaymentInformation {
	@Column(name = "cardholder_name")
	private String cardholderName;
	@Column(name = "card_number")
	private String cardNumber;
	
	@Column(name = "csv")
	private String csv;
	@Column(name = "expiration_date")
	private LocalDate expirationDate;
	
	
	

}
