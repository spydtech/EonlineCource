package com.Eonline.Education.Controller;

import java.io.IOException;
import java.util.*;

import com.Eonline.Education.Service.NotificationService;
import com.Eonline.Education.repository.PostRepository;
import com.Eonline.Education.response.PostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.Eonline.Education.Service.PostService;
import com.Eonline.Education.Service.SaveService;
import com.Eonline.Education.modals.Post;
import com.Eonline.Education.modals.SaveEntity;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/posts")
public class PostController {

	@Autowired
	private PostService postService;

	@Autowired
	SaveService saveService;
	@Autowired
	PostRepository postRepository;
	@Autowired
	NotificationService notificationService;

	// Update Profile Picture for a Post
	@PutMapping("/{id}/profile-picture")
	public ResponseEntity<String> updateProfilePicture(@PathVariable long id,
													   @RequestParam("profilePicture") MultipartFile profilePicture) throws IOException {

		postService.updateProfilePicture(id, profilePicture.getBytes());
		return new ResponseEntity<>("Profile picture updated successfully!", HttpStatus.OK);
	}

	@PostMapping("/{email}/profile-photo")
	public ResponseEntity<String> uploadProfilePhoto(@PathVariable String email,
													 @RequestParam("file") MultipartFile file) {
		try {

			if (file.isEmpty()) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No file uploaded.");
			}

			String responseMessage = postService.saveProfilePhotoByEmail(email, file);

			return ResponseEntity.status(HttpStatus.CREATED).body(responseMessage);

		} catch (IOException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error handling the file: " + e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Unexpected error occurred: " + e.getMessage());
		}
	}

	@GetMapping("/{id}/profile-picture")
	public ResponseEntity<byte[]> getProfilePicture(@PathVariable long id) {
		byte[] photo = postService.getProfilePicture(id);

		if (photo != null) {
			HttpHeaders headers = new HttpHeaders();
			headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=profile-photo.jpg");
			return new ResponseEntity<>(photo, headers, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Create Post with Optional Media (Image/Video)
	@PostMapping("/createPost/media")
	public ResponseEntity<?> createPostWithOptions(@RequestHeader("Authorization") String jwt,@RequestParam(required = false) MultipartFile file,
														@RequestParam String name, // Post title or name
														@RequestParam String content, // Description or content of the post
														@RequestParam String postedBY, // User who posted
														@RequestParam(required = false) List<String> tags // Optional tags
	) {
		try {
			Post createdPost;

			if (file == null) {
				createdPost = postService.saveTextPost(jwt, name, content, postedBY, tags);
			} else {
				String contentType = file.getContentType();
				if (contentType == null || (!contentType.startsWith("image/") && !contentType.startsWith("video/"))) {
					return ResponseEntity.status(HttpStatus.BAD_REQUEST)
							.body("Invalid file type. Supported types are images and videos.");
				}
				createdPost = postService.savePost(jwt, file, name, content, postedBY, tags);
			}
//			notificationService.sendNotification(postedBY, notificationMessage);
			Map<String, Object> response = new HashMap<>();
			response.put("message", "Post created successfully");
			response.put("postId", createdPost.getId());
			return ResponseEntity.status(HttpStatus.CREATED).body(response);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error creating post: " + e.getMessage());
		}
	}

	@PutMapping("/updatePost/{postId}")
	public ResponseEntity<?> updatePost(
			@RequestHeader("Authorization") String jwt,
			@PathVariable Long postId,
			@RequestParam(required = false) MultipartFile file,
			@RequestParam(required = false) String name,
			@RequestParam(required = false) String content,
			@RequestParam(required = false) String postedBY,
			@RequestParam(required = false) List<String> tags
	) {
		try {
			Post existingPost = postService.getPostById(postId);
			if (existingPost == null) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND)
						.body("Post not found with ID: " + postId);
			}

			if (name != null) existingPost.setName(name);
			if (content != null) existingPost.setContent(content);
			if (postedBY != null) existingPost.setPostedBY(postedBY);
			if (tags != null) existingPost.setTags(tags);

			if (file != null) {
				String contentType = file.getContentType();
				if (contentType == null || (!contentType.startsWith("image/") && !contentType.startsWith("video/"))) {
					return ResponseEntity.status(HttpStatus.BAD_REQUEST)
							.body("Invalid file type. Supported types are images and videos.");
				}
				existingPost = postService.updatePostWithMedia(jwt, postId, file);
			} else {
				existingPost = postService.updateTextPost(jwt, postId, existingPost);
			}

			Map<String, Object> response = new HashMap<>();
			response.put("message", "Post updated successfully");
			response.put("postId", existingPost.getId());

			return ResponseEntity.ok(response);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error updating post: " + e.getMessage());
		}
	}


	// Get All Posts
	@GetMapping("/getPosts")
	public ResponseEntity<List<PostResponse>> getAllPost() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(postService.getAllPost());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	// Get Post by ID
	@GetMapping("/{postId}/image")
	public ResponseEntity<byte[]> getImage(@PathVariable Long postId) {
		byte[] photo = postService.getImage(postId);

		if (photo != null) {
			HttpHeaders headers = new HttpHeaders();
			headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=image.jpg");
			return new ResponseEntity<>(photo, headers, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{postId}/video")
	public ResponseEntity<byte[]> getVideo(@PathVariable Long postId) {
		byte[] photo = postService.getVideo(postId);

		if (photo != null) {
			HttpHeaders headers = new HttpHeaders();
			headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=video.mp4");
			return new ResponseEntity<>(photo, headers, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	//get post by user
	@GetMapping("/user/postList")
	public List<PostResponse> getUserPost(@RequestHeader("Authorization") String jwt) {
		return postService.getUserPost(jwt);
	}


	// Like a Post
	@PutMapping("/{postId}/like")
	public ResponseEntity<?> likePost(@RequestHeader("Authorization") String jwt,@PathVariable long postId) {
		try {
			postService.likePost(jwt,postId);
			return ResponseEntity.ok(new String[] { "Post liked successfully" });
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	// Search Posts by Name
	@GetMapping("/search/{name}")
	public ResponseEntity<?> searchByName(@PathVariable String name) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(postService.searchByName(name));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	// Delete Post by ID
	@DeleteMapping("/deletePost/{id}")
	public ResponseEntity<?> deletePostById(@PathVariable long id) {
		try {
			return new ResponseEntity<>(postService.deletePostById(id), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	// Save a Post
	@GetMapping("/getSavedPost/{id}")
	public ResponseEntity<String> savingThePost(@PathVariable long id) {
		try {
			return new ResponseEntity<>(saveService.savePostById(id), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	// Get All Saved Posts
	@GetMapping("getAllSavedPosts")
	public ResponseEntity<List<SaveEntity>> getAllSavedPost() {
		try {
			return new ResponseEntity<>(saveService.getAllSavedPosts(), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	// Delete Saved Post
	@DeleteMapping("deleteSavePost/{id}")
	public ResponseEntity<?> deleteSavedPost(@PathVariable int id) {
		try {
			return new ResponseEntity<>(saveService.deleteSavedPost(id), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}