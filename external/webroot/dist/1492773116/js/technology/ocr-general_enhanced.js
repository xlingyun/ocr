duAI([15],{24:function(e,t){e.exports="//ai.bdstatic.com/dist/1492773116/ai_images/error/image-format.png"},25:function(e,t){e.exports="//ai.bdstatic.com/dist/1492773116/ai_images/error/too-large.png"},32:function(e,t,n){"use strict";var a=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(a);(0,i.default)(".tech-case-option-btn").on("click",function(e){var t=e.target,n=(0,i.default)(t);n.hasClass("tech-case-active")||(n.addClass("tech-case-active").siblings().removeClass("tech-case-active"),(0,i.default)(".tech-case-item").eq(n.index()).addClass("tech-case-active").siblings().removeClass("tech-case-active"))})},330:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(2),o=a(i),r=n(29),c=a(r);n(32),n(596);var d=n(89),s=a(d);n(636);var l=n(24),u=n(25),f=n(93),m=(n(94),(0,o.default)(window)),v=(0,o.default)(document),g=(0,o.default)(".tech-demo-card-item"),h=(0,o.default)("#demo-json").find("> p"),p=(0,o.default)("#demo-result"),b=(0,o.default)("#img-upload"),_=(0,o.default)("#scan-url"),C=(0,o.default)("#demo-photo-url"),j=!1;m.on("scroll.demo",(0,c.default)(function(){v.scrollTop()>=100&&(w(),m.off(".demo"))},300));var w=function(){var e=(0,o.default)(".tech-function-original-card"),t=(0,o.default)(".tech-function-scan-result");e.addClass("tech-function-scanning"),setTimeout(function(){e.removeClass("tech-function-scanning").addClass("tech-function-scanned"),t.addClass("tech-function-scanned")},3e3)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";h.text(e)},y=function(e){(0,o.default)("#demo-origin").html('<img class="tech-demo-origin-img" src="'+e+'">')},M=function(){p.html('<div id="result-loading"></div>')},V=function(e){if(!e)return void p.html("");for(var t=e.words_result||[],n=[],a=0,i=t.length;a<i;a++){var o=t[a],r=(o.location,["<tr>","    <td>"+(a+1)+"</td>","    <td>"+o.words+"</td>","</tr>"]);n.push(r.join("\r"))}var c=n.length>0?['<div id="json-table">','<table cellspacing="0">',"    <thead>","        <tr>",'            <th class="result-index">编号</th>','            <th class="result-connent">识别结果</th>',"        </tr>","    </thead>","    <tbody>"+n.join("\r")+"</tbody>","</table>","</div>"].join("\r"):'<img src="'+f+'">';p.html(c)},k=function(e){if(V(),x(""),!e)return void y(l);switch(e){case 104:case 1:return void y(l);case 2:return void y(u);case 107:case 28:default:return void y(l)}},q=function(e,t){var n=o.default.Deferred();return j=!0,y(e||t),M(),x(""),_.prop("disabled",!0),b.prop("disabled",!0),e&&t&&n.reject(),o.default.post({url:"/aidemo",data:{type:"general_enhanced",image:t,image_url:e}}).then(function(e){var t=e.errno,a=e.msg,i=e.data;if(j=!1,_.prop("disabled",!1),b.prop("disabled",!1),0===t)return void n.resolve(i);n.reject(t,a)},function(){j=!1,_.prop("disabled",!1),b.prop("disabled",!1),n.reject(28,"网络错误")}),n.promise()},D=function(e){x(e?JSON.stringify(e,null,"\t"):""),V(e)},O=function(e){var t=["image/jpeg","image/png","image/bmp"],n=e.type,a=e.size;return t.indexOf(n)<0?{isValid:!1,reason:1}:a>2097152?{isValid:!1,reason:2}:{isValid:!0}};g.on("click",function(e){var t=(0,o.default)(e.currentTarget);if(!t.hasClass("tech-demo-card-active")&&!j){t.addClass("tech-demo-card-active").siblings().removeClass("tech-demo-card-active");var n=""+window.location.protocol+t.find("img").eq(0).attr("src");q(n).then(function(e){D(e)},k)}}),_.on("click",function(){var e=C.val().trim();e&&q(e).then(function(e){D(e)},k)}),b.on("change",function(e){if((0,o.default)(e.target).val()){var t=e.target.files[0],n=O(t);if(!n.isValid)switch(n.reason){case 1:return void k(1);case 2:return void k(2)}(0,s.default)(t).then(function(e){q("",e).then(function(e){D(e)},k)},k)}});var T=""+window.location.protocol+g.eq(0).find("img").attr("src");q(T).then(function(e){D(e)},k)},596:function(e,t){},636:function(e,t,n){e.exports=n.p+"./../../template/cloud/ocr-general_enhanced.html"},755:function(e,t,n){e.exports=n(330)},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=i.default.Deferred(),n=new FileReader;return n.readAsDataURL(e),n.onload=function(e){t.resolve(e.target.result)},n.onerror=t.reject,t.promise()};var a=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(a)},93:function(e,t){e.exports="//ai.bdstatic.com/dist/1492773116/ai_images/error/no-general-result.png"},94:function(e,t){e.exports="//ai.bdstatic.com/dist/1492773116/ai_images/error/timeout.png"}},[755]);