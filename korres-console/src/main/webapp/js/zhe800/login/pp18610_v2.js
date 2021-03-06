(function(g) {
	g.Buffers = function() {
		this._s = new Array;
		this.type = false;
		if (arguments[0] == "queue") {
			this.type = true;
		}
	};
	g.Buffers.prototype = {
		push : function(k) {
			if (arguments.length == 0) {
				return false;
			}
			for (var j = 0; j < arguments.length; j++) {
				this._s.push(arguments[j]);
			}
			return this._s.length;
		},
		append : function(j) {
			this.push(j);
		},
		pop : function() {
			if (this._s.length == 0) {
				return null;
			} else {
				if (this.type) {
					return this._s.pop();
				} else {
					return this._s.shift();
				}
			}
		},
		getTop : function() {
			if (this._s.length == 0) {
				return null;
			} else {
				if (this.type) {
					return this._s[this._s.length - 1];
				} else {
					return this._s[0];
				}
			}
		},
		getLast : function() {
			if (this._s.length == 0) {
				return null;
			} else {
				if (this.type) {
					return this._s[0];
				} else {
					return this._s[this._s.length - 1];
				}
			}
		},
		size : function() {
			return this._s.length;
		},
		empty : function() {
			this._s.length = 0;
		},
		isEmpty : function() {
			if (this._s.length == 0) {
				return true;
			} else {
				return false;
			}
		},
		toString : function() {
			var j = this._s.join("");
			this._s.length = 0;
			return j;
		},
		toArray : function() {
			return this._s;
		}
	};
	var f = window.navigator.userAgent.toLowerCase();
	g.browser.name = (f.match(/\b(chrome|opera|safari|msie|firefox)\b/) || [
			"", "mozilla" ])[1];
	g.browser.core = (f.match(/msie|webkit|gecko|opera|khtml/) || "msie");
	g.browser.ver = g.browser.version = (f
			.match(/.(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [ 0, "0" ])[1];
	if (window.Base64) {
		return;
	} else {
		function e(m) {
			var k, l, j, n;
			k = "";
			j = m.length;
			for (l = 0; l < j; l++) {
				n = m.charCodeAt(l);
				if ((n >= 1) && (n <= 127)) {
					k += m.charAt(l);
				} else {
					if (n > 2047) {
						k += String.fromCharCode(224 | ((n >> 12) & 15));
						k += String.fromCharCode(128 | ((n >> 6) & 63));
						k += String.fromCharCode(128 | ((n >> 0) & 63));
					} else {
						k += String.fromCharCode(192 | ((n >> 6) & 31));
						k += String.fromCharCode(128 | ((n >> 0) & 63));
					}
				}
			}
			return k;
		}
		function b(o) {
			var k, m, j, p;
			var n, l;
			k = "";
			j = o.length;
			m = 0;
			while (m < j) {
				p = o.charCodeAt(m++);
				switch (p >> 4) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					k += o.charAt(m - 1);
					break;
				case 12:
				case 13:
					n = o.charCodeAt(m++);
					k += String.fromCharCode(((p & 31) << 6) | (n & 63));
					break;
				case 14:
					n = o.charCodeAt(m++);
					l = o.charCodeAt(m++);
					k += String.fromCharCode(((p & 15) << 12) | ((n & 63) << 6)
							| ((l & 63) << 0));
					break;
				}
			}
			return k;
		}
		var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var h = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
				-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
				-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1,
				-1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1,
				-1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
				14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1,
				-1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
				40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1,
				-1);
		function c(p) {
			var l, n, j;
			var o, m, k;
			j = p.length;
			n = 0;
			l = "";
			while (n < j) {
				o = p.charCodeAt(n++) & 255;
				if (n == j) {
					l += a.charAt(o >> 2);
					l += a.charAt((o & 3) << 4);
					l += "==";
					break;
				}
				m = p.charCodeAt(n++);
				if (n == j) {
					l += a.charAt(o >> 2);
					l += a.charAt(((o & 3) << 4) | ((m & 240) >> 4));
					l += a.charAt((m & 15) << 2);
					l += "=";
					break;
				}
				k = p.charCodeAt(n++);
				l += a.charAt(o >> 2);
				l += a.charAt(((o & 3) << 4) | ((m & 240) >> 4));
				l += a.charAt(((m & 15) << 2) | ((k & 192) >> 6));
				l += a.charAt(k & 63);
			}
			return l;
		}
		function d(q) {
			var p, o, m, k;
			var n, j, l;
			j = q.length;
			n = 0;
			l = "";
			while (n < j) {
				do {
					p = h[q.charCodeAt(n++) & 255];
				} while (n < j && p == -1);
				if (p == -1) {
					break;
				}
				do {
					o = h[q.charCodeAt(n++) & 255];
				} while (n < j && o == -1);
				if (o == -1) {
					break;
				}
				l += String.fromCharCode((p << 2) | ((o & 48) >> 4));
				do {
					m = q.charCodeAt(n++) & 255;
					if (m == 61) {
						return l;
					}
					m = h[m];
				} while (n < j && m == -1);
				if (m == -1) {
					break;
				}
				l += String.fromCharCode(((o & 15) << 4) | ((m & 60) >> 2));
				do {
					k = q.charCodeAt(n++) & 255;
					if (k == 61) {
						return l;
					}
					k = h[k];
				} while (n < j && k == -1);
				if (k == -1) {
					break;
				}
				l += String.fromCharCode(((m & 3) << 6) | k);
			}
			return l;
		}
		window.Base64 = {
			encode : function(j) {
				return c(e(j));
			},
			decode : function(j) {
				return b(d(j));
			}
		};
	}
	g
			.extend({
				getScript : function(l, k) {
					var j = true, o = [], m = true, n = new Function;
					if (arguments.length > 1) {
						switch (g.type(k)) {
						case "boolean":
							j = k;
							break;
						case "function":
							n = k;
							break;
						case "object":
							j = g.type(k.cache) == "boolean" ? k.cache : j;
							m = g.type(k.crossDomain) == "boolean" ? k.crossDomain
									: m;
							n = g.type(k.callback) == "function" ? k.callback
									: n;
							o = g.type(k.parameter) == "array" ? k.parameter
									: o;
							break;
						}
					}
					g.ajax({
						type : "GET",
						url : l,
						crossDomain : m,
						success : function(q, p, s) {
							try {
								n.apply(this, (o));
							} catch (r) {
								if (window.console) {
									console.log(r);
								}
							}
						},
						dataType : "script",
						cache : j
					});
				},
				getscript : function(m, n) {
					var n = g.extend({}, n);
					n._d = n._d || document;
					var k = n._d.getElementsByTagName("head")[0], l = n._d
							.createElement("script"), j = n.arg || [];
					l.type = "text/javascript";
					if (n._b) {
						l.innerHTML = n._b;
					}
					if (m && m != "") {
						l.src = m;
					}
					if (g.browser.msie) {
						l.onreadystatechange = function() {
							var o = l.readyState;
							if (o == "loaded" || o == "interactive"
									|| o == "complete") {
								this.parentNode.removeChild(this);
								if (n.callback) {
									return n.callback.apply(this, (j || []));
								}
							} else {
								l.src = m;
							}
						};
					} else {
						l.onload = function() {
							this.parentNode.removeChild(this);
							if (n.callback) {
								return n.callback.apply(this, (j || []));
							}
						};
					}
					k.appendChild(l);
				},
				cookie : function(m, n, k) {
					if (arguments.length == 0) {
						try {
							if (navigator.cookieEnabled == false) {
								return false;
							}
						} catch (p) {
							if (window.console) {
								console.info(p);
							}
						}
						return true;
					}
					if (arguments.length > 1 && String(n) !== "[object Object]") {
						k = g.extend({}, k);
						if (n === null || n === undefined) {
							k.expires = -1;
						}
						if (typeof k.expires === "number") {
							var q = k.expires, l = k.expires = new Date();
							l.setDate(l.getDate() + q);
						}
						n = String(n);
						return (document.cookie = [
								encodeURIComponent(m),
								"=",
								k.raw ? n : encodeURIComponent(n),
								k.expires ? "; expires="
										+ k.expires.toUTCString() : "",
								k.path ? "; path=" + k.path : "",
								k.domain ? "; domain=" + k.domain : "",
								k.secure ? "; secure" : "" ].join(""));
					}
					k = n || {};
					var j, o = k.raw ? function(r) {
						return r;
					} : decodeURIComponent;
					return (j = new RegExp("(?:^|; )" + encodeURIComponent(m)
							+ "=([^;]*)").exec(document.cookie)) ? o(j[1]) : "";
				},
				getParm : function(l, r) {
					var q, p = window.location.toString(), k = l ? l : p;
					if (g.type(k) == "object") {
						q = g.param(k);
						p = r ? r : p;
						if (p.indexOf("?") == -1) {
							p += "?";
						} else {
							p += "&";
						}
						return p += q;
					} else {
						if (g.type(k) == "string") {
							var j = k.split("?"), m = j[1], q = {};
							if (m && m.indexOf("&")) {
								var n = m.split("&");
								jQuery.each(n,
										function(o, t) {
											if (t && t.indexOf("=")) {
												var s = t.split("=");
												if (g.type(r) == "string"
														&& r == s[0]) {
													q = s[1] == null ? ""
															: s[1];
													return true;
												} else {
													q[s[0]] = s[1];
												}
											}
										});
							}
						}
					}
					return q;
				},
				getUrl : function(k) {
					var k = k || window.location.toString(), l = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i;
					var j = k.match(l);
					if (!!!j) {
						var l = k.match(/(\w+):\/\/(.*)/);
						j = [ l ? l[0] : k, l ? l[1] : "", l ? l[2] : "", "",
								"", "", "", "" ];
					}
					return j;
				},
				getBrowserType : function() {
					var j = {
						msie : {
							v6 : 1,
							v7 : 5,
							v8 : 6,
							v9 : 8
						},
						firefox : 2,
						opera : 3,
						chrome : 7,
						safari : 4
					};
					return g.browser.name == "msie" ? j.msie["v"
							+ parseInt(g.browser.ver)] : j[g.browser.name];
				},
				getStrLen : function(q, m, o) {
					if (!q) {
						return;
					}
					var s = /[^\x00-\xff]/ig, r = q.match(s);
					if (arguments.length == 1) {
						return q.length + (r == null ? 0 : r.length);
					}
					var k = 0, p = "", n = "", j = q.replace(s, "**").length;
					for (var l = 0; l < j; l++) {
						n = q.charAt(l).toString();
						if (n.match(s) != null) {
							k += 2;
						} else {
							k++;
						}
						if (k > m) {
							break;
						}
						p += n;
					}
					if (j > m && g.type(o) == "string") {
						p += o;
					} else {
						if (j > m && g.type(o) == "boolean") {
							p += "...";
						}
					}
					return p;
				},
				getStringLen : function(j) {
					return g.getStrLen(j);
				},
				ParseTpl : function(n, m) {
					var j;
					var l = new RegExp("{{#([a-zA-z0-9]+)}}");
					while ((j = l.exec(n)) != null) {
						var k = m[j[1]] === 0 ? "0" : m[j[1]] || "";
						n = n.replace(new RegExp(j[0], "g"), k);
					}
					return n;
				}
			});
})(jQuery);
Function.prototype.bindFunc = function(b) {
	if (typeof (b) != "object") {
		return false;
	}
	var a = this;
	return function() {
		return a.apply(b, arguments);
	};
};
var login_status = "";
var login_error_result = "";
var login_need_captcha = false;
var ssoUrl = "";
var logout_status = "";
var logout_error_result;
var renew_status = "";
var PassportCardList = [];
var PassportSC = {
	version : 2,
	ppsid : "$Id: pp18610_v2.1.js 4859 2014-05-26 06:59:07Z wangqian $",
	appid : 9999,
	max_line_length : 30,
	domain : "",
	lastLogin : false,
	myDomainView : false,
	cookie : false,
	username : "",
	bindDomainSelector : true,
	autopad : "",
	autoRedirectUrl : "",
	loginRedirectUrl : "",
	logoutRedirectUrl : "",
	selectorTitle : "请选择您的用户帐号类型",
	registerUrl : "https://passport.tuan800.com/users/signup",
	recoverUrl : "https://passport.tuan800.com/users/password/index",
	postru : "",
	emailPostfix : false,
	curDSindex : -1,
	usePost : 0,
	successCalledFunc : false,
	curCardIndex : 0,
	rootElement : false,
	dsElement : false,
	sElement : false,
	cElement : false,
	dsAnchor : false,
	usernameInput : false,
	passwdInput : false,
	pcInput : false,
	loginMsg : false,
	iElement : false,
	isSetFocus : true,
	md5pwd : false,
	captcha_url : "https://passport.tuan800.com/captcha_img?format=js",
	loginProtocal : "http",
	loginURL : "localhost:8888/korres-webapp/member/login/submit.htm",
	logoutURL : "PASSPORT.TUAN800.COM/sso/logout",
	vurl : "https://PASSPORT.TUAN800.COM/sso/scripts?type=",
	http_url : false,
	login_urltpl : "{{#http}}://{{#url}}?username={{#username}}&password={{#pwd_md5}}&appid={{#appid}}&rememberme={{#pc}}&s={{#s}}&b={{#b}}&w={{#w}}&pwdtype=1&v={{#version}}&popup_source={{#popup}}",
	logins_urltpl : "{{#http}}://{{#url}}?username={{#username}}&password={{#pwd_md5}}&appid={{#appid}}&rememberme={{#pc}}&s={{#s}}&b={{#b}}&w={{#w}}&pwdtype=2&v={{#version}}&popup_source={{#popup}}",
	logoutp_urltpl : "{{#http}}://{{#url}}?s={{#s}}&ru={{#ru}}",
	logout_urltpl : "{{#http}}://{{#url}}?appid={{#appid}}",
	eInterval : false,
	maxIntervalCount : 70,
	intervalCount : 0,
	defualtRemPwd : "",
	isShowRemPwdMsg : 0,
	campImg : "",
	campImgAlt : "",
	campUrl : "https://passport.tuan800.com/profile/index",
	cardTitle : "",
	firstDomain : "keyinfo",
	confirmInfo : "浏览器将保持通行证的登录状态，网吧或公共机房上网者请慎用。您能确认本次操作吗？",
	waitInfo : "正在登录通行证，请稍候...",
	returnTo : "",
	defaultApp : "",
	domainPool : [ "tuan800.com", "zhe800.com", "hui800.com" ],
	domainList : [ "keyinfo", "qq.com", "163.com", "126.com", "sina.com",
			"sogou.com", "sohu.com", "hotmail.com", "139.com" ],
	appList : {
		"1000" : "tuan800",
		"2000" : "zhe800",
		"3000" : "hui800"
	},
	appName : {
		tuan800 : "团800",
		zhe800 : "折800",
		hui800 : "惠800"
	},
	appUrl : {
		tuan800 : "http://www.tuan800.com",
		zhe800 : "http://www.zhe800.com",
		hui800 : "http://www.hui800.com"
	},
	appPool : false,
	bottomRow : [],
	recomServ : [],
	reverseFirstDomain : false,
	showEmailInputTip : true,
	usePostFix : true,
	gotohref : function(a) {
		window.href = a;
		$("body").append($("<a>").attr("href", a).bind("click", function() {
			window.location = $(this).attr("href");
			return;
		}).trigger("click"));
	},
	getDomain : function() {
		var b = document.domain.split(".");
		var a = b.length;
		if (a <= 2) {
			return document.domain;
		}
		return b[a - 2] + "." + b[a - 1];
	},
	getPassportDomain : function() {
		return "";
	},
	preventEvent : function(a) {
		a.cancelBubble = true;
		a.returnValue = false;
		if (a.preventDefault) {
			a.preventDefault();
		}
		if (a.stopPropagation) {
			a.stopPropagation();
		}
	},
	getTime : function() {
		var a = new Date();
		return a.getTime();
	},
	reportMsg : function(c, a, b) {
		var d = "";
		switch (c) {
		case "1":
			d += "请输入通行证用户名";
			break;
		case "2":
			d += "通行证用户名为邮件地址格式";
			break;
		case "3":
			d += "用户名后缀必须为" + arguments[1];
			break;
		case "4":
			d += "请输入通行证密码";
			break;
		case "5":
			d += "请输入图片验证码";
			break;
		case "6":
			d += "登录超时，请稍后重试";
			break;
		case "7":
			d += "登录失败，请重试";
			break;
		case "8":
			d += "网络故障，退出失败，请重新退出";
			break;
		case "9":
			d += "用户名或密码错误，请重试";
			break;
		case "10":
			d += "暂时不可登录，请稍后重试";
			break;
		case "11":
			d += "浏览器设置有误，请查看帮助修正";
			break;
		case "12":
			d += "账号尚未激活，重发<a href=" + this.loginProtocal
					+ '"://passport.tuan800.com/users/confirmation/new?email='
					+ this.usernameInput.val() + '" target="_blank">激活邮件</a>';
			break;
		case "error":
			d = a.message;
			break;
		default:
			d += "登录错误，请稍后重试";
		}
		this.showMsg(d);
	},
	showMsg : function(a) {
		if (!this.loginMsg) {
			return;
		}
		this.loginMsg.html(a).show();
	},
	cookieHandle : function() {
		if (!this.cookie) {
			this.parsePassportCookie();
		}
		if (this.cookie && this.cookie.userid != "") {
			return this.cookie.userid;
		} else {
			return "";
		}
	},
	getDisplayName : function() {
		var b = this.cookieHandle();
		var a = b.split("@");
		var d = a[0];
		var c = /^1\d{10}$/;
		if (c.test(d)) {
			return d.substring(0, 3) + "****" + d.substring(7);
		} else {
			return b;
		}
	},
	parsePassportCookie : function() {
		var c = "";
		if ($.cookie("ppinf") != "") {
			c = unescape($.cookie("ppinf"));
		}
		if (c === "") {
			this.cookie = false;
			return;
		}
		try {
			var a = c.split("|");
			var b = Base64.decode(a[3]);
			this._parsePassportCookie(b);
		} catch (d) {
			if (window.console) {
				console.info(d);
			}
		}
	},
	_parsePassportCookie : function(f) {
		var b = this, c = $.parseJSON(f);
		this.cookie = new Object;
		$.each(c, function(g, e) {
			b.cookie[g] = e;
		});
		try {
			this.cookie.service = new Object;
			var a = this.cookie.service;
			a.tuan800 = 1;
			a.zhe800 = 1;
			a.hui800 = 1;
		} catch (d) {
			if (window.console) {
				console.info(d);
			}
		}
	},
	parseAppid : function() {
		var d = this.appid.toString();
		var c = 0;
		this.appPool = new Array();
		for ( var b in this.appList) {
			var a = this.appList[b];
			if (typeof (a) != "string") {
				continue;
			}
			if (b == d) {
				this.defaultApp = this.appName[a];
			} else {
				this.appPool[c] = {
					app : a,
					name : this.appName[a],
					url : this.appUrl[a]
				};
				c++;
			}
		}
	},
	getBottomRow : function() {
		var a = 0;
		var b = this.max_line_length - $.getStringLen(this.defaultApp);
		this.bottomRow[0] = new Array();
		this.bottomRow[1] = new Array();
		if (!this.cookie) {
			return;
		}
		a = this._getBottomRow(this.bottomRow[0], b, 0);
		b = this.max_line_length;
		a = this._getBottomRow(this.bottomRow[1], b, a);
	},
	_getBottomRow : function(l, f, c) {
		var a, d;
		var h = this.cookie.service;
		var g = this.appPool;
		var e = c;
		var k;
		for (d = 0; e < g.length; e++) {
			a = g[e]["app"];
			if (e == 0 || e == 1) {
				k = $.getStringLen(g[e]["name"]);
				if (f - k < 0) {
					break;
				}
				f -= (k + 2);
				l[d] = g[e];
				d++;
				continue;
			}
			if (typeof (h[a]) == "undefined") {
				continue;
			}
			if (h[a] != 0) {
				k = $.getStringLen(g[e]["name"]);
				if (f - k < 0) {
					break;
				}
				f -= (k + 2);
				l[d] = g[e];
				d++;
			} else {
				var b = this.recomServ.length;
				this.recomServ[b] = g[e];
			}
		}
		return e;
	},
	parseLastDomain : function(f) {
		this.emailPostfix = new Array();
		var h = "", b = "";
		var e = "", g = "", a = [];
		var c = 0;
		if (this.firstDomain != "") {
			for ( var d in f) {
				if (this.firstDomain == f[d]) {
					b = f[d];
					break;
				}
			}
			if (b != "") {
				this.emailPostfix[c] = b;
				c++;
			}
		}
		for ( var d in f) {
			if (typeof (f[d]) != "string") {
				continue;
			}
			if (f[d] != this.domain && f[d] != h && f[d] != b) {
				this.emailPostfix[c] = f[d];
				c++;
			}
		}
	},
	doPost : function() {
		for (var e = 0; e < document.forms.length; e++) {
			if (document.forms[e].name == "loginform") {
				break;
			}
		}
		if (e == document.forms.length) {
			document.location.href = this.loginProtocal
					+ "://passport.tuan800.com";
			return false;
		}
		var d = {
			url : "passport.tuan800.com/login",
			appid : this.appid,
			ru : this.postru,
			b : a,
			w : c,
			version : this.version
		};
		var a = getBrowserType();
		var c = screen.width;
		document.forms[e].action = $
				.ParseTpl(
						"{{#url}}?appid={{#appid}}&ru={{#ru}}&b={{#b}}&w={{#w}}&v={{#version}}",
						d);
		document.forms[e].submit();
		return false;
	},
	doLogin : function() {
		if (this.eInterval) {
			return;
		}
		if (arguments[0]) {
			PassportCardList[index].doLogin();
		}
		this.intervalCount = 0;
		this.sElement.empty();
		this.username = $.trim(this.usernameInput.val());
		var e = this.username;
		var c = $.trim(this.passwdInput.val());
		var b = $.trim(this.captchaInput ? this.captchaInput.val() : false);
		var a = 0;
		if (this.pcInput && this.pcInput.prop("checked") == true) {
			a = 1;
		}
		if (e == "") {
			this.reportMsg("1");
			this.usernameInput.focus();
			return false;
		}
		if (this.autopad != "") {
			var d = email.substr(email.lastIndexOf("@") + 1);
			if (this.autopad.lastIndexOf(d) < 0) {
				this.reportMsg("3", this.autopad);
				this.usernameInput.focus();
				this.passwdInput.value = "";
				return false;
			}
		}
		if (c == "") {
			this.reportMsg("4");
			this.passwdInput.value = "";
			this.passwdInput.focus();
			return false;
		}
		if (login_need_captcha && b && b == "") {
			this.reportMsg("5");
			this.captchaInput.value = "";
			this.captchaInput.focus();
			return false;
		}
		if (this.usePost == 1) {
			login_status = "";
			login_error_result = "";
			login_need_captcha = false;
			return this.doPost();
		}
		this.drawPassportWait(this.waitInfo);
		return this.loginHandle(e, c, a, this.sElement, this.loginFailCall
				.bindFunc(this), this.loginSuccessCall.bindFunc(this));
	},
	getusername : function() {
		if ($("#dialog_log_qiandao").data("username")) {
			return $("#dialog_log_qiandao").data("username");
		}
		if ($(".tao_r").data("username")) {
			return $(".tao_r").data("username");
		}
		if ($("#sidePanel_login").data("username")) {
			return $("#sidePanel_login").data("username");
		}
		return "";
	},
	loginHandle : function(g, k, m, r, l, c) {
		if (typeof (r) != "object") {
			return false;
		}
		if ($.cookie() == false) {
			l();
			return false;
		}
		var n = $.getBrowserType();
		var o = screen.width;
		if (this.domain == "") {
			this.domain = this.getDomain();
		}
		var q = this.getTime();
		var f = this.md5pwd ? function() {
			return $.md5 ? $.md5(k) : k;
		} : k;
		var j = {
			http : this.loginProtocal,
			url : this.loginURL,
			username : encodeURIComponent(g),
			pwd_md5 : encodeURIComponent(f),
			appid : this.appid,
			pc : m,
			s : q,
			b : n,
			w : o,
			version : this.version,
			popup : this.getusername()
		};
		var d = this.login_urltpl;
		try {
			if (this.loginProtocal == "https") {
				d = this.logins_urltpl;
			}
			this.http_url = $.ParseTpl(d, j);
			var a = this.http_url;
		} catch (h) {
			if (this.loginProtocal == "https") {
				d = this.https_urltpl;
			}
			this.http_url = $.ParseTpl(d, j);
			var a = this.http_url;
			if (window.console) {
				console.info(h);
			}
		}
		a += "&domain=" + this.domain;
		if (this.returnTo != "") {
			a += "&return_to=" + this.returnTo;
		}
		if (this.captchaInput && this.captchaInput.val() != "") {
			a += "&captcha=" + this.captchaInput.val() + "&captcha_key="
					+ login_error_result.captcha_key;
		}
		login_status = "";
		login_error_result = "";
		login_need_captcha = false;
		$.getScript(a, true);
		var p = this;
		this.eInterval = setInterval(function() {
			p.loginIntervalProc(l, c, r);
		}, 100);
		return false;
	},
	loginIntervalProc : function(a, b, c) {
		if (login_status == "" && this.intervalCount < this.maxIntervalCount) {
			this.intervalCount++;
			return;
		}
		clearInterval(this.eInterval);
		this.eInterval = false;
		if (login_status != "success"
				|| this.intervalCount >= this.maxIntervalCount) {
			if (this.loginProtocal == "https" && login_status == "") {
				this.intervalCount = 0;
			} else {
				a();
			}
			return;
		}
		if (this.loginRedirectUrl == "") {
			this.autoProcAllDomain("login", c);
		} else {
			$.cookie("crossdomain", this.getTime(), {
				path : "/",
				expires : 336
			});
		}
		b();
	},
	loginFailCall : function() {
		this.sElement.html("");
		this.drawLoginForm();
		var b = login_status;
		if (this.intervalCount >= this.maxIntervalCount) {
			this.reportMsg("6");
			this.usernameInput.focus();
		} else {
			if ($.cookie() == false) {
				this.reportMsg("11");
				this.usernameInput.focus();
			} else {
				this.reportMsg(b, login_error_result, login_need_captcha);
				if (login_need_captcha && this.captchaInput) {
					var a = this, c = function(d) {
						var e = d;
						$.getScript(a.captcha_url, {
							callback : function() {
								e.attr("src", captcha_url);
							},
							cache : false
						});
					};
					this.captchaInput.closest(".token").show().find("img")
							.click(function() {
								c($(this));
							});
				}
				this.passwdInput.focus();
				return false;
				switch (b) {
				case "error1":
					this.reportMsg("9");
					this.passwdInput.focus();
					break;
				case "error2":
					this.reportMsg("5");
					this.passwdInput.focus();
					break;
				case "error3":
					this.reportMsg("5");
					this.passwdInput.focus();
					break;
				default:
					this.reportMsg(b);
					this.passwdInput.focus();
					break;
				}
			}
		}
	},
	loginSuccessCall : function() {
		this.parsePassportCookie();
		if (this.cookie && this.cookie.username != "") {
			this.username = "";
			if (this.loginRedirectUrl != "") {
				if (document.location.href == this.loginRedirectUrl) {
					document.location.reload();
				} else {
					PassportSC.gotohref(this.loginRedirectUrl);
				}
			} else {
				this.getBottomRow();
				this.drawPassportCard();
				for (i = 0; i < PassportCardList.length; i++) {
					if (i == this.curCardIndex) {
						continue;
					}
					PassportCardList[i].parsePassportCookie();
					PassportCardList[i].getBottomRow();
					PassportCardList[i].drawPassportCard();
				}
			}
			try {
				this.loginApp();
			} catch (a) {
				if (window.console) {
					console.info(a);
				}
			}
		} else {
			this.drawLoginForm();
			this.reportMsg("7");
		}
	},
	doLogout : function() {
		if (this.eInterval) {
			return;
		}
		this.intervalCount = 0;
		this.sElement.html("");
		if (this.usePost == 1) {
			window.location = $.ParseTpl(this.logoutp_urltpl, {
				http : this.loginProtocal,
				url : this.logoutURL,
				s : this.getTime(),
				ru : this.postru
			});
		} else {
			this.logoutHandle(this.sElement,
					this.logoutFailCall.bindFunc(this), this.logoutSuccessCall
							.bindFunc(this, "dd"));
		}
	},
	logoutHandle : function(e, b, d) {
		if (typeof (e) != "object") {
			return false;
		}
		logout_status = "";
		if (this.domain == "") {
			this.domain = this.getDomain();
		}
		var f = this.getTime();
		var c = $.ParseTpl(this.logout_urltpl, {
			http : this.loginProtocal,
			url : this.logoutURL,
			appid : this.appid
		});
		c += "&domain=" + this.domain;
		$.getScript(c);
		var a = this;
		this.eInterval = setInterval(function() {
			a.logoutIntervalProc(b, d, e);
		}, 100);
	},
	logoutIntervalProc : function(a, b, c) {
		if (logout_status == "" && this.intervalCount < this.maxIntervalCount) {
			this.intervalCount++;
			return;
		}
		clearInterval(this.eInterval);
		this.eInterval = false;
		if (logout_status != "success"
				|| this.intervalCount >= this.maxIntervalCount) {
			a();
			return;
		}
		if (this.logoutRedirectUrl == "") {
			this.autoProcAllDomain("logout", c);
		} else {
			$.cookie("crossdomain_logout", this.getTime(), {
				path : "/",
				expires : 336
			});
		}
		b();
	},
	logoutFailCall : function() {
		this.sElement.html("");
		this.reportMsg("8");
	},
	logoutSuccessCall : function(b) {
		this.parseLastDomain(this.domainList);
		this.cookie = false;
		this.drawLoginForm();
		if (this.logoutRedirectUrl != "") {
			if (document.location.href == this.logoutRedirectUrl) {
				document.location.reload();
			} else {
				PassportSC.gotohref(this.logoutRedirectUrl);
			}
		} else {
			for (i = 0; i < PassportCardList.length; i++) {
				if (i == this.curCardIndex) {
					continue;
				}
				PassportCardList[i].drawLoginForm();
			}
		}
		try {
			this.logoutApp();
		} catch (a) {
			if (window.console) {
				console.info(a);
			}
		}
	},
	refreshCookie : function(e, a, d) {
		var b = this.loginProtocal + "://passport.tuan800.com/sso/refresh?_t="
				+ new Date().getTime();
		if (b) {
			var c = $("<iframe></iframe>");
			c.css({
				height : 0,
				width : 0
			}).attr("src", b);
			$("body").append(c);
		}
		return false;
	},
	renewCookie : function(f, b, e) {
		if (typeof (f) != "object") {
			return false;
		}
		if (this.domain == "") {
			this.domain = this.getDomain();
		}
		var g = this.getTime();
		var c = this.loginProtocal + "://passport.tuan800.com/sso/refresh?ra"
				+ g;
		c += "&domain=" + this.domain;
		if (c) {
			var d = $("<iframe></iframe>");
			d.css({
				height : 0,
				width : 0
			}).attr("src", vurl);
			f.append(d);
		}
		$.getScript(c);
		var a = this;
		this.eInterval = setInterval(function() {
			a.renewIntervalProc(b, e, f);
		}, 100);
		return false;
	},
	renewIntervalProc : function(a, b, c) {
		if (renew_status == "" && this.intervalCount < this.maxIntervalCount) {
			this.intervalCount++;
			return;
		}
		clearInterval(this.eInterval);
		this.eInterval = false;
		if (renew_status != "success"
				|| this.intervalCount >= this.maxIntervalCount) {
			try {
				a();
			} catch (d) {
				if (window.console) {
					console.info(d);
				}
			}
			return;
		}
		this.autoProcAllDomain("renew", c);
		try {
			b();
		} catch (d) {
			if (window.console) {
				console.info(d);
			}
		}
	},
	autoProcAllDomain : function(d, c) {
		var a = this.crossDomainIframeUrl(d);
		if (a) {
			var b = $("<iframe></iframe>");
			b.css({
				height : 0,
				width : 0
			}).attr("src", a);
			$("body").append(b);
		}
	},
	doCrossDomainCookie : function(p, h) {
		var n = this;
		if (typeof (p) != "object") {
			return;
		}
		var k = "crossdomain";
		if (h == "logout") {
			k = "crossdomain_logout";
		}
		if (this.domain == "") {
			this.domain = this.getDomain();
		}
		var a = $.cookie(k), b = $.cookie("ppinf"), e = $
				.cookie("ppinf_lastTime"), l = "ppinf_lastTime";
		var g = function() {
			var q = $("<iframe></iframe>");
			q.css({
				height : 0,
				width : 0
			}).attr(
					"src",
					n.loginProtocal + "://passport.tuan800.com/sso/refresh?_t"
							+ new Date().getTime());
			p.append(q);
		};
		if (a == "" || a == "0") {
			if (b == "" && h == "logout" && e != "") {
				$.cookie(l, "", {
					path : "/",
					domain : "." + this.domain,
					expires : (new Date(0))
				});
			} else {
				if (b != "" && h == "login") {
					var f, d, m = parseInt($.cookie("ppinf").split("|")[1]);
					f = new Date(m);
					if (e == "") {
						f.setDate(f.getDate() + 1);
						$.cookie(l, m, {
							path : "/",
							domain : "." + this.domain,
							expires : f
						});
						g();
					} else {
						var d = new Date(parseInt(e));
						f.setHours(0, 0, 0);
						d.setHours(0, 0, 0);
						var o = Math
								.floor((Date.parse(f) - Date.parse(d)) / 24 / 1000 / 3600);
						if (o > 0) {
							g();
							$.cookie(l, new Date().getTime(), {
								path : "/",
								domain : "." + this.domain,
								expires : m
							});
						}
					}
				}
			}
			return;
		}
		var c = this.crossDomainIframeUrl(h);
		if (c) {
			var j = $("<iframe></iframe>");
			j.css({
				height : 0,
				width : 0
			}).attr("src", c);
			p.append(j);
			$.cookie(k, "", {
				path : "/",
				domain : "." + this.domain,
				expires : (new Date(0))
			});
			$.cookie(k, "", {
				path : "/",
				expires : (new Date(0))
			});
		}
	},
	crossDomainUrl : function(c, b) {
		var d = this.getTime();
		var a = this.loginProtocal + "://passport.tuan800.com/sso/scripts?s="
				+ d + "&type=" + c + "&current_site=" + b;
		return a;
	},
	crossDomainIframeUrl : function(b) {
		var a = this.vurl + b + "&domain=" + this.domain;
		return a;
	},
	setDomainCookie : function(f, e, d, b) {
		login_status = "";
		login_error_result = "";
		login_need_captcha = false;
		crossdomain_status = "";
		var c = this.crossDomainUrl("login", e);
		if (c) {
			$.getScript(c);
		}
		var a = this;
		this.eInterval = setInterval(function() {
			a.setCookieIntervalProc(f, d, b);
		}, 100);
	},
	setCookieIntervalProc : function(c, b, a) {
		if (crossdomain_status != "") {
			clearInterval(this.eInterval);
			this.eInterval = false;
			a();
			return;
		}
		if (login_status == "" && this.intervalCount < this.maxIntervalCount) {
			this.intervalCount++;
			return;
		}
		clearInterval(this.eInterval);
		this.eInterval = false;
		if (login_status != "success"
				|| this.intervalCount >= this.maxIntervalCount) {
			a();
			return;
		}
		b();
	},
	downDSindex : function() {
		var a = this.dsAnchor.find("tr");
		if (a.size() == 0) {
			return;
		}
		var b = 0, c = this.curDSindex;
		a.each(function(d) {
			if ($(this).find("td:first").prop("idx") == c) {
				b = d;
				return false;
			}
		});
		if (b >= a.size() - 1) {
			this.curDSindex = a.eq(0).find("td:first").prop("idx");
		} else {
			this.curDSindex = a.eq(b + 1).find("td:first").prop("idx");
		}
	},
	upDSindex : function() {
		var a = this.dsAnchor.find("tr");
		if (a.size() == 0) {
			return;
		}
		var d = -1, b = 0, c = this.curDSindex;
		a.each(function(e) {
			if ($(this).find("td:first").prop("idx") == c) {
				b = e;
				return false;
			}
			d = a.eq(e).find("td:first").prop("idx");
		});
		if (b == a.size()) {
			this.curDSindex = a.eq(0).find("td:first").prop("idx");
		} else {
			if (d == -1) {
				this.curDSindex = a.eq(a.size() - 1).find("td:first").prop(
						"idx");
			} else {
				this.curDSindex = d;
			}
		}
	},
	findDSindex : function(b) {
		try {
			var a = this.dsAnchor.find("tr"), d = "";
			a.each(function() {
				if ($(this).find("td:first").prop("idx") == b) {
					d = $(this).find("td:first");
					return false;
				}
			});
			return d;
		} catch (c) {
			if (window.console) {
				console.info(c);
			}
		}
		return false;
	},
	clearFocus : function(b) {
		if (typeof (b) != "number") {
			b = this.curDSindex;
		}
		try {
			var a = this.findDSindex(b);
			a.removeClass().css("font-weight", "normal");
		} catch (c) {
			if (window.console) {
				console.info(c);
			}
		}
	},
	setFocus : function(b) {
		if (typeof (b) != "number") {
			b = this.curDSindex;
		}
		try {
			var a = this.findDSindex(b);
			a.removeClass().addClass("active");
		} catch (c) {
			if (window.console) {
				console.info(c);
			}
		}
	},
	fillEmailSelect : function() {
		var t = this.usernameInput.val();
		if (!this.dsElement) {
			return false;
		}
		if (t == "") {
			this.dsElement.hide();
			this.dsAnchor.empty();
			return;
		}
		var n = this;
		var f = "";
		var p = '<tr><td id="email_postfix_{{#id}}">{{#usePostFix}}</td></tr>';
		var u = "";
		var a = "";
		var o = t.lastIndexOf("@");
		if (o < 0) {
			a = t;
		} else {
			if (o == t.length - 1) {
				a = t.substr(0, o);
			} else {
				a = t.substr(0, o);
				u = t.substr(o + 1);
			}
		}
		var k = parseInt(this.usernameInput.offset().left
				- this.cElement.offset().left);
		if ($.browser.msie) {
		}
		this.dsElement.css("margin-left", k + "px");
		this.dsElement.css("margin-top", this.usernameInput.offset().top
				- this.cElement.offset().top
				+ this.usernameInput.get(0).offsetHeight - 1 + "px");
		this.dsElement.css({
			"z-index" : 999999,
			padding : 0,
			"background-color" : "white"
		});
		this.dsAnchor
				.empty()
				.append(
						'<table width="100%" cellspaceing="0" cellpadding="3"><tbody></tbody></table>');
		var b = this.dsAnchor.find("tbody:first");
		var q = 0;
		var c = false;
		var l = false;
		var v = -1;
		var m = "", d = "";
		var h = this.emailPostfix;
		var s = /^1.*$/;
		if (s.test(t)) {
			if (this.autopad != "") {
				h = [ "mobile", this.autopad ];
			} else {
				h = [ "mobile" ];
			}
		}
		for (var r = 0; r < h.length; r++) {
			var g = h[r];
			if (typeof (g) != "string") {
				continue;
			}
			if (u != "") {
				if (g.lastIndexOf(u) != 0) {
					continue;
				}
			}
			q++;
			if (v == -1) {
				v = r;
			}
			if (this.curDSindex == r) {
				c = true;
			}
			if (g == "keyinfo" || g == "mobile") {
				f = t;
			} else {
				if (l == false) {
					if (this.usePostFix) {
						f = a + "@" + g;
					} else {
						f = a;
					}
				} else {
					if (this.usePostFix) {
						f = g;
					} else {
						usePostFixL = g.substring(0, g.lastIndexOf("@"));
					}
				}
			}
			code = $($.ParseTpl(p, {
				id : r,
				usePostFix : f
			}));
			code.find("td:first").prop("idx", r).bind("mouseover", function() {
				n.clearFocus();
				n.curDSindex = this.idx;
				n.setFocus();
				this.style.cursor = "pointer";
			}).bind("click", n.doSelect);
			b.append(code);
			l = false;
		}
		if (q > 0) {
			this.dsElement.show();
			if (c == false) {
				this.curDSindex = v;
			}
			this.setFocus();
		} else {
			this.dsElement.hide();
			this.curDSindex = -1;
		}
	},
	doSelect : function(b) {
		if (!this.dsElement) {
			return false;
		}
		this.dsElement.hide();
		var a = this.findDSindex(this.curDSindex);
		if (a) {
			var d = a.html();
			if (d) {
				this.usernameInput.val(d.replace(/&amp;/g, "&"));
			}
		}
		if (this.usernameInput.val() != "") {
			this.passwdInput.focus();
		}
	},
	checkKeyDown : function(a) {
		a = a || window.event;
		var b = a.keyCode || a.which || a.charCode;
		if (b == 13) {
			this.preventEvent(a);
			return false;
		}
		if (b == 38 || b == 40) {
			if (a.shiftKey == 1) {
				return;
			}
			this.clearFocus();
			if (b == 38) {
				this.upDSindex();
			} else {
				if (b == 40) {
					this.downDSindex();
				}
			}
			this.setFocus();
		}
	},
	checkKeyPress : function(b) {
		b = b || window.event;
		var c = b.keyCode || b.which || b.charCode;
		if (c == 13) {
			this.preventEvent(b);
			return false;
		} else {
			if (c == 38 || c == 40) {
				if (b.shiftKey == 1) {
					return;
				}
				this.preventEvent(b);
				this.clearFocus();
				if (c == 38) {
					this.upDSindex();
				} else {
					if (c == 40) {
						this.downDSindex();
					}
				}
				this.setFocus();
			} else {
				if (c == 108 || c == 110 || c == 111 || c == 115) {
					var a = this;
					setTimeout(function() {
						a.fillEmailSelect();
					}, 10);
				}
			}
		}
	},
	checkKeyUp : function(a) {
		a = a || window.event;
		var b = a.keyCode || a.which || a.charCode;
		this.fillEmailSelect();
		if (b == 9) {
			this.preventEvent(a);
			return false;
		}
		if ($.getBrowserType() == 7 || $.getBrowserType() == 4) {
			if (b == 38 || b == 40) {
				if (a.shiftKey == 1) {
					return;
				}
				this.clearFocus();
				if (b == 38) {
					this.upDSindex();
				} else {
					if (b == 40) {
						this.downDSindex();
					}
				}
				this.setFocus();
			}
		}
	},
	checkMousedown : function() {
		if (this.usernameInput.val() == "通行证帐号/手机号") {
			this.usernameInput.val("");
			this.usernameInput.focus();
			return;
		}
	},
	rootElement : function(b) {
		this.rootElement = b;
		this.rootElement
				.html('<div class="ppselecter" style="position: absolute; display: none;"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td style="" class="ppseltit">'
						+ this.selectorTitle
						+ '</td></tr><tr><td /></tr></tbody></table></div><div style="display: none;"></div><div class="passportc"></div>');
		if (this.selectorTitle == null || this.selectorTitle.length == 0) {
			this.rootElement
					.html('<div class="ppselecter" style="position: absolute; display: none;"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr></tr><tr><td height="0" /></tr><tr><td /></tr></tbody></table></div><div style="display: none;"></div><div class="passportc"></div>');
		}
		var a = this.rootElement.find("div");
		this.dsElement = a.eq(0);
		this.dsAnchor = this.dsElement.find("td:last");
		this.sElement = a.eq(1);
		this.cElement = a.eq(2);
	},
	init : function(a) {
		this.rootElement(a);
		this.domain = this.getDomain();
		this.parseLastDomain(this.domainList);
		this.parseAppid();
		this.parsePassportCookie();
		this.getBottomRow();
		if (this.postru == "") {
			this.postru = document.location.href;
		}
	},
	_drawPassportCard : function() {
	},
	drawPassportCard : function() {
		this._drawPassportCard();
		this.$iElement();
		try {
			this.successCalledFunc(this.iElement);
		} catch (a) {
			this.drawPassportInfo();
			if (window.console) {
				console.info(a);
			}
		}
	},
	$iElement : function() {
		this.iElement = this.cElement.find(".listContA");
	},
	drawPassportWait : function(a) {
	},
	drawPassportInfo : function() {
	},
	getRanServ : function() {
		var d = this.recomServ.length;
		if (d == 0) {
			return "";
		}
		var b = Math.floor(d * (Math.random()));
		var c = '<a href="' + this.recomServ[b]["url"] + '" target="_blank">'
				+ this.recomServ[b]["name"] + "</a>";
		if (d == 1) {
			return c;
		}
		var a = Math.floor(d * (Math.random()));
		while (b == a) {
			a = Math.floor(d * (Math.random()));
		}
		c += ' | <a href="' + this.recomServ[a]["url"] + '" target="_blank">'
				+ this.recomServ[a]["name"] + "</a>";
		return c;
	},
	_drawLoginForm : function() {
	},
	drawLoginForm : function() {
		this._drawLoginForm();
		var a = this.cElement.find("input");
		var b = this;
		b.captchaInput = false;
		a.each(function() {
			if ($(this).attr("name") == "username") {
				b.usernameInput = $(this);
			}
			if ($(this).attr("name") == "password") {
				b.passwdInput = $(this);
			}
			if ($(this).attr("name") == "remember_me") {
				b.pcInput = $(this);
			}
			if ($(this).attr("name") == "captcha") {
				b.captchaInput = $(this);
			}
		});
		this.loginMsg = this.cElement.find(".error");
		if (this.isShowRemPwdMsg == 0 && this.pcInput) {
			this.pcInput.bind("click", function() {
				if (b.pcInput.prop("checked") == false) {
					return;
				}
				var c = window.confirm(b.confirmInfo);
				if (c == false) {
					b.pcInput.attr("checked", false);
				}
			});
		}
		this.bindSelector();
		this.autoFillUserId();
		var b = this;
		if (this.usernameInput.val() == "") {
			if (this.isSetFocus) {
				setTimeout(function() {
					b.usernameInput.focus();
				}, 50);
			}
		} else {
			if (this.isSetFocus && this.usernameInput.val() != "通行证帐号/手机号") {
				setTimeout(function() {
					b.passwdInput.focus();
				}, 50);
			}
		}
	},
	autoFillUserId : function() {
		if (this.showEmailInputTip) {
			this.showEmailInputTip = false;
			return;
		}
		var a = $.cookie("pptmpuserid");
		if (this.username.length > 0) {
			this.usernameInput.val(this.username);
		} else {
			this.usernameInput.val(a);
		}
		if (a.length > 0) {
			var b = this;
			setTimeout(function() {
				$.cookie("pptmpuserid", this.getTime(), {
					path : "/",
					expires : (new Date(0))
				});
			}, 1000);
		}
	},
	bindSelector : function() {
		if (this.bindDomainSelector) {
			this.curDSindex = -1;
			this.usernameInput.bind("mousedown",
					this.checkMousedown.bindFunc(this)).bind("keypress",
					this.checkKeyPress.bindFunc(this)).bind("keyup",
					this.checkKeyUp.bindFunc(this)).bind("blur",
					this.doSelect.bindFunc(this));
			if ($.browser.msie) {
				this.usernameInput.bind("keydown", this.checkKeyDown
						.bindFunc(this));
			}
		}
	},
	drawPassport : function(element) {
		var self = this;
		if ($.type(element) == "string") {
			element = $("#" + element);
			if (element.size() == 0) {
				return false;
			}
		} else {
			if ($.type(element) == "object") {
				element = $(element);
			} else {
				return;
			}
		}
		if (this.md5pwd) {
			$.getScript("https://passport.tuan800.com/js/jquery.md5.min.js",
					true);
		}
		if (PassportCardList.length == 0) {
			PassportCardList[0] = this;
		}
		if (!this.successCalledFunc) {
			try {
				this.successCalledFunc = eval("drawAppInfo");
			} catch (e) {
				this.successCalledFunc = this.drawPassportInfo;
			}
		}
		this.init(element);
		if (this.cookie && (this.cookie.username != "")) {
			if (this.autopad != "") {
				var userid = this.cookie.userid;
				var at = userid.lastIndexOf("@");
				if (at > 0) {
					if (this.autopad.lastIndexOf(userid.substr(at + 1)) < 0) {
						this.drawLoginForm();
						return;
					}
				}
			}
			if (this.autoRedirectUrl != "") {
				PassportSC.gotohref(this.autoRedirectUrl);
			} else {
				this.drawPassportCard();
			}
		} else {
			this.drawLoginForm();
		}
	},
	drawPassportNew : function(c, j, h) {
		if ($.type(c) === "string") {
			c = $("#" + c);
			if (c.size() == 0) {
				return false;
			}
		} else {
			if ($.type(c) === "object") {
				c = $(c);
			} else {
				return;
			}
		}
		var f = new Function();
		f.prototype = this;
		var b = PassportCardList.length;
		var d = new f();
		var a = ($.type(h) === "array" ? h[0] : []);
		d.successCalledFunc = (a === "function") ? a
				: ($.type(h) === "object") ? h.sufun ? h.sufun : false : false;
		d.appid = ($.type(j) === "number") ? j
				: ($.type(h) === "object") ? h.appid ? h.appid : 9999 : 9999;
		d.curCardIndex = b;
		d.isSetFocus = false;
		PassportCardList[b] = d;
		var k = [ b, c ];
		k.push(h);
		if ($.type(j) === "function") {
			j.apply(this, (k || []));
		} else {
			try {
				window.drawPassportNewInit(b, c);
			} catch (g) {
				if (window.console) {
					console.info(g);
				}
			}
		}
		return;
	}
};
$.passport = $.extend({}, PassportSC);
if (typeof (PP_SETCROSSDOMAIN) == "undefined") {
	var ele = $("head");
	PassportSC.doCrossDomainCookie(ele, "login");
	PassportSC.doCrossDomainCookie(ele, "logout");
}
if (typeof encodeURIComponent == "undefined") {
	PassportSC.usePost = 1;
}
if ($.getBrowserType() == 3
		&& (screen.height == 5000 || window.navigator.userAgent
				.lastIndexOf("Mini") >= 0)) {
	PassportSC.usePost = 1;
}