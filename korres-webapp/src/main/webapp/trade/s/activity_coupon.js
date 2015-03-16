/*! trade 2015-01-19 */
(function (t, e) {
    tuanpub.addModule("activity_coupon", {
        tpl: {
            coupon: function () {
                var e = new t.Buffers;
                return e.append('<div class="coupon_right_pop">'), e.append('    <a class="close" href="javascript: void(0)" title="关闭窗口"></a>'), e.append('    <div class="popinfo">'), e.append('        <div class="hd">您还有优惠券!</div>'), e.append('        <div class="numberblock">共<em>{{#total}}</em>张，可节省<em>{{#price}}</em>元</div>'), e.append('        <ul class="couponlistblock">{{#list}}</ul>'), e.append('        <div class="submit"><a target="_blank" href="{{#alink}}">{{#atxt}}</a></div>'), e.append("    </div>"), e.append("</div>"), "" + e
            }
        },
        Init: function () {
            t.getCss("http://localhost:8888/korres-webapp/shop/asset/d/coupon_right_pop.css")
        }, OnLoad: function () {
            var e = this;
            return tuanpub.login() ? t.cookie("activity_coupon") ? !1 : (t.ajax({
                url: "//shop.zhe800.com/nnc/coupons/getcoupon.jsonp",
                dataType: "jsonp",
                cache: !0,
                jsonp: "callback",
                jsonpCallback: "jsonpCallback_getcoupon",
                success: function (t) {
                    e.success_call(t)
                }
            }), void 0) : (tuanpub.headQueue.push(function () {
                e.OnLoad()
            }), !1)
        }, success_call: function (i) {
            var n = this;
            if (!i) return !1;
            if (200 != i.status) return !1;
            if (1 > i.data.total) return !1;
            t.cookie("activity_coupon", !0, {
                expires: 1,
                domain: ".zhe800.com",
                path: "/"
            });
            var r = "",
                s = 0,
                a = i.data.couponInfoList,
                o = [];
            1 == i.data.total ? (r = n.retxt(a[0]), s = n.float_accAdd(s, a[0].price)) : (t.each(a, function (t, e) {
                s = n.float_accAdd(s, e.price)
            }), a = a.sort(function (t, e) {
                return parseFloat(t.price) > parseFloat(e.price) ? -1 : 1
            }), t.each(a, function (t, e) {
                return t > 1 ? !0 : (o.push(e), void 0)
            }), o = o.sort(function (t, e) {
                var i = new Date(t.endTime.replace(/-/g, "/")).getTime(),
                    n = new Date(e.endTime.replace(/-/g, "/")).getTime();
                return i > n ? 1 : -1
            }), t.each(o, function (t, e) {
                r += n.retxt(e)
            }));
            var l = "http://shop.zhe800.com/?utm_content=ues_discount_coupon_syright",
                u = "立即使用>>",
                c = e.location.href;
            0 == c.indexOf("http://shop.zhe800.com") && (u = "查看优惠券>>", l = "http://shop.zhe800.com/my/coupons?utm_content=more_discount_coupon_syright");
            var p = t.ParseTpl(n.tpl.coupon(), {
                total: i.data.total,
                price: s,
                list: r,
                alink: l,
                atxt: u
            });
            t("body").append(p), t(".coupon_right_pop a.close").click(function () {
                t(".coupon_right_pop").remove(), n.imgload({
                    clickkey: "discount_coupon_syright_close",
                    clicktime: (new Date).getTime()
                })
            }), t(".coupon_right_pop .submit a").click(function () {
                n.imgload({
                    clickkey: "key:discount_coupon_sydown_close",
                    clicktime: (new Date).getTime()
                })
            })
        }, retxt: function (t) {
            return 0 == t.couponType ? '<li><a target="_blank" href="http://shop.zhe800.com/my/coupons?utm_content=more_discount_coupon_syright"><span class="c_price l">' + parseFloat(t.price) + '<sup>￥</sup></span><h3 class="title l">满' + parseFloat(t.useFromPrice) + '元可用</h3><p class="deadline l">有效期至：' + t.endTime.split(" ")[0].replace(/-/g, ".") + "</p></a></li>" : '<li><a target="_blank" href="http://shop.zhe800.com/my/coupons?utm_content=more_discount_coupon_syright"><span class="c_price l">' + parseFloat(t.price) + '<sup>￥</sup></span><h3 class="title l">无门槛使用</h3><p class="deadline l">有效期至：' + t.endTime.split(" ")[0].replace(/-/g, ".") + "</p></a></li>"
        }, imgload: function (e) {
            var i = document.createElement("img"),
                n = [],
                r = "http://analysis.tuanimg.com/panda/panda_v0.gif?";
            for (var s in e) e.hasOwnProperty(s) && n.push(s + "=" + e[s]);
            i.src = r + n.join("&"), i.onload = function () {
                t(this).remove()
            }, document.body.appendChild(i)
        }, float_accAdd: function (t, e) {
            var i, n, r;
            try {
                i = ("" + t).split(".")[1].length
            } catch (s) {
                i = 0
            }
            try {
                n = ("" + e).split(".")[1].length
            } catch (s) {
                n = 0
            }
            return r = Math.pow(10, Math.max(i, n)), (t * r + e * r) / r
        }
    })
})(jQuery, window);