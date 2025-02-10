package com.Eonline.Education.Service;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.modals.Task;
import com.Eonline.Education.modals.TraineeCredentialGenerator;
import com.Eonline.Education.modals.TraineeTask;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.TaskRepository;
import com.Eonline.Education.repository.TraineeRepository;
import com.Eonline.Education.repository.TraineeTaskRepository;
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
    @Autowired
    TraineeTaskRepository traineeTaskRepository;
    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Override
    public List<Task> saveFile(String jwt,MultipartFile file, List<String> Email, String taskName) throws IOException {
        String traineeEmail = jwtTokenProvider.getEmailFromJwtToken(jwt);
        TraineeCredentialGenerator trainee=traineeRepository.findByEmail(traineeEmail);
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
                taskEntity.setTraineeId(trainee.getId());
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
        TraineeTask task = traineeTaskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found with id: " + taskId));

        Optional<Task> userTask=taskRepository.findById(task.getTaskId());
       if(userTask.isPresent()){
           Task task1=userTask.get();
           if(taskStatus.equals(TaskStatus.ACCEPTED)){
               task1.setTaskStatus(TaskStatus.COMPLETED);
           }else{
               task1.setTaskStatus(TaskStatus.REJECTED);
           }
           taskRepository.save(task1);
       }
       task.setTaskStatus(taskStatus);
        traineeTaskRepository.save(task);
        return traineeTaskToResponse(task);
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

    @Override
    public List<TaskResponse> getTaskListForUser(String jwt) {
        List<TaskResponse>  taskResponses=new ArrayList<>();
        String userEmail = jwtTokenProvider.getEmailFromJwtToken(jwt);
        User user = userRepository.findByEmail(userEmail);
        List<Task> tasks=taskRepository.findAllByUserId(user.getId());
        for(Task task:tasks){
           taskResponses.add(taskToResponse(task));
        }
        return taskResponses;
    }

    @Override
    public TaskResponse uploadUserFile(String jwt, MultipartFile file,  String description,Long taskId) throws IOException {
        String traineeEmail = jwtTokenProvider.getEmailFromJwtToken(jwt);
        User user = userRepository.findByEmail(traineeEmail);
        Optional<Task> userTask=taskRepository.findById(taskId);
        if(userTask.get().getUser().getId().equals(user.getId())){
            TraineeTask task=new TraineeTask();
            task.setDescription(description);
            task.setFile(file.getBytes());
            task.setName(file.getOriginalFilename());
            task.setType(file.getContentType());
            task.setTaskStatus(TaskStatus.PENDING);
            task.setUserId(user.getId());
            task.setTaskId(taskId);
            traineeTaskRepository.save(task);
            return traineeTaskToResponse(task);
        }
        return null;
    }

    @Override
    public List<TaskResponse> getTaskListForTrainee(String jwt) {
        List<TaskResponse> taskResponses=new ArrayList<>();
       List<TraineeTask> tasks=traineeTaskRepository.findAll();
       for(TraineeTask task:tasks){
           taskResponses.add(traineeTaskToResponse(task));
       }
       return taskResponses;
    }

    public TaskResponse taskToResponse(Task task) {
        TaskResponse response = new TaskResponse();
        response.setDescription(task.getDescription());
        response.setName(task.getUser().getFirstName());
        response.setFile(task.getName());
        response.setStatus(task.getTaskStatus());
        return response;
    }
    public TaskResponse traineeTaskToResponse(TraineeTask task) {
        TaskResponse response = new TaskResponse();
        Optional<User> user = userRepository.findById(task.getUserId());
        response.setDescription(task.getDescription());
        if(user.get().getLastName()!=null) {
            response.setName(user.get().getFirstName() + " " + user.get().getFirstName());
        }else{
            response.setName(user.get().getFirstName());
        }
        response.setFile(task.getName());
        response.setStatus(task.getTaskStatus());
        response.setTaskId(task.getTaskId());
        return response;
    }
}