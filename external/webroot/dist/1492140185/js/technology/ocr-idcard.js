duAI([10],{15:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),s=function e(t,a,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,a);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,a,o)}if("value"in n)return n.value;var r=n.get;if(void 0!==r)return r.call(o)},d=a(2),u=o(d),c=a(44),f=o(c),p=a(30),m=o(p),g=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.title="提示",a.content=e||"",a.init(),a}return r(t,e),l(t,[{key:"init",value:function(){var e=(0,m.default)({id:this.id,title:this.title,content:this.content});(0,u.default)(this.container).append(e),this.bindEvent(),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,u.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this),this.getModal().on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(f.default);t.default=g},16:function(e,t,a){"use strict";function o(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"idcard",image:a,image_url:n}).success(r).fail(s)}function n(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"bankcard",image:a,image_url:n}).success(r).fail(s)}function i(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"commontext",image:a,image_url:n}).success(r).fail(s)}function r(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"face",image:a,image_url:n}).success(r).fail(s)}function l(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"pornography",image:a,image_url:n}).success(r).fail(s)}function s(e){var t=e.imageUrl,a=void 0===t?null:t,o=e.type,n=e.success,i=void 0===n?p.default.noop:n,r=e.fail,l=void 0===r?p.default.noop:r;p.default.post("/aidemo",{action:"getHeader",type:o,image_url:a}).success(i).fail(l)}function d(e){var t=e.words,a=void 0===t?null:t,o=e.success,n=void 0===o?p.default.noop:o,i=e.fail,r=void 0===i?p.default.noop:i;p.default.post("/aidemo",{type:"wakescore",kw:a}).success(n).fail(r)}function u(e){var t=e.words,a=void 0===t?null:t,o=e.success,n=void 0===o?p.default.noop:o;window.open("/aidemo?type=wakedownload&kw="+a,"_blank"),n()}function c(e){var t=e.data,a=void 0===t?{}:t,o=e.success,n=void 0===o?p.default.noop:o,i=e.fail,r=void 0===i?p.default.noop:i;p.default.post("/aidemo",{type:"tts",speed:a.speed,vol:a.vol,person:a.person,text:a.text}).success(n).fail(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=o,t.scanBankCard=n,t.scanGeneralText=i,t.scanFace=r,t.scanPornography=l,t.getHeader=s,t.evaluateWakeWords=d,t.exportWakeWords=u,t.synthesizeSpeech=c;var f=a(2),p=function(e){return e&&e.__esModule?e:{default:e}}(f)},24:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/error/image-format.png"},25:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/error/too-large.png"},293:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/technology/ocr-idcard/demo-card-1.png"},294:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/technology/ocr-idcard/demo-card-2.png"},295:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/technology/ocr-idcard/demo-card-3.png"},296:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/technology/ocr-idcard/demo-card-4.png"},297:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/technology/ocr-idcard/demo-card-5.png"},298:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/technology/ocr-idcard/demo-card-6.png"},30:function(e,t,a){var o=a(20);e.exports=(o.default||o).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,o,n){var i,r,l=null!=t?t:{},s=a.helperMissing,d=e.escapeExpression;return'<div class="ai-modal alert" id="'+d((r=null!=(r=a.id||(null!=t?t.id:t))?r:s,"function"==typeof r?r.call(l,{name:"id",hash:{},data:n}):r))+'">\r\n    <header class="modal-header">\r\n        <h3>'+d((r=null!=(r=a.title||(null!=t?t.title:t))?r:s,"function"==typeof r?r.call(l,{name:"title",hash:{},data:n}):r))+'</h3>\r\n        <a class="modal-x"></a>\r\n    </header>\r\n    <section class="modal-content">\r\n        <div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;">\r\n            '+(null!=(r=null!=(r=a.content||(null!=t?t.content:t))?r:s,i="function"==typeof r?r.call(l,{name:"content",hash:{},data:n}):r)?i:"")+'\r\n        </div>\r\n        <div style="text-align: center;">\r\n            <button type="button" class="btn-normal cancel">确定</button>\r\n        </div>\r\n    </section>\r\n</div>\r\n'},useData:!0})},332:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=a(2),i=o(n),r=a(29),l=o(r),s=a(45),d=o(s),u=a(16),c=a(15),f=o(c);a(598),a(638);var p=[a(293),a(294),a(295),a(296),a(297),a(298)];(0,i.default)(document).ready(function(){(0,i.default)(".case-indicator > li").click(function(){var e=this;(0,i.default)(".case-indicator > li").each(function(t,a){(0,i.default)(a).toggleClass("active",t===(0,i.default)(e).index())}),(0,i.default)(".case-item").each(function(t,a){(0,i.default)(a).toggleClass("active",t===(0,i.default)(e).index())})}),(0,i.default)(window).scroll((0,l.default)(function(){(0,i.default)(document).scrollTop()>=100&&(0,i.default)(".tech-intro-detail").trigger("demo")},300)),(0,i.default)(".tech-intro-detail").one("demo",function(){(0,i.default)(".original-card").addClass("scanning"),setTimeout(function(){(0,i.default)(".original-card").removeClass("scanning").addClass("scanned"),(0,i.default)(".scan-result").addClass("scanned")},3e3)});var e=!1,t=function(){(0,i.default)("#demo-json > p").empty(),(0,i.default)("#demo-photo-upload  > input").val(""),(0,i.default)("#demo-result .result-background").attr("class","result-background"),(0,i.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),e=!1},a={"住址":"address","公民身份号码":"card-no","出生":"birthday","民族":"folk","性别":"gender","姓名":"name","女":"female","男":"male"},o=function(o,n,r){(0,i.default)("#demo-json > p").empty(),(0,i.default)("#demo-result .result-background").attr("class","result-background loading");var l={success:function(t){if((0,i.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,i.default)("#demo-json > p").html(JSON.stringify(t,null,"\t")),(0,i.default)("#demo-result .result-background").removeClass("loading"),0!==t.errno)return(0,i.default)("#demo-result .result-background").toggleClass("has-result man female",!1).toggleClass("error-upload-fail",107===t.errno).toggleClass("error-timeout",28===t.errno).toggleClass("error-image-format",106===t.errno),e=!1,-1===[106,107,28].indexOf(t.errno)&&new f.default(t.msg),!1;var o=!0;Object.keys(t.data.words_result).forEach(function(e){var n=t.data.words_result[e].words;o=o&&!n,(0,i.default)("#demo-result .result-background").find("."+a[e]).html(n),"性别"===e&&(0,i.default)("#demo-result .result-background").toggleClass(a[n]||"",!0)}),(0,i.default)("#demo-result .result-background").toggleClass("has-result",!o).toggleClass("error-no-result",o),e=!1},fail:function(e){new f.default("接口发生错误："+e.status+" - "+e.statusText),t()}};"url"===o?l.imageUrl=r:"stream"===o&&(l.image=n),(0,u.scanIDCard)(l)};(0,i.default)("#demo-photo-upload  > input").change(function(a){if(""===(0,i.default)(this).val())return!1;if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var n=(0,i.default)(this)[0].files[0];new d.default({selector:"#demo-origin",image:n,type:"stream",success:function(e){(0,i.default)("#demo-photo-upload  > input").val(""),o("stream",e)},fail:t})}),(0,i.default)("#demo-photo-url").change(function(){(0,i.default)(".demo-card-list > li").removeClass("active")}),(0,i.default)("#scan-photo").click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");if((0,i.default)(this).hasClass("disabled")||!(0,i.default)("#demo-photo-url").val())return!1;e=!0,(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var a=(0,i.default)("#demo-photo-url").val();new d.default({selector:"#demo-origin",image:a,type:"url",apiType:"idcard",success:function(e){o("url",e,a)},fail:t})}),(0,i.default)("#demo-photo-upload").click(function(){if((0,i.default)(this).hasClass("disabled"))return!1});var n=(0,i.default)(".demo-card-list > li");n.each(function(e,t){(0,i.default)(t).find("img").attr("src",""+p[e])}),n.click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,i.default)(".demo-card-list > li").removeClass("active"),(0,i.default)(this).addClass("active");var a=""+window.location.protocol+(0,i.default)(this).find("img").attr("src");(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new d.default({selector:"#demo-origin",image:a,type:"url",toCheck:!1,success:function(e){o("url",e,a)},fail:t})}),(0,i.default)(".demo-card-list > li")[0].click()})},45:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=a(2),l=o(r),s=a(16),d=a(15),u=o(d),c=a(49),f=a(24),p=a(25),m=function(){function e(t){var a=this,o=t.selector,i=t.image,r=t.type,s=t.apiType,d=t.toCheck,c=void 0===d||d,f=t.scale,p=void 0===f?1:f,m=t.success,g=t.fail;if(n(this,e),!(0,l.default)(o).context)throw"DemoCanvas：未寻找到容器!";if(this.container=(0,l.default)(o),this.type=r,this.scale=p,this.apiType=s,this.image=new Image,this.success=m||l.default.noop,this.fail=g||l.default.noop,this.image.onerror=function(){a.fail(),new u.default("图片加载失败，请重试")},c){({url:this.checkByUrl,stream:this.checkByStream})[this.type](i,s).then(function(e){a.image.onload=function(){a.render(!0)},a.image.src=e},function(e){a.image.onload=function(){a.render(!1)},a.image.src=e})}else this.image.onload=function(){a.render(!0)},this.image.src=i}return i(e,[{key:"checkByUrl",value:function(e,t){var a=l.default.Deferred();return(0,s.getHeader)({imageUrl:e,type:t,success:function(e){var t=e.data["Content-Type"],o=e.data["Content-Length"];return!t&&!o||0!==e.errno?void a.reject(c):/image\/(png|bmp|jpg|jpeg)/.test(t)?o>2097152?void a.reject(p):void a.resolve(e.data.image_data):void a.reject(f)},fail:function(){a.reject(c)}}),a.promise()}},{key:"checkByStream",value:function(e){var t=l.default.Deferred(),a=new FileReader;return e?(a.readAsDataURL(e),a.onload=function(a){return/image\/(png|bmp|jpeg)/.test(e.type)?e.size>2097152?(t.reject(p),!1):void t.resolve(a.target.result):(t.reject(f),!1)},a.onerror=function(){t.reject(c)},t.promise()):(t.reject(c),t.promise())}},{key:"render",value:function(e){var t=this.container.width(),a=this.container.height(),o=this.image.width,n=this.image.height,i=(0,l.default)("<canvas>您的浏览器暂时不支持canvas，请选用现代浏览器！</canvas>").attr("width",o).attr("height",n);i[0].getContext("2d").drawImage(this.image,0,0);var r=o/t,s=n/a,d=this.scale*(r>1||s>1?1/(r>=s?r:s):1);i.css({position:"relative",left:"50%",top:"50%","-webkit-transform":"translate(-50%, -50%) scale("+d+")","-moz-transform":"translate(-50%, -50%) scale("+d+")","-o-transform":"translate(-50%, -50%) scale("+d+")",transform:"translate(-50%, -50%) scale("+d+")"}),i.attr("data-scale",d),this.container.empty().append(i),e?this.success(this.image.src):this.fail()}}]),e}();t.default=m},49:function(e,t){e.exports="//ai.bdstatic.com/dist/1492140185/ai_images/error/not-found.png"},598:function(e,t){},638:function(e,t,a){e.exports=a.p+"./../../template/cloud/ocr-idcard.html"},757:function(e,t,a){e.exports=a(332)}},[757]);