package com.korres.system.user.controller.system.head;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.korres.system.user.controller.base.BaseController;
import com.korres.system.user.entity.system.Role;
import com.korres.system.user.service.system.appuser.AppuserService;
import com.korres.system.user.service.system.user.UserService;
import com.korres.system.user.util.AppUtil;
import com.korres.system.user.util.Const;
import com.korres.system.user.util.MD5;
import com.korres.system.user.util.PageData;
import com.korres.system.user.util.SmsUtil;
import com.korres.system.user.util.Tools;
import com.korres.system.user.util.mail.SimpleMailSender;

/** 
 * 类名称：HeadController
 * 创建人：FH 
 * 创建时间：2014年8月16日
 * @version
 */
@Controller
@RequestMapping(value="/head")
public class HeadController extends BaseController {
	
	@Resource(name="userService")
	private UserService userService;	
	@Resource(name="appuserService")
	private AppuserService appuserService;
	
	/**
	 * 获取头部信息
	 */
	@RequestMapping(value="/getUname")
	@ResponseBody
	public Object getList(HttpSession session) {
		
		Map map = new HashMap();
		try {
			pd = this.getPageData();
			List<PageData> pdList = new ArrayList<PageData>();
			
			PageData pds = new PageData();
			pds = (PageData)session.getAttribute("userpds");
			
			if(null == pds){
				String USERNAME = session.getAttribute(Const.SESSION_USERNAME).toString();	//获取当前登录者loginname
				pd.put("USERNAME", USERNAME);
				pds = userService.findByUId(pd);
				session.setAttribute("userpds", pds);
			}
			
			pdList.add(pds);
			map.put("list", pdList);
		} catch (Exception e) {
			logger.error(e.toString(), e);
		} finally {
			logAfter(logger);
		}
		return AppUtil.returnObject(pd, map);
	}

	/**
	 * 保存皮肤
	 */
	@RequestMapping(value="/setSKIN")
	public void setSKIN(PrintWriter out,HttpSession session){
		mv.clear();
		try{
			pd = this.getPageData();
			
			String USERNAME = session.getAttribute(Const.SESSION_USERNAME).toString();//获取当前登录者loginname
			pd.put("USERNAME", USERNAME);
			userService.setSKIN(pd);
			session.removeAttribute(Const.SESSION_userpds);
			session.removeAttribute(Const.SESSION_USERROL);
			out.write("success");
			out.close();
		} catch(Exception e){
			logger.error(e.toString(), e);
		}
		
	}
	
