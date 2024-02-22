package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Card;
import com.example.demo.entities.CardItem;

public interface CartRep extends JpaRepository<Card, Long> {
	 CardItem findCardItemById(Long cardItemId);

}
