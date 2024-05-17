package com.example.momentgallery.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class WorkDTO {

    @NotNull
    private String title;

    @NotNull
    private String detail;

    @NotNull
    private String genre;

    @NotNull
    private String link;

}
