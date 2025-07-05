package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private String message; 
    private BookRepository bookRepository; 
    public BookService(String message) {
        this.message = message;
    }


    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        System.out.println("Message: " + message);
        bookRepository.save();
    }
}
