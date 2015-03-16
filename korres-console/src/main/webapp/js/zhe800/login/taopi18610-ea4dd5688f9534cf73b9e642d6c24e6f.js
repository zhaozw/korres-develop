! function (t) {
    tuanpub.loginQueue = new t.Buffers("queue"), tuanpub.logoutQueue = new t.Buffers("queue"), tuanpub.queue = t.extend(tuanpub.queue, {
        login: function () {
            tuanpub.opts.login = !0, t.each(tuanpub.loginQueue.toArray(), function (e, o) {
                if ("function" == t.type(o)) try {
                    o()
                } catch (n) {}
            })
        }, logout: function () {
            tuanpub.opts.login = !1, t.each(tuanpub.logoutQueue.toArray(), function (e, o) {
                if ("function" == t.type(o)) try {
                    o()
                } catch (n) {}
            })
        }
    })
}(jQuery),
function (t) {
    tuanpub.addModule("toolbar_pi", {
        Init: function () {
            tuanpub.loginQueue || (tuanpub.loginQueue = new t.Buffers), tuanpub.logoutQueue || (tuanpub.logoutQueue = new t.Buffers), tuanpub.opts.login = "" != t.cookie("ppinf") ? !0 : !1
        }, OnLoad: function () {
            var e = this,
                o = 0 == t("#prologin").length ? "tblogin" : "prologin";
            PassportSC.drawPassportNew(o, this.toolbarTpl, {
                appid: 3003,
                _this: e
            })
        }, toolbarTpl: function (e, o) {
            var n = PassportCardList[e],
                s = -1 == document.location.href.indexOf("login") ? "?return_to=" + encodeURIComponent(document.location.href) : "?return_to=" + encodeURIComponent("http://www.zhe800.com");
            "?return_to=" + encodeURIComponent("http://shop.zhe800.com/my/orders"), n.rootElement = function () {
                this.cElement = o, this.sElement = o.after('<div class="hidden"></div>').next()
            }, n.drawLoginForm = function () {
                var e = new t.Buffers,
                    o = "?return_to=" + encodeURIComponent("http://shop.zhe800.com/my/orders");
                e.push('<a target="_blank" class="qq" href="http://passport.tuan800.com/sso/partner_login/qq_connect' + s + '">QQ登录</a> | '), e.push('<a class="sign_login" href="http://www.zhe800.com/login' + s + '">登录</a> <a class="sign_login" target="_blank" href="https://passport.zhe800.com/users/signup' + s + '">免费注册</a><span></span> |'), e.push('<a target="_blank" href="http://www.zhe800.com/login' + o + '"> 我的订单</a> | '), this.cElement.html(e.toString())
            }, n.drawPassportWait = function () {
                this.cElement.html("登录中，请稍候...")
            }, n._drawPassportCard = function () {
                var n = this.cookie,
                    a = '<span class="username"><a href="http://www.zhe800.com/jifen/profile/trade" target="_blank">' + n.userid + '</a><i class="icon-arrow arrow-down"></i><em></em></span>&nbsp;';
                0 == n.nkd && (a = '<span class="username"><a href="http://passport.tuan800.com/account/setting' + s + '" target="_blank">' + n.userid + '</a><i class="icon-arrow arrow-down"></i><em></em></span>&nbsp;');
                var i = new t.Buffers;
                i.push('<span>您好，</span><div class="dropdown myzhe">' + a + '</a><ul class="dropdown-menu"><li><a href="http://www.zhe800.com/profile/my_favorites/all" target="_blank">我的收藏</a></li><li><a href="https://passport.zhe800.com/account/safe" target="_blank">账号信息</a></li><li><a href="http://shop.zhe800.com/my/orders" target="_blank">我的订单</a></li><li><a href="http://www.zhe800.com/help/cs_support" target="_blank">消费保障</a></li><li><a href="http://www.zhe800.com/jifen/profile/score_histories/all" target="_blank">我的积分</a></li><li><a href="http://shop.zhe800.com/my/coupons" target="_blank">优惠券</a></li><li><a href="http://www.zhe800.com/profile/my_rank" target="_blank">我的等级</a></li><li><a class="exit" href="javascript:PassportCardList[' + e + '].doLogout();">退出</a></li><li><a href="http://www.zhe800.com/orders/lottery" target="_blank">我的抽奖</a></li></ul></div>'), i.push('|&nbsp;<a href="http://shop.zhe800.com/my/orders" id="mytrade" target="_blank">我的订单</a>'), this.cElement.html(i.toString()), 0 == n.nkd && o.find(".user").attr("href", "http://passport.tuan800.com/account/setting" + s)
            }, "prologin" == o.attr("id") && (n.logoutRedirectUrl = "http://www.zhe800.com/"), n.loginApp = function () {
                tuanpub.queue.login()
            }, n.logoutApp = function () {
                n.loginApp(), tuanpub.queue.logout()
            }, n.drawPassport(o)
        }
    })
}(jQuery),
function (t) {
    tuanpub.addModule("login_passport", {
        Init: function () {
            tuanpub.loginQueue || (tuanpub.loginQueue = new t.Buffers)
        }, loginTpl: function (e, o) {
        	debugger;
            var n = PassportCardList[e],
                s = -1 == document.location.href.indexOf("login") ? "?return_to=" + encodeURIComponent(document.location.href) : "?return_to=" + encodeURIComponent("http://www.zhe800.com");
            n.rootElement = function () {
                this.rootElement = o;
                var t = this.rootElement.find("div");
                this.dsElement = t.eq(0), this.dsAnchor = this.dsElement.find("td:last"), this.sElement = t.eq(1), o.parent().append('<div class="login_mid"></div>'), this.cElement = o.next()
            }, n._drawLoginForm = function () {
                var o = "邮箱/手机号/用户名",
                    s = new t.Buffers,
                    a = document.location.href,
                    i = -1 == a.indexOf("login") ? "?return_to=" + encodeURIComponent(document.location.href) : -1 == a.indexOf("return_to") ? "?return_to=" + encodeURIComponent("http://www.zhe800.com") : "?return_to=" + encodeURIComponent(a.match(/return_to\=([^&]+)/)[1] || "http://www.zhe800.com"),
                    r = !0;
                if (null != n.emailPostfix && n.emailPostfix.length > 0) {
                    var p = n.emailPostfix[0];
                    "string" == typeof j && j.indexOf("@") > -1 && (o = p)
                }
                s.push('<div class="top hidden">用户登录</div><span>登录</span>'), s.push('<form method="post" onsubmit="return PassportCardList[' + e + '].doLogin();" name="loginform">'), s.push('<label><div class="user_name"></div><input value="' + o + '" id="ddusername" name="username" type="text" autocomplete="off" disableautocomplete="" class="t"/></label>'), s.push('<label><div class="user_keywords"></div><input value="" name="password" id="ddpw" type="password" class="required t" autocomplete="off" disableautocomplete="" style="display:none" /><input value="请输入密码" name="password1" id="ddpw1" type="text" class="required t" autocomplete="off" disableautocomplete="" /></label></label>');
                var l = " hidden",
                    u = "";
                window.login_need_captcha && (l = "", u = ' src="' + window.login_error_result.captcha_url + '"', s.push('<label class="captcha_box token' + l + '" for=""><strong>验证码：</strong><input type="text" class="required t" autocomplete="off" name="captcha" /><img class="captchaImg"' + u + " /></label>")), s.push('<label style="display:none;"> <strong>&nbsp;</strong><input type="checkbox" value="yes" checked="checked" name="frontend_remember_me"><span>下次自动登录</span></label>'), s.push('<label><input type="submit" value="" name="commit" class="b" id="login_submit"><a target="_blank" class="forget_num" href="https://passport.zhe800.com/users/password/new">忘记密码？</a></label>'), s.push('<label><span class="error" id="pperrmsg"></span></label>'), s.push("</form>"), s.push('	<div class="othlogin">'), s.push("<h2>还可以使用这些账号登陆：</h2>"), s.push("<p>"), s.push('<a class="qq" href="https://passport.tuan800.com/sso/partner_login/qq_connect' + i + '"></a>'), s.push('<a class="baidu" href="https://passport.tuan800.com/sso/partner_login/baidu' + i + '"></a>'), s.push('<a class="morel"><span>更多</span><span class="moreicon"></span></a>'), s.push("</p>"), s.push('<p class="more_login hidden">'), s.push('<a class="sina" href="https://passport.tuan800.com/sso/partner_login/weibo' + i + '"></a>'), s.push('<a class="renren" href="https://passport.tuan800.com/sso/partner_login/renren' + i + '"></a>'), s.push('<a class="taobao" href="https://passport.tuan800.com/sso/partner_login/taobao' + i + '"></a>'), s.push("</p>"), s.push('	</div><div id="capslock">大写锁定已打开!</div>'), this.cElement.html(s.toString()), t(".captchaImg").click(function () {
                    t(".captchaImg").attr("src", window.login_error_result.captcha_url + "?time=" + (new Date).getTime())
                }), t(".morel").click(function () {
                    var e = t(".moreicon");
                    e.hasClass("iconup") ? (e.removeClass("iconup"), t(".more_login").slideUp()) : (e.addClass("iconup"), t(".more_login").slideDown())
                });
                var c = t("#ddpw"),
                    h = t("#ddpw1");
                c.keyup(function (t) {
                    13 == t.keyCode && PassportCardList[" + index + "].doLogin()
                }), c.blur(function () {
                    "" == t(this).val() && (c.hide(), h.show())
                }), h.focus(function () {
                    h.hide(), c.show().focus()
                }), t("#ddusername").unbind("blur").blur(function () {
                    "" == t(this).val() && t("#ddusername").val(o)
                }), t("#ddusername").click(function () {
                    t(this).val() == o && t(this).val("").focus()
                }).focus(function () {
                    t(this).val() == o && t(this).val("")
                }), t("#ddpw").bind("keypress", function (e) {
                    var o = e || window.event,
                        n = o.target || o.srcElement,
                        s = (n.nextSibling, t("#capslock")),
                        a = o.keyCode || o.which,
                        i = /Trident\/7\./.test(navigator.userAgent),
                        r = 16 == a || !1;
                    a >= 65 && 90 >= a && !r || a >= 97 && 122 >= a && r ? (s.show(), ("msie" == t.browser.name || i) && s.hide()) : s.hide()
                }), t("#ddpw").bind("blur", function () {
                    t("#capslock").hide()
                }), t(".tao_r").delegate(".comfir_mail", "click", function () {
                    var e = "https://passport.zhe800.com/users/email_signed?email=" + encodeURIComponent(t("#ddusername").val());
                    t(this), r && (r = !1, t.getScript("https://passport.zhe800.com/api/ued/retries/send_active_email_confirmation?email=" + encodeURIComponent(t("#ddusername").val()) + "&secret=" + encodeURIComponent(window.login_error_result.secret || ""), {
                        callback: function () {
                            window.location = e
                        }
                    }))
                })
            }, n.drawPassportWait = function (e) {
                var o = new t.Buffers;
                o.push('<div class="pptitle">折800<b>通行证</b><div class="ppthree">'), o.push(this.cardTitle), o.push('</div></div><div class="ppcontent clear" id="ppcontid"><div class="ppWaitMsg">'), o.push(e), o.push("</div></div>"), this.cElement.html(o.toString())
            }, n._drawPassportCard = function () {
                var o = new t.Buffers;
                o.push('<div class="pptitle2"><span>折800<b>通行证</b><div class="ppthree">' + this.cardTitle + "</div></span>"), o.push('<a class="exit" href="javascript:PassportCardList[' + e + '].doLogout();">退出</a>'), o.push("</div>"), o.push('<div class="ppcontent clear" id="ppcontid"><div class="listContA"></div><div class="middle">'), o.push("<ul>"), "" != this.defaultApp && o.push('<li class="current">' + this.defaultApp + "</li>");
                for (var n = 0; n < this.bottomRow[0].length; n++) o.push('<li><a href="' + this.bottomRow[0][n].url + '" target="_blank">' + this.bottomRow[0][n].name + "</a></li>"), n != this.bottomRow[0].length - 1 && o.push("<li>|</li>");
                for (var n = 0; n < this.bottomRow[1].length; n++) o.push('<li><a href="' + this.bottomRow[1][n].url + '" target="_blank">' + this.bottomRow[1][n].name + "</a></li>"), n != this.bottomRow[1].length - 1 && o.push("<li>|</li>");
                o.push('<li class="profile"'), PassportSC.campUrl;
                var s = t.getStringLen(this.cookie.username),
                    a = this.cookie.userid.indexOf("@"),
                    i = this.cookie.userid.substr(a + 1);
                this.domainList.toString().indexOf(i) < 0 || s > this.cookie.userid.length, o.push('> | <a href="http://www.zhe800.com/jifen/profile/score_histories/all" target="_blank">个人中心</a></li></ul></div>'), this.cElement.html(o.toString())
            }, n.drawPassportInfo = function () {
                var e = this.cookie,
                    o = ["未知", "邮箱", "手机", "新浪微博", "QQ", "淘宝", "人人网"],
                    n = e.userid;
                0 == e.nkd && (n = "<span>" + o[e.regw] + "</span>" + '用户，请<a href="http://passport.tuan800.com/account/setting' + s + '" target="_blank" class="user">设置昵称</a>');
                var a = new t.Buffers;
                a.push("<ul><li>您好，" + n + "</li>"), a.push("<li><p>欢迎您，您已经成功登录折800通行证！ </p></li><li>现在即可畅游折800所有服务。</li></ul>"), this.iElement.html(a.toString()), t(".diapassport .warning").html('<em class="m2"></em>您已经成功登陆折800通行证！')
            }, n.loginApp = function () {
                if (t.getParm().return_to) {
                    var e = t.getParm().return_to;
                    return t.cookie("crossdomain", PassportSC.getTime(), {
                        path: "/",
                        expires: 1
                    }), window.returnToCenter = function () {
                        window.location.href = decodeURIComponent(e)
                    }, setTimeout("returnToCenter()", 2e3), !1
                }
                try {
                    tuanpub.Queue.login()
                } catch (o) {}
                window.returnToCenter = function () {
                    window.location.href = "http://www.zhe800.com"
                }, setTimeout("returnToCenter()", 3e3)
            }, n.logoutApp = function () {
                n.loginApp(), t(".diapassport .warning").html('<em class="m2"></em>登录后才能完成该操作!'), tuanpub.Queue.logout()
            }, n.showMsg = function (t) {
            	debugger;
                this.loginMsg && ("邮箱未激活" == t && (t += ',<span class="comfir_mail">去激活邮箱</span>'), this.loginMsg.html(t).show())
            }, n.drawPassport(o)
        }, OnLoad: function () {
            var e = this;
            t("#ppLogin").length > 0 && PassportSC.drawPassportNew("ppLogin", e.loginTpl, {
                appid: 2001
            })
        }
    })
}(jQuery);