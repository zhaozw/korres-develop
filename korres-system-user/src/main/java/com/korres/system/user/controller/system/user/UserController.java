package com.korres.system.user.controller.system.user;

import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.korres.system.user.controller.base.BaseController;
import com.korres.system.user.entity.Page;
import com.korres.system.user.entity.system.Menu;
import com.korres.system.user.entity.system.Role;
import com.korres.system.user.service.system.menu.MenuService;
import com.korres.system.user.service.system.role.RoleService;
import com.korres.system.user.service.system.user.UserService;
import com.korres.system.user.util.AppUtil;
import com.korres.system.user.util.Const;
import com.korres.system.user.util.FileDownload;
import com.korres.system.user.util.FileUpload;
import com.korres.system.user.util.MD5;
import com.korres.system.user.util.ObjectExcelRead;
import com.korres.system.user.util.ObjectExcelView;
import com.korres.system.user.util.PageData;
import com.korres.system.user.util.PathUtil;
import com.korres.system.user.util.Tools;

/** 
 * 类名称：UserController
 * 创建人：FH 
 * 创建时间：2014年6月28日
 * @version
 */
@Controller
@RequestMapping(value="/system/user")
public class UserController extends BaseController {
	
	@Resource(name="userService")
	private UserService userService;
	@Resource(name="roleService")
	private RoleService roleService;
	@Resource(name="menuService")
	private MenuService menuService;
	
	/**
	 * 保存用户
	 */
	@RequestMapping(value="/saveU")
	public ModelAndView saveU(PrintWriter out) throws Exception{
		mv.clear();
		pd = this.getPageData();
		
		pd.put("USER_ID", this.get32UUID());	//ID
		pd.put("RIGHTS", "");					//权限
		pd.put("LAST_LOGIN", "");				//最后登录时间
		pd.put("IP", "");						//IP
		pd.put("STATUS", "0");					//状态
		pd.put("SKIN", "default");				//默认皮肤
		
		pd.put("PASSWORD", MD5.md5(pd.getString("PASSWORD")));
		
		if(userService.findByUId(pd) != null){
			mv.addObject("msg","此用户名已存在!");
		}else{
			userService.saveU(pd);
			mv.addObject("msg","success");
		}
		mv.setViewName("save_result");
		return mv;
	}
	
	/**
	 * 判断用户名是否存在
	 */
	@RequestMapping(value="/hasU")
	public void hasU(PrintWriter out){
		mv.clear();
		try{
			pd = this.getPageData();
			if(userService.findByUId(pd) != null){
				out.write("error");
			}else{
				out.write("success");
			}
			out.close();
		} catch(Exception e){
			logger.error(e.toString(), e);
		}
		
	}
	
	/**
	 * 判断邮箱是否存在
	 */
	@RequestMapping(value="/hasE")
	public void hasE(PrintWriter out){
		mv.clear();
		try{
			pd = this.getPageData();
			
			if(userService.findByUE(pd) != null){
				out.write("error");
			}else{
				out.write("success");
			}
			out.close();
		} catch(Exception e){
			logger.error(e.toString(), e);
		}
		
	}
	
	/**
	 * 判断编码是否存在
	 */
	@RequestMapping(value="/hasN")
	public void hasN(PrintWriter out){
		mv.clear();
		try{
			pd = this.getPageData();
			
			if(userService.findByUN(pd) != null){
				out.write("error");
			}else{
				out.write("success");
			}
			out.close();
		} catch(Exception e){
			logger.error(e.toString(), e);
		}
		
	}
	
	/**
	 * 修改用户
	 */
	@RequestMapping(value="/editU")
	public ModelAndView editU(PrintWriter out) throws Exception{
		mv.clear();
		pd = this.getPageData();
		
		if(pd.getString("PASSWORD") != null && !"".equals(pd.getString("PASSWORD"))){
			pd.put("PASSWORD", MD5.md5(pd.getString("PASSWORD")));
		}
		
		userService.editU(pd);
		mv.addObject("msg","success");
		mv.setViewName("save_result");
		return mv;
	}
	/**
	 * 去修改用户页面
	 */
	@RequestMapping(value="/goEditU")
	public ModelAndView goEditU() throws Exception{
		mv.clear();
		pd = this.getPageData();
		
		//顶部修改个人资料
		String fx = pd.getString("fx");
		
		//System.out.println(fx);
		
		if("head".equals(fx)){
			mv.addObject("fx", "head");
		}else{
			mv.addObject("fx", "user");
		}
		
		List<Role> roleList = roleService.listAllERRoles();			//列出所有二级角色
		pd = userService.findByUiId(pd);							//根据ID读取
		mv.setViewName("system/user/user_edit");
		mv.addObject("msg", "editU");
		mv.addObject("pd", pd);
		mv.addObject("roleList", roleList);
		
		return mv;
	}
	
	/**
	 * 去新增用户页面
	 */
	@RequestMapping(value="/goAddU")
	public ModelAndView goAddU()throws Exception{
		mv.clear();
		pd = this.getPageData();
		List<Role> roleList;
		
		roleList = roleService.listAllERRoles();			//列出所有二级角色
		
		mv.setViewName("system/user/user_edit");
		mv.addObject("msg", "saveU");
		mv.addObject("pd", pd);
		mv.addObject("roleList", roleList);

		return mv;
	}
	
