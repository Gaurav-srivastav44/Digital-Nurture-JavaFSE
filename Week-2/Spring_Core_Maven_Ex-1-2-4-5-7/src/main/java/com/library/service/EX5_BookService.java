package com.library.service;

import com.library.repository.EX5_BookRepository;

public class EX5_BookService {

    private EX5_BookRepository bookRepository;

    public void setBookRepository(EX5_BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        System.out.println("Book Service Ready");
        bookRepository.display();
    }

}
