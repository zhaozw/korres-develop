package com.korres.util;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

/**
 * 
 * @author weiyuanhua
 * @title WebUtil.java
 * @package com.iboxpay.web.util
 * @description web端 工具类
 * @update 2011-10-25 下午06:17:04
 * @version V1.0
 */
public class WebUtil {

	/**
	 * 使用charset格式 将 数据返回给客户端
	 * @param response
	 * @param json
	 * @param charset
	 */
	public static void writeToClient(HttpServletResponse response, String json,String charset) {
		response.setContentType(charset);
		try {
			response.getWriter().write(json);
			response.getWriter().close();
		} catch (IOException e) {
			throw new RuntimeException("Error when write to client, errmsg: "
					+ e.getMessage(), e);
		}
	}
	
	/**
	 * 使用UTF-8格式 将 数据返回给客户端
	 * 
	 * @param response
	 * @param json
	 * @throws IOException
	 */
	public static void writeHTMLToClient(HttpServletResponse response, String json) throws IOException {
		writeToClient(response, json,"text/html;charset=UTF-8");
	}

	/**
	 * 使用UTF-8格式 将 数据返回给客户端
	 * 
	 * @param response
	 * @param json
	 * @throws IOException
	 */
	public static void writeToClient(HttpServletResponse response, String json) throws IOException {
		writeToClient(response, json,"UTF-8");
	}
}
