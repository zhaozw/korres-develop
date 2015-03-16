package com.korres.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.korres.entity.Page;
import com.korres.constant.Constants;
import com.korres.util.Logger;
import com.korres.util.PageData;
import com.korres.util.Tools;
import com.korres.util.UuidUtil;

public class BaseController {
	
	protected Logger logger = Logger.getLogger(this.getClass());

	private static final long serialVersionUID = 6357869213649815390L;
	
	protected ModelAndView mv = this.getModelAndView();
	
	protected PageData pd = new PageData();
	

	
	
	/**
	 * 得到PageData
	 */
	public PageData getPageData(){
		PageData pds = new PageData();
		pds = new PageData(this.getRequest());
		
		pds.put("SYSNAME", Tools.readTxtFile(Constants.SYSNAME)); //读取系统名称
		
		mv.addObject("pdm",pds);
		return pds;
	}
	
	/**
	 * 得到ModelAndView
	 */
	public ModelAndView getModelAndView(){
		
		return new ModelAndView();
	}
	
	/**
	 * 得到request对象
	 */
	public HttpServletRequest getRequest() {
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
		
		return request;
	}

	/**
	 * 得到32位的uuid
	 * @return
	 */
	public String get32UUID(){
		
		return UuidUtil.get32UUID();
	}
	
	/**
	 * 得到分页列表的信息 
	 */
	public Page getPage(){
		
		return new Page();
	}
	
	public static void logBefore(Logger logger, String interfaceName){
		logger.info("");
		logger.info("start");
		logger.info(interfaceName);
	}
	
	public static void logAfter(Logger logger){
		logger.info("end");
		logger.info("");
	}
	
}
