﻿<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
	<head>
	<base href="<%=basePath%>">

	<!-- jsp文件头和头部 -->
	<%@ include file="top.jsp"%> 
	
	</head>
	<body>

		<!-- 页面顶部¨ -->
		<%@ include file="head.jsp"%>  
		
		<div class="container-fluid" id="main-container">
			<a href="#" id="menu-toggler"><span></span></a><!-- menu toggler -->



		<!-- 左侧菜单 -->
		<%@ include file="left.jsp"%>  



		
			<div id="main-content" class="clearfix">
					

					<div id="breadcrumbs">

						<ul class="breadcrumb">

							<li><i class="icon-home"></i> <a>首页</a><span class="divider"><i class="icon-angle-right"></i></span></li>

							<li class="active"></li>
						</ul><!--.breadcrumb-->



						<div id="nav-search">

							<form class="form-search">

									<span class="input-icon">

										<input autocomplete="off" id="nav-search-input" type="text" class="input-small search-query" placeholder="Search ..." />

										<i id="nav-search-icon" class="icon-search"></i>

									</span>

							</form>

						</div><!--#nav-search-->

					</div><!--#breadcrumbs-->



<div id="page-content" class="clearfix">
						
<div class="page-header position-relative">
	<h1>后台首页 <small><i class="icon-double-angle-right"></i> </small></h1>
</div><!--/page-header-->

<div class="row-fluid">
<!-- PAGE CONTENT BEGINS HERE -->
<div class="alert alert-block alert-success">
 <button type="button" class="close" data-dismiss="alert"><i class="icon-remove"></i></button>
 <i class="icon-ok green"></i> <strong class="green"><small></small></strong>
欢迎登录后台管理系统
</div>

<div class="space-6"></div>
<div class="row-fluid">
<%
String strXML="";
				
strXML += "<graph caption='对比表' xAxisName='月份' yAxisName='值' decimalPrecision='0' formatNumberScale='0'>";
strXML += "<set name='1' value='462' color='AFD8F8'/>";
strXML += "<set name='2' value='857' color='F6BD0F'/>";
strXML += "<set name='3' value='671' color='8BBA00'/>";
strXML += "<set name='4' value='494' color='FF8E46'/>";
strXML += "<set name='5' value='761' color='008E8E'/>";
strXML += "<set name='6' value='960' color='D64646'/>";
strXML += "<set name='7' value='629' color='8E468E'/>";
strXML += "<set name='8' value='622' color='588526'/>";
strXML += "<set name='9' value='376' color='B3AA00'/>";
strXML += "<set name='10' value='494' color='008ED6'/>";
strXML += "<set name='11' value='761' color='9D080D'/>";
strXML += "<set name='12' value='960' color='A186BE'/>";
strXML += "</graph>";
//Create the chart - Column 3D Chart with data from strXML variable using dataXML method
%>







<!-- 柱状图 -->
<div class="center">
<div style="float:left;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Area2D.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
<div style="float:right;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Column3D.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
</div>




<div class="center">
<div style="float:left;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Bar2D.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
<div style="float:right;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Column2D.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
</div>







<div class="center">
<div style="float:left;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Doughnut2D.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
<div style="float:right;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Doughnut3D.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
</div>







<div class="center">
<div style="float:left;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/SSGrid.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
<div style="float:right;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Pie3D.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
</div>






<div class="center">
<div style="float:left;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Pie2D.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
<div style="float:right;">
<table border="0" width="50%">
 <tr>
  <td>
				<jsp:include page="../../FusionChartsHTMLRenderer.jsp" flush="true"> 
					<jsp:param name="chartSWF" value="FusionCharts/Line.swf" /> 
					<jsp:param name="strURL" value="" /> 
					<jsp:param name="strXML" value="<%=strXML%>" /> 
					<jsp:param name="chartId" value="myNext" /> 
					<jsp:param name="chartWidth" value="500" /> 
					<jsp:param name="chartHeight" value="300" /> 
					<jsp:param name="debugMode" value="false" /> 	
				</jsp:include>
  </td>
 </tr>
