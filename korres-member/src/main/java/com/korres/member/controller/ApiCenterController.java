package com.korres.member.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.korres.util.WebUtil;

@Controller
@RequestMapping(value="/apicenter")
public class ApiCenterController extends BaseController {

	@RequestMapping(value="/ajax_api_cached/checkin_activity")
	public void checkinActivity(HttpServletRequest request, HttpServletResponse response) throws Exception{ 
		logger.info("-------1------- login start!");
		String json = "{\"not_checkin_ad\":{\"image1\":{\"image_url\":\"http://z2.tuanimg.com/imagev2/site/500x300.a82a24fff850713980846c21bf7f1fe8.500x300.png\",\"link_type\":\"_blank\",\"link_url\":\"www.zhe800.com/cn/dajiehongbaojun\"},\"image2\":{\"image_url\":\"http://z2.tuanimg.com/upload/not_checkin_ad/small_one_image/2/normal_024cd9c8b7916ddc2e7d2dea0adb7fbe.jpg\",\"link_type\":\"_blank\",\"link_url\":\"www.zhe800.com/jifen/welfare?utm_content=qiandao\"},\"image3\":{\"image_url\":\"http://z2.tuanimg.com/upload/not_checkin_ad/small_two_image/2/normal_2d50927a32cf82946e97ef782d692f69.jpg\",\"link_type\":\"_blank\",\"link_url\":\"www.zhe800.com/jifen/raffle?utm_content=qiandao\"},\"image4\":{\"image_url\":\"http://z2.tuanimg.com/upload/not_checkin_ad/small_three_image/2/normal_213c018fe41d1fc63106f4527f1a71a1.jpg\",\"link_type\":\"_blank\",\"link_url\":\"www.zhe800.com/jifen/auction?utm_content=qiandao\"},\"up_words\":\"精品特卖，每日9点准时更新！\",\"up_words_link\":\"\",\"up_words_out_way\":\"_blank\",\"down_words\":\"天天低价，全场包邮，优惠抢不停！每天9点千款商品准时更新！\",\"down_words_link\":\"\",\"down_words_out_way\":\"_blank\"}}";
		try {
			WebUtil.writeToClient(response, json);
		} catch (IOException e) {
			logger.info("-------2------- login write json error:\n" + e);
		}
		
		logger.info("-------3------- login write to json:" + json);
	}
}
