<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+ path;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN" xml:lang="zh-CN">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta property="qc:admins" content="210003765762050006375" />
    <title>折800登录</title>
    <meta name="keywords" content="折800登录"/>
    <meta name="description" content="折800登录"/>

    <script src="http://js.tuanimg.com/jquery1.7.2.min.js" type="text/javascript"></script>
    <script src="http://z5.tuanimg.com/v2/global/js/jquery.lazyload-39bf40a0924b42aee0b7c3faa6b0d786.js" type="text/javascript"></script>
    <script src="<%=basePath %>/js/zhe800/login/pp18610_v2.js" type="text/javascript"></script>

      <link href="http://z5.tuanimg.com/v2/subject/app_guide/css/guide_dialog-fee8aa5f4f40322601f530154a61d261.css" media="screen" rel="stylesheet" type="text/css" />
      <script src="http://z5.tuanimg.com/v2/subject/app_guide/js/guide_dialog-d556a9982d86703d0d8fa2ea08f254dd.js" type="text/javascript"></script>

    <script src="<%=basePath %>/js/zhe800/login/tuanpub3.js" type="text/javascript"></script>
    <script src="http://i1.tuanimg.com/trade/s/cartcore.js?v=58028" type="text/javascript"></script>


    <script src="<%=basePath %>/js/zhe800/login/taopi18610-ea4dd5688f9534cf73b9e642d6c24e6f.js" type="text/javascript"></script>
    <script src="http://z5.tuanimg.com/v2/2012/javascripts/jquery_ujs-1aa15efbabf8747d72eab660f389339a.js" type="text/javascript"></script>
    <script src="<%=basePath %>/js/zhe800/login/validrule1.js" type="text/javascript"></script>
    <script src="http://z0.tuanimg.com/shop/v1/global/js/tradereg1.1.min.js" type="text/javascript"></script>
    <script src="<%=basePath %>/js/zhe800/login/jucore-88a633e49e75d9826d33b6e00e5781a5.js" type="text/javascript"></script>
    <script src="http://z5.tuanimg.com/v2/plugins/js/uedfocusimg-93f337fd8b19149f4bb46b9481afd5ac.js" type="text/javascript"></script>
    <script src="http://z5.tuanimg.com/v2/global/js/poplib-1bebcc695d56a0629a8da0b93934888e.js" type="text/javascript"></script>
    <script src="http://z5.tuanimg.com/v2/ju/js/qqzone-7a98fbfaabfd249f7957e62f536493cf.js" type="text/javascript"></script>
    <script src="http://z5.tuanimg.com/v2/score_mall/js/index-cf796b6fc0d584756cb4cda894bb1338.js" type="text/javascript"></script>
    <script src="http://z5.tuanimg.com/v2/core/js/sidePanel-7c390e12e0e589b6c785e761bd062680.js" type="text/javascript"></script>
      <script src="http://z5.tuanimg.com/v1/login/js/login-ae8212c319a3888caa731f44cd378854.js" type="text/javascript"></script>


    <link href="http://css.tuanimg.com/global1.0.css" media="screen" rel="stylesheet" type="text/css"/>
    <link rel="canonical" href="http://www.zhe800.com/login"/>
    <link href="http://z5.tuanimg.com/v2/2012/style/about-f551662b8f478f25c813646671ebb36b.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="http://z5.tuanimg.com/v2/core/css/zhelib-0b6536c13d85bf9580b89f7792f3c90b.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="http://z5.tuanimg.com/v2/ju/css/friendly_links-e421c87b1dc4529003fb9fd2e5c80ea3.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="http://z5.tuanimg.com/v2/core/css/sidePanel-bf1c82b679a5c8bf88cd28654fc91ce8.css" media="screen" rel="stylesheet" type="text/css" />
      <link href="http://z5.tuanimg.com/v1/login/css/login-af5d8f7c5f77de9bb5cc042322d3f52c.css" media="screen" rel="stylesheet" type="text/css" />

 </head>

  
  <body >
          <script type="text/javascript">tuanpub.getModule("zhe_popup").init({});</script>

      <div id="toolbar">
  <div class="toolbar area">
    <div class="right flow">
      <a href="http://www.zhe800.com/help_center" class="contractKf" target="_blank">联系客服</a>
      | <a href="https://zhaoshang.zhe800.com/" target="_blank">卖家中心</a>
    </div>
    <div id="login" class="right">
      <em id="tblogin"></em>
      <script type="text/javascript">
        tuanpub.getModule("toolbar_pp").init();
      </script>
    </div>


    <div class="right">
      <a href="http://www.tuan800.com" target="_blank">团800旗下网站</a>
      <div class="phone-qrcode-down">
        <span class="top_qrcode">
          <a target="_blank" href="http://www.zhe800.com/app"><i class="phone-qrcode-icon"></i>手机版</a>
          <em></em>
        </span>
        <div class="dropdown-menu">
          <a target="_blank" href="http://www.zhe800.com/app"></a>
        </div>
      </div>
    </div>

  </div>
