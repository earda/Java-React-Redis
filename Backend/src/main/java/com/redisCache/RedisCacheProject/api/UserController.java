package com.redisCache.RedisCacheProject.api;

import com.redisCache.RedisCacheProject.model.User;
import com.redisCache.RedisCacheProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<String> saveUser(@RequestBody User user){
        boolean result = userService.saveUser(user);
        if(result)
        {
            return ResponseEntity.ok("User Created Succesfuly !" );
        }
        else return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @GetMapping("/user")
    public ResponseEntity<List<User>> fetchAllUsers()
    {
        List<User> users;
        users=userService.fetchAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> fetchUserById(@PathVariable Long id) {
        User user = userService.fetchUserById(id);
        if (user != null) {
            return (ResponseEntity<User>) ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
