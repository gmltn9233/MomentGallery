package com.example.momentgallery.service;

import com.example.momentgallery.dao.LikedDAO;
import com.example.momentgallery.dao.WorkDAO;
import com.example.momentgallery.domain.Liked;
import com.example.momentgallery.domain.User;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

    private final WorkDAO workDAO;
    private final LikedDAO likedDAO;

    public LikeService(WorkDAO workDAO, LikedDAO likedDAO) {
        this.workDAO = workDAO;
        this.likedDAO = likedDAO;
    }

    public void saveLike(User user,Long id){
        Liked liked = Liked.builder()
            .user(user)
            .work(workDAO.findById(id).get())
            .build();

        likedDAO.save(liked);
    }
}
