package com.Eonline.Education.modals;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
public class ChatGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "chat_group_users",
            joinColumns = @JoinColumn(name = "chat_group_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> members = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "chat_group_trainees",
            joinColumns = @JoinColumn(name = "chat_group_id"),
            inverseJoinColumns = @JoinColumn(name = "trainee_id"))
    private List<TraineeCredentialGenerator> trainees = new ArrayList<TraineeCredentialGenerator>();
    @OneToMany(mappedBy = "group", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Meeting> meetings = new ArrayList<>();

    // Constructors, getters, and setters

    public ChatGroup() {
    }

    public void addUser(User user) {
        if (!this.members.contains(user)) {
            this.members.add(user);
        }
    }


    public void addTrainee(TraineeCredentialGenerator trainee) {
        if (!this.trainees.contains(trainee)) {
            this.trainees.add(trainee);
        }
    }

    public ChatGroup(String name) {
        this.name = name;
    }

}
