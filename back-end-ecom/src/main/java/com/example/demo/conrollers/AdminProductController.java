package com.example.demo.conrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.requests.CreateProductRequest;
import com.example.demo.response.AuthResponce;
import com.example.demo.services.ProductService;



@RestController
@RequestMapping("/api/adminproducts")
public class AdminProductController {
	
	@Autowired
	
	private ProductService productService;
	
	
	@PostMapping("")
	public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest req){
		Product product=productService.createProduct(req);
		
		return new ResponseEntity<Product>(product,HttpStatus.CREATED);
	}
	
	public AdminProductController(ProductService productService) {
		super();
		this.productService = productService;
	}

	@DeleteMapping("/{productId}/delete")
	public ResponseEntity<AuthResponce>  deletProduct(@PathVariable Long productId) throws ProductException{
		
		productService.deletProduct(productId);
		AuthResponce res =new AuthResponce();
		 
		res.setMessageString("product delet");
		
		return new ResponseEntity<>(res,HttpStatus.OK);
		
		
		}
	
	@GetMapping("/all")
	public ResponseEntity<List<Product>> findAllPrdoct(){
		
		List<Product> products=productService.findAllProduct();
		
		return new ResponseEntity<>(products,HttpStatus.OK);
		
	}
	
	@PutMapping("/{productId}/update")
	public ResponseEntity<Product> updateProduct(@RequestBody Product req,@PathVariable Long productId ) throws ProductException{
		
		
		Product products=productService.updateProduct(productId, req);
		
		return new ResponseEntity<>(products,HttpStatus.CREATED);
	}
	
	@PostMapping("/creates")
	
	public ResponseEntity<AuthResponce> createMultiplProduct(@RequestBody CreateProductRequest[] req){
		
		for (CreateProductRequest createProductRequest : req) {
			
			productService.createProduct(createProductRequest);
		}
		AuthResponce res=new AuthResponce();
		res.setMessageString("product create successfuly");
		
		return new ResponseEntity<>(res,HttpStatus.CREATED);
	}

	
}
