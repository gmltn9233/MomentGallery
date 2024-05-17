package com.example.momentgallery.controller;

import com.example.momentgallery.domain.User;
import com.example.momentgallery.dto.LoginDTO;
import com.example.momentgallery.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginDTO loginDTO, HttpServletRequest request){
        String userName = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        User user = userService.login(userName,password);

        if(user != null){
            HttpSession session = request.getSession();
            session.setAttribute("LoginUser",user);
            session.setMaxInactiveInterval(60 * 30);
        }

        if(user == null){
            return null;
        }
        else{
            return user;
        }
    }
}
