package com.example.customer.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.customer.entity.Customer;
@Repository
public interface CustomerRepo extends JpaRepository<Customer,Integer>
{
    
}