	/**
	 * 显示用户列表(用户组)
	 */
	@RequestMapping(value="/listUsers")
	public ModelAndView listUsers(HttpSession session, Page page)throws Exception{
		mv.clear();
		pd = this.getPageData();
		
		String USERNAME = pd.getString("USERNAME");
		
		if(null != USERNAME && !"".equals(USERNAME)){
			USERNAME = USERNAME.trim();
			pd.put("USERNAME", USERNAME);
		}
		
		String lastLoginStart = pd.getString("lastLoginStart");
		String lastLoginEnd = pd.getString("lastLoginEnd");
		
		if(lastLoginStart != null && !"".equals(lastLoginStart)){
			lastLoginStart = lastLoginStart+" 00:00:00";
			pd.put("lastLoginStart", lastLoginStart);
		}
		if(lastLoginEnd != null && !"".equals(lastLoginEnd)){
			lastLoginEnd = lastLoginEnd+" 00:00:00";
			pd.put("lastLoginEnd", lastLoginEnd);
		} 
		
		page.setPd(pd);
		List<PageData>	userList = userService.listPdPageUser(page);			//列出用户列表
		List<Role> roleList = roleService.listAllERRoles();						//列出所有二级角色
		
		/*调用权限*/
		this.getHC(); //================================================================================
		/*调用权限*/
		
		mv.setViewName("system/user/user_list");
		mv.addObject("userList", userList);
		mv.addObject("roleList", roleList);
		mv.addObject("pd", pd);
		
		return mv;
	}

	
	/**
	 * 显示用户列表(tab方式)
	 */
	@RequestMapping(value="/listtabUsers")
	public ModelAndView listtabUsers(HttpSession session, Page page)throws Exception{
		mv.clear();
		pd = this.getPageData();
		
		List<PageData>	userList = userService.listAllUser(pd);			//列出用户列表
		
		/*调用权限*/
		this.getHC(); //================================================================================
		/*调用权限*/
		
		mv.setViewName("system/user/user_tb_list");
		mv.addObject("userList", userList);
		mv.addObject("pd", pd);
		
		return mv;
	}
	
	/**
	 * 删除用户
	 */
	@RequestMapping(value="/deleteU")
	public void deleteU(PrintWriter out){
		mv.clear();
		try{
			pd = this.getPageData();
			userService.deleteU(pd);
			out.write("success");
			out.close();
		} catch(Exception e){
			logger.error(e.toString(), e);
		}
		
	}
	
	/**
	 * 批量删除
	 */
	@RequestMapping(value="/deleteAllU")
	@ResponseBody
	public Object deleteAllU() {
		
		Map map = new HashMap();
		try {
			pd = this.getPageData();
			List<PageData> pdList = new ArrayList<PageData>();
			String USER_IDS = pd.getString("USER_IDS");
			
			if(null != USER_IDS && !"".equals(USER_IDS)){
				String ArrayUSER_IDS[] = USER_IDS.split(",");
				userService.deleteAllU(ArrayUSER_IDS);
				pd.put("msg", "ok");
			}else{
				pd.put("msg", "no");
			}
			
			pdList.add(pd);
			map.put("list", pdList);
		} catch (Exception e) {
			logger.error(e.toString(), e);
		} finally {
			logAfter(logger);
		}
		return AppUtil.returnObject(pd, map);
	}
	//===================================================================================================
	
	
	
	/*
	 * 导出用户信息到EXCEL
	 * @return
	 */
	@RequestMapping(value="/excel")
	public ModelAndView exportExcel(){
		ModelAndView mv = new ModelAndView();
		pd = this.getPageData();
		try{
			
			//检索条件===
			String USERNAME = pd.getString("USERNAME");
			if(null != USERNAME && !"".equals(USERNAME)){
				USERNAME = USERNAME.trim();
				pd.put("USERNAME", USERNAME);
			}
			String lastLoginStart = pd.getString("lastLoginStart");
			String lastLoginEnd = pd.getString("lastLoginEnd");
			if(lastLoginStart != null && !"".equals(lastLoginStart)){
				lastLoginStart = lastLoginStart+" 00:00:00";
				pd.put("lastLoginStart", lastLoginStart);
			}
			if(lastLoginEnd != null && !"".equals(lastLoginEnd)){
				lastLoginEnd = lastLoginEnd+" 00:00:00";
				pd.put("lastLoginEnd", lastLoginEnd);
			} 
			//检索条件===
			
			Map<String,Object> dataMap = new HashMap<String,Object>();
			List<String> titles = new ArrayList<String>();
			
			titles.add("用户名"); 		//1
			titles.add("编号");  		//2
			titles.add("姓名");			//3
			titles.add("职位");			//4
			titles.add("手机");			//5
			titles.add("邮箱");			//6
			titles.add("最近登录");		//7
			titles.add("上次登录IP");	//8
			
			dataMap.put("titles", titles);
			
			List<PageData> userList = userService.listAllUser(pd);
			List<PageData> varList = new ArrayList<PageData>();
			for(int i=0;i<userList.size();i++){
				PageData vpd = new PageData();
				vpd.put("var1", userList.get(i).getString("USERNAME"));		//1
				vpd.put("var2", userList.get(i).getString("NUMBER"));		//2
				vpd.put("var3", userList.get(i).getString("NAME"));			//3
				vpd.put("var4", userList.get(i).getString("ROLE_NAME"));	//4
				vpd.put("var5", userList.get(i).getString("PHONE"));		//5
				vpd.put("var6", userList.get(i).getString("EMAIL"));		//6
				vpd.put("var7", userList.get(i).getString("LAST_LOGIN"));	//7
				vpd.put("var8", userList.get(i).getString("IP"));			//8
				varList.add(vpd);
			}
			
			dataMap.put("varList", varList);
			
			ObjectExcelView erv = new ObjectExcelView();					//执行excel操作
			
			mv = new ModelAndView(erv,dataMap);
		} catch(Exception e){
			logger.error(e.toString(), e);
		}
		return mv;
	}
	