	/**
	 * 去编辑邮箱页面
	 */
	@RequestMapping(value="/editEmail")
	public ModelAndView editEmail() throws Exception{
		mv.clear();
		pd = this.getPageData();
		mv.setViewName("system/head/edit_email");
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**
	 * 去发送短信页面
	 */
	@RequestMapping(value="/goSendSms")
	public ModelAndView goSendSms() throws Exception{
		mv.clear();
		pd = this.getPageData();
		mv.setViewName("system/head/send_sms");
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**
	 * 发送短信
	 */
	@RequestMapping(value="/sendSms")
	@ResponseBody
	public Object sendSms(){
		mv.clear();
		pd = this.getPageData();
		Map map = new HashMap();
		String msg = "ok";		//发送状态
		int count = 0;			//统计发送成功条数
		int zcount = 0;			//理论条数
		
		
		List<PageData> pdList = new ArrayList<PageData>();
		
		String PHONEs = pd.getString("PHONE");					//对方邮箱
		String CONTENT = pd.getString("CONTENT");				//内容
		String isAll = pd.getString("isAll");					//是否发送给全体成员 yes or no
		String TYPE = pd.getString("TYPE");						//类型 1：短信接口1   2：短信接口2
		String fmsg = pd.getString("fmsg");						//判断是系统用户还是会员 "appuser"为会员用户
		
		
		if("yes".endsWith(isAll)){
			try {
				List<PageData> userList = new ArrayList<PageData>();
				
				userList = "appuser".equals(fmsg) ? appuserService.listAllUser(pd):userService.listAllUser(pd);
				
				zcount = userList.size();
				try {
					for(int i=0;i<userList.size();i++){
						if(Tools.checkMobileNumber(userList.get(i).getString("PHONE"))){			//手机号格式不对就跳过
							if("1".equals(TYPE)){
								SmsUtil.sendSms1(userList.get(i).getString("PHONE"), CONTENT);		//调用发短信函数1
							}else{
								SmsUtil.sendSms2(userList.get(i).getString("PHONE"), CONTENT);		//调用发短信函数2
							}
							count++;
						}else{
							continue;
						}
					}
					msg = "ok";
				} catch (Exception e) {
					msg = "error";
				}
				
			} catch (Exception e) {
				msg = "error";
			}
		}else{
			PHONEs = PHONEs.replaceAll("；", ";");
			PHONEs = PHONEs.replaceAll(" ", "");
			String[] arrTITLE = PHONEs.split(";");
			zcount = arrTITLE.length;
			try {
				for(int i=0;i<arrTITLE.length;i++){
					if(Tools.checkMobileNumber(arrTITLE[i])){			//手机号式不对就跳过
						if("1".equals(TYPE)){
							SmsUtil.sendSms1(arrTITLE[i], CONTENT);		//调用发短信函数1
						}else{
							SmsUtil.sendSms2(arrTITLE[i], CONTENT);		//调用发短信函数2
						}
						count++;
					}else{
						continue;
					}
				}
				msg = "ok";
			} catch (Exception e) {
				msg = "error";
			} 
		}	
		pd.put("msg", msg);
		pd.put("count", count);						//成功数
		pd.put("ecount", zcount-count);				//失败数
		pdList.add(pd);
		map.put("list", pdList);
		return AppUtil.returnObject(pd, map);
	}
	
	/**
	 * 去发送电子邮件页面
	 */
	@RequestMapping(value="/goSendEmail")
	public ModelAndView goSendEmail() throws Exception{
		mv.clear();
		pd = this.getPageData();
		mv.setViewName("system/head/send_email");
		mv.addObject("pd", pd);
		return mv;
	}
	
	/**
	 * 发送电子邮件
	 */
	@RequestMapping(value="/sendEmail")
	@ResponseBody
	public Object sendEmail(){
		mv.clear();
		pd = this.getPageData();
		Map map = new HashMap();
		String msg = "ok";		//发送状态
		int count = 0;			//统计发送成功条数
		int zcount = 0;			//理论条数
		
		String strEMAIL = Tools.readTxtFile(Const.EMAIL);		//读取邮件配置
		
		List<PageData> pdList = new ArrayList<PageData>();
		
		String toEMAIL = pd.getString("EMAIL");					//对方邮箱
		String TITLE = pd.getString("TITLE");					//标题
		String CONTENT = pd.getString("CONTENT");				//内容
		String TYPE = pd.getString("TYPE");						//类型
		String isAll = pd.getString("isAll");					//是否发送给全体成员 yes or no
		
		String fmsg = pd.getString("fmsg");						//判断是系统用户还是会员 "appuser"为会员用户
		
		if(null != strEMAIL && !"".equals(strEMAIL)){
			String strEM[] = strEMAIL.split(",fh,");
			if(strEM.length == 4){
				if("yes".endsWith(isAll)){
					try {
						List<PageData> userList = new ArrayList<PageData>();
						
						userList = "appuser".equals(fmsg) ? appuserService.listAllUser(pd):userService.listAllUser(pd);
						
						zcount = userList.size();
						try {
							for(int i=0;i<userList.size();i++){
								if(Tools.checkEmail(userList.get(i).getString("EMAIL"))){		//邮箱格式不对就跳过
									SimpleMailSender.sendEmail(strEM[0], strEM[1], strEM[2], strEM[3], userList.get(i).getString("EMAIL"), TITLE, CONTENT, TYPE);//调用发送邮件函数
									count++;
								}else{
									continue;
								}
							}
							msg = "ok";
						} catch (Exception e) {
							msg = "error";
						}
						
					} catch (Exception e) {
						msg = "error";
					}
				}else{
					toEMAIL = toEMAIL.replaceAll("；", ";");
					toEMAIL = toEMAIL.replaceAll(" ", "");
					String[] arrTITLE = toEMAIL.split(";");
					zcount = arrTITLE.length;
					try {
						for(int i=0;i<arrTITLE.length;i++){
							if(Tools.checkEmail(arrTITLE[i])){		//邮箱格式不对就跳过
								SimpleMailSender.sendEmail(strEM[0], strEM[1], strEM[2], strEM[3], arrTITLE[i], TITLE, CONTENT, TYPE);//调用发送邮件函数
								count++;
							}else{
								continue;
							}
						}
						msg = "ok";
					} catch (Exception e) {
						msg = "error";
					} 
				}	
			}else{
				msg = "error";
			}
		}else{
			msg = "error";
		}
		pd.put("msg", msg);
		pd.put("count", count);						//成功数
		pd.put("ecount", zcount-count);				//失败数
		pdList.add(pd);
		map.put("list", pdList);
		return AppUtil.returnObject(pd, map);
	}
	
	/**
	 * 去系统设置页面
	 */
	@RequestMapping(value="/goSystem")
	public ModelAndView goEditEmail() throws Exception{
		mv.clear();
		pd = this.getPageData();
		pd.put("YSYNAME", Tools.readTxtFile(Const.SYSNAME));	//读取系统名称
		pd.put("COUNTPAGE", Tools.readTxtFile(Const.PAGE));		//读取每页条数
		String strEMAIL = Tools.readTxtFile(Const.EMAIL);		//读取邮件配置
		String strSMS1 = Tools.readTxtFile(Const.SMS1);			//读取短信1配置
		String strSMS2 = Tools.readTxtFile(Const.SMS2);			//读取短信2配置
		
		if(null != strEMAIL && !"".equals(strEMAIL)){
			String strEM[] = strEMAIL.split(",fh,");
			if(strEM.length == 4){
				pd.put("SMTP", strEM[0]);
				pd.put("PORT", strEM[1]);
				pd.put("EMAIL", strEM[2]);
				pd.put("PAW", strEM[3]);
			}
		}
		
		if(null != strSMS1 && !"".equals(strSMS1)){
			String strS1[] = strSMS1.split(",fh,");
			if(strS1.length == 2){
				pd.put("SMSU1", strS1[0]);
				pd.put("SMSPAW1", strS1[1]);
			}
		}
		
		if(null != strSMS2 && !"".equals(strSMS2)){
			String strS2[] = strSMS2.split(",fh,");
			if(strS2.length == 2){
				pd.put("SMSU2", strS2[0]);
				pd.put("SMSPAW2", strS2[1]);
			}
		}
		
		mv.setViewName("system/head/sys_edit");
		mv.addObject("pd", pd);
		
		return mv;
	}
	
	/**
	 * 保存系统设置
	 */
	@RequestMapping(value="/saveSys")
	public ModelAndView saveU(PrintWriter out) throws Exception{
		mv.clear();
		pd = this.getPageData();
		Tools.writeFile(Const.SYSNAME,pd.getString("YSYNAME"));	//写入系统名称
		Tools.writeFile(Const.PAGE,pd.getString("COUNTPAGE"));	//写入每页条数
		Tools.writeFile(Const.EMAIL,pd.getString("SMTP")+",fh,"+pd.getString("PORT")+",fh,"+pd.getString("EMAIL")+",fh,"+pd.getString("PAW"));	//写入邮件服务器配置
		Tools.writeFile(Const.SMS1,pd.getString("SMSU1")+",fh,"+pd.getString("SMSPAW1"));	//写入短信1配置
		Tools.writeFile(Const.SMS2,pd.getString("SMSU2")+",fh,"+pd.getString("SMSPAW2"));	//写入短信2配置
		mv.addObject("msg","OK");
		mv.setViewName("save_result");
		return mv;
	}
	
	/**
	 * 去代码生成器页面
	 */
	@RequestMapping(value="/goProductCode")
	public ModelAndView goProductCode() throws Exception{
		mv.clear();
		mv.setViewName("system/head/productCode");
		return mv;
	}
	
}