</div>



  <script type='text/javascript'>
  </script>

  <script type="text/javascript">
  </script>

<div class="header">
  <div class="area">
    <div class="logo l">
      <a href="http://www.zhe800.com/"><img src="http://z0.tuanimg.com/v2/core/img/new_logo4_min.png" width="243" height="47" /></a>
      <br />
      折800，精选每日优质淘品
    </div>
    <div class="device">
      <a target="_blank" class="all" href="http://www.zhe800.com/app"></a>
      <a target="_blank" class="ios" href="http://www.zhe800.com/app"></a>
      <a target="_blank" class="android" href="http://www.zhe800.com/app"></a>
      <a target="_blank" class="wp" href="http://www.zhe800.com/app"></a>
      <a target="_blank" class="wap" href="http://www.zhe800.com/app"></a>
    </div>
  </div>
</div>
<div id="head_nav">
  <div class="head_nav area">
    <div class="l">
      <a  href="http://www.zhe800.com">首页<i></i></a>
      <a     href="http://brand.zhe800.com/">品牌团<i></i></a>
      <a   href="http://www.zhe800.com/ju_type/baoyou"  >9块9包邮<i></i></a>
      <a    href="http://www.zhe800.com/ju_type/fengding"  >20元封顶<i></i></a>
      <a    href="http://shop.zhe800.com" class="shop-mall" >特卖商城<i class="hot-icon"></i></a>
      <a    href="http://www.zhe800.com/jifen"  >积分商城</a>
      <span class="n"></span>
    </div>
    <div class="r_con">
      <div class="yg_wrap">
        <a class="yg" href="http://www.zhe800.com/jingxuanyugao">精选预告 <i></i></a>
      </div>
      <div return_to="http://www.zhe800.com/login?return_to=http%3A%2F%2Fwww.zhe800.com%2Flogin%3Freturn_to%3Dhttp%253A%252F%252Fwww.zhe800.com%252F%253Fsort%253Dhottest" info="1-2-3" class="dropdown sign_panel" data-holiday="3"  data-qq-g-label="加QQ群享特权：" data-qq-g-num="207198920"  data-side-text="电烤箱免费赠送中>>" data-side-link="http://www.zhe800.com/jifen/lottery/36?utm_content=weiqiandao"  id="signinid"></div>
      <script type="text/javascript">
        tuanpub.getModule("signin").init();
      </script>
    </div>
  </div>
</div>

    
<div class="top_head">
  <a href="http://www.zhe800.com" target="_blank"><img src="http://z5.tuanimg.com/v1/login/img/login_logo2.png" /></a>
  <p class="ok_re">还没有账号？<a href="https://passport.zhe800.com/users/signup" target="_blank">立即注册</a></p>
</div>
<div class="tao_r" data-username="login">
  <div class="left">
    <div id="ppLogin"></div>
  </div>
  <div class="right">
    <div class="right_b_bg">
        <a href="http://www.zhe800.com/help/cs_support?utm_content=denglu" title="" target="_blank"><img src="http://z3.tuanimg.com/upload/dynamic_banner/image/403/130f4b3f21b106ab11a8c5b43eeb5cd4.jpg" alt=""/></a>
    </div>
  </div>
