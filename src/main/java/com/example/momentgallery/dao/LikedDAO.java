package com.example.momentgallery.dao;

import com.example.momentgallery.domain.Liked;
import com.example.momentgallery.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikedDAO extends JpaRepository<Liked, Long> {


}
