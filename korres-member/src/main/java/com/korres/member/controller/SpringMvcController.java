package com.korres.member.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SpringMvcController extends BaseController {

	@RequestMapping(value="/welcome",method={RequestMethod.GET})
    public ModelAndView getFirstPage(HttpServletRequest request) {
                //welcom就是视图的名称（welcom.ftl）
    	logger.info("-------1------- getFirstPage start!");
		mv.clear();
		mv.setViewName("welcome");
        mv.addObject("name", "My First Spring Mvc");
        return mv;
    }
}