</table>
</div>
</div>












</div>
</div><!--/row-->
	
</div><!--/#page-content-->
					  
					  
					  
					  <!-- 换肤 -->
					 <div id="ace-settings-container">
						<div class="btn btn-app btn-mini btn-warning" id="ace-settings-btn">
							<i class="icon-cog"></i>
						</div>
						<div id="ace-settings-box">
							<div>
								<div class="pull-left">
									<select id="skin-colorpicker" class="hidden">
										<option data-class="default" value="#438EB9" <c:if test="${user.SKIN =='default' }">selected</c:if> >#438EB9</option>
										<option data-class="skin-1" value="#222A2D" <c:if test="${user.SKIN =='skin-1' }">selected</c:if> >#222A2D</option>
										<option data-class="skin-2" value="#C6487E" <c:if test="${user.SKIN =='skin-2' }">selected</c:if> >#C6487E</option>
										<option data-class="skin-3" value="#D0D0D0" <c:if test="${user.SKIN =='skin-3' }">selected</c:if> >#D0D0D0</option>
									</select>
								</div>
								<span>&nbsp; 选择皮肤</span>
							</div>
							<div><label><input type='checkbox' name='menusf' id="menusf" onclick="menusf();"/><span class="lbl" style="padding-top: 5px;">菜单缩放</span></label></div>
						</div>
					</div><!--/#ace-settings-container-->
					  
					  
					  
					  
					  
			</div><!-- #main-content -->
		</div><!--/.fluid-container#main-container-->
		<a href="#" id="btn-scroll-up" class="btn btn-small btn-inverse">
			<i class="icon-double-angle-up icon-only"></i>
		</a>
		<!-- basic scripts -->
		<script src="1.9.1/jquery.min.js"></script>
		<script type="text/javascript">
		window.jQuery || document.write("<script src='js/jquery-1.9.1.min.js'>\x3C/script>");
		</script>
		
		<script src="js/bootstrap.min.js"></script>
		<!-- page specific plugin scripts -->
		
		<!--[if lt IE 9]>
		<script type="text/javascript" src="js/excanvas.min.js"></script>
		<![endif]-->
		<script type="text/javascript" src="js/jquery-ui-1.10.2.custom.min.js"></script>
		<script type="text/javascript" src="js/jquery.ui.touch-punch.min.js"></script>
		<script type="text/javascript" src="js/jquery.slimscroll.min.js"></script>
		<script type="text/javascript" src="js/jquery.easy-pie-chart.min.js"></script>
		<script type="text/javascript" src="js/jquery.sparkline.min.js"></script>
		<script type="text/javascript" src="js/jquery.flot.min.js"></script>
		<script type="text/javascript" src="js/jquery.flot.pie.min.js"></script>
		<script type="text/javascript" src="js/jquery.flot.resize.min.js"></script>
		<!-- ace scripts -->
		<script src="js/ace-elements.min.js"></script>
		<script src="js/ace.min.js"></script>
		<!-- inline scripts related to this page -->
		
		
		<script type="text/javascript" src="js/jquery.cookie.js"></script>
		<script type="text/javascript" src="js/myjs/menusf.js"></script>
		<script type="text/javascript">
		
		$(function() {
			if(typeof($.cookie('menusf')) == "undefined"){
				$("#menusf").attr("checked",true);
				$("#sidebar").attr("class","menu-min");
			}else{
				$("#sidebar").attr("class","");
			}
		});
		
