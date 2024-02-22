package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	

	@Query("SELECT p FROM Product p " +
	        "WHERE (p.category.name = :category OR :category = '') " +
	        "AND (p.category.parentCategory.name = :topLavelCat OR :topLavelCat = '') " +
	        "AND ((:minPrice IS NULL AND :maxPrice IS NULL) OR (p.discountPrice BETWEEN :minPrice AND :maxPrice)) " +
	        "AND (p.discountPrice >= :minDiscount OR :minDiscount IS NULL) " +
	        "ORDER BY " +
	        "CASE WHEN :sort = 'price_low' THEN p.discountPrice END ASC, " +
	        "CASE WHEN :sort = 'price_high' THEN p.discountPrice END DESC")
	public List<Product> productFilterList(
	        @Param("category") String category,
	        @Param("topLavelCat") String topLavelCat,
	        @Param("minPrice") Integer minPrice,
	        @Param("maxPrice") Integer maxPrice,
	        @Param("minDiscount") Integer minDiscount,
	        @Param("sort") String sort
	);
	
	@Query("SELECT p FROM Product p " +
	        "WHERE (p.category.parentCategory.name = :topLavelCat OR :topLavelCat = '') ")
	       
	public List<Product> productFilterListByCategory(
	        @Param("topLavelCat") String topLavelCat
	       
	);
	@Query("SELECT DISTINCT p.category.parentCategory.name FROM Product p")
    List<String> findDistinctParentCategoryNames();
	
    @Query("SELECT p FROM Product p ORDER BY p.createAtt DESC")
    List<Product> findTopNByOrderByCreateAttDesc(int limit);
    
    @Query("SELECT p, AVG(r.rating) as avgRating FROM Product p JOIN p.ratings r GROUP BY p.id ORDER BY avgRating DESC")
    List<Product> findTopNByOrderByNumRatingDesc(int n);
    @Query("SELECT p FROM Product p ORDER BY p.numOrders DESC")
    List<Product> findTopTrendingProducts(int limit);


}
