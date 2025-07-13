package com.cognizant.Web_HelloWorld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.cognizant.Web_helloWorld")
public class WebHelloWorldApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebHelloWorldApplication.class, args);
	}

}
