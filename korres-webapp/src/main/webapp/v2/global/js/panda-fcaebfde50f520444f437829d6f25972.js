!function(e){tuan800ued.addModule("panda",{STATURL:"http://analysis.tuanimg.com/panda/panda_v0.gif?",OnLoad:function(){this.addUtmsourceToCookie(),this.userInfos()},addUtmsourceToCookie:function(){var t,n=location.search.substring(1),a="",o=document.referrer,i=o.substring(o.indexOf("//")+2),r=i.substring(0,i.indexOf("/"));if(!(o.indexOf("zhe800.com")>-1)){if(!(n.indexOf("utm_source")>-1))return""==o?(e.cookie("utm_csr","direct",{expires:30,path:"/",domain:"zhe800.com"}),void 0):(e.cookie("utm_csr",r,{expires:30,path:"/",domain:"zhe800.com"}),void 0);t=n.split("&");for(var c=0,d=t.length;d>c;c++)if(t[c].indexOf("utm_source")>-1)return a=t[c].split("=")[1],e.cookie("utm_csr",a,{expires:30,path:"/",domain:"zhe800.com"}),void 0}},clickStat:function(){var t=this;e("body").delegate("*[panda-click]","click",function(){e("body").on("click","a",function(n){window.pandaStat._cn++;var a=(new Date).getTime();t.createParam(this,{click:e(this).attr("panda-click"),objurl:$this.attr("href"),pp:n.pageX+"*"+n.pageY,cn:window.pandaStat._cn,ct:0===window.pandaStat.ct?0:Math.floor((a-window.pandaStat.ct)/1e3)}),window.pandaStat.ct=a})})},exposureStat:function(){var t=this;e(window).bind("scroll.panda",function(){e("*[panda-exposure]").each(function(){var n=e(this),a=n.outerHeight(),o=n.outerWidth(),i=n.offset(),r=e(window),c=r.scrollTop()+window.screen.availHeight-i.top,d=r.scrollLeft()+window.screen.availWidth-i.left;c>=a&&d>=o&&(t.createParam(this,{exposure:n.attr("panda-exposure")}),n.removeAttr("panda-exposure"))})})},loadStat:function(){var t={ref:window.location.href,embed:window.top===window.self?0:1,type:"access",r:e.cookie("session_id"),v:"1.0",mainKey:window.mainKey,level:window.pageLevel,vp:window.panda_vp,t:this.formatTime(),uv:e.cookie("uv")};this.doStat(t)},createParam:function(t,n){var n=e.extend({title:searchTitle(e(t)),px:window.screen.width+"*"+window.screen.height,xp:searchXp(e(t),t.nodeName),area:searchArea(e(t)),panda:searchPanda(e(t)),ver:"1.0",v:window.mainKey,uv:e.cookie("uv"),pt:Math.floor((time-window.pandaStat.starttime)/1e3),t:formatTime(),r:e.cookie("session_id")},n);this.doStat(n)},searchTitle:function(t){var n="";return 0===t.children().length?t.html():(t.children().each(function(t,a){void 0!==e(a).attr("title")&&(n=e(a).attr("title"))}),n)},searchXp:function(t,n){var a,o=[];return t.parents("*:not(body,html)").each(function(t,n){a=e(n).siblings().length+1,o.push(n.nodeName.toLowerCase()+(1===a?"":a))}),a=t.siblings().length+1,o.push(n.toLowerCase()+(1===a?"":a)),a=t.find("img").length,0!==a&&o.push("img"+(1===a?"":a)),o.join("-")},searchArea:function(e){var t=e.closest("div[panda]");return 0!==t.length?t.attr("panda"):""},searchPanda:function(t){var n=[];return t.parents("[panda]").each(function(t,a){var o=e(a).attr("panda");o&&n.push(o)}),n.reverse().join("-")},formatTime:function(e){var t=e?e:new Date;return[t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()].join("-")},doStat:function(t){var n=document.createElement("img"),a=[];for(var o in t)t.hasOwnProperty(o)&&a.push(o+"="+t[o]);n.src=this.STATURL+a.join("&"),n.onload=function(){e(this).remove()},document.body.appendChild(n)},getNavNameAndVer:function(){var e,t=navigator.userAgent.toLowerCase();return e=t.indexOf("msie")>-1?10==document.documentMode?"ie 10":t.indexOf("rv:")>-1&&"ActiveXObject"in window?"ie "+t.match(/rv:([\d.]+)/)[1]:"ie "+this.getIeVersion():t.match(/firefox\/([\d.]+)/)?"firefox "+t.match(/firefox\/([\d.]+)/)[1]:t.match(/opera.([\d.]+)/)||t.match(/opr\/([\d.]+)/)?t.match(/opr\/([\d.]+)/)?"opera "+t.match(/opr\/([\d.]+)/)[1]:"opera "+t.match(/opera.([\d.]+)/)[1]:t.match(/chrome\/([\d.]+)/)?this.getChromiumType()+t.match(/chrome\/([\d.]+)/)[1]:t.match(/version\/([\d.]+).*safari/)?"safari "+t.match(/version\/([\d.]+).*safari/)[1]:t.match(/navigator.([\d.]+)/)?"navigator "+t.match(/navigator.([\d.]+)/)[1]:t.indexOf("rv:")>-1&&"ActiveXObject"in window?"ie "+t.match(/rv:([\d.]+)/)[1]:"otherBrowser"},getIeVersion:function(){for(var e=3,t=document.createElement("p"),n=t.getElementsByTagName("i");t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->",n[0];);return e>4?e:0},getChromiumType:function(){function e(e,t){var n=window.external||{};for(var a in n)if(e.test(t?n[a]:a))return!0;return!1}var t="track"in document.createElement("track");window.chrome&&window.chrome.webstore?Object.keys(window.chrome.webstore).length:0;var n=navigator.userAgent.toLowerCase();return e(/^sogou/i,0)?"sogouChro ":e(/^liebao/i,0)?"liebaoChro ":n.indexOf("bidu")>-1?"baiduChro ":window.clientInformation&&window.clientInformation.languages&&window.clientInformation.languages.length>=2||t?"chrome ":"otherChro "},userInfos:function(){var t,n,a,o,i,r,c,d,s,h=window.location;t=h.host,n=new Date,a=h.pathname+h.search,o=document.referrer,i=navigator.userAgent,r=document.cookie,c=e.cookie("ju_version"),s=this.getNavNameAndVer(),d={$http_host:t,$time_local:n,$request:a,$http_referer:o,$http_user_agent:i,$http_cookie:r,$http_nav_name_ver:s,$ju_version_header:c},this.doStat(d)}})}(jQuery);