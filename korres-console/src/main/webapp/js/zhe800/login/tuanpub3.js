(function (b) {
    if (window.tuan800ued && window.tuanpub) {
        return
    }
    if (!window.console) {
        window.console = {
            log: function () {
                return false
            }, info: function () {
                return false
            }
        }
    }
    var c = {
            modules: {}
        },
        a = {
            version: "$Revision: 1492 $"
        };
    a.tmp = false;
    a.List = {};
    a.opts = {};
    a.exopts = {};
    a.login = function () {
        if (b.cookie("ppinf") == "") {
            return false
        } else {
            return b.parseJSON(Base64.decode(b.cookie("ppinf").split("|")[3])) || {}
        }
    }, a.queue = function (e) {
        var d = b.type(e) == "array" ? e : a.loginQueue.toArray();
        b.each(d, function (g, f) {
            if (b.type(f) == "function") {
                try {
                    f.apply(this, [])
                } catch (h) {
                    if (window.console) {
                        console.info(h.message)
                    }
                }
            }
        })
    };
    a.loginQueue = new b.Buffers("queue");
    a.addModule = function (e, d) {
        if (c.modules[e]) {
            d = b.extend(c.modules[e], d)
        }
        a.List[e] = c.modules[e] = d;
        if (c.modules[e] && c.modules[e].Init) {
            c.modules[e].Init(a.opts)
        }
        if (c.modules[e] && c.modules[e].Queue) {
            a.loginQueue.push(c.modules[e].Queue)
        }
    };
    a.use = function () {
        var e = arguments,
            d = function () {
                var g = arguments[0],
                    h = g[0];
                if (g[0].indexOf("http") == -1) {
                    switch (b.getUrl()[2].split(".")[1] + "." + b.getUrl()[2].split(".")[2]) {
                    case "tuan800.com":
                        h = "http://i0.tuanimg.com" + h;
                        break;
                    case "zhe800.com":
                        h = "http://z0.tuanimg.com" + h;
                        break;
                    case "hui800.com":
                        h = "http://s0.hui800.net" + h;
                        break
                    }
                }
                b.getScript(h, {
                    callback: function (i) {
                        var j;
                        switch (b.type(i)) {
                        case "string":
                            j = tuanpub.getModule(i);
                            j.OnLoad ? j.OnLoad() : false;
                            j.Queue ? j.Queue() : false;
                            break;
                        case "array":
                            b.each(i, function (l, m) {
                                j = tuanpub.getModule(m) || {};
                                j.OnLoad ? j.OnLoad() : false;
                                j.Queue ? j.Queue() : false
                            });
                            break;
                        case "object":
                            b.each(i, function (n, m) {
                                var l = m.parm || [];
                                j = tuanpub.getModule(n) || {};
                                j.OnLoad ? j.OnLoad() : false;
                                j.Queue ? j.Queue() : false;
                                m.init ? j[m.init].apply(b.type(m.t) == "boolean" ? m.t ? this : tuanpub.getModule(n) : tuanpub.getModule(n), (l)) : false
                            });
                            break;
                        case "function":
                            try {
                                i.apply(this, [])
                            } catch (k) {
                                if (window.console) {
                                    console.info(k)
                                }
                            }
                            break
                        }
                    }, parameter: [g[1]]
                })
            },
            f = 0;
        switch (b.type(e[0])) {
        case "string":
            d(e);
            break;
        case "object":
            b.each(e[0], function (g, h) {
                d([g, h])
            })
        }
    };
    a.getModule = function (d) {
        return c.modules[d]
    };
    a.delModule = function (d) {
        return a.List[d] = c.modules[d] = false
    };
    a.Init = function (d) {
        b.extend(this.opts, d);
        return
    };
    b(document).ready(function () {
        for (var d in c.modules) {
            if (c.modules[d] && c.modules[d].OnLoad) {
                c.modules[d].OnLoad(a.opts)
            }
        }
    });
    window.tuanpub = window.tuan800ued = a
})(jQuery);
(function (a) {
    Array.prototype.del = function (b) {
        if (b < 0) {
            return this
        } else {
            return this.slice(0, b).concat(this.slice(b + 1, this.length))
        }
    };
    a.extend({
        arrTojson: function (d) {
            var c = "",
                e = d[0];
            if (a.type(d) != "array") {
                return {}
            }
            switch (e) {
            case "s":
                var b = ["", "rating", "city", "tn", "pp", "links"];
                a.each(d, function (g, f) {
                    if (g == 0) {
                        return true
                    }
                    if (b[g] == "pp") {
                        if (f == "yes") {
                            f = ""
                        } else {
                            f = " nopp"
                        }
                    }
                    if (b[g] == "links") {
                        if (f && f != "") {
                            f = ' <a href=\\"' + f + '\\" target=\\"_blank\\">进入</a>'
                        } else {
                            f = ""
                        }
                    }
                    c += '"' + b[g] + '":"' + f + '",'
                });
                break;
            case "d":
                var b = ["", "id", "endDay", "startDay", "status"];
                a.each(d, function (g, f) {
                    if (g == 0) {
                        return true
                    }
                    c += '"' + b[g] + '":"' + f + '",'
                });
                break
            }
            c = c.length > 0 ? c.substr(0, c.length - 1) : "";
            return a.parseJSON("{" + c + "}")
        }, rdStr: function (d, h) {
            var g = 8;
            var f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            d = d || g;
            d = d < 1 ? g : d;
            d = d > f.length ? g : d;
            var e = "";
            for (var c = 0; c < d; c++) {
                var b = Math.floor(Math.random() * f.length);
                e += f.substring(b, b + 1)
            }
            if (h) {
                e += new Date().getTime()
            }
            return e
        }, getTime: {
            now: function () {
                return (new Date()).getTime()
            }, getDateStr: function (f, x) {
                var d = function (h) {
                    if (a.type(h) !== "number") {
                        return
                    }
                    if (h == 3) {
                        return " " + v + ":" + q + ":" + l
                    }
                    if (h == 4) {
                        return " " + e + ":" + w
                    }
                    if (h == 6) {
                        return " " + e + ":" + w + ":" + r
                    }
                    return ""
                };
                if (!x) {
                    if (f < 10) {
                        x = f;
                        f = new Date()
                    }
                }
                var f = f || new Date();
                var i = "-",
                    c = "",
                    k = new Date(f);
                k.setTime(f);
                var b = k.getFullYear(),
                    j = b + "".substring(2, 4),
                    g = k.getMonth() + 1,
                    n = k.getDate(),
                    v = k.getHours(),
                    q = k.getMinutes(),
                    l = k.getSeconds();
                var o = g < 10 ? "0" + g : g,
                    u = n < 10 ? "0" + n : n,
                    e = v < 10 ? "0" + v : v,
                    w = q < 10 ? "0" + q : q,
                    r = l < 10 ? "0" + l : l;
                var y = {
                    Y: b,
                    YY: j,
                    M: g,
                    MM: o,
                    D: n,
                    DD: u,
                    h: v,
                    hh: e,
                    m: q,
                    mm: w,
                    s: l,
                    ss: r
                };
                switch (a.type(x)) {
                case "string":
                    i = x;
                    break;
                case "number":
                    c = d(x);
                    break;
                case "object":
                    if (x.tpl) {
                        p = a.ParseTpl ? a.ParseTpl(x.tpl, y) : y;
                        return p;
                        break
                    }
                    i = x.rs ? x.rs : i;
                    c = d(x.HHMMSS ? x.HHMMSS : c);
                    break
                }
                var p = b + i + g + i + n + c;
                return p
            }, friendly: function (g) {
                if (a.type(g) != "number") {
                    return ""
                }
                var k = "",
                    w = 1000,
                    p = w * 60,
                    e = p * 60,
                    v = +new Date,
                    c = new Date(),
                    b = c.getFullYear(),
                    q = c.getMonth(),
                    i = c.getDate(),
                    f = new Date(b, q, i),
                    o = f.getTime(),
                    l = v - g;
                if (l < 0) {
                    k = ""
                } else {
                    if (l <= p * 5) {
                        k = "刚刚"
                    } else {
                        if (l < e) {
                            var r = Math.floor(l / p);
                            k = r + "分钟前"
                        } else {
                            if (l < v - o) {
                                var j = new Date(g),
                                    d = j.getHours(),
                                    u = j.getMinutes();
                                if (d < 10) {
                                    d = "0" + d
                                }
                                if (u < 10) {
                                    u = "0" + u
                                }
                                k = "今日 " + d + ":" + u
                            } else {
                                var j = new Date(g),
                                    h = j.getFullYear(),
                                    n = j.getMonth() + 1,
                                    s = j.getDate(),
                                    d = j.getHours(),
                                    u = j.getMinutes();
                                if (n < 10) {
                                    n = "0" + n
                                }
                                if (s < 10) {
                                    s = "0" + s
                                }
                                if (d < 10) {
                                    d = "0" + d
                                }
                                if (u < 10) {
                                    u = "0" + u
                                }
                                k = h + "年" + n + "月" + s + "日 " + d + ":" + u
                            }
                        }
                    }
                }
                return k
            }, countDown: function () {
                if (parseInt(arguments[0]) > 0) {
                    var b = this,
                        c = false;
                    times = Math.floor((arguments[0] - (arguments[1] || (new Date()).getTime())) / 1000);
                    if (times < 0) {
                        c = true;
                        times = times < 0 ? -times : times
                    }
                    return {
                        t: c,
                        s: times % 60,
                        ss: times % 60 < 10 ? "0" + times % 60 : times % 60,
                        m: Math.floor(times / 60) % 60,
                        mm: Math.floor(times / 60) % 60 < 10 ? "0" + Math.floor(times / 60) % 60 : Math.floor(times / 60) % 60,
                        h: Math.floor(times / 3600) % 24,
                        hh: Math.floor(times / 3600) % 24 < 10 ? "0" + Math.floor(times / 3600) % 24 : Math.floor(times / 3600) % 24,
                        D: Math.floor(times / 86400),
                        DD: Math.floor(times / 86400) < 10 ? "0" + Math.floor(times / 86400) : Math.floor(times / 86400)
                    }
                } else {
                    return {}
                }
            }, countTimer: new Array()
        }, getCss: function (f, c, i) {
            var e = document.getElementsByTagName("head")[0],
                b = /loaded|complete/,
                c = c || {},
                i = new Function,
                d = 0,
                h;
            if (a.type(c) == "function") {
                i = c
            }

            function g(k, j, m) {
                var l = document.createElement("link");
                l.rel = "stylesheet";
                l.type = "text/css";
                l.media = j.media || "screen";
                l.href = k;
                if (j.charset) {
                    l.charset = j.charset
                }
                if (j.title) {
                    m = (function (n) {
                        return function () {
                            l.title = j.title;
                            n(l, "success")
                        }
                    })(m)
                }
                if (l.readyState) {
                    l.onreadystatechange = function () {
                        if (b.test(l.readyState)) {
                            l.onreadystatechange = null;
                            m(l, "success")
                        }
                    }
                } else {
                    if (l.onload === null) {
                        l.onload = function () {
                            l.onload = null;
                            m(l, "success")
                        }
                    } else {
                        if (a.browser.core != "msie" && a.browser.core != "opera") {
                            l.innerHTML = '@import "' + k + '";'
                        }
                        h = window.setInterval(function () {
                            try {
                                m.r = l.sheet.cssRules;
                                throw "SECURITY"
                            } catch (n) {
                                if (d > 10) {
                                    m(l, "error");
                                    h = window.clearInterval(h);
                                    return false
                                }
                                if (/security/.test((n.name || n).toLowerCase())) {
                                    m(l, "success");
                                    h = window.clearInterval(h)
                                }
                                d++
                            }
                        }, 10)
                    }
                }
                e.appendChild(l)
            }
            if (typeof f === "string") {
                g(f, c, i)
            } else {
                if (a.isArray(f)) {
                    a.each(f, function (j) {
                        g(f[j], c, i)
                    })
                }
            }
        }
    })
})(jQuery);
(function (b) {
    b.fn.Dialogs = b.Dialogs = function (c) {
        if (this instanceof jQuery) {
            return this.each(function () {
                c.$d = b(this);
                new a.M(c)
            })
        } else {
            return new a.M(c)
        }
    };
    var a = {
        ver: "2.0"
    };
    a.M = function (c) {
        var e = this;
        e.opt = tuanpub.opts;
        e.$ = c.$d || false;
        e.$window = b(window);
        e.$document = b(document);
        e.$body = b(document.body);
        e.docHeight = e.$document.height();
        e.scrollHeight = e.$document.scrollTop();
        e.bodyHeight = e.$body.height();
        e.auto = b.type(c.auto) == "boolean" ? c.auto : true;
        e.times = b.type(c.times) == "number" ? c.times : 5;
        e.openfun = c.openfun || new Function;
        e.closefun = c.closefun || new Function;
        e.parameter = c.parameter || [];
        e.offset = c.offset || false;
        e.lock = b.type(c.lock) == "boolean" ? c.lock : (e.$) ? true : false;
        e.closebtn = c.closebtn;
        e.closeAll = b.type(c.classAll) == "boolean" ? c.classAll : false;
        e.id = c.id || "diglog_wrapper";
        e.cls = c.cls || "";
        e.diglogWrapper = '<div id="' + e.id + '" class="dialog-wrapper"></div>';
        e.overlay = b.type(c.overlay) === "boolean" ? c.overlay : b.type(c.overlay) === "object" ? c.overlay : false;
        e.msgbody = c.msbbody || '{{#close}}<div class="diginfo">{{#msg}}</div>';
        e.tpl = c.tpl || {};
        e.msg = c.msg || "";
        e.close = (b.type(c.close) == "boolean" ? c.close : true) ? '<a href="javascript:void(0)" title="关闭窗口"><span class="close"></span></a>' : "";
        e.diginfo = b.ParseTpl(e.msgbody, b.extend({}, e.tpl, {
            close: e.close,
            msg: e.msg
        }));
        e.Init(c);
        e.Overlay();
        e.autoClose()
    };
    a.M.prototype = {
        Init: function () {
            var g = this;
            if (b("#" + g.id).length > 0) {
                b("#" + g.id).remove()
            }
            b(g.diglogWrapper).html(g.diginfo).appendTo(g.$body);
            g.$d = b("#" + g.id);
            g.$d.addClass(g.cls);
            if (!g.overlay && b.browser.name == "msie" && b.browser.version == "6.0") {
                var c = b('<iframe frameborder="0"></iframe>');
                c.css({
                    width: "100%",
                    visibility: "inherit",
                    height: g.$d.find(".diginfo").height() - 10,
                    position: "absolute",
                    overflow: "hidden",
                    left: 0,
                    top: 0,
                    "z-index": -1
                }).prependTo(g.$d)
            }
            try {
                g.openfun.apply(this, (g.parameter))
            } catch (f) {}
            g.closeBtn = b.type(g.closebtn) == "boolean" && g.closebtn == false ? g.$d.find("a .close").hide() : g.$d.find(b.type(g.closebtn) === "string" ? g.closebtn : "a .close");
            g.closeBtn.bind("click", function () {
                try {
                    g.closefun.apply(this, (g.parameter))
                } catch (d) {
                    if (window.console) {
                        console.info(d)
                    }
                }
                if (g.$d.length != 0) {
                    g.$d.remove()
                }
                if (g.closeAll) {
                    b(".diglog-wrapper,.dialog-overlay").remove();
                    b.each(g.cls.split(" "), function (h, e) {
                        b("." + e).remove()
                    })
                }
                if (b(".dialog-overlay").length !== 0) {
                    if (g.$d.prop("overlay") == "yes") {
                        b(".dialog-overlay").remove()
                    }
                }
                b(window).unbind("resize.dialog" + g.id);
                return false
            });
            g.Position()
        }, Overlay: function (g) {
            var h = this;
            if (h.overlay && b(".dialog-overlay").length == 0) {
                var f = {
                    background: "#000",
                    width: "100%",
                    height: h.docHeight,
                    opacity: 0.5,
                    position: "absolute",
                    overflow: "hidden",
                    left: 0,
                    top: 0
                };
                var c = b('<div class="dialog-overlay"></div>');
                if (h.overlay.cls) {
                    c.addClass(h.overlay.cls)
                }
                if (h.overlay.css) {
                    f = b.extend(f, h.overlay.css)
                }
                c.css(f).css("z-index", h.$d.css("zIndex") - 1);
                h.$body.append(c);
                h.$d.prop("overlay", "yes");
                if (b.browser.name == "msie" && b.browser.version == "6.0") {
                    var e = b('<iframe frameborder="0"></iframe>');
                    e.css({
                        width: "100%",
                        visibility: "inherit",
                        height: h.docHeight,
                        position: "absolute",
                        overflow: "hidden",
                        left: 0,
                        top: 0
                    }).css("z-index", h.$d.css("zIndex") - 2);
                    c.append(e)
                }
            }
        }, Position: function (e) {
            var g = this;
            g.w = g.offset.width || g.$d.width();
            g.h = g.offset.height || g.$d.height();
            var f = function () {
                var d = {};
                if (g.$) {
                    d.top = g.offset.top ? (g.$.offset().top + g.offset.top) : (g.$.offset().top + g.$.height());
                    d.left = g.offset.left ? g.$.offset().left + g.offset.left : g.$.offset().left
                } else {
                    d.top = parseInt(g.$window.height() - g.h) / 2 + g.scrollHeight;
                    d.top = d.top > 0 ? d.top : 0;
                    d.left = parseInt(g.$window.width() - g.w) / 2
                } if (g.offset) {
                    d = b.extend(true, {}, g.offset, d)
                }
                return d
            };
            var c = f();
            if (g.lock) {
                b(window).bind("resize.dialog" + g.id, function () {
                    g.$d.css(f())
                })
            }
            g.$d.css(c)
        }, autoClose: function (e, f) {
            var c = this,
                e = e || c.times,
                f = f || c.auto;
            if (f) {
                b.getTime.countTimer[c.id] = window.setTimeout(function () {
                    c.$d.fadeOut("slow", function () {
                        b(this).find("span.close").trigger("click")
                    })
                }, e * 1000)
            }
        }
    };
    b.Dialogs.Dialog = function (c) {
        return b.fn.Dialogs(c)
    };
    b.Dialogs.Dialogclose = function (c) {
        var d = (c && c.id) || "diglog_wrapper";
        b("#" + d).find("span.close").trigger("click");
        return false
    }
})(jQuery);
(function (a) {
    a.fn.pageList = function () {
        var C = this;
        var f = arguments,
            b = f[0] || {
                totalNumber: 3,
                pageNum: 1,
                pageSize: 10,
                viewNum: 5
            };
        var A = b.totalNumber,
            D = b.pageNum,
            x = b.pageSize;
        var r = "",
            t = "",
            g = "",
            n = "",
            F = "",
            m = "",
            o = "",
            B = 0;
        var j = 0,
            h = 0,
            e = 0,
            c = 0,
            l = "",
            k = "",
            G = "",
            E = "",
            z = "",
            w = "",
            n = "";
        var q = typeof (b.viewNum) == "undefined" ? 10 : b.viewNum;
        r = parseInt(A % x) > 0 ? parseInt(A / x) + 1 : parseInt(A / x);
        t = parseInt(A % x);
        nPages = D > 1 ? (D - 1) * x + 1 : 1;
        nPagee = r - D > 0 ? D * x : A;
        B = parseInt(Math.round(r / q));
        o = q;
        var v = 1;
        var s = '<a href="javascript:void(0)" info="1">1</a>';
        var d = '<a href="javascript:void(0)" info="' + r + '">' + r + "</a>";
        if (r < q) {
            for (var y = 1; y <= r; y++) {
                if (y == D) {
                    n += "<span>" + y + "</span>"
                } else {
                    n += '<a href="javascript:void(0)" info="' + y + '">' + y + "</a>"
                }
            }
        } else {
            if (D <= 1) {
                for (var y = 1; y <= 3; y++) {
                    if (y == D) {
                        n += "<span>" + y + "</span>"
                    } else {
                        n += '<a href="javascript:void(0)" info="' + y + '">' + y + "</a>"
                    }
                }
                n = n + '<span class="dd">...</span>' + d
            } else {
                if (r - D <= 1) {
                    for (var y = r - 3; y <= r; y++) {
                        if (y == D) {
                            n += "<span>" + y + "</span>"
                        } else {
                            n += '<a href="javascript:void(0)" info="' + y + '">' + y + "</a>"
                        }
                    }
                    n = s + '<span class="dd">...</span>' + n
                } else {
                    j = D - 1;
                    h = D - 2;
                    e = D + 1;
                    c = D + 2;
                    l = j <= 1 ? "" : '<a href="javascript:void(0)" info="' + j + '">' + j + "</a>";
                    k = h <= 1 ? "" : '<a href="javascript:void(0)" info="' + h + '">' + h + "</a>";
                    G = e >= r ? "" : '<a href="javascript:void(0)" info="' + e + '">' + e + "</a>";
                    E = c >= r ? "" : '<a href="javascript:void(0)" info="' + c + '">' + c + "</a>";
                    z = h > 1 ? '<span class="dd">...</span>' : "";
                    w = r - c > 1 ? '<span class="dd">...</span>' : "";
                    tpages = D == 1 || D == r ? "" : "<span>" + D + "</span>";
                    n = s + z + l + tpages + G + w + d
                }
            }
        }
        var u = new a.Buffers();
        if (r - D > 0 && D == 1) {
            F = D + 1;
            u.append('<span class="selected">上页</span> ' + n + ' <a href="javascript:void(0)" info="' + F + '">下页</a>')
        } else {
            if (r - D > 0 && D > 1) {
                F = D + 1;
                m = D - 1;
                u.append('<a href="javascript:void(0)" info="' + m + '">上页</a> ' + n + ' <a href="javascript:void(0)" info="' + F + '">下页 </a>')
            } else {
                if (r - D == 0 && r > 1) {
                    m = D - 1;
                    u.append('<a href="javascript:void(0)" info="' + m + '">上页</a> ' + n + ' <span class="selected">下页</span>&nbsp;')
                } else {
                    if (r - D == 0 && r <= 1) {
                        m = D - 1;
                        u.append('<span class="selected">上页</span> ' + n + ' <span class="selected">下页</span>&nbsp;')
                    }
                }
            }
        } if (C.size() > 0) {
            C.empty().append(u.toString())
        } else {
            return u.toString() || ""
        }
    }
})(jQuery);