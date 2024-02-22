package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Card;
import com.example.demo.entities.CardItem;
import com.example.demo.entities.Product;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.CardItemException;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.repositories.CardItemRepository;
import com.example.demo.repositories.CardRepository;


@Service
public class CardItemServiceImplementation implements CardItemService{
	
	
	
   private CardItemRepository CardItemRepository;
   private UserService userService;
   private CardRepository cardRepository;
   
   
	
	@Autowired
	public CardItemServiceImplementation(CardItemRepository cardItemRepository, UserService userService,
		CardRepository cardRepository) {
	super();
	this.CardItemRepository = cardItemRepository;
	this.userService = userService;
	this.cardRepository = cardRepository;
}

	@Override
	public CardItem creatCardItem(CardItem cardItem) {
		cardItem.setQuintity(1);
		cardItem.setPrice(cardItem.getProduct().getPrice()*cardItem.getQuintity() );
		cardItem.setDiscountePrice(cardItem.getProduct().getDiscountPrice()*cardItem.getQuintity());;
		
		CardItem createdCardItem=CardItemRepository.save(cardItem);
		
		
		return createdCardItem;
		
	}

	@Override
	public CardItem updateCardItem(Long userId, Long id, CardItem cardItem) throws CardItemException, UserException {
		CardItem item=findCardItemById(id);
		User  user=userService.findUserById(item.getUserId());
		if(user.getId().equals(userId)) {
			if(cardItem.getQuintity()==0) {
				removeCardItem(userId, id);
			}else {
				removeCardItem(userId, id);
				item.setQuintity(cardItem.getQuintity());
			    item.setPrice(item.getProduct().getPrice()*item.getQuintity() );
				item.setDiscountePrice(item.getProduct().getDiscountPersent()*item.getQuintity());
			}
			
			
			
			
			
		}
		
		return CardItemRepository.save(item);
	}

	@Override
	public CardItem isCardItemExict(Card card, Product product, String size, Long userId) {
		
		
		CardItem cardItem =CardItemRepository.isCardItemExist(card, product, size, userId);
		return cardItem;
	}

	@Override
	public void removeCardItem(Long userId, Long cardItem) throws CardItemException, UserException {
		CardItem cardItem2=findCardItemById(cardItem);
		
		User user=userService.findUserById(cardItem2.getUserId());
		
		User reqUser=userService.findUserById(userId);
		
		if(user.getId().equals(reqUser.getId())) {
			CardItemRepository.delete(cardItem2);
		}else {
			String string=user.getId()+" "+reqUser.getId();
					throw new UserException(string);
		}
		
		
	}

	@Override
	public CardItem findCardItemById(Long cardItem) throws CardItemException {
		Optional<CardItem> opt=CardItemRepository.findById(cardItem);
		if(opt.isPresent()) {
			return opt.get();
		}throw new CardItemException("card item not found with:"+cardItem);
		
		  
		
	}

	public CardItemRepository getCardItemRepo() {
		return CardItemRepository;
	}

	public void setCardItemRepo(CardItemRepository cardItemRepository) {
		CardItemRepository = cardItemRepository;
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public CardRepository getCardRepo() {
		return cardRepository;
	}

	public void setCardRepo(CardRepository cardRepository) {
		this.cardRepository = cardRepository;
	}

	
	
}
