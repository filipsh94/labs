package com.example.librarylab.services;

import com.example.librarylab.models.Book;
import com.example.librarylab.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService{

    private final  BookRepository bookRepository;
    public BookServiceImpl(BookRepository bookRepository)
    {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> findAll() {
        return this.bookRepository.findAll();
    }

    @Override
    public Optional<Book> save(String name, Double price, Integer quantity, Long category, Long manufacturer) {
        return Optional.empty();
    }
}
