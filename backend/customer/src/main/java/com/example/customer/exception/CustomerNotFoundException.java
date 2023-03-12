package com.example.customer.exception;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CustomerNotFoundException extends RuntimeException {

    public CustomerNotFoundException(int id)
    {
        super("user not found with id"+id);
    }
   
    
}
