package com.example.demo.services;

import com.example.demo.entities.Card;
import com.example.demo.entities.CardItem;
import com.example.demo.entities.Product;
import com.example.demo.exceptionhandling.CardItemException;
import com.example.demo.exceptionhandling.UserException;

public interface CardItemService {
	
	
	public CardItem creatCardItem(CardItem cardItem);
	
	
	public CardItem updateCardItem(Long userId,Long id,CardItem cardItem) throws CardItemException,UserException;
	
	public CardItem isCardItemExict(Card card,Product product ,String size,Long userId);
	public void removeCardItem(Long userId,Long cardItem) throws CardItemException,UserException;
	
	public CardItem findCardItemById(Long cardItem) throws CardItemException;

}
