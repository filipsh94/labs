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
import java.util.EnumSet;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/categories")
public class CategoryRestController {

    @GetMapping
    private List<Category> findAll() {
        List<Category> enumValues = new ArrayList<Category>(EnumSet.allOf(Category.class));

        return enumValues;
    }
}
