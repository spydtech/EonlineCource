package com.Eonline.Education.modals;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
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

    // Explicit getter/setter to maintain naming
    @Setter
    @Getter
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "trainer_id",
            nullable = true,
            foreignKey = @ForeignKey(
                    name = "fk_chat_group_trainer",
                    foreignKeyDefinition = "FOREIGN KEY (trainer_id) REFERENCES trainee_credential_generator(id) ON DELETE SET NULL"
            )
    )
    private TraineeCredentialGenerator trainees;

    @OneToMany(mappedBy = "group", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Meeting> meetings = new ArrayList<>();

    private LocalDate courseStartDate;
    private LocalDate courseEndDate;

    // Constructors
    public ChatGroup() {}

    public ChatGroup(String name) {
        this.name = name;
    }

    // Helper methods
    public void addUser(User user) {
        if (!this.members.contains(user)) {
            this.members.add(user);
        }
    }
}