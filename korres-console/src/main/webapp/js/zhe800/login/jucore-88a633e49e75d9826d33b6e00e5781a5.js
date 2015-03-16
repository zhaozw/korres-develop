function js_share_copy(e) {
    function t(e) {
        return "undefined" != typeof window.clipboardData ? (window.clipboardData.setData("Text", e), !0) : !1
    }
    t(e) ? alert("复制网址成功,请粘贴到你的QQ/MSN上推荐给你的好友！") : alert("目前只支持IE，请复制地址栏URL,推荐给你的QQ/MSN好友！")
}
$.fn.extend({
        tab: function (e) {
            function t(e) {
                s.eq(e).addClass(n.cls).siblings().removeClass(n.cls), o.eq(e).addClass(n.cls).siblings().removeClass(n.cls), "function" === $.type(n.callback) && n.callback.call(a, e)
            }
            var n = $.extend({
                    nav: ".tab-nav",
                    pane: ".tab-content .tab-pane",
                    delegater: "a",
                    cls: "active",
                    evt: "mouseenter",
                    callback: null
                }, e),
                a = this,
                i = a.find(n.nav),
                s = i.find(n.delegater),
                o = a.find(n.pane),
                r = i.find("." + n.cls),
                c = 0;
            return this.length ? (r.length && (c = r.index()), t(c), i.delegate(n.delegater, n.evt, function (e) {
                e.preventDefault();
                var n = $(this);
                c = n.index(), t(c)
            }), "click" == n.evt || i.delegate(n.delegater, "click", function (e) {
                e.preventDefault()
            }), this) : this
        }, dropdown: function (e) {
            var t = $.extend({
                    evt: "click",
                    callback: null
                }, e),
                n = this;
            return "hover" == t.evt ? (n.bind("mouseenter", function () {
                n.addClass("open"), "function" === $.type(t.callback) && t.callback.call(n, null)
            }), n.bind("mouseleave", function () {
                n.removeClass("open")
            })) : n.find(".trigger").bind(t.evt, function (e) {
                e.preventDefault(), n.toggleClass("open"), "function" === $.type(t.callback) && t.callback.call(n, null)
            }), "click" == t.evt && ($global = $(document), $global.data("dropBinded") || ($global.bind("click", function (e) {
                var t = $(e.target);
                t.closest(".dropdown").length || $(".dropdown.open").removeClass("open")
            }), $global.data("dropBinded", "true"))), this
        }, affix: function (e) {
            if (!this.length) return this;
            var t = $.extend({
                    top: 0,
                    bottom: 0,
                    scrollTop: null,
                    maxTop: null,
                    oHeight: null
                }, e),
                n = this,
                a = n.get(0).offsetParent || document.body,
                a = "html" == a.tagName.toLowerCase() ? document.body : a,
                i = $(a),
                s = i.length ? i.height() : $("body").height(),
                o = t.oHeight || n.height(),
                r = t.maxTop ? t.maxTop - o : 0,
                c = document.body.scrollTop || document.documentElement.scrollTop,
                l = n.offset().top;
            if ((t.scrollTop || c >= l - t.top - t.bottom) && (t.maxTop && c >= r - t.bottom ? r > l && n.addClass("affix-bottom").css({
                top: r
            }) : t.scrollTop ? c >= t.scrollTop && n.addClass("affix") : n.addClass("affix")), "undefined" == typeof document.body.style.maxHeight) {
                var d = tuan800ued.getModule("ie6Fixed"),
                    u = $(window).height();
                d && d.fixed(n, (u - o) / 2)
            } else $(window).bind("scroll", function () {
                var e = document.body.scrollTop || document.documentElement.scrollTop;
                if (i.height() != s) {
                    var a = i.height() - s;
                    s = i.height(), r += a
                }
                t.scrollTop || e >= l - t.top ? t.maxTop && e >= r - t.bottom ? r > l && (n.hasClass("affix-bottom") ? 1 * n.css("top").match(/\d+/) != r && n.css("top", r) : n.removeClass("affix").addClass("affix-bottom").css({
                    top: r
                })) : t.scrollTop ? e >= t.scrollTop ? n.hasClass("affix") || n.addClass("affix").removeClass("affix-bottom").css({
                    top: ""
                }) : n.hasClass("affix") && n.removeClass("affix") : n.hasClass("affix") || n.addClass("affix").removeClass("affix-bottom").css({
                    top: ""
                }) : n.removeClass("affix").removeClass("affix-bottom").css("top", "")
            });
            return this
        }, slide: function (e) {
            function t() {
                u <= i.num ? (c.hide(), l.hide()) : (r.first().clone().appendTo(o), o.width((u + 1) * d)), r.eq(h).addClass("itemOn")
            }

            function n(e, t) {
                g.n = void 0 !== e ? e : g.n, g.n > p && (g.n = 1, o.css("margin-left", 0)), g.n < 0 && (g.n = p - 1, o.css("margin-left", -p * d)), "instance" === t ? (o.css({
                    marginLeft: -g.n * d * i.num
                }), g.n == p && (o.css("margin-left", 0), g.n = 0)) : o.stop().animate({
                    marginLeft: -g.n * d * i.num
                }, i.speed, function () {
                    g.n >= p && (o.css("margin-left", 0), g.n = 0), h = -(o.css("marginLeft").replace("px", "") / d), r.removeClass("itemOn"), r.eq(h).addClass("itemOn"), i.callback && i.callback(h)
                })
            }
            var a, i = $.extend({
                    container: "ul",
                    item: "li",
                    prev: ".prev",
                    next: ".next",
                    num: 1,
                    speed: 500,
                    auto: !0,
                    pause: !0,
                    time: 3e3,
                    callback: null
                }, e),
                s = this,
                o = s.find(i.container),
                r = o.find(i.item),
                c = s.find(i.prev),
                l = s.find(i.next),
                d = r.outerWidth(!0),
                u = r.length,
                p = Math.ceil(u / i.num),
                h = 0,
                g = {
                    n: 0,
                    go: n
                };
            return t(), c.bind("click", function (e) {
                e.preventDefault(), g.n--, n()
            }), l.bind("click", function (e) {
                e.preventDefault(), g.n++, n()
            }), i.auto && (a = setInterval(function () {
                n(++g.n)
            }, i.time), $.each([c, l], function () {
                $(this).bind("click", function () {
                    clearInterval(a), a = setInterval(function () {
                        n(++g.n)
                    }, i.time)
                })
            }), i.pause && (o.parent().bind("mouseenter", function () {
                clearInterval(a)
            }), o.parent().bind("mouseleave", function () {
                clearInterval(a), a = setInterval(function () {
                    n(++g.n)
                }, i.time)
            }))), this.exports = g, this
        }, tooltip: function (e) {
            var t = $.extend({
                    direction: "top",
                    evt: "default",
                    close: !0,
                    offset: null,
                    callback: null,
                    msg: "",
                    clz: "",
                    resize: !1
                }, e),
                n = this,
                a = $('<div class="tooltip ' + t.clz + '"><div class="tooltip-content">' + t.msg + (t.close ? '<i class="close"></i>' : "") + '</div><div class="tooltip-arrow"><i></i><u></u></div></div>').insertAfter(n),
                i = n.position(),
                s = a.find(".tooltip-arrow"),
                o = n.outerWidth(),
                r = n.outerHeight(),
                c = a.width(),
                l = a.height(),
                d = Math.ceil(1e5 * Math.random());
            if (n.length) {
                var u = function () {
                    switch (t.direction) {
                    case "top":
                        a.css({
                            top: i.top - l - s.outerHeight(),
                            left: i.left - (c - o) / 2
                        });
                        break;
                    case "left":
                        a.css({
                            left: i.left - c - s.outerWidth(),
                            top: i.top + (r - l) / 2
                        }), s.addClass("right");
                        break;
                    case "right":
                        a.css({
                            left: i.left + o + s.outerWidth(),
                            top: i.top + (r - l) / 2
                        }), s.addClass("left");
                        break;
                    case "bottom":
                        a.css({
                            top: i.top + r + s.outerHeight(),
                            left: i.left - (c - o) / 2
                        }), s.addClass("up")
                    }
                    t.offset && a.css(t.offset)
                };
                if (u(), t.resize) {
                    var p = i;
                    $(window).bind("resize." + d, function () {
                        if (i = n.position(), t.offset) {
                            var e = i.top - p.top,
                                a = i.left - p.left;
                            p = i, t.offset.top && (t.offset.top += e), t.offset.left && (t.offset.left += a)
                        }
                        u()
                    })
                }
                switch (t.evt) {
                case "hover":
                    a.hide(), n.unbind("mouseenter.tooltip").unbind("mouseleave.tooltip").bind("mouseenter.tooltip", function () {
                        a.show()
                    }).bind("mouseleave.tooltip", function (e) {
                        var n = e.pageX,
                            i = e.pageY,
                            o = a.offset();
                        switch (t.direction) {
                        case "left":
                            n > o.left + c + s.width() && a.hide();
                            break;
                        case "top":
                            i > o.top + l + s.height() && a.hide();
                            break;
                        case "right":
                            n < o.left - s.width() && a.hide();
                            break;
                        case "bottom":
                            i < o.top - s.height() && a.hide()
                        }
                    }), a.unbind("mouseleave.tooltip").bind("mouseleave.tooltip", function (e) {
                        var n = e.pageX,
                            i = e.pageY,
                            s = a.offset();
                        switch (t.direction) {
                        case "left":
                            n < s.left + c && a.hide();
                            break;
                        case "top":
                            i < s.top + l && a.hide();
                            break;
                        case "right":
                            n > s.left && a.hide();
                            break;
                        case "bottom":
                            i > s.top && a.hide()
                        }
                    });
                    break;
                case "click":
                    n.unbind("click.tooltip").bind("click.tooltip", function () {
                        a.toggle()
                    })
                }
                if (a.find(".close").bind("click", function () {
                    a.remove(), t.resize && $(window).unbind("resize." + d)
                }), "function" === $.type(t.callback)) try {
                    t.callback.call(a, null)
                } catch (h) {
                    console && console.log(h)
                }
                return this
            }
        }, marquee: function (e) {
            function t() {
                l.append(l.html())
            }

            function n(e, t, n) {
                return setInterval(function () {
                    try {
                        var n = +/\-?\d+/.exec(e.css(t))[0];
                        if (-s >= n) return e.css(t, 0), void 0;
                        e.css(t, n - 1)
                    } catch (a) {}
                }, n)
            }
            var a, i, s, o, r = $.extend({
                    container: "ul",
                    item: "li",
                    type: " default",
                    pause: !0,
                    fps: 18
                }, e),
                c = this,
                l = c.find(r.container),
                d = c.find(r.item),
                u = d.length,
                p = d.outerWidth(!0),
                h = d.outerHeight(!0),
                g = 1e3 / r.fps;
            return "vertical" === r.type ? (a = "height", i = "marginTop", s = h * u) : (a = "width", i = "marginLeft", s = p * u), t(), o = n(l, i, g), r.pause && l.bind("mouseenter.marquee", function () {
                clearInterval(o)
            }).bind("mouseleave", function () {
                o = n(l, i, g)
            }), c.killInterval = function () {
                clearInterval(o)
            }, c
        }, share: function (e) {
            var t = $.extend({
                    build: !1,
                    title: encodeURI(document.title),
                    url: encodeURI(location.href),
                    pic: "",
                    sites: null,
                    text: ""
                }, e || {}),
                n = this,
                a = {
                    sina: "http://v.t.sina.com.cn/share/share.php?url={{#url}}&title={{#title}}&pic={{#pic}}",
                    qqwb: "http://share.v.t.qq.com/index.php?c=share&a=index&url={{#url}}&title={{#title}}&pic={{#pic}}",
                    renren: "http://share.renren.com/share/buttonshare.do?link={{#url}}",
                    kaixin: "http://www.kaixin001.com/rest/records.php?url={{#url}}&style=11&content={{#title}}&pic={{#pic}}",
                    douban: "http://www.douban.com/recommend/?url={{#url}}&title={{#title}}&image={{#pic}}",
                    qzong: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{#url}}&title={{#title}}&pics={{#pic}}"
                };
            return t.build && (t.sites ? $.each(t.sites, function (e, a) {
                n.append('<a href="#" target="_blank" class="' + a + '">' + (t.text[a] || "") + "</a>")
            }) : $.each(a, function (e) {
                n.append('<a class="' + e + '" href="#" target="_blank"></a>')
            })), $.browser.msie && "6.0" === $.browser.ver && (t = $.extend(t, {
                title: decodeURI(t.title)
            })), $.each(a, function (e, a) {
                a && n.find("." + e).attr("href", $.ParseTpl(a, t))
            }), this
        }, placeholder: function (e) {
            var t = {
                    pColor: "#999",
                    pFont: "12px",
                    posL: 0,
                    zIndex: "99"
                },
                n = $.extend(t, e);
            return this.each(function () {
                var e = $(this);
                if ("placeholder" in document.createElement("input")) return e.data("placeholderVal", $(this).attr("placeholder")), e.on("focus", function () {
                    $(this).removeAttr("placeholder")
                }).on("blur", function () {
                    $(this).attr("placeholder", $(this).data("placeholderVal"))
                }), void 0;
                $(this).parent().css("position", "relative");
                var t = ($.browser.msie, $.browser.version, e.attr("placeholder")),
                    a = e.outerHeight(),
                    i = e.outerWidth(),
                    s = e.position().left,
                    o = e.position().top,
                    r = $("<label>", {
                        "class": "test",
                        text: t,
                        css: {
                            position: "absolute",
                            left: s + "px",
                            top: o + "px",
                            width: i - n.posL + "px",
                            "padding-left": n.posL + "px",
                            height: a + "px",
                            "line-height": a + "px",
                            color: n.pColor,
                            "font-size": n.pFont,
                            "z-index": n.zIndex,
                            cursor: "text"
                        }
                    }).insertBefore(e),
                    c = e.val();
                c.length > 0 && r.hide(), e.on("focus", function () {
                    r.hide()
                }).on("blur", function () {
                    var e = $(this).val();
                    0 === e.length && r.show()
                }), r.on("click", function () {
                    e.trigger("focus")
                }), e.filter(":focus").trigger("focus")
            })
        }
    }),
    function (e) {
        e.addfavorite = function (t) {
            e.fn.addfavorite(t)
        }, e.fn.addfavorite = function (t) {
            var n = e(this),
                a = t || {},
                i = a.url ? a.url : "http://www.zhe800.com/",
                s = a.title ? a.title : "折800，每天9块9！",
                o = [{
                    string: navigator.platform,
                    subString: "Win",
                    identity: "Windows"
                }, {
                    string: navigator.platform,
                    subString: "Mac",
                    identity: "Mac"
                }, {
                    string: navigator.userAgent,
                    subString: "iPhone",
                    identity: "iPhone/iPod"
                }, {
                    string: navigator.platform,
                    subString: "Linux",
                    identity: "Linux"
                }],
                r = "按 <strong>{{#sys}}+D</strong>，把折800放入收藏夹，每天9块9！",
                c = tuanpub,
                l = "Ctrl",
                d = function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t].string;
                        if (n && -1 != n.indexOf(e[t].subString)) return e[t].identity
                    }
                };
            if (("chrome" == e.browser.name || "safari" == e.browser.name || "opera" == e.browser.name || "firefox" == e.browser.name && parseInt(e.browser.ver) >= 23) && (a = r), c.OS = d(o) || "an unknown OS", "Mac" == c.OS && (l = "Command"), e.browser.msie) try {
                window.external.addFavorite(i, s)
            } catch (u) {
                try {
                    window.external.addToFavoritesBar(i, s)
                } catch (p) {
                    (0 == n.size() ? e : n).Dialogs({
                        auto: !1,
                        msg: "加入收藏失败，请您手工加入。"
                    })
                }
            } else window.external && e.browser.mozilla ? 11 != e.browser.ver && window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(s, i, "") : e.Dialogs({
                msg: "按Ctrl+D，把折800加入收藏夹。"
            }) : (0 == n.size() ? e : n).Dialogs({
                auto: !1,
                msg: e.ParseTpl(r, {
                    sys: l
                })
            })
        }
    }(jQuery),
    function (e) {
        tuanpub.addModule("toolbar_pp", {
            Init: function () {
                void 0 === tuanpub.headQueue && (tuanpub.headQueue = new e.Buffers)
            }, init: function () {
                var t = this,
                    n = 0 == e("#prologin").length ? "tblogin" : "prologin";
                PassportSC.drawPassportNew(n, this.toolbarTpl, {
                    appid: 3001,
                    _this: t
                }), tuanpub.headQueue.push(function () {
                    if ("yes" == tuanpub.opts.user.login_stauts.login) {
                        var t = e("#toolbar .right .username"),
                            n = tuanpub.opts.user.login_stauts,
                            a = parseInt(n.msg_num);
                        if (t.length) {
                            if (!t.find(".icon-level").length) {
                                var i = new e.Buffers,
                                    s = "",
                                    o = "",
                                    r = "";
                                i.push('<a class="icon-level level' + (n.grade - 1) + '" href="http://www.zhe800.com/profile/my_rank" target="_blank"></a><em></em>'), r = a > 0 ? '<i class="msg-num">' + a + "</i>" : "", s = '|&nbsp;<a href="http://www.zhe800.com/profile/message_box" class="msg" target="_blank">我的消息' + r + "</a> |", n.pop_msg && (o = '<div class="msg-tips"><span>' + n.pop_msg + '</span><i class="up-arr"></i><i class="close-tips"></i></div>'), t.after(i.toString()), e("#mytrade").after(s + o);
                                var c = t.parent(".dropdown"),
                                    l = e(".msg-tips");
                                l.find(".close-tips"), c.dropdown({
                                    evt: "hover"
                                }), l.click(function (t) {
                                    var n = e(this),
                                        a = t.target;
                                    "close-tips" === a.className ? n.hide() : "SPAN" === a.nodeName && window.open("http://www.zhe800.com/profile/message_box"), e.get("/cn/msg/set_pull_time?pop_read=1")
                                })
                            }
                            if (t.width() > 180 && t.addClass("maxuser"), tuanpub.opts.user.muying) {
                                var d = [];
                                "object" == typeof tuanpub.opts.user.muying ? (d[0] = tuanpub.opts.user.muying.category, d[1] = tuanpub.opts.user.muying.year, d[2] = tuanpub.opts.user.muying.month, d[3] = tuanpub.opts.user.muying.user_id) : d = tuanpub.opts.user.muying.split(","), e.cookie("maternal", d.join(","), {
                                    path: "/",
                                    expires: 365,
                                    domain: ".zhe800.com"
                                })
                            }
                        }
                    }
                })
            }, toolbarTpl: function (t, n) {
            	debugger;
                var a = PassportCardList[t],
                    i = -1 == document.location.href.indexOf("login") ? "?return_to=" + encodeURIComponent(document.location.href) : "?return_to=" + encodeURIComponent("http://www.zhe800.com");
                "?return_to=" + encodeURIComponent("http://shop.zhe800.com/my/orders"), a.rootElement = function () {
                    this.cElement = n, this.sElement = n.after('<div class="hidden"></div>').next()
                }, a.drawLoginForm = function () {
                    var t = new e.Buffers;
                    t.push('<a target="_blank" class="qq" href="http://passport.tuan800.com/sso/partner_login/qq_connect' + i + '">QQ登录</a> | '), t.push('<a class="sign_login" href="http://www.zhe800.com/login' + i + '">登录</a> <a class="sign_login" target="_blank" href="https://passport.zhe800.com/users/signup' + i + '">免费注册</a> | <span></span>'), t.push('<a target="_blank" href="http://shop.zhe800.com/my/orders">我的订单</a> | '), this.cElement.html(t.toString())
                }, a.drawPassportWait = function () {
                    this.cElement.html("登录中，请稍候...")
                }, a._drawPassportCard = function () {
                    var t = this.cookie,
                        a = '<span class="username"><a href="http://www.zhe800.com/profile/my_rank" target="_blank">' + t.userid + '</a><i class="icon-arrow arrow-down"></i><em></em></span>',
                        s = new e.Buffers;
                    s.push('<span>您好，</span><div class="dropdown myzhe">' + a + '</a><ul class="dropdown-menu"><li><a href="http://www.zhe800.com/profile/my_favorites/all" target="_blank">我的收藏</a></li><li><a href="https://passport.zhe800.com/account/safe" target="_blank">账号信息</a></li><li><a href="http://shop.zhe800.com/my/orders" target="_blank">我的订单</a></li><li><a href="http://www.zhe800.com/help/cs_support" target="_blank">消费保障</a></li><li><a href="http://www.zhe800.com/jifen/profile/score_histories/all" target="_blank">我的积分</a></li><li><a href="http://shop.zhe800.com/my/coupons" target="_blank">优惠券</a></li><li><a href="http://www.zhe800.com/profile/my_rank" target="_blank">我的等级</a></li><li><a class="exit" href="https://passport.zhe800.com/sso/logout?return_to=' + i + '">退出</a></li><li><a href="http://www.zhe800.com/orders/lottery" target="_blank">我的抽奖</a></li></ul></div>'), s.push('|&nbsp;<a href="http://shop.zhe800.com/my/orders" id="mytrade" target="_blank">我的订单 </a>'), this.cElement.html(s.toString()), 0 == t.nkd && n.find(".user").attr("href", "http://www.zhe800.com/jifen/profile/trade")
                }, "prologin" == n.attr("id") && (a.logoutRedirectUrl = "http://www.zhe800.com/"), a.loginApp = function () {
                    tuanpub.queue()
                }, a.logoutApp = function () {
                    a.loginApp()
                }, a.drawPassport(n)
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("jupublic", {
            auto: !0,
            headLogin: function (t) {
                var n = tuanpub.opts,
                    t = t || new Function,
                    a = "/cn/user_status?",
                    i = [];
                0 !== e("#signinid").length && i.push("c=1&d=" + tuan800ued.getModule("signin").calendar("days")), window.ju_fav && i.push("f=1");
                var s = "",
                    o = "";
                if ("" != e.cookie("maternal") && null != e.cookie("maternal") && (s = e.cookie("maternal").indexOf("{") > -1 ? e.parseJSON(e.cookie("maternal")).user_id : e.cookie("maternal").split(",")[3]), "" != e.cookie("ppinf") && null != e.cookie("ppinf")) {
                    var r = e.parseJSON(Base64.decode(unescape(e.cookie("ppinf")).split("|")[3]));
                    o = r.uid.replace(/^u/g, "")
                }
                s != o && i.push("m=1"), i.push("user_id=" + o), e.getJSON(a + i.join("&"), function (t) {
                    var a = t || [];
                    if (n.user ? n.user = a : e.extend(n, {
                        user: a
                    }), tuanpub.opts.user.checkin_status) {
                        var i = new Date;
                        i.setHours(23, 59, 59, 0), e.cookie("qd", tuanpub.opts.user.checkin_status.status + "-" + tuanpub.opts.user.checkin_status.day + "-" + tuanpub.opts.user.score, {
                            path: "/",
                            expires: i,
                            domain: ".zhe800.com"
                        })
                    }
                    tuanpub.queue(tuanpub.headQueue.toArray())
                })
            }, headloginQueue: function () {}, OnLoad: function () {
                var e = this;
                tuanpub.login() && e.headLogin()
            }, Queue: function () {
                tuanpub.getModule("jupublic").headLogin()
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("dialogPP", {
            ppTpl: function (t, n, a) {
                var i = a.t || this,
                    s = PassportCardList[t],
                    o = a.ttl || "登录折800—享受会员特权";
                s.rootElement = function () {
                    this.cElement = n, this.sElement = n.after('<div class="hidden"></div>').next()
                }, s._drawLoginForm = function () {
                    var n = -1 == document.location.href.indexOf("login") ? "?return_to=" + encodeURIComponent(document.location.href) : "?return_to=" + encodeURIComponent("http://www.zhe800.com"),
                        a = !0,
                        i = new e.Buffers;
                    i.push('<form method="post" onsubmit="return PassportCardList[' + t + '].doLogin();" name="loginform">'), i.push(' <h3 class="hwid2">' + o), i.push('     <a class="reglink" target="_blank" href="javascript:void(0)">立即注册</a>'), i.push(" </h3>"), i.push(" <ul>"), i.push("     <li>"), i.push('         <input value="邮箱/手机号/用户名" title="邮箱/手机号/用户名" onfocus="this.value==this.title?this.value=\'\':null" onblur="this.value==\'\'?this.value=this.title:null" id="ddusername_dgpp" name="username" type="text" autocomplete="off" disableautocomplete="" />'), i.push('         <input style="display:none" value="" name="password" id="ddpw_1" class="ddpw_1_cls" type="password" autocomplete="off" disableautocomplete="" /><input value="请输入密码" class="ddpw_1_text_cls" id="ddpw_1_text" type="text" autocomplete="off" disableautocomplete="" />'), i.push("     </li>");
                    var s = " hidden",
                        r = "";
                    window.login_need_captcha && (s = "", r = ' src="' + window.login_error_result.captcha_url + '"', i.push('     <li class="captcha_box token' + s + '">'), i.push('         <input type="text" value="验证码" title="验证码" onfocus="this.value==this.title?this.value=\'\':null" onblur="this.value==\'\'?this.value=this.title:null" id="ddcaptcha" name="captcha" autocomplete="off" disableautocomplete="" /><img class="captchaImg"' + r + " />"), i.push("     </li>")), i.push('     <li class="btn">'), i.push('         <input type="submit" class="sign" value="立即登录" onfocus="this.blur()" alt="登 录" title="登 录"/>'), i.push("     </li>"), i.push('     <li class="ologintip">'), i.push('         <div class="error" id="pperrmsg"></div>'), i.push('         <a class="forgetPwd" target="_blank" href="https://passport.zhe800.com/users/password/new">忘记密码？</a>'), i.push("         <span>使用其他账号登录</span>"), i.push("         <i></i>"), i.push("     </li>"), i.push(" </ul>"), i.push("</form>"), i.push('<div class="sf clear">'), i.push('<div class="sf_content"><p><a class="qq" href="https://passport.tuan800.com/sso/partner_login/qq_connect?return_to=' + n + '"><i></i><span>QQ登录</span></a>'), i.push('<a class="morela"><span>更多&gt;&gt;</span></a></p>'), i.push('<p class="more_logina hidden">'), i.push('<a class="baidu" href="https://passport.tuan800.com/sso/partner_login/baidu?return_to=' + n + '"></a>'), i.push('<a class="sina" href="https://passport.tuan800.com/sso/partner_login/weibo?return_to=' + n + '"></a>'), i.push('<a class="taobao" href="https://passport.tuan800.com/sso/partner_login/taobao?return_to=' + n + '"></a>'), i.push('<a class="renren" href="https://passport.tuan800.com/sso/partner_login/renren?return_to=' + n + '"></a>'), i.push("</p></div>"), i.push("</div>"), this.cElement.html(i.toString()), e(".captchaImg").unbind("click.code").bind("click.code", function () {
                        e(".captchaImg").attr("src", window.login_error_result.captcha_url + "?time=" + (new Date).getTime())
                    }), e(".morela").toggle(function () {
                        e(this).find("span").html("收起&lt;&lt;"), e(".more_logina").removeClass("hidden")
                    }, function () {
                        e(this).find("span").html("更多&gt;&gt;"), e(".more_logina").addClass("hidden")
                    }), e(".ddpw_1_text_cls").focus(function () {
                        e(".ddpw_1_text_cls").hide(), e(".ddpw_1_cls").show().focus()
                    }), e(".ddpw_1_cls").blur(function () {
                        "" == e(this).val() && (e(".ddpw_1_text_cls").show(), e(".ddpw_1_cls").hide())
                    }), e(".reglink").click(function (n) {
                        var a, i = tuanpub.getModule("regDialog"),
                            s = e(this).parents("form").parent();
                        e("#dialog_log_qiandao .close").trigger("click"), a = "ppLogin_qd" === s.attr("id") ? "qd" : "login-panel" === s.attr("id") ? "log" : "qd", i.renderForm(a, t), n.preventDefault()
                    }), e("#dialog_log_qiandao").delegate(".comfir_mail", "click", function () {
                        var t = "https://passport.zhe800.com/users/email_signed?email=" + encodeURIComponent(e("#dialog_log_qiandao #ddusername_dgpp").val());
                        e(this), a && (a = !1, e.getScript("https://passport.zhe800.com/api/ued/retries/send_active_email_confirmation?email=" + encodeURIComponent(e("#dialog_log_qiandao #ddusername_dgpp").val()) + "&secret=" + encodeURIComponent(window.login_error_result.secret || ""), {
                            callback: function () {
                                window.location = t
                            }
                        }))
                    })
                }, s.drawPassportWait = function () {}, s._drawPassportCard = function () {
                    i.dback()
                }, s.drawPassportInfo = function () {}, s.loginApp = function () {
                    tuanpub.queue()
                }, s.logoutApp = function () {
                    tuanpub.queue()
                }, s.drawPassport(n), s.showMsg = function (e) {
                    this.loginMsg && ("邮箱未激活" == e && (e += ',<span class="comfir_mail">去激活邮箱</span>'), this.loginMsg.html(e).show())
                }
            }, callbackQueue: [],
            init: function (t) {
                var n = this,
                    a = new e.Buffers;
                return a.push('<div class="qd_login">'), a.push('<div class="hc clear" id="ppLogin_qd"></div>'), a.push("</div>"), e.Dialogs({
                    id: "dialog_log_qiandao",
                    overlay: !0,
                    auto: !1,
                    openfun: function () {
                        PassportSC.drawPassportNew("ppLogin_qd", n.ppTpl, {
                            appid: t && t.appid ? t.appid : 3002,
                            t: n
                        }), e.each(n.callbackQueue, function (t, n) {
                            if ("function" == e.type(n)) try {
                                n.apply(this, [])
                            } catch (a) {
                                window.console && console.info(a.message)
                            }
                        })
                    }, msg: a.toString()
                }), !1
            }, dback: function () {
                e("#dialog_log_qiandao .close").trigger("click")
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("wztaoinnav", {
            OnLoad: function () {
                e("#wztaoid").hover(function () {
                    e(this).addClass("topfon")
                }, function () {
                    e(this).removeClass("topfon")
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("signin", {
            signinQueue: [],
            unLoginPanelAdData: null,
            loginPanelAdData: null,
            animateArray: [],
            init: function () {
                var t = e("#signinid").data("qq-g-num") || "",
                    n = e("#signinid").data("qq-g-label") || "",
                    a = function () {
                        var e = this;
                        e.hasClass("sign_panel") ? e.find(".gotuan").before('<p class="addQQ">' + n + "<span>" + t + "</span></p>") : e.hasClass("sign_board") && e.find(".ft .article").append("<p>" + n + "<em>" + t + "</em></p>"), e.data("qqgroup", !0)
                    },
                    i = {
                        addtion: e("#signinid").data("qqgroup") ? !1 : a,
                        callback: function () {
                            e("#signinid a.signin,.side_panel .signin").unbind("click").bind("click", function (e) {
                                return e.preventDefault(), tuanpub.login() ? !1 : (tuanpub.getModule("dialogPP").init({
                                    appid: 3002
                                }), !1)
                            })
                        }
                    };
                tuanpub.login() || this.createPanel(i)
            }, calendar: function (t) {
                var n = this,
                    a = new Date,
                    i = a.getFullYear(),
                    s = a.getMonth(),
                    o = a.getDate(),
                    r = new Date(i, s, 1),
                    c = r.getDay(),
                    l = new Date(new Date(i, s + 1, 1).getTime() - 864e5).getDate(),
                    d = new Date(r.getTime() - 1e3 * 3600 * 24 * c),
                    u = c + l,
                    p = o + c - 1,
                    h = [],
                    g = new Date(i, s, 1),
                    f = new Date(new Date(i, s + 1, 1).getTime() - 864e5),
                    m = g.getMonth() + 1,
                    _ = f.getMonth() + 1;
                if ("days" === t) return a.getDate() + c;
                "array" === e.type(t) && (h = t), code = new e.Buffers, code.push('<div class="tit"><div class="now_month">' + (s + 1) + "/" + o + '</div><div class="now_year">' + i + '</div></div><table class="calendar"><tr><th class="weekend">日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class="weekend">六</th></tr>'), code.push("<tr>");
                for (var v = 0; 42 > v; v++) code.push("<td " + ("1" == h[v] || "2" == h[v] && v >= c && u > v ? ' class="qd_calendar' + v + " on " + i + "-" + (s + 1) + "-" + (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + '"' : c > v || v >= u ? " class='disable' " : "class='qd_calendar" + v + " " + i + "-" + (s + 1) + "-" + (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + "'") + ">" + d.getDate() + (v == p && v >= c && u > v ? "<a href='javascript:void(0)' class='get_nowaday'></a></td>" : "</td>")), d = new Date(d.getTime() + 864e5), 0 === (v + 1) % 7 && code.push("</tr><tr>");
                code.push("</tr>"), code.push("</table>");
                var g = g.getFullYear() + "-" + m + "-" + g.getDate(),
                    f = f.getFullYear() + "-" + _ + "-" + f.getDate(),
                    b = "/apicenter/ajax_api_cached/checkin_activity?login_status=1&start_time=%27" + g + "%27&end_time=%27" + f + "%27";
                return e.ajax({
                    url: b,
                    type: "GET",
                    dataType: "JSON",
                    success: function (t) {
                        n.loginPanelAdData = t;
                        var a, i = t.calendar;
                        for (a in i) i.hasOwnProperty(a) && i[a] && e("." + a).append("<div class='hdqd'><p>" + i[a] + "</p></div>")
                    }
                }), code.toString()
            }, signQueue: new e.Buffers("queue"),
            sideAd: function (t) {
                var n = '<a href="{{#src}}" title="{{#src_desc}}" target="{{#target}}"><img src="{{#image_src}}" alt="{{#image_desc}}" /></a>';
                return t ? (t.src || (n = '<img src="{{#image_src}}" alt="{{#image_desc}}" />'), e.ParseTpl(n, t)) : '<div class="tit">小贴士</div><div class="con"><h3>折800商品的更新时间：</h3><p>折800每天更新两次。<br />上午9点，更新近千款；<br />晚上20点，更新百款左右；</p><i class="icon_ft"></i></div>'
            }, createPanel: function (t) {
                var n = this,
                    a = new Date,
                    i = a.getDate();
                a.getMonth(), e.each(this.animateArray, function () {
                    this.killInterval && this.killInterval()
                });
                var s = e.extend({
                        type: !1,
                        container: e("#signinid"),
                        return_to: e("#signinid").attr("return_to") || "http://www.zhe800.com/login",
                        addtion: null,
                        callback: null,
                        data: null
                    }, t),
                    o = s.container instanceof jQuery ? s.container : jQuery(s.container),
                    r = ({
                        text: o.data("side-text"),
                        link: o.data("side-link")
                    }, new e.Buffers),
                    n = this,
                    c = tuan800ued.getModule("sidePanel");
                if (s.type === !1) o.hasClass("sign_board") && o.removeClass("sign_board").addClass("sign_panel"), o.hasClass("signin_on") && o.removeClass("signin_on"), r.push('<a class="signin qdicon" href="' + s.return_to + '"></a>'), r.push('<div class="dropdown-menu">'), r.push('<div class="activity"></div><div class="sign_ad"><div class="ad1"></div><div class="ad2"></div><div class="ad3"></div></div>'), r.push('<div class="info_notice"><div class="task_icon"></div><div class="scroll_downwords"><div class="down_words"></div></div></div></div>'), o.empty().html(r.toString()), e("body").append("<style>.head_nav .r_con .sign_panel a.signin{padding:0;position:relative;top:-15px;width:124px;background: url(http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/qiandao_default.gif) no-repeat;left:0px;}.head_nav .r_con .sign_panel{width:124px;}.head_nav .r_con .sign_panel a.signin:hover{padding:0;position:relative;top:-15px;width:124px;background: url(http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/qiandao_default_hover.gif) no-repeat;}</style>"), n.unLoginPanelAdData ? n.createUnLogininPanelAd() : e.ajax({
                    url: "/apicenter/ajax_api_cached/checkin_activity?login_status=0",
                    type: "GET",
                    dataType: "JSON",
                    success: function (e) {
                        n.unLoginPanelAdData = e, n.createUnLogininPanelAd()
                    }
                });
                else {
                    var l = s.data || tuanpub.opts.user.checkin_status,
                        d = new Date,
                        u = d.getMonth(),
                        p = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
                    switch (s.type) {
                    case "1":
                        r.push('<a href="javascript:void(0)" class="signin qdicon" id="dlqd"></a>'), r.push('<div class="dropdown-menu"><div class="title_user_status"><span class="gold_img"></span><span class="user_jifen">我的积分：<b>' + tuanpub.opts.user.score + '</b>(可抵：<em></em>)</span><span class="current_today">已连续签到<b>' + l.day + '</b>天</span><span class="current_score_today">明日签到可得<b>' + l.tomorrow_score + "</b>分</span></div>"), r.push('<div class="ad_signin"><div class="nowaday_date"><b>' + p[u] + "</b><span>" + i + '</span><em></em></div><p>今日活动</p><div class="nowaday_activ"></div></div>'), r.push('<div class="article">' + n.calendar(l.sign_info || tuanpub.opts.user.checkin_status.sign_info) + "</div></div></div>"), o.hasClass("sign_panel") && o.removeClass("sign_panel").addClass("sign_board"), o.removeClass("sign_board_unchecked"), o.hasClass("signin_on") || o.addClass("signin_on"), o.empty().html(r.toString()), o.find(".ft a").each(function () {
                            var t = e(this);
                            /\>\>$/.test(t.text()) || t.text(t.text() + ">>")
                        }), e(".article .calendar .get_nowaday").parent().css("color", "#cb1f24");
                        var h = new Date(2015, 1, 28, 23, 59, 59),
                            g = new Date(2014, 11, 26),
                            f = new Date;
                        f.getTime() <= h.getTime() && f.getTime() >= g.getTime() && (e(".sign_board .dropdown-menu").css("height", "357px"), e(".sign_board .dropdown-menu").css("top", "137%"), e(".sign_board .dropdown-menu .title_user_status").css("height", "57px"), e(".sign_board .dropdown-menu .title_user_status .gold_img").css("margin-top", "20px"), e(".sign_board .dropdown-menu .title_user_status span").css("line-height", "64px"), e(".sign_board .dropdown-menu").append("<img style='position:absolute;top:-18px;left:-11px;' src='http://z5.tuanimg.com/v2/core/img/qd_icon6.png' />"), e(".sign_board .article .calendar td.on").append("<img class='snowflake' style='position:absolute;left: 13px; top: 3px;' src='http://z5.tuanimg.com/v2/core/img/qd_icon5.png' />"), e(".sign_board .article .calendar td.on").css("background", "none")), e(".sign_board .article .calendar td.on").each(function () {
                            var t = e(this);
                            t.css("background", "none"), t.children("img").css({
                                left: "12px",
                                top: "5px"
                            });
                            for (var n = 1; 16 > n; n++) {
                                var a = n;
                                10 > n && (a = "0" + n), t.hasClass("2015-2-" + a) && (t.children("img").remove(), t.append("<img class='snowflake' style='position:absolute;left: 4px; top: -4px;width:35px;height:35px;' src='http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/dacu_flag1.png' />"))
                            }
                        }), n.createUncheckPanelAd();
                        break;
                    case "0":
                        r.push('<a href="javascript:void(0)" class="signin qdicon signin_unchecked" id="dlqd"></a>'), r.push('<div class="dropdown-menu"><div class="title_user_status"><span class="gold_img"></span><span class="user_jifen">我的积分：<b>' + tuanpub.opts.user.score + '</b>(可抵：<em></em>)</span><span class="current_today">已连续签到<b>' + l.day + '</b>天</span><span class="current_score_today">今日签到可得<b>' + l.current_score + "</b>分</span></div>"), r.push('<div class="ad_signin"><div class="nowaday_date"><b>' + p[u] + "</b><span>" + i + '</span><em></em></div><p>今日活动</p><div class="nowaday_activ"></div></div>'), r.push('<div class="article">' + n.calendar(l.sign_info || tuanpub.opts.user.checkin_status.sign_info) + "</div></div></div>"), o.hasClass("sign_panel") && o.removeClass("sign_panel").addClass("sign_board sign_board_unchecked"), o.hasClass("signin_on") || o.addClass("signin_on"), o.empty().html(r.toString()), o.find(".ft a").each(function () {
                            var t = e(this);
                            /\>\>$/.test(t.text()) || t.text(t.text() + ">>")
                        }), e(".article .calendar .get_nowaday").parent().css("color", "#cb1f24");
                        var g = new Date(2014, 11, 26),
                            h = new Date(2015, 1, 28, 23, 59, 59),
                            f = new Date;
                        f.getTime() <= h.getTime() && f.getTime() >= g.getTime() && (e(".sign_board .dropdown-menu").css("height", "357px"), e(".sign_board .dropdown-menu").css("top", "137%"), e(".sign_board .dropdown-menu .title_user_status").css("height", "57px"), e(".sign_board .dropdown-menu .title_user_status .gold_img").css("margin-top", "20px"), e(".sign_board .dropdown-menu .title_user_status span").css("line-height", "64px"), e(".sign_board .dropdown-menu").append("<img style='position:absolute;top:-18px;left:-11px;' src='http://z5.tuanimg.com/v2/core/img/qd_icon6.png' />"), e(".sign_board .article .calendar td.on").append("<img class='snowflake' style='position:absolute;left: 13px; top: 3px;' src='http://z5.tuanimg.com/v2/core/img/qd_icon5.png' />"), e(".sign_board .article .calendar td.on").css("background", "none")), e(".sign_board .calendar td.on").css("background", "none"), e("body").append("<style>.head_nav .r_con .sign_board a.signin.signin_unchecked{padding:0;position:relative;top:-15px;width:124px;background: url(http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/qiandao_default.gif) no-repeat;left:0px;}.head_nav .r_con .sign_board.sign_board_unchecked{width:124px;}.head_nav .r_con .sign_board a.signin.signin_unchecked:hover{padding:0;position:relative;top:-15px;width:124px;background: url(http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/qiandao_default_hover.gif) no-repeat;}</style>"), e(".sign_board .article .calendar td.on").each(function () {
                            var t = e(this);
                            t.children("img").css({
                                left: "12px",
                                top: "5px"
                            });
                            for (var n = 1; 16 > n; n++) {
                                var a = n;
                                10 > n && (a = "0" + n), t.hasClass("2015-2-" + a) && (t.children("img").remove(), t.append("<img class='snowflake' style='position:absolute;left: 4px; top: -4px;width:35px;height35px;' src='http://z5.tuanimg.com/v2/dacu/img/dacu2015_60122/dacu_flag1.png' />"))
                            }
                        }), n.createUncheckPanelAd()
                    }
                } if (s.container.data("status", s.type), s.callback) try {
                    s.callback.call(s.container, null)
                } catch (m) {
                    console && console.log(m)
                }
                s.addtion && n.signQueue.push(s.addtion), e.each(n.signQueue.toArray(), function (t, n) {
                    "function" === e.type(n) && n.call(s.container, null)
                }), c && (e(".side_panel").length ? c.createSignPanel(s.type) : c.init(s.type))
            }, createUnLogininPanelAd: function () {
                var t = this;
                if (!t.unLoginPanelAdData) return setTimeout(function () {
                    t.createUnLogininPanelAd()
                }, 100), void 0;
                var n, a, i = this.unLoginPanelAdData;
                if (i.not_checkin_ad.down_words_link ? (a = i.not_checkin_ad.down_words_out_way ? i.not_checkin_ad.down_words_out_way : "_blank", n = "<a target='" + a + "' href='" + i.not_checkin_ad.down_words_link + "'>" + i.not_checkin_ad.down_words + "</a>") : n = "<i>" + i.not_checkin_ad.down_words + "</i>", e(".info_notice .down_words").html(n), i.not_checkin_ad.up_words.length > 30) {
                    var s = 27 * (i.not_checkin_ad.up_words.length / 6 + 1);
                    e(".sign_panel .dropdown-menu .activ_signin .activ_info .activ_words p").css("height", s);
                    var o = e(".r_con  .activ_words").last().parent();
                    o.marquee({
                        container: ".activ_words",
                        item: "p",
                        type: "vertical"
                    }), this.animateArray.push(o)
                }
                var r, c, l, d, u = i.not_checkin_ad.image1.link_url,
                    p = i.not_checkin_ad.image2.link_url,
                    h = i.not_checkin_ad.image3.link_url,
                    g = i.not_checkin_ad.image4.link_url;
                r = "NULL" == u || "" == u || void 0 == u ? '<img src="' + i.not_checkin_ad.image1.image_url + '" ></img>' : "<a target=" + i.not_checkin_ad.image1.link_type + ' href="http://' + i.not_checkin_ad.image1.link_url + ' "><img src="' + i.not_checkin_ad.image1.image_url + '" ></img></a>', c = "NULL" == p || "" == p || void 0 == p ? '<img src="' + i.not_checkin_ad.image2.image_url + '" ></img>' : "<a target=" + i.not_checkin_ad.image2.link_type + ' href="http://' + i.not_checkin_ad.image2.link_url + ' "><img src="' + i.not_checkin_ad.image2.image_url + '" ></img></a>', l = "NULL" == h || "" == h || void 0 == h ? '<img src="' + i.not_checkin_ad.image3.image_url + '" ></img>' : "<a target=" + i.not_checkin_ad.image3.link_type + ' href="http://' + i.not_checkin_ad.image3.link_url + ' "><img src="' + i.not_checkin_ad.image3.image_url + '" ></img></a>', d = "NULL" == g || "" == g || void 0 == g ? '<img src="' + i.not_checkin_ad.image4.image_url + '" ></img>' : "<a target=" + i.not_checkin_ad.image4.link_type + ' href="http://' + i.not_checkin_ad.image4.link_url + ' "><img src="' + i.not_checkin_ad.image4.image_url + '" ></img></a>', e(".dropdown-menu .activity").html(r), e(".sign_ad .ad1").html(c), e(".sign_ad .ad2").html(l), e(".sign_ad .ad3").html(d)
            }, createUncheckPanelAd: function () {
                var t = this;
                if (!t.loginPanelAdData) return setTimeout(function () {
                    t.createUncheckPanelAd()
                }, 100), void 0;
                var n = this.loginPanelAdData,
                    a = n.checkin_ad.words ? n.checkin_ad.words_link ? "<div class='activ1'><a target='" + n.checkin_ad.words_out_way + "' href='" + n.checkin_ad.words_link + "'><span>" + n.checkin_ad.words + "</span><span class=" + n.checkin_ad.first_subscript + "></span></a></div>" : "<div class='activ1'><span>" + n.checkin_ad.words + "</span><span class=" + n.checkin_ad.first_subscript + "></span></div>" : "",
                    i = n.checkin_ad.second_words ? n.checkin_ad.second_words_link ? "<div class='activ2'><a target='" + n.checkin_ad.second_words_out_way + "' href='" + n.checkin_ad.second_words_link + "'><span>" + n.checkin_ad.second_words + "</span><span class=" + n.checkin_ad.second_subscript + "></span></a></div>" : "<div class='activ1'><span>" + n.checkin_ad.second_words + "</span><span class=" + n.checkin_ad.second_subscript + "></span></div>" : "",
                    s = n.checkin_ad.third_words ? n.checkin_ad.third_words_link ? "<div class='activ3'><a target='" + n.checkin_ad.third_words_out_way + "' href='" + n.checkin_ad.third_words_link + "'><span>" + n.checkin_ad.third_words + "</span><span class=" + n.checkin_ad.third_subscript + "></span></a></div>" : "<div class='activ1'><span>" + n.checkin_ad.third_words + "</span><span class=" + n.checkin_ad.third_subscript + "></span></div>" : "";
                activ = a + i + s, e(".dropdown-menu .ad_signin .nowaday_activ").append(activ), e(".title_user_status .user_jifen em").html("<i>¥</i>" + (tuanpub.opts.user.score * n.ratio.cash / n.ratio.score).toFixed(2));
                var o = new Date,
                    r = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate();
                n.calendar[r] && e(".sign_board .dropdown-menu .nowaday_date em").append(n.calendar[r])
            }, cookfunc: function (t) {
                if (!tuanpub.login()) return !1;
                e("#signinid"), e("#signinid").data("qq-g-num") || "", e("#signinid").data("qq-g-label") || "";
                var n = e.cookie("qd");
                qd_data = n.split("-");
                var a = qd_data[0],
                    i = (qd_data[2], qd_data[1] || 0),
                    s = e("#signinid").length > 0 ? e("#signinid").attr("info").split("-") : "1-2-3".split("-"),
                    o = (s[2], s[0]),
                    r = s[0],
                    c = s[0];
                i > 0 && 3 > i && (o = s[i], r = s[i - 1], c = s[i]), i >= 3 && (o = s[2], r = s[2], c = s[2]);
                var l = e("#signinid");
                switch (t.current_score && t.tomorrow_score && (o = r = t.current_score, c = t.tomorrow_score, l.attr("qdscore") || l.attr("qdscore", t.current_score + "-" + t.tomorrow_score)), a) {
                case "0":
                    this.createPanel({
                        type: a,
                        data: t,
                        callback: function () {
                            var n = tuanpub.login(),
                                a = n.idss.id2;
                            0 == a && tuanpub.opts.user.login_stauts.ck_times <= 3 ? e("#signinid .signin,.side_panel .signin").unbind("click").click(function () {
                                tuanpub.getModule("bindPhoneMod").init()
                            }) : setTimeout(function () {
                                e("#signinid .signin,.side_panel .signin,.dropdown-menu .more_jifen,.calendar .get_nowaday").unbind("click").click(function () {
                                    e.qdpost("/cn/checkin?checkin=1", t, e(this)), e(".hdts").remove()
                                })
                            }, 200)
                        }
                    });
                    break;
                case "1":
                    this.createPanel({
                        type: a,
                        data: t,
                        callback: function () {
                            e("#signinid .signin,.side_panel .signin").unbind("click")
                        }
                    })
                }
            }, action: function () {
                var t = new e.Buffers,
                    n = e.cookie("outoverlay");
                e("#head_nav .tooltip .close").trigger("click");
                var a = function () {
                        t.push('<b>今日是签到双倍积分日</b><br/>主站和手机客户端可分别签到领积分<br/><a target="_blank" href="http://www.tuan800.com/m/zhe800">去下载手机客户端</a>'), t = t.toString(), e("#signinid").tooltip({
                            msg: t,
                            offset: {
                                top: -60
                            }
                        }), e.cookie("outoverlay", !0, {
                            path: "/",
                            expires: 1,
                            domain: "zhe800.com"
                        })
                    },
                    i = tuanpub.opts.user.checkin_status || {};
                if (tuanpub.getModule("signin").cookfunc(i), 1 != i.is_double || n || 2 != i.status)
                    if (2 == i.status || n || 1 != i.is_double || 0 != i.channels.web || 0 != i.channels.mobile) {
                        if (1 == i.is_double && 0 == i.channels.web && 1 == i.channels.mobile && 2 != i.status && !e.cookie("signed")) {
                            var s = e.cookie("qd");
                            qd_data = s.split("-");
                            var o = qd_data[1] || 0,
                                r = e("#signinid").length > 0 ? e("#signinid").attr("info").split("-") : "1-2-3".split("-"),
                                c = r[0],
                                l = r[0],
                                d = r[0];
                            o > 0 && 3 > o && (c = r[o], l = r[o - 1], d = r[o]), o >= 3 && (c = r[2], l = r[2], d = r[2]);
                            var u = new e.Buffers,
                                p = function (e) {
                                    var t = e.split(/[\s\-\:]/);
                                    return t[1] = +t[1] - 1, new Function("return new Date(" + t.join(",") + ")")()
                                },
                                h = tuanpub.opts.user.current_time,
                                g = p(h).getTime(),
                                f = p("2014-12-30 0:0:0").getTime(),
                                m = p("2015-1-3 0:0:0").getTime(),
                                _ = g > f && m > g ? "元旦双签" : "周五签到";
                            u.push('<div class="friday app_signed"> <div class="con"> <h3>' + _ + "福利日</h3> <p>您已在客户端签到，今日积分+" + i.current_score + '，<br /> 点击以下按钮再次领积分</p> </div> <div class="ft"> <a href="http://www.zhe800.com/checkin" target="_blank" class="btn">活动详情</a> <a href="javascript:void(0)" id="signNow" class="btn_red close">领取积分</a> </div> </div>'), u = u.toString(), e.Dialogs({
                                id: "dialog_tishi_qiandao",
                                msg: u,
                                auto: !1,
                                closebtn: "a.close, span.close",
                                overlay: !0,
                                openfun: function () {
                                    e("#signNow").click(function () {
                                        var t = tuanpub.login(),
                                            n = t.idss.id2;
                                        0 == n && tuanpub.opts.user.login_stauts.ck_times <= 3 ? tuanpub.getModule("bindPhoneMod").init() : e.qdpost("/cn/checkin?checkin=1")
                                    })
                                }
                            })
                        }
                    } else a();
                else a()
            }, Queue: function () {
                tuanpub.login() || (e.cookie("qd", "", {
                    path: "/",
                    expires: -336,
                    domain: "zhe800.com"
                }), tuanpub.getModule("signin").init())
            }, Init: function () {
                tuanpub.headQueue.push(function () {
                    tuanpub.getModule("signin").action()
                })
            }
        }), e.qdpost = function (t, n, a) {
            var i = tuanpub.getModule("signin"),
                s = tuanpub.getModule("bindEmailPop");
            e.post(t, function (o) {
                var r = o.status,
                    c = o.score,
                    l = o.day,
                    d = e("#signinid").length > 0 ? e("#signinid").attr("info").split("-") : "1-2-3".split("-"),
                    u = (d[2], d[0]),
                    p = d[0],
                    h = d[0];
                if (e("#signinid").data("qq-g-num") || "", e("#signinid").data("qq-g-label") || "", 5 == r) {
                    var g = e.cookie("qd").split("-");
                    l = g[1], c = g[2]
                }
                l > 0 && 3 > l && (u = d[l], p = d[l - 1], h = d[l]), l >= 3 && (u = d[2], p = d[2], h = d[2]);
                var f = e("#signinid");
                if (n) n.current_score && n.tomorrow_score && (u = p = n.current_score, h = n.tomorrow_score);
                else if (f.attr("qdscore")) {
                    var m = f.attr("qdscore").split("-");
                    u = p = m[0], h = m[1]
                }
                var _ = "签到失败，请重新签到",
                    v = '请<a class="font3399cc"target="_blank" href="#">激活</a>您的账户后再来签到！',
                    b = "为避免刷小号现象，即日起<br/>每台电脑仅允许一个账号进行签到！";
                switch (r) {
                case -1:
                    i.createPanel({
                        type: "0"
                    }), -1 != t.indexOf("?checkin=1") && (tuanpub.opts, e.Dialog({
                        id: "dialog_empty_deal",
                        cls: "diglog-wrapper-ad",
                        offset: {
                            top: e("#signinid").offset().top + 45,
                            left: e("#signinid").offset().left - 175
                        },
                        msg: v,
                        overlay: !0,
                        auto: !1
                    }), e("#dialog_empty_deal .diginfo a").attr("href", o.url), e("#dialog_empty_deal .diginfo a").click(function () {
                        e("#dialog_empty_deal .close").trigger("click")
                    }));
                    break;
                case 0:
                    i.createPanel(), e("a.signin_a,a.cnlogin").click(function () {
                        return self.callfun(), !1
                    });
                    break;
                case 1:
                    tuanpub.opts.user.score = o.score, tuanpub.opts.user.checkin_status.status = 1, window._gaq ? a && a.parents(".side_panel").length ? _gaq.push(["_trackPageview", "/PageAction/daohang/bottom/Signin"]) : a && a.parents(".head_nav").length && _gaq.push(["_trackPageview", "/PageAction/daohang/top/Signin"]) : a && a.parents(".personalinfo").length && tuanpub.getModule("picstat").doStat("dazhuanpan_checkin"), e("#signinid").find(".signin_a").remove().end().prepend('<span class="signin_a"></span>');
                    var w = parseInt(e("#signinid dl dt strong").html());
                    if (e("#signinid dl dt span").html(l), c > w) {
                        var k = function () {
                            c > w ? (w++, e("#signinid dl dt strong").html(w)) : window.clearInterval(e.getTime.countTimer.qdjfadd)
                        };
                        e.getTime.countTimer.qdjfadd = window.setInterval(k, 100)
                    }
                    if (tuanpub.opts.user && tuanpub.opts.user.checkin_status && tuanpub.opts.user.checkin_status.sign_info) {
                        var m = tuanpub.opts.user.checkin_status.sign_info;
                        m[m.length - 1] = "1"
                    }
                    if (i.createPanel({
                        type: "1",
                        data: o
                    }), o.email_tip && s.create(), 1 == o.is_double && 0 == o.channels.mobile) {
                        var x = new Date(2014, 11, 26),
                            y = new Date(2015, 0, 3),
                            q = new Date;
                        if (q.getTime() < x.getTime() || q.getTime() > y.getTime()) {
                            var C = new e.Buffers;
                            C.push('<div class="friday"> <div class="con"> <h3>周五签到福利日</h3> <p>偷偷告诉你~~<br /> 现在去客户端签到还能再得积分哦！</p> </div> <div class="ft"> <a href="http://www.zhe800.com/checkin" target="_blank" class="btn">活动详情</a> <a href="http://www.zhe800.com/app" target="_blank" class="btn_red">客户端下载</a> </div> </div>'), C = C.toString(), e.Dialogs({
                                id: "dialog_tishi_qiandao",
                                cls: "diglog-wrapper",
                                msg: C,
                                auto: !1,
                                closebtn: "a.close, span.close",
                                overlay: !0
                            })
                        }
                    } else 1 == o.is_double && 1 == o.channels.mobile && 1 == o.channels.web && (e.cookie("signed", !0, {
                        path: "/",
                        expires: 1,
                        domain: "zhe800.com"
                    }), e.Dialogs({
                        id: "dialog_empty_deal",
                        cls: "dialog-wrapper-ad",
                        offset: {
                            top: e("#signinid").offset().top + 45,
                            left: e("#signinid").offset().left - 135
                        },
                        msg: "获取双倍分成功！",
                        auto: 5
                    }));
                    tuanpub.queue(tuanpub.getModule("signin").signinQueue);
                    var D = tuanpub.opts.user.checkin_status;
                    e(".r_con").append('<div class="show_jifen" id="xsjf"><div class="word_jifen"><p>+<em>' + D.current_score + "</em>积分</p></div><span></span></div>"), e("#xsjf").animate({
                        position: "absolute",
                        top: "-64px",
                        left: "154px",
                        opacity: "0"
                    }, 1200);
                    var x = new Date(2014, 11, 26),
                        y = new Date(2015, 0, 3),
                        q = new Date;
                    if (q.getTime() >= x.getTime() && q.getTime() <= y.getTime()) {
                        var z = {
                                26: 7,
                                27: 6,
                                28: 5,
                                29: 4,
                                30: 3,
                                31: 2,
                                1: 1,
                                2: 0
                            },
                            F = {
                                26: 141226,
                                27: 141227,
                                28: 141228,
                                29: 141229,
                                30: 141230,
                                31: 141231,
                                1: 150101,
                                2: 150102
                            },
                            j = new e.Buffers;
                        j.append('<div><img style="display:block;" src="http://z5.tuanimg.com/v2/core/img/qd_bg3.png" /><a target="_blank" href="http://www.zhe800.com/jifen/play_activity/zp' + F[q.getDate()] + '" class="sdcj_qcj"></a><p class="sdcj_word">接下来的 <em>' + z[q.getDate()] + "</em> 天，每天签到</br>得更多抽奖机会</p></div>"), e.Dialogs({
                            id: "dialog_tishi_sdcj",
                            cls: "dialog-wrapper sdcj",
                            msg: j.toString(),
                            auto: !1,
                            closebtn: "span.close",
                            overlay: !0
                        }), 2 == q.getDate() && e("#dialog_tishi_sdcj .sdcj_word").hide(), e(".sdcj_qcj, #dialog_tishi_sdcj .close").click(function () {
                            e("#dialog_tishi_sdcj").remove(), e(".dialog-overlay").remove()
                        })
                    }
                    break;
                case 2:
                    i.createPanel({
                        type: "0"
                    }), tuanpub.opts, e.Dialogs({
                        id: "dialog_empty_deal",
                        cls: "dialog-wrapper-ad",
                        offset: {
                            top: e("#signinid").offset().top + 45,
                            left: e("#signinid").offset().left - 135
                        },
                        msg: _,
                        auto: !1
                    });
                    break;
                case 3:
                    i.createPanel({
                        type: "1"
                    });
                    break;
                case 4:
                    i.createPanel({
                        type: "0"
                    });
                    break;
                case 5:
                    i.createPanel({
                        type: "0"
                    }), tuanpub.opts, e.Dialogs({
                        id: "dialog_empty_deal",
                        cls: "dialog-wrapper-ad",
                        msg: b,
                        auto: !1
                    });
                    break;
                default:
                    return !1
                }
                0 != r && -1 != r && (1 == r || 3 == r) && e("#signinid").addClass("signin_on"), (-1 == r || 2 == r || 4 == r || 5 == r) && e("#signinid .signin,.side_panel .signin").unbind("click").click(function () {
                    e.qdpost("/cn/checkin?checkin=1", n, e(this))
                })
            })
        }
    }(jQuery),
    function (e) {
        tuanpub.addModule("changeSignPanel", {
            Init: function () {
                tuanpub.getModule("signin").signQueue.push(this.replace)
            }, replace: function () {
                var t = this,
                    n = e("#signinid"),
                    a = t.next(".tooltip").find(".dropdown-menu"),
                    i = t.data("status");
                new e.Buffers, {
                    text: n.data("side-text"),
                    link: n.data("side-link")
                }, "signinid" === this.attr("id") && (a = this.find(".dropdown-menu"), i = this.data("status"))
            }
        })
    }(jQuery),
    function () {}(jQuery),
    function (e) {
        tuanpub.addModule("bindPhoneMod", {
            bindPhoneTpl: function () {
                var t = new e.Buffers,
                    n = tuanpub.opts.user.login_stauts.ck_times;
                if (t.append('<div class="bangdtit">'), 0 === n) t.append("<h3>绑定手机就能继续签到赚积分喽！</h3>");
                else {
                    var a = e.parseJSON(Base64.decode(e.cookie("ppinf").split("|")[3])).regt;
                    0 == a ? t.append("<h3>绑定手机更安全！立刻就得5积分！</h3>") : 1 == a && t.append("<h3>您还未绑定手机，快来绑定吧！完成绑定后登录折800更方便。</h3>")
                }
                return t.append("</div>"), t.append('<div class="reg_box clear">'), t.append('<div class="item">'), t.append('<label>手机号：</label><input type="text" class="itext1" id="mobil">'), t.append("</div>"), t.append('<div class="item i_code">'), t.append("<label>短信验证码：</label>"), t.append('<input type="text" class="itext2" id="validCodeP">'), t.append('<span class="i_codeP"><a class="send-idf" href="javascript:void(0);">获取验证码</a></span>'), t.append("</div>"), t.append('<div class="item i_txt">'), t.append('<input type="button" class="tbtn btn" id="reg_submit_i" value="">'), 0 !== n && t.append('<a class="nextbind" href="javascript:void(0)">下次绑定</a>'), t.append("</div>"), t.append("</div>"), t.toString()
            }, bindPhoneSugTpl: function () {
                var t = new e.Buffers;
                return t.append('<div class="bangdok">'), t.append("<h3>恭喜，手机号绑定成功。</h3>"), t.append(" </div>"), t.toString()
            }, init: function (t, n) {
                var a = (tuanpub.opts, this),
                    n = n;
                a.phoneSource = void 0 == n ? "" : n, "function" == typeof t && (this.bindSucCallBack = t), setTimeout(function () {
                    e.Dialogs({
                        id: "dialog_bdsj_bangding",
                        overlay: !0,
                        msg: a.bindPhoneTpl(),
                        auto: !1
                    });
                    var t = e("#reg_submit_i");
                    a.inputEvent(), tuanpub.getMobileCode(e(".send-idf"), e("#mobil")), t.live("click", function (e) {
                        e.preventDefault(), a.Checkout()
                    }), 0 !== e("a.nextbind").length && e("a.nextbind").click(function () {
                        e("#dialog_bdsj_bangding .close").trigger("click"), e.qdpost("/cn/checkin?checkin=1")
                    })
                }, 200)
            }, inputEvent: function () {
                var t = [e("#mobil"), e("#validCodeP")],
                    n = [{
                        focus: function () {
                            e(this).inputWarn("为了您的安全，请确保绑定手机号是您的真实手机", 1), e("#reg_submit_i").inputNotip()
                        }, blur: function () {
                            e(this).quizMobile()
                        }
                    }, {
                        focus: function () {
                            e(this).inputNotip(), e("#reg_submit_i").inputNotip()
                        }, blur: function () {
                            e(this).quizVeriCode()
                        }
                    }];
                e.each(t, function (e, t) {
                    t.live(n[e])
                })
            }, Checkout: function () {
                var t = [e("#mobil"), e("#validCodeP")];
                e.each(t, function (e, t) {
                    t.trigger("blur")
                }), e(".reg_box").find(".msg_zt3")[0] || this.submitForm()
            }, submitForm: function () {
                var t = this;
                e.getScript("http://passport.tuan800.com/api/bind_mobiles?phone_number=" + e("#mobil").val() + "&phone_confirmation=" + e("#validCodeP").val() + "&phonesource=" + t.phoneSource, {
                    callback: function () {
                        var n = window.result1 || {};
                        switch (n.status) {
                        case 1:
                            "yes" == tuanpub.opts.user.login_stauts.login && (e("#reg_submit_i").inputNotip(), e("#dialog_bdsj_bangding .close").trigger("click"), e.Dialogs({
                                overlay: !0,
                                id: "dialog_bdsj_bangding",
                                msg: t.bindPhoneSugTpl,
                                auto: !0,
                                times: 3,
                                closefun: function () {
                                    e.qdpost("/cn/checkin?checkin=1")
                                }
                            }), t.bindSucCallBack && t.bindSucCallBack());
                            break;
                        case 2:
                            return e("#validCodeP").inputError(n.message);
                        case 3:
                            return e("#reg_submit_i").inputError(n.message);
                        case 10:
                            return e("#reg_submit_i").inputError(n.message);
                        case 11:
                            return e("#mobil").inputError(n.message);
                        default:
                            e("#reg_submit_i").inputNotip()
                        }
                    }, cache: "false"
                })
            }
        })
    }(jQuery),
    function (e) {
        var t = {
                tip: function (e, t, n) {
                    var a = this.parents(".item").removeClass("msg_zt1 msg_zt2 msg_zt3");
                    this.siblings(".msg_box").remove(), e !== !0 && a.addClass("msg_zt" + e).append('<div class="msg_box row' + n + '"><em></em><span class="msg">' + t + "</span></div>")
                }, isMobile: function (e) {
                    return e ? /^1\d{10}$/.test(e) ? void 0 : 2 : 1
                }, isPcode: function (e) {
                    return e ? void 0 : 1
                }
            },
            n = {
                quizVeriCode: function () {
                    var e = this;
                    e.val() ? e.inputNotip() : e.inputError("请输入短信验证码")
                }, quizMobile: function () {
                    var e = this;
                    switch (t.isMobile(e.val())) {
                    case 1:
                        return e.inputError("请输入手机号");
                    case 2:
                        return e.inputError("手机号码格式错误");
                    default:
                        return e.inputCorrect()
                    }
                }
            };
        e.extend(e.fn, {
            inputWarn: function (e, n) {
                t.tip.call(this, 1, e, n || 1)
            }, inputError: function (e, n) {
                t.tip.call(this, 3, e, n || 1)
            }, inputCorrect: function () {
                t.tip.call(this, 2, "", 1)
            }, inputNotip: function () {
                t.tip.call(this, !0)
            }
        }, n, {
            sendMobileCode: function (t, n) {
                var n = (e(this), n || new Function);
                e.getScript("http://passport.tuan800.com/api/bind_mobiles/phone_confirmations?phone_number=" + e("#mobil").val() + "&id=" + (new Date).valueOf(), {
                    callback: function () {
                        var t = window.result || {};
                        switch (t.status) {
                        case 1:
                            break;
                        case 2:
                            return e("#mobil").inputError(t.message), n(t);
                        case 3:
                            return e("#mobil").inputError(t.message), n(t);
                        case 4:
                            return e("#mobil").inputError(t.message), n(t);
                        case 5:
                            return e("#mobil").inputError(t.message), n(t);
                        case 10:
                            return e("#mobil").inputError(t.message), n(t);
                        case 11:
                            return e("#mobil").inputError(t.message), n(t)
                        }
                    }, cache: "false"
                })
            }
        }), e.extend(tuanpub, {
            addTimeout: function (e, t, n, a) {
                var i = new Function,
                    s = null;
                return a = a || i, n = n || i, window.setInterval(function () {
                    return 0 === e-- ? (a.call(window, e), window.clearInterval(s)) : (n.call(window, e), void 0)
                }, t)
            }, getMobileCode: function (n, a) {
                var i = (new Function, !0),
                    s = null,
                    o = 120,
                    r = 1e3;
                e(".send-idf").unbind().bind("click", function () {
                    if (i) switch (a = e("#mobil"), t.isMobile(a.val())) {
                    case 1:
                        return a.inputError("请输入手机号");
                    case 2:
                        return a.inputError("手机号码格式错误");
                    default:
                        s = tuanpub.addTimeout(o, r, function (t) {
                            e(".send-idf").html("" + (10 > t ? "0".concat(t) : t) + "秒后重新发送").css({
                                cursor: "default",
                                "background-position": "0 -208px"
                            }), e(".reg_box .item .i_codeP a").css("width", "120px"), i = !1
                        }, function () {
                            clearInterval(s), i = !0, counter = o, e(".send-idf").html("获取验证码").css({
                                cursor: "pointer",
                                "background-position": "0 -142px"
                            }), e(".reg_box .item .i_codeP a").css("width", "84px")
                        }), e("#dialog_bdsj_bangding").find(".close").bind("click", function () {
                            clearInterval(s), i = !0, counter = o, e(".send-idf").html("获取验证码").css({
                                "background-position": "0 -142px"
                            }), e(".reg_box .item .i_codeP a").css("width", "84px")
                        }), n.sendMobileCode(a.val(), function () {
                            clearInterval(s), i = !0, counter = o, e(".send-idf").html("获取验证码").css({
                                "background-position": "0 -142px"
                            }), e(".reg_box .item .i_codeP a").css("width", "84px")
                        })
                    }
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("dropbind", {
            OnLoad: function () {
                e(".zhe_intro,#signinid,.search .sort,.yg_wrap").each(function () {
                    e(this).dropdown({
                        evt: "hover"
                    })
                }), e.browser.msie && window.performance && e(".dropdown").mouseenter(function () {
                    var t = (e(this), e(this).find("iframe"));
                    t.length && t.css("position", "relative")
                })
            }
        }), tuanpub.addModule("search", {
            OnLoad: function () {
                var t = e(".header .search"),
                    n = t.find("form"),
                    a = t.find(".sort"),
                    i = a.find("a"),
                    s = i.filter(".dj"),
                    o = i.filter(".qw"),
                    r = a.siblings(".txt"),
                    c = r.siblings("label");
                a.find(".dropdown-menu"), n.find(".txt"), o.hasClass("active") && c.show(), o.bind("mouseenter", function () {
                    s.removeClass("active")
                }), o.bind("mouseleave", function () {
                    s.addClass("active")
                }), a.delegate("a", "click", function (t) {
                    t.preventDefault();
                    var i = e(this);
                    if (i.hasClass("dj") ? (n.attr({
                        action: "http://search.zhe800.com/search",
                        target: "_self"
                    }), r.attr("name", "keyword"), c.hide()) : (n.attr({
                        action: "http://s.etao.com/search",
                        target: "_blank"
                    }), r.attr("name", "q"), r.val() || c.show()), i.closest(".dropdown-menu").length) {
                        var s = a.find("a"),
                            o = s.not(i),
                            l = i.attr("class").split(" ")[0],
                            d = i.text();
                        i.attr({
                            "class": o.attr("class").split(" ")[0]
                        }), i.html(o.text()), o.attr("class", l), o.html(d + '<i class="icon-arrow arrow-down"></i>')
                    }
                    a.removeClass("open")
                }), r.focus(function () {
                    c.hide()
                }), r.blur(function () {
                    var e = i.filter(".qw");
                    e.hasClass("active") && !r.val() && c.show()
                }), c.click(function () {
                    r.focus()
                }), "placeholder" in document.createElement("input") || e("input,textarea").each(function () {
                    var t = e(this),
                        n = t.attr("placeholder");
                    n && (t.val(n), t.focus(function () {
                        var e = t.val();
                        e == n && t.val("")
                    }), t.blur(function () {
                        var e = t.val();
                        "" == e && t.val(n)
                    }))
                })
            }
        }), tuanpub.addModule("sideNav", {
            create: function () {
                function t(t, s, c) {
                    var l = a,
                        d = s ? s : "bd",
                        u = c ? c : "",
                        p = 0;
                    o.push('<div class="' + d + '"><ul>'), e.each(t, function (e, t) {
                        l = /^http/.test(t) ? "" : a, -1 != n.indexOf(t) && r ? (o.push('<li class="' + d + p + '"><a class="on" href="' + l + t + (/\?/.test(t) ? "&" : "?") + i + '">' + u + e + "</a></li>"), r = !1) : "zhi_guang" == d && 0 == p ? (o.push('<li class="' + d + p + '"><a class="" href="' + l + t + (/\?/.test(t) ? "&" : "?") + i + '">' + u + e + "</a></li>"), o.push("<em>|</em>")) : o.push('<li class="' + d + p + '"><a class="" href="' + l + t + (/\?/.test(t) ? "&" : "?") + i + '">' + u + e + "</a></li>"), p += 1
                    }), o.push("</ul></div>")
                }
                var n = document.location.href,
                    a = (location.hostname, location.pathname, "http://www.zhe800.com/"),
                    i = "utm_content=left_menu",
                    s = {
                        tag1: {
                            "品牌特卖": "http://brand.zhe800.com",
                            "9块9包邮": "ju_type/baoyou",
                            "20元封顶": "ju_type/fengding",
                            "精选预告": "jingxuanyugao",
                            "0元抽奖": "jifen/raffle"
                        },
                        tag2: {
                            "女装": "ju_tag/taofushi",
                            "男装": "ju_tag/taonanzhuang",
                            "居家": "ju_tag/taojujia",
                            "母婴": "zhuanchang/muying",
                            "鞋包": "ju_tag/taoxiebao",
                            "配饰": "ju_tag/taopeishi",
                            "美食": "ju_tag/taomeishi",
                            "数码": "ju_tag/taodianqi",
                            "美妆": "ju_tag/taomeizhuang",
                            "文体": "ju_tag/taoqita",
                            "中老年": "ju_tag/taoold"
                        },
                        channel: {
                            "值得买": "http://zhi.zhe800.com",
                            "值得逛": "http://guang.zhe800.com"
                        },
                        appcode: "http://z5.tuanimg.com/v1/ju/core/img/appcode.png"
                    },
                    o = new e.Buffers,
                    r = !0;
                return o.push('<div class="logo"><a href="' + a + "?" + i + '"><img alt="" src="http://z5.tuanimg.com/v2/core/img/side_logo_min.png" width="145" height="70"></a></div><div class="content">'), t(s.tag1), o.push('<div class="line"></div>'), t(s.tag2, "bdc", "<i></i>"), t(s.channel, "zhi_guang"), o.push('<div class="sidenav_qrcode"><img src="http://z5.tuanimg.com/v2/core/img/qrcode_65057_100.jpg"></div>'), o.toString()
            }, selfQueue: new e.Buffers,
            ignore: function () {
                function t(a) {
                    e.each(a, function (a, s) {
                        switch (e.type(s)) {
                        case "string":
                            return i = new RegExp(s + "+").test(n), !i;
                        case "array":
                            t(s)
                        }
                    })
                }
                var n = location.href,
                    a = this,
                    i = !1;
                return t(a.selfQueue.toArray()), i
            }, Init: function () {
                this.selfQueue.push(["contact", "service_terms"])
            }, OnLoad: function () {
                var t = e('<div class="side_nav"></div>'),
                    n = this;
                n.ignore() || (t.html(n.create()).appendTo("body"), e.each(n.selfQueue.toArray(), function (n, a) {
                    "function" === e.type(a) && a.call(t, null)
                }), t.affix({
                    top: 70,
                    maxTop: e(".about").length ? e(".about").offset().top - 20 : null,
                    oHeight: t.height() + 70
                }), t.find(".add_link").hover(function () {
                    e(this).addClass("add_link_hover").find(".qr_code").show()
                }, function () {
                    e(this).removeClass("add_link_hover").find(".qr_code").hide()
                }), window.zhideguang && e(".side_nav .zhi_guang .zhi_guang0 a").addClass("on"), e(".move_padding .add_link a").click(function () {
                    _gaq.push(["_trackPageview", "/PageAction/left_menu/online_kefu"])
                }))
            }
        }), tuanpub.addModule("sideNavNew", {
            Init: function () {
                tuanpub.getModule("sideNav").selfQueue.push(function () {
                    var t = new e.Buffers;
                    t.push('<form class="search" target="_blank" action="http://search.zhe800.com/search">'), t.push('<input type="text" name="keyword" class="txt" placeholder="搜索" autocomplete="off">'), t.push('<input type="submit" value="" class="smt">'), t.push("</form>"), e(".side_nav .content .bdc ul").first().after(t.toString()), setTimeout(function () {
                        e("form.search .txt").placeholder({
                            pColor: "#cccccc"
                        })
                    }, 0), e(".index_collection").length > 0 && e("<style id='colls'>.side_nav{top:198px}</style>").appendTo("body"), e(".secjunav").length > 0 && e("<style>.side_nav.affix{top:45px !important}</style>").appendTo("body"), e(".secjunav.ranking_list").length > 0 && e("<style>.side_nav.affix{top:70px !important}</style>").appendTo("body"), e("#subscribeNew").click(function () {
                        var t = new e.Buffers;
                        t.push('<div class="title">邮件订阅</div>'), t.push('<div class="des">请填写您的邮箱，订阅精选商品信息</div>'), t.push('<div class="email"><label>Email：</label><input placeholder="示例：xxx@163.com" type="text"><em></em><span>请正确填写邮箱！</span></div>'), t.push('<div class="check"><em></em>我已阅读<a href="http://www.zhe800.com/service_terms" target="_blank">《隐私条款》</a></div>'), t.push('<div class="confirm"><a href="javascript:void(0)" target="_self">立即订阅</a><span>请勾选已阅读《隐私条款》！</span></div>'), e.Dialogs({
                            id: "subscribe_Dialog",
                            overlay: !0,
                            auto: !1,
                            openfun: function () {
                                e("#subscribe_Dialog .check em").toggle(function () {
                                    e(this).addClass("nocheck"), e("#subscribe_Dialog .confirm span").addClass("error")
                                }, function () {
                                    e(this).removeClass("nocheck"), e("#subscribe_Dialog .confirm span").removeClass("error")
                                }), e("#subscribe_Dialog .email input").blur(function () {
                                    var t = e(this),
                                        n = /^([a-zA-Z0-9]+[_|\_|\.\-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/;
                                    n.test(t.val()) ? t.removeClass("error").siblings("em").removeClass().addClass("correct").end().siblings("span").removeClass("error") : t.addClass("error").siblings("em").removeClass().addClass("error").end().siblings("span").addClass("error")
                                }).placeholder(), e("#subscribe_Dialog .confirm a").click(function () {
                                    return e("#subscribe_Dialog .confirm span").hasClass("error") ? (e(this).siblings("span").addClass("error"), !1) : (e("#subscribe_Dialog .email input").trigger("blur"), e("#subscribe_Dialog .email span").hasClass("error") ? !1 : (e.ajax({
                                        url: "/cn/customization/email",
                                        type: "POST",
                                        dataType: "JSON",
                                        data: {
                                            key: "email",
                                            value: e("#subscribe_Dialog .email input").val()
                                        },
                                        success: function (t) {
                                            if (t.status) {
                                                var n = new e.Buffers;
                                                n.push('<div class="title">邮件订阅</div>'), n.push('<div class="suc"><em></em>邮件订阅成功！</div>'), n.push('<div class="sucdes">精选商品信息将定时发送到您的邮箱</div>'), n.push('<div class="sucbtn"><em class="closeem">完成</em><a href="http://www.zhe800.com/hd/firsttask/emailandmobile" target="_blank">绑定邮箱，获得5积分 >></a></div>'), n.push('<div class="countdown"><i>10</i>秒后自动关闭</div>'), e("#subscribe_Dialog .diginfo").html(n.toString()), e("#subscribe_Dialog em.closeem").click(function () {
                                                    e("#subscribe_Dialog span.close").trigger("click")
                                                });
                                                var a = setInterval(function () {
                                                    var t = parseInt(e("#subscribe_Dialog .countdown i").html());
                                                    return t--, 0 === t ? (e("#subscribe_Dialog span.close").trigger("click"), clearInterval(a), void 0) : (e("#subscribe_Dialog .countdown i").html(t), void 0)
                                                }, 1e3)
                                            } else alert("订阅失败")
                                        }
                                    }), void 0))
                                })
                            }, msg: t.toString()
                        })
                    })
                }), tuanpub.getModule("sideNav").selfQueue.push(function () {
                    var t, n, a = this,
                        i = a.find(".content .bd ul").first(),
                        s = new e.Buffers;
                    s.push('<li class="nav_temai"><a href="http://shop.zhe800.com?utm_content=left_menu" target="_blank">特卖商城</a></li>'), t = e(s.toString()), n = t.find("a"), i.append(t), new RegExp(location.hostname, "i").test(n.attr("href")) && n.addClass("on")
                }), tuanpub.getModule("sideNav").selfQueue.push(function () {
                    var t, n, a = this,
                        i = a.find(".content .bd ul").first(),
                        s = new e.Buffers;
                    s.push('<li><a href="http://www.zhe800.com/n/youpinhui?utm_content=left_menu">优品汇</a></li>'), t = e(s.toString()), n = t.find("a"), i.append(t), new RegExp("http://www.zhe800.com/n/youpinhui", "i").test(location.href) && n.addClass("on")
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("tbCombine", {
            queue: function () {
                var t = e.cookie("ppinf");
                if (t) {
                    var n = tuanpub.login(),
                        a = tuanpub.opts.user.login_stauts,
                        i = 4 == n.sigw,
                        s = a.phone_number || !1,
                        o = "http://i0.tuanimg.com/pp/tb/js/tb1.6.min.js";
                    if (void 0 == a.taobao_api || !i) return !1;
                    if (1 == a.tb_shop_user) return;
                    e.cookie("notip", "", {
                        expires: -1
                    }), e.cookie("noTbPop", "false", {
                        expires: -1
                    }), 1 == a.taobao_api && i && (s ? 0 == a.password_setted && e.getScript(o, function () {
                        var t = tuanpub.getModule("accountCombine");
                        t.exports({
                            msg: e.ParseTpl(t.tpl("tbOutBinded"), {
                                tel: s
                            }),
                            close: !1
                        })
                    }) : e.getScript(o, function () {
                        var e = tuanpub.getModule("accountCombine");
                        e.exports("tbOutOpen")
                    })), 0 == a.taobao_api && i && e.getScript(o, function () {
                        var e = tuanpub.getModule("accountCombine");
                        e.exports("tbOutClose")
                    })
                }
            }, Init: function () {
                tuanpub.headQueue.push(this.queue)
            }
        })
    }(jQuery),
    function (e) {
        e.tao_dingyue = function () {
            var t = e("#subscribe_email"),
                n = t.val();
            if ("" == n) return alert("请输入您的Email地址。"), !1;
            var a = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
            return a.test(n) ? /\yahoo.cn+$/.test(n) || /\yahoo.com.cn+$/.test(n) ? (alert("雅虎官方关闭邮箱业务，请换其它邮箱"), !1) : (e.post("/email_subscribe", {
                email: n
            }, function (e) {
                alert(e)
            }), !0) : (alert("邮件地址格式错误，请检查。"), !1)
        }
    }(jQuery),
    function (e) {
        e.browser.msie && e.browser.version < 7 && (tuan800ued.addModule("ie6png", {
            OnLoad: function () {
                this.fix(".toolbar a i")
            }, fix: function (t) {
                var n = this,
                    a = "";
                this.fixSel.push(t || ""), a = n.fixSel.toString(), window.DD_belatedPNG ? DD_belatedPNG.fix(a) : e.getScript("http://z0.tuanimg.com/v1/ju/index/js/DD_belatedPNG.min.js", function () {
                    DD_belatedPNG.fix(a)
                })
            }, fixSel: new e.Buffers
        }), tuan800ued.addModule("ie6Fixed", {
            fixed: function (t, n) {
                function a() {
                    var e = document.body.scrollTop || document.documentElement.scrollTop;
                    t.css("top", e + i)
                }
                if ("boolean" == e.type(arguments[0]) && !arguments[0]) return e(window).unbind("scroll", a), void 0;
                var i = (t.position().left, n || 0);
                e(window).bind("scroll", a)
            }
        }))
    }(jQuery),
    function (e) {
        e(function () {
            function t() {
                a.height(i * s), timer = setInterval(function () {
                    o++, n(), o >= i && (a.stop().css({
                        top: 0
                    }).animate({
                        top: -s
                    }, 1e3), o = 1)
                }, 5e3)
            }

            function n() {
                var e = o * s;
                a.stop().animate({
                    top: -e
                }, 1e3)
            }
            var a = e(".scroll_link");
            e(a).find("li").eq(0).clone().appendTo(a);
            var i = a.children().length,
                s = a.find("li").innerHeight(),
                o = 0;
            return 3 > i ? !1 : (a.hover(function () {
                clearInterval(timer)
            }, function () {
                t()
            }), t(), void 0)
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("individuation", {
            OnLoad: function () {
                var t = e(".deal"),
                    n = 0 === t.length ? e(".dealbox") : t.parent("div");
                n.delegate(".deal a", "click", function () {
                    var t = e(this).attr("href"),
                        n = /www.zhe800.com\/.*\/fan/;
                    if (-1 !== t.indexOf("out.zhe800.com") || n.test(t)) {
                        var a = parseInt(e.cookie("oc") || 0),
                            i = a + 1;
                        e.cookie("oc", i, {
                            expires: 90,
                            path: "/",
                            domain: ".zhe800.com"
                        })
                    }
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("bindEmailPop", {
            create: function () {
                if (!e("#bind_email").length) {
                    var t = new e.Buffers,
                        n = e('<div id="bind_email"></div>'),
                        a = e(window);
                    t.push('<div class="inner"> <a href="javascript:void(0)" class="icon-close close"></a> <div class="bd"> <p>绑定邮箱可获得<em>5积分</em>啦~</p> <div class="triggers"> <a href="http://www.zhe800.com/hd/firsttask/emailandmobile" target="_blank" class="btn">立即去绑定</a> <a href="javascript:void(0)" class="next_time">下次绑定</a> </div> </div> </div>'), n.html(t.toString()), e("#toolbar").after(n), n.css({
                        top: (a.height() - n.height()) / 2
                    }), n.on("click", ".close", function (e) {
                        e.preventDefault(), n.remove()
                    }), n.find(".next_time").bind("click", function (e) {
                        e.preventDefault(), n.find(".close").trigger("click")
                    })
                }
            }, isBind: function () {
                var t = tuanpub.login() || e.parseJSON(Base64.decode(e.cookie("ppinf").split("|")[3]));
                return 1 === t.idss.id1
            }, checkCkTimes: function () {
                return !0
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("hotTags", {
            OnLoad: function () {
                e("#js_hottags .tag-nav a").click(function () {
                    var t = e(this),
                        n = t.data("tag");
                    e("#js_hottags .tag-nav a").removeClass("on"), t.addClass("on");
                    var a = e("#js_hottags .tag-lists div");
                    a.hide();
                    for (var i = 0; i < a.length; i++) {
                        var s = a.eq(i).data("tag");
                        if (s == n) return a.eq(i).show(), !1
                    }
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("search_suggestion", {
            OnLoad: function (t) {
                e(".header .search .txt").attr("autocomplete", "off"), e(".header .search form").attr("target", "_self"), t.sugg = {
                    val: e(".header .search .txt").val(),
                    upval: "",
                    show: function (n) {
                        var a = this;
                        if (38 != n && 40 != n && 39 != n && 37 != n && (a.i = -1), a.i = a.i || 0, a.list = a.list || e("#JS_query li:not(.close)"), a.list.length > 0) switch (n) {
                        case 38:
                            return a.clear(), a.i < 1 && (a.i = a.list.length), a.i--, a.list.eq(t.sugg.i).addClass("hover"), a.vals(a.list.eq(a.i)), !1;
                        case 40:
                            return a.clear(), a.i == a.list.length - 1 && (a.i = -1), a.i++, a.list.eq(t.sugg.i).addClass("hover"), a.vals(a.list.eq(a.i)), !1
                        }
                        a.getjson()
                    }, getjson: function () {
                        var t = this,
                            n = e(".header .search .txt").val();
                        return t.url = "http://search.zhe800.com/zhe800-search/suggestion/searchJsonp", "" == n ? (t.outkeys(), !1) : (e.ajax({
                            type: "get",
                            url: t.url,
                            dataType: "jsonp",
                            jsonpCallback: "jsonp",
                            data: {
                                word: n,
                                limit: 10,
                                offset: 0
                            },
                            success: function (t) {
                                var n = tuanpub.opts.sugg,
                                    a = t.response.docs || [],
                                    i = new e.Buffers,
                                    s = '<li class="close"><a href="javascript:void(0);" class="close_query">关闭</a></li>',
                                    o = "";
                                return 0 == a.length ? (n.outkeys(), !1) : (e.each(a, function (e, t) {
                                    i.append('<li info="' + t.word + '">' + t.word + "</li>")
                                }), o = i.toString(), e("#JS_query").size() > 0 ? e("#JS_query").empty().prepend(o + s) : (e(".search").css({
                                    "z-index": "9908",
                                    position: "relative"
                                }), e(".header .search form").after('<ul id="JS_query" class="search_query">' + o + "</li>" + s + "</ul>")), e("#JS_query .close_query").click(function () {
                                    n.outkeys()
                                }), e("#JS_query li").unbind().bind("mouseover", function () {
                                    tuanpub.opts.sugg.hovers(this)
                                }).bind("click", function () {
                                    n.vals(e(this)), e(".header .search form").attr("target", "_self").submit()
                                }), e("JS_query .close").unbind().css("cursor", "default"), n.list = e("#JS_query li:not(.close)"), void 0)
                            }, error: function () {
                                console.log("jsonp error")
                            }
                        }), void 0)
                    }, keys: function (e) {
                        var n = t.sugg,
                            e = window.event || e,
                            a = e.keyCode || e.which;
                        n.show(a)
                    }, hovers: function (e) {
                        var t = this;
                        t.clear(), t.list.each(function (n) {
                            e == t.list.get(n) && (t.i = n, t.list.eq(n).addClass("hover"))
                        })
                    }, vals: function (t) {
                        e(".header .search .txt").val(t.attr("info"))
                    }, focusHandler: function (n) {
                        var a = t.sugg,
                            i = e(".header .search .txt").val(); - 1 == location.href.indexOf("search.zhe800.com") && i == a.val && (e(".header .search .txt").attr("data-keyword", i), e(".header .search .txt").val(""));
                        var n = window.event || n;
                        n.keyCode || n.which, a.getjson()
                    }, blurHandler: function () {
                        var t = e(".header .search .txt"),
                            n = t.data("keyword");
                        "" == t.val() && n && t.val(n)
                    }, outkeys: function () {
                        e(".header .search").removeAttr("style"), e("#JS_query").remove()
                    }, clear: function () {
                        var e = t.sugg;
                        e.list.removeClass("hover")
                    }, submitForm: function (n) {
                        var a = t.sugg,
                            n = window.event || n,
                            i = n.keyCode || n.which;
                        return 13 == i ? (e(".header .search form").submit(), a.outkeys(), !1) : void 0
                    }
                }, e(".header .search .txt").bind("blur", function () {
                    window.setTimeout(tuanpub.opts.sugg.outkeys, 200)
                }).bind("keyup", t.sugg.keys).bind("paste", t.sugg.keys).bind("cut", t.sugg.keys).bind("focus", t.sugg.focusHandler).bind("blur", t.sugg.blurHandler).bind("keypress", t.sugg.submitForm)
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("feedback_popup", {
            OnLoad: function () {
                var t = this;
                e("body").delegate(".feedback_popup_handler", "click", function (n) {
                    var a = e(this),
                        i = new e.Buffers,
                        s = "请输入您的意见或者建议（必填）",
                        o = "QQ或者邮箱（必填）";
                    return i.append("<h4>意见反馈</h4>"), i.append("<ul>"), i.append('    <li class="hd"><p>折800真诚欢迎您的反馈，以更好的为您服务！</p></li>'), i.append('    <li class=""><span>反馈类型</span>'), i.append('        <select><option value="-1" selected="true">请选择</option><option value="0">意见建议</option><option value="2">投诉</option><option value="1">售后问题</option><option  value="3">账号/积分/页面异常</option><option  value="4">商品详情咨询</option><option  value="5">折800报名</option><option  value="6">商务合作</option></select>'), i.append("    </li>"), i.append('    <li class="exch_cont txt"><textarea class="gint">' + s + "</textarea></li>"), i.append('    <li class="exch_cont tip_normal"><p>为了方便我们进一步跟您联系，请填写如下信息</p></li>'), i.append('    <li class="exch_cont inp"><span><i>*</i>&nbsp;<input type="text" class="gint qqinp" value="' + o + '" /></span></li>'), i.append('    <li class="exch_cont tip_emergency"><p>如事情紧急，可咨询<a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDA2MTAyNV8xMzQ3NDhfODAwMDYxMDI1XzJf" target="_blank">在线客服 &gt;&gt;</a></p></li>'), i.append('    <li class="exch_cont tip_consult"><p>请咨询<a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDA2MTAyNV8xMzQ3NDhfODAwMDYxMDI1XzJf" target="_blank">在线客服 &gt;&gt;</a></p></li>'), i.append('    <li class="exch_cont tip_consultin"><p>请您在商品详情页咨询<span>卖家在线客服</span>（例如下图）</p></li>'), i.append('    <li class="exch_cont tip_consultin_img"><div></div></li>'), i.append('    <li class="exch_cont tip_sign"><p>报名折800活动请到<a href="https://zhaoshang.zhe800.com/" target="_blank">卖家中心&gt;&gt;</a></p></li>'), i.append('    <li class="exch_cont tip_business"><p>请将您的<span>姓名</span>、<span>联系方式</span>、<span>公司名称</span>以及<span>合作方式</span>编辑邮件至<a href="mailTo:contact@tuan800.com"><span>contact@tuan800.com</span></a>邮箱，会有相关人员与您进行联系。</p></li>'), i.append('    <li class="token hidden"><strong>验证码：</strong><input type="text" class="gint" autocomplete="off" name="captcha"> <img class="captchaImg" src=""> <a href="#">换一换</a></li>'), i.append("</ul>"), i.append('<div class="submit">'), i.append('    <i class="i_btn i_btn1"><a href="javascript:void(0);">确认提交</a></i>'), i.append("</div>"), a.parent().addClass("on"), e.Dialogs({
                        overlay: !1,
                        cls: "feedbackpanel closeblock",
                        auto: !1,
                        msg: i.toString(),
                        closefun: function () {
                            a.parent().removeClass("on")
                        }, openfun: function () {
                            e(".feedbackpanel textarea").bind({
                                focus: function () {
                                    e(this).val() == s && e(this).val(""), e(".feedbackpanel .token").hasClass("hidden") && (t.getVericode(), e(".feedbackpanel .token").removeClass("hidden"))
                                }, blur: function () {
                                    "" == e(this).val() && e(this).val(s)
                                }
                            }), e(".feedbackpanel .qqinp").bind({
                                focus: function () {
                                    e(this).val() == o && e(this).val(""), e(".feedbackpanel .token").hasClass("hidden") && (t.getVericode(), e(".feedbackpanel .token").removeClass("hidden"))
                                }, blur: function () {
                                    "" == e(this).val() && e(this).val(o)
                                }
                            }), e(".feedbackpanel .token a").click(function () {
                                return t.getVericode(), !1
                            }), e(".feedbackpanel .submit .i_btn1").click(function () {
                                t.formart(s, o)
                            }), e(".feedbackpanel select").change(function () {
                                var t = e(this).parents("ul"),
                                    n = e(this).val();
                                switch (t.find("li.exch_cont").hide(), t.next("div.submit").hide(), t.find("li.erroe").remove(), n) {
                                case "-1":
                                    t.next("div.submit").hide(), t.find("li.token").addClass("hidden");
                                    break;
                                case "0":
                                    s = "请输入您的意见或者建议（必填）", o = "QQ或者邮箱（必填）", t.find("li.txt textarea").val(s), t.find("li.inp input").val(o), t.find("li.txt").show(), t.find("li.tip_normal").show(), t.find("li.inp").show(), t.next("div.submit").show();
                                    break;
                                case "2":
                                    s = "请输入您的投诉事件（必填）", o = "手机号码（必填）", t.find("li.txt textarea").val(s), t.find("li.inp input").val(o), t.find("li.txt").show(), t.find("li.tip_normal").show(), t.find("li.inp").show(), t.find("li.tip_emergency").show(), t.next("div.submit").show();
                                    break;
                                case "1":
                                    t.find("li.tip_consult").show(), t.find("li.token").addClass("hidden");
                                    break;
                                case "3":
                                    t.find("li.tip_consult").show(), t.find("li.token").addClass("hidden");
                                    break;
                                case "4":
                                    t.find("li.tip_consultin").show(), t.find("li.tip_consultin_img").show(), t.find("li.token").addClass("hidden");
                                    break;
                                case "5":
                                    t.find("li.tip_sign").show(), t.find("li.token").addClass("hidden");
                                    break;
                                case "6":
                                    t.find("li.tip_business").show(), t.find("li.token").addClass("hidden")
                                }
                            })
                        }
                    }), n.preventDefault(), !1
                })
            }, formart: function (t, n) {
                var a = e(".feedbackpanel select").val();
                e(".feedbackpanel ul .erroe").remove();
                var i = this,
                    s = e(".feedbackpanel ul").append('<li class="erroe" />').find(".erroe").css("color", "#e20000"),
                    o = /^\d+$/gi,
                    r = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,
                    c = /^1{1}\d{10}/gi;
                if (0 == a) {
                    if ("" == e(".feedbackpanel textarea").val() || e(".feedbackpanel textarea").val() == t) return s.html("请填写意见或者建议"), !1;
                    if ("" == e(".feedbackpanel .qqinp").val() || e(".feedbackpanel .qqinp").val() == n) return s.html("请填写QQ号或邮箱"), !1;
                    if (!o.test(e(".feedbackpanel .qqinp").val()) && !r.test(e(".feedbackpanel .qqinp").val())) return s.html("QQ号或邮箱输入不正确"), !1
                } else if (2 == a) {
                    if ("" == e(".feedbackpanel textarea").val() || e(".feedbackpanel textarea").val() == t) return s.html("请填写投诉信息"), !1;
                    if ("" == e(".feedbackpanel .qqinp").val() || e(".feedbackpanel .qqinp").val() == n) return s.html("请填写手机号码"), !1;
                    if (!c.test(e(".feedbackpanel .qqinp").val())) return s.html("手机号码输入不正确"), !1
                }
                return "" == e(".feedbackpanel .token input").val() ? (s.html("请输入验证码"), !1) : (e.post("/remit/feedback", {
                    "feedback[type]": e(".feedbackpanel select").val(),
                    "feedback[content]": e(".feedbackpanel textarea").val(),
                    "feedback[contact]": e(".feedbackpanel .qqinp").val(),
                    captcha: e(".feedbackpanel .token input").val()
                }, function (t) {
                    e(".feedbackpanel").css("minHeight", 0), 0 == t.status ? (e(".feedbackpanel .diginfo ul").html('<li class="suc"><p><i class="gfail1"></i>提交成功！</p>亲，感谢您提供的宝贵意见！</li>'), e(".feedbackpanel .submit .i_btn1").html('<a href="javascript:void(0);">关闭</a>').unbind().click(function () {
                        e(".feedbackpanel .close").trigger("click")
                    })) : (t.messages.contact && s.html(t.messages.contact), t.messages.qq && s.html(t.messages.qq), t.messages.email && s.html(t.messages.email), t.messages.content && s.html(t.messages.content), t.messages.captcha && s.html(t.messages.captcha), i.getVericode())
                }), void 0)
            }, getVericode: function () {
                e.post("/cn/captcha", function (t) {
                    0 == t.status && e(".feedbackpanel .token img").attr("src", t.url)
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("showPhoneQrcode", {
            OnLoad: function () {
                e("#toolbar .phone-qrcode-down").dropdown({
                    evt: "hover"
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("new_user_dialog", {
            init: function () {
                if ("" !== e.cookie("firstTime")) return !1;
                var t = this,
                    n = new e.Buffers;
                n.append('<div class="new_user_page"><ul><li class="new_user_page1"><img src="http://z5.tuanimg.com/v2/core/img/new_user1_2.png" /><a target="_blank" class="try_it1" href="http://www.zhe800.com/zhuanchang/newuser"><img src="http://z5.tuanimg.com/v2/core/img/new_user1_1.png" /></a></li>'), n.append('<li class="new_user_page2"><img src="http://z5.tuanimg.com/v2/core/img/new_user2_2.png" /><a target="_blank" class="try_it2" href="http://www.zhe800.com/zhuanchang/newuser"><img src="http://z5.tuanimg.com/v2/core/img/new_user2_1.png" /></a></li>'), n.append('<li class="new_user_page3"><img src="http://z5.tuanimg.com/v2/core/img/new_user3_2.png" /><a target="_blank" class="try_it3" href="http://www.zhe800.com/zhuanchang/newuser"><img src="http://z5.tuanimg.com/v2/core/img/new_user3_1.png" /></a></li></ul>'), n.append('<div class="prev"></div><div class="next"></div><img class="bottom_img" src="http://z5.tuanimg.com/v2/core/img/new_user1_3.png" /></div>'), e.Dialogs({
                    overlay: !0,
                    cls: "new_user_dialog",
                    auto: !1,
                    msg: n.toString(),
                    closefun: function () {}, openfun: function () {}
                }), e(".diginfo").slide({
                    container: ".new_user_page ul",
                    item: "li",
                    num: 1,
                    auto: !0,
                    speed: 300,
                    callback: t.loop
                }), e(".new_user_page ul li a").click(function () {
                    e(".new_user_dialog .close").trigger("click")
                })
            }, loop: function (t) {
                e(".diginfo .bottom_img").attr("src", "http://z5.tuanimg.com/v2/core/img/new_user" + (t + 1) + "_3.png")
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("picstat", {
            doStat: function (t, n) {
                var a = [];
                if (n)
                    for (var i in n) n.hasOwnProperty(i) && a.push(i + "=" + n[i]);
                a.push("clsct=" + (new Date).getTime()), a = a.join("&");
                var s = document.createElement("img");
                s.src = "http://analysis.tuanimg.com/" + t + ".gif?" + a, s.onload = function () {
                    e(this).remove()
                }, document.body.appendChild(s)
            }
        })
    }(jQuery),
    function (e) {
        "function" == typeof define && define.amd ? require(["jquery", "tuanpub"], function (t) {
            e(t)
        }) : e(jQuery)
    }(function (e) {
        tuanpub.addModule("imEntrance", {
            Init: function () {
                e.getScript("http://z5.tuanimg.com/im/public/interface/iminject.js?63848", function () {
                    e(function () {
                        var t = e(".contractKf", ".about");
                        IMinit(t.parent()[0], {
                            type: "service",
                            busUid: "1"
                        }), t.remove()
                    })
                })
            }
        })
    });