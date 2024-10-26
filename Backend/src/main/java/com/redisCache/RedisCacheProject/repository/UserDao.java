package com.redisCache.RedisCacheProject.repository;

import com.redisCache.RedisCacheProject.model.User;

import java.util.List;

public interface UserDao {
    boolean saveUser(User user);

    List<User> fetchAllUsers();
}
