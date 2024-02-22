package com.example.demo.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.stereotype.Service;

import com.example.demo.entities.Address;
import com.example.demo.entities.Card;
import com.example.demo.entities.CardItem;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderItem;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.OrderException;
import com.example.demo.repositories.AddressRepository;
import com.example.demo.repositories.OrderItemRepository;
import com.example.demo.repositories.OrderRepository;
import com.example.demo.repositories.UserRepository;
@Service
public class OrderServiceImplementation implements OrderServices{
	

 private CardService cardService;
 private AddressRepository addressRepository;
 private UserRepository userRepository;
 private OrderItemRepository orderItemRepository;
 private OrderRepository orderRepository;
 
 
@Override
public Order createOrder(User user, Address shipiAddress) {
	
	   shipiAddress.setUser(user);
	   Address address=addressRepository.save(shipiAddress);
	   user.getAddresses().add(address);
	   userRepository.save(user);
	   Card card=cardService.findUserCard(user.getId());
	   List<OrderItem> orderItems=new ArrayList<>();
	   for ( CardItem item : card.getCardItems()) {
		   
		   OrderItem orderItem=new OrderItem();
		   orderItem.setSize(item.getSize());
		   orderItem.setUserId(item.getUserId());
		   orderItem.setDiscountPrice(item.getDiscountePrice());
		   orderItem.setProduct(item.getProduct());
		   orderItem.setPrice(item.getPrice());
		   orderItem.setQuantity(item.getQuintity());
		   
		   OrderItem oredItem=orderItemRepository.save(orderItem);
		   orderItems.add(oredItem);
	}
	   
	   Order createOrder=new Order();
	   
	   createOrder.setUser(user);
	   createOrder.setOrderItems(orderItems);
	   createOrder.setTotalPrice(card.getTotlePrice());
	   createOrder.setDsicount(card.getDiscount());
	   createOrder.setTotlItem(card.getTotleitem());
	   createOrder.setTotleDiscountPrice(card.getTotleDiscountPrice());
	   createOrder.setShipingAddress(address);
	   createOrder.setOrderDate(LocalDateTime.now());
	   createOrder.setOrderStutString("PENDING");
	   createOrder.getPaymentDetails().setStatus("PENDING");
	   createOrder.setCreateAtt(LocalDateTime.now());
	
	   
	    Order saveOrder=orderRepository.save(createOrder);
	    for (OrderItem orderItem : orderItems) {
			orderItem.setOrder(saveOrder);
			orderItemRepository.save(orderItem);
		}
	
	return saveOrder;
}
@Override
public Order findOrderById(Long orderId) throws OrderException {
	Optional<Order> opt=orderRepository.findById(orderId);
	if(opt.isPresent()) {
		return opt.get();
		}throw new OrderException("order not exist");
}
@Override
public List<Order> userOrderHestory(Long userId) {
	List<Order> orders=orderRepository.getUserOrder(userId);
	return orders;
}
@Override
public Order placedOrder(Long orderId) throws OrderException {
	Order order=findOrderById(orderId);
	order.setOrderStutString("PLACED");
	order.getPaymentDetails().setStatus("COMPLETED");
	return order;
}
@Override
public Order confirmOrder(Long orderId) throws OrderException {
	Order order=findOrderById(orderId);
	order.setOrderStutString("CONFIRMED");

	return orderRepository.save(order); 
}
@Override
public Order shipOrder(Long orderId) throws OrderException {
	// TODO Auto-generated method stub
	Order order=findOrderById(orderId);
	order.setOrderStutString("SHIPPED");
;
	return orderRepository.save(order);
}
@Override
public Order delveryOrder(Long orderId) throws OrderException {
	Order order=findOrderById(orderId);
	order.setOrderStutString("DELIVERED");

	return orderRepository.save(order);
}
@Override
public Order cancelorder(Long orderId) throws OrderException {
	Order order=findOrderById(orderId);
	order.setOrderStutString("CANCELLED");
	
	return orderRepository.save(order);
}
@Override
public List<Order> getAllOrder() {
	// TODO Auto-generated method stub
	return orderRepository.findAll();
}
@Override
public void deletOrder(Long orderId) throws OrderException {
	
	Order oredr=findOrderById(orderId);
	orderRepository.delete(oredr);
}
public OrderServiceImplementation(CardService cardService, AddressRepository addressRepository, UserRepository userRepository,
		OrderItemService orderItemService, OrderItemRepository orderItemRepository, OrderRepository orderRepository) {
	
	this.cardService = cardService;
	this.addressRepository = addressRepository;
	this.userRepository = userRepository;

	this.orderItemRepository = orderItemRepository;
	this.orderRepository = orderRepository;
}



	
	
	
}