	/**
	 * 打开上传EXCEL页面
	 */
	@RequestMapping(value="/goUploadExcel")
	public ModelAndView goUploadExcel()throws Exception{
		mv.clear();
		mv.setViewName("system/user/uploadexcel");
		return mv;
	}
	
	/**
	 * 下载模版
	 */
	@RequestMapping(value="/downExcel")
	public void downExcel(HttpServletResponse response)throws Exception{
		
		FileDownload.fileDownload(response, PathUtil.getClasspath() + Const.FILEPATH + "Users.xls", "Users.xls");
		
	}
	
	/**
	 * 从EXCEL导入到数据库
	 */
	@RequestMapping(value="/readExcel")
	public ModelAndView readExcel(
			@RequestParam(value="excel",required=false) MultipartFile file
			) throws Exception{
		mv.clear();
		
		if (null != file && !file.isEmpty()) {
			String filePath = PathUtil.getClasspath() + Const.FILEPATH;								//文件上传路径
			String fileName =  FileUpload.fileUp(file, filePath, "userexcel");						//执行上传
			
			List<PageData> listPd = (List)ObjectExcelRead.readExcel(filePath, fileName, 2, 0, 0);	//执行读EXCEL操作,读出的数据导入List 2:从第3行开始；0:从第A列开始；0:第0个sheet
			
			/*存入数据库操作======================================*/
			pd.put("RIGHTS", "");					//权限
			pd.put("LAST_LOGIN", "");				//最后登录时间
			pd.put("IP", "");						//IP
			pd.put("STATUS", "0");					//状态
			pd.put("SKIN", "default");				//默认皮肤
			pd.put("PASSWORD", MD5.md5("123"));		//默认密码123
			
			List<Role> roleList = roleService.listAllERRoles();	//列出所有二级角色
			
			pd.put("ROLE_ID", roleList.get(0).getROLE_ID());	//设置角色ID为随便第一个
			/**
			 * var0 :编号
			 * var1 :姓名
			 * var2 :手机
			 * var3 :邮箱
			 * var4 :备注
			 */
			for(int i=0;i<listPd.size();i++){		
				pd.put("USER_ID", this.get32UUID());										//ID
				pd.put("NAME", listPd.get(i).getString("var1"));							//姓名
//				pd.put("USERNAME", GetPinyin2.getPingYin(listPd.get(i).getString("var1")));	//根据姓名汉字生成全拼
//				if(userService.findByUId(pd) != null){										//判断用户名是否重复
//					pd.put("USERNAME", GetPinyin2.getPingYin(listPd.get(i).getString("var1"))+Tools.getRandomNum());
//				}
				pd.put("BZ", listPd.get(i).getString("var4"));								//备注
				if(Tools.checkEmail(listPd.get(i).getString("var3"))){						//邮箱格式不对就跳过
					pd.put("EMAIL", listPd.get(i).getString("var3"));						
					if(userService.findByUE(pd) != null){									//邮箱已存在就跳过
						continue;
					}
				}else{
					continue;
				}
				
				pd.put("NUMBER", listPd.get(i).getString("var0"));							//编号已存在就跳过
				pd.put("PHONE", listPd.get(i).getString("var2"));							//手机号
				if(userService.findByUN(pd) != null){
					continue;
				}
				userService.saveU(pd);
			}
			/*存入数据库操作======================================*/
			
			mv.addObject("msg","success");
		}
		
		mv.setViewName("save_result");
		return mv;
	}
	
	@InitBinder
	public void initBinder(WebDataBinder binder){
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(format,true));
	}
	

	/* ===============================权限================================== */
	public void getHC(){
		HttpSession session = this.getRequest().getSession();
		Map<String, String> map = (Map<String, String>)session.getAttribute(Const.SESSION_QX);
		mv.addObject(Const.SESSION_QX,map);	//按钮权限
		List<Menu> menuList = (List)session.getAttribute(Const.SESSION_menuList);
		mv.addObject(Const.SESSION_menuList, menuList);//菜单权限
	}
	/* ===============================权限================================== */
}
