package com.korres.member.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.korres.util.AppUtil;
import com.korres.util.WebUtil;
//import com.korres.common.util.WebUtil;
/*
 * 总入口
 */
@Controller
@RequestMapping(value="/member")
public class MemberLoginController extends BaseController {

//	@Resource(name="userService")
//	private UserService userService;
//	@Resource(name="menuService")
//	private MenuService menuService;
//	@Resource(name="roleService")
//	private RoleService roleService;
	
	/**
	 * 获取用户权限
	 */
//	public Map<String, String> getUQX(HttpSession session){
//		Map<String, String> map = new HashMap<String, String>();
//		try {
//			String USERNAME = session.getAttribute("USERNAME").toString();
//			pd.put("USERNAME", USERNAME);
//			String ROLE_ID = userService.findByUId(pd).get("ROLE_ID").toString();
//			
//			pd.put("ROLE_ID", ROLE_ID);
//			
//			PageData pd2 = new PageData();
//			pd2.put("USERNAME", USERNAME);
//			pd2.put("ROLE_ID", ROLE_ID);
//			
//			pd = roleService.findObjectById(pd);																
//				
//			pd2 = roleService.findGLbyrid(pd2);
//			if(null != pd2){
//				map.put("FX_QX", pd2.get("FX_QX").toString());
//				map.put("FW_QX", pd2.get("FW_QX").toString());
//				map.put("QX1", pd2.get("QX1").toString());
//				map.put("QX2", pd2.get("QX2").toString());
//				map.put("QX3", pd2.get("QX3").toString());
//				map.put("QX4", pd2.get("QX4").toString());
//			
//				pd2.put("ROLE_ID", ROLE_ID);
//				pd2 = roleService.findYHbyrid(pd2);
//				map.put("C1", pd2.get("C1").toString());
//				map.put("C2", pd2.get("C2").toString());
//				map.put("C3", pd2.get("C3").toString());
//				map.put("C4", pd2.get("C4").toString());
//				map.put("Q1", pd2.get("Q1").toString());
//				map.put("Q2", pd2.get("Q2").toString());
//				map.put("Q3", pd2.get("Q3").toString());
//				map.put("Q4", pd2.get("Q4").toString());
//			}
//			
//			map.put("adds", pd.getString("ADD_QX"));
//			map.put("dels", pd.getString("DEL_QX"));
//			map.put("edits", pd.getString("EDIT_QX"));
//			map.put("chas", pd.getString("CHA_QX"));
//			
//			//System.out.println(map);
//			
//			this.getRemortIP(USERNAME);
//		} catch (Exception e) {
//			logger.error(e.toString(), e);
//		}	
//		return map;
//	}
	
	/**
	 * 获取登录用户的IP
	 * @throws Exception 
	 */
	public void getRemortIP(String USERNAME) throws Exception {  
		HttpServletRequest request = this.getRequest();
		String ip = "";
		if (request.getHeader("x-forwarded-for") == null) {  
			ip = request.getRemoteAddr();  
	    }else{
	    	ip = request.getHeader("x-forwarded-for");  
	    }
		pd.put("USERNAME", USERNAME);
		pd.put("IP", ip);
		//userService.saveIP(pd);
	}  
	
	/**
	 * 会员访问登录页
	 * @return
	 */
	@RequestMapping(value="/signup")
	public ModelAndView signup()throws Exception{
		mv.clear();
		//pd = this.getPageData();
		
		//pd.put("SYSNAME", Tools.readTxtFile(Const.SYSNAME)); //读取系统名称
		
		mv.setViewName("member/signup");
		//mv.addObject("pd",pd);
		
		return mv;
	}
	
	
	/**
	 * 会员访问登录页
	 * @return
	 */
	@RequestMapping(value="/login")
	public ModelAndView login()throws Exception{
		logger.info("-------1------- login start!");
		mv.clear();
		//pd = this.getPageData();
		
		//pd.put("SYSNAME", Tools.readTxtFile(Const.SYSNAME)); //读取系统名称
		
		mv.setViewName("member/login");
		//mv.addObject("pd",pd);
		logger.info("测试中午乱码");
		
		return mv;
	}
	
