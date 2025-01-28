package com.Eonline.Education.Controller;

import com.Eonline.Education.Service.TaskService;
import com.Eonline.Education.modals.Task;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
import com.Eonline.Education.repository.TaskRepository;
import com.Eonline.Education.repository.TraineeRepository;
import com.Eonline.Education.response.ApiResponse;
import com.Eonline.Education.response.TaskResponse;
import com.Eonline.Education.user.TaskStatus;
import io.jsonwebtoken.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class TaskController {
    @Autowired
    TraineeRepository traineeRepository;
    @Autowired
    TaskRepository taskRepository;

    @Autowired
    private TaskService taskService;

    @PostMapping("/upload/{Emails}/{description}")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable List<String> Emails, @PathVariable String description) {
        try {
            List<Task> savedFile = taskService.saveFile(file,Emails,description);
            return new ResponseEntity<>("File uploaded successfully: " , HttpStatus.OK);
        } catch (IOException | java.io.IOException e) {
            return new ResponseEntity<>("Could not upload the file: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/download/{taskId}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable Long taskId) {
        Task taskEntity = taskService.getFile(taskId);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + taskEntity.getName() + "\"")
                .header(HttpHeaders.CONTENT_TYPE, taskEntity.getType())
                .body(taskEntity.getFile());
    }

    @PutMapping("/update/status")
    public TaskResponse updateStatus(@RequestParam Long taskId , @RequestParam TaskStatus taskStatus){
        return taskService.updateStatus(taskId,taskStatus);
    }
    @GetMapping("/get/tasks/{email}")
    public List<TaskResponse> getAllTaskByUser(@PathVariable String email){
        return taskService.getAllTaskByUser(email);
    }

    @GetMapping("/getAll")
    public List<TaskResponse> getAll(){
        return taskService.getAll();
    }






}