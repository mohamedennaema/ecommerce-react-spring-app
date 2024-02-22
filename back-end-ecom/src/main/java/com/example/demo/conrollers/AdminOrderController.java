package com.example.demo.conrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Order;
import com.example.demo.exceptionhandling.OrderException;
import com.example.demo.response.AuthResponce;
import com.example.demo.services.OrderServices;

@RestController
@RequestMapping("api/admin/orders")
public class AdminOrderController {
	
	@Autowired
	private OrderServices orderServices;
	
	@GetMapping("/")
	public ResponseEntity<List<Order>> getAllOrderHandeler(){
		List<Order> orders=orderServices.getAllOrder();
		return new ResponseEntity<List<Order>>(orders,HttpStatus.ACCEPTED);
	}
	
	@PutMapping("{orderId}/confirmed")
	public ResponseEntity<Order> confirmedOrder(@PathVariable Long orderId,
			@RequestHeader("Authorization") String jwt
			) throws OrderException{
		
		Order order=orderServices.confirmOrder(orderId);
		return new ResponseEntity<>(order,HttpStatus.OK);
		
		
		
	}
	
	@PutMapping("{orderId}/ship")
	public ResponseEntity<Order> shipOrder(@PathVariable Long orderId,
			@RequestHeader("Authorization") String jwt
			) throws OrderException{
		
		Order order=orderServices.shipOrder(orderId);
		return new ResponseEntity<>(order,HttpStatus.OK);
		
		
		
	}

	
	@PutMapping("{orderId}/deliver")
	public ResponseEntity<Order> delverOrder(@PathVariable Long orderId,
			@RequestHeader("Authorization") String jwt
			) throws OrderException{
		
		Order order=orderServices.delveryOrder(orderId);
		return new ResponseEntity<>(order,HttpStatus.OK);
		
		
		
	}
	
	@PutMapping("{orderId}/cansel")
	public ResponseEntity<Order> canceldOrder(@PathVariable Long orderId,
			@RequestHeader("Authorization") String jwt
			) throws OrderException{
		
		Order order=orderServices.cancelorder(orderId);
		return new ResponseEntity<>(order,HttpStatus.OK);
		
		
		
	}

	@PutMapping("{orderId}/delete")
	public ResponseEntity<AuthResponce> deleteOrder(@PathVariable Long orderId,
			@RequestHeader("Authorization") String jwt
			) throws OrderException{
		orderServices.deletOrder(orderId);
		AuthResponce responce=new AuthResponce();
		responce.setMessageString("order delete succressed");
		
		
		

		return new ResponseEntity<>(responce,HttpStatus.OK);
		
		
		
	}



    

}
