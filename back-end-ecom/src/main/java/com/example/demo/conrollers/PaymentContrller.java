package com.example.demo.conrollers;
import com.example.demo.entities.Card;
import com.example.demo.entities.CardItem;
import com.example.demo.entities.Order;
import com.example.demo.entities.OrderItem;
import com.example.demo.entities.Product;
import com.example.demo.entities.User;
import com.example.demo.exceptionhandling.OrderException;
import com.example.demo.exceptionhandling.UserException;
import com.example.demo.repositories.CardItemRepository;
import com.example.demo.repositories.CardRepository;
import com.example.demo.repositories.OrderRepository;
import com.example.demo.repositories.ProductRepository;
import com.example.demo.response.ApiResponse;
import com.example.demo.response.PaymentLinkResponce;
import com.example.demo.services.CardService;
import com.example.demo.services.OrderServices;
import com.example.demo.services.UserService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;




@RequestMapping("/api")
@RestController

public class  PaymentContrller {

    @Value("${stripe.secretKey}")
    String secretKey;

    @Autowired
    private UserService userService;
    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private CardItemRepository cardItemRepository;
    @Autowired
    private ProductRepository productRepository;


    @Autowired
    private OrderServices orderServices;

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private CardService cardService;

    
    
    @GetMapping("/test")
    public String sayhello() {
    	return "hellow world";
    }
    
   
   
    @PostMapping("payments/{orderId}")
    public ResponseEntity<PaymentLinkResponce> createPaymentLink(
            @PathVariable Long orderId,
            @RequestHeader("Authorization") String jwt) throws OrderException, UserException {
    	
        Order order = orderServices.findOrderById(orderId);
        List<OrderItem> orderItems=order.getOrderItems();
        for (OrderItem orderItem : orderItems) {
             Product product=orderItem.getProduct();
             int numorder=product.getNumRating();
             product.setNumRating(numorder+1*orderItem.getQuantity());
             productRepository.save(product);
        }
        order.setOrderStutString("COMPLETED");
        order.setStepDelvry(2);
        orderRepository.save(order);
        
        User user=userService.findUserProfilByjwt(jwt);
		Card card=cardService.findUserCard(user.getId());
		Set<CardItem> cardItems=card.getCardItems();
		cardItemRepository.deleteAll(cardItems);
		
		
		
       return null;
        }


    
    
    
    
    
    @GetMapping("/redirect")
    public ResponseEntity<ApiResponse> redirect(
            @RequestParam(name = "payment_id") String paymentId,
            @RequestParam(name = "order_id") Long orderId) throws OrderException {

        try {
         
            Stripe.apiKey = secretKey;

            
            Order order = orderServices.findOrderById(orderId);

            order.getPaymentDetails().setStatus("COMPLETED");
            PaymentIntent paymentIntent = PaymentIntent.retrieve(paymentId);

            if ("succeeded".equals(paymentIntent.getStatus())) {
               
                order.getPaymentDetails().setPaymentId(paymentId);
                order.getPaymentDetails().setStatus("COMPLETED");
                order.setOrderStutString(paymentId);
                orderRepository.save(order);

                ApiResponse res = new ApiResponse();
                res.setMessage("Your order has been placed.");
                res.setStatus(true);

                return new ResponseEntity<>(res, HttpStatus.OK);
            } else {
                // Handle unsuccessful payment
                ApiResponse res = new ApiResponse();
                res.setMessage("Payment failed.");
                res.setStatus(false);

                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            }

        } catch (StripeException e) {
        	 ApiResponse res = new ApiResponse();
             res.setMessage("Error processing payment: " + e.getMessage());
             res.setStatus(false);

             return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }}
 