	/**
	 * 请求登录，验证用户
	 */
	@RequestMapping(value="/login/submit")
	public void submit(HttpServletRequest request, HttpServletResponse response) throws Exception{ 
		logger.info("-------1------- login start!");
		// 获得会话Session
		HttpSession session = request.getSession();
		String json = "login_status='error';login_error_result={\"key\":\"email_unactived\",\"residue_retry_count\":10,\"locked\":false,\"message\":\"邮箱未激活\",\"secret\":\"38d1c70fba383cef2ac90a4b253c7fac43bfbabd\"};login_need_captcha=false";
		try {
			WebUtil.writeToClient(response, json);
		} catch (IOException e) {
			logger.info("-------2------- login write json error:\n" + e);
		}
		
		logger.info("-------3------- login write to json:" + json);
	}
//	public ModelAndView login(HttpSession session)throws Exception{
//		mv.clear();
//		String sessionCode = (String)session.getAttribute(Constants.SESSION_SECURITY_CODE);
//		String errInfo = "";
//		
//		pd = this.getPageData();
//		PageData pdm = new PageData();
//		pdm = this.getPageData();
//		
//		String code = pd.getString("code");
//		
//		if(null == code || "".equals(code)){
//			mv.setViewName("redirect:/");
//		}else{
//			String USERNAME = pd.get("loginname").toString();
//			String PASSWORD  = pd.get("password").toString();
//			pd.put("USERNAME", USERNAME);
//			if(Tools.notEmpty(sessionCode) && sessionCode.equalsIgnoreCase(code)){
//				String passwd = MD5.md5(PASSWORD);
//				pd.put("PASSWORD", passwd);
//				pd = userService.getUserByNameAndPwd(pd);
//				if(pd != null){
//					pd.put("LAST_LOGIN",new java.text.SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()).toString());
//					userService.updateLastLogin(pd);
//					
//					User user = new User();
//					
//					user.setUSER_ID(pd.getString("USER_ID"));
//					user.setUSERNAME(pd.getString("USERNAME"));
//					user.setPASSWORD(pd.getString("PASSWORD"));
//					user.setNAME(pd.getString("NAME"));
//					user.setRIGHTS(pd.getString("RIGHTS"));
//					user.setROLE_ID(pd.getString("ROLE_ID"));
//					user.setLAST_LOGIN(pd.getString("LAST_LOGIN"));
//					user.setIP(pd.getString("IP"));
//					user.setSTATUS(pd.getString("STATUS"));
//					
//					session.setAttribute(Const.SESSION_USER, user);
//					session.removeAttribute(Const.SESSION_SECURITY_CODE);
//				}else{
//					errInfo = "用户名或密码有误！";
//				}
//			}else{
//				errInfo = "验证码输入有误！";
//			}
//			if(Tools.isEmpty(errInfo)){
//				mv.setViewName("redirect:login_index.htm");
//			}else{
//				mv.addObject("errInfo", errInfo);
//				mv.addObject("loginname",USERNAME);
//				mv.addObject("password",PASSWORD);
//				mv.setViewName("system/admin/login");
//			}
//		mv.addObject("pd",pdm);
//		}
//		
//		return mv;
//	}
	
	@RequestMapping(value="/users/check_username", method = RequestMethod.GET)
	@ResponseBody
	public Object checkUsername(){
		Integer status = 200;
		Map map = new HashMap();
		
//		if() {
//			status = 400;
//			String msg = "用户名已经存在";
//			map.put("msg", msg);
//		}
		
		status = 401;
		
		map.put("status", status);
		String secret = "557d97e644025936ad1d8d55e97e3853888276a8";
		map.put("secret", secret);
		
			
		return AppUtil.returnObject(pd, map);
	}
	
	@RequestMapping(value="/api/ued/register_banners", method = RequestMethod.GET)
	@ResponseBody
	public Object registerBanners(){
		String ret = "[{\"banner_type\":\"zhe_register\",\"end_time\":\"2015-11-27T17:38:00+08:00\",\"id\":373,\"image\":{\"url\":\"http://z3.tuanimg.com/upload/dynamic_banner/image/373/87c7b842586996318d3fbeb2445ef4f1.jpg\",\"brand\":{\"url\":\"http://z3.tuanimg.com/upload/dynamic_banner/image/373/brand/87c7b842586996318d3fbeb2445ef4f1.jpg\"}},\"img_alt\":\"\",\"img_src\":\"\",\"link_href\":\"http://www.zhe800.com/help/cs_support\",\"link_target\":\"\",\"link_title\":\"\",\"position\":2,\"show_position\":0,\"start_time\":\"2014-11-27T17:38:00+08:00\"}]";
		
		return ret;
	}
	
