package com.project.ecommerce.dao;

import com.project.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

//    Behind the scenes, Spring will execute the query that is mentioned below
//    returns null if not found
    Customer findByEmail(String theEmail); // select * from Customer c where c.email = theEmail

}
