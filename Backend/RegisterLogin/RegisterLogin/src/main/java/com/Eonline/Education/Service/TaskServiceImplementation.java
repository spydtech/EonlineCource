package com.Eonline.Education.Service;

import com.Eonline.Education.modals.Task;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.TaskRepository;
import com.Eonline.Education.repository.TraineeRepository;
import com.Eonline.Education.repository.UserRepository;
import com.Eonline.Education.response.ApiResponse;
import com.Eonline.Education.response.TaskResponse;
import com.Eonline.Education.user.TaskStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImplementation implements TaskService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    TaskRepository taskRepository;
    @Autowired
    TraineeRepository traineeRepository;
    @Override
    public List<Task> saveFile(MultipartFile file, List<String> Email, String taskName) throws IOException {
        List<Task> tasksToSave = new ArrayList<>();
        for (String email : Email) {
            User user = userRepository.findByEmail(email);
            if (user == null) {
                throw new IllegalArgumentException("No user found with email: " + email);
            }
            Task  taskEntity = new Task();
                taskEntity.setName(file.getOriginalFilename());
                taskEntity.setType(file.getContentType());
                taskEntity.setFile(file.getBytes());
                taskEntity.setDescription(taskName);
                taskEntity.setTaskStatus(TaskStatus.PENDING);
                taskEntity.setUser(user);
            tasksToSave.add(taskEntity);
        }
        return taskRepository.saveAll(tasksToSave);
        }

    @Override
    public Task getFile(Long taskId) {
        return taskRepository.findById(taskId).get();
    }

    @Override
    public TaskResponse updateStatus(Long taskId, TaskStatus taskStatus) {;
       Task task= taskRepository.findById(taskId).get();
           task.setTaskStatus(taskStatus);
       taskRepository.save(task);
        return taskToResponse(task);
    }

    @Override
    public List<TaskResponse> getAll() {
        List<Task> tasks = taskRepository.findAll();
        List<TaskResponse> taskResponses = new ArrayList<>();
        for (Task task : tasks) {
            taskResponses.add(taskToResponse(task));
        }
        return taskResponses;
    }

    @Override
    public List<TaskResponse> getAllTaskByUser(String email) {
        List<TaskResponse> taskResponses = new ArrayList<>();
       User user=userRepository.findByEmail(email);
       if(user!=null) {
           List<Task> task = taskRepository.findAllByUserId(user.getId());
           for (Task task1 : task) {
               taskResponses.add(taskToResponse(task1));
           }
           return taskResponses;
       }
       return null;
    }

    public TaskResponse taskToResponse(Task task) {
        TaskResponse response = new TaskResponse();
        response.setDescription(task.getDescription());
        response.setName(task.getUser().getFirstName());
        response.setFile(task.getName());
        response.setStatus(task.getTaskStatus());

        return response;
    }
}