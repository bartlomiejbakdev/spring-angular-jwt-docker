package com.bak.backendjwt.product;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200") //umożlwia połączenia z tego hosta
public class BookApi {


    @GetMapping("/api/books")
    public List<Book> get(){
        List<Book> bookList = new ArrayList<>();
        bookList.add(new Book("Spring Boot:Livebook", "Adam Bykowski"));
        bookList.add(new Book("Spring in Action", "Bartek Bak"));

        return bookList;
    }
}
