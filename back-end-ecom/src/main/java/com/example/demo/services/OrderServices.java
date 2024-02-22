package com.example.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Address;
import com.example.demo.entities.Order;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.OrderException;
@Service
public interface OrderServices  {
	
	
	public Order createOrder(User user,Address shipiAddress) ;
	public Order findOrderById(Long orderId) throws OrderException;
	public  List<Order> userOrderHestory(Long userId) ;
	public Order placedOrder(Long orderId)throws OrderException;
	public Order confirmOrder(Long orderId) throws OrderException;
	public Order shipOrder(Long orderId) throws OrderException;
	public Order delveryOrder(Long orderId) throws OrderException;
	public Order cancelorder(Long orderId) throws OrderException;
	public List<Order> getAllOrder();
	public void deletOrder(Long orderId) throws OrderException;

}
