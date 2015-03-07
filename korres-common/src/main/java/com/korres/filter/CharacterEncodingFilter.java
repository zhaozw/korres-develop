/*
 * Copyright (C) 2011-2013 ShenZhen iBOXPAY Information Technology Co.,Ltd.
 * 
 * All right reserved.
 * 
 * This software is the confidential and proprietary
 * information of iBoxPay Company of China. 
 * ("Confidential Information"). You shall not disclose
 * such Confidential Information and shall use it only
 * in accordance with the terms of the contract agreement 
 * you entered into with iBoxpay inc.
 *
 * $Id: CharacterEncodingFilter.java 4737 2013-07-22 03:02:25Z weiyuanhua $
 * 
 * Description: 
 *
 */

package com.korres.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/*
 * 类名：CharacterEncodingFilter.java
 * 功能说明：过滤编码
 * 创建日期：2013-12-11 下午3:05:44
 * 作者：weiyuanhua
 * 版权：盒子支付
 * 标签：$Name$
 * CVS版本：$Revision$
 * 最后更新者：$Author$
 */
public class CharacterEncodingFilter implements Filter {
	// 编码
	private String charset;
	// 是否用到
	private boolean enabled;
	// 忽略
	private String[] ignores;

	public void destroy() {
		charset = null;

	}

	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {

		String url = ((HttpServletRequest) request).getRequestURL().toString();
		// 过滤编码
		if (enabled || charset != null) {
			if (!isIgnoreFilter(url, ignores)) {
				// 设置request的编码
				request.setCharacterEncoding(charset);
				// 设置response的编码
				response.setCharacterEncoding(charset);
			}
		}
		chain.doFilter(request, response);
	}

	public void init(FilterConfig config) throws ServletException {
		charset = config.getInitParameter("charset");
		enabled = "true".equalsIgnoreCase(config.getInitParameter("enabled")
				.trim());// 启用
		String ignore = config.getInitParameter("ignore");
		if (ignore != null && !"".equals(ignore)) {
			ignores = ignore.split(";");
		}

	}

	private boolean isIgnoreFilter(String url, String[] ignores) {
		boolean ret = false;
		if (ignores == null) {
			return ret;
		}
		for (String ignore : ignores) {
			if (url.indexOf(ignore) > 0) {
				ret = true;
				break;
			}
		}

		return ret;
	}
}
