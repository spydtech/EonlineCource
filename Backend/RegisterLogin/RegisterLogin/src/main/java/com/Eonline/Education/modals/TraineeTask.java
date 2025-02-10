package com.Eonline.Education.modals;

import com.Eonline.Education.user.TaskStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class TraineeTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    private String description;
    private Long userId;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] file;
    @Enumerated(EnumType.STRING)
    private TaskStatus taskStatus;
    private Long taskId;
}
