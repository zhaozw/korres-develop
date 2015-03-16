package com.korres.member.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.korres.constant.Constants;
import com.korres.util.Logger;
/**
 * 
* 类名称：LoginHandlerInterceptor.java
* 类描述： 
* @author FH
* 作者单位： 
* 联系方式：
* 创建时间：2015年1月1日
* @version 1.6
 */
public class MemberLoginHandlerInterceptor extends HandlerInterceptorAdapter{
	
	private Logger logger = Logger.getLogger(this.getClass());

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		String path = request.getServletPath();
		logger.info("MemberLoginHandlerInterceptor url:" + path);
		if(path.matches(Constants.MEMBER_INTERCEPTOR_PATH)){
			HttpSession session = request.getSession();
//			if(user!=null){
//				
//				return true;
//			}else{
//				//登陆过滤
//				response.sendRedirect(request.getContextPath() + Constants.LOGIN);
//				return false;		
//				
//			}
			
			logger.info("MemberLoginHandlerInterceptor need to login");
		}
		
		return true;
	}
}
