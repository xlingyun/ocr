duAI([3],{102:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/error/no-general-result.png"},103:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/error/timeout.png"},13:function(t,e,n){"use strict";var a=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(a);(0,i.default)(".tech-case-option-btn").on("click",function(t){var e=t.target,n=(0,i.default)(e);n.hasClass("tech-case-active")||(n.addClass("tech-case-active").siblings().removeClass("tech-case-active"),(0,i.default)(".tech-case-item").eq(n.index()).addClass("tech-case-active").siblings().removeClass("tech-case-active"))})},134:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/technology/ocr-general_enhanced/demo-card-1.png"},135:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/technology/ocr-general_enhanced/demo-card-2.png"},136:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/technology/ocr-general_enhanced/demo-card-3.png"},137:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/technology/ocr-general_enhanced/demo-card-4.png"},138:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/technology/ocr-general_enhanced/demo-card-5.png"},139:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/technology/ocr-general_enhanced/demo-card-6.png"},140:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/technology/ocr-general_enhanced/demo-card-7.png"},141:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/technology/ocr-general_enhanced/demo-card-8.png"},205:function(t,e,n){t.exports=n(51)},5:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/error/image-format.png"},51:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(0),o=a(i),c=n(7),r=a(c);n(13),n(97);var d=n(64),s=a(d),l=n(5),u=n(6),f=n(102),g=(n(103),[n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141)]),h=(0,o.default)(window),m=(0,o.default)(document),p=(0,o.default)(".tech-demo-card-item"),v=(0,o.default)("#demo-json").find("> p"),_=(0,o.default)("#demo-result"),b=(0,o.default)("#img-upload"),x=(0,o.default)("#scan-url"),w=(0,o.default)("#demo-photo-url"),y=!1;h.on("scroll.demo",(0,r.default)(function(){m.scrollTop()>=100&&(C(),h.off(".demo"))},300));var C=function(){var t=(0,o.default)(".tech-function-original-card"),e=(0,o.default)(".tech-function-scan-result");t.addClass("tech-function-scanning"),setTimeout(function(){t.removeClass("tech-function-scanning").addClass("tech-function-scanned"),e.addClass("tech-function-scanned")},3e3)},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";v.text(t)},M=function(t){(0,o.default)("#demo-origin").html('<img class="tech-demo-origin-img" src="'+t+'">')},V=function(){_.html('<div id="result-loading"></div>')},k=function(t){if(!t)return void _.html("");for(var e=t.words_result||[],n=[],a=0,i=e.length;a<i;a++){var o=e[a],c=o.location,r=["<tr>","    <td>"+(a+1)+"</td>","    <td>"+o.words+"</td>","    <td>"+c.left+"</td>","    <td>"+c.top+"</td>","    <td>"+c.width+"</td>","    <td>"+c.height+"</td>","</tr>"];n.push(r.join("\r"))}var d=n.length>0?['<div id="json-table">','<table cellspacing="0">',"    <thead>","        <tr>",'            <th rowspan="2" style="width:20px;">编号</th>','            <th colspan="5">识别结果</th>',"        </tr>","        <tr>",'            <th style="width:250px;">文字</th>',"            <th>left</th>","            <th>top</th>","            <th>width</th>","            <th>height</th>","        </tr>","    </thead>","    <tbody>"+n.join("\r")+"</tbody>","</table>","</div>"].join("\r"):'<img src="'+f+'">';_.html(d)},q=function(t){if(k(),j(""),!t)return void M(l);switch(t){case 104:case 1:return void M(l);case 2:return void M(u);case 107:case 28:default:return void M(l)}},D=function(t,e){var n=o.default.Deferred();return y=!0,M(t||e),V(),j(""),x.prop("disabled",!0),b.prop("disabled",!0),t&&e&&n.reject(),o.default.post({url:"/aidemo",data:{type:"general_enhanced",image:e,image_url:t}}).then(function(t){var e=t.errno,a=t.msg,i=t.data;if(y=!1,x.prop("disabled",!1),b.prop("disabled",!1),0===e)return void n.resolve(i);n.reject(e,a)},function(){y=!1,x.prop("disabled",!1),b.prop("disabled",!1),n.reject(28,"网络错误")}),n.promise()},O=function(t){j(t?JSON.stringify(t,null,"\t"):""),k(t)},T=function(t){var e=["image/jpeg","image/png","image/bmp"],n=t.type,a=t.size;return e.indexOf(n)<0?{isValid:!1,reason:1}:a>2097152?{isValid:!1,reason:2}:{isValid:!0}};p.each(function(t,e){(0,o.default)(e).find("img").attr("src",g[t])}),p.on("click",function(t){var e=(0,o.default)(t.currentTarget);if(!e.hasClass("tech-demo-card-active")&&!y){e.addClass("tech-demo-card-active").siblings().removeClass("tech-demo-card-active");D(""+window.location.protocol+e.find("img").eq(0).attr("src")).then(function(t){O(t)},q)}}),x.on("click",function(){var t=w.val().trim();t&&D(t).then(function(t){O(t)},q)}),b.on("change",function(t){if((0,o.default)(t.target).val()){var e=t.target.files[0],n=T(e);if(!n.isValid)switch(n.reason){case 1:return void q(1);case 2:return void q(2)}(0,s.default)(e).then(function(t){D("",t).then(function(t){O(t)},q)},q)}}),D(""+window.location.protocol+p.eq(0).find("img").attr("src")).then(function(t){O(t)},q)},6:function(t,e){t.exports="//ai.bdstatic.com/dist/1490250326/ai_images/error/too-large.png"},64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=i.default.Deferred(),n=new FileReader;return n.readAsDataURL(t),n.onload=function(t){e.resolve(t.target.result)},n.onerror=e.reject,e.promise()};var a=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(a)},97:function(t,e){}},[205]);