package com.example.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.customer.entity.Customer;
import com.example.customer.imple.CustomerImple;

@RestController
@CrossOrigin("*")
public class TestController {
    @Autowired
    private CustomerImple customerImple;

    @GetMapping("/")
    public String home()
    {
        return "welcome to home page";
    }

    @GetMapping("/all")
    public List<Customer> alldata()
    {
        return customerImple.getall();
    }

    @GetMapping("/one/{id}")
    public Customer onedata(@PathVariable int id)
    {
        return customerImple.getOne(id);
    }

    @PostMapping("/add")
    public Customer addData(@RequestBody Customer ncustomer)
    {
        return customerImple.add(ncustomer);
    }

    @PutMapping("/update/{id}")
    public Customer home(@RequestBody Customer ncustomer,@PathVariable int id)
    {
        return customerImple.update(ncustomer, id);
    }

    @DeleteMapping("/dlt/{id}")
    public void dlt(@PathVariable int id)
    {

        customerImple.delete(id);
    }
    
}
