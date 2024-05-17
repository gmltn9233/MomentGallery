package com.example.momentgallery.dao;

import com.example.momentgallery.domain.Work;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkDAO extends JpaRepository<Work, Long> {
    Optional<Work> findById(Long id);
}
