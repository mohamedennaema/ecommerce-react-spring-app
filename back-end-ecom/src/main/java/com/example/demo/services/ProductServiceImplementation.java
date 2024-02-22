 package com.example.demo.services;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import java.util.stream.Collectors;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.entities.Product;
import com.example.demo.exceptionhandling.ProductException;
import com.example.demo.repositories.CategoryRepository;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.requests.CreateProductRequest;


@Service
public class ProductServiceImplementation   implements ProductService {
	
	
	private ProductRepository productRepository;
	private CategoryRepository categoryRepository;
	private UserService userService;
	
	

	public ProductServiceImplementation(ProductRepository productRepository, CategoryRepository categoryRepository, UserService userService) {
		super();
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
		this.setUserService(userService);
	}

	
	
	@Override
	public Product createProduct(CreateProductRequest req) {
		Category topLevel=categoryRepository.findByName(req.getTopLavelCat());
		
		
	
		
		if(topLevel ==null ) {
			
		   Category topLevelcCateg=new Category();
		   topLevelcCateg.setName(req.getTopLavelCat());
		   topLevelcCateg.setLevel(1);
		   topLevel=categoryRepository.save(topLevelcCateg);
		}
		
Category seconLvel=categoryRepository.findByNameAndParent(req.getSeconLavelCat(),topLevel.getName());

		
		
		if(seconLvel ==null) {
			
		   Category secondLevelcCateg=new Category();
		   secondLevelcCateg.setName(req.getSeconLavelCat());
		   topLevel.setName(req.getTopLavelCat());
		   secondLevelcCateg.setParentCategory(topLevel);
		   secondLevelcCateg.setLevel(2);
		   seconLvel=categoryRepository.save(secondLevelcCateg);
		}
		
Category thridLvel=categoryRepository.findByNameAndParent(req.getThirdLavelCat(),seconLvel.getName());

		
		
		if(thridLvel==null) {
			
		   Category thriddLevelcCateg=new Category();
		   thriddLevelcCateg.setName(req.getThirdLavelCat());
		   thriddLevelcCateg.setParentCategory(seconLvel);
		   thriddLevelcCateg.setLevel(3);
		   thridLvel=categoryRepository.save(thriddLevelcCateg);
		}
	
		Product product =new Product();
		
		product.setTitle(req.getTitle());
		product.setBrand(req.getBrand());
		product.setCategory(seconLvel);
		product.setColor(req.getColor());
		product.setDesc(req.getDesc());
		product.setDiscountPersent(req.getDiscountPersent());
		product.setDiscountPrice(req.getDiscountPrice());
		product.setImageUrl(req.getImageUrl());
		product.setPrice(req.getPrice());
		product.setQuantity(req.getQuantity());
		product.setSize(req.getSize());
		product.setCreateAtt(LocalDateTime.now());
		
		return productRepository.save(product);
	}

	@Override
	public String deletProduct(Long productId) throws ProductException {
		Product product=findProductById(productId);
		product.getSize().clear();
		
		productRepository.delete(product);
		return "product delete";
	}

	@Override
	public Product updateProduct(long productId, Product productupdate) throws ProductException {
		
		Product product =findProductById(productId);
		
		if(product.getQuantity()!=0) {
			product.setQuantity(productupdate.getQuantity());
		}
		
		return productRepository.save(product);
		
	}

	@Override
	public Product findProductById(Long id) throws ProductException {
		Optional<Product> product=productRepository.findById(id);
		if(product.isPresent()) {
			return product.get();
		}throw new ProductException("this product is not found");
		
	}

	@Override
	public List<Product> findProductByCategory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Product> getAllProduct(String category, String topLavelCat, List<String> sizes,
	        Integer minPrice, Integer maxPrice, Integer minDiscount, Integer maxDiscount, String sort,
	        String stock, Integer pageNumber, Integer pageSize, List<String> colors) {

	    org.springframework.data.domain.Pageable pageable = PageRequest.of(pageNumber, pageSize);

	    List<Product> productsList = productRepository.productFilterList(category, topLavelCat, minPrice, maxPrice, minDiscount, sort);

		if(!colors.isEmpty()) {
			productsList=productsList.stream().filter(p->colors.stream().anyMatch(c->c.equalsIgnoreCase(p.getColor())))
					.collect(Collectors.toList());
			
		}
		if(stock!=null) {
			if(stock.equals("in_stock")) {
				productsList=productsList.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
				
			}else if(stock.equals("out__of_stck")) {
				productsList=productsList.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());
				
			}
			
		
		}
		 
		int startIndex=(int) pageable.getOffset();
		int endIndex=Math.min(startIndex+pageable.getPageSize(), productsList.size());
		if (startIndex < productsList.size()) {
		    // Adjust endIndex to stay within the bounds of the list
		    endIndex = Math.min(endIndex, productsList.size());

		    List<Product> pageContentProducts = productsList.subList(startIndex, endIndex);
		    Page<Product> filterProductsPage = new PageImpl<>(pageContentProducts, pageable, productsList.size());

		    return filterProductsPage;
		} else {
		    // Return an empty page if startIndex is out of range
		    return null;
		}
		
		
	}
	@Override
	public List<List<Product>> findNewArrivals(int limit) {
	    List<Product> allProducts = productRepository.findTopNByOrderByCreateAttDesc(Integer.MAX_VALUE);
	    List<List<Product>> pages = new ArrayList<>();

	    int startIndex = 0;
	    while (startIndex < allProducts.size()) {
	        int endIndex = Math.min(startIndex + limit, allProducts.size());
	        List<Product> pageProducts = allProducts.subList(startIndex, endIndex);
	        pages.add(pageProducts);
	        startIndex += limit;
	        if(startIndex==8) {
	        	break;
	        }
	    }

	    return pages;
	}
    @Override
	public List<List<Product>> getTopRatedProducts(int limit) {
       
        
        List<Product> allProducts = productRepository.findTopNByOrderByNumRatingDesc(limit);
	    List<List<Product>> pages = new ArrayList<>();

	    int startIndex = 0;
	    while (startIndex < allProducts.size()) {
	        int endIndex = Math.min(startIndex + limit, allProducts.size());
	        List<Product> pageProducts = allProducts.subList(startIndex, endIndex);
	        pages.add(pageProducts);
	        startIndex += limit;
	        if(startIndex==8) {
	        	break;
	        }
	    }

	    return pages;
    }
    @Override
    public List<List<Product>> getTrendingProducts(int limit) {
       
        List<Product> allProducts = productRepository.findTopTrendingProducts(limit);
	    List<List<Product>> pages = new ArrayList<>();

	    int startIndex = 0;
	    while (startIndex < allProducts.size()) {
	        int endIndex = Math.min(startIndex + limit, allProducts.size());
	        List<Product> pageProducts = allProducts.subList(startIndex, endIndex);
	        pages.add(pageProducts);
	        startIndex += limit;
	        if(startIndex==8) {
	        	break;
	        }
	    }

	    return pages;
    }

	public UserService getUserService() {
		return userService;
	}



	public void setUserService(UserService userService) {
		this.userService = userService;
	}



	@Override
	public List<Product> findAllProduct() {
		
		return productRepository.findAll();
	}
	@Override
	public Map<String, List<Product>>  getProductByCategory() {
		Map<String, List<Product>> productsMap = new HashMap<>();
		
		List<String> categoryStrings=productRepository.findDistinctParentCategoryNames();
		for (String string : categoryStrings) {
			productsMap.put(string,productRepository.productFilterListByCategory(string));
		}
		return productsMap;
	}
	



	

}
