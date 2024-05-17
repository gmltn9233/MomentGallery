package com.example.momentgallery.controller;

import com.example.momentgallery.domain.Work;
import com.example.momentgallery.dto.WorkDTO;
import com.example.momentgallery.service.WorkService;
import java.io.IOException;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class WorkController {

    private final WorkService workService;

    public WorkController(WorkService workService) {
        this.workService = workService;
    }

    @PostMapping("/works")
    public void saveWork(@ModelAttribute WorkDTO workDTO) {
        System.out.println("title"+workDTO.getTitle());
        System.out.println("detail"+workDTO.getDetail());
        System.out.println("genre"+workDTO.getGenre());

        workService.saveWork(workDTO);

    }
}
