duAI([0],{1:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function e(t,n,a){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,a)}if("value"in i)return i.value;var s=i.get;if(void 0!==s)return s.call(a)},r=n(0),d=a(r),u=n(8),f=a(u),v=n(4),p=a(v),h=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.title="提示",n.content=e||"",n.init(),n}return s(t,e),l(t,[{key:"init",value:function(){var e=(0,p.default)({id:this.id,title:this.title,content:this.content});(0,d.default)(this.container).append(e),this.bindEvent(),c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,d.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this),this.getModal().on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(f.default);t.default=h},10:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/error/not-found.png"},178:function(e,t,n){e.exports='<section class="tech-section tech-banner">\n    <div class="container">\n        <h1>人脸检测</h1>\n        <p>快速检测人脸、定位五官关键点，准确识别多种人脸属性<br>为您提供多场景高精度的人脸识别服务。</p>\n        <div>\n            <a role="button" class="btn-primary media" href="https://console.bce.baidu.com/ai/?fromai=1#/ai/face/overview/index">立即使用</a>\n            <a role="button"\n               class="btn-other media"\n               href="\n               {%if $src eq Null%}\n               /docs#FACE\n               {%else%}\n               https://cloud.baidu.com/doc/FACE/index.html\n               {%/if%}">\n                技术文档\n            </a>\n        </div>\n    </div>\n</section>\n<section class="tech-section tech-intro">\n    <div class="container">\n        <h2>功能介绍</h2>\n        <p>检测图中的人脸，并为人脸标记出边框。检测出人脸后，可对人脸进行分析，获得眼、口、鼻轮廓等72个关键点定位<br>\n            准确识别多种人脸属性，如性别，年龄，表情等信息。该技术可适应大角度侧脸，遮挡，模糊，表情变化等各种实际环境</p>\n        <div class="tech-intro-detail">\n            <div class="left">\n                <div class="scan-box"></div>\n                <div class="scan-result"></div>\n            </div>\n            <div class="right">\n                <div class="scan-box"></div>\n                <div class="scan-result"></div>\n            </div>\n        </div>\n    </div>\n</section>\n<section class="tech-section tech-demo">\n    <div class="container">\n        <h2>功能演示</h2>\n        <div class="demo-container clear-float">\n            <div class="clear-float">\n                <div class="data-view-container">\n                    <div class="data-view" data-label="识别结果" id="demo-result">\n                        <div class="canvas-container"></div>\n                        <div id="result-gallery">\n                            <ul></ul>\n                        </div>\n                        <ul id="face-details"></ul>\n                    </div>\n                    <div class="demo-data">\n                        <label for="demo-photo-url" style="display:none"></label>\n                        <input type="text" id="demo-photo-url" placeholder="请输入网络图片URL">\n                        <button type="button" class="btn-primary" id="scan-photo">检测</button>\n                        <span>或</span>\n                        <label id="demo-photo-upload">\n                            <input type="file">本地上传\n                        </label>\n                    </div>\n                    <p class="demo-desc">\n                        提示：可支持PNG、JPG、jpeg、BMP图片文件，不支持GIF图片，图片大小不超过2M，长边不超过2048像素。为保证正常识别效果，请保证需要识别部分为图片主体部分。</p>\n                </div>\n                <div class="data-view-container">\n                    <div class="data-view" data-label="RESPONSE JSON" id="demo-json">\n                        <p></p>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <ul class="demo-card-list clear-float">\n                    <li>\n                        <img src="'+n(23)+'">\n                    </li>\n                    <li>\n                        <img src="'+n(24)+'">\n                    </li>\n                    <li>\n                        <img src="'+n(25)+'">\n                    </li>\n                    <li>\n                        <img src="'+n(26)+'">\n                    </li>\n                    <li>\n                        <img src="'+n(27)+'">\n                    </li>\n                    <li>\n                        <img src="'+n(28)+'">\n                    </li>\n                    <li>\n                        <img src="'+n(29)+'">\n                    </li>\n                    <li>\n                        <img src="'+n(30)+'">\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n<section class="tech-section tech-feature">\n    <div class="container">\n        <h2>技术特色</h2>\n        <div class="feature-list clear-float">\n            <div class="feature-item shadow">\n                <div class="feature-icon"></div>\n                <div class="feature-desc">\n                    <h3>算法领先</h3>\n                    <p>基于百度专业的深度学习算法和海量数据训练，人脸检测和人脸识别算法在最权威的公开评测比赛中排名世界领先</p>\n                </div>\n            </div>\n            <div class="feature-item shadow">\n                <div class="feature-icon"></div>\n                <div class="feature-desc">\n                    <h3>稳定高效</h3>\n                    <p>依托百度深度学习实验室的技术实力，提供企业级稳定、精确的大流量服务。支持毫秒级的识别响应能力、弹性灵活的高并发承载及99.99%的可靠性保障</p>\n                </div>\n            </div>\n            <div class="feature-item shadow">\n                <div class="feature-icon"></div>\n                <div class="feature-desc">\n                    <h3>简单易用</h3>\n                    <p>可通过API参数自由组合各个人脸技术模块，实现不同的功能</p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section>\n<section class="tech-section tech-scene">\n    <div class="container">\n        <h2>应用场景</h2>\n        <div class="scene-list clear-float">\n            <div class="scene-item shadow">\n                <div class="scene-icon"></div>\n                <div class="scene-desc">\n                    <h3>相册管理</h3>\n                    <p>在众多照片中，进行人脸识别并归类，用于图片管理类应用中，以人物脸庞进行自动化的人脸相册整理</p>\n                </div>\n            </div>\n            <div class="scene-item shadow">\n                <div class="scene-icon"></div>\n                <div class="scene-desc">\n                    <h3>人脸贴图</h3>\n                    <p>基于关键点识别，对人脸特定位置进行修饰加工，可用于人脸的美化和娱乐化处理</p>\n                </div>\n            </div>\n            <div class="scene-item shadow">\n                <div class="scene-icon"></div>\n                <div class="scene-desc">\n                    <h3>美妆修饰</h3>\n                    <p>基于关键点识别，进行滤镜修饰，人脸再加工等娱乐场景</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section class="tech-section tech-case">\n    <ul class="case-list">\n        <li class="case-item active">\n            <div class="container">\n                <div class="case-icon"></div>\n                <h2>百度魔图</h2>\n                <p>百度魔图（原魔图精灵），是一款好玩易用的掌上美图工具<br>\n                    基于BFR人脸位置和边界的像素级解析能力，实现人脸自动美化功能，已成为时下最流行的图片美化工具，每天处理上亿图片\n                </p>\n            </div>\n        </li>\n        <li class="case-item">\n            <div class="container">\n                <div class="case-icon"></div>\n                <h2>百度网盘</h2>\n                <p>百度网盘，通过BFR实现了对网盘中的图片进行分类搜索<br>\n                    从而方便用户从大量图片中快速找到自己想要的照片，同时方便按人脸归类管理</p>\n            </div>\n        </li>\n    </ul>\n    <ul class="case-indicator">\n        <li class="active"><a>百度魔图</a></li>\n        <li><a>百度网盘</a></li>\n    </ul>\n</section>\n{%if $userInfo eq Null%}\n<section class="tech-section get-started">\n    <div class="container">\n        <h2>立即获取免费API Key</h2>\n        <p>现在试用，获取免费API Key，免费调用各项开放能力API</p>\n        <div>\n            <a role="button" class="btn-primary large" href="https://console.bce.baidu.com/?fromai=1#/aip/overview">免费试用</a>\n        </div>\n    </div>\n</section>\n{%/if%}\n{%if $src eq Null%}\n<section class="tech-section tech-guide">\n    <div class="container">\n        <h2>使用指南</h2>\n        <div class="guide-link clear-float">\n            <h3>开发指南</h3>\n            <ul>\n                <li><a href="/docs#FACE">技术文档 ></a></li>\n                <li><a href="/sdk">SDK下载 ></a></li>\n            </ul>\n        </div>\n        <div class="question-link clear-float">\n            <h3>常见问题</h3>\n            <ul>\n                <li><a href="/docs#FACE-FAQ_Q1">识别的图片支持怎样输入?</a></li>\n                <li><a href="/docs#FACE-FAQ_Q2">什么是base64编码，如何提供？</a></li>\n            </ul>\n        </div>\n    </div>\n</section>\n{%/if%}\n'},2:function(e,t,n){"use strict";function a(e){var t=e.image,n=void 0===t?null:t,a=e.imageUrl,i=void 0===a?null:a,o=e.success,s=void 0===o?v.default.noop:o,l=e.fail,c=void 0===l?v.default.noop:l;v.default.post("/aidemo",{type:"idcard",image:n,image_url:i}).success(s).fail(c)}function i(e){var t=e.image,n=void 0===t?null:t,a=e.imageUrl,i=void 0===a?null:a,o=e.success,s=void 0===o?v.default.noop:o,l=e.fail,c=void 0===l?v.default.noop:l;v.default.post("/aidemo",{type:"bankcard",image:n,image_url:i}).success(s).fail(c)}function o(e){var t=e.image,n=void 0===t?null:t,a=e.imageUrl,i=void 0===a?null:a,o=e.success,s=void 0===o?v.default.noop:o,l=e.fail,c=void 0===l?v.default.noop:l;v.default.post("/aidemo",{type:"commontext",image:n,image_url:i}).success(s).fail(c)}function s(e){var t=e.image,n=void 0===t?null:t,a=e.imageUrl,i=void 0===a?null:a,o=e.success,s=void 0===o?v.default.noop:o,l=e.fail,c=void 0===l?v.default.noop:l;v.default.post("/aidemo",{type:"face",image:n,image_url:i}).success(s).fail(c)}function l(e){var t=e.image,n=void 0===t?null:t,a=e.imageUrl,i=void 0===a?null:a,o=e.success,s=void 0===o?v.default.noop:o,l=e.fail,c=void 0===l?v.default.noop:l;v.default.post("/aidemo",{type:"pornography",image:n,image_url:i}).success(s).fail(c)}function c(e){var t=e.imageUrl,n=void 0===t?null:t,a=e.type,i=e.success,o=void 0===i?v.default.noop:i,s=e.fail,l=void 0===s?v.default.noop:s;v.default.post("/aidemo",{action:"getHeader",type:a,image_url:n}).success(o).fail(l)}function r(e){var t=e.words,n=void 0===t?null:t,a=e.success,i=void 0===a?v.default.noop:a,o=e.fail,s=void 0===o?v.default.noop:o;v.default.post("/aidemo",{type:"wakescore",kw:n}).success(i).fail(s)}function d(e){var t=e.words,n=void 0===t?null:t,a=e.success,i=void 0===a?v.default.noop:a;window.open("/aidemo?type=wakedownload&kw="+n,"_blank"),i()}function u(e){var t=e.data,n=void 0===t?{}:t,a=e.success,i=void 0===a?v.default.noop:a,o=e.fail,s=void 0===o?v.default.noop:o;v.default.post("/aidemo",{type:"tts",speed:n.speed,vol:n.vol,person:n.person,text:n.text}).success(i).fail(s)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=a,t.scanBankCard=i,t.scanGeneralText=o,t.scanFace=s,t.scanPornography=l,t.getHeader=c,t.evaluateWakeWords=r,t.exportWakeWords=d,t.synthesizeSpeech=u;var f=n(0),v=function(e){return e&&e.__esModule?e:{default:e}}(f)},200:function(e,t,n){e.exports=n(50)},23:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/technology/bfr-detect/demo-card-1.jpg"},24:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/technology/bfr-detect/demo-card-2.jpg"},25:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/technology/bfr-detect/demo-card-3.jpg"},26:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/technology/bfr-detect/demo-card-4.png"},27:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/technology/bfr-detect/demo-card-5.png"},28:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/technology/bfr-detect/demo-card-6.jpg"},29:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/technology/bfr-detect/demo-card-7.jpg"},30:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/technology/bfr-detect/demo-card-8.jpg"},4:function(e,t,n){var a=n(3);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,a,i){var o,s,l=null!=t?t:{},c=n.helperMissing,r=e.escapeExpression;return'<div class="ai-modal alert" id="'+r((s=null!=(s=n.id||(null!=t?t.id:t))?s:c,"function"==typeof s?s.call(l,{name:"id",hash:{},data:i}):s))+'">\n    <header class="modal-header">\n        <h3>'+r((s=null!=(s=n.title||(null!=t?t.title:t))?s:c,"function"==typeof s?s.call(l,{name:"title",hash:{},data:i}):s))+'</h3>\n        <a class="modal-x"></a>\n    </header>\n    <section class="modal-content">\n        <div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;">\n            '+(null!=(s=null!=(s=n.content||(null!=t?t.content:t))?s:c,o="function"==typeof s?s.call(l,{name:"content",hash:{},data:i}):s)?o:"")+'\n        </div>\n        <div style="text-align: center;">\n            <button type="button" class="btn-normal cancel">确定</button>\n        </div>\n    </section>\n</div>\n'},useData:!0})},5:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/error/image-format.png"},50:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(0),o=a(i),s=n(7),l=a(s),c=n(9),r=a(c),d=n(2),u=n(1),f=a(u);n(178),n(97);var v=[n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30)],p=(0,o.default)("#demo-json").find("> p"),h=(0,o.default)("#result-gallery"),m=h.find("ul"),g=(0,o.default)(".tech-intro-detail"),y=(0,o.default)("#demo-result"),b=y.find(".canvas-container"),w=(0,o.default)("#demo-photo-upload").find("> input"),_=(0,o.default)("#demo-photo-url"),x=(0,o.default)("#face-details");(0,o.default)(".case-indicator > li").click(function(){var e=this;(0,o.default)(".case-indicator > li").each(function(t,n){(0,o.default)(n).toggleClass("active",t===(0,o.default)(e).index())}),(0,o.default)(".case-item").each(function(t,n){(0,o.default)(n).toggleClass("active",t===(0,o.default)(e).index())})}),(0,o.default)(window).scroll((0,l.default)(function(){(0,o.default)(document).scrollTop()>=100&&(0,o.default)(".tech-intro-detail").trigger("demo")},300)),g.one("demo",function(){g.addClass("scanned")});var k=!1,C=function(){k=!1,p.empty(),b.attr("class","canvas-container"),(0,o.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),w.val(""),h.hide(),m.empty(),x.hide().empty()},j=function(e){for(var t=y.find("canvas"),n=t.attr("data-scale"),a=t[0].getContext("2d"),i=0,o=e.length;i<o;i++){var s=e[i],l=s.location;a.save(),a.lineWidth=4/n,a.strokeStyle="rgba(0, 115, 235, 0.8)",a.translate(l.left,l.top),a.rotate(s.rotation_angle/180*Math.PI),a.rect(0,0,l.width,l.height),a.stroke(),a.restore()}},P=function(e,t){for(var n=y.find("canvas"),a=n.attr("data-scale"),i=n[0].getContext("2d"),o=t?{x:e.location.left,y:e.location.top}:{x:0,y:0},s=t?e.rotation_angle:0,l=0,c=e.landmark72.length;l<c;l++){var r=e.landmark72[l];i.beginPath(),i.lineWidth=1,i.fillStyle="rgba(0, 115, 235, 0.8)",i.strokeStyle="transparent";var d=(function(e,t){return 360*Math.atan(t/e)/(2*Math.PI)}(r.x-o.x,r.y-o.y)-s)/180*Math.PI,u=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))}(r.x-o.x,r.y-o.y);i.arc(u*Math.cos(d),u*Math.sin(d),2/a,0,2*Math.PI),i.fill(),i.stroke(),i.closePath()}},O=function(e){h.toggle(e)},M=function(e){var t=new Image;t.onload=function(){for(var n=0,a=e.result.length;n<a;n++){var i=e.result[n],s=(0,o.default)("<canvas>").attr("width",i.location.width).attr("height",i.location.height),l=s[0].getContext("2d");l.rotate(-i.rotation_angle*Math.PI/180),l.translate(-i.location.left,-i.location.top),l.drawImage(t,0,0);var c=(0,o.default)('<li><img src="'+s[0].toDataURL()+'"></li>');c.data("face",i).data("isAll",!1),m.append(c)}},t.src=h.find("img").eq(0).attr("src")},I=function(e,t){var n=(0,o.default)('<li class="active"><img src="'+e+'"></li>');n.data("face",t).data("isAll",!0),m.empty().append(n)},A={age:{name:"年龄",transform:function(e){return Math.round(e)}},race:{name:"人种",transform:function(e){return{yellow:"黄种人",white:"白种人",black:"黑种人",arabs:"阿拉伯人"}[e]}},gender:{name:"性别",transform:function(e){return{male:"男性",female:"女性"}[e]}},expression:{name:"表情",transform:function(e){return{0:"不笑",1:"微笑",2:"大笑"}[e]}},glasses:{name:"眼镜",transform:function(e){return{0:"无眼镜",1:"普通眼镜",2:"墨镜"}[e]}}},E=function(e,t){if(x.empty(),t)return x.hide(),!1;x.show(),Object.keys(A).forEach(function(t){var n=A[t].name,a=A[t].transform(e[t]);x.append((0,o.default)("<li></li>").html(n+" : "+a))})},F=function(e,t,n){p.empty(),O(!1),b.attr("class","canvas-container loading"),x.hide().empty();var a={success:function(e){(0,o.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),p.html(JSON.stringify(e,null,"\t")),b.removeClass("loading");var n=e.errno,a=e.msg,i=e.data;if(0!==n||!i.result_num)return b.toggleClass("error-upload-fail",107===n).toggleClass("error-timeout",28===n).toggleClass("error-image-format",106===n),b.toggleClass("error-no-result",!i||!i.result_num),b.empty(),k=!1,[106,107,28,0].indexOf(n)===-1&&new f.default(a),k;b.toggleClass("has-result",i.result_num>=1),I(t,i.result),1===i.result_num?(O(!1),P(i.result[0]),E(i.result[0],!1)):(O(!0),M(i),j(i.result),E(null,!0)),k=!1},fail:function(e){new f.default("接口发生错误："+e.status+" - "+e.statusText),C()}};"url"===e?a.imageUrl=n:"stream"===e&&(a.image=t),(0,d.scanFace)(a)};w.change(function(e){var t=(0,o.default)(e.target);if(""===t.val())return!1;if(k)return void new f.default("操作正在进行中，请稍候再试！");k=!0,(0,o.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var n=t[0].files[0];new r.default({selector:"#demo-result .canvas-container",image:n,type:"stream",success:function(e){w.val(""),F("stream",e)},fail:C})}),(0,o.default)("#scan-photo").click(function(e){var t=(0,o.default)(e.target);if(k)return void new f.default("操作正在进行中，请稍候再试！");if(!t.hasClass("disabled")&&_.val()){k=!0,(0,o.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var n=_.val();new r.default({selector:"#demo-result .canvas-container",image:n,type:"url",apiType:"face",success:function(e){F("url",e,n)},fail:C})}}),(0,o.default)("#demo-photo-upload").click(function(){if((0,o.default)(this).hasClass("disabled"))return!1});var U=(0,o.default)(".demo-card-list > li");U.each(function(e,t){(0,o.default)(t).find("img").attr("src",""+v[e])}),U.click(function(e){var t=(0,o.default)(e.target);if(k)return void new f.default("操作正在进行中，请稍候再试！");if(!t.hasClass("active")){k=!0,t.addClass("active").siblings().removeClass("active");var n=""+window.location.protocol+(0,o.default)(this).find("img").attr("src");(0,o.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new r.default({selector:"#demo-result .canvas-container",image:n,type:"url",success:function(e){F("url",e,n)},fail:C})}}),h.on("click","li",function(e){var t=(0,o.default)(e.target);if(!t.hasClass("active")){t.addClass("active").siblings().removeClass("active");var n=t.data("face"),a=t.data("isAll");new r.default({selector:"#demo-result .canvas-container",image:(0,o.default)(this).find("img").attr("src"),toCheck:!1,success:function(){a?j(n):P(n,!0),E(n,a)},fail:C})}}),U.eq(0).click()},6:function(e,t){e.exports="//ai.bdstatic.com/dist/1489655127/ai_images/error/too-large.png"},9:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),l=a(s),c=n(2),r=n(1),d=a(r),u=n(10),f=n(5),v=n(6),p=function(){function e(t){var n=this,a=t.selector,o=t.image,s=t.type,c=t.apiType,r=t.toCheck,u=void 0===r||r,f=t.scale,v=void 0===f?1:f,p=t.success,h=t.fail;if(i(this,e),!(0,l.default)(a).context)throw"DemoCanvas：未寻找到容器!";if(this.container=(0,l.default)(a),this.type=s,this.scale=v,this.apiType=c,this.image=new Image,this.success=p||l.default.noop,this.fail=h||l.default.noop,this.image.onerror=function(){n.fail(),new d.default("图片加载失败，请重试")},u){({url:this.checkByUrl,stream:this.checkByStream})[this.type](o,c).then(function(e){n.image.onload=function(){n.render(!0)},n.image.src=e},function(e){n.image.onload=function(){n.render(!1)},n.image.src=e})}else this.image.onload=function(){n.render(!0)},this.image.src=o}return o(e,[{key:"checkByUrl",value:function(e,t){var n=l.default.Deferred();return(0,c.getHeader)({imageUrl:e,type:t,success:function(e){var t=e.data["Content-Type"],a=e.data["Content-Length"];return!t&&!a||0!==e.errno?void n.reject(u):/image\/(png|bmp|jpg|jpeg)/.test(t)?a>2097152?void n.reject(v):void n.resolve(e.data.image_data):void n.reject(f)},fail:function(){n.reject(u)}}),n.promise()}},{key:"checkByStream",value:function(e){var t=l.default.Deferred(),n=new FileReader;return e?(n.readAsDataURL(e),n.onload=function(n){return/image\/(png|bmp|jpeg)/.test(e.type)?e.size>2097152?(t.reject(v),!1):void t.resolve(n.target.result):(t.reject(f),!1)},n.onerror=function(){t.reject(u)},t.promise()):(t.reject(u),t.promise())}},{key:"render",value:function(e){var t=this.container.width(),n=this.container.height(),a=this.image.width,i=this.image.height,o=(0,l.default)("<canvas>您的浏览器暂时不支持canvas，请选用现代浏览器！</canvas>").attr("width",a).attr("height",i);o[0].getContext("2d").drawImage(this.image,0,0);var s=a/t,c=i/n,r=this.scale*(s>1||c>1?1/(s>=c?s:c):1);o.css({position:"relative",left:"50%",top:"50%","-webkit-transform":"translate(-50%, -50%) scale("+r+")","-moz-transform":"translate(-50%, -50%) scale("+r+")","-o-transform":"translate(-50%, -50%) scale("+r+")",transform:"translate(-50%, -50%) scale("+r+")"}),o.attr("data-scale",r),this.container.empty().append(o),e?this.success(this.image.src):this.fail()}}]),e}();t.default=p},97:function(e,t){}},[200]);