<<<<<<< HEAD
duAI([3],{1:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),s=function e(t,a,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,a);if(void 0===i){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,a,o)}if("value"in i)return i.value;var r=i.get;if(void 0!==r)return r.call(o)},d=a(3),u=o(d),c=a(0),f=o(c),p=a(4),m=o(p),g=a(7),v=function(e){function t(e){i(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.title="提示",a.content=e||"",a.init(),a}return r(t,e),l(t,[{key:"init",value:function(){var e=u.default.render(g.ALERT_MODAL_TMPL,{id:this.id,title:this.title,content:this.content});(0,f.default)(this.container).append(e),this.bindEvent(),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,f.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this);var a=this.getModal();a.on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(m.default);t.default=v},10:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/too-large.png"},124:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-1.png"},125:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-2.png"},126:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-3.png"},127:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-4.png"},128:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-5.png"},129:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-6.png"},157:function(e,t,a){e.exports=a(47)},2:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"idcard",image:a,image_url:i}).success(r).fail(s)}function n(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"bankcard",image:a,image_url:i}).success(r).fail(s)}function r(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"commontext",image:a,image_url:i}).success(r).fail(s)}function l(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"face",image:a,image_url:i}).success(r).fail(s)}function s(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"pornography",image:a,image_url:i}).success(r).fail(s)}function d(e){var t=e.imageUrl,a=void 0===t?null:t,o=e.type,i=e.success,n=void 0===i?m.default.noop:i,r=e.fail,l=void 0===r?m.default.noop:r;m.default.post("/aidemo",{action:"getHeader",type:o,image_url:a}).success(n).fail(l)}function u(e){var t=e.words,a=void 0===t?null:t,o=e.success,i=void 0===o?m.default.noop:o,n=e.fail,r=void 0===n?m.default.noop:n;m.default.post("/aidemo",{type:"wakescore",kw:a}).success(i).fail(r)}function c(e){var t=e.words,a=void 0===t?null:t,o=e.success,i=void 0===o?m.default.noop:o;window.open("/aidemo?type=wakedownload&kw="+a,"_blank"),i()}function f(e){var t=e.data,a=void 0===t?{}:t,o=e.success,i=void 0===o?m.default.noop:o,n=e.fail,r=void 0===n?m.default.noop:n;m.default.post("/aidemo",{type:"tts",speed:a.speed,vol:a.vol,person:a.person,text:a.text}).success(i).fail(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=i,t.scanBankCard=n,t.scanGeneralText=r,t.scanFace=l,t.scanPornography=s,t.getHeader=d,t.evaluateWakeWords=u,t.exportWakeWords=c,t.synthesizeSpeech=f;var p=a(0),m=o(p)},47:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=a(0),n=o(i),r=a(5),l=o(r),s=a(6),d=o(s),u=a(2),c=a(1),f=o(c);a(90);var p=[a(124),a(125),a(126),a(127),a(128),a(129)];(0,n.default)(document).ready(function(){(0,n.default)(".case-indicator > li").click(function(){var e=this;(0,n.default)(".case-indicator > li").each(function(t,a){(0,n.default)(a).toggleClass("active",t===(0,n.default)(e).index())}),(0,n.default)(".case-item").each(function(t,a){(0,n.default)(a).toggleClass("active",t===(0,n.default)(e).index())})}),(0,n.default)(window).scroll((0,l.default)(function(){(0,n.default)(document).scrollTop()>=100&&(0,n.default)(".tech-intro-detail").trigger("demo")},300)),(0,n.default)(".tech-intro-detail").one("demo",function(){(0,n.default)(".original-card").addClass("scanning"),setTimeout(function(){(0,n.default)(".original-card").removeClass("scanning").addClass("scanned"),(0,n.default)(".scan-result").addClass("scanned")},3e3)});var e=!1,t=function(){(0,n.default)("#demo-json > p").empty(),(0,n.default)("#demo-photo-upload  > input").val(""),(0,n.default)("#demo-result .result-background").attr("class","result-background"),(0,n.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),e=!1},a={"住址":"address","公民身份号码":"card-no","出生":"birthday","民族":"folk","性别":"gender","姓名":"name","女":"female","男":"male"},o=function(o,i,r){(0,n.default)("#demo-json > p").empty(),(0,n.default)("#demo-result .result-background").attr("class","result-background loading");var l={success:function(t){if((0,n.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,n.default)("#demo-json > p").html(JSON.stringify(t,null,"\t")),(0,n.default)("#demo-result .result-background").removeClass("loading"),0!==t.errno)return(0,n.default)("#demo-result .result-background").toggleClass("has-result man female",!1).toggleClass("error-upload-fail",107===t.errno).toggleClass("error-timeout",28===t.errno).toggleClass("error-image-format",106===t.errno),e=!1,[106,107,28].indexOf(t.errno)===-1&&new f.default(t.msg),!1;var o=!0;Object.keys(t.data.words_result).forEach(function(e){var i=t.data.words_result[e].words;o=o&&!i,(0,n.default)("#demo-result .result-background").find("."+a[e]).html(i),"性别"===e&&(0,n.default)("#demo-result .result-background").toggleClass(a[i]||"",!0)}),(0,n.default)("#demo-result .result-background").toggleClass("has-result",!o).toggleClass("error-no-result",o),e=!1},fail:function(e){new f.default("接口发生错误："+e.status+" - "+e.statusText),t()}};"url"===o?l.imageUrl=r:"stream"===o&&(l.image=i),(0,u.scanIDCard)(l)};(0,n.default)("#demo-photo-upload  > input").change(function(a){if(""===(0,n.default)(this).val())return!1;if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,n.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var i=(0,n.default)(this)[0].files[0];new d.default({selector:"#demo-origin",image:i,type:"stream",success:function(e){(0,n.default)("#demo-photo-upload  > input").val(""),o("stream",e)},fail:t})}),(0,n.default)("#demo-photo-url").change(function(){(0,n.default)(".demo-card-list > li").removeClass("active")}),(0,n.default)("#scan-photo").click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");if((0,n.default)(this).hasClass("disabled")||!(0,n.default)("#demo-photo-url").val())return!1;e=!0,(0,n.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var a=(0,n.default)("#demo-photo-url").val();new d.default({selector:"#demo-origin",image:a,type:"url",apiType:"idcard",success:function(e){o("url",e,a)},fail:t})}),(0,n.default)("#demo-photo-upload").click(function(){if((0,n.default)(this).hasClass("disabled"))return!1});var i=(0,n.default)(".demo-card-list > li");i.each(function(e,t){(0,n.default)(t).find("img").attr("src",""+p[e])}),i.click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,n.default)(".demo-card-list > li").removeClass("active"),(0,n.default)(this).addClass("active");var a=""+window.location.protocol+(0,n.default)(this).find("img").attr("src");(0,n.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new d.default({selector:"#demo-origin",image:a,type:"url",toCheck:!1,success:function(e){o("url",e,a)},fail:t})}),(0,n.default)(".demo-card-list > li")[0].click()})},6:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=a(0),l=o(r),s=a(2),d=a(1),u=o(d),c=a(9),f=a(8),p=a(10),m=function(){function e(t){var a=this,o=t.selector,n=t.image,r=t.type,s=t.apiType,d=t.toCheck,c=void 0===d||d,f=t.scale,p=void 0===f?1:f,m=t.success,g=t.fail;if(i(this,e),!(0,l.default)(o).context)throw"DemoCanvas：未寻找到容器!";if(this.container=(0,l.default)(o),this.type=r,this.scale=p,this.apiType=s,this.image=new Image,this.success=m||l.default.noop,this.fail=g||l.default.noop,this.image.onerror=function(){a.fail(),new u.default("图片加载失败，请重试")},c){var v={url:this.checkByUrl,stream:this.checkByStream}[this.type](n,s);l.default.when(v).then(function(e){a.image.onload=function(){a.render(!0)},a.image.src=e},function(e){a.image.onload=function(){a.render(!1)},a.image.src=e})}else this.image.onload=function(){a.render(!0)},this.image.src=n}return n(e,[{key:"checkByUrl",value:function(e,t){var a=l.default.Deferred();return(0,s.getHeader)({imageUrl:e,type:t,success:function(e){var t=e.data["Content-Type"],o=e.data["Content-Length"];return!t&&!o||0!==e.errno?void a.reject(c):/image\/(png|bmp|jpg|jpeg)/.test(t)?o>2097152?void a.reject(p):void a.resolve(e.data.image_data):void a.reject(f)},fail:function(){a.reject(c)}}),a.promise()}},{key:"checkByStream",value:function(e){var t=l.default.Deferred(),a=new FileReader;return e?(a.readAsDataURL(e),a.onload=function(a){return/image\/(png|bmp|jpeg)/.test(e.type)?e.size>2097152?(t.reject(p),!1):void t.resolve(a.target.result):(t.reject(f),!1)},a.onerror=function(){t.reject(c)},t.promise()):(t.reject(c),t.promise())}},{key:"render",value:function(e){var t=this.container.width(),a=this.container.height(),o=this.image.width,i=this.image.height,n=(0,l.default)("<canvas>您的浏览器暂时不支持canvas，请选用现代浏览器！</canvas>").attr("width",o).attr("height",i),r=n[0].getContext("2d");r.drawImage(this.image,0,0);var s=o/t,d=i/a,u=this.scale*(s>1||d>1?1/(s>=d?s:d):1);n.css({position:"relative",left:"50%",top:"50%","-webkit-transform":"translate(-50%, -50%) scale("+u+")","-moz-transform":"translate(-50%, -50%) scale("+u+")","-o-transform":"translate(-50%, -50%) scale("+u+")",transform:"translate(-50%, -50%) scale("+u+")"}),n.attr("data-scale",u),this.container.empty().append(n),e?this.success(this.image.src):this.fail()}}]),e}();t.default=m},8:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/image-format.png"},9:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/not-found.png"},90:function(e,t){}},[157]);
=======
duAI([3],{1:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),s=function e(t,a,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,a);if(void 0===i){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,a,o)}if("value"in i)return i.value;var r=i.get;if(void 0!==r)return r.call(o)},d=a(3),u=o(d),c=a(0),f=o(c),p=a(4),m=o(p),g=a(7),v=function(e){function t(e){i(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.title="提示",a.content=e||"",a.init(),a}return r(t,e),l(t,[{key:"init",value:function(){var e=u.default.render(g.ALERT_MODAL_TMPL,{id:this.id,title:this.title,content:this.content});(0,f.default)(this.container).append(e),this.bindEvent(),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,f.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this);var a=this.getModal();a.on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(m.default);t.default=v},10:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/too-large.png"},124:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-1.png"},125:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-2.png"},126:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-3.png"},127:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-4.png"},128:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-5.png"},129:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/ocr-idcard/demo-card-6.png"},157:function(e,t,a){e.exports=a(46)},2:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"idcard",image:a,image_url:i}).success(r).fail(s)}function n(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"bankcard",image:a,image_url:i}).success(r).fail(s)}function r(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"commontext",image:a,image_url:i}).success(r).fail(s)}function l(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"face",image:a,image_url:i}).success(r).fail(s)}function s(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,n=e.success,r=void 0===n?m.default.noop:n,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"pornography",image:a,image_url:i}).success(r).fail(s)}function d(e){var t=e.imageUrl,a=void 0===t?null:t,o=e.type,i=e.success,n=void 0===i?m.default.noop:i,r=e.fail,l=void 0===r?m.default.noop:r;m.default.post("/aidemo",{action:"getHeader",type:o,image_url:a}).success(n).fail(l)}function u(e){var t=e.words,a=void 0===t?null:t,o=e.success,i=void 0===o?m.default.noop:o,n=e.fail,r=void 0===n?m.default.noop:n;m.default.post("/aidemo",{type:"wakescore",kw:a}).success(i).fail(r)}function c(e){var t=e.words,a=void 0===t?null:t,o=e.success,i=void 0===o?m.default.noop:o;window.open("/aidemo?type=wakedownload&kw="+a,"_blank"),i()}function f(e){var t=e.data,a=void 0===t?{}:t,o=e.success,i=void 0===o?m.default.noop:o,n=e.fail,r=void 0===n?m.default.noop:n;m.default.post("/aidemo",{type:"tts",speed:a.speed,vol:a.vol,person:a.person,text:a.text}).success(i).fail(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=i,t.scanBankCard=n,t.scanGeneralText=r,t.scanFace=l,t.scanPornography=s,t.getHeader=d,t.evaluateWakeWords=u,t.exportWakeWords=c,t.synthesizeSpeech=f;var p=a(0),m=o(p)},46:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=a(0),n=o(i),r=a(5),l=o(r),s=a(6),d=o(s),u=a(2),c=a(1),f=o(c);a(90);var p=[a(124),a(125),a(126),a(127),a(128),a(129)];(0,n.default)(document).ready(function(){(0,n.default)(".case-indicator > li").click(function(){var e=this;(0,n.default)(".case-indicator > li").each(function(t,a){(0,n.default)(a).toggleClass("active",t===(0,n.default)(e).index())}),(0,n.default)(".case-item").each(function(t,a){(0,n.default)(a).toggleClass("active",t===(0,n.default)(e).index())})}),(0,n.default)(window).scroll((0,l.default)(function(){(0,n.default)(document).scrollTop()>=100&&(0,n.default)(".tech-intro-detail").trigger("demo")},300)),(0,n.default)(".tech-intro-detail").one("demo",function(){(0,n.default)(".original-card").addClass("scanning"),setTimeout(function(){(0,n.default)(".original-card").removeClass("scanning").addClass("scanned"),(0,n.default)(".scan-result").addClass("scanned")},3e3)});var e=!1,t=function(){(0,n.default)("#demo-json > p").empty(),(0,n.default)("#demo-photo-upload  > input").val(""),(0,n.default)("#demo-result .result-background").attr("class","result-background"),(0,n.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),e=!1},a={"住址":"address","公民身份号码":"card-no","出生":"birthday","民族":"folk","性别":"gender","姓名":"name","女":"female","男":"male"},o=function(o,i,r){(0,n.default)("#demo-json > p").empty(),(0,n.default)("#demo-result .result-background").attr("class","result-background loading");var l={success:function(t){if((0,n.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,n.default)("#demo-json > p").html(JSON.stringify(t,null,"\t")),(0,n.default)("#demo-result .result-background").removeClass("loading"),0!==t.errno)return(0,n.default)("#demo-result .result-background").toggleClass("has-result man female",!1).toggleClass("error-upload-fail",107===t.errno).toggleClass("error-timeout",28===t.errno).toggleClass("error-image-format",106===t.errno),e=!1,[106,107,28].indexOf(t.errno)===-1&&new f.default(t.msg),!1;var o=!0;Object.keys(t.data.words_result).forEach(function(e){var i=t.data.words_result[e].words;o=o&&!i,(0,n.default)("#demo-result .result-background").find("."+a[e]).html(i),"性别"===e&&(0,n.default)("#demo-result .result-background").toggleClass(a[i]||"",!0)}),(0,n.default)("#demo-result .result-background").toggleClass("has-result",!o).toggleClass("error-no-result",o),e=!1},fail:function(e){new f.default("接口发生错误："+e.status+" - "+e.statusText),t()}};"url"===o?l.imageUrl=r:"stream"===o&&(l.image=i),(0,u.scanIDCard)(l)};(0,n.default)("#demo-photo-upload  > input").change(function(a){if(""===(0,n.default)(this).val())return!1;if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,n.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var i=(0,n.default)(this)[0].files[0];new d.default({selector:"#demo-origin",image:i,type:"stream",success:function(e){(0,n.default)("#demo-photo-upload  > input").val(""),o("stream",e)},fail:t})}),(0,n.default)("#demo-photo-url").change(function(){(0,n.default)(".demo-card-list > li").removeClass("active")}),(0,n.default)("#scan-photo").click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");if((0,n.default)(this).hasClass("disabled")||!(0,n.default)("#demo-photo-url").val())return!1;e=!0,(0,n.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var a=(0,n.default)("#demo-photo-url").val();new d.default({selector:"#demo-origin",image:a,type:"url",apiType:"idcard",success:function(e){o("url",e,a)},fail:t})}),(0,n.default)("#demo-photo-upload").click(function(){if((0,n.default)(this).hasClass("disabled"))return!1});var i=(0,n.default)(".demo-card-list > li");i.each(function(e,t){(0,n.default)(t).find("img").attr("src",""+p[e])}),i.click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,n.default)(".demo-card-list > li").removeClass("active"),(0,n.default)(this).addClass("active");var a=""+window.location.protocol+(0,n.default)(this).find("img").attr("src");(0,n.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new d.default({selector:"#demo-origin",image:a,type:"url",toCheck:!1,success:function(e){o("url",e,a)},fail:t})}),(0,n.default)(".demo-card-list > li")[0].click()})},6:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=a(0),l=o(r),s=a(2),d=a(1),u=o(d),c=a(9),f=a(8),p=a(10),m=function(){function e(t){var a=this,o=t.selector,n=t.image,r=t.type,s=t.apiType,d=t.toCheck,c=void 0===d||d,f=t.scale,p=void 0===f?1:f,m=t.success,g=t.fail;if(i(this,e),!(0,l.default)(o).context)throw"DemoCanvas：未寻找到容器!";if(this.container=(0,l.default)(o),this.type=r,this.scale=p,this.apiType=s,this.image=new Image,this.success=m||l.default.noop,this.fail=g||l.default.noop,this.image.onerror=function(){a.fail(),new u.default("图片加载失败，请重试")},c){var v={url:this.checkByUrl,stream:this.checkByStream}[this.type](n,s);v.then(function(e){a.image.onload=function(){a.render(!0)},a.image.src=e},function(e){a.image.onload=function(){a.render(!1)},a.image.src=e})}else this.image.onload=function(){a.render(!0)},this.image.src=n}return n(e,[{key:"checkByUrl",value:function(e,t){var a=l.default.Deferred();return(0,s.getHeader)({imageUrl:e,type:t,success:function(e){var t=e.data["Content-Type"],o=e.data["Content-Length"];return!t&&!o||0!==e.errno?void a.reject(c):/image\/(png|bmp|jpg|jpeg)/.test(t)?o>2097152?void a.reject(p):void a.resolve(e.data.image_data):void a.reject(f)},fail:function(){a.reject(c)}}),a.promise()}},{key:"checkByStream",value:function(e){var t=l.default.Deferred(),a=new FileReader;return e?(a.readAsDataURL(e),a.onload=function(a){return/image\/(png|bmp|jpeg)/.test(e.type)?e.size>2097152?(t.reject(p),!1):void t.resolve(a.target.result):(t.reject(f),!1)},a.onerror=function(){t.reject(c)},t.promise()):(t.reject(c),t.promise())}},{key:"render",value:function(e){var t=this.container.width(),a=this.container.height(),o=this.image.width,i=this.image.height,n=(0,l.default)("<canvas>您的浏览器暂时不支持canvas，请选用现代浏览器！</canvas>").attr("width",o).attr("height",i),r=n[0].getContext("2d");r.drawImage(this.image,0,0);var s=o/t,d=i/a,u=this.scale*(s>1||d>1?1/(s>=d?s:d):1);n.css({position:"relative",left:"50%",top:"50%","-webkit-transform":"translate(-50%, -50%) scale("+u+")","-moz-transform":"translate(-50%, -50%) scale("+u+")","-o-transform":"translate(-50%, -50%) scale("+u+")",transform:"translate(-50%, -50%) scale("+u+")"}),n.attr("data-scale",u),this.container.empty().append(n),e?this.success(this.image.src):this.fail()}}]),e}();t.default=m},8:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/image-format.png"},9:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/not-found.png"},90:function(e,t){}},[157]);
>>>>>>> master
