package com.cognizant.get_country;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath:country.xml")
public class GetCountryApplication {
    public static void main(String[] args) {
        SpringApplication.run(GetCountryApplication.class, args);
    }
}
