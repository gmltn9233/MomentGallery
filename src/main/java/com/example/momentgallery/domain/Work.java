package com.example.momentgallery.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@Builder
@AllArgsConstructor
public class Work {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String detail;

    @NotNull
    private String genre;

    @Lob
    private String link;

    @Builder
    public Work(String title, String detail, String genre, String link){
        this.title = title;
        this.detail = detail;
        this.genre = genre;
        this.link = link;
    }

    public Work() {

    }
}
