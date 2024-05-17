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

    public void saveWork(WorkDTO inputWork) {

        Work work = Work.builder()
            .title(inputWork.getTitle())
            .detail(inputWork.getDetail())
            .genre(inputWork.getGenre())
            .link(inputWork.getLink())
            .build();

        workDAO.save(work);
    }

    public Work requestWork(long id) {

        return workDAO.findById(id).get();
    }

    public void deleteWork(long id) {

        workDAO.deleteById(id);
    }


}
