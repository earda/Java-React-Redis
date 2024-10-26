package com.redisCache.RedisCacheProject.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
public class User implements Serializable {

    private Long id;
    private String name;
    private String email;
    private int age;

}
