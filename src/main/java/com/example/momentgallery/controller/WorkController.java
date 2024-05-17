package com.example.momentgallery.controller;

import com.example.momentgallery.domain.Work;
import com.example.momentgallery.dto.WorkDTO;
import com.example.momentgallery.service.WorkService;
import java.io.IOException;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/works")
@RestController
public class WorkController {

    private final WorkService workService;

    public WorkController(WorkService workService) {
        this.workService = workService;
    }

    @GetMapping
    public List<Work> workList(){
        System.out.println("호출됨요");
        return workService.workList();
    }

    @PostMapping
    public void saveWork(@ModelAttribute WorkDTO workDTO) {
        System.out.println("title"+workDTO.getTitle());
        System.out.println("detail"+workDTO.getDetail());
        System.out.println("genre"+workDTO.getGenre());

        workService.saveWork(workDTO);

    }
    @GetMapping("/{id}")
    public ResponseEntity<Work> works(@PathVariable long id) {

        Work work = workService.requestWork(id);

        return ResponseEntity.ok().body(work);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        workService.deleteWork(id);

        return ResponseEntity.noContent().build();
    }
}


