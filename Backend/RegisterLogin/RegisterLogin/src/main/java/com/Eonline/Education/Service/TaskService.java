package com.Eonline.Education.Service;


import com.Eonline.Education.modals.Task;
import com.Eonline.Education.modals.TraineeTask;
import com.Eonline.Education.response.ApiResponse;
import com.Eonline.Education.response.TaskResponse;
import com.Eonline.Education.user.TaskStatus;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface TaskService {

    public List<Task> saveFile(String jwt,MultipartFile file, List<String> Email, String taskName) throws IOException;

    public Task getFile(Long taskId);

    TaskResponse updateStatus(Long taskId, TaskStatus taskStatus);

    List<TaskResponse> getAll();

    List<TaskResponse> getAllTaskByUser(String email);

    List<TaskResponse> getTaskListForUser(String jwt);

    TaskResponse uploadUserFile(String jwt, MultipartFile file,  String description,Long taskId) throws IOException;

    List<TaskResponse> getTaskListForTrainee(String jwt);
}