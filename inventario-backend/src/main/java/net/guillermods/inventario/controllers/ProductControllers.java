package net.guillermods.inventario.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products/v1")
public class ProductControllers {
    
    @GetMapping
    public ResponseEntity<String> get(){
        return ResponseEntity.ok("Hello world");
    }
}
