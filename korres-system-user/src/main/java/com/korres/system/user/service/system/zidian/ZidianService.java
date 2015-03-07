package com.korres.system.user.service.system.zidian;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.korres.system.user.dao.DaoSupport;
import com.korres.system.user.entity.Page;
import com.korres.system.user.util.PageData;

@Service("zidianService")
public class ZidianService{

	@Resource(name = "daoSupport")
	private DaoSupport dao;
	
	
	//新增
	public void save(PageData pd)throws Exception{
		dao.save("ZidianMapper.save", pd);
	}
	
	//修改
	public void edit(PageData pd)throws Exception{
		dao.update("ZidianMapper.edit", pd);
	}
	
	//通过id获取数据
	public PageData findById(PageData pd) throws Exception {
		return (PageData) dao.findForObject("ZidianMapper.findById", pd);
	}
	
	//查询总数
	public PageData findCount(PageData pd) throws Exception {
		return (PageData) dao.findForObject("ZidianMapper.findCount", pd);
	}
	
	//查询某编码
	public PageData findBmCount(PageData pd) throws Exception {
		return (PageData) dao.findForObject("ZidianMapper.findBmCount", pd);
	}
	
	//列出同一父类id下的数据
	public List<PageData> zidianlistPage(Page page) throws Exception {
		return (List<PageData>) dao.findForList("ZidianMapper.zidianlistPage", page);
		
	}
	
	//删除
	public void delete(PageData pd) throws Exception {
		dao.delete("ZidianMapper.delete", pd);
		
	}

	
	
}
