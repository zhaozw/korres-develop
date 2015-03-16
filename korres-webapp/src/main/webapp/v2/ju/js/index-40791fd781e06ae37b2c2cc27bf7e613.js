function tao_dingyue_indm() {
        var e = $("#subscribe_email_indm"),
            t = e.val();
        if ("" == t) return alert("请输入您的Email地址。"), !1;
        var a = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
        return a.test(t) ? /\yahoo.cn+$/.test(t) || /\yahoo.com.cn+$/.test(t) ? (alert("雅虎官方关闭邮箱业务，请换其它邮箱"), !1) : ($.post("/email_subscribe", {
            email: t
        }, function (e) {
            alert(e)
        }), !0) : (alert("邮件地址格式错误，请检查。"), !1)
    }! function (e) {
        tuanpub.addModule("dealbinds", {
            Init: function () {
                document.write('<script type="text/javascript" src="http://localhost:8888/korres-webapp/v3/src/js/common/core/judeal.js?v=65080_20150211"></script>')
            }, dealData: {}, scrollLoad: function () {
                var t = this;
                e(".dealbox"), e(window).bind("scroll.loadmore", function () {
                    t.getDeal()
                })
            }, getDealTpl: function () {
                return judealModule.getDealTpl()
            }, adtpl: function () {
                var t = new e.Buffers;
                return t.push("<div class='dealad'>"), t.push("<a href='{{#url}}' target='_blank'><img src='{{#image}}' width='290' height='190' /></a>"), t.push("<h3><a href='{{#url}}'>{{#sec_title}}</a></h3>"), t.push("<h4><span><a href='{{#url}}'>{{#title}}</a></span><a target='_blank' href='{{#url}}'></a></h4>"), t.push("</div>"), t.toString()
            }(),
            createAdHtml: function (t) {
                for (var a = new e.Buffers, n = 0, i = t.length; i > n; n++) a.push(e.ParseTpl(this.adtpl, t[n]));
                return a.toString()
            }, init: function () {
                e(".showall, .recommenddeal").hide(), (void 0 === this.dealData.deals || 0 === this.dealData.deals.length) && (e("<style>.page_div{display:block;}</style>").appendTo("body"), e(".loading").hide(), e(".showall, .recommenddeal").show(), e("#zxt_zheid").length > 0 && !e("#zxt_zheid").data("created") && tuan800ued.getModule("zxt-zhe-index").init(tuanpub.opts)), e(".dealbox").on("mouseenter", ".dealad", function () {
                    e(this).addClass("dealon")
                }).on("mouseleave", ".dealad", function () {
                    e(this).removeClass("dealon")
                }), e(".dealbox").delegate(".deal .zt2.con .goods_img,.deal .zt2.con .zt2_qrcode,.deal .zt3.con .goods_img,.deal .zt3.con .zt2_qrcode", "mouseover", function () {
                    var t = e(this),
                        a = t.parents(".deal");
                    0 === a.find(".zt2_qrcode").length && a.find(".con").append("<div class='zt2_qrcode'><div class='bg_yugao'></div> <p class='down_app_word'>下载手机客户端</p> <p>提前5分钟开抢提醒</p><img class='deal_qrcode' src='" + a.data("qrcode") + "' /><a class='saoma' href='javascript:void(0)'><img src='http://z5.tuanimg.com/v2/ju/img/saoma.png' /></a> </div>"), e(this).parents(".deal").find(".zt2_qrcode").show()
                }), e(".dealbox").delegate(".deal .zt2.con .goods_img,.deal .zt2.con .zt2_qrcode,.deal .zt3.con .goods_img,.deal .zt3.con .zt2_qrcode", "mouseout", function () {
                    e(this).parents(".deal").find(".zt2_qrcode").hide()
                }), e(".showAllBtn").on("mouseenter", ".goto_mobile", function () {
                    e(".showAllBtn .goto_mobile .mobile_qrcode").show()
                }), e(".dealbox").delegate(".deal[data-type = '1'] .con.zt2 h4 .openAlert", "mouseenter", function () {
                    var t = e(this).parents(".deal");
                    0 == t.find(".yugao_hover").length && e(this).append("<span class='yugao_hover'><img src='http://z5.tuanimg.com/v2/ju/img/yugao_hover.png' /></span><em class='qiangxian'>抢先去看</em>"), "1" != e(this).data("btn_stop") && (setTimeout(function () {
                        e(this).attr("data-btn_stop", "1")
                    }, 0), e(".dealbox .deal .zt2.dealon .yugao_default").animate({
                        top: "-23px"
                    }, 100), e(".dealbox .deal .zt2.dealon .kaiqiang").animate({
                        top: "-32px"
                    }, 100), e(".dealbox .deal .zt2.dealon .yugao_hover").animate({
                        top: "5px"
                    }, 100), e(".dealbox .deal .zt2.dealon .qiangxian").animate({
                        top: "-2px"
                    }, 100))
                }).delegate(".deal[data-type = '1'] .con.zt2 h4 .openAlert", "mouseleave", function () {
                    e(".dealbox .deal .zt2.dealon .yugao_default").animate({
                        top: "6px"
                    }, 100), e(".dealbox .deal .zt2.dealon .kaiqiang").animate({
                        top: "-2px"
                    }, 100), e(".dealbox .deal .zt2.dealon .yugao_hover").animate({
                        top: "-25px"
                    }, 100), e(".dealbox .deal .zt2.dealon .qiangxian").animate({
                        top: "-32px"
                    }, 100), setTimeout(function () {
                        e(this).attr("data-btn_stop", "0")
                    }, 0)
                }), e(".top3box,.dealbox,#recommend,#zxt_zheid,.muyingbranddeal").on("mouseenter", ".deal", function () {
                    encodeURI(e(this).find("h3 a:last").html());
                    var t = new e.Buffers,
                        a = e(this).attr("data-uri"),
                        n = e(this).attr("data-fav"),
                        i = e(this);
                    "yes" == n ? t.push('<a href="javascript:void(0)" class="shc on mycol">已收藏</a>') : t.push('<a href="javascript:void(0)" class="shc mycol">收藏</a>'), e(this).find("h6").append(t.toString() + '<a target="_blank" class="jub" href="http://www.zhe800.com/ju_reports/' + a + '/new">举报</a>');
                    var o = e(this).find("h5"),
                        s = o.find("i").html();
                    o.empty().html("<em>剩余时间：</em><i>" + s + "</i>"), i.data("pinpai") && (o.find(".q1").remove(), o.append('<a class="pp_link" title="查看更多' + i.data("pinpai") + '商品" target="_blank" href="' + i.data("pinpai-link") + '"><span>' + i.data("pinpai") + "</span><i></i></a>")), e(this).find(".con").addClass("dealon"), tuanpub.getModule("openTuanAlert").dealInit(this)
                }).on("mouseleave", ".deal", function () {
                    e(this).find("h5 em,h5 b").remove(), e(this).find(".con").removeClass("dealon"), e(this).find(".mycol").remove(), e(this).find(".jub").remove()
                }), e('.deal img:first-child[src*="img/load_deal"]').lazyload()
            }, getDeal: function () {
                var t = this,
                    a = e(document).scrollTop();
                e(".dealbox").parent().height(), e(window).height(), a > 2 * e(document).height() / 3 && (e(window).unbind("scroll.loadmore"), t.appendDeal())
            }, appendDeal: function () {
                if (this.dealData.deals) {
                    var t = this.dealData.deals.splice(0, 30),
                        a = this;
                    if (e(".dealbox .deal").last().addClass("screentag"), e(".dealbox").append(a.createHtml(t)), setTimeout(function () {
                        var t, a = e(".screentag").last().nextAll(".deal");
                        0 !== a.length && (e('.deal img:first-child[src*="img/load_deal"]').lazyload(), e(window).scrollTop(e(window).scrollTop() + 1), tuanpub.getModule("dealFavorite").initDealFav(), t = tuan800ued.getModule("exposureStat"), t && t.appendToExposure(a))
                    }, 0), t.length < 30) {
                        if (e(".loading").hide(), e(".page_div").show(), e(".showall, .recommenddeal").show(), e("#zxt_zheid").data("created") || tuan800ued.getModule("zxt-zhe-index").init(tuanpub.opts), e(window).unbind("scroll.loadmore"), e(".page_div .next").length > 0) {
                            var n = e(".page_div .next a").attr("href"),
                                i = e.trim(e(".page_div .current").html()),
                                o = window.next_img || {},
                                s = o[i] || "http://z5.tuanimg.com/v2/patch/img/next_page.png";
                            e(".dealbox").append('<div class="next_img"><a href="' + n + (/\?/.test(n) ? "&" : "?") + 'utm_content=zhe800_deal"><img src="' + s + '"></a></div>'), e(".next_img").hover(function () {
                                e(".next_img").addClass("next_img_over")
                            }, function () {
                                e(".next_img").removeClass("next_img_over")
                            })
                        }
                    } else e(window).bind("scroll.loadmore", function () {
                        a.getDeal()
                    })
                }
            }, createHtml: function (e) {
                return judealModule.createDealsHtml(e)
            }, setDeal: function (e) {
                this.dealData = e || {}
            }, parseDealData: function (e) {
                judealModule.parseDealData(e)
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("zhuanc_guangao", {
            OnLoad: function () {
                e(".dealbox .blockAD").each(function () {
                    e(this).find("div").hover(function () {
                        e(this).addClass("addborder")
                    }, function () {
                        e(this).removeClass("addborder")
                    })
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("zxt-zhe-index", {
            Init: function (t) {
                t.zxtTozhehtml = function (t) {
                    var a, n, i = new e.Buffers,
                        o = "",
                        s = "";
                    for (s = "quanguo" === t.city ? "http://www.tuan800.com/?utm_source=zhe800" : "http://www.tuan800.com/" + t.city + "-tg?utm_source=zhe800", i.append(' <h2><span class="title"><a target="_blank" href="' + s + '">团800热门关注</a></span>'), a = 0, n = t.hot_concerns_links.length; n > a; a++) o = a === n - 1 ? "hottg last" : "hottg", 1 === t.hot_concerns_links[a].red_flag && (o += " hot"), i.append('<span class="' + o + '"><a target="_blank" href="' + t.hot_concerns_links[a].link + '">' + t.hot_concerns_links[a].title + "</a></span>");
                    return i.append('<span class="hottg lasta"><a target="_blank" href="' + s + '">查看更多&gt;&gt;</a></span></h2>{{#deals}}'), i.toString()
                }, t.dealtpl = function (t) {
                    var a = new e.Buffers;
                    return a.push('<ul class="tgul">'), e.each(t, function (e, t) {
                        a.push("<li>"), a.push('<a href="' + t.link + '" target="_blank"><img alt="' + t.title + '" src="' + t.image + '"></a>'), a.push('<p><a href="' + t.link + '" target="_blank">' + t.title + "</a></p>"), a.push("<h2><span>￥" + t.price + "</span><em>￥" + t.list_price + "</em></h2>"), 1 == t.oos && a.push('<span class="over"></span>'), a.push("</li>")
                    }), a.push("</ul>"), a.toString()
                }, t.jptpl = function (t) {
                    var a = new e.Buffers;
                    return a.push('<ul class="adul">'), e.each(t, function (e, t) {
                        a.push("<li>"), a.push('<a href="' + t.link + '" target="_blank"><img src="' + t.image + '"></a>'), a.push("</li>")
                    }), a.push("</ul>"), a.toString()
                }
            }, init: function (t) {
                var a = this;
                return e("#zxt_zheid").length < 1 ? !1 : (e("#zxt_zheid").data("created", "yes"), e.getJSON("http://geo.tuan800.com/getcity.js?callback=?", function (e) {
                    a.filter(e) ? a.create(t) : tuanpub.getModule("recommend_zhedeal").init()
                }), void 0)
            }, create: function (t) {
                var a = this;
                e("#zxt_zheid").removeClass("hot_tuangou"), e.getScript("http://api.tuan800.com/tuan800_recommend_deals", {
                    callback: function () {
                        var n = window.tuan800_recommend_deals || {},
                            i = e.ParseTpl(t.zxtTozhehtml(n), e.extend(!0, {}, n, {
                                deals: function () {
                                    var a, n, i = new e.Buffers;
                                    if (i.push('<div class="thisadinner">'), i.push('<div class="adlunbo">'), tuan800_recommend_deals.zx_deals && tuan800_recommend_deals.zx_deals.length >= 4 && i.push(t.dealtpl(tuan800_recommend_deals.zx_deals.slice(0, 4))), tuan800_recommend_deals.hot_deals)
                                        for (a = 0, n = tuan800_recommend_deals.hot_deals.length; n - a >= 4; a += 4) i.push(t.dealtpl(tuan800_recommend_deals.hot_deals.slice(a, a + 4)));
                                    return tuan800_recommend_deals.hot_concerns && tuan800_recommend_deals.hot_concerns.length >= 4 && i.push(t.jptpl(tuan800_recommend_deals.hot_concerns.slice(0, 4))), i.push("</div>"), i.push('<div class="lunbo lleft hidden"></div>'), i.push('<div class="lunbo lright hidden"></div>'), i.push("</div>"), i.toString()
                                }
                            }));
                        e("#zxt_zheid").addClass("hot_tuangou").append(i), e("#zxt_zheid ul").length < 1 ? e("#zxt_zheid").remove() : e("#zxt_zheid ul").length > 1 && a._lunbostrat()
                    }, cache: "true"
                })
            }, filter: function (e) {
                var t = "beijing,shanghai,guangzhou,tianjin,chengdu,shenzhen,xian,chongqing,hangzhou,zhengzhou,wuhan,nanjing,suzhou,xiamen,shenyang,qingdao,dalian,hefei,fuzhou,foshan,jinan,changsha,shijiazhuang,ningbo,haerbin,wuxi,dongguan,nanchang,nanning,changchun,changzhou,taiyuan,kunshan,wenzhou,kunming,haikou,quanzhou,luoyang",
                    a = new RegExp(e + "\\W");
                return a.test(t)
            }, _lunbostrat: function () {
                function t(t) {
                    var o = t ? t : -1;
                    parseInt(a.css("left")) + o * i, -1 === o ? (n = !0, a.animate({
                        "margin-left": o * i
                    }, 1e3, function () {
                        n = !1, e(this).append(e(".adlunbo ul").first().clone(!0)), e(".adlunbo ul").first().remove(), e(this).css("margin-left", 0)
                    })) : (a.prepend(e(".adlunbo ul").last().clone(!0)), e(".adlunbo ul").last().remove(), a.css("margin-left", -o * i), n = !0, a.animate({
                        "margin-left": 0
                    }, 1e3, function () {
                        n = !1
                    }))
                }
                var a = e(".adlunbo"),
                    n = !1,
                    i = (a.find("ul").length - 1, a.find("ul").width()),
                    o = setInterval(t, 5e3);
                e(".thisadinner").hover(function () {
                    clearInterval(o), e(".hot_tuangou .lunbo").each(function () {
                        e(this).removeClass("hidden")
                    })
                }, function () {
                    o = setInterval(t, 5e3), e(".hot_tuangou .lunbo").each(function () {
                        e(this).addClass("hidden")
                    })
                }), e(".hot_tuangou .lunbo").click(function () {
                    if (!n) {
                        var a = e(this).hasClass("lleft") ? 1 : -1;
                        t(a)
                    }
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("recommend_zhedeal", {
            init: function () {
                var t = this;
                e.ajax({
                    url: "http://www.zhe800.com/index_recommend_deals",
                    type: "GET",
                    dataType: "JSON",
                    success: function (a) {
                        var n = a.deals || [];
                        if (0 !== n.length) {
                            var i = new e.Buffers,
                                o = tuanpub.getModule("dealbinds");
                            i.push('<h2>热卖推荐<span class="ic"></span></h2>'), i.push('<ul id="recommend">');
                            for (var s = 0, l = n.length; l > s; s++) o.parseDealData(n[s]), i.push("<li data-index='" + s + "'>" + e.ParseTpl(o.getDealTpl(), n[s]) + "</li>");
                            i.push("</ul>"), i.push('<div class="lunbo lleft hidden"></div>'), i.push('<div class="lunbo lright hidden"></div>'), e("#zxt_zheid").removeClass("hot_tuangou").addClass("hot_zhedeal").append(i.toString());
                            for (var d = Math.ceil(n.length / 4), r = e(".hot_zhedeal h2 .ic"), u = 0; d > u; u++) r.append("<em></em>");
                            e(".hot_zhedeal h2 .ic em").first().addClass("on"), e("#zxt_zheid ul img").each(function () {
                                e(this).attr("src", e(this).data("original"))
                            }), e("#zxt_zheid .deal").on("mouseenter", function () {
                                e(this).addClass("dealon")
                            }).on("mouseleave", function () {
                                e(this).removeClass("dealon")
                            }), t._lunbostrat(), e(".hot_zhedeal a").each(function () {
                                var t = e(this);
                                t.attr("href", t.attr("href") + "?utm_content=zhe800_dibu_tuijian")
                            })
                        }
                    }
                })
            }, _lunbostrat: function () {
                function t() {
                    var t = e(".hot_zhedeal ul li").first().data("index"),
                        a = t / 4;
                    e(".hot_zhedeal h2 .ic em.on").removeClass("on"), e(e(".hot_zhedeal h2 .ic em").get(a)).addClass("on")
                }

                function a(a) {
                    var s = a ? a : -1;
                    if (parseInt(n.css("left")) + s * o, -1 === s) i = !0, n.animate({
                        "margin-left": s * o
                    }, 1e3, function () {
                        i = !1;
                        for (var a = 0; 4 > a; a++) e(this).append(e(".hot_zhedeal ul li").first().clone(!0)), e(".hot_zhedeal ul li").first().remove();
                        e(this).css("margin-left", 0), t()
                    });
                    else {
                        for (var l = 0; 4 > l; l++) n.prepend(e(".hot_zhedeal ul li").last().clone(!0)), e(".hot_zhedeal ul li").last().remove();
                        n.css("margin-left", -s * o), i = !0, n.animate({
                            "margin-left": 0
                        }, 1e3, function () {
                            i = !1, t()
                        })
                    }
                }
                var n = e(".hot_zhedeal ul"),
                    i = !1,
                    o = (n.find("li").length, 980),
                    s = setInterval(a, 5e3);
                e(".hot_zhedeal").hover(function () {
                    clearInterval(s), e("div.lunbo").each(function () {
                        e(this).removeClass("hidden")
                    })
                }, function () {
                    s = setInterval(a, 5e3), e("div.lunbo").each(function () {
                        e(this).addClass("hidden")
                    })
                }), e(".hot_zhedeal div.lunbo").hover(function () {
                    e("div.lunbo").each(function () {
                        e(this).removeClass("hidden")
                    })
                }), e(".lunbo").click(function () {
                    if (!i) {
                        var t = e(this).hasClass("lleft") ? 1 : -1;
                        a(t)
                    }
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("dealFavorite", {
            Init: function () {
                tuanpub.headQueue.push(this.initDealFav)
            }, init: function () {
                e(".dealbox").on("click", ".deal .mycol", function () {
                    var t = e(this).parents(".deal").attr("info").split(","),
                        a = e(this).parents(".deal").attr("zid") || t[1],
                        n = e(this).hasClass("on"),
                        i = e(this);
                    return tuanpub.login() ? (n ? e.post("/cn/favorite_deals/delete", {
                        deal_ids: a
                    }, function () {
                        i.removeClass("on").html("收藏"), i.parents(".deal").attr("data-fav", "no")
                    }, "json") : e.post("/cn/favorite_deals/add", {
                        deal_ids: t[1]
                    }, function () {
                        i.addClass("on").html("已收藏"), i.parents(".deal").attr("data-fav", "yes")
                    }, "json"), tuanpub.opts.loadStatus = 0, void 0) : (tuanpub.getModule("dialogPP").init({
                        appid: 3005
                    }), !1)
                })
            }, initDealFav: function () {
                if (!tuanpub.login()) return !1;
                if (void 0 === tuanpub.opts.user) return !1;
                for (var t = tuanpub.opts.user.favorite_deal_ids || [], a = 0, n = t.length; n > a; a++) e(".deal[id=deal" + t[a] + "]").attr("data-fav", "yes")
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("openTuanAlert", {
            init: function () {
                var t = this;
                e(".dealbox").on("click", ".openAlert", function () {
                    e(this).closest(".zt2,.zt3,.zt5").length || t.goAlert(e(this))
                })
            }, dealInit: function (t) {
                var a = e(t).parent();
                0 == e(".dsearch").size() || a.hasClass("zt3") && a.find("p a, h2 a").unbind().click(function () {
                    return !1
                }).each(function () {
                    var t = e(this).attr("href");
                    e(this).attr("data-href", t).attr("href", "javascript:void(0);").attr("target", "_self")
                })
            }, goAlert: function (t) {
                if (!tuanpub.login()) return tuanpub.getModule("dialogPP").init({
                    appid: 3006
                }), !1;
                var a = e.parseJSON(Base64.decode(e.cookie("ppinf").split("|")[3])),
                    n = a.idss.id2;
                if (0 == n) tuanpub.getModule("bindPhoneMod").init(), window.setTimeout(function () {
                    e(".bangdtit").find("p").html("为了保护您的账户安全，需要先绑定手机。")
                }, 210);
                else {
                    var i = t.parents(".deal").attr("info").split(",")[1];
                    e.post("/cn/ju_deal/subscribe", {
                        deal_id: i
                    }, function (a) {
                        if (0 == a.status) {
                            var n = e.cookie("isSuccPop") || !1;
                            if (t.remove(), n) return !1;
                            var i = new e.Buffers;
                            i.push('<div class="qd_login">'), i.push('    <div class="ht">        <a href="http://www.zhe800.com" target="_blank" class="logo"></a>   </div>'), i.push('    <div class="dysucc">'), i.push("        <em>成功订阅开抢提醒！</em>"), i.push('        <span>我们将在开抢当天以短信方式通知您！<br/>您可以去个人中心查看已订阅的商品，<a href="{{#goto_url}}" target="_blank">去看看>></a></span>'), i.push('        <p><input type="checkbox" />不再提醒</p>'), i.push("    </div>"), i.push("</div>"), i = i.toString(), e.Dialogs({
                                id: "dialog_log_qiandao",
                                msg: e.ParseTpl(i, a),
                                auto: !1,
                                closebtn: "a.close, span.close",
                                overlay: !0
                            }), e("#dialog_log_qiandao input[type=checkbox]").click(function () {
                                e(this).is(":checked") ? e.cookie("isSuccPop", !0) : e.cookie("isSuccPop", !1)
                            })
                        } else 1 == a.status && alert("设置失败,请重新尝试!")
                    }, "json")
                }
            }
        })
    }(jQuery),
    function () {
        tuanpub.addModule("yugaoPop", {
            init: function () {
                var e = this,
                    t = $(window).height();
                $(".yu_intro .info a").click(function (a) {
                    a.preventDefault(), $(".yugao").length || e.create($(this));
                    var n = $(".yugao");
                    n.css("top", (t - n.height()) / 2), "undefined" == typeof document.body.style.maxHeight && n.css("top", document.documentElement.scrollTop + (t - n.height()) / 2), $(".deal").removeClass("poped")
                }), $(".dealbox").delegate(".saoma,.openAlert", "click", function () {
                    if (1 != $(this).parents(".deal").data("type") || !$(this).hasClass("openAlert") || 0 === $(this).parents(".deal").find(".zt2").length) {
                        $(".yugao").length || e.create();
                        var a = $(this).parents(".deal"),
                            n = $(this).closest(".zt2,.zt3,.zt5"),
                            i = $(".yugao"),
                            o = a.find("img").data("original"),
                            s = (a.find("h3 b").html() || "") + a.find("h3 a").html(),
                            l = a.find("h4 em").text(),
                            d = a.data("begin_time");
                        e.toAlert(i), n.hasClass("zt3") && (i.find(".goods .time").hide(), i.find(".ewm .price").hide()), i.tab({
                            nav: ".tabs",
                            pane: ".pop-con .tab-pane",
                            delegater: "span",
                            cls: "on",
                            evt: "click"
                        }), i.find(".toCode").click(function () {
                            e.toAlert(i)
                        }), n.length && (n.hasClass("poped") ? i.show() : ($(".deal .con").removeClass("poped"), n.addClass("poped"), i.find(".goods img").attr("src", o), i.find(".goods .tt").html(s), i.find(".ewm .qrcode").attr("src", n.closest(".deal").data("qrcode")), i.find(".price span").html(l), i.find(".goods .time span").html(d), i.show(), i.css("top", (t - i.height()) / 2), "undefined" == typeof document.body.style.maxHeight && i.css("top", document.documentElement.scrollTop + (t - i.height()) / 2)))
                    }
                })
            }, create: function () {
                var e = $(".yugao");
                if (!e.length) {
                    var t = new $.Buffers;
                    t.push('<div class="yugao"> '), t.push('<div class="pop-box">'), t.push('      <a class="icon-close close"></a>'), t.push('      <div class="pop-con">'), t.push('        <h2 class="tit">用折800客户端扫描商品二维码，开抢前5分钟得提醒！</h2>'), t.push('        <div class="how-code tab-pane on" >'), t.push("             <p>1、首先你要有一个手机</p>"), t.push("             <p>2、安装折800客户端： 用微信、手机QQ等的扫码功能，将摄像头对</p>"), t.push("             <p>准商品二维码进行扫描即可下载</p>"), t.push("             <p>3、点击客户端的个人中心 <span>&rarr;</span> 点击右上角扫码键 <span>&rarr;</span> 将摄像头对准</p>"), t.push("             <p>商品二维码进行扫描</p>"), t.push('             <div class="g-img"></div>'), t.push("        </div>"), t.push("      </div>"), t.push("    </div>"), t.push("  </div>"), e = $(t.toString()).appendTo($("body"))
                }
                if (e.delegate(".close", "click", function (t) {
                    t.preventDefault(), e.hide()
                }), "undefined" == typeof document.body.style.maxHeight) {
                    var a = tuanpub.getModule("ie6Fixed").fixed,
                        n = ($(window).height() - e.height()) / 2;
                    a && a(e, n)
                }
            }, toAlert: function (e) {
                return e ? (e.find(".tabs span").removeClass("on"), e.find(".tab-pane").removeClass("on"), e.find(".tabs .alert").addClass("on"), e.find(".alert-con").addClass("on"), void 0) : !1
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("sort", {
            OnLoad: function () {
                var t = e("#junav").find(".right a.on");
                t.length && t.attr("href", "javascript:void(0)")
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("guanzhu", {
            ispopup: !0,
            init: function () {
                if (-1 === window.location.href.indexOf("www.zhe800.com/ju_tag/taomuying")) {
                    var t = this;
                    if (!tuanpub.login()) return !1;
                    var a = e.parseJSON(Base64.decode(e.cookie("ppinf").split("|")[3])).sigw,
                        n = "";
                    5 === a ? (n = "weiboguanzhu_lasttime", e.get("/cn/third_party_care_infos", function (i) {
                        var o = 0 === i.status ? !0 : !1;
                        o && ("" == e.cookie(n) || null == e.cookie(n)) && (t.opengzdialog(a), e.cookie(n, (new Date).getTime(), {
                            path: "/",
                            expires: 7,
                            domain: ".zhe800.com"
                        }))
                    })) : 6 === a && (n = "gdt_qqzonegz", e.get("http://www.zhe800.com/cn/user_gdt_qqzonegz_num", function (i) {
                        1 === i.gdt_qqzonegz_num && (t.opengzdialog(a), e.cookie(n, "yes", {
                            path: "/",
                            expires: 30,
                            domain: ".zhe800.com"
                        }))
                    }))
                }
            }, opengzdialog: function (t) {
                var a = this,
                    n = new e.Buffers;
                if (5 === t) n.push("<div class='logsuginfo'>恭喜您，登陆成功！</div>"), n.push("<div class='dlo_guanzhu'>"), n.push("<span class='weiboicon'></span>"), n.push("<h2>关注折800官方微博，继续享受独家折扣</h2>"), n.push("<p>"), n.push('<iframe id="guanzhupop" width="130" scrolling="no" height="24" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0" border="0" src="http://widget.weibo.com/relationship/followbutton.php?%20width=136&amp;height=24&amp;uid=2004121323&amp;style=2&amp;btn=light&amp;dpc=1"></iframe>'), n.push("</p>");
                else if (6 === t) {
                    try {
                        _gaq.push(["_trackPageview", "/PageAction/daohang/unionLogin/qqFollow"])
                    } catch (i) {}
                    n.push("<div class='logsuginfo'>关注QQ空间有惊喜</div>"), n.push("<div class='dlo_guanzhu'>"), n.push("<span class='qqicon'></span>"), n.push("<h2>关注折800官方空间，继续享受独家折扣</h2>"), n.push("<p>"), n.push('<iframe id="guanzhupop" src="http://open.qzone.qq.com/like?url=http%3A%2F%2Fuser.qzone.qq.com%2F2719920774&amp;type=button_num&amp;width=115&amp;height=24&amp;style=3" allowtransparency="true" scrolling="no" border="0" frameborder="0" style="width:115px;height:24px;border:none;overflow:hidden;"></iframe>'), n.push("</p>")
                }
                n.push("</div>"), e.Dialogs({
                    id: "dialog_guanzhu",
                    overlay: !0,
                    auto: !1,
                    openfun: function () {
                        setTimeout(function () {
                            e("#dialog_guanzhu .close").show()
                        }, 5e3)
                    }, closefun: function () {}, msg: n.toString()
                });
                var o = !0;
                e("#guanzhupop").bind("load", function () {
                    return o || window.qq_gaTrack && window.qq_gaTrack(), o = !1, a.ispopup ? (a.ispopup = !1, !1) : (e("#dialog_guanzhu .close").trigger("click"), void 0)
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("gdtqqzone_guanzhu", {
            gaConf: {},
            init: function () {
                return window.location.href.indexOf("out.zhe800.com") > -1 ? !1 : (this.isOpenDialog() && this.opengzdialog(function () {}), void 0)
            }, gzpoptpl: function () {
                var t = new e.Buffers;
                return t.push("<div class='qqzonepop'>"), t.push("<iframe src='http://open.qzone.qq.com/like?url=http%3A%2F%2Fuser.qzone.qq.com%2F2719920774&type=button_num&width=115&height=24&style=2' style='width:115px;height:24px;border:none;overflow:hidden;position: absolute;top: 184px;left: 330px;' allowtransparency='true' scrolling='no' border='0' frameborder='0'></iframe>"), t.push("<em style='display:none;width:0;height:0;' class='close_trigger'></em>"), t.push('<div class="cls_btn" style="width:85px;height: 21px; position: absolute; right: 60px; top: 25px;overflow:hidden;background:url(http://z5.tuanimg.com/v1/ju/gdt/img/close_cover.png) no-repeat"> <em class="cover" style="position:absolute;left:0;top:0;width:43px;background:url(http://z5.tuanimg.com/v1/ju/gdt/img/close_cover.png) no-repeat;z-index:999;display:block;margin:0"></em> <iframe class="right_focus" scrolling="no" frameborder="0" border="0" allowtransparency="true" style="width:115px;height:24px;border:none;overflow:hidden;position: absolute;top: 0;left: 21px;" src="http://open.qzone.qq.com/like?url=http%3A%2F%2Fuser.qzone.qq.com%2F2719920774&amp;type=button&amp;width=115&amp;height=24&amp;style=2"></iframe> </div>'), t.push("</div>"), t.toString()
            }(),
            isOpenDialog: function () {
                return this.checkCookie() && this.checkReferrer()
            }, checkCookie: function () {
                return "" !== e.cookie("gdt_qqzonegz") && null !== e.cookie("gdt_qqzonegz") || "" != e.cookie("qqzone_gz") ? !1 : !0
            }, checkReferrer: function () {
                var e, t, a, n, i, o = !1,
                    s = window.location.href,
                    l = s.split("?");
                for (l = l.length > 1 ? l[1].split("&") : [], e = 0, t = l.length; t > e; e++)
                    if (i = l[e].split("="), a = i[0], n = i[1], "utm_source" === a && n.indexOf("gdt") > -1) {
                        o = !0, this.gaConf = n.indexOf("gdt") > -1 ? {
                            popshow: ["_trackPageview", "/PageAction/gdtFollow/gdt_follow_dialog"],
                            closebtnshow: ["_trackPageview", "/PageAction/gdtFollow/gdt_follow_appear"],
                            closeclick: ["_trackPageview", "/PageAction/gdtFollow/gdt_follow_close"]
                        } : {
                            popshow: ["_trackPageview", "/PageAction/qqzone/qqzone_follow_dialog"],
                            closebtnshow: ["_trackPageview", "/PageAction/qqzone/qqzone_follow_appear"],
                            closeclick: ["_trackPageview", "/PageAction/qqzone/qqzone_follow_close"]
                        };
                        break
                    }
                return o
            }, opengzdialog: function (t) {
                var a = new e.Buffers,
                    n = this;
                a.push("<style type='text/css'>"), a.push(".qqzonepop{width: 642px;height: 298px;background: url(http://z5.tuanimg.com/v1/ju/index/img/qqzonebg.png) no-repeat 0 0;position: relative;-background-image: url(http://z5.tuanimg.com/v1/ju/index/img/qqzonebg_ie6.png);}"), a.push(".nobg{background: none !important;border:none;}"), a.push(".qqzonepop em{background: url(http://z5.tuanimg.com/v1/ju/index/img/qqzonebg.png) no-repeat 0 -302px;display: none;height: 21px;width: 23px;position: absolute;right: 60px;top: 25px;cursor: pointer;-background-image: url(http://z5.tuanimg.com/v1/ju/index/img/qqzonebg_ie6.png);}"), a.push(".qqzonepop em:hover{background-position: -30px -302px;}"), a.push("#dialog_guanzhu_qq .diginfo{background:none;border:none;padding:0;}"), e.browser.msie && 6 == e.browser.version ? a.push("#dialog_guanzhu_qq{position:absolute}") : a.push("#dialog_guanzhu_qq{position:fixed}"), a.push("</style>"), e("body").append(a.toString()), setTimeout(function () {
                    e.Dialogs({
                        id: "dialog_guanzhu_qq",
                        overlay: !0,
                        cls: "diglog-wrapper nobg",
                        auto: !1,
                        close: !1,
                        closebtn: ".close_trigger",
                        openfun: function () {
                            e.cookie("gdt_qqzonegz", "yes", {
                                expires: 30,
                                domain: ".zhe800.com",
                                path: "/"
                            });
                            try {
                                _gaq.push(n.gaConf.popshow)
                            } catch (t) {}
                            var a = this.$d.find("iframe"),
                                i = this.$d.find(this.closebtn);
                            e.browser.msie && e.browser.version < 8 ? a.each(function () {
                                this.onreadystatechange = function () {
                                    this.readyState && "complete" != this.readyState || (n._num_ = n._num_ ? ++n._num_ : 1, n._num_ > 2 && i.trigger("click"))
                                }
                            }) : this.$d.find("iframe").bind("load", function () {
                                n._num_ = n._num_ ? ++n._num_ : 1, n._num_ > 2 && i.trigger("click")
                            })
                        }, closefun: function () {
                            t();
                            try {
                                _gaq.push(n.gaConf.closeclick)
                            } catch (e) {}
                        }, msg: n.gzpoptpl
                    })
                }, 0), setTimeout(function () {
                    e(".qqzonepop em").css("display", "block");
                    try {
                        _gaq.push(n.gaConf.closebtnshow)
                    } catch (t) {}
                }, 7e3), e.browser.msie && 6 == e.browser.version && e(window).scroll(function () {
                    var t = e(window).scrollTop(),
                        a = e("#dialog_guanzhu_qq");
                    a.css("top", 350 + t)
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("searchResult", {
            init: function () {
                e(".sea span a").click(function () {
                    e(this).hasClass("benzhan") ? (e(".sea").removeClass("sea2"), e("#searchBox").attr("action", "http://search.zhe800.com/search").find(".inp").attr("name", "keyword"), e("#searchBox").attr("target", "_self")) : e(this).hasClass("et") && (e(".sea").addClass("sea2"), e("#searchBox").attr("action", "http://s.etao.com/search").find(".inp").attr("name", "q"), e("#searchBox").attr("target", "_blank"))
                }), e("#searchBox").submit(function () {
                    var t = e.trim(e("#searchBox").find(".inp").val()),
                        a = e("#searchBox").find(".inp").attr("name");
                    if ("" == t) return alert("请输入关键词"), !1;
                    e("#searchBox .inp").val(e.trim(e("#searchBox .inp").val()));
                    var n = new Image(1, 1);
                    "keyword" == a ? n.src = "http://www.tuan800.com/tongji/ju_deal_query.gif?w=" + encodeURIComponent(t) : "q" == a && (n.src = "http://www.tuan800.com/tongji/ju_etao_query.gif?w=" + encodeURIComponent(t))
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("visit", {
            OnLoad: function () {
                var t = e("body").data("version");
                void 0 !== t && "" !== t && (e.cookie("unix_time", Math.round((new Date).getTime() / 1e3), {
                    expires: 7,
                    path: "/",
                    domain: "zhe800.com"
                }), e.cookie("ju_version", e("body").data("version"), {
                    expires: 7,
                    path: "/",
                    domain: "zhe800.com"
                }))
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("banner_slide_show", {
            init: function () {
                var t = 3920,
                    a = this;
                e(".newuserbanner1 ul").css("width", t + "px"), e(".newuserbanner2").hide(), e(".newuserbanner1 ul li").each(function (t) {
                    e(this).attr("data-id", t), e(".fi_tab span").eq(t).attr("data-id", t), 0 == t && e(this).addClass("current")
                }), e(".fi_btn.l").hide().attr("data-id", 0), e(".fi_btn.r").attr("data-id", 1), e(".fi_btn.l, .fi_btn.r, .fi_tab span").click(function () {
                    var t = e(this).attr("data-id");
                    a.slide(t)
                }), e(".newuserbanner1 .close").click(function () {
                    e(".fi_tab").hide(), e(".newuserbanner1").animate({
                        height: 140
                    }, function () {
                        e(this).fadeOut(300, function () {
                            e(".newuserbanner2").fadeIn(300)
                        })
                    })
                }), e(".newuserbanner2").click(function () {
                    e(this).hide(), e(".newuserbanner1").show().animate({
                        height: 460
                    }, function () {
                        e(".fi_tab").fadeIn()
                    })
                })
            }, slide: function (t) {
                t = parseInt(t);
                var a = -(980 * t),
                    n = this;
                e(".newuserbanner1 ul").animate({
                    marginLeft: a
                }, 400, function () {
                    n.update(t)
                })
            }, update: function (t) {
                e(".fi_tab span").eq(t).addClass("now").siblings("span").removeClass("now"), e(".newuserbanner1 ul li").removeClass("current").eq(t).addClass("current"), 0 == t ? (e(".fi_btn.l").hide().attr("data-id", 0), e(".fi_btn.r").show().attr("data-id", 1)) : 3 == t ? (e(".fi_btn.l").show().attr("data-id", 2), e(".fi_btn.r").hide().attr("data-id", 3)) : (e(".fi_btn.l").show().attr("data-id", t - 1), e(".fi_btn.r").show().attr("data-id", t + 1))
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("zcpassword", {
            init: function () {
                var t = e.cookie("zhe_zxqqzone");
                if (t) {
                    for (var a in zc_info) e(".dealad[id=" + a + "]").find("a").attr("href", zc_info[a]).attr("target", "_blank");
                    return !1
                }
                e(".dealad a").click(function () {
                    try {
                        _gaq.push(["_trackPageview", "/PageAction/index/zhuanxiang/click_event"])
                    } catch (t) {}
                    if (e("#dialog_qq").size() > 0) return !1;
                    var a = e(this).parents(".dealad").attr("data-power"),
                        n = (e(this), e(this).parents(".dealad").attr("id"));
                    if ("blocked" == a) {
                        var i = new e.Buffers;
                        i.push('<div class="dialog-wrapper" id="dialog_qq" style="z-index: 999999;">'), i.push('<div class="pop-inner"><a href="javascript:void(0);" class="icon-close close"></a><div class="ren"></div>'), i.push("<h2>亲！欢迎进入<em>QQ用户独享折扣专区</em></h2>"), i.push("<h3>给力宝贝限时特卖，秒到手发软!</h3>"), i.push('<h4 class="clear"><input id="zcpasswd" type="text" placeholder="这里输入密码" value="这里输入密码" /><a href="javascript:void(0);" class="qq_btn l"></a></h4>'), i.push('<p class="error"></p>'), i.push('<p>还没有密码？<a href="http://2719920774.qzone.qq.com/" target="_blank" id="gotogetit">点这里去领</a></p>'), i.push("</div></div>"), i.push('<div class="dialog-overlay" style="background-color: rgb(0, 0, 0); width: 100%; height: 100%;filter:alpha(opacity=50); opacity: 0.5; position: absolute; overflow: hidden; left: 0px; top: 0px; z-index: 99999; background-position: initial initial; background-repeat: initial initial;"></div>'), e("body").append(i.toString());
                        var o = e(document).height();
                        e(".dialog-overlay").css("height", o), e("body").css("overflow", "hidden");
                        try {
                            _gaq.push(["_trackPageview", "/PageAction/index/zhuanxiang/popup_dialog"])
                        } catch (t) {}
                        if (e("#dialog_qq .close").click(function () {
                            e("#dialog_qq").remove(), e("body").css("overflow", "scroll").find(".dialog-overlay").remove();
                            try {
                                _gaq.push(["_trackPageview", "/PageAction/index/zhuanxiang/popup_close"])
                            } catch (t) {}
                        }), e("#zcpasswd").focus(function () {
                            var t = e(this).attr("placeholder");
                            e(this).val() == t && e(this).val("")
                        }).blur(function () {
                            var t = e(this).attr("placeholder");
                            e(this).val() == t && e(this).val(t)
                        }), e("#gotogetit").click(function () {
                            try {
                                _gaq.push(["_trackPageview", "/PageAction/index/zhuanxiang/skipto_qqzone"])
                            } catch (e) {}
                        }), e("#dialog_qq .qq_btn").click(function () {
                            var t = e("#zcpasswd").val();
                            try {
                                _gaq.push(["_trackPageview", "/PageAction/index/zhuanxiang/yanzheng_click"])
                            } catch (a) {}
                            return "" == t || "这里输入密码" == t ? (e("#dialog_qq .error").html("<span>请输入密码</span>"), !1) : (e.get("/cn/get_zhuanxiang_auth_code", function (a) {
                                if (1 == a.status)
                                    if (a.auth_code == t) {
                                        e(".dialog_qq .error").html(""), e.cookie("zhe_zxqqzone", "yes", {
                                            path: "/",
                                            expires: 30,
                                            domain: ".zhe800.com"
                                        });
                                        var i = zc_info[n];
                                        e(".dealad[id=" + n + "]").removeAttr("data-power").find("a").each(function () {
                                            e(this).attr("href", i), e(this).attr("target", "_blank")
                                        }), window.location.href = i, e("#dialog_qq").remove()
                                    } else e("#dialog_qq .error").html("<span>密码输入错误</span>")
                            }), void 0)
                        }), "undefined" == typeof document.body.style.maxHeight) {
                            var s = tuan800ued.getModule("ie6Fixed").fixed,
                                l = (e(window).height() - $pop.height()) / 2;
                            s && s($pop, l)
                        }
                    }
                })
            }
        })
    }(jQuery),
    function (e) {
        tuan800ued.addModule("out_jump_remind", {
            OnLoad: function () {
                var t = parseInt(e.cookie("jump_out_pai").split("_")[1]) || 0,
                    a = parseInt(e.cookie("jump_out_ai").split("_")[1]) || 0;
                return pai_date = (e.cookie("jump_out_pai").split("_")[0] || 0).toString(), ai_date = (e.cookie("jump_out_ai").split("_")[0] || 0).toString(), today_date = this.get_date().toString(), t >= 3 && a >= 3 || pai_date === today_date && ai_date === today_date ? !1 : (e.getCss("http://localhost:8888/korres-webapp/v2/ju/css/out_reminder.css"), void 0)
            }, replace_deal_h4_a: function () {
                e(".dealbox").on("mouseenter", ".deal", function () {
                    if (e(this).find(".con").hasClass("zt3") === !0 || e(this).find(".con").hasClass("zt2") === !0) return !1;
                    var t, a = e(this).find("h4");
                    t = a.find("a").eq(0).text()
                }), e(".dealbox").on("mouseleave", ".deal", function () {
                    return e(this).find(".con").hasClass("zt3") === !0 || e(this).find(".con").hasClass("zt2") === !0 ? !1 : (e(this).find("h4"), void 0)
                })
            }, pup_dialog_notice: function (t) {
                var a, n = this,
                    i = this.get_deal_type(t);
                if (a = "去天猫抢购" === e(t.find("h4 a")[0]).text() ? 1 : 0, 1 === i) {
                    if (1 !== n.judge_pup("jump_out_pai")) return t.find("h4 a")[0].click(), !1;
                    n.show_dialog(1, a, t, "jump_out_pai"), n.change_cookie_times(1, a), n.change_cookie_times_force("jump_out_ai")
                } else {
                    if (2 !== i) return t.find("h4 a")[0].click(), !1;
                    if (1 !== n.judge_pup("jump_out_ai")) return t.find("h4 a")[0].click(), !1;
                    n.show_dialog(2, a, t, "jump_out_ai"), n.change_cookie_times(2, a)
                }
            }, judge_pup: function (t) {
                var a = e.cookie(t),
                    n = parseInt(a.split("_")[1]),
                    i = a.split("_")[0],
                    o = this.get_date(),
                    s = 0;
                return n += 1, (i != o && 4 > n || "" === a) && (s = 1), s
            }, change_cookie_times: function (t) {
                var a, n = this;
                a = 1 === t ? "jump_out_pai" : "jump_out_ai", "" === e.cookie(a) || null == e.cookie(a) ? n.set_cookie(a, 0) : n.set_cookie(a, 1)
            }, set_cookie: function (t, a) {
                var n = this;
                if (a) {
                    var i = e.cookie(t),
                        o = parseInt(i.split("_")[1]),
                        s = i.split("_")[0],
                        l = n.get_date();
                    o += 1, s != l && 4 > o && (e.cookie(t, null, {
                        path: "/",
                        expires: 30,
                        domain: ".zhe800.com"
                    }), e.cookie(t, l + "_" + o.toString() + "_1", {
                        path: "/",
                        expires: 30,
                        domain: ".zhe800.com"
                    }))
                } else e.cookie(t, n.get_date() + "_1_1", {
                    path: "/",
                    expires: 30,
                    domain: ".zhe800.com"
                })
            }, change_cookie_times_force: function (t) {
                var a = e.cookie(t),
                    n = this;
                if (null === a || "" === a) e.cookie(t, n.get_date() + "_1_0", {
                    path: "/",
                    expires: 30,
                    domain: ".zhe800.com"
                });
                else {
                    var a = e.cookie(t),
                        i = parseInt(a.split("_")[1]),
                        o = a.split("_")[0],
                        s = a.split("_")[2] || 1;
                    i += 1, e.cookie(t, null, {
                        path: "/",
                        expires: 30,
                        domain: ".zhe800.com"
                    }), e.cookie(t, o + "_" + i.toString() + "_" + s, {
                        path: "/",
                        expires: 30,
                        domain: ".zhe800.com"
                    })
                }
            }, get_deal_type: function (e) {
                var t = parseInt(e.data("tips")) || 0;
                return 1 === t ? 1 : 2 === t ? 2 : 0
            }, get_date: function () {
                var e, t, a, n, i = new Date;
                return e = i.getUTCDate(), t = i.getUTCMonth() + 1, a = i.getUTCFullYear(), n = a.toString() + t.toString() + e.toString()
            }, show_dialog: function (t, a, n, i) {
                var o = new e.Buffers,
                    s = this,
                    l = n.find("h4 em").text().substring(1),
                    d = n.find("a img").attr("src"),
                    r = "";
                e.cookie(i).split("_")[1] || 0, cookie_first = e.cookie(i).split("_")[2] || 0, o.push('<div class="out_jump">'), o.push('<div class="banner0">'), o.push('<img src="' + d + '">'), 1 === t ? (o.push("<span>两步即可享受<b>" + l + "元</b>拍下改价特权：</span></div>"), o.push('<div class="banner1">'), o.push('<span class="logo0"></span>'), o.push("<em><p>忽略原价，直接点击“去购买”</p>"), o.push('<i class="infor">因淘宝要求，你需经过淘宝下的“爱淘宝”，该页显示的不是最终价</i></em></div>'), o.push('<div class="banner2">'), o.push('<span class="logo1"></span></div>'), o.push('<div class="banner3">'), 0 === a ? o.push('<span class="logo2"></span><em><p>请<b>拍下宝贝</b>，价格自动变为<b>' + l + '元</b></p><i class="infor">因商家设置，拍下后自动改价</i></em></div>') : o.push('<span class="logo3"></span><em><p>请<b>拍下宝贝</b>，价格自动变为<b>' + l + '元</b></p><i class="infor">因商家设置，拍下后自动改价</i></em></div>')) : (o.push("<span>两步即可享受<b>" + l + "元</b>特权：</span></div>"), o.push('<div class="banner1">'), o.push('<span class="logo0"></span>'), o.push("<em><p>直接点击“去购买”</p>"), o.push('<i class="infor">因淘宝要求，你需经过淘宝下的“爱淘宝”</i></em></div>'), o.push('<div class="banner2">'), o.push('<span class="logo1"></span></div>'), o.push('<div class="banner3">'), 0 === a ? o.push('<span class="logo2"></span><em><p class="logo3_p">请拍下宝贝，完成支付</p></em></div>') : o.push('<span class="logo3"></span><em><p class="logo3_p">请拍下宝贝，完成支付</p></em></div>')), 0 === parseInt(cookie_first) ? (o.push('<div class="banner4">'), o.push('<em class="notice">我知道了，去购买</em><em class="close">关闭</em><i class="infor">本信息提示3次，每天一次</i></div>'), r = ".close") : (o.push('<div class="banner4">'), o.push('<em class="notice">我知道了，去购买</em><i class="infor">本信息提示3次，每天一次</i></div>'), r = ".notice"), o.push("</div>"), o = o.toString(), e.Dialogs({
                    id: "dialog_out_jump",
                    msg: o,
                    auto: !1,
                    closebtn: r,
                    overlay: !0,
                    openfun: s.set_overlay_all,
                    closefun: s.remove_overlay_all
                }), this.judge_cookie_bind(parseInt(cookie_first), n)
            }, set_overlay_all: function () {
                e(window).bind("scroll.set_overlay_all", function () {
                    e(".dialog-overlay").css({
                        height: e("body").height().toString() + "px"
                    })
                })
            }, remove_overlay_all: function () {
                e(window).unbind("scroll.set_overlay_all")
            }, judge_cookie_bind: function (t, a) {
                if (0 === parseInt(t)) {
                    var n = e("#dialog_out_jump .notice"),
                        i = e("#dialog_out_jump .close");
                    n.unbind().bind("click", function () {
                        e(this).hide(), e("#dialog_out_jump .close").show(), a.find("h4 a")[0].click()
                    }), n.hover(function () {
                        e(this).addClass("notice_h")
                    }, function () {
                        e(this).removeClass("notice_h")
                    }), i.hover(function () {
                        e(this).addClass("close_h")
                    }, function () {
                        e(this).removeClass("close_h")
                    })
                } else {
                    var n = e("#dialog_out_jump .notice");
                    n.bind("click", function () {
                        a.find("h4 a")[0].click()
                    }), n.hover(function () {
                        e(this).addClass("notice_h")
                    }, function () {
                        e(this).removeClass("notice_h")
                    })
                }
            }
        })
    }(jQuery),
    function (e) {
        tuan800ued.addModule("muying_scrollPosition", {
            OnLoad: function () {
                var t = this,
                    a = window.screen.width,
                    n = 1025 > a ? 0 : e("#junav").height();
                t._scrollHeight = e("#toolbar").height() + e("div.header").height() + e("#head_nav").height() + n, e(window).scroll(function () {
                    var a = e(this).scrollTop();
                    e.support.fixedPosition ? a > t._scrollHeight ? e("#seclevel").removeClass("secjunav").addClass("secjunav_fix") : (e("#zw").remove(), e("#seclevel").removeClass("secjunav_fix").addClass("secjunav")) : a > t._scrollHeight ? e("#seclevel").css({
                        position: "absolute",
                        left: 0,
                        top: a + 20 + "px",
                        width: "100%",
                        "z-index": 9999,
                        "border-bottom": "4px solid #BCBCBC"
                    }) : e("#seclevel").removeAttr("style")
                })
            }
        })
    }(jQuery),
    function (e) {
        tuan800ued.addModule("colls", {
            init: function () {
                var t = e.cookie("zhe800colls") || -1;
                if (e.getParm().utm_source && "AddFavorite" == e.getParm().utm_source) return !1;
                if (t >= 0) return !1;
                var a = tuan800ued,
                    n = "Ctrl",
                    i = function (t, a) {
                        return c.remove(), e("style#colls").remove(), e.cookie("zhe800colls", t, {
                            expires: a,
                            path: "/",
                            domain: ".zhe800.com"
                        }), !1
                    },
                    o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var a = e[t].string;
                            if (a && -1 != a.indexOf(e[t].subString)) return e[t].identity
                        }
                    },
                    s = [{
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
                    l = new e.Buffers;
                l.append('<div class="index_collection">'), l.append('<div class="top">'), l.append('<div class="area"><p>关闭</p>{{#info}}<span><a href="javascript:void(0)">不再提醒</a></span></div>'), l.append(" </div> </div>");
                var d = l.toString();
                a.OS = o(s) || "an unknown OS";
                var r = "把折800放入收藏夹，折扣信息一手掌握！<u>放入收藏夹</u>",
                    u = "按 <strong>{{#sys}}+D</strong>，把折800放入收藏夹，折扣信息一手掌握！";
                ("chrome" == e.browser.name || "safari" == e.browser.name || "opera" == e.browser.name || "firefox" == e.browser.name && parseInt(e.browser.ver) >= 23 || "msie" == e.browser.name && parseInt(e.browser.ver) >= 10 || "mozilla" == e.browser.name && 11 == parseInt(e.browser.ver)) && (r = u, e(document).bind("keydown", function (e) {
                    "Mac" == a.OS && 68 == e.keyCode && e.metaKey ? i(2, 9999) : "Mac" != a.OS && e.ctrlKey && 68 == e.keyCode && i(2, 9999)
                })), "Mac" == a.OS && (n = "Command"), e("body").prepend(e.ParseTpl(d, {
                    info: r,
                    sys: n
                }));
                var c = e(".index_collection");
                c.find("p").click(function () {
                    return i(1, 10), !1
                }), c.find("span").click(function () {
                    return i(2, 9999), !1
                }), c.find("u").click(function () {
                    var t = "http://www.zhe800.com/?utm_source=AddFavorite",
                        a = "【折800官网】折八百,折800独家优惠,折800团购,天天特价9.9包邮秒杀在折800网!";
                    if (e.browser.msie) try {
                        window.external.addFavorite(t, a), i(2, 9999)
                    } catch (o) {
                        try {
                            window.external.addToFavoritesBar(t, a), i(0, 9999)
                        } catch (s) {
                            e.Dialogs.Dialog({
                                m: 2,
                                msg: e.ParseTpl(u, {
                                    sys: n
                                })
                            })
                        }
                    } else window.external ? (window.sidebar.addPanel(a, t, ""), i(2, 9999)) : (c.remove(), e.Dialogs.Dialog({
                        m: 2,
                        msg: e.ParseTpl(u, {
                            sys: n
                        })
                    }));
                    return !1
                })
            }
        })
    }(jQuery),
    function (e) {
        tuan800ued.addModule("dealnum", {
            init: function (t) {
                var a = '<span id="dealnum">' + t + "</span>";
                e("#junav div").append(a)
            }
        })
    }(jQuery),
    function (e) {
        tuan800ued.addModule("fixedNav1024", {
            OnLoad: function () {
                var t = this,
                    a = window.screen.width,
                    n = e("#junav"),
                    i = e('<div id="junavBlank"></div>').css({
                        height: n.outerHeight(!0)
                    }).hide().insertBefore(n);
                t._scrollHeight = e("#toolbar").height() + e("div.header").height() + e("#head_nav").height(), 1025 > a && e(window).scroll(function () {
                    var a = e(this).scrollTop();
                    e.support.fixedPosition ? a > t._scrollHeight ? (n.addClass("junav_fix"), i.show()) : (n.removeClass("junav_fix"), i.hide()) : a > t._scrollHeight ? n.css({
                        position: "absolute",
                        left: 0,
                        top: a + 20 + "px",
                        width: "100%",
                        "z-index": 9999,
                        "border-bottom": "4px solid #BCBCBC"
                    }) : n.removeAttr("style")
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("indexBannerAd", {
            init: function () {
                var t = this,
                    a = e(".banner_column");
                e("body").data("version") < 2 ? (t.sexVersion(), e.cookie("quickVersionTip") || e(function () {
                    t.intro()
                })) : e(".sex_version").hide(), a.length && (e.browser.msie && e.browser.version <= 9 && (a.find("dt img").css({
                    width: "100%",
                    height: "100%",
                    padding: "0px",
                    margin: "0px"
                }), a.find("dd img").css("left", "0px"), a.find("dt img").css("position", "relative").bind("mouseenter", function () {
                    var t = e(this);
                    7 == e.browser.version ? t.stop().animate({
                        width: "95%",
                        height: "96%",
                        padding: "6px 0 0 7px",
                        margin: "0px 6px 0px 0px"
                    }, 300) : t.stop().animate({
                        width: "95%",
                        height: "96%",
                        padding: "6px 0 0 7px"
                    }, 300)
                }).bind("mouseleave", function () {
                    e(this).stop().animate({
                        width: "100%",
                        height: "100%",
                        padding: "0"
                    }, 300)
                })), e.browser.msie && e.browser.version <= 9 && a.find("dd img").css("position", "relative").bind("mouseenter", function () {
                    var t = e(this);
                    t.stop().animate({
                        left: "-15px"
                    }, 300)
                }).bind("mouseleave", function () {
                    e(this).stop().animate({
                        left: "0px"
                    }, 300)
                }))
            }, intro: function () {
                var t = e(".deals_tit span.version"),
                    a = e("#adA img");
                a.length && a.load(function () {
                    t.tooltip({
                        direction: "bottom",
                        msg: "个性推荐，快速筛选合适商品",
                        offset: {
                            top: t.offset().top + t.height() + 8,
                            left: t.offset().left
                        },
                        resize: !0,
                        callback: function () {
                            var t = this;
                            t.find(".close").bind("click", function () {
                                e.cookie("quickVersionTip", "yes", {
                                    expires: 30,
                                    path: "/",
                                    domain: ".zhe800.com"
                                })
                            })
                        }
                    })
                })
            }, sexVersion: function () {
                var t = e(".deals_tit span.version"),
                    a = t.siblings("a"),
                    n = e(".deals_tit .sort a:contains(最新)");
                e.each([a, n], function () {
                    e(this).click(function () {
                        var t = e(this),
                            a = e.getParm(t.attr("href")).userversion;
                        e.cookie("user_version", a, {
                            expires: 365,
                            domain: ".zhe800.com",
                            path: "/"
                        })
                    })
                })
            }
        })
    }(jQuery),
    function (e) {
        tuanpub.addModule("NPS_survey_dialog", {
            npsSurveyTpl: "",
            getNpsSurveyTpl: function () {
                if (!this.npsSurveyTpl) {
                    var t = new e.Buffers;
                    t.push('<div class="survey_dialog">'), t.push('  <div class="bordertop"></div>'), t.push('  <div class="dcontent">'), t.push('    <span class="title"><em>欢迎回到折800</em><h3>诚邀您做个小调查</h3></span>'), t.push('    <div class="survey">'), t.push('      <div class="dosurveybg">'), t.push('      <div class="dosurvey">'), t.push('        <em>*</em><span class="que">您愿意把折800推荐给家人朋友吗？</span><i>10分表示非常愿意</i>'), t.push('          <span class="star"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><em class="npsgrades">0分</em></span>'), t.push('        <span class="que2">您给出这个分数的主要原因？</span>'), t.push('        <input class="reason_txt" type="text" id="reason_txt" maxlength="150" />'), t.push("      </div></div>"), t.push('      <span class="submit"><em>亲，请选择推荐指数~</em><div>提交并关闭</div></span>'), t.push("    </div></div>"), t.push('   <div class="borderbottom"></div>'), t.push("</div>"), this.npsSurveyTpl = t.toString()
                }
                return this.npsSurveyTpl
            }, OnLoad: function () {
                var t = this;
                t.willShow() && e.Dialogs({
                    id: "NPSsurvey_dialog",
                    overlay: !0,
                    auto: !1,
                    msg: t.getNpsSurveyTpl(),
                    openfun: function () {
                        t.bindEvent()
                    }
                })
            }, willShow: function () {
                if (e.cookie("firstTime") != e.cookie("lastTime") && 1 != e.cookie("user_nps") && window.zheNps) {
                    for (var t = e.cookie("frequency") ? e.cookie("frequency").split(",") : [], a = 0, n = 0; n < t.length; n++) 1 == t[n] && a++;
                    if (a == zheNps.num && Math.random() <= zheNps.rate) return !0
                }
                return !1
            }, gradesShow: function () {
                var t = e(".star i.on").length;
                e(".survey_dialog .npsgrades").html(t + "分"), t > 0 ? e(".survey_dialog .npsgrades").addClass("selected") : e(".survey_dialog .npsgrades").removeClass("selected")
            }, bindEvent: function () {
                var t = this,
                    a = 0,
                    n = e("#NPSsurvey_dialog");
                n.delegate(".star i", "mouseenter", function () {
                    e(this).attr("class", "on").prevAll("i").attr("class", "on"), e(this).nextAll("i").removeClass("on"), t.gradesShow()
                }).delegate(".star i", "mouseleave", function () {
                    e(".star i").removeClass("on"), a = e(".star i.on").length, t.gradesShow(a)
                }).delegate(".star i", "click", function () {
                    e(this).attr("class", "on").prevAll().attr("class", "on"), e(this).nextAll("i").removeClass("on"), e("#NPSsurvey_dialog").undelegate(".star i", "mouseleave")
                }).delegate(".submit", "click", function () {
                    if (n.data("submiting") !== !0) {
                        if (a = e(".star i.on").length, 0 == a) return e(".submit em").html("亲，请选择推荐指数~"), e(".submit em").addClass("show"), void 0;
                        n.data("submiting", !0);
                        var t = e.cookie("__utma").split(".");
                        e.cookie("session_id"), e.ajax({
                            type: "POST",
                            url: "http://www.zhe800.com/cn/ajax_api/nps_survey",
                            data: {
                                visited_at: t[4],
                                score: a,
                                answer: e(".reason_txt").val(),
                                user_id: e.cookie("session_id")
                            },
                            success: function () {
                                e.cookie("user_nps", "1", {
                                    expires: 90,
                                    path: "/",
                                    domain: ".zhe800.com"
                                }), e("#NPSsurvey_dialog span.close").trigger("click"), n.data("submiting", !1)
                            }, error: function () {
                                e(".submit em").html("网络错误，请重试~"), e(".submit em").addClass("show"), n.data("submiting", !1)
                            }
                        })
                    }
                })
            }
        })
    }(jQuery);