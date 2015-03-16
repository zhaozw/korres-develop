/*! trade 2015-01-19 */
(function(t) {
	tuanpub
			.addModule(
					"carttoolbar",
					{
						OnLoad : function() {
							var e = '<span class="cart"><a target="_blank" href="http://cart.zhe800.com/cart"><i></i>购物车<b class="count">0</b></a></span>&nbsp;|';
									1 > t("#login span.cart").length
											&& t("#login").append(e),
									t(".toolbar .right .cart i")
											.css(
													{
														width : "16px",
														height : "14px",
														background : "url(//i1.tuanimg.com/trade/s/img/icon13.png) 0 0 no-repeat",
														display : "inline-block",
														"vertical-align" : "middle",
														overflow : "hidden"
													}),
									t(".toolbar .right .cart .count").css({
										color : "#cf201c"
									}),
									t
											.getJSON(
													"//localhost:8888/korres-webapp/cart/items_count.htm?callback=?",
													function(e) {
														e
																&& e.data
																&& "" != e.data
																&& e.status
																&& 200 == e.status
																&& t(
																		"#login .cart .count")
																		.text(
																				e.data)
													})
						}
					})
})(jQuery);