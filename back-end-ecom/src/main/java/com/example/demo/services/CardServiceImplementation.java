package com.example.demo.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.entities.Card;
import com.example.demo.entities.CardItem;
import com.example.demo.entities.Product;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.repositories.CardRepository;
import com.example.demo.requests.AddItemRequest;


@Service
public class CardServiceImplementation  implements CardService{

    @Autowired
	private CardRepository cardRepository;
	@Autowired
	private CardItemService  cardItemService;
	private ProductService productService;
	  
	public CardServiceImplementation(CardRepository cardRepository, CardItemService cardItemService, ProductService productService) {
		super();
		this.cardRepository = cardRepository;
		this.cardItemService = cardItemService;
		this.productService = productService;
	}

	@Override
	public Card createCard(User user) {
		 Card card=new Card();
		 card.setUser(user);
		 return cardRepository.save(card);
	}

	@Override
	public String addcardItem(Long userId, AddItemRequest req) throws ProductException {
	    // Retrieve the card object from the database
	    Card card = cardRepository.findByUserId(userId);
	    
	    // Check if the card object is null
	    
	    
	    // Retrieve the product object
	    Product product = productService.findProductById(req.getProductid());
	    
	    // Proceed with adding the card item
	    CardItem isPresent = cardItemService.isCardItemExict(card, product, req.getSize(), userId);
	    if (isPresent == null) {
	        CardItem cardItem = new CardItem();
	        cardItem.setProduct(product);
	        cardItem.setCard(card);
	        cardItem.setQuintity(req.getQuantity());
	        cardItem.setUserId(userId);
	        int price = req.getQuantity() * product.getDiscountPrice();
	        cardItem.setPrice(price);
	        cardItem.setSize(req.getSize());
	        CardItem createdCardItem = cardItemService.creatCardItem(cardItem);
	        
	        // Add the created card item to the card
	        card.getCardItems().add(createdCardItem);
	    }
	    
	    return "item Add To card";
	}

	
	
	

@Override
public Card findUserCard(Long id) {
    Card card = cardRepository.findByUserId(id);
    
    // Check if card is null
    
    
    int totaleprice = 0;
    int totaleDescountPrice = 0;
    int totaleItem = 0;

    for (CardItem cardItem : card.getCardItems()) {
        totaleprice += cardItem.getPrice();
        totaleDescountPrice += cardItem.getDiscountePrice();
        totaleItem += cardItem.getQuintity();
    }

    card.setTotleDiscountPrice(totaleDescountPrice);
    card.setTotleitem(totaleItem);
    card.setTotlePrice(totaleprice);
    card.setDiscount(totaleDescountPrice);

    return cardRepository.save(card);
}

}
