package com.example.demo.conrollers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.repositories.CategoryRepository;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.services.ProductService;





@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
	private ProductService productService;
	private ProductRepository productRepository;
	
	
	@GetMapping("/getProduct")
	public Map<String, List<Product>>  getProductByCategory() {
		return productService.getProductByCategory();
	}
	
	
	@GetMapping("/products")
	public ResponseEntity<Page<Product>> findProductByCateg(@RequestParam String category,
			@RequestParam String topLavelCat,
			@RequestParam List<String> color,@RequestParam List<String> size,@RequestParam Integer minPrice,
			@RequestParam Integer maxPrice,@RequestParam Integer minDescount,@RequestParam String sort,
			@RequestParam String  stock,@RequestParam Integer pageNumber,@RequestParam Integer pageSize){
		
		Page<Product> res=productService.getAllProduct(category,topLavelCat ,size, minPrice, maxPrice, minDescount, minDescount, sort, stock, pageNumber, pageSize, color);
		return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/product/id/{productId}")
	public ResponseEntity<Product> findProductByIdhandeler(@PathVariable Long productId) throws ProductException{
		Product product=productService.findProductById(productId);
		
		return new ResponseEntity<Product>(product,HttpStatus.ACCEPTED);
	}
	 @GetMapping("/new-arrivals")
	    public List<List<Product>> getNewArrivals() {
	        // Fetch 8 new arrivals products
	        return productService.findNewArrivals(4);
	    }
	  @GetMapping("/top-rated")
	    public List<List<Product>> getTopRatedProducts() {
	        return productService.getTopRatedProducts(10);
	    }
	  @GetMapping("/trending-products")
	    public List<Product> getTrendingProducts() {
		  List<Product> products=new  ArrayList<>();
		  List<Product> productsTrend= productRepository.findTopTrendingProducts(10);
		  
		   
		 
	        return productsTrend.subList(0, 20);
	    }
	  @GetMapping("/products/home")
	    public Map<String, List<List<Product>>> productsHome() {
		  Map<String, List<List<Product>>> productsMap = new HashMap<>();
	        List<List<Product>> newArrivals=productService.findNewArrivals(4);
	        List<List<Product>> trendingPproduct=productService.getTrendingProducts(4);
	        List<List<Product>> topRated=productService.getTopRatedProducts(10);
	        productsMap.put("newArrivals", newArrivals);
	        productsMap.put("trendingPproduct", trendingPproduct);
	        productsMap.put("topRated", topRated);
	        
	        
	        return productsMap;
	    }
	  
	 
	public ProductController(ProductService productService, ProductRepository productRepository) {
		super();
		this.productService = productService;
		this.productRepository = productRepository;
	}
	
	
	
	
}
