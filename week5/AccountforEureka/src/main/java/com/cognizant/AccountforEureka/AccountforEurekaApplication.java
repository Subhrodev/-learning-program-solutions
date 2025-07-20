package com.cognizant.AccountforEureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AccountforEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AccountforEurekaApplication.class, args);
	}

}
