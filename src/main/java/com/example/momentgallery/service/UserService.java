package com.example.momentgallery.service;

import com.example.momentgallery.dao.UserDAO;
import com.example.momentgallery.domain.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public User login(final String userName, final String password){

        User user = userDAO.findByUserId(userName);

        if(user.getPassword().equals(password)){
            return user;
        }
        return null;
    }

}
