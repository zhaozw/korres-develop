<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+ path;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>折800通行证</title>

<link href="<%=basePath %>/css/zhe800/global2.css" media="screen" rel="stylesheet" />
<link href="<%=basePath %>/css/zhe800/style1.css" media="screen" rel="stylesheet"/>
<script src="https://i0.tuanimg.com/global/js/jquery1.7.2.min.js"> </script>

<link rel="shortcut icon" href="https://passport.zhe800.com/zhe800_favicon.ico"/>

<meta content="authenticity_token" name="csrf-param" />
<meta content="GtcM/+MdYuK7ECx6JkH93Ww3E4iGVvhb2p+beGkIu08=" name="csrf-token" />





<script type='text/javascript' src="<%=basePath %>/js/zhe800/pp18610_v2.js"></script>
<script type='text/javascript' src="<%=basePath %>/js/zhe800/tuanpub4.js"></script>
<script type='text/javascript' src="<%=basePath %>/js/zhe800/validrule1.js"></script>
<script type='text/javascript' src="<%=basePath %>/js/zhe800/pppub.js"></script>
<script type='text/javascript' src="<%=basePath %>/js/zhe800/pi18610_v2.js"></script>
<script type='text/javascript' src="<%=basePath %>/js/zhe800/pprule1.js"></script>
<script type='text/javascript' src="<%=basePath %>/js/zhe800/ppreg1.js"></script>

</head>

<body>
  <div id="header">
    <div  class="area">
      <div class="logo"><a href="http://www.zhe800.com/"></a></div>
      <span>已经有团800或折800帐号了？<a href="http://www.zhe800.com/login/?return_to=http%3A%2F%2Fwww.zhe800.com%2F%3Fsort%3Dhottest">去登录</a></span>
    </div>
  </div>


<div id="register" class="area clear">
  <div id="email" class="Panel PanelA clear l">
    <div class="reg_box clear">
      <div class="item msg_zt1">
        <label>用户名：</label>
        <input type="text" id="pemail" class="itext1" value="邮箱/手机号">
        <div class="msg_box row1"><em></em><span class="msg"></span></div>
      </div>
      <div class="item msg_zt1">
        <label>密码：</label>
        <input type="password" id="password" class="itext1">
        <div class="msg_box row1"><em></em><span class="msg"></span></div>
      </div>
      <div class="item msg_zt1">
        <label>确认密码：</label>
        <input type="password" id="password2" class="itext1">
        <div class="msg_box row1"><em></em><span class="msg"></span></div>
      </div>
      <div class="item i_code">
        <label>验证码：</label>
        <input type="text" id="validCode" class="itext2">
        <span id="vcode_box"></span>
        <a href="javascript:void(0);" id="refresh_vcode">换一换</a> 
        <span class="i_codeP" style="display:none;"><a href="javascript:void(0);">免费获取手机验证码</a></span>
      </div>

      <div class="item i_txt">
        <p>
          <input type="checkbox" checked="checked" id="inputacc">
          我已经认真阅读并同意折800的<a target="_blank" href="http://www.zhe800.com/service_terms">《用户注册协议》</a> </p>
        <p>
          <input type="checkbox" id="subscribe_status" checked="checked">
          接收来自折800的优惠信息（可退订）</p>
      </div>
      <div class="item">
        <a href="#" class="i_btn i_btn1" id="reg_submit"><i>同意协议并注册</i></a>
      </div>
    </div>
  </div>
  <div class="reg_right">
    <div class="ada">
      <a target="_blank"><img /></a>
      <script type="text/javascript">tuanpub.getModule("reg_ad").init();</script>
    </div>
    <h3 class="moreps">还可以使用这些账号登录</h3>
    <div class="morelogin">

      <a href="https://passport.zhe800.com/sso/partner_login/qq_connect?return_to=http%3A%2F%2Fwww.zhe800.com" class="i_btn i_btn2 qq"><i>QQ登录</i></a>
      <a href="https://passport.zhe800.com/sso/partner_login/baidu?return_to=http%3A%2F%2Fwww.zhe800.com" class="i_btn i_btn2 baidu"><i>百度登录</i></a>
      <span id="showMore" class="">更多</span>
      <div style="display: none;" class="moreu">
        <a href="https://passport.zhe800.com/sso/partner_login/weibo?return_to=http%3A%2F%2Fwww.zhe800.com" class="i_btn i_btn2 sina"><i>微博账号</i></a>
        <a href="https://passport.zhe800.com/sso/partner_login/taobao?return_to=http%3A%2F%2Fwww.zhe800.com" class="i_btn i_btn2 taobao"><i>淘宝账号</i></a>
        <a href="https://passport.zhe800.com/sso/partner_login/renren?return_to=http%3A%2F%2Fwww.zhe800.com" class="i_btn i_btn2 renren"><i>人人账号</i></a>
      </div>

    </div>
  </div>
</div>

<div id="footer">
  <div class="area">
    <a style="color:#666" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证120075号</a>&nbsp;京ICP备10051110号-5 京公网安备11010502025623 
    Copyright&copy;2011-2015 版权所有 ZHE800.COM <br /><a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=3571298269" target="_blank">
      <img src="//i0.tuanimg.com/pro/global/img/web_trust.png" width="70" height="26" />
    </a>
  </div>
</div>

<script src="<%=basePath %>/js/zhe800/core_ga.js" type="text/javascript"></script>
<span style="display:none">
	<script type="text/javascript">
		zhepub.ga.initScripts({ga: true,cnzz: {key: 30081361}});
	</script>
</span>

</body>
</html>
