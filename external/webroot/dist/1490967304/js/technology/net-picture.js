duAI([14],{27:function(e,t){e.exports="//ai.bdstatic.com/dist/1490967304/ai_images/error/image-format.png"},28:function(e,t){e.exports="//ai.bdstatic.com/dist/1490967304/ai_images/error/too-large.png"},321:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=a(2),o=n(i),r=a(29),c=n(r);a(43),a(584);var d=a(89),s=n(d);a(623);var l=a(27),u=a(28),f=a(93),m=(a(94),(0,o.default)(window)),v=(0,o.default)(document),h=(0,o.default)(".tech-demo-card-item"),p=(0,o.default)("#demo-json").find("> p"),g=(0,o.default)("#demo-result"),b=(0,o.default)("#img-upload"),w=(0,o.default)("#scan-url"),_=(0,o.default)("#demo-photo-url"),C=!1;m.on("scroll.demo",(0,c.default)(function(){v.scrollTop()>=100&&(j(),m.off(".demo"))},300));var j=function(){var e=(0,o.default)(".tech-function-original-card"),t=(0,o.default)(".tech-function-scan-result");e.addClass("tech-function-scanning"),setTimeout(function(){e.removeClass("tech-function-scanning").addClass("tech-function-scanned"),t.addClass("tech-function-scanned")},3e3)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";p.text(e)},y=function(e){(0,o.default)("#demo-origin").html('<img class="tech-demo-origin-img" src="'+e+'">')},M=function(){g.html('<div id="result-loading"></div>')},V=function(e){if(!e)return void g.html("");for(var t=e.words_result||[],a=[],n=0,i=t.length;n<i;n++){var o=t[n],r=(o.location,["<tr>","    <td>"+(n+1)+"</td>","    <td>"+o.words+"</td>","</tr>"]);a.push(r.join("\r"))}var c=a.length>0?['<div id="json-table">','<table cellspacing="0">',"    <thead>","        <tr>",'            <th rowspan="2" style="width:20px;">编号</th>','            <th rowspan="2" style="width:420px;">识别结果</th>',"        </tr>","    </thead>","    <tbody>"+a.join("\r")+"</tbody>","</table>","</div>"].join("\r"):'<img src="'+f+'">';g.html(c)},k=function(e){if(V(),x(""),!e)return void y(l);switch(e){case 104:case 1:return void y(l);case 2:return void y(u);case 107:case 28:default:return void y(l)}},q=function(e,t){var a=o.default.Deferred();return C=!0,y(e||t),M(),x(""),w.prop("disabled",!0),b.prop("disabled",!0),e&&t&&a.reject(),o.default.post({url:"/aidemo",data:{type:"general_location",image:t,image_url:e}}).then(function(e){var t=e.errno,n=e.msg,i=e.data;if(C=!1,w.prop("disabled",!1),b.prop("disabled",!1),0===t)return void a.resolve(i);a.reject(t,n)},function(){C=!1,w.prop("disabled",!1),b.prop("disabled",!1),a.reject(28,"网络错误")}),a.promise()},D=function(e){x(e?JSON.stringify(e,null,"\t"):""),V(e)},O=function(e){var t=["image/jpeg","image/png","image/bmp"],a=e.type,n=e.size;return t.indexOf(a)<0?{isValid:!1,reason:1}:n>2097152?{isValid:!1,reason:2}:{isValid:!0}};h.on("click",function(e){var t=(0,o.default)(e.currentTarget);if(!t.hasClass("tech-demo-card-active")&&!C){t.addClass("tech-demo-card-active").siblings().removeClass("tech-demo-card-active");var a=""+window.location.protocol+t.find("img").eq(0).attr("src");q(a).then(function(e){D(e)},k)}}),w.on("click",function(){var e=_.val().trim();e&&q(e).then(function(e){D(e)},k)}),b.on("change",function(e){if((0,o.default)(e.target).val()){var t=e.target.files[0],a=O(t);if(!a.isValid)switch(a.reason){case 1:return void k(1);case 2:return void k(2)}(0,s.default)(t).then(function(e){q("",e).then(function(e){D(e)},k)},k)}});var T=""+window.location.protocol+h.eq(0).find("img").attr("src");q(T).then(function(e){D(e)},k)},43:function(e,t,a){"use strict";var n=a(2),i=function(e){return e&&e.__esModule?e:{default:e}}(n);(0,i.default)(".tech-case-option-btn").on("click",function(e){var t=e.target,a=(0,i.default)(t);a.hasClass("tech-case-active")||(a.addClass("tech-case-active").siblings().removeClass("tech-case-active"),(0,i.default)(".tech-case-item").eq(a.index()).addClass("tech-case-active").siblings().removeClass("tech-case-active"))})},584:function(e,t){},623:function(e,t,a){e.exports=a.p+"./../../template/cloud/net-picture.html"},740:function(e,t,a){e.exports=a(321)},89:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=i.default.Deferred(),a=new FileReader;return a.readAsDataURL(e),a.onload=function(e){t.resolve(e.target.result)},a.onerror=t.reject,t.promise()};var n=a(2),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},93:function(e,t){e.exports="//ai.bdstatic.com/dist/1490967304/ai_images/error/no-general-result.png"},94:function(e,t){e.exports="//ai.bdstatic.com/dist/1490967304/ai_images/error/timeout.png"}},[740]);