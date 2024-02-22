package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

	@Query("SELECT o FROM Order o WHERE o.user.id = :userId OR (o.orderStutString = 'PLACED' OR o.orderStutString = 'CONFIRMED' OR o.orderStutString = 'SHIPPED' OR o.orderStutString = 'DELIVERED')")
	List<Order> getUserOrder(@Param("userId") Long userId);


	
}
