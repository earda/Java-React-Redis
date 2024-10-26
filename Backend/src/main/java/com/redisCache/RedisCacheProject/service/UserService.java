package com.redisCache.RedisCacheProject.service;

import com.redisCache.RedisCacheProject.model.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {

    public boolean saveUser(User user) ;

    List<User> fetchAllUsers();
}
