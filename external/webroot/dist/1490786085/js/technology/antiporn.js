duAI([2],{1:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),s=function e(t,a,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,a);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,a,o)}if("value"in n)return n.value;var r=n.get;if(void 0!==r)return r.call(o)},c=a(0),d=o(c),u=a(8),f=o(u),p=a(6),m=o(p),v=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.title="提示",a.content=e||"",a.init(),a}return r(t,e),l(t,[{key:"init",value:function(){var e=(0,m.default)({id:this.id,title:this.title,content:this.content});(0,d.default)(this.container).append(e),this.bindEvent(),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,d.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this),this.getModal().on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(f.default);t.default=v},10:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=a(0),l=o(r),s=a(2),c=a(1),d=o(c),u=a(12),f=a(4),p=a(5),m=function(){function e(t){var a=this,o=t.selector,i=t.image,r=t.type,s=t.apiType,c=t.toCheck,u=void 0===c||c,f=t.scale,p=void 0===f?1:f,m=t.success,v=t.fail;if(n(this,e),!(0,l.default)(o).context)throw"DemoCanvas：未寻找到容器!";if(this.container=(0,l.default)(o),this.type=r,this.scale=p,this.apiType=s,this.image=new Image,this.success=m||l.default.noop,this.fail=v||l.default.noop,this.image.onerror=function(){a.fail(),new d.default("图片加载失败，请重试")},u){({url:this.checkByUrl,stream:this.checkByStream})[this.type](i,s).then(function(e){a.image.onload=function(){a.render(!0)},a.image.src=e},function(e){a.image.onload=function(){a.render(!1)},a.image.src=e})}else this.image.onload=function(){a.render(!0)},this.image.src=i}return i(e,[{key:"checkByUrl",value:function(e,t){var a=l.default.Deferred();return(0,s.getHeader)({imageUrl:e,type:t,success:function(e){var t=e.data["Content-Type"],o=e.data["Content-Length"];return!t&&!o||0!==e.errno?void a.reject(u):/image\/(png|bmp|jpg|jpeg)/.test(t)?o>2097152?void a.reject(p):void a.resolve(e.data.image_data):void a.reject(f)},fail:function(){a.reject(u)}}),a.promise()}},{key:"checkByStream",value:function(e){var t=l.default.Deferred(),a=new FileReader;return e?(a.readAsDataURL(e),a.onload=function(a){return/image\/(png|bmp|jpeg)/.test(e.type)?e.size>2097152?(t.reject(p),!1):void t.resolve(a.target.result):(t.reject(f),!1)},a.onerror=function(){t.reject(u)},t.promise()):(t.reject(u),t.promise())}},{key:"render",value:function(e){var t=this.container.width(),a=this.container.height(),o=this.image.width,n=this.image.height,i=(0,l.default)("<canvas>您的浏览器暂时不支持canvas，请选用现代浏览器！</canvas>").attr("width",o).attr("height",n);i[0].getContext("2d").drawImage(this.image,0,0);var r=o/t,s=n/a,c=this.scale*(r>1||s>1?1/(r>=s?r:s):1);i.css({position:"relative",left:"50%",top:"50%","-webkit-transform":"translate(-50%, -50%) scale("+c+")","-moz-transform":"translate(-50%, -50%) scale("+c+")","-o-transform":"translate(-50%, -50%) scale("+c+")",transform:"translate(-50%, -50%) scale("+c+")"}),i.attr("data-scale",c),this.container.empty().append(i),e?this.success(this.image.src):this.fail()}}]),e}();t.default=m},12:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/error/not-found.png"},134:function(e,t){},154:function(e,t,a){e.exports=a.p+"./../../template/cloud/antiporn.html"},2:function(e,t,a){"use strict";function o(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"idcard",image:a,image_url:n}).success(r).fail(s)}function n(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"bankcard",image:a,image_url:n}).success(r).fail(s)}function i(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"commontext",image:a,image_url:n}).success(r).fail(s)}function r(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"face",image:a,image_url:n}).success(r).fail(s)}function l(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?p.default.noop:i,l=e.fail,s=void 0===l?p.default.noop:l;p.default.post("/aidemo",{type:"pornography",image:a,image_url:n}).success(r).fail(s)}function s(e){var t=e.imageUrl,a=void 0===t?null:t,o=e.type,n=e.success,i=void 0===n?p.default.noop:n,r=e.fail,l=void 0===r?p.default.noop:r;p.default.post("/aidemo",{action:"getHeader",type:o,image_url:a}).success(i).fail(l)}function c(e){var t=e.words,a=void 0===t?null:t,o=e.success,n=void 0===o?p.default.noop:o,i=e.fail,r=void 0===i?p.default.noop:i;p.default.post("/aidemo",{type:"wakescore",kw:a}).success(n).fail(r)}function d(e){var t=e.words,a=void 0===t?null:t,o=e.success,n=void 0===o?p.default.noop:o;window.open("/aidemo?type=wakedownload&kw="+a,"_blank"),n()}function u(e){var t=e.data,a=void 0===t?{}:t,o=e.success,n=void 0===o?p.default.noop:o,i=e.fail,r=void 0===i?p.default.noop:i;p.default.post("/aidemo",{type:"tts",speed:a.speed,vol:a.vol,person:a.person,text:a.text}).success(n).fail(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=o,t.scanBankCard=n,t.scanGeneralText=i,t.scanFace=r,t.scanPornography=l,t.getHeader=s,t.evaluateWakeWords=c,t.exportWakeWords=d,t.synthesizeSpeech=u;var f=a(0),p=function(e){return e&&e.__esModule?e:{default:e}}(f)},243:function(e,t,a){e.exports=a(74)},29:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/technology/antiporn/demo-card-1.jpg"},30:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/technology/antiporn/demo-card-2.jpg"},31:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/technology/antiporn/demo-card-3.jpg"},32:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/technology/antiporn/demo-card-4.jpg"},33:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/technology/antiporn/demo-card-5.jpg"},34:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/technology/antiporn/demo-card-6.jpg"},35:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/technology/antiporn/demo-card-7.jpg"},36:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/technology/antiporn/demo-card-8.jpg"},4:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/error/image-format.png"},5:function(e,t){e.exports="//ai.bdstatic.com/dist/1490786085/ai_images/error/too-large.png"},6:function(e,t,a){var o=a(3);e.exports=(o.default||o).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,o,n){var i,r,l=null!=t?t:{},s=a.helperMissing,c=e.escapeExpression;return'<div class="ai-modal alert" id="'+c((r=null!=(r=a.id||(null!=t?t.id:t))?r:s,"function"==typeof r?r.call(l,{name:"id",hash:{},data:n}):r))+'">\r\n    <header class="modal-header">\r\n        <h3>'+c((r=null!=(r=a.title||(null!=t?t.title:t))?r:s,"function"==typeof r?r.call(l,{name:"title",hash:{},data:n}):r))+'</h3>\r\n        <a class="modal-x"></a>\r\n    </header>\r\n    <section class="modal-content">\r\n        <div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;">\r\n            '+(null!=(r=null!=(r=a.content||(null!=t?t.content:t))?r:s,i="function"==typeof r?r.call(l,{name:"content",hash:{},data:n}):r)?i:"")+'\r\n        </div>\r\n        <div style="text-align: center;">\r\n            <button type="button" class="btn-normal cancel">确定</button>\r\n        </div>\r\n    </section>\r\n</div>\r\n'},useData:!0})},74:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=a(0),i=o(n),r=a(7),l=o(r),s=a(10),c=o(s),d=a(2),u=a(1),f=o(u);a(154),a(134);var p=[a(29),a(30),a(31),a(32),a(33),a(34),a(35),a(36)];(0,i.default)(document).ready(function(){(0,i.default)(".case-indicator > li").click(function(){var e=this;(0,i.default)(".case-indicator > li").each(function(t,a){(0,i.default)(a).toggleClass("active",t===(0,i.default)(e).index())}),(0,i.default)(".case-item").each(function(t,a){(0,i.default)(a).toggleClass("active",t===(0,i.default)(e).index())})}),(0,i.default)(window).scroll((0,l.default)(function(){(0,i.default)(document).scrollTop()>=100&&(0,i.default)(".tech-intro-detail").trigger("demo")},300)),(0,i.default)(".tech-intro-detail").one("demo",function(){(0,i.default)(".tech-intro-detail > .scan-box").addClass("scanned")});var e=!1,t=function(){e=!1,(0,i.default)("#demo-json > p").empty(),(0,i.default)("#demo-photo-upload  > input").val(""),(0,i.default)("#demo-result .canvas-container").attr("class","canvas-container"),(0,i.default)("#demo-photo-upload, #scan-photo").removeClass("disabled")},a=function(a,o,n){(0,i.default)("#demo-json > p").empty(),(0,i.default)("#demo-result .canvas-container").attr("class","canvas-container loading"),(0,i.default)("#face-details").hide().empty();var r={success:function(t){if((0,i.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,i.default)("#demo-json > p").html(JSON.stringify(t,null,"\t")),(0,i.default)("#demo-result .canvas-container").removeClass("loading"),0!==t.errno||!t.data.result_num)return(0,i.default)("#demo-result .canvas-container").toggleClass("error-upload-fail",107===t.errno).toggleClass("error-timeout",28===t.errno).toggleClass("error-image-format",106===t.errno),(0,i.default)("#demo-result .canvas-container").empty(),(0,i.default)("#demo-result .canvas-container").toggleClass("error-no-result",!t.data||!t.data.result_num),e=!1,[106,107,28,0].indexOf(t.errno)===-1&&new f.default(t.msg),!1;(0,i.default)("#demo-result .canvas-container").toggleClass("has-result",t.data.result_num>=1);for(var a=null,o=0,n=t.data.result.length;o<n;o++){var r=t.data.result[o];(!a||r.probability>a.probability)&&(a=r)}(0,i.default)("#demo-result .canvas-container").attr("data-probability",Math.round(1e4*a.probability)/100).toggleClass("normal","正常"===a.class_name).toggleClass("sexy","性感"===a.class_name).toggleClass("pornography","色情"===a.class_name),e=!1},fail:function(e){new f.default("接口发生错误："+e.status+" - "+e.statusText),t()}};"url"===a?r.imageUrl=n:"stream"===a&&(r.image=o),(0,d.scanPornography)(r)};(0,i.default)("#demo-photo-upload > input").change(function(o){if(""===(0,i.default)(this).val())return!1;if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var n=(0,i.default)(this)[0].files[0];new c.default({selector:"#demo-result .canvas-container",image:n,type:"stream",lazyRender:!0,success:function(e){(0,i.default)("#demo-photo-upload  > input").val(""),a("stream",e)},fail:t})}),(0,i.default)("#demo-photo-url").change(function(){(0,i.default)(".demo-card-list > li").removeClass("active")}),(0,i.default)("#scan-photo").click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");if((0,i.default)(this).hasClass("disabled")||!(0,i.default)("#demo-photo-url").val())return!1;e=!0,(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var o=(0,i.default)("#demo-photo-url").val();new c.default({selector:"#demo-result .canvas-container",image:o,type:"url",apiType:"pornography",success:function(e){a("url",e,o)},fail:t})}),(0,i.default)("#demo-photo-upload").click(function(){if((0,i.default)(this).hasClass("disabled"))return!1});var o=(0,i.default)(".demo-card-list > li");o.each(function(e,t){(0,i.default)(t).find("img").attr("src",""+p[e])}),o.click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,i.default)(".demo-card-list > li").removeClass("active"),(0,i.default)(this).addClass("active");var o=""+window.location.protocol+(0,i.default)(this).find("img").attr("src");(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new c.default({selector:"#demo-result .canvas-container",image:o,type:"url",toCheck:!1,success:function(e){a("url",e,o)},fail:t})}),(0,i.default)(".demo-card-list > li")[0].click()})}},[243]);