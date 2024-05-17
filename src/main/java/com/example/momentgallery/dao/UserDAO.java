package com.example.momentgallery.dao;

import com.example.momentgallery.domain.User;
import com.example.momentgallery.domain.Work;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User, Long> {
    User findByUserId(String id);
}
