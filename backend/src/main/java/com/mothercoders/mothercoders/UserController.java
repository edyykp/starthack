package com.mothercoders.mothercoders;
import org.springframework.web.bind.annotation.*;

import java.io.File;

@RestController
public class UserController {
   // @CrossOrigin(origins = "http://localhost:8080")
    @CrossOrigin(origins="*")

    @GetMapping("/user/")
    String function() {
        String x = "[{ \"name\": \"Vlad Andrei bucur\" }]";
        return x;
    }


    //@PostMapping("user");



}
