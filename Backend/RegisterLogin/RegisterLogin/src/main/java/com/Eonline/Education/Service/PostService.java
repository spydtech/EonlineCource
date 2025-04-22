package com.Eonline.Education.Service;

import com.Eonline.Education.modals.Post;
import com.Eonline.Education.response.PostResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public interface PostService {

	List<PostResponse> getAllPost();

	Post getPostById(Long postId);

	void likePost(String jwt, Long postId);

	List<Post> searchByName(String name);

	ResponseEntity<?> deletePostById(long id);

	Post saveTextPost(String jwt, String name, String content, String postedBY, List<String> tags);

	// Save post with multiple images and videos
	Post savePost(String jwt, List<MultipartFile> imageFiles, List<MultipartFile> videoFiles,
				  String name, String content, String postedBY, List<String> tags) throws IOException;

	String saveProfilePhotoByEmail(String email, MultipartFile file) throws IOException;

	void updateProfilePicture(long id, byte[] profilePicture) throws IOException;

	byte[] getProfilePicture(long id);

	List<PostResponse> getUserPost(String jwt);

	Post updateTextPost(String jwt, Long postId, Post existingPost);

	Post updatePostWithMedia(String jwt, Long postId, List<MultipartFile> files) throws IOException;
}
