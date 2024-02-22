package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Card;
import com.example.demo.entities.CardItem;
import com.example.demo.entities.Product;
@Repository
public interface CardItemRepository extends JpaRepository<CardItem, Long> {

	
	@Query("SELECT ci FROM CardItem ci WHERE ci.card = :card AND ci.product = :product AND ci.size = :size AND ci.userId = :userId")
	public CardItem isCardItemExist(
	    @Param("card") Card card,
	    @Param("product") Product product,
	    @Param("size") String size,
	    @Param("userId") Long userId
	);

}
