package com.example.demo.conrollers;



import com.example.demo.entities.CardItem;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.CardItemException;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.services.CardItemService;
import com.example.demo.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carditems")
public class CardItemController {
     @Autowired
    private  CardItemService cardItemService;
     @Autowired
     private UserService userService;

    @Autowired
    public CardItemController(CardItemService cardItemService) {
        this.cardItemService = cardItemService;
    }

    @PostMapping("/create")
    public ResponseEntity<CardItem> createCardItem(@RequestBody CardItem cardItem) {
        CardItem createdItem = cardItemService.creatCardItem(cardItem);
        return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CardItem> updateCardItem(
    		@RequestHeader("Authorization") String jwt,
            @PathVariable Long id,
            @RequestBody CardItem cardItem
    ) {
    	 
        try {
        	User user=userService.findUserProfilByjwt(jwt);
            CardItem updatedItem = cardItemService.updateCardItem(user.getId(), id, cardItem);
            return new ResponseEntity<>(updatedItem, HttpStatus.OK);
        } catch (CardItemException | UserException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/remove/{cardItemId}")
    public ResponseEntity<String> removeCardItem(
    		@RequestHeader("Authorization") String jwt,
            @PathVariable Long cardItemId
    ) throws UserException,CardItemException{
    	
    User user=userService.findUserProfilByjwt(jwt);
    
    cardItemService.removeCardItem(user.getId(), cardItemId);
	
	
	return new ResponseEntity<>("delet",HttpStatus.OK);
    }

    @GetMapping("/{cardItemId}")
    public ResponseEntity<CardItem> getCardItemById(@PathVariable Long cardItemId) {
        try {
            CardItem cardItem = cardItemService.findCardItemById(cardItemId);
            return new ResponseEntity<>(cardItem, HttpStatus.OK);
        } catch (CardItemException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

	
   
}

