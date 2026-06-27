package com.library.service;

import com.library.repository.EX7_BookRepository;

public class EX7_BookService {

    private EX7_BookRepository bookRepository;

    public EX7_BookService(EX7_BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void setBookRepository(EX7_BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        System.out.println("Book Service Loaded");
        bookRepository.display();
    }

}
