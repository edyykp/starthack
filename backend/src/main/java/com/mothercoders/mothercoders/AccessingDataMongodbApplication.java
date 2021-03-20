package com.mothercoders.mothercoders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AccessingDataMongodbApplication implements CommandLineRunner {

    @Autowired
    private CustomerRepository repository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private CityRepository cityRepository;


    public static void main(String[] args) {
        SpringApplication.run(AccessingDataMongodbApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        userRepository.deleteAll();
        userRepository.save(new User("Vlad", "Bucur", "2", "vladbcr", "07", "1"));
        userRepository.save(new User("Vlad", "andrei", "2", "vladbcr", "07", "1"));

        for (User user: userRepository.findAll()) {
            System.out.println(user);
        }

        projectRepository.deleteAll();
        projectRepository.save(new Project("salut", "salut", 1, "salut", "salut", "1"));

        for (Project project: projectRepository.findAll()) {
            System.out.println(project);
        }
/*
        repository.deleteAll();

        // save a couple of customers
        repository.save(new Customer("Alice", "Smith"));
        repository.save(new Customer("Bob", "Smith"));

        // fetch all customers
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (Customer customer : repository.findAll()) {
            System.out.println(customer);
        }
        System.out.println();

        // fetch an individual customer
        System.out.println("Customer found with findByFirstName('Alice'):");
        System.out.println("--------------------------------");
        System.out.println(repository.findByFirstName("Alice"));

        System.out.println("Customers found with findByLastName('Smith'):");
        System.out.println("--------------------------------");
        for (Customer customer : repository.findByLastName("Smith")) {
            System.out.println(customer);
        }
*/
    }

}