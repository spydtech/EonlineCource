package com.Eonline.Education.modals;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class TraineeCredentialGenerator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String password;
    private String userId;

    @OneToMany(mappedBy = "trainees", fetch = FetchType.LAZY)
    private List<ChatGroup> trainingGroups = new ArrayList<>();

    // Helper method to maintain relationship consistency
    public void addTrainingGroup(ChatGroup group) {
        trainingGroups.add(group);
        group.setTrainees(this);
    }
}