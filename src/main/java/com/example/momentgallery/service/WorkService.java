package com.example.momentgallery.service;

import com.example.momentgallery.dao.WorkDAO;
import com.example.momentgallery.domain.Work;
import com.example.momentgallery.dto.WorkDTO;
import java.io.IOException;
import org.springframework.stereotype.Service;

@Service
public class WorkService {

    private final WorkDAO workDAO;

    public WorkService(WorkDAO workDAO){
        this.workDAO = workDAO;
    }

    public void saveWork(WorkDTO inputWork) throws IOException {

        Work work = Work.builder()
            .title(inputWork.getTitle())
            .detail(inputWork.getDetail())
            .genre(inputWork.getGenre())
            .data(inputWork.getFile().getBytes())
            .build();

        workDAO.save(work);
    }
}
