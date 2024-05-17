package com.example.momentgallery.controller;


import com.example.momentgallery.dao.LikedDAO;
import com.example.momentgallery.domain.User;
import com.example.momentgallery.dto.LikeDTO;
import com.example.momentgallery.service.LikeService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LikeController {

    private final LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @PostMapping("/like")
    public void like(@RequestBody LikeDTO likeDTO, HttpServletRequest request){
        HttpSession session = request.getSession(false); // false는 세션이 없을 경우 새로 생성하지 않음


        if (session != null) {
            User user = (User) session.getAttribute("LoginUser");
            likeService.saveLike(user,likeDTO.getWorkId());
        }
    }
}
