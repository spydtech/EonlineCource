package com.Eonline.Education.Service;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.modals.Post;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.PostRepository;
import com.Eonline.Education.repository.SaveRepository;
import com.Eonline.Education.repository.UserRepository;
import com.Eonline.Education.response.PostResponse;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

	@Autowired
	private PostRepository postRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Autowired
	private NotificationService notificationService;

	@Autowired
	private SaveRepository saveRepository;

	@Override
	public String saveProfilePhotoByEmail(String email, MultipartFile file) throws IOException {
		Optional<Post> postOpt = postRepository.findByPostedBY(email);
		if (postOpt.isEmpty()) {
			throw new RuntimeException("Post not found for the given email: " + email);
		}
		Post post = postOpt.get();
		post.setProfilePicture(file.getBytes());
		postRepository.save(post);
		return "Profile photo uploaded successfully!";
	}

	@Override
	public void updateProfilePicture(long id, byte[] profilePicture) throws IOException {
		Post post = postRepository.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));
		post.setProfilePicture(profilePicture);
		postRepository.save(post);
	}

	@Override
	public byte[] getProfilePicture(long id) {
		Post post = postRepository.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));
		return post.getProfilePicture();
	}

	@Override
	public List<PostResponse> getUserPost(String jwt) {
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		List<Post> posts = postRepository.findAllByPostedBY(email);
		List<PostResponse> postResponses = new ArrayList<>();
		for (Post post : posts) {
			postResponses.add(postToPostResponse(post));
		}
		return postResponses;
	}

	@Override
	public Post saveTextPost(String jwt, String name, String content, String postedBY, List<String> tags) {
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		Post post = new Post();
		post.setName(name);
		post.setContent(content);
		post.setPostedBY(user.getEmail());
		post.setTags(tags);
		post.setLikeCount(0);
		post.setViewCount(0);
		post.setProfilePicture(user.getProfilePhoto());
		post.setDateTime(LocalDateTime.now());
		notificationService.createNotification(user.getEmail(), "Post created successfully");
		return postRepository.save(post);
	}

	@Override
	public Post savePost(String jwt, List<MultipartFile> imageFiles, List<MultipartFile> videoFiles,
						 String name, String content, String postedBY, List<String> tags) throws IOException {
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		Post post = new Post();
		post.setName(name);
		post.setContent(content);
		post.setPostedBY(user.getEmail());
		post.setTags(tags);
		post.setLikeCount(0);
		post.setViewCount(0);
		post.setProfilePicture(user.getProfilePhoto());
		post.setDateTime(LocalDateTime.now());

		// Save images and videos as base64 strings
		List<byte[]> images = new ArrayList<>();
		List<byte[]> videos = new ArrayList<>();

		if (imageFiles != null) {
			for (MultipartFile file : imageFiles) {
				if (!file.isEmpty()) {
					images.add(file.getBytes());
				}
			}
		}

		if (videoFiles != null) {
			for (MultipartFile file : videoFiles) {
				if (!file.isEmpty()) {
					videos.add(file.getBytes());
				}
			}
		}

		post.setImg(images);  // Set the images as byte arrays
		post.setVideo(videos);  // Set the videos as byte arrays

		notificationService.createNotification(user.getEmail(), "Post created successfully");
		return postRepository.save(post);
	}

	@Override
	public Post updateTextPost(String jwt, Long postId, Post existingPost) {
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		existingPost.setPostedBY(user.getEmail());
		existingPost.setProfilePicture(user.getProfilePhoto());
		existingPost.setDateTime(LocalDateTime.now());
		return postRepository.save(existingPost);
	}

	@Override
	public Post updatePostWithMedia(String jwt, Long postId, List<MultipartFile> files) throws IOException {
		Post post = postRepository.findById(postId).orElseThrow(() -> new RuntimeException("Post not found"));
		List<byte[]> images = new ArrayList<>();
		List<byte[]> videos = new ArrayList<>();

		for (MultipartFile file : files) {
			String contentType = file.getContentType();
			if (contentType != null && contentType.startsWith("image/")) {
				images.add(file.getBytes());
			} else if (contentType != null && contentType.startsWith("video/")) {
				videos.add(file.getBytes());
			}
		}

		post.setImg(images);  // Set the images as byte arrays
		post.setVideo(videos);  // Set the videos as byte arrays
		post.setDateTime(LocalDateTime.now());
		return postRepository.save(post);
	}

	@Override
	public List<PostResponse> getAllPost() {
		List<Post> posts = postRepository.findAll();
		List<PostResponse> responses = new ArrayList<>();
		for (Post post : posts) {
			responses.add(postToPostResponse(post));
		}
		return responses;
	}

	@Override
	public Post getPostById(Long postId) {
		Post post = postRepository.findById(postId).orElseThrow(() -> new EntityNotFoundException("Post not found"));
		post.setViewCount(post.getViewCount() + 1);
		return postRepository.save(post);
	}

	@Override
	public void likePost(String jwt, Long postId) {
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		Post post = postRepository.findById(postId).orElseThrow(() -> new EntityNotFoundException("Post not found"));
		post.setLikeCount(post.getLikeCount() + 1);
		postRepository.save(post);
		notificationService.createNotification(user.getEmail(), "Liked the post successfully");
	}

	@Override
	public List<Post> searchByName(String name) {
		return postRepository.findByNameContainingIgnoreCase(name);
	}

	@Override
	public ResponseEntity<?> deletePostById(long id) {
		if (!postRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		saveRepository.deleteByPostId(id);
		postRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}

	private PostResponse postToPostResponse(Post post) {
		PostResponse response = new PostResponse();
		response.setId(post.getId());
		response.setName(post.getName());
		response.setContent(post.getContent());
		response.setPostedBY(post.getPostedBY());
		response.setImageList(post.getImg());  // Get images as byte array
		response.setVideoList(post.getVideo());  // Get videos as byte array
		response.setMediaType(post.getMediaType());
		response.setDateTime(post.getDateTime());
		response.setLikeCount(post.getLikeCount());
		response.setViewCount(post.getViewCount());
		response.setTags(post.getTags());
		response.setProfilePicture(post.getProfilePicture());
		return response;
	}
}
