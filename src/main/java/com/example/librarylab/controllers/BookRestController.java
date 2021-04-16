package com.example.librarylab.controllers;


import com.example.librarylab.enumeration.Category;
import com.example.librarylab.models.Author;
import com.example.librarylab.models.Book;
import com.example.librarylab.models.Country;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookRestController {

//    private final BookService bookService;
//    public BooksRestController(BookService bookService){
//        this.bookService = bookService;
//    }

    @GetMapping
    private List<Book> findAll() {
        List<Book> books = new ArrayList<Book>();
        Country country = new Country("macedonia", "europe");
        Author author = new Author("filip","shtergisli",country);
        Book book = new Book("Harry potter", Category.FANTASY,author,2);
        Book book1 = new Book("Harry potter123", Category.FANTASY,author,2);
        books.add(book);
        books.add(book1);

        return books;
    }
}
