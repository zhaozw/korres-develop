! function (t) {
    var i = {
        cache: {}
    };
    i.M = function (t, i) {
        this.$d = t.$d, this.flag = t.flag, this.id = this.$d[0].id, this.text = t.text || !0, this.speed = parseInt(t.speed) || 5e3, this.hoverStop = t.hoverStop, this.type = t.type || 1, this.place = t.place || "fi_tabRB", this.myHtml = t.myHtml || "", this.ptStepX = t.ptStepX || 92, this.ptStepY = t.ptStepY || 81, this.ptStepX_ = t.ptStepX_ || 4, this.ptStepY_ = t.ptStepY_ || -1, this.focusData = i, this.clickTabToNav = t.clickTabToNav || !1, this.autoPlay, this.autoPlay1, this._fiObj, this._$tabC = null, this._$tabs = null, this._$titleC = null, this._$img = null, this._$transparentOvl = null, this._$desc = null, this._$pointer = null, this._curData = null, this._cfg = t, this.$d.data("apple", {
            a: t,
            b: i
        }), this.init()
    }, i.M.prototype = {
        init: function () {
            this._fiObj = i.cache[this.flag], this._fiObj && (this._fiObj.init(this), this._cfg.afterInit && this._cfg.afterInit(this), this.$d.find(".fi_ct").append(this.myHtml), this.spring())
        }, spring: function () {
            var t = this,
                i = function (i) {
                    var a = i || 0;
                    t.alternation(a), t.autoPlay = setInterval(function () {
                        t.alternation(++a == t.focusData.length ? a = 0 : a)
                    }, t.speed)
                };
            i(), this._$tabs.each(function (a) {
                ! function (a, s) {
                    s = jQuery(s).click(function () {
                        return "now" != this.className && (clearTimeout(t.autoPlay1), clearInterval(t.autoPlay), i(a)), t.clickTabToNav && window.open(t.focusData[a].l), !1
                    }), t.hoverStop && s.mouseenter(function () {
                        return clearInterval(t.autoPlay), clearTimeout(t.autoPlay1), "now" != this.className && t.alternation(a), !1
                    }).mouseleave(function () {
                        clearInterval(t.autoPlay), clearTimeout(t.autoPlay1);
                        var s = a + 1 == t.focusData.length ? 0 : a + 1;
                        t.autoPlay1 = window.setTimeout(function () {
                            i(s)
                        }, t.speed)
                    })
                }(a, this)
            }), this._fiObj.initEvts && (this._fiObj.initEvts(this, i), this._cfg.afterInitEvts && this._cfg.afterInitEvts(this))
        }, alternation: function (t) {
            var i = !0;
            return this._curData = this.focusData[t], this.$d.data("curData", this._curData), this._fiObj.alt && (i = this._fiObj.alt(this, t)), i ? (this._curData.l ? this._$img.css("cursor", "pointer") : this._$img.css("cursor", "default"), this._$img.attr({
                src: this._curData.p,
                link: this._curData.l
            }).css({
                opacity: 0
            }).stop().animate({
                opacity: 1
            }, 500), this._$tabs.filter(".now").removeClass().end().eq(t).addClass("now"), this._$titleC.html(this._curData.t), this._$desc && this._$desc.html(this._curData.t1), this._cfg.afterAlt && this._cfg.afterAlt(this), void 0) : (this._cfg.afterAlt && this._cfg.afterAlt(this), void 0)
        }
    }, t.fn.focusImg = function (a, s) {
        return this.each(function () {
            a.$d = t(this), new i.M(a, s)
        })
    }, t.fn.focusImg.Register = function (t, a) {
        i.cache[t] = a
    }, t.fn.focusImg.Get = function (t) {
        return i.cache[t]
    }
}(jQuery), $.fn.focusImg.Register("fi01", {
    init: function (t) {
        var i = '<img class="fi_player"/>';
        i += '<div class="fi_tab ' + t.place + '"></div>', i += '<div class="fi_tt"></div>', t.$d.append(i), t._$tabC = t.$d.find(".fi_tab"), t._$titleC = t.$d.find(".fi_tt"), t._$img = t.$d.find(".fi_player"), t.text ? t._$titleC.show() : t._$titleC.hide(), i = "";
        for (var a = 0; a < t.focusData.length; a++) i += "<span>" + (a + 1) + "</span>";
        t._$tabC.append(i), t._$tabs = t._$tabC.find("span")
    }, initEvts: function (t) {
        t.$d.click(function () {
            t._$img.attr("link") && window.open(t._$img.attr("link"))
        })
    }
}), $.fn.focusImg.Register("fi02", {
    init: function (t) {
        var i = '<div id="' + t.id + "_" + t.type + '" class="fi02_' + t.type + '">';
        i += '<img class="fi_player"/>', i += '<div class="fi_ovl"></div>', i += '<div class="fi_tt"></div>', i += '<div class="fi_bg"></div>', i += '<div class="fi_link"></div>', i += '<div class="fi_tab"></div>', i += "</div>", t.$d.append(i), t._$tabC = t.$d.find(".fi_tab"), t._$titleC = t.$d.find(".fi_tt"), t._$img = t.$d.find(".fi_player"), t._$transparentOvl = t.$d.find(".fi_ovl").css("opacity", .5), i = "";
        for (var a = 0; a < t.focusData.length; a++) i += "<span>" + (a + 1) + "</span>";
        t._$tabC.append(i), t._$tabs = t._$tabC.find("span")
    }, initEvts: function (t) {
        t.$d.click(function () {
            window.open(t._$img.attr("link"))
        })
    }
}), $.fn.focusImg.Register("fi03", {
    init: function (t) {
        var i = '<div class="fi03_' + t.type + '"id="' + t.id + "_" + t.type + '">';
        i += '<div class="fi_ct">', i += '<img class="fi_player"/><div class="fi_ovl"></div><div class="fi_tt"></div><div class="fi_desc"></div>', i += "</div>", i += '<div class="fi_tab"></div>', i += "</div>", t.$d.append(i), t._$transparentOvl = t.$d.find(".fi_ovl").css("opacity", .5), t._$img = t.$d.find(".fi_player"), t._$titleC = t.$d.find(".fi_tt"), t._$desc = t.$d.find(".fi_desc"), t._$tabC = t.$d.find(".fi_tab"), i = "";
        for (var a = 0; a < t.focusData.length; a++) i += "<span>" + (a + 1) + "</span>";
        t._$tabC.append(i), t._$tabs = t._$tabC.find("span")
    }, initEvts: function (t) {
        t.$d.find(".fi_ct").click(function () {
            window.open(t._$img.attr("link"))
        })
    }, alt: function (t) {
        return 1 == t.type && t._$transparentOvl.css({
            left: -600
        }).stop().animate({
            left: 0
        }, 200), !0
    }
}), $.fn.focusImg.Register("fi04", {
    init: function (t) {
        var i = '<div class="fi04_' + t.type + '"id="' + t.id + "_" + t.type + '">';
        i += '<div class="fi_ct">', i += '<img class="fi_player"/><div class="fi_ovl"></div><div class="fi_tt"></div><div class="fi_desc"></div>', i += "</div>", i += '<div class="fi_tab"><span class="fi_pointer"></span><dl></dl></div>', i += "</div>", t.$d.append(i), t._$transparentOvl = t.$d.find(".fi_ovl").css("opacity", .5), t._$img = t.$d.find(".fi_player"), t._$titleC = t.$d.find(".fi_tt"), t._$desc = t.$d.find(".fi_desc"), t._$tabC = t.$d.find("dl"), t._$pointer = t.$d.find(".fi_pointer"), i = "";
        for (var a = 0; a < t.focusData.length; a++) t.focusData[a].p1 = t.focusData[a].p1 && "" != t.focusData[a].p1 ? t.focusData[a].p1 : t.focusData[a].p, i += '<dd><img src="' + t.focusData[a].p1 + '"/></dd>';
        t._$tabC.append(i).find("img").css("opacity", .5), t._$tabs = t._$tabC.find("dd")
    }, initEvts: function (t) {
        t.$d.find(".fi_ct").click(function () {
            window.open(t._$img.attr("link"))
        }), t._$pointer.click(function () {
            window.open(t._$img.attr("link"))
        })
    }, alt: function (t, i) {
        switch (t._$tabs.filter(".now").children().css("opacity", .5), t._$tabs.eq(i).children().css("opacity", 1), t.type) {
        case "1":
            t._$pointer.stop().animate({
                left: i * t.ptStepX + t.ptStepX_
            }, 200);
            break;
        case "2":
            t._$pointer.stop().animate({
                top: i * t.ptStepY + t.ptStepY_
            }, 200)
        }
        return !0
    }
}), $.fn.focusImg.Register("fi05", {
    init: function (t) {
        var i = '<div class="fi05_' + t.type + '"id="' + t.id + "_" + t.type + '">';
        i += '<div class="fi_ct">', i += '<img class="fi_player"/><div class="fi_ovl"></div><div class="fi_tt"></div>', i += "</div>", i += '<div class="fi_tab"><dl></dl></div>', i += "</div>", t.$d.append(i), t._$transparentOvl = t.$d.find(".fi_ovl").css("opacity", .5), t._$img = t.$d.find(".fi_player"), t._$titleC = t.$d.find(".fi_tt"), t._$tabC = t.$d.find("dl"), i = "";
        for (var a = 0; a < t.focusData.length; a++) t.focusData[a].p1 = t.focusData[a].p1 && "" != t.focusData[a].p1 ? t.focusData[a].p1 : t.focusData[a].p, i += '<dd><img src="' + t.focusData[a].p1 + '"/><div>' + t.focusData[a].t + "</div></dd>";
        t._$tabC.append(i), t._$tabs = t._$tabC.find("dd")
    }, initEvts: function (t) {
        t._$tabs.mouseenter(function () {
            jQuery(this).addClass("hover")
        }), t._$tabs.mouseleave(function () {
            jQuery(this).removeClass("hover")
        }), t.$d.find(".fi_ct").click(function () {
            window.open(t._$img.attr("link"))
        })
    }, alt: function (t) {
        return t._$transparentOvl.css({
            bottom: -40
        }).stop().animate({
            bottom: 0
        }, 200), t._$titleC.css({
            bottom: -24
        }).stop().animate({
            bottom: 16
        }, 200), !0
    }
}), $.fn.focusImg.Register("fi06", {
    init: function (t) {
        var i = '<div class="fi06_' + t.type + ' clear"id="' + t.id + "_" + t.type + '">';
        i += '<div class="fi_ct l">', i += '<a target="_blank"><img class="fi_player"/></a><div class="fi_ovl"></div>', i += '<div class="fi_note"><div class="fi_tt"></div><div class="fi_desc"></div></div>', i += '<span class="fi_btnplay"></span>', i += "</div>", i += '<div class="fi_tab r">', i += '<span class="fi_up"><a href="#" class="fi_btn"></a></span><span class="fi_down"><a href="#" class="fi_btn"></a></span>', i += '<div class="fi_tab_"><dl></dl></div>', i += "</div>", i += "</div>", t.$d.html(i), t._$img = t.$d.find(".fi_player"), t._$tabC = t.$d.find(".fi_tab dl"), t._$titleC = t.$d.find(".fi_tt"), t._$desc = t.$d.find(".fi_desc"), t._$transparentOvl = t.$d.find(".fi_ovl"), t._$note = t.$d.find(".fi_note"), t._$tabOvl = t.$d.find(".fi_tab_"), i = "";
        for (var a = 0; a < t.focusData.length; a++) t.focusData[a].p1 = t.focusData[a].p1 && "" != t.focusData[a].p1 ? t.focusData[a].p1 : t.focusData[a].p, i += '<dd><img src="' + t.focusData[a].p1 + '"/><div class="fi_tt0"><span class="fi_icon"></span>' + t.focusData[a].t_ + '</div><div class="fi_desc0">' + t.focusData[a].t1_ + "</div></dd>";
        t._$tabC.html(i), t._$tabs = t._$tabC.find("dd")
    }, initEvts: function (t, i) {
        var a = t._$tabC.height() - t._$tabOvl.height();
        t.$d.find(".fi_btn").click(function () {
            return this.blur(), !1
        }), t.$d.find(".r > .fi_up").mousedown(function () {
            t._$tabC.position().top < 0 && (t._$tabC.is(":animated") || (clearInterval(t.autoPlay), clearTimeout(t.autoPlay1), t._$tabC.stop().animate({
                top: "+=" + t.ptStepY
            }, 200, function () {
                t.autoPlay1 = window.setTimeout(function () {
                    var a = t._$tabs.filter(".now").index();
                    a = -1 == a - 1 ? 0 : a - 1, i(a)
                }, t.speed)
            })))
        }), t.$d.find(".r > .fi_down").mousedown(function () {
            t._$tabC.position().top > -a && (t._$tabC.is(":animated") || (clearInterval(t.autoPlay), clearTimeout(t.autoPlay1), t._$tabC.stop().animate({
                top: "-=" + t.ptStepY
            }, 200, function () {
                t.autoPlay1 = window.setTimeout(function () {
                    var a = t._$tabs.filter(".now").index();
                    a = a + 1 == t._$tabs.length ? 0 : a + 1, i(a)
                }, t.speed)
            })))
        }), t.$d.find(".fi_ct").hover(function () {
            $(this).find(".fi_btnplay").addClass("now")
        }, function () {
            $(this).find(".fi_btnplay").removeClass("now")
        }).click(function () {
            window.open($(this).find("a:eq(0)").attr("href"))
        }), t._$img.parent("a").click(function (t) {
            return t.preventDefault(), !0
        })
    }, alt: function (t, i) {
        t._$img.attr("src", t.focusData[i].p).parent().attr("href", t.focusData[i].l), t._$tabs.removeClass("now").eq(i).addClass("now"), t._$titleC.html(t.focusData[i].t), t._$desc.html(t.focusData[i].t1);
        var a = t._$note.width(),
            s = t._$tabOvl.height();
        t._$transparentOvl.css("width", 0).stop().animate({
            width: a
        }, 200);
        var n = t._$tabs.filter(".now").prevAll().length * t.ptStepY;
        t._$tabC.height() - s;
        var e = n - (s - t.ptStepY);
        return t._$tabC.is(":animated") || (t._$tabC.position().top > -e && t._$tabC.stop().animate({
            top: -e
        }, 200), t._$tabC.position().top < -n && t._$tabC.stop().animate({
            top: -n
        }, 200)), "now" == t._$tabs[0].className && (t._$tabC.is(":animated") || t._$tabC.stop().animate({
            top: 0
        }, 200)), !1
    }
}), $.fn.focusImg.Register("fi07", {
    init: function (t) {
        var i = '<div class="fi07_' + t.type + '" id="' + t.id + "_" + t.type + '">';
        i += '<div class="fi_ct">', i += '<div class="fi_list"></div><div class="fi_ovl"></div><div class="fi_tt"></div>', i += "</div>", i += '<div class="fi_tab">', i += '<em class="fi_btn l"><a href="#"></a></em><em class="fi_btn r"><a href="#"></a></em>', i += "</div>", i += "</div>", t.$d.html(i), t._$tabC = t.$d.find(".fi_tab"), t._$titleC = t.$d.find(".fi_tt"), t._$transparentOvl = t.$d.find(".fi_ovl").css("opacity", .5), t._$list = t.$d.find(".fi_list"), t._$btnL = t._$tabC.find(".l"), t._$btnR = t._$tabC.find(".r"), i = "";
        for (var a = "", s = 0; s < t.focusData.length; s++) i += '<span><a href="' + t.focusData[s].l + '"></a></span>', a += '<img src="' + t.focusData[s].p + '"/>';
        t._$btnL.after(i), t._$list.html(a), t._$tabs = t._$tabC.find("span"), t.ptStepX = t.$d.find(".fi_ct").width()
    }, initEvts: function (t, i) {
        var a = this;
        t._$tabC.find("a").click(function () {
            return this.blur(), !1
        }), t._$btnL.mousedown(function () {
            var s = t._$tabs.index(t._$tabs.filter(".now")[0]);
            0 == s || t._$list.is(":animated") || (clearInterval(t.autoPlay), clearTimeout(t.autoPlay1), a.alt(t, s - 1, function () {
                t.autoPlay1 = window.setTimeout(function () {
                    i(s)
                }, t.speed)
            }))
        }), t._$btnR.mousedown(function () {
            var s = t._$tabs.index(t._$tabs.filter(".now")[0]);
            s == t._$tabs.length - 1 || t._$list.is(":animated") || (clearInterval(t.autoPlay), clearTimeout(t.autoPlay1), a.alt(t, s + 1, function () {
                t.autoPlay1 = window.setTimeout(function () {
                    s = s + 2 == t._$tabs.length ? 0 : s + 2, i(s)
                }, t.speed)
            }))
        }), t.$d.find(".fi_ct").click(function () {
            window.open(t._$tabs.filter(".now").find("a").attr("href"))
        })
    }, alt: function (t, i, a) {
        return t._$tabs.removeClass("now").eq(i).addClass("now"), t._$titleC.html(t.focusData[i].t), t._$transparentOvl.css("width", 0).stop().animate({
            width: t.ptStepX
        }, 200), t._$list.stop().animate({
            left: -i * t.ptStepX
        }, 200, a), !1
    }
});