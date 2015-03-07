package com.korres.system.user.interceptor;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.ModelAndViewDefiningException;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.korres.system.user.entity.system.Menu;
import com.korres.system.user.entity.system.User;
import com.korres.system.user.util.Const;
import com.korres.system.user.util.RightsHelper;
import com.korres.system.user.util.ServiceHelper;
import com.korres.system.user.util.Tools;
/**
 * 
* 类名称：RightsHandlerInterceptor.java
* 类描述： 
* @author FH
* 作者单位： 
* 联系方式：
* 创建时间：2014年11月7日
* @version 1.0
 */
public class RightsHandlerInterceptor extends HandlerInterceptorAdapter{

	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		// TODO Auto-generated method stub
		String path = request.getServletPath();
		if(path.matches(Const.NO_INTERCEPTOR_PATH))
			return true;
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute(Const.SESSION_USER);
		String menuId = null;
		List<Menu> subList = ServiceHelper.getMenuService().listAllSubMenu();
		for(Menu m : subList){
			String menuUrl = m.getMENU_URL();
			if(Tools.notEmpty(menuUrl)){
				if(path.contains(menuUrl)){
					menuId = m.getMENU_ID();
					break;
				}else{
					String[] arr = menuUrl.split("\\.");
					String regex = "";
					if(arr.length==2){
						regex = "/?"+arr[0]+"(/.*)?."+arr[1];
						
					}else{
						regex = "/?"+menuUrl+"(/.*)?.htm";
					}
					if(path.matches(regex)){
						menuId = m.getMENU_ID();
						break;
					}
				}
			}
		}
		//System.out.println(path+"===="+menuId);
		if(menuId!=null){
			//user = ServiceHelper.getUserService().getUserAndRoleById(user.getUserId());
			String roleRights = (String) session.getAttribute(Const.SESSION_ROLE_RIGHTS);
			if(RightsHelper.testRights(roleRights, menuId)){
				return true;
			}else{
				System.out.println("用户："+user.getUSERNAME()+"试图访问"+path+"被阻止！");
				ModelAndView mv = new ModelAndView();
				mv.setViewName("no_rights");
				throw new  ModelAndViewDefiningException(mv);
			}
		}
		return super.preHandle(request, response, handler);
	}
	
}
