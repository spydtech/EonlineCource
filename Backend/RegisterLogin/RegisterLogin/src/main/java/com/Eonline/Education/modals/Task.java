package com.Eonline.Education.modals;

import com.Eonline.Education.user.TaskStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    private String description;
    private Long traineeId;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] file;
    @Enumerated(EnumType.STRING)
    private TaskStatus taskStatus;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;




}


//package com.Eonline.Education.modals;
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.Setter;
//
//@Setter
//@Getter
//@Entity
//public class Task {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//
//    private String type;
//
//    private String taskName;
//
//    @Lob
//    @Column(name = "data", length = 1048576)
//    private byte[] data;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;
//
//}