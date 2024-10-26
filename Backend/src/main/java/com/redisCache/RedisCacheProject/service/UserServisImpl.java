package com.redisCache.RedisCacheProject.service;

import com.redisCache.RedisCacheProject.model.User;
import com.redisCache.RedisCacheProject.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServisImpl implements UserService{

    @Autowired
    private UserDao userDao;
    @Override
    public boolean saveUser(User user) {
        return userDao.saveUser(user);
    }

    @Override
    public List<User> fetchAllUsers() {
        return userDao.fetchAllUsers();
    }
}
