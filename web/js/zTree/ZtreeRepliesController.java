package com.wc.tribune.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wc.tribune.entity.ForumTReplies;
import com.wc.tribune.service.RepliesService;




@Controller
@RequestMapping("/ztree")
public class ZtreeRepliesController {
	
	@Autowired
	private RepliesService repliesService;
	
	@RequestMapping("/all")
	public String all(){
		
		return "forum/ztreereplies";
	}
	
	@RequestMapping("/getReplies")
	@ResponseBody
	public List<Map<String, String>> getReplies(@RequestParam(value = "id", required = false) String repliesUpId){
		List<ForumTReplies> replies = repliesService.getChileReplies(repliesUpId);
		List<Map<String, String>> newReplies = new ArrayList<Map<String,String>>();
		for (ForumTReplies r : replies) {
			Map<String, String> reps = new HashMap<String, String>();
			reps.put("id", r.getRepliesId());
			reps.put("name", r.getRepliesContent());
			
			if (repliesService.haveChiledNode(r.getRepliesId())) {
				reps.put("isParent", "true");
			}
			newReplies.add(reps);
		}
		return newReplies;
	}
}
