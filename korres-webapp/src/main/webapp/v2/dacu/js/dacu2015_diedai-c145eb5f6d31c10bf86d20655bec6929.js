! function () {
    var a = function () {
        tuanpub.addModule("dacu2015_diedai", {
            Init: function () {
                tuanpub.headQueue.push(this.getCouponCondition)
            }, OnLoad: function () {
                var a = this;
                a.addBubble(), a.addDealIcon(), a.rightNavIconJudge(), a.bannerWeek12To15(), a.drawRightNav12To15(), a.drawRightNav0302To0308(), a.drawRightNav0305(), a.drawRightNav0306(), a.drawRightNav0309()
            }, addDealIcon: function () {
                var a = $(".dealbox .deal");
                a.each(function () {
                    var a = $(this);
                    (1 == a.data("cu_con") || 2 == a.data("cu_con")) && (a.find(".newicon").hide(), a.find(".icon_discount").hide(), a.find(".icon_new").hide(), a.find(".icon_brand").hide(), a.find(".youhuiquan").hide(), a.find(".con").append('<span class="isdacu dacuCon' + a.data("cu_con") + '"></span>'))
                })
            }, addBubble: function () {
                if ("shop.zhe800.com" != window.location.hostname && 1 == window.addIcon0209_0215) {
                    var a = "<em class='bubble-0209'></em>",
                        n = $(".side_nav .content");
                    n.find(".bd ul .nav_temai").append(a)
                }
            }, rightNavIconJudge: function () {
                if (1 == window.RightIconPop || 1 == window.dacuto0305)
                    if ("" != $.cookie("ppinf")) tuanpub.headQueue.push(tuanpub.getModule("dacu2015_diedai").drawRightIconNav);
                    else {
                        if ($(".righticonnav").length > 0) return;
                        tuanpub.getModule("dacu2015_diedai").drawRightIconNav(), tuanpub.headQueue.push(tuanpub.getModule("dacu2015_diedai").rightNavIconJudge)
                    }
            }, drawRightIconNav: function () {
                var a = new $.Buffers;
                if (!(1 == window.rightIconHidden61763 || $(".righticonnav").length > 0 || "" != $.cookie("ppinf") && tuanpub.opts.user && 1 == tuanpub.opts.user.checkin_status.channels.web)) {
                    if ($(".secjunav.ranking_list").length > 0 || $(".secjunav_fix.ranking_list").length > 0) return a.push('<style type="text/css">.righticonnav{bottom: 28%;}</style>'), !1;
                    window.screen.availHeight >= 768 ? $("#seclevel").length > 0 || $("#junav1").length > 0 ? a.push('<style type="text/css">.righticonnav{bottom: 15%;}</style>') : a.push('<style type="text/css">.righticonnav{bottom: 28%;}</style>') : window.screen.availHeight > 650 && window.screen.availHeight < 768 ? a.push('<style type="text/css">.righticonnav{bottom: 0;}</style>') : a.push('<style type="text/css">.righticonnav{display:none;}</style>'), $("body").append(a.toString()), 1 == window.dacuto0305 ? $("body").append('<a href="javascript:void(0)" class="righticonnav"><span class="close_right_icon"></span><img src="http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/qiandao_icon_jifen.gif" /></a>') : $("body").append('<a href="javascript:void(0)" class="righticonnav"><span class="close_right_icon"></span><img src="http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/right_icon_nav_new.gif" /></a>'), $("body").delegate(".righticonnav .close_right_icon", "click", function () {
                        $(".righticonnav").remove()
                    }), $("body").delegate(".righticonnav img", "click", function () {
                        $(".uncheck").length > 0 && $(".uncheck .checkin-icon").click(), $(".unsignin .tab-tip,.checked .tab-tip").show(), $(".unsignin .tab-tip,.checked .tab-tip").animate({
                            opacity: 1,
                            right: 34
                        }, 300)
                    })
                }
            }, init: function () {}, drawRightNav12To15: function () {
                var a, n = new $.Buffers;
                if ($(window), $(".secjunav.ranking_list").length > 0 || $(".secjunav_fix.ranking_list").length > 0) return n.push('<style type="text/css">.righticonnav{bottom: 28%;}</style>'), !1;
                if (1 == window.addRightNav0212) {
                    var t = [];
                    if (t = window.rightNav0212, n.push('<div  id="dacu0212Nav">'), n.push('<div class="rightNav_li rightNav_li_top" ></div>'), !(void 0 == t || t.length < 1)) {
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e];
                            n.push('<a target="_blank" href="' + i.href + '" class="rightNav_li ' + i.clz + '"></a>')
                        }
                        if (n.push(' <a href="javascript:void(0);" class="rightNav_li rightNav_li_bottom"></a>'), n.push("</div>"), $("body").append(n.toString()).append("<style type='text/css'>#dacu0212Nav.affix{display:block;} .side-panel .uncheck .tab-tip{display:none!important;}</style>"), $("#dacu0212Nav").addClass("dc1225_rightNav"), a = $("#dacu0212Nav"), void 0 != a) {
                            var s = (document.body.scrollTop ? document.body : document.documentElement, "400px"),
                                o = 0;
                            $("#seclevel").length > 0 ? o = "45px !important" : $("#junav1").length > 0 && (o = "80px !important"), $("#head_nav").length && (s = $("#head_nav").offset().top + 50 + "px"), $("body").append('<style type="text/css">.dc1225_rightNav{top:' + s + ";_top:" + (parseInt(s) + 200 + "px") + "} .dc1225_rightNav.affix, .side_nav.affix{top:" + o + ";}</style>"), $(".secjunav.ranking_list").length > 0 && $("<style>.side_nav.affix{top:70px !important}</style>").appendTo("body"), $("body").append('<div id="totop-icon" style="position:fixed;bottom:0px;height:1px;width:1px;"></div>'), a.find(".rightNav_li_bottom").bind("click", function () {
                                var a = document.body.scrollTop ? document.body : document.documentElement;
                                $(a).animate({
                                    scrollTop: 0
                                }, 300)
                            }), topFix = ($("#totop-icon").offset().top - $("#totop-icon").height() - $("body").scrollTop() - 546) / 2 - 30, 0 > topFix && (topFix = 0), $("body").append(n.toString()).append('<style type="text/css">.dc1225_leftNav.affix{top:' + topFix + "px!important;}</style>"), a.affix({
                                top: 100,
                                maxTop: $(".about").offset().top - 20,
                                bottom: 170
                            })
                        }
                    }
                }
            }, bannerWeek12To15: function () {
                var a, n = new $.Buffers;
                if ($side_nav = $(".side_nav"), rtop = "400px", atop = 0, 1 == window.dacuBanner0212 && (a = window.bannerArray0212, !(a.length < 2))) {
                    n.push('<div class="dacuBanner0212">');
                    for (var t = 0; t < a.length; t++) n.push('<div class="' + a[t].clz + '"><a target="_blank" href="' + a[t].href + '"></a></div>');
                    n.push("</div>"), $("body").append('<style type="text/css">.banner_column{display: none;}</style>'), $("#thisadA").length > 0 ? ($("#thisadA").after(n.toString()), $("body").append('<style type="text/css">.thisadA img{padding:0px;}</style>')) : $("#junav").after(n.toString()), $(window).on("scroll.bannerAffix", function () {
                        $("#dacu0212Nav").hasClass("affix") ? $(".side_nav").addClass("bannerSideNavJudge") : $("#dacu0212Nav").hasClass("affix") || $(".side_nav").hasClass("bannerSideNavJudge") && $(".side_nav").removeClass("bannerSideNavJudge")
                    })
                }
            }, drawRightNav0302To0308: function () {
                var a, n = new $.Buffers,
                    t = ($(window), 0),
                    e = window.bannerWeek0302To0308Array;
                if (!(void 0 == e || e.length < 4 || $(".secjunav.ranking_list").length > 0)) {
                    $("body").append('<style type="text/css">.banner_column{display: none;}</style>'), n.push('<div  id="dacu0302Nav" class="rNav0302">'), n.push('<div class="rightNav_li rightNav_li_top" ></div>');
                    for (var i = 0, s = e.length; s > i; i++) n.push('<a target="_blank" href="' + e[i].href + '" class="rightNav_li ' + e[i].cls + '">' + e[i].word + "</a>");
                    n.push(' <a href="javascript:void(0);" class="rightNav_li rightNav_li_bottom">TOP</a>'), n.push("</div>"), $("body").append(n.toString()).append("<style type='text/css'>#dacu0302Nav.affix{display:block;} .side-panel .uncheck .tab-tip{display:none!important;}</style>"), a = $("#dacu0302Nav"), $("#seclevel").length > 0 ? t = "45px !important" : $("#junav1").length > 0 && (t = "80px !important"), $("body").append('<style type="text/css">#dacu0302Nav.affix, .side_nav.affix{top:' + t + ";}</style>"), a.affix({
                        top: 100,
                        maxTop: $(".about").offset().top - 20,
                        bottom: 170
                    }), a.find(".rightNav_li_bottom").bind("click", function () {
                        var a = document.body.scrollTop ? document.body : document.documentElement;
                        $(a).animate({
                            scrollTop: 0
                        }, 300)
                    })
                }
            }, drawRightNav0305: function () {
                var a, n = new $.Buffers;
                if ($(window), $(".secjunav.ranking_list").length > 0 || $(".secjunav_fix.ranking_list").length > 0) return n.push('<style type="text/css">.righticonnav{bottom: 28%;}</style>'), !1;
                if (1 == window.addRightNav0305) {
                    var t = [];
                    if (t = window.rightNav0305, n.push('<div  id="dacu0305Nav">'), n.push('<div class="rightNav_li rightNav_li_top" ></div>'), !(void 0 == t || t.length < 1)) {
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e];
                            n.push('<a target="_blank" href="' + i.href + '" class="rightNav_li ' + i.clz + '"></a>')
                        }
                        if (n.push(' <a href="javascript:void(0);" class="rightNav_li rightNav_li_bottom"></a>'), n.push("</div>"), $("body").append(n.toString()).append("<style type='text/css'>#dacu0305Nav.affix{display:block;} .side-panel .uncheck .tab-tip{display:none!important;}</style>"), a = $("#dacu0305Nav"), void 0 != a) {
                            var s = (document.body.scrollTop ? document.body : document.documentElement, "400px"),
                                o = 0;
                            $("#seclevel").length > 0 ? o = "45px !important" : $("#junav1").length > 0 && (o = "80px !important"), $("#head_nav").length && (s = $("#head_nav").offset().top + 50 + "px"), $("body").append('<style type="text/css">#dacu0305Nav.affix, .side_nav.affix{top:' + o + ";}</style>"), $("body").append('<div id="totop-icon" style="position:fixed;bottom:0px;height:1px;width:1px;"></div>'), a.affix({
                                top: 100,
                                maxTop: $(".about").offset().top - 20,
                                bottom: 170
                            }), a.find(".rightNav_li_bottom").bind("click", function () {
                                var a = document.body.scrollTop ? document.body : document.documentElement;
                                $(a).animate({
                                    scrollTop: 0
                                }, 300)
                            })
                        }
                    }
                }
            }, drawRightNav0306: function () {
                var a, n = new $.Buffers;
                if ($(window), $(".secjunav.ranking_list").length > 0 || $(".secjunav_fix.ranking_list").length > 0) return n.push('<style type="text/css">.righticonnav{bottom: 28%;}</style>'), !1;
                if (1 == window.addRightNav0306) {
                    var t = [];
                    if (t = window.rightNav0306, n.push('<div  id="dacu0306Nav">'), n.push('<div class="rightNav_li rightNav_li_top" ></div>'), !(void 0 == t || t.length < 1)) {
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e];
                            n.push('<a target="_blank" href="' + i.href + '" class="rightNav_li ' + i.clz + '"></a>')
                        }
                        if (n.push(' <a href="javascript:void(0);" class="rightNav_li rightNav_li_bottom"></a>'), n.push("</div>"), $("body").append(n.toString()).append("<style type='text/css'>#dacu0306Nav.affix{display:block;} .side-panel .uncheck .tab-tip{display:none!important;}</style>"), a = $("#dacu0306Nav"), void 0 != a) {
                            var s = (document.body.scrollTop ? document.body : document.documentElement, "400px"),
                                o = 0;
                            $("#seclevel").length > 0 ? o = "45px !important" : $("#junav1").length > 0 && (o = "80px !important"), $("#head_nav").length && (s = $("#head_nav").offset().top + 50 + "px"), $("body").append('<style type="text/css">#dacu0306Nav.affix, .side_nav.affix{top:' + o + ";}</style>"), $("body").append('<div id="totop-icon" style="position:fixed;bottom:0px;height:1px;width:1px;"></div>'), a.affix({
                                top: 100,
                                maxTop: $(".about").offset().top - 20,
                                bottom: 170
                            }), a.find(".rightNav_li_bottom").bind("click", function () {
                                var a = document.body.scrollTop ? document.body : document.documentElement;
                                $(a).animate({
                                    scrollTop: 0
                                }, 300)
                            })
                        }
                    }
                }
            }, drawRightNav0309: function () {
                var a, n = new $.Buffers;
                if ($(window), $(".secjunav.ranking_list").length > 0 || $(".secjunav_fix.ranking_list").length > 0) return n.push('<style type="text/css">.righticonnav{bottom: 28%;}</style>'), !1;
                if (1 == window.addRightNav0309) {
                    var t = [];
                    if (t = window.rightNav0309, n.push('<div  id="dacu0309Nav">'), n.push('<div class="rightNav_li rightNav_li_top" ></div>'), !(void 0 == t || t.length < 1)) {
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e];
                            n.push('<a target="_blank" href="' + i.href + '" class="rightNav_li ' + i.clz + '"></a>')
                        }
                        if (n.push(' <a href="javascript:void(0);" class="rightNav_li rightNav_li_bottom"></a>'), n.push("</div>"), $("body").append(n.toString()).append("<style type='text/css'>#dacu0309Nav.affix{display:block;} .side-panel .uncheck .tab-tip{display:none!important;}</style>"), a = $("#dacu0309Nav"), void 0 != a) {
                            var s = (document.body.scrollTop ? document.body : document.documentElement, "400px"),
                                o = 0;
                            $("#seclevel").length > 0 ? o = "45px !important" : $("#junav1").length > 0 && (o = "80px !important"), $("#head_nav").length && (s = $("#head_nav").offset().top + 50 + "px"), $("body").append('<style type="text/css">#dacu0309Nav.affix, .side_nav.affix{top:' + o + ";}</style>"), a.affix({
                                top: 100,
                                maxTop: $(".about").offset().top - 20,
                                bottom: 170
                            }), a.find(".rightNav_li_bottom").bind("click", function () {
                                var a = document.body.scrollTop ? document.body : document.documentElement;
                                $(a).animate({
                                    scrollTop: 0
                                }, 300)
                            })
                        }
                    }
                }
            }
        }), 1 == window.RightIconPop && ($.getCss("http://z5.tuanimg.com/v2/dacu/css/dacu2015_diedai_60127patch.css?v=64868_201502041736"), tuanpub.addModule("signin", {
            signinQueue: [],
            unLoginPanelAdData: null,
            loginPanelAdData: null,
            animateArray: [],
            init: function () {
                var a = $("#signinid").data("qq-g-num") || "",
                    n = $("#signinid").data("qq-g-label") || "",
                    t = function () {
                        var t = this;
                        t.hasClass("sign_panel") ? t.find(".gotuan").before('<p class="addQQ">' + n + "<span>" + a + "</span></p>") : t.hasClass("sign_board") && t.find(".ft .article").append("<p>" + n + "<em>" + a + "</em></p>"), t.data("qqgroup", !0)
                    },
                    e = {
                        addtion: $("#signinid").data("qqgroup") ? !1 : t,
                        callback: function () {
                            $("#signinid a.signin,.side_panel .signin").unbind("click").bind("click", function (a) {
                                return a.preventDefault(), tuanpub.login() ? !1 : (tuanpub.getModule("dialogPP").init(), !1)
                            })
                        }
                    };
                tuanpub.login() || this.createPanel(e)
            }, calendar: function (a) {
                var n = this,
                    t = new Date,
                    e = t.getFullYear(),
                    i = t.getMonth(),
                    s = t.getDate(),
                    o = new Date(e, i, 1),
                    d = o.getDay(),
                    c = new Date(new Date(e, i + 1, 1).getTime() - 864e5).getDate(),
                    l = new Date(o.getTime() - 1e3 * 3600 * 24 * d),
                    r = d + c,
                    p = s + d - 1,
                    u = [],
                    h = new Date(e, i, 1),
                    g = new Date(new Date(e, i + 1, 1).getTime() - 864e5),
                    v = h.getMonth() + 1,
                    _ = g.getMonth() + 1;
                if ("days" === a) return t.getDate() + d;
                "array" === $.type(a) && (u = a), code = new $.Buffers, code.push('<div class="tit"><div class="now_month">' + (i + 1) + "/" + s + '</div><div class="now_year">' + e + '</div></div><table class="calendar"><tr><th class="weekend">日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class="weekend">六</th></tr>'), code.push("<tr>");
                for (var f = 0; 42 > f; f++) code.push('<td data-sign="' + u[f] + '" ' + (("1" == u[f] || "2" == u[f]) && f >= d && r > f ? ' class="qd_calendar' + f + " on " + e + "-" + (i + 1) + "-" + (l.getDate() < 10 ? "0" + l.getDate() : l.getDate()) + '"' : d > f || f >= r ? " class='disable' " : "class='qd_calendar" + f + " " + e + "-" + (i + 1) + "-" + (l.getDate() < 10 ? "0" + l.getDate() : l.getDate()) + "'") + ">" + l.getDate() + (f == p && f >= d && r > f ? "<a href='javascript:void(0)' class='get_nowaday'></a></td>" : "</td>")), l = new Date(l.getTime() + 864e5), 0 === (f + 1) % 7 && code.push("</tr><tr>");
                code.push("</tr>"), code.push("</table>");
                var h = h.getFullYear() + "-" + v + "-" + h.getDate(),
                    g = g.getFullYear() + "-" + _ + "-" + g.getDate(),
                    m = "/apicenter/ajax_api_cached/checkin_activity?login_status=1&start_time=%27" + h + "%27&end_time=%27" + g + "%27";
                return $.ajax({
                    url: m,
                    type: "GET",
                    dataType: "JSON",
                    success: function (a) {
                        n.loginPanelAdData = a;
                        var t, e = a.calendar;
                        for (t in e) e.hasOwnProperty(t) && e[t] && $("." + t).append("<div class='hdqd'><p>" + e[t] + "</p></div>")
                    }
                }), code.toString()
            }, signQueue: new $.Buffers("queue"),
            sideAd: function (a) {
                var n = '<a href="{{#src}}" title="{{#src_desc}}" target="{{#target}}"><img src="{{#image_src}}" alt="{{#image_desc}}" /></a>';
                return a ? (a.src || (n = '<img src="{{#image_src}}" alt="{{#image_desc}}" />'), $.ParseTpl(n, a)) : '<div class="tit">小贴士</div><div class="con"><h3>折800商品的更新时间：</h3><p>折800每天更新两次。<br />上午9点，更新近千款；<br />晚上20点，更新百款左右；</p><i class="icon_ft"></i></div>'
            }, createPanel: function (a) {
                var n = this,
                    t = new Date;
                t.getDate(), t.getMonth(), $.each(this.animateArray, function () {
                    this.killInterval && this.killInterval()
                });
                var e = $.extend({
                        type: !1,
                        container: $("#signinid"),
                        return_to: $("#signinid").attr("return_to") || "http://www.zhe800.com/login",
                        addtion: null,
                        callback: null,
                        data: null
                    }, a),
                    i = e.container instanceof jQuery ? e.container : jQuery(e.container),
                    s = ({
                        text: i.data("side-text"),
                        link: i.data("side-link")
                    }, new $.Buffers),
                    n = this,
                    o = tuan800ued.getModule("sidePanel");
                if (e.type === !1) i.hasClass("sign_board") && i.removeClass("sign_board").addClass("sign_panel"), i.hasClass("signin_on") && i.removeClass("signin_on"), s.push('<a class="signin qdicon" href="' + e.return_to + '"></a>'), s.push('<div class="dropdown-menu">'), s.push('<div class="activity"></div><div class="sign_ad"><div class="ad1"></div><div class="ad2"></div><div class="ad3"></div></div>'), s.push('<div class="info_notice"><div class="task_icon"></div><div class="scroll_downwords"><div class="down_words"></div></div></div></div>'), i.empty().html(s.toString()), n.unLoginPanelAdData ? n.createUnLogininPanelAd() : $.ajax({
                    url: "/apicenter/ajax_api_cached/checkin_activity?login_status=0",
                    type: "GET",
                    dataType: "JSON",
                    success: function (a) {
                        n.unLoginPanelAdData = a, n.createUnLogininPanelAd()
                    }
                });
                else {
                    var d = e.data || tuanpub.opts.user.checkin_status,
                        c = new Date;
                    switch (c.getMonth(), new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"), e.type) {
                    case "1":
                        s.push('<a href="javascript:void(0)" class="signin qdicon" id="dlqd"></a>'), s.push('<div class="dropdown-menu"><div class="title_user_status"></div>'), s.push(' <div class="ad_signin"><span class="gold_img"></span><span class="user_jifen">我的积分：<b>' + tuanpub.opts.user.score + '</b></span><span class="score_to_money">(可抵：<em></em>)</span><span class="current_today">已连续签到<b>' + d.day + '</b>天</span><span class="current_score_today">明日签到可得<b>' + d.tomorrow_score + "</b>分</span>"), s.push('     <span class="my_reward">我的红包：<em><b class="cash">' + d.red_packet + '</b>元</em></span><a class="hb_dh" href="javascript:void(0)"></a><a class="hb_gz" target="_blank" href="http://bbs.tuan800.com/event/topics/1793561">活动详细规则请查看>></a></div>'), s.push('     <div class="article">' + n.calendar(d.sign_info || tuanpub.opts.user.checkin_status.sign_info) + "</div>"), s.push('     <div class="dialog_60127_getconpus">'), s.push('         <span class="close"></span>'), s.push('         <div class="inner">'), s.push('             <p class="title">下载客户端兑换<i>优惠券</i></p>'), s.push('             <p class="grey"><em>1</em>微信扫码下载客户端</p>'), s.push('             <p class="scan"><img src="http://z5.tuanimg.com/v2/dacu/img/dacu2015_diedai_sigin_rq64868.jpg"></p>'), s.push('             <p class="grey"><em>2</em>进入客户端个人中心-我的优惠券</p>'), s.push('             <p class="grey anhao"><em>3</em>输入暗号“<span>我要<i></i>元</span>”进行兑换</p>'), s.push('             <p class="green"><a href="http://bbs.tuan800.com/event/topics/1793561" target="_blank">兑换攻略>></a></p>'), s.push("         </div>"), s.push("     </div>"), s.push('     <div class="dialog_62215_conpus">'), s.push("         <ul>");
                        for (var l = Math.floor(d.red_packet), r = 1; 7 >= r; r++) l >= r ? s.push('<li class="can-convert" data-num="' + r + '"><span>' + r + '元优惠券</span><a class="convert">兑换</a></li>') : s.push('<li class="cannot-convert" data-num="' + r + '"><span>' + r + "元优惠券</span><em>需红包满" + r + "元</em></li>");
                        s.push("         </ul>"), s.push('         <a class="close">返回领取红包>></a>'), s.push("     </div>"), s.push(" </div></div>"), i.hasClass("sign_panel") && i.removeClass("sign_panel").addClass("sign_board"), i.removeClass("sign_board_unchecked"), i.hasClass("signin_on") || i.addClass("signin_on"), i.empty().html(s.toString()), i.find(".ft a").each(function () {
                            var a = $(this);
                            /\>\>$/.test(a.text()) || a.text(a.text() + ">>")
                        }), $(".article .calendar .get_nowaday").parent().css("color", "#cb1f24"), $(".sign_board .article .calendar td.on").css("background", "none"), $(".sign_board .article .calendar td.on").each(function () {
                            var a = $(this);
                            1 == a.data("sign") ? a.append("<img class='snowflake' style='position:absolute;left: 4px; top: -4px;width:35px;height35px;' src='http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/dacu_flag1.png' />") : 2 == a.data("sign") && a.append("<img class='snowflake' style='position:absolute;left:12px; top: 5px;' src='http://z5.tuanimg.com/v2/core/img/qd_icon5.png' />");
                            for (var n = 1; 12 > n; n++) {
                                var t = n;
                                10 > n && (t = "0" + n), a.hasClass("2015-1-" + t) && (a.find(".snowflake").attr("src", "http://z5.tuanimg.com/v2/core/img/qd_icon5.png"), a.find(".snowflake").css({
                                    width: "23px",
                                    height: "23px",
                                    left: "12px",
                                    top: "1px"
                                }))
                            }
                        }), $("body").append("<style>.sign_board .calendar .get_nowaday:hover{background:none;}</style>"), n.createUncheckPanelAd(), setTimeout(function () {
                            $(".hb_dh").click(function (a) {
                                a.preventDefault(), $(".dropdown-menu .dialog_62215_conpus").show(), $(".dropdown-menu .article").hide(), $(".dropdown-menu .dialog_60127_getconpus").hide()
                            }), $(".dialog_62215_conpus .can-convert").click(function (a) {
                                a.preventDefault();
                                var n = $(this);
                                $(".dropdown-menu .dialog_62215_conpus").hide(), $(".dropdown-menu .dialog_60127_getconpus").show(), $(".dropdown-menu .dialog_60127_getconpus .anhao span i").text(n.data("num"))
                            }), $(".dropdown-menu .dialog_62215_conpus .close").click(function (a) {
                                a.preventDefault(), $(".dropdown-menu .dialog_62215_conpus").hide(), $(".dropdown-menu .article").show()
                            }), $(".dropdown-menu .dialog_60127_getconpus .close").click(function (a) {
                                a.preventDefault(), $(".dropdown-menu .dialog_60127_getconpus").hide(), $(".dropdown-menu .article").show()
                            })
                        }, 0), $(".righticonnav").length > 0 && $(".righticonnav").remove();
                        break;
                    case "0":
                        s.push('<a href="javascript:void(0)" class="signin qdicon signin_unchecked" id="dlqd"></a>'), s.push('<div class="dropdown-menu"><div class="title_user_status"></div>'), s.push('<div class="ad_signin"><span class="gold_img"></span><span class="user_jifen">我的积分：<b>' + tuanpub.opts.user.score + '</b></span><span class="score_to_money">(可抵：<em></em>)</span><span class="current_today">已连续签到<b>' + d.day + '</b>天</span><span class="current_score_today">今日签到可得<b>' + d.current_score + "</b>分</span>"), s.push('<span class="my_reward">我的红包：<em><b>' + d.red_packet + '</b>元</em></span><a class="hb_dh" href="javascript:void(0)"></a><a target="_blank" class="hb_gz" href="http://bbs.tuan800.com/event/topics/1793561">活动详细规则请查看>></a></div>'), s.push('<div class="article">' + n.calendar(d.sign_info || tuanpub.opts.user.checkin_status.sign_info) + "</div>"), s.push('     <div class="dialog_60127_getconpus">'), s.push('         <span class="close"></span>'), s.push('         <div class="inner">'), s.push('             <p class="title">下载客户端兑换<i>优惠券</i></p>'), s.push('             <p class="grey"><em>1</em>微信扫码下载客户端</p>'), s.push('             <p class="scan"><img src="http://z5.tuanimg.com/v2/dacu/img/dacu2015_diedai_sigin_rq64868.jpg"></p>'), s.push('             <p class="grey"><em>2</em>进入客户端个人中心-我的优惠券</p>'), s.push('             <p class="grey anhao"><em>3</em>输入暗号“<span>我要<i></i>元</span>”进行兑换</p>'), s.push('             <p class="green"><a href="http://bbs.tuan800.com/event/topics/1793561" target="_blank">兑换攻略>></a></p>'), s.push("         </div>"), s.push("     </div>"), s.push('     <div class="dialog_62215_conpus">'), s.push("         <ul>");
                        for (var l = Math.floor(d.red_packet), r = 1; 7 >= r; r++) l >= r ? s.push('<li class="can-convert" data-num="' + r + '"><span>' + r + '元优惠券</span><a class="convert">兑换</a></li>') : s.push('<li class="cannot-convert" data-num="' + r + '"><span>' + r + "元优惠券</span><em>需红包满" + r + "元</em></li>");
                        s.push("         </ul>"), s.push('         <a class="close">返回领取红包>></a>'), s.push("     </div>"), s.push("</div></div>"), i.hasClass("sign_panel") && i.removeClass("sign_panel").addClass("sign_board sign_board_unchecked"), i.hasClass("signin_on") || i.addClass("signin_on"), i.empty().html(s.toString()), i.find(".ft a").each(function () {
                            var a = $(this);
                            /\>\>$/.test(a.text()) || a.text(a.text() + ">>")
                        }), $(".article .calendar .get_nowaday").parent().css("color", "#cb1f24"), $(".sign_board .article .calendar td.on").css("background", "none"), $("body").append("<style>.sign_board .calendar .get_nowaday:hover{background: url(http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/qiandao_60127_icon.png) no-repeat -97px -75px;}</style>"), $(".sign_board .article .calendar td.on").each(function () {
                            var a = $(this);
                            1 == a.data("sign") ? a.append("<img class='snowflake' style='position:absolute;left: 4px; top: -4px;width:35px;height35px;' src='http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/dacu_flag1.png' />") : 2 == a.data("sign") && a.append("<img class='snowflake' style='position:absolute;left:12px; top: 5px;' src='http://z5.tuanimg.com/v2/core/img/qd_icon5.png' />");
                            for (var n = 1; 12 > n; n++) {
                                var t = n;
                                10 > n && (t = "0" + n), a.hasClass("2015-1-" + t) && (a.find(".snowflake").attr("src", "http://z5.tuanimg.com/v2/core/img/qd_icon5.png"), a.find(".snowflake").css({
                                    width: "23px",
                                    height: "23px",
                                    left: "12px",
                                    top: "1px"
                                }))
                            }
                        }), setTimeout(function () {
                            $(".hb_dh").click(function (a) {
                                a.preventDefault(), $(".dropdown-menu .dialog_62215_conpus").show(), $(".dropdown-menu .article").hide(), $(".dropdown-menu .dialog_60127_getconpus").hide()
                            }), $(".dialog_62215_conpus .can-convert").click(function (a) {
                                a.preventDefault();
                                var n = $(this);
                                $(".dropdown-menu .dialog_62215_conpus").hide(), $(".dropdown-menu .dialog_60127_getconpus").show(), $(".dropdown-menu .dialog_60127_getconpus .anhao span i").text(n.data("num"))
                            }), $(".dropdown-menu .dialog_62215_conpus .close").click(function (a) {
                                a.preventDefault(), $(".dropdown-menu .dialog_62215_conpus").hide(), $(".dropdown-menu .article").show()
                            }), $(".dropdown-menu .dialog_60127_getconpus .close").click(function (a) {
                                a.preventDefault(), $(".dropdown-menu .dialog_60127_getconpus").hide(), $(".dropdown-menu .article").show()
                            })
                        }, 0), n.createUncheckPanelAd()
                    }
                } if (e.container.data("status", e.type), e.callback) try {
                    e.callback.call(e.container, null)
                } catch (p) {
                    console && console.log(p)
                }
                e.addtion && n.signQueue.push(e.addtion), $.each(n.signQueue.toArray(), function (a, n) {
                    "function" === $.type(n) && n.call(e.container, null)
                }), o && ($(".side_panel").length ? o.createSignPanel(e.type) : o.init(e.type))
            }, createUnLogininPanelAd: function () {
                var a = this;
                if (!a.unLoginPanelAdData) return setTimeout(function () {
                    a.createUnLogininPanelAd()
                }, 100), void 0;
                var n, t, e = this.unLoginPanelAdData;
                if (e.not_checkin_ad.down_words_link ? (t = e.not_checkin_ad.down_words_out_way ? e.not_checkin_ad.down_words_out_way : "_blank", n = "<a target='" + t + "' href='" + e.not_checkin_ad.down_words_link + "'>" + e.not_checkin_ad.down_words + "</a>") : n = "<i>" + e.not_checkin_ad.down_words + "</i>", $(".info_notice .down_words").html(n), e.not_checkin_ad.up_words.length > 30) {
                    var i = 27 * (e.not_checkin_ad.up_words.length / 6 + 1);
                    $(".sign_panel .dropdown-menu .activ_signin .activ_info .activ_words p").css("height", i);
                    var s = $(".r_con  .activ_words").last().parent();
                    s.marquee({
                        container: ".activ_words",
                        item: "p",
                        type: "vertical"
                    }), this.animateArray.push(s)
                }
                var o, d, c, l, r = e.not_checkin_ad.image2.link_url,
                    p = e.not_checkin_ad.image3.link_url,
                    u = e.not_checkin_ad.image4.link_url;
                o = '<a class="not_checkin_img1" href="javascript:void(0)"><img src="' + e.not_checkin_ad.image1.image_url + '" ></img></a>', d = "NULL" == r || "" == r || void 0 == r ? '<img src="' + e.not_checkin_ad.image2.image_url + '" ></img>' : "<a target=" + e.not_checkin_ad.image2.link_type + ' href="http://' + e.not_checkin_ad.image2.link_url + ' "><img src="' + e.not_checkin_ad.image2.image_url + '" ></img></a>', c = "NULL" == p || "" == p || void 0 == p ? '<img src="' + e.not_checkin_ad.image3.image_url + '" ></img>' : "<a target=" + e.not_checkin_ad.image3.link_type + ' href="http://' + e.not_checkin_ad.image3.link_url + ' "><img src="' + e.not_checkin_ad.image3.image_url + '" ></img></a>', l = "NULL" == u || "" == u || void 0 == u ? '<img src="' + e.not_checkin_ad.image4.image_url + '" ></img>' : "<a target=" + e.not_checkin_ad.image4.link_type + ' href="http://' + e.not_checkin_ad.image4.link_url + ' "><img src="' + e.not_checkin_ad.image4.image_url + '" ></img></a>', $(".dropdown-menu .activity").html(o), $(".sign_ad .ad1").html(d), $(".sign_ad .ad2").html(c), $(".sign_ad .ad3").html(l), $(".dropdown-menu .not_checkin_img1").unbind("click").bind("click", function (a) {
                    return a.preventDefault(), tuanpub.login() ? !1 : (tuanpub.getModule("dialogPP").init(), !1)
                })
            }, createUncheckPanelAd: function () {
                var a = this;
                if (!a.loginPanelAdData) return setTimeout(function () {
                    a.createUncheckPanelAd()
                }, 100), void 0;
                var n = this.loginPanelAdData;
                $(".dropdown-menu .score_to_money em").html("<i>¥</i>" + (tuanpub.opts.user.score * n.ratio.cash / n.ratio.score).toFixed(2));
                var t = new Date,
                    e = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
                n.calendar[e] && $(".sign_board .dropdown-menu .nowaday_date em").append(n.calendar[e])
            }, cookfunc: function (a) {
                if (!tuanpub.login()) return !1;
                $("#signinid"), $("#signinid").data("qq-g-num") || "", $("#signinid").data("qq-g-label") || "";
                var n = $.cookie("qd");
                qd_data = n.split("-");
                var t = qd_data[0],
                    e = (qd_data[2], qd_data[1] || 0),
                    i = $("#signinid").length > 0 ? $("#signinid").attr("info").split("-") : "1-2-3".split("-"),
                    s = (i[2], i[0]),
                    o = i[0],
                    d = i[0];
                e > 0 && 3 > e && (s = i[e], o = i[e - 1], d = i[e]), e >= 3 && (s = i[2], o = i[2], d = i[2]);
                var c = $("#signinid");
                switch (a.current_score && a.tomorrow_score && (s = o = a.current_score, d = a.tomorrow_score, c.attr("qdscore") || c.attr("qdscore", a.current_score + "-" + a.tomorrow_score)), t) {
                case "0":
                    this.createPanel({
                        type: t,
                        data: a,
                        callback: function () {
                            var n = tuanpub.login(),
                                t = n.idss.id2;
                            0 == t && tuanpub.opts.user.login_stauts.ck_times <= 3 ? $("#signinid .signin,.side_panel .signin").unbind("click").click(function () {
                                tuanpub.getModule("bindPhoneMod").init()
                            }) : setTimeout(function () {
                                $("#signinid .signin,.side_panel .signin,.dropdown-menu .more_jifen,.calendar .get_nowaday").unbind("click").click(function () {
                                    $.qdpost("/cn/checkin?checkin=1", a, $(this)), $(".hdts").remove()
                                })
                            }, 200)
                        }
                    });
                    break;
                case "1":
                    this.createPanel({
                        type: t,
                        data: a,
                        callback: function () {
                            $("#signinid .signin,.side_panel .signin").unbind("click")
                        }
                    })
                }
            }, action: function () {
                var a = new $.Buffers,
                    n = $.cookie("outoverlay");
                $("#head_nav .tooltip .close").trigger("click");
                var t = function () {
                        a.push('<b>今日是签到双倍积分日</b><br/>主站和手机客户端可分别签到领积分<br/><a target="_blank" href="http://www.tuan800.com/m/zhe800">去下载手机客户端</a>'), a = a.toString(), $("#signinid").tooltip({
                            msg: a,
                            offset: {
                                top: -60
                            }
                        }), $.cookie("outoverlay", !0, {
                            path: "/",
                            expires: 1,
                            domain: "zhe800.com"
                        })
                    },
                    e = tuanpub.opts.user.checkin_status || {};
                if (tuanpub.getModule("signin").cookfunc(e), 1 != e.is_double || n || 2 != e.status)
                    if (2 == e.status || n || 1 != e.is_double || 0 != e.channels.web || 0 != e.channels.mobile) {
                        if (1 == e.is_double && 0 == e.channels.web && 1 == e.channels.mobile && 2 != e.status && !$.cookie("signed")) {
                            var i = $.cookie("qd");
                            qd_data = i.split("-");
                            var s = qd_data[1] || 0,
                                o = $("#signinid").length > 0 ? $("#signinid").attr("info").split("-") : "1-2-3".split("-"),
                                d = o[0],
                                c = o[0],
                                l = o[0];
                            s > 0 && 3 > s && (d = o[s], c = o[s - 1], l = o[s]), s >= 3 && (d = o[2], c = o[2], l = o[2]);
                            var r = new $.Buffers,
                                p = function (a) {
                                    var n = a.split(/[\s\-\:]/);
                                    return n[1] = +n[1] - 1, new Function("return new Date(" + n.join(",") + ")")()
                                },
                                u = tuanpub.opts.user.current_time,
                                h = p(u).getTime(),
                                g = p("2014-12-30 0:0:0").getTime(),
                                v = p("2015-1-3 0:0:0").getTime(),
                                _ = h > g && v > h ? "元旦双签" : "周五签到";
                            r.push('<div class="friday app_signed"> <div class="con"> <h3>' + _ + "福利日</h3> <p>您已在客户端签到，今日积分+" + e.current_score + '，<br /> 点击以下按钮再次领积分</p> </div> <div class="ft"> <a href="http://www.zhe800.com/checkin" target="_blank" class="btn">活动详情</a> <a href="javascript:void(0)" id="signNow" class="btn_red close">领取积分</a> </div> </div>'), r = r.toString(), $.Dialogs({
                                id: "dialog_tishi_qiandao",
                                msg: r,
                                auto: !1,
                                closebtn: "a.close, span.close",
                                overlay: !0,
                                openfun: function () {
                                    $("#signNow").click(function () {
                                        var a = tuanpub.login(),
                                            n = a.idss.id2;
                                        0 == n && tuanpub.opts.user.login_stauts.ck_times <= 3 ? tuanpub.getModule("bindPhoneMod").init() : $.qdpost("/cn/checkin?checkin=1")
                                    })
                                }
                            })
                        }
                    } else t();
                else t()
            }, Queue: function () {
                tuanpub.login() || ($.cookie("qd", "", {
                    path: "/",
                    expires: -336,
                    domain: "zhe800.com"
                }), tuanpub.getModule("signin").init())
            }, Init: function () {}
        }))
    };
    "function" == typeof define && define.amd ? require(["jquery", "tuanpub", "jucore"], function () {
        a()
    }) : function () {
        a()
    }(jQuery)
}();