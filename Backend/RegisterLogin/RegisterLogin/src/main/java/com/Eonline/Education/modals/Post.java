package com.Eonline.Education.modals;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Data
@Table(name = "post")
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String name;

	@Column(length = 5000)
	private String content;

	private String postedBY;

	@ElementCollection(fetch = FetchType.LAZY)
	@CollectionTable(name = "post_images", joinColumns = @JoinColumn(name = "post_id"))
	@Column(name = "image")
	@Lob
	private List<byte[]> img;

	@ElementCollection(fetch = FetchType.LAZY)
	@CollectionTable(name = "post_videos", joinColumns = @JoinColumn(name = "post_id"))
	@Column(name = "video")
	@Lob
	private List<byte[]> video;

	private String mediaType;

	@CreationTimestamp
	private LocalDateTime dateTime;

	private int likeCount;

	private int viewCount;

	@ElementCollection(fetch = FetchType.LAZY)
	@CollectionTable(name = "post_tags", joinColumns = @JoinColumn(name = "post_id"))
	@Column(name = "tag")
	private List<String> tags;

	@Lob
	private byte[] profilePicture;

	private String fileName;
}