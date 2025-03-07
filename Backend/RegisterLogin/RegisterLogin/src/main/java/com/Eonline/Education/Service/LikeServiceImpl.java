package com.Eonline.Education.Service;

import com.Eonline.Education.Configuration.JwtTokenProvider;
import com.Eonline.Education.modals.Like;
import com.Eonline.Education.modals.Post;
import com.Eonline.Education.modals.User;
import com.Eonline.Education.repository.LikeRepository;
import com.Eonline.Education.repository.PostRepository;
import com.Eonline.Education.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class LikeServiceImpl implements LikeService {

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    NotificationService notificationService;

    @Transactional
    @Override
    public int toggleLike(String jwt, Long postId) {
        String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new EntityNotFoundException("User not found");
        }

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("Post not found"));

        Optional<Like> existingLike = likeRepository.findByUserAndPost(user, post);

        if (existingLike.isPresent()) {
            likeRepository.delete(existingLike.get()); //  Remove like if exists
        } else {
            Like newLike = new Like();
            newLike.setUser(user);
            newLike.setPost(post);
            likeRepository.save(newLike); //  Add new like
        }

        // Update and return the correct like count
        int likeCount = likeRepository.countLikesByPostId(postId);
        post.setLikeCount(likeCount);
        postRepository.save(post);
        notificationService.createNotification(email,"post liked successfully");
        return likeCount; //  Return updated like count
    }

    @Override
    public Map<String, Object> getLikeDetails(String jwt, Long postId) {
        String email = jwtTokenProvider.getEmailFromJwtToken(jwt); //  Extract user email

        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new EntityNotFoundException("User not found for email: " + email);
        }

        String userId = user.getId().toString(); //  Get user ID as String

        boolean isLiked = likeRepository.existsByUserIdAndPostId(userId, postId); //  Check if user liked post
        int likeCount = likeRepository.countLikesByPostId(postId); //  Get total like count

        Map<String, Object> response = new HashMap<>();
        response.put("isLiked", isLiked);
        response.put("likeCount", likeCount);

        return response;
    }


    @Override
    public int getLikeCount(Long postId) {
        return likeRepository.countLikesByPostId(postId);
    }
}
