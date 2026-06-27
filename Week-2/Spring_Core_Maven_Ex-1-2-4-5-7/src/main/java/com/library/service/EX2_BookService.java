package com.library.service;

import com.library.repository.EX2_BookRepository;

public class EX2_BookService {

    private EX2_BookRepository bookRepository;

    public void setBookRepository(EX2_BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        System.out.println("Book Service Running");
        bookRepository.display();
    }

}
