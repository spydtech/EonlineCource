package com.Eonline.Education.Service;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.Request.ChatGroupRequest;
import com.Eonline.Education.modals.ChatGroup;
import com.Eonline.Education.modals.Payment;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.ChatGroupRepository;
import com.Eonline.Education.repository.PaymentRepository;
import com.Eonline.Education.repository.TraineeRepository;
import com.Eonline.Education.repository.UserRepository;
import com.Eonline.Education.response.ChatGroupResponse;
import com.Eonline.Education.response.GroupUsersResponse;
import com.Eonline.Education.response.UserResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ChatGroupService {

    @Autowired
    private ChatGroupRepository chatGroupRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TraineeRepository traineeRepository;
    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    JwtTokenProvider jwtTokenProvider;

    public ChatGroupResponse createChatGroup(ChatGroupRequest chatGroup) {
        ChatGroup group = new ChatGroup();
        Optional<ChatGroup> optionalGroup = chatGroupRepository.findByNameIgnoreCase(chatGroup.getGroupName());
        if (optionalGroup.isEmpty()) {
            group.setName(chatGroup.getGroupName());
            List<User> usersList = new ArrayList<>();
            if (chatGroup.getUsers() != null && !chatGroup.getUsers().isEmpty()) {
                for (String email : chatGroup.getUsers()) {
                    User user = userRepository.findByEmail(email);
                    if (user != null) {
                        usersList.add(user);
                    }
                }

                group.setMembers(usersList);
            } else {
                group.setMembers(new ArrayList<>());
            }
            List<TraineeCredentialGenerator> traineeList = new ArrayList<>();
            if (chatGroup.getTrainees() != null && !chatGroup.getTrainees().isEmpty()) {
                for (String email : chatGroup.getTrainees()) {
                    TraineeCredentialGenerator trainee = traineeRepository.findByEmail(email);
                    if (trainee != null) {
                        traineeList.add(trainee);
                    }
                }
                group.setTrainees(traineeList);
            } else {
                group.setTrainees(new ArrayList<>());
            }
            chatGroupRepository.save(group);
            return generateUserResponse(group);
        } else {
            ChatGroup groupChart = optionalGroup.get();
            groupChart.setName(chatGroup.getGroupName());
            List<User> usersList = new ArrayList<>();
            if (chatGroup.getUsers() != null && !chatGroup.getUsers().isEmpty()) {
                for (String email : chatGroup.getUsers()) {
                    User user = userRepository.findByEmail(email);
                    if (user != null) {
                        usersList.add(user);
                    }
                }
                groupChart.setMembers(usersList);
            }
            List<TraineeCredentialGenerator> traineeList = new ArrayList<>();
            if (chatGroup.getTrainees() != null && !chatGroup.getTrainees().isEmpty()) {
                for (String email : chatGroup.getTrainees()) {
                    TraineeCredentialGenerator trainee = traineeRepository.findByEmail(email);
                    if (trainee != null) {
                        traineeList.add(trainee);
                    }
                }
                groupChart.setTrainees(traineeList);
            }
            chatGroupRepository.save(groupChart);
            return generateUserResponse(groupChart);
        }

    }

    public List<ChatGroupResponse> getAllChatGroups() {

        List<ChatGroupResponse> chatGroupResponses = new ArrayList<>();
        List<ChatGroup> chatGroups = chatGroupRepository.findAll();
        List<User> users = userRepository.findAll();

        for (ChatGroup chatGroup : chatGroups) {
            ChatGroupResponse chatGroupResponse = new ChatGroupResponse();
            chatGroupResponse.setId(chatGroup.getId());
            chatGroupResponse.setGroupName(chatGroup.getName());

            List<UserResponse> userResponses = new ArrayList<>();
            for (User member : chatGroup.getMembers()) {
                UserResponse userResponse = new UserResponse();
                userResponse.setUserId(member.getId());
                if (member.getLastName() != null) {
                    userResponse.setFullName(member.getFirstName() + " " + member.getLastName());
                } else {
                    userResponse.setFullName(member.getFirstName());
                }
                userResponse.setEmail(member.getEmail());
                userResponse.setCreatedAt(member.getCreatedAt());
                userResponses.add(userResponse);
            }
            chatGroupResponse.setUsers(userResponses);

            List<UserResponse> traineeResponses = new ArrayList<>();
            for (TraineeCredentialGenerator trainee : chatGroup.getTrainees()) {
                UserResponse traineeResponse = new UserResponse();
                if (trainee.getLastName() != null) {
                    traineeResponse.setFullName(trainee.getFirstName() + " " + trainee.getLastName());
                } else {
                    traineeResponse.setFullName(trainee.getFirstName());
                }
                traineeResponse.setEmail(trainee.getEmail());
                traineeResponses.add(traineeResponse);
            }
            chatGroupResponse.setTrainees(traineeResponses);
            chatGroupResponses.add(chatGroupResponse);
        }

        return chatGroupResponses;
    }


    public Optional<ChatGroup> getChatGroupById(Long id) {
        return chatGroupRepository.findById(id);
    }

    public ChatGroupResponse updateChatGroup(Long id, ChatGroupRequest updatedChatGroup) {
        Optional<ChatGroup> optionalChatGroup = chatGroupRepository.findById(id);
        if (optionalChatGroup.isPresent()) {
            ChatGroup chatGroup = optionalChatGroup.get();
            chatGroup.setName(updatedChatGroup.getGroupName());
            chatGroupRepository.save(chatGroup);
            return generateUserResponse(chatGroup);
        } else {
            return null;
        }
    }

    public void deleteChatGroup(Long id) {
        chatGroupRepository.deleteById(id);
    }

    public ChatGroupResponse addUsersToChatGroup(Long id, List<String> userEmails) {
        Optional<ChatGroup> optionalChatGroup = chatGroupRepository.findById(id);
        if (optionalChatGroup.isPresent()) {
            ChatGroup chatGroup = optionalChatGroup.get();
            for (String email : userEmails) {
                User user = userRepository.findByEmail(email);
                if (user != null) {
                    boolean isUserAlreadyInGroup = chatGroup.getMembers().stream()
                            .anyMatch(existingUser -> existingUser.getEmail().equals(user.getEmail()));
                    if (!isUserAlreadyInGroup) {
                        chatGroup.addUser(user);
                    }
                }
            }
            chatGroupRepository.save(chatGroup);
            return returnChatGroupForUsers(chatGroup);
        } else {
            return null;
        }
    }

    private ChatGroupResponse returnChatGroupForUsers(ChatGroup chatGroup) {
        ChatGroupResponse response = new ChatGroupResponse();
        response.setId(chatGroup.getId());
        response.setGroupName(chatGroup.getName());
        List<UserResponse> userResponses = new ArrayList<>();
        for (User member : chatGroup.getMembers()) {
            UserResponse userResponse = new UserResponse();
            userResponse.setUserId(member.getId());
            if (member.getLastName() != null) {
                userResponse.setFullName(member.getFirstName() + " " + member.getLastName());
            } else {
                userResponse.setFullName(member.getFirstName());
            }
            userResponse.setEmail(member.getEmail());
            userResponse.setCreatedAt(member.getCreatedAt());
            userResponses.add(userResponse);
        }
        response.setUsers(userResponses);
        return response;
    }


    public ChatGroupResponse usersAndTraineeListByGroupName(String groupName) {
        Optional<ChatGroup> chatGroup = chatGroupRepository.findByName(groupName);
        if (chatGroup.isPresent()) {
            return generateUserResponse(chatGroup.get());
        } else {
            throw new EntityNotFoundException(groupName + " not found.");
        }
    }

    private ChatGroupResponse generateUserResponse(ChatGroup chatGroup) {
        ChatGroupResponse response = new ChatGroupResponse();
        response.setId(chatGroup.getId());
        response.setGroupName(chatGroup.getName());

        List<UserResponse> userResponses = new ArrayList<>();
        for (User member : chatGroup.getMembers()) {
            UserResponse userResponse = new UserResponse();
            userResponse.setUserId(member.getId());
            if (member.getLastName() != null) {
                userResponse.setFullName(member.getFirstName() + " " + member.getLastName());
            } else {
                userResponse.setFullName(member.getFirstName());
            }
            userResponse.setEmail(member.getEmail());
            userResponse.setCreatedAt(member.getCreatedAt());
            userResponses.add(userResponse);
        }
        response.setUsers(userResponses);

        List<UserResponse> traineeResponses = new ArrayList<>();
        for (TraineeCredentialGenerator trainee : chatGroup.getTrainees()) {
            UserResponse traineeResponse = new UserResponse();
            if (trainee.getLastName() != null) {
                traineeResponse.setFullName(trainee.getFirstName() + " " + trainee.getLastName());
            } else {
                traineeResponse.setFullName(trainee.getFirstName());
            }
            traineeResponse.setEmail(trainee.getEmail());
            traineeResponses.add(traineeResponse);
        }
        response.setTrainees(traineeResponses);
        return response;
    }


    public ChatGroupResponse addTraineesToChatGroup(Long id, List<String> traineeEmails) {
        Optional<ChatGroup> optionalChatGroup = chatGroupRepository.findById(id);
        if (optionalChatGroup.isPresent()) {
            ChatGroup chatGroup = optionalChatGroup.get();
            for (String email : traineeEmails) {
                TraineeCredentialGenerator trainee = traineeRepository.findByEmail(email);
                if (trainee != null) {
                    chatGroup.addTrainee(trainee);
                }
            }
            chatGroupRepository.save(chatGroup);
            return returnChatGroupForTrainees(chatGroup);
        } else {
            return null;
        }
    }

    private ChatGroupResponse returnChatGroupForTrainees(ChatGroup chatGroup) {
        ChatGroupResponse response = new ChatGroupResponse();
        response.setId(chatGroup.getId());
        response.setGroupName(chatGroup.getName());
        List<UserResponse> traineeResponses = new ArrayList<>();
        for (TraineeCredentialGenerator trainee : chatGroup.getTrainees()) {
            UserResponse traineeResponse = new UserResponse();
            if (trainee.getLastName() != null) {
                traineeResponse.setFullName(trainee.getFirstName() + " " + trainee.getLastName());
            } else {
                traineeResponse.setFullName(trainee.getFirstName());
            }
            traineeResponse.setEmail(trainee.getEmail());
            traineeResponses.add(traineeResponse);
        }
        response.setTrainees(traineeResponses);
        return response;
    }

    public String removeUsersFromChatGroup(Long groupId, List<String> userEmailsToRemove) {
        Optional<ChatGroup> optionalChatGroup = chatGroupRepository.findById(groupId);
        if (optionalChatGroup.isPresent()) {
            ChatGroup chatGroup = optionalChatGroup.get();
            List<User> usersToRemove = chatGroup.getMembers().stream()
                    .filter(user -> userEmailsToRemove.contains(user.getEmail()))
                    .toList();
            chatGroup.getMembers().removeAll(usersToRemove);
            chatGroupRepository.save(chatGroup);
            return "User remove successfully from " + chatGroup.getName() + " Group";
        }
        return "Group Not Found";
    }

    public String removeTraineesFromChatGroup(Long groupId, List<String> traineeEmailsToRemove) {
        Optional<ChatGroup> optionalChatGroup = chatGroupRepository.findById(groupId);
        if (optionalChatGroup.isPresent()) {
            ChatGroup chatGroup = optionalChatGroup.get();
            List<TraineeCredentialGenerator> traineesToRemove = chatGroup.getTrainees().stream()
                    .filter(trainee -> traineeEmailsToRemove.contains(trainee.getEmail()))
                    .toList();
            chatGroup.getTrainees().removeAll(traineesToRemove);
            chatGroupRepository.save(chatGroup);
            return "Trainee remove successfully from " + chatGroup.getName() + " Group";
        }
        return "Group Not Found";
    }

    public List<GroupUsersResponse> getUsersByTraineeEmail(String jwt) {
        String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
        TraineeCredentialGenerator trainee = traineeRepository.findByEmail(email);
        if (trainee == null) {
            throw new RuntimeException("Trainee not found with email: " + email);
        }
        List<ChatGroup> chatGroups = chatGroupRepository.findByTrainees_Id(trainee.getId());
        if (chatGroups == null || chatGroups.isEmpty()) {
            return Collections.emptyList();
        }

        ObjectMapper objectMapper = new ObjectMapper();

        return chatGroups.stream()
                .filter(Objects::nonNull)
                .flatMap(chatGroup -> Optional.ofNullable(chatGroup.getMembers())
                        .orElse(Collections.emptyList())
                        .stream()
                        .map(user -> {
                            if (user == null) {
                                return new GroupUsersResponse(null, null, null, null, null, null, null,null,null);
                            }
                            String firstName = user.getFirstName();
                            String lastName = user.getLastName();
                            String fullName = (firstName == null && lastName == null)
                                    ? null
                                    : (lastName == null || lastName.isEmpty())
                                    ? firstName
                                    : firstName + " " + lastName;
                            String traineeFirstName = trainee.getFirstName();
                            String traineeLastName = trainee.getLastName();
                            String traineeFullName = (traineeFirstName == null && traineeLastName == null)
                                    ? null
                                    : (traineeLastName == null || traineeLastName.isEmpty())
                                    ? traineeFirstName
                                    : traineeFirstName + " " + traineeLastName;

                            Payment payment = paymentRepository.findByUserEmail(user.getEmail());

                            Map<String, Object> courseDetails = null;
                            if (payment != null && payment.getCourseDetails() != null) {
                                try {
                                    courseDetails = objectMapper.readValue(payment.getCourseDetails(), Map.class);
                                } catch (JsonProcessingException e) {
                                    System.err.println("Error parsing course details: " + e.getMessage());
                                }
                            }

                            LocalDate joiningDate = (payment != null) ? payment.getJoiningDate() : null;
                            LocalDate expiryDate = (payment != null) ? payment.getExpiryDate() : null;

                            return new GroupUsersResponse(
                                    chatGroup.getName() != null ? chatGroup.getName() : null,
                                    fullName,
                                    user.getEmail() != null ? user.getEmail() : null,
                                    user.getStatus() != null ? user.getStatus() : null,
                                    courseDetails,
                                    joiningDate,
                                    expiryDate,
                                    traineeFullName,
                                    email

                            );
                        })
                )
                .collect(Collectors.toList());
    }

}
