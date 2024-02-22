package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Card;

public interface CardRepository extends JpaRepository<Card, Long> {
	
	
	@Query("SELECT c From Card c Where c.user.id=:userId")
	
	public Card findByUserId(@Param("userId") Long userId);

}
