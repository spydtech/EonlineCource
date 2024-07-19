package com.Eonline.Education.Service;

import com.Eonline.Education.modals.Post;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialException;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;



public interface PostService {
    Post savePpost(Post post);
    List<Post> getAllPost();
    Post getPostById(Long postId);
    void likePost(Long postId);
    List<Post> searchByName(String name);
    String deletePostById(long id);
    Post savePost(MultipartFile file,String name,String content,String postedBY,List<String> tags) throws SerialException, SQLException, IOException;
    String Notifications(MultipartFile file,String name,String content,String postedBY,List<String> tags) throws SerialException, SQLException, IOException;
}