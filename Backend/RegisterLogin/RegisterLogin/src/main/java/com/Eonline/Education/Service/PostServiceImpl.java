package com.Eonline.Education.Service;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.modals.Post;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.PostRepository;
import com.Eonline.Education.repository.SaveRepository;
import com.Eonline.Education.repository.UserRepository;
import com.Eonline.Education.response.PostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.EntityNotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

	@Autowired
	private PostRepository postRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	JwtTokenProvider jwtTokenProvider;
	@Autowired
	NotificationService notificationService;

	@Autowired
	private SaveRepository saveRepository;  // Fix: Inject SaveRepository

	// Save profile photo for the user based on email
	@Override
	public String saveProfilePhotoByEmail(String email, MultipartFile file) throws IOException {
		if (file.isEmpty()) {
			throw new RuntimeException("No file uploaded");
		}

		// Find the post using the provided email (assuming the email is in the 'postedBY' field)
		Optional<Post> postOpt = postRepository.findByPostedBY(email);

		if (!postOpt.isPresent()) {
			throw new RuntimeException("Post not found for the given email: " + email);
		}

		// Save the profile picture (set the byte[] for the profile photo)
		Post post = postOpt.get();
		post.setProfilePicture(file.getBytes());
		postRepository.save(post);

		return "Profile photo uploaded successfully!";
	}

	// Update the profile picture for the post using the post ID
	@Override
	public void updateProfilePicture(long id, byte[] profilePicture) throws IOException {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Post not found"));

		post.setProfilePicture(profilePicture);  // Update the profile picture
		postRepository.save(post);
	}

	// Get the profile picture of the post using the post ID
	@Override
	public byte[] getProfilePicture(long id) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Post not found"));

		return post.getProfilePicture();  // Return the profile picture as byte[]
	}

	@Override
	public byte[] getImage(Long postId) {
		Post post = postRepository.findById(postId)
				.orElseThrow(() -> new RuntimeException("Post not found"));

		return post.getImg();
	}

	@Override
	public byte[] getVideo(Long postId) {
		Post post = postRepository.findById(postId)
				.orElseThrow(() -> new RuntimeException("Post not found"));

		return post.getVideo();
	}

	@Override
	public List<PostResponse> getUserPost(String jwt) {
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		List<PostResponse> postResponse=new ArrayList<>();
		List<Post> posts=postRepository.findAllByPostedBY(email);
		for(Post post:posts){
			postResponse.add(postTopostResponse(post));
		}
		return postResponse;
	}

	// Save a text-only post
	@Override
	public Post saveTextPost(String jwt,String name, String content, String postedBY, List<String> tags) {
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
		notificationService.createNotification(user.getEmail()," post created  successfully");
		return postRepository.save(post);
	}

	// @Override
	// public Post savePost(String jwt, MultipartFile file, String name, String content, String postedBY, List<String> tags) throws IOException, SQLException {
	// 	return null;
	// }

	// Save a post with media (image or video)
	@Override
	public Post savePost(
			String jwt,
			MultipartFile imageFile,
			MultipartFile videoFile,
			String name,
			String content,
			String postedBY,
			List<String> tags
	) throws IOException {
		Post post = new Post();
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);

		// Handle image
		if (imageFile != null) {
			post.setImg(imageFile.getBytes());
			post.setMediaType(imageFile.getContentType());
			post.setFileName(imageFile.getOriginalFilename());
		}

		// Handle video
		if (videoFile != null) {
			post.setVideo(videoFile.getBytes());
			post.setMediaType(videoFile.getContentType());
			post.setFileName(videoFile.getOriginalFilename());
		}

		post.setName(name);
		post.setContent(content);
		post.setPostedBY(user.getEmail());
		post.setTags(tags);
		post.setLikeCount(0);
		post.setViewCount(0);
		post.setDateTime(LocalDateTime.now());
		post.setProfilePicture(user.getProfilePhoto());
		notificationService.createNotification(user.getEmail()," post created  successfully");
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
	public Post updatePostWithMedia(String jwt, Long postId, MultipartFile file) throws IOException {
		Post existingPost = postRepository.findById(postId)
				.orElseThrow(() -> new IllegalArgumentException("Post not found with ID: " + postId));

		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		String contentType = file.getContentType();

		if (contentType.startsWith("image/")) {
			existingPost.setImg(file.getBytes());
			existingPost.setMediaType(contentType);
			existingPost.setFileName(file.getOriginalFilename());
		} else if (contentType.startsWith("video/")) {
			existingPost.setVideo(file.getBytes());
			existingPost.setMediaType(contentType);
			existingPost.setFileName(file.getOriginalFilename());
		} else {
			throw new IllegalArgumentException("Unsupported media type: " + contentType);
		}

		existingPost.setPostedBY(user.getEmail());

		existingPost.setProfilePicture(user.getProfilePhoto());
		existingPost.setDateTime(LocalDateTime.now());
		return postRepository.save(existingPost);
	}


	// Get all posts
	public List<PostResponse> getAllPost() {
		List<PostResponse> postResponses=new ArrayList<>();
		List<Post> posts=postRepository.findAll();
		for(Post post:posts){
			postResponses.add(postTopostResponse(post));
		}
		return postResponses;
	}

	// Get a post by ID and increase its view count
	public Post getPostById(Long postId) {
		Optional<Post> optional = postRepository.findById(postId);
		if (optional.isPresent()) {
			Post post = optional.get();
			post.setViewCount(post.getViewCount() + 1);
			return postRepository.save(post);
		} else {
			throw new EntityNotFoundException("Post not found");
		}
	}

	// Like a post by incrementing the like count
	public void likePost(String jwt,Long postId) {
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		System.out.println(postId);
		Optional<Post> optional = postRepository.findById(postId);
		if (optional.isPresent()) {
			System.out.println(optional.get().getPostedBY());
			Post post = optional.get();
			if(post.getLikeCount()<1) {
				post.setLikeCount(post.getLikeCount() + 1);
			}
			postRepository.save(post);
			notificationService.createNotification(user.getEmail(),"like the post successfully");
		} else {
			throw new EntityNotFoundException("Post not found with id: " + postId);
		}
	}

	public List<Post> searchByName(String name) {
		return postRepository.findByNameContainingIgnoreCase(name);
	}

	private PostResponse postTopostResponse(Post post){
		PostResponse postResponse=new PostResponse();
		postResponse.setId(post.getId());
		postResponse.setName(post.getName());
		postResponse.setContent(post.getContent());
		postResponse.setPostedBY(post.getPostedBY());
		if(post.getVideo()!=null) {
			postResponse.setVideo(post.getVideo());
		}
		if(post.getImg()!=null) {
			postResponse.setImg(post.getImg());
		}
		postResponse.setMediaType(post.getMediaType());
		postResponse.setDateTime(post.getDateTime());
		postResponse.setLikeCount(post.getLikeCount());
		postResponse.setViewCount(post.getViewCount());
		postResponse.setTags(post.getTags());
		if(post.getProfilePicture()!=null) {
			postResponse.setProfilePicture(post.getProfilePicture());
		}
		return postResponse;
	}

	// Delete a post by ID
	@Override
	public ResponseEntity<?> deletePostById(long id) {
		try {
			if (postRepository.existsById(id)) {
				saveRepository.deleteByPostId(id);  // Fix: Ensure saveRepository is properly injected
				postRepository.deleteById(id);
				return ResponseEntity.ok().build();
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
		}
	}
}
