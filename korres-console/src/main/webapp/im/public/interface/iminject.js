!function(a,b){function c(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&"object"!=typeof a[c]&&""!==a[c]&&b.push(c+"="+encodeURIComponent(a[c]));return b.join("&")}function d(a,b){var c,d,e=a||{};for(var f in b)if(b.hasOwnProperty(f)){if(c=e[f],d=b[f],c===d)continue;void 0!==d&&(e[f]=d)}return e}function e(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}var f,g=a.document,h=function(b){var e=d({},b),f=g.createElement("iframe"),h=c(e),i="http://im.zhe800.com/init.html",j=i+"?"+(e.type?"":"type=buyer")+(h?"&"+h:"")+(e.refer?"":"&refer="+encodeURIComponent(a.location.href)),k=e.message?97:102,l=e.message?36:24;return f.style.border="none",f.style.width=k+"px",f.style.height=l+"px",f.src=j,f.frameBorder="no",f.border="0",f.scrolling="no",f.allowTransparency="true",f},i=function(b){"postMessage"in a?e(a,"message",function(c){if("loginpop"===c.data)try{g.getElementsByClassName("dialog-overlay").length||(b?new Function("return "+b)():tuanpub.getModule("dialogPP").init())}catch(d){a.console&&console.info(d.message)}}):setInterval(function(){if("loginpop"===navigator.wather){try{b?new Funtion("return "+b)():tuanpub.getModule("dialogPP").init()}catch(c){a.console&&console.info(c.message)}navigator.wather=void 0}},50)},j=function(b){var e=d({},b),g="buyer"===e.type||"service"===e.type?1050:910,h="buyer"===e.type||"service"===e.type?770:530;e.loginpop="",f&&(f.close(),f=null),f=a.open("http://im.zhe800.com/index.html#login?"+c(e),"IMwindow","alwaysRaised=yes,directories=no,height="+h+",width="+g+",top=0,left=0,toolbar=no,menubar=no,scrollbars=yes, resizable=no,location=no, status=no")},k=function(){return!!g.cookie.match(/ppinf=[\w\d]+/)},l=function(b){var c=document.createElement("a");return c.href="javascript:void(0)",c.innerHTML="在线客服",c.onclick=function(c){var d=c||a.event;if(d.stopPropagation?d.stopPropagation():d.cancelBubble=!0,d.preventDefault?d.preventDefault():d.returnValue=!1,k())j(b);else try{if(b.loginpop)return new Function("return "+b.loginpop)();tuanpub.getModule("dialogPP").init()}catch(c){a.console&&console.log(c.message)}},c};a.IMinit=function(a,c){var e=c.loginpop,f="service"===c.type?l(c):h(d(c,{loginpop:""}));if("string"==typeof a){if(!b)throw"检查参数格式";b(a).append(f)}else 1==a.nodeType&&a.appendChild(f);i(e)}}(window,window.jQuery);