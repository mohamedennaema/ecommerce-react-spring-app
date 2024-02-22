package com.example.demo.conrollers;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Card;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.repositories.CardRepository;
import com.example.demo.requests.AddItemRequest;
import com.example.demo.response.AuthResponce;
import com.example.demo.services.CardService;
import com.example.demo.services.UserService;



@RestController
@RequestMapping("/api/card")

public class CardController {
	@Autowired
	private CardService cardService;
	@Autowired
	private UserService userService;
	@Autowired
	private CardRepository cardRepository;
	
	
	@GetMapping("")
	
	public ResponseEntity<Card> findUsercard(@RequestHeader("Authorization") String jwt) throws UserException{
		User user=userService.findUserProfilByjwt(jwt);
		Card card=cardService.findUserCard(user.getId());
		
		return new ResponseEntity<Card>(card,HttpStatus.OK);
		
	}
@DeleteMapping("/delete")
	
	public ResponseEntity<Card> deletCardUser(@RequestHeader("Authorization") String jwt) throws UserException{
		User user=userService.findUserProfilByjwt(jwt);
		Card card=cardService.findUserCard(user.getId());
		
		cardRepository.delete(card);
		return new ResponseEntity<Card>(card,HttpStatus.OK);
		
	}
	@PutMapping("/add")
	public ResponseEntity<AuthResponce> addItemToCard(@RequestBody AddItemRequest req,
			@RequestHeader("Authorization") String jwt) throws UserException,ProductException{
		
		
		User user=userService.findUserProfilByjwt(jwt);
		 Card card = cardRepository.findByUserId(user.getId());
		   
	     if(card ==null) {
	    		cardService.createCard(user);
	     }
		cardService.addcardItem(user.getId(), req);
		AuthResponce res=new AuthResponce();
		res.setMessageString("item aded to card");
	
		
		
		
		
	
		return new ResponseEntity<>(res,HttpStatus.OK);
		
		
	}

	
	
	
}
