package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Category;

public interface CategoryRepository extends JpaRepository<Category , Long> {
	
	
	public Category findByName(String name);

	@Query("SELECT c FROM Category c WHERE c.name = :name AND c.parentCategory.name = :parentCateName")
	public Category findByNameAndParent(@Param("name") String name, @Param("parentCateName") String parentCateName);

	
}