$(function() {
	$('.dialogs,.comments').slimScroll({
        height: '300px'
    });
	
	$('#tasks').sortable();
	$('#tasks').disableSelection();
	$('#tasks input:checkbox').removeAttr('checked').on('click', function(){
		if(this.checked) $(this).closest('li').addClass('selected');
		else $(this).closest('li').removeClass('selected');
	});
	var oldie = $.browser.msie && $.browser.version < 9;
	$('.easy-pie-chart.percentage').each(function(){
		var $box = $(this).closest('.infobox');
		var barColor = $(this).data('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
		var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
		var size = parseInt($(this).data('size')) || 50;
		$(this).easyPieChart({
			barColor: barColor,
			trackColor: trackColor,
			scaleColor: false,
			lineCap: 'butt',
			lineWidth: parseInt(size/10),
			animate: oldie ? false : 1000,
			size: size
		});
	})
	$('.sparkline').each(function(){
		var $box = $(this).closest('.infobox');
		var barColor = !$box.hasClass('infobox-dark') ? $box.css('color') : '#FFF';
		$(this).sparkline('html', {tagValuesAttribute:'data-values', type: 'bar', barColor: barColor , chartRangeMin:$(this).data('min') || 0} );
	});
	
	
  var data = [
	{ label: "social networks",  data: 38.7, color: "#68BC31"},
	{ label: "search engines",  data: 24.5, color: "#2091CF"},
	{ label: "ad campaings",  data: 8.2, color: "#AF4E96"},
	{ label: "direct traffic",  data: 18.6, color: "#DA5430"},
	{ label: "other",  data: 10, color: "#FEE074"}
  ];
 var placeholder = $('#piechart-placeholder').css({'width':'90%' , 'min-height':'150px'});
 $.plot(placeholder, data, {
	
	series: {
        pie: {
            show: true,
			tilt:0.8,
			highlight: {
				opacity: 0.25
			},
			stroke: {
				color: '#fff',
				width: 2
			},
			startAngle: 2
			
        }
    },
    legend: {
        show: true,
		position: "ne", 
	    labelBoxBorderColor: null,
		margin:[-30,15]
    }
	,
	grid: {
		hoverable: true,
		clickable: true
	},
	tooltip: true, //activate tooltip
	tooltipOpts: {
		content: "%s : %y.1",
		shifts: {
			x: -30,
			y: -50
		}
	}
	
 });
 
  var $tooltip = $("<div class='tooltip top in' style='display:none;'><div class='tooltip-inner'></div></div>").appendTo('body');
  placeholder.data('tooltip', $tooltip);
  var previousPoint = null;
  placeholder.on('plothover', function (event, pos, item) {
	if(item) {
		if (previousPoint != item.seriesIndex) {
			previousPoint = item.seriesIndex;
			var tip = item.series['label'] + " : " + item.series['percent']+'%';
			$(this).data('tooltip').show().children(0).text(tip);
		}
		$(this).data('tooltip').css({top:pos.pageY + 10, left:pos.pageX + 10});
	} else {
		$(this).data('tooltip').hide();
		previousPoint = null;
	}
	
 });
		var d1 = [];
		for (var i = 0; i < Math.PI * 2; i += 0.5) {
			d1.push([i, Math.sin(i)]);
		}
		var d2 = [];
		for (var i = 0; i < Math.PI * 2; i += 0.5) {
			d2.push([i, Math.cos(i)]);
		}
		var d3 = [];
		for (var i = 0; i < Math.PI * 2; i += 0.2) {
			d3.push([i, Math.tan(i)]);
		}
		
		var sales_charts = $('#sales-charts').css({'width':'100%' , 'height':'220px'});
		$.plot("#sales-charts", [
			{ label: "Domains", data: d1 },
			{ label: "Hosting", data: d2 },
			{ label: "Services", data: d3 }
		], {
			hoverable: true,
			shadowSize: 0,
			series: {
				lines: { show: true },
				points: { show: true }
			},
			xaxis: {
				tickLength: 0
			},
			yaxis: {
				ticks: 10,
				min: -2,
				max: 2,
				tickDecimals: 3
			},
			grid: {
				backgroundColor: { colors: [ "#fff", "#fff" ] },
				borderWidth: 1,
				borderColor:'#555'
			}
		});
		$('[data-rel="tooltip"]').tooltip();
})
		</script>
	</body>
</html>
