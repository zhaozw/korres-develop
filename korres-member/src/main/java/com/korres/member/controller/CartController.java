package com.korres.member.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.korres.util.WebUtil;

@Controller
@RequestMapping(value="/cart")
public class CartController extends BaseController {
	@RequestMapping(value="/items_count")
	public void itemsCount(HttpServletRequest request, HttpServletResponse response) throws Exception{ 
		logger.info("-------1------- itemsCount start!");
		String json = "/**/ typeof jQuery172048676260188285503_1425978016288 === 'function' && jQuery172048676260188285503_1425978016288({\"status\":200,\"data\":0});";
		try {
			WebUtil.writeToClient(response, json);
		} catch (IOException e) {
			logger.info("-------2------- itemsCount write json error:\n" + e);
		}
		
		logger.info("-------3------- itemsCount write to json:" + json);
	}
}