</div>
      <div class="about">
  <ul class="area">
    <li class="lw w1">
      <span>关于我们</span>
      <a href="http://www.zhe800.com/contact" target="_blank">关于我们</a>
      <a rel="nofollow"  href="http://hr.tuan800.com/brand" target="_blank">诚聘英才</a>
      <a href="http://www.zhe800.com/service_terms" target="_blank">服务条款</a>
    </li>
    <li class="lw">
      <span>帮助中心</span>
          <a href="http://www.zhe800.com/help_center/detail/234" target="_blank" title="联系我们">联系我们</a>
    <a href="http://www.zhe800.com/help_center/detail/82" target="_blank" title="服务协议">服务协议</a>

    </li>
    <li class="lw">
      <span>商务合作</span>
      <a href="https://zhaoshang.zhe800.com/" target="_blank">商家报名</a>
      <a href="http://www.zhe800.com/friendly_links" target="_blank">友情链接</a>
    </li>
    <li class="lw w2">
      <span>关注我们</span>
      <a href="http://e.weibo.com/tao800ju" target="_blank">新浪微博</a>
      <a href="http://www.zhe800.com/download_tao800?fn=%E6%8A%98800.url" title="下载桌面快捷方式" target="_blank">下载桌面快捷方式</a>
      <a class="feedback_popup_handler" href="http://www.zhe800.com/feedback" title="意见反馈" target="_blank">意见反馈</a>
      <a href="http://www.zhe800.com/help_center" class="contractKf" title="联系客服" target="_blank">联系客服</a>
    </li>
    <li class="w3">
      <span>下次怎么来?</span>
      <h3>记住域名：<a href="http://www.zhe800.com"><em>zhe800.com</em></a></h3>
      <h4>百度搜索：<input type="text" value="折800" onfocus="this.blur()" class="bdtxt"><a href="http://www.baidu.com/s?tn=baiduhome_pg&amp;ie=utf-8&amp;bs=%E6%8A%98800&amp;f=8&amp;rsv_bp=1&amp;rsv_spt=1&amp;wd=%E6%8A%98800&amp;inputT=0" target="_blank" class="smt"></a></h4>
      <h5>收藏本站：<a id="clt" href="javascript:$.addfavorite()"><u>加入收藏</u></a></h5>
      <h6>订阅本站：
        <br>
        <input type="text" class="txt" placeholder="输入您的邮件" id="subscribe_email"><input type="button" onclick="$.tao_dingyue()" class="smt dysmt" value="订阅">
      </h6>
    </li>

    <li class="w4">
    <span>下载手机版</span>
    <div class="bottom_qrcode_wrapper">
      <img src="http://z5.tuanimg.com/v2/core/img/qrcode_65057_100.jpg" alt="" width="100" height="100">
      <h5>扫描下载折800</h5>
      <p>
      把折扣握在手心<br />把潮流带在身边
      </p>
    </div>
    </li>


  </ul>
</div>



<script src="http://z5.tuanimg.com/v1/urchin/jsurchin/userid-912905bd1ba810cb512fefffc70254ef.js" type="text/javascript"></script>
<div class="area footer"><a rel="nofollow" target="_blank" href="http://www.miibeian.gov.cn/" style="display:inline; width:auto;">京ICP证120075号</a> 京ICP备10051110号-5 京公网安备11010502025623 Copyright&copy;2011-2015 版权所有 ZHE800.COM <br /><a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=3571298269" target="_blank" style="float: left;margin-left: 398px;"><img src="http://z0.tuanimg.com/v1/2012/images/web_trust.png" width="70" height="26" /></a>
 <a id='___szfw_logo___' href='https://search.szfw.org/cert/l/CX20150121006886006587' style="float: left;margin-left: 25px;" target='_blank'><img src="http://z0.tuanimg.com/v2/global/img/cert.jpg" width="70" height="26"></a>
  <script type='text/javascript'>(function(){document.getElementById('___szfw_logo___').oncontextmenu = function(){return false;}})();</script>
</div>
</div>


            <span style="display:none">
        <script type="text/javascript" charset="utf-8">
          var gaconf = {ga: true,cnzz: {key: 30081361}};
        </script>
      </span>
<script src="http://z5.tuanimg.com/v1/urchin/jsurchin/core_ga-567e5f0985fdc5b4aa53943778b608d5.js" type="text/javascript"></script>
      <script type="text/javascript">
// 获取当前path name
;function getPathname() {
  var pathname = location.pathname.substring(1);
  if (pathname == "")
    pathname = "index";

  if (pathname.charAt(pathname.length - 1) == "/")
    pathname = pathname.substring(0, pathname.length - 1);

  return pathname;
}
</script>

      

        <!-- Google Code for &#28120;800&#20154;&#32676;&#21015;&#34920; -->
    <!-- Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup -->
    <script type="text/javascript">
      var google_conversion_id = 1042259675;
      var google_conversion_label = "TubaCNP-5QUQ273-8AM";
      var google_custom_params = window.google_tag_params;
      var google_remarketing_only = true;
      var googlead = document.createElement('script');
      googlead.type = 'text/javascript';
      googlead.async = true;
      googlead.src = "//www.googleadservices.com/pagead/conversion.js";
      var googleadS = document.getElementsByTagName('script')[0];
      googleadS.parentNode.insertBefore(googlead, googleadS);
    </script>

    <noscript>
      <div style="display:inline;">
        <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1042259675/?value=0&amp;label=TubaCNP-5QUQ273-8AM&amp;guid=ON&amp;script=0"/>
      </div>
    </noscript>


    <script src="http://z5.tuanimg.com/v2/patch/js/visitCookie-c17e5061cb5abff0c65653b77da9dde9.js" type="text/javascript"></script>
    <script src="http://z5.tuanimg.com/v2/global/js/panda-fcaebfde50f520444f437829d6f25972.js" type="text/javascript"></script>
  </body>
</html>

