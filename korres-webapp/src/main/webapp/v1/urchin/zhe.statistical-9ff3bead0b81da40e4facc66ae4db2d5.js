function add_page_stats_to_params(a, t, e) {
    var n = $("#deal" + t),
        l = n.index(),
        h = 3,
        o = "" != e ? _path_name + e + "/" : _path_name,
        _ = a.href,
        i = _.match(/[&?](page_stats_w=[^& ]+)($|&)/),
        r = $("#deal" + t).find("a[onclick] img");
    o = _path_name + (Math.floor(l / h) + 1) + "*" + (l % h + 1);
    var c = window.location;
    (/www.zhe800.com\/ju_tag|www.zhe800.com\/page/i.test(c.href) || /^[^a-z\d]*$/i.test(c.pathname) === !0 && /www.zhe800.com/i.test(c.hostname))
    && /ju_flag=1/.test(_) === !1 && (o += "&ju_flag=1"), 
    _.indexOf("?") > 0 ? null != i ? _ = _.replace(i[1], 
    "page_stats_w=" + o) : _ += "&page_stats_w=" + o : _ += "?page_stats_w=" + o, 
    a.href = _, 0 == r.length && (r = $("#deal" + t).find("a.J_tklink_tmall img")), 
    r.length > 0 && $(r[0]).parent().attr("info", _)
}
var _path_name = function () {
    var a = new RegExp("^/(page/[1-9])?$"),
        t = window.location.pathname.replace(/,+/, ""),
        e = t.match(a),
        n = window.location.hostname.match("^brand"),
        l = window.location.hostname.match("^search");
    return null != e ? t = null != n ? "brand/index" + t : null != l ? "search" + t : "index" + t : (null != n && (t = "brand" + t), "/" == t.charAt(0) && (t = t.replace("/", ""))), "/" != t.charAt(t.length - 1) && (t += "/"), t
}();