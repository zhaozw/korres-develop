"undefined"!=typeof zhepub||(zhepub={});var _gaq=_gaq||[];zhepub.ga={},function(t){var e=[["_setAccount","UA-35760263-1"],["_setDomainName","zhe800.com"]],a=30081362,o=function(){if(t.track(e),""!==document.referrer||/[?&]utm_source(=|&|$)/.test(location.search)||/[?&]source_referer(=|&|$)/.test(location.search)||""==$.cookie("utm_csr")&&""==$.cookie("cid")||t.track(["_setCustomVar",1,"VisitType","direct",2]),void 0!==$("body").data("version")){var a=["/oldUser/versionA","/newUser/versionA","/oldUser/versionB","/newUser/versionB"];t.track(a[$("body").data("version")])}else t.track(null);var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(o,r)},r=function(){var t="https:"==document.location.protocol?" https://":" http://";document.write(unescape("%3Cdiv id='cnzz_stat_icon_"+a+"'%3E%3C/div%3E"));var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=unescape(t+"w.cnzz.com/c.php%3Fid%3D"+a+"%26l%3D3");var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)},c=function(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e]instanceof Array)return!1;return!0};t.getPath=function(){return window.location.pathname.replace(/^\//,"").replace(/\/$/,"")},t.initScripts=function(t){t.ga&&(e=t.ga.opts||e,o()),t.cnzz&&(a=t.cnzz.key||a,r())},t.track=function(){var e=Array.prototype.slice.call(arguments);for(var a in e)if(e.hasOwnProperty(a)){var o=e[a];o instanceof Array?c(o)?_gaq.push(o):t.track.apply(this,o):_gaq.push(null==o?["_trackPageview"]:["_trackPageview",o])}},t.kaiqiangtixi_ga_code=function(){var e=t.getPath();""==e&&(e="total"),$(".openAlert").click(function(){$(this).closest(".zt2").length>=1&&t.track("/PageAction/"+e+"/purchaseInform"),$(this).closest(".zt3").length>=1&&t.track("/PageAction/"+e+"/soldOut")})},t.error404Code=function(){t.track("/404.html?page="+document.location.pathname+document.location.search+"&from="+document.referrer)},t.addCookieVisitor=function(t){if(""==$.cookie(t)||void 0==$.cookie("gdt_ad")){for(var e=location.hostname.match(/^(?:\w{1,9}:\/\/)?([\w-]+\.)+(\w+)/),a=e[1]+e[2],o=location.search.slice(1).split("&"),r="",c=0,n=o.length;n>c;c++)if(o[c].match(/utm_source/)){r=o[c].split("=")[1];break}var c=new Date,i=c.getTime(),s=pagePath+"."+r+"."+i;$.cookie(t,s,{expires:60,path:"/",domain:a})}}}(zhepub.ga),window.gaconf?zhepub.ga.initScripts(window.gaconf):zhepub.ga.initScripts({ga:!0,cnzz:{key:30081361}});