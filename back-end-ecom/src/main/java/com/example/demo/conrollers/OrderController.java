package com.example.demo.conrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Order;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.OrderException;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.services.OrderServices;
import com.example.demo.services.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private OrderServices orderServices;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	public ResponseEntity<Order> creatOrder(@RequestBody Address shipingAddress,@RequestHeader("Authorization") String jwt) throws UserException{
		
		User user=userService.findUserProfilByjwt(jwt);
		Order order=orderServices.createOrder(user, shipingAddress);
		
		return new ResponseEntity<Order>(order,HttpStatus.CREATED);
	}
	
	@GetMapping("/user")
	
	public ResponseEntity<List<Order>> userOrderhistory(@RequestHeader("Authorization") String jwt) throws UserException{
		User user=userService.findUserProfilByjwt(jwt);
		List<Order> orders=orderServices.userOrderHestory(user.getId());
		return new ResponseEntity<>(orders,HttpStatus.CREATED);
		
	}
	
@GetMapping("/{id}")
	
	public ResponseEntity<Order> findOrderByid(@PathVariable("id") Long id,@RequestHeader("Authorization") String jwt) throws UserException ,OrderException{
		
		Order orders=orderServices.findOrderById(id);
		
		return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
		
	}
	

}
