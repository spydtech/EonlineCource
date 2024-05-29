package com.Eonline.Education.Service;

import com.Eonline.Education.modals.SaveEntity;

import java.util.List;


public interface SaveService {
	String savePostById(long id);
	public List<SaveEntity> getAllSavedPosts();
	String deleteSavedPost(int id);
}
