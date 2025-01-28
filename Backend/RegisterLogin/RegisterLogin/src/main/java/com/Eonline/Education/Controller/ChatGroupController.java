package com.Eonline.Education.Controller;

import com.Eonline.Education.Request.ChatGroupRequest;
import com.Eonline.Education.Service.ChatGroupService;
import com.Eonline.Education.modals.ChatGroup;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.response.ChatGroupResponse;
import com.Eonline.Education.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chat-groups")
public class ChatGroupController {

    @Autowired
    private ChatGroupService chatGroupService;

    @GetMapping
    public ResponseEntity<List<ChatGroupResponse>> getAllChatGroups() {
        List<ChatGroupResponse> chatGroups = chatGroupService.getAllChatGroups();
        return ResponseEntity.ok(chatGroups);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChatGroup> getChatGroupById(@PathVariable Long id) {
        Optional<ChatGroup> chatGroup = chatGroupService.getChatGroupById(id);
        return chatGroup.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ChatGroupResponse> createChatGroup(@RequestBody ChatGroupRequest chatGroupRequest) {
        return ResponseEntity.ok(chatGroupService.createChatGroup(chatGroupRequest));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ChatGroup> updateChatGroup(@PathVariable Long id, @RequestBody ChatGroup updatedChatGroup) {
        ChatGroup chatGroup = chatGroupService.updateChatGroup(id, updatedChatGroup);
        if (chatGroup != null) {
            return ResponseEntity.ok(chatGroup);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChatGroup(@PathVariable Long id) {
        chatGroupService.deleteChatGroup(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/add-users")
    public ResponseEntity<ChatGroupResponse> addUsersToChatGroup(@PathVariable Long id, @RequestBody List<String> userEmails) {
      return ResponseEntity.ok(chatGroupService.addUsersToChatGroup(id, userEmails));
    }

    @PostMapping("/{id}/add-trainees")
    public ResponseEntity<ChatGroupResponse> addTraineesToChatGroup(@PathVariable Long id, @RequestBody List<String> traineeEmails) {
       return ResponseEntity.ok( chatGroupService.addTraineesToChatGroup(id, traineeEmails));
    }
    @GetMapping("/get/user/trainee/{groupName}")
    public ChatGroupResponse usersByGroupName(@PathVariable String groupName){
        return chatGroupService.getUsersByGroupName(groupName);
    }

    @DeleteMapping("/{groupId}/remove-users")
    public ResponseEntity<ChatGroup> removeUsersFromChatGroup(
            @PathVariable("groupId") Long groupId,
            @RequestBody List<String> userEmailsToRemove) {

        ChatGroup chatGroup = chatGroupService.removeUsersFromChatGroup(groupId, userEmailsToRemove);

        if (chatGroup != null) {
            return ResponseEntity.ok(chatGroup);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{groupId}/remove-trainees")
    public ResponseEntity<ChatGroup> removeTraineesFromChatGroup(
            @PathVariable("groupId") Long groupId,
            @RequestBody List<String> traineeEmailsToRemove) {

        ChatGroup chatGroup = chatGroupService.removeTraineesFromChatGroup(groupId, traineeEmailsToRemove);

        if (chatGroup != null) {
            return ResponseEntity.ok(chatGroup);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
