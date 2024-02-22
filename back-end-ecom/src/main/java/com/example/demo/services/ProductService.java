package com.example.demo.services;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.requests.CreateProductRequest;


@Service
public interface ProductService {
 
	
	
	public Product createProduct(CreateProductRequest createProductRequest);
	public String deletProduct(Long productId) throws ProductException;
	public Product updateProduct(long productId,Product product) throws ProductException;
	public Product findProductById(Long id) throws ProductException;
	public List<Product> findProductByCategory(String category);
	
	
	public Page<Product> getAllProduct(String category,String topLavelCat,List<String> sizes,Integer minPrice,Integer maxPrice,
			Integer minDescount,Integer maxDescount,String sort,String stock,Integer pageNumber,Integer pageSize,List<String> colors
			);
	public List<Product> findAllProduct();
	public List<List<Product>> findNewArrivals(int limit);
	List<List<Product>> getTopRatedProducts(int n);
	   
	 public List<List<Product>> getTrendingProducts(int limit) ;
	 public Map<String, List<Product>>  getProductByCategory();
	       

	
}
