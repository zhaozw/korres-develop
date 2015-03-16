package com.korres.member.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

public class IndexController extends BaseController {
	@RequestMapping(value="/index")
	public ModelAndView index()throws Exception{
		logger.info("-------1------- index start!");
		mv.clear();
		mv.setViewName("index");
		String deals = "{\"deals\":[{\"div_class\":\"deal dealstyle1\",\"con_class\":\"con\",\"div_uri\":\"mangguobei_784771\",\"zid\":\"ze141226010539000001\",\"div_id\":\"deal784771\",\"div_info\":\"d,784771\",\"div_data_qrcode\":\"http://z2.tuanimg.com/imagev2/site/300x300.bf33894b55d84abb3d16de4bd56c365a.100x100.png\",\"div_data_id\":784771,\"deal_url\":\"http://out.zhe800.com/ju/deal/mangguobei_784771\",\"onclick\":\"add_page_stats_to_params(this,784771,'')\",\"img_url\":\"http://z2.tuanimg.com/upload/deal/image/784771/bigger_webp_e9faf5b229a1df0921f8eb8be6436cd4.jpg\",\"deal_title\":\"芒果杯礼服婚纱游泳乳贴823\",\"price\":\"24.<i>9</i>\",\"list_price\":\"129\",\"discount\":\"1.9\",\"is_cps\":0,\"is_fanjifen_icon\":1,\"is_baoyou\":1,\"is_promotion\":0,\"cur_d_status\":0,\"button_time\":\"09:00开始\",\"begin_time\":\"2014-12-28 09:00\",\"end_time\":1427817540,\"remainder_time\":\"20天5时52分\",\"recommend_reason\":\"旅行装芒果硅胶隐形文胸...\",\"is_mark\":0,\"is_new\":0,\"quality_inspector\":\"质检员26：\",\"url_name\":\"mangguobei_784771\",\"is_tips\":\"0\",\"type\":1,\"pinpai\":\"\",\"pinpai_link\":\"\",\"sold\":3894,\"pinpaiBtn\":0,\"type_code\":1,\"recommend_reason_full\":\"旅行装芒果硅胶隐形文胸\",\"icon_type\":0}}";
        mv.addObject("deals", deals);
		
		return mv;
	}
}
