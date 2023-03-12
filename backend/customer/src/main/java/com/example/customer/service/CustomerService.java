package com.example.customer.service;

import java.util.List;

import com.example.customer.entity.Customer;

public interface CustomerService {
   public List<Customer> getall();

   public Customer getOne(int id);

   public Customer add(Customer customer);

   public Customer update(Customer customer,int id);

   public void delete(int id);
   

}