	@RequestMapping(value="/api/ued/retries/send_active_email_confirmation", method = RequestMethod.GET)
	@ResponseBody
	public Object sendActiveEmailConfirmation() throws Exception{
		Integer status = 200;
		Map map = new HashMap();
		if(status == 200) {
			String return_to = "http://localhost:8888/agriculture-webapp/users/email_signed.htm?email=394854638@qq.com";
			map.put("return_to", return_to);
		}
		else {
			String msg = "发送过于频繁，请稍后再试！";
			map.put("msg", msg);
		}
		
		map.put("status", status);
		
		return AppUtil.returnObject(pd, map);
	}
	
	//https://passport.zhe800.com/users/email_signed?email=394854638%40qq.com
	@RequestMapping(value="/users/email_signed")
	public ModelAndView emailSigned() throws Exception {
		mv.clear();
		mv.addObject("email", "394854638@qq.com");
		mv.addObject("emailUrl","http://mail.qq.com");
		mv.setViewName("users/email_signed");
		
		return mv;
	}
	
	
	/**
	 * 请求登录，验证用户
	 */
//	@RequestMapping(value="/member/doLogin")
//	public ModelAndView doLogin(HttpSession session)throws Exception{
//		mv.clear();
//		String sessionCode = (String)session.getAttribute(Const.SESSION_SECURITY_CODE);
//		String errInfo = "";
//		
//		pd = this.getPageData();
//		PageData pdm = new PageData();
//		pdm = this.getPageData();
//		
//		String code = pd.getString("code");
//		
//		if(null == code || "".equals(code)){
//			mv.setViewName("redirect:/");
//		}else{
//		
//			String USERNAME = pd.get("loginname").toString();
//			String PASSWORD  = pd.get("password").toString();
//			pd.put("USERNAME", USERNAME);
//			if(Tools.notEmpty(sessionCode) && sessionCode.equalsIgnoreCase(code)){
//				String passwd = MD5.md5(PASSWORD);
//				pd.put("PASSWORD", passwd);
//				pd = userService.getUserByNameAndPwd(pd);
//				if(pd != null){
//					pd.put("LAST_LOGIN",new java.text.SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()).toString());
//					userService.updateLastLogin(pd);
//					
//					User user = new User();
//					
//					user.setUSER_ID(pd.getString("USER_ID"));
//					user.setUSERNAME(pd.getString("USERNAME"));
//					user.setPASSWORD(pd.getString("PASSWORD"));
//					user.setNAME(pd.getString("NAME"));
//					user.setRIGHTS(pd.getString("RIGHTS"));
//					user.setROLE_ID(pd.getString("ROLE_ID"));
//					user.setLAST_LOGIN(pd.getString("LAST_LOGIN"));
//					user.setIP(pd.getString("IP"));
//					user.setSTATUS(pd.getString("STATUS"));
//					
//					session.setAttribute(Const.SESSION_USER, user);
//					session.removeAttribute(Const.SESSION_SECURITY_CODE);
//				}else{
//					errInfo = "用户名或密码有误！";
//				}
//			}else{
//				errInfo = "验证码输入有误！";
//			}
//			if(Tools.isEmpty(errInfo)){
//				mv.setViewName("redirect:login_index.htm");
//			}else{
//				mv.addObject("errInfo", errInfo);
//				mv.addObject("loginname",USERNAME);
//				mv.addObject("password",PASSWORD);
//				mv.setViewName("system/admin/login");
//			}
//		mv.addObject("pd",pdm);
//		}
//		return mv;
//	}
	
	/**
	 * 用户注销
	 * @param session
	 * @return
	 */
//	@RequestMapping(value="/member/logout")
//	public ModelAndView logout(HttpSession session){
//		session.removeAttribute(Const.SESSION_USER);
//		session.removeAttribute(Const.SESSION_ROLE_RIGHTS);
//		
//		session.removeAttribute(Const.SESSION_allmenuList);
//		session.removeAttribute(Const.SESSION_menuList);
//		session.removeAttribute(Const.SESSION_QX);
//		session.removeAttribute(Const.SESSION_userpds);
//		session.removeAttribute(Const.SESSION_USERNAME);
//		session.removeAttribute(Const.SESSION_USERROL);
//		session.removeAttribute("changeMenu");
//		
//		pd = this.getPageData();
//		String  msg = pd.getString("msg");
//		pd.put("msg", msg);
//		
//		pd.put("SYSNAME", Tools.readTxtFile(Const.SYSNAME)); //读取系统名称
//		mv.setViewName("index");
//		mv.addObject("pd",pd);
//		return mv;
//	}
	
}
