package com.example.librarylab.services;

import com.example.librarylab.models.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAll();
    Optional<Book> save(String name, Double price, Integer quantity, Long category, Long manufacturer);

}
