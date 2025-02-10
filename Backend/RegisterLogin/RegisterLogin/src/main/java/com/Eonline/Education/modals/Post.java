package com.Eonline.Education.modals;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Entity
@Data
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String name;

	@Column(length = 5000)
	private String content;

	private String postedBY;

	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] video;

	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] img;

	private String mediaType;

	private LocalDateTime dateTime;

	private int likeCount;

	private int viewCount;

	@ElementCollection
	private List<String> tags;

	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] profilePicture;
	private String fileName;

}