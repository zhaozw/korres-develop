! function (i) {
    tuan800ued.addModule("sidePanel", {
        Init: function () {
            var i = this;
            tuanpub.headQueue.push(function () {
                i.updateProfilePanel()
            })
        }, init: function (e, a) {
            void 0 === tuanpub.headQueue && (tuanpub.headQueue = new i.Buffers);
            var t = new i.Buffers,
                n = {},
                s = this,
                d = [],
                o = null;
            if (i("body").data("userversion")) {
                d = a || ["profile", "cart", "order", "coupons", "checkin", "qrcode", "faq", "gender", "safeguard", "feedback", "totop"];
                var c = i.cookie("user_version") ? i.cookie("user_version") : "def"
            } else d = a || ["profile", "cart", "order", "coupons", "checkin", "qrcode", "faq", "safeguard", "feedback", "totop"];
            n.profile = ' <div class="side-tab side-tab-top side-tab-profile"> <div class="tab-icon profile-icon"></div> <div class="tab-tip" id="sidePanel_login"> <div class="tab-loading qd_login"> <a class="closeCtrl" href="javascript: void(0);" title="关闭窗口"> <i class="close"> </i> </a> <div class="hc clear" id="login-panel"></div> </div> <div class="tab-icon arr-icon">◆</div> </div> </div>', n.cart = ' <div class="side-tab side-tab-top side-tab-cart"> <div class="tab-icon cart-icon"></div> <div class="tab-text">购物车</div> <div class="tab-sup"> <div class="tab-sup-bg"> <div class="tab-sup-bd">0</div> </div> </div> <a href="http://cart.zhe800.com/cart" target="_blank">购物车</a> </div>', n.order = ' <div class="side-tab side-tab-top side-tab-order"> <div class="tab-icon order-icon"><a href="http://shop.zhe800.com/my/orders" target="_blank"></a></div> <div class="tab-tip"><a href="http://shop.zhe800.com/my/orders" target="_blank">我的订单</a><div class="tab-icon arr-icon">◆</div> </div> </div>', n.coupons = ' <div class="side-tab side-tab-top side-tab-coupons"> <div class="tab-icon coupons-icon"><a href="http://shop.zhe800.com/my/coupons" target="_blank"></a></div> <div class="tab-tip"><a href="http://shop.zhe800.com/my/coupons" target="_blank">我的优惠券</a><div class="tab-icon arr-icon">◆</div> </div> </div>', n.checkin = ' <div class="side-tab side-tab-bottom side-tab-checkin"> <div class="tab-icon checkin-icon"></div> <div class="tab-tip"><div class="tab-icon arr-icon">◆</div> </div> </div>', n.qrcode = ' <div class="side-tab side-tab-bottom side-tab-qrcode"> <div class="tab-icon qrcode-icon"><a href="http://www.zhe800.com/app" target="_blank"></a></div> <div class="tab-tip"><a href="http://www.zhe800.com/app" target="_blank"></a><i class="close"></i><div class="tab-icon arr-icon">◆</div> </div> </div>', n.faq = ' <div class="side-tab side-tab-bottom side-tab-faq"> <div class="tab-icon faq-icon"><a href="http://www.zhe800.com/help_center" target="_blank"></a></div> <div class="tab-tip"><a href="http://www.zhe800.com/help_center" target="_blank">常见问题</a><div class="tab-icon arr-icon">◆</div> </div> </div>', n.gender = ' <div class="side-tab side-tab-bottom side-tab-gender"> <div class="tab-icon gender-icon ' + c + '"></div> <div class="tab-tip" id="userversion"><span>人群</span><a href="http://www.zhe800.com?userversion=def" data-version="def" class="gender-version-def on">默认</a> <a href="http://www.zhe800.com?userversion=lama" title="选择后，将优先展示偏辣妈商品" data-version="lama" class="gender-version-lama">辣妈</a><a href="http://www.zhe800.com?userversion=woman" title="选择后，将优先展示偏女性商品" data-version="woman" class="gender-version-woman">女</a> <a href="http://www.zhe800.com?userversion=man" title="选择后，将优先展示偏男性商品" data-version="man" class="gender-version-man">男</a> <div class="tab-icon arr-icon">◆</div> </div> </div>', n.safeguard = ' <div class="side-tab side-tab-bottom side-tab-safeguard"> <div class="tab-icon safeguard-icon"> <a href="http://www.zhe800.com/help/cs_support" target="_blank"></a> </div> <div class="tab-tip"><a href="http://www.zhe800.com/help/cs_support" target="_blank">消费保障</a><div class="tab-icon arr-icon">◆</div> </div> </div>', n.feedback = ' <div class="side-tab side-tab-bottom side-tab-feedback feedback_popup_handler"> <div class="tab-icon feedback-icon"></div> <div class="tab-tip">意见反馈<div class="tab-icon arr-icon">◆</div> </div> </div>', n.totop = ' <div class="side-tab side-tab-bottom side-tab-totop thide" id="goTop"> <div class="tab-icon totop-icon"></div> <div class="tab-tip">返回顶部<div class="tab-icon arr-icon">◆</div> </div> </div>', t.push('<div class="side-panel side_panel">');
            for (var r in d) t.push(n[d[r]]);
            t.push("</div>"), o = i(t.toString()), o.insertAfter("#toolbar"), i(".side-tab-top").each(function (e) {
                i(this).addClass("side-tab-top" + e)
            }), i(".side-tab-bottom").each(function (e) {
                i(this).addClass("side-tab-bottom" + (i(".side-tab-bottom").length - e - 1))
            }), o.find("#goTop").bind("click", function () {
                var e = document.body.scrollTop ? document.body : document.documentElement;
                i(e).animate({
                    scrollTop: 0
                }, 300), window._gaq && _gaq.push(["_trackPageview", "/PageAction/left_menu/Top"])
            }), i(window).scroll(function () {
                var e = i(this).scrollTop();
                e > 0 ? o.find("#goTop").removeClass("thide") : o.find("#goTop").addClass("thide")
            });
            var l;
            i(".side-tab").bind("mouseenter", function () {
                var e = i(this),
                    a = e.find(".tab-tip").eq(0);
                return a.length ? (e.find("#login-panel").length > 0 && "" === e.find("#login-panel").html() && PassportSC.drawPassportNew("login-panel", tuanpub.getModule("dialogPP").ppTpl, {
                    appid: 3003,
                    t: tuanpub.getModule("dialogPP")
                }), setTimeout(function () {
                    a[0].style.display = "block"
                }, 210), l = setTimeout(function () {
                    a.animate({
                        opacity: 1,
                        right: 34
                    }, 300)
                }, 200), void 0) : !1
            }), i(".side-tab").bind("mouseleave", function () {
                if (i(this).hasClass("uncheck")) return !1;
                var e = i(this).find(".tab-tip").eq(0);
                return e.length ? (l && clearTimeout(l), e.animate({
                    opacity: 0,
                    right: 62
                }, 100, function () {
                    setTimeout(function () {
                        e.css("display", "none")
                    }, 200)
                }), void 0) : !1
            }), i(".side-tab-qrcode .tab-tip, .side-tab-profile .tab-tip").find("i.close").bind("click", function () {
                i(this).parents(".tab-tip").animate({
                    opacity: 0,
                    right: 62
                }, function () {
                    i(this).parents(".tab-tip").hide()
                })
            }), this.createSignPanel(e), i.each(s.selfQueue.toArray(), function (e, a) {
                "function" === i.type(a) && a.call(o, null)
            })
        }, OnLoad: function () {
            i("body").data("scroll") && setTimeout(function () {
                var e = i(".dealbox .deal").first().offset(),
                    a = 500;
                e && (a = e.top), i(window).scrollTop(a)
            }, 1e3)
        }, selfQueue: new i.Buffers,
        signQueue: new i.Buffers,
        createSignPanel: function (e) {
            function a() {
                var e = tuanpub.getModule("signin");
                return e.unLoginPanelAdData ? (setTimeout(function () {
                    e.unLoginPanelAdData.not_checkin_ad.up_words.length > 30 && i(".side-panel .activ_words").last().parent().marquee({
                        container: ".activ_words",
                        item: "p",
                        type: "vertical"
                    }), e.unLoginPanelAdData.not_checkin_ad.down_words.length > 38 && i(".side-panel .down_words").last().parent().marquee({
                        container: ".down_words",
                        item: "i"
                    })
                }, 50), void 0) : (setTimeout(a, 100), void 0)
            }

            function t() {
                var e = tuanpub.getModule("signin");
                return e.loginPanelAdData ? (e.loginPanelAdData.checkin_ad.words.length > 50 && i(".side-panel .notice_word").parent().marquee({
                    container: ".notice_word",
                    item: "p",
                    type: "vertical"
                }), void 0) : (setTimeout(t, 100), void 0)
            }
            var n = this,
                s = i(".side-panel"),
                d = s.find(".side-tab-checkin"),
                o = i("#signinid"),
                c = (s.find(".tab-icon"), i("#userversion"));
            if (c.length) {
                var r = i.cookie("user_version"),
                    r = r ? r : "def",
                    l = ".gender-version-" + r;
                i(".side-tab-gender .tab-tip a").removeClass("on"), i(".side-tab-gender").find(l).addClass("on"), i("#userversion a").click(function () {
                    var e = i(this).data("version");
                    i(".gender-icon").addClass(e), i.cookie("user_version", e, {
                        expires: 365,
                        domain: ".zhe800.com",
                        path: "/"
                    })
                })
            }
            if (i.getJSON("//localhost:8888/korres-webapp/cart/items_count.htm?callback=?", function (e) {
                e && e.data && 200 == e.status && "" != e.data && i(".side-tab-cart").find(".tab-sup-bd").text(e.data)
            }), d.length) {
                var p = "";
                if (i(".side-tab-checkin .tab-tip").delegate(".click_icon", "click", function () {
                    i(".r_con .click_icon").click()
                }).delegate(".leftclick_icon", "click", function () {
                    i(".r_con .leftclick_icon").click()
                }), "object" === i.type(e)) i.extend(opts, e);
                else {
                    switch (e) {
                    case !1:
                        d.find(".checkin-icon").unbind("click").bind("click", function (i) {
                            return i.preventDefault(), tuanpub.login() ? !1 : (tuanpub.getModule("dialogPP").init({
                                appid: 3004
                            }), !1)
                        }), i(".side-tab-checkin .tab-tip").hide(), a(), i(".side-tab-checkin").find(".tab-tip").removeClass("sign_board").addClass("sign_panel"), d.removeClass("checked uncheck").addClass("unsignin"), p = "outerHTML" in document.body ? o.find(".dropdown-menu").get(0).outerHTML : o.clone().find(".signin").remove().end().html();
                        break;
                    case "0":
                        var u = tuanpub.opts.user.checkin_status,
                            b = tuanpub.opts.user.checkin_status || {},
                            h = tuanpub.login(),
                            v = h.idss.id2;
                        i(".side-tab-checkin").trigger("mouseenter"), i(".side-tab-checkin").removeClass("unsignin checked").addClass("uncheck"), 0 == v && tuanpub.opts.user.login_stauts.ck_times <= 3 ? i(".side-tab-checkin.uncheck .tab-tip, .side-tab-checkin.uncheck .checkin-icon").unbind("click").click(function () {
                            tuanpub.getModule("bindPhoneMod").init()
                        }) : setTimeout(function () {
                            i(".side-tab-checkin.uncheck .tab-tip, .side-tab-checkin.uncheck .checkin-icon").unbind("click").bind("click", function () {
                                i(this).parent(".side-tab-checkin").hasClass("uncheck") && (d.removeClass("unsignin uncheck").addClass("dropin"), i.qdpost("/cn/checkin?checkin=1", b, i(this)), i(".hdts").remove())
                            })
                        }, 200), t(), p = '<span class="signin">点击领取<em>' + u.current_score + "</em>积分</span>", d.removeClass("checked unsignin"), i(".side-tab-checkin").find(".tab-tip").removeClass("sign_board").addClass("sign_panel");
                        break;
                    case "1":
                        p = "outerHTML" in document.body ? o.find(".dropdown-menu").get(0).outerHTML : o.clone().find(".signin").remove().end().html(), d.removeClass("unsignin uncheck dropin").addClass("checked"), i(".side-tab-checkin").find(".tab-tip").removeClass("sign_panel").addClass("sign_board")
                    }
                    d.data("status", e), i(".side-tab-checkin").find(".tab-tip .tab-icon").siblings().remove(), i(".side-tab-checkin").find(".tab-tip").prepend(p), i("#signinid").find(".dropdown-menu").length && !i("#signinid").find(".dropdown-menu:hidden").length && i(".side-tab-checkin").find(".tab-tip").hide()
                }
                i.each(n.signQueue.toArray(), function (e, a) {
                    "function" === i.type(a) && a.call(d, null)
                })
            }
        }, updateProfilePanel: function () {
            if ("yes" == tuanpub.opts.user.login_stauts.login) {
                var e = i(".qd_login"),
                    a = tuanpub.opts.user.login_stauts,
                    t = tuanpub.login().img_120;
                if (e.length && !e.find(".icon-level").length) {
                    var n = new i.Buffers;
                    n.push('<div class="profile-detail">'), n.push(' <div class="de-avatar"><a href="https://passport.zhe800.com/account/setting/avatar/edit" target="_blank"><img src="' + t + '" /></a></div>'), n.push(' <div class="de-data">'), n.push('     <h2>Hi, <a href="https://passport.zhe800.com/account/setting" target="_blank"><span>' + a.name + "</span></a></h2>"), n.push('     <p class="t-level"><a href="http://www.zhe800.com/profile/my_rank?utm_content=rightside" target="_blank">您是<span class="icon-level level' + (a.grade - 1) + '"></span>会员</a></p>'), n.push('     <p class="t-out"><a href="http://www.zhe800.com/jifen/welfare?utm_content=rightside" target="_blank">积分换礼</a><a href="http://www.zhe800.com/jifen/lottery?utm_content=rightside" target="_blank">0元抽奖</a></p>'), n.push(" </div>"), n.push(' <div class="clear"></div>'), n.push("</div>"), n.push('<div class="profile-extend">'), n.push(' <ul><li><i class="ext-totalnew"></i><span>每天9点上新</span></li><li><i class="ext-bargain"></i><span>全网超值低价</span></li><li><i class="ext-safeguard"></i><span>三重消费保障</span></li></ul>'), n.push(' <div class="clear"></div>'), n.push("</div>"), i("#login-panel").empty().append(n.toString())
                }
            } else PassportSC.drawPassportNew("login-panel", tuanpub.getModule("dialogPP").ppTpl, {
                appid: 3003,
                t: tuanpub.getModule("dialogPP")
            })
        }
    })
}(jQuery);