package com.Eonline.Education.Service;

import com.Eonline.Education.modals.ChatGroup;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.ChatGroupRepository;
import com.Eonline.Education.repository.TraineeRepository;
import com.Eonline.Education.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChatGroupService {

    @Autowired
    private ChatGroupRepository chatGroupRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TraineeRepository traineeRepository;

    public ChatGroup createChatGroup(ChatGroup chatGroup) {
        return chatGroupRepository.save(chatGroup);
    }

    public List<ChatGroup> getAllChatGroups() {
        return chatGroupRepository.findAll();
    }

    public Optional<ChatGroup> getChatGroupById(Long id) {
        return chatGroupRepository.findById(id);
    }

    public ChatGroup updateChatGroup(Long id, ChatGroup updatedChatGroup) {
        Optional<ChatGroup> optionalChatGroup = chatGroupRepository.findById(id);
        if (optionalChatGroup.isPresent()) {
            ChatGroup chatGroup = optionalChatGroup.get();
            chatGroup.setName(updatedChatGroup.getName());
            return chatGroupRepository.save(chatGroup);
        } else {
            return null;
        }
    }

    public void deleteChatGroup(Long id) {
        chatGroupRepository.deleteById(id);
    }

    public ChatGroup addUsersToChatGroup(Long id, List<String> userEmails) {
        Optional<ChatGroup> optionalChatGroup = chatGroupRepository.findById(id);
        if (optionalChatGroup.isPresent()) {
            ChatGroup chatGroup = optionalChatGroup.get();
            for (String email : userEmails) {
                User user = userRepository.findByEmail(email);
                if (user != null) {
                    chatGroup.addUser(user);
                }
            }
            return chatGroupRepository.save(chatGroup);
        } else {
            return null;
        }
    }

    public ChatGroup addTraineesToChatGroup(Long id, List<String> traineeEmails) {
        Optional<ChatGroup> optionalChatGroup = chatGroupRepository.findById(id);
        if (optionalChatGroup.isPresent()) {
            ChatGroup chatGroup = optionalChatGroup.get();
            for (String email : traineeEmails) {
                TraineeCredentialGenerator trainee = traineeRepository.findByEmail(email);
                if (trainee != null) {
                    chatGroup.addTrainee(trainee);
                }
            }
            return chatGroupRepository.save(chatGroup);
        } else {
            return null;
        }
    }
}
