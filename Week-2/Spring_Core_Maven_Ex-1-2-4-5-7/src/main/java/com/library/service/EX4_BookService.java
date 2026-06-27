package com.library.service;

import com.library.repository.EX4_BookRepository;

public class EX4_BookService {

    private EX4_BookRepository bookRepository;

    public EX4_BookService(EX4_BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        System.out.println("Book Service");
        bookRepository.display();
    }

}
