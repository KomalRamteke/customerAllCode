package com.example.customer.imple;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.customer.dao.CustomerRepo;
import com.example.customer.entity.Customer;
import com.example.customer.exception.CustomerNotFoundException;
import com.example.customer.service.CustomerService;

@Service
public class CustomerImple implements CustomerService {
    @Autowired
    private CustomerRepo customerRepo;
    @Override
    public List<Customer> getall() {

        return customerRepo.findAll();
       
    }

    @Override
    public Customer getOne(int id) {
       return customerRepo.findById(id).orElseThrow(()->new CustomerNotFoundException(id));
    }

    @Override
    public Customer add(Customer customer) {
        return customerRepo.save(customer);
    }

    /*
    @Override
    public Customer update(Customer newcustomer ,int id)
     {
        Customer c=new Customer();
        c.setName(newcustomer.getName());
        c.setCity(newcustomer.getCity());
        c.setPincode(newcustomer.getPincode());

        return customerRepo.save(newcustomer);
     }
*/


     public Customer update(Customer newcustomer, int id) {
        Customer oldcustomer = customerRepo.findById(id)
            .orElseThrow(() -> new CustomerNotFoundException(id));
    
        oldcustomer.setName(newcustomer.getName());
        oldcustomer.setCity(newcustomer.getCity());
        oldcustomer.setPincode(newcustomer.getPincode());
    
        return customerRepo.save(oldcustomer);
    }

    @Override
    public void delete(int id) {
       
       
        
        if(!customerRepo.existsById(id))
        { 
            throw new CustomerNotFoundException(id);
        }
        else{
            customerRepo.deleteById(id);

        }
       
    }
    
}
