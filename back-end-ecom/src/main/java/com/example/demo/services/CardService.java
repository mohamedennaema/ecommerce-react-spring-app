package com.example.demo.services;

import com.example.demo.entities.Card;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.requests.AddItemRequest;

public interface CardService {

	
	public Card createCard(User user);
	public String addcardItem(Long userId,AddItemRequest req) throws ProductException;
	public Card findUserCard (Long id);

}
