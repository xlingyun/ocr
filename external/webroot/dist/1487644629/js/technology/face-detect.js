duAI([1],{1:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),s=function e(t,a,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,a);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,a,o)}if("value"in n)return n.value;var r=n.get;if(void 0!==r)return r.call(o)},d=a(3),c=o(d),u=a(0),f=o(u),p=a(4),m=o(p),g=a(7),v=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.title="提示",a.content=e||"",a.init(),a}return r(t,e),l(t,[{key:"init",value:function(){var e=c.default.render(g.ALERT_MODAL_TMPL,{id:this.id,title:this.title,content:this.content});(0,f.default)(this.container).append(e),this.bindEvent(),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,f.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this);var a=this.getModal();a.on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(m.default);t.default=v},10:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/too-large.png"},102:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/bfr-detect/demo-card-1.jpg"},103:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/bfr-detect/demo-card-2.jpg"},104:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/bfr-detect/demo-card-3.jpg"},105:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/bfr-detect/demo-card-4.png"},106:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/bfr-detect/demo-card-5.png"},107:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/bfr-detect/demo-card-6.jpg"},108:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/bfr-detect/demo-card-7.jpg"},109:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/technology/bfr-detect/demo-card-8.jpg"},148:function(e,t,a){e.exports=a(37)},2:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?m.default.noop:i,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"idcard",image:a,image_url:n}).success(r).fail(s)}function i(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?m.default.noop:i,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"bankcard",image:a,image_url:n}).success(r).fail(s)}function r(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?m.default.noop:i,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"commontext",image:a,image_url:n}).success(r).fail(s)}function l(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?m.default.noop:i,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"face",image:a,image_url:n}).success(r).fail(s)}function s(e){var t=e.image,a=void 0===t?null:t,o=e.imageUrl,n=void 0===o?null:o,i=e.success,r=void 0===i?m.default.noop:i,l=e.fail,s=void 0===l?m.default.noop:l;m.default.post("/aidemo",{type:"pornography",image:a,image_url:n}).success(r).fail(s)}function d(e){var t=e.imageUrl,a=void 0===t?null:t,o=e.type,n=e.success,i=void 0===n?m.default.noop:n,r=e.fail,l=void 0===r?m.default.noop:r;m.default.post("/aidemo",{action:"getHeader",type:o,image_url:a}).success(i).fail(l)}function c(e){var t=e.words,a=void 0===t?null:t,o=e.success,n=void 0===o?m.default.noop:o,i=e.fail,r=void 0===i?m.default.noop:i;m.default.post("/aidemo",{type:"wakescore",kw:a}).success(n).fail(r)}function u(e){var t=e.words,a=void 0===t?null:t,o=e.success,n=void 0===o?m.default.noop:o;window.open("/aidemo?type=wakedownload&kw="+a,"_blank"),n()}function f(e){var t=e.data,a=void 0===t?{}:t,o=e.success,n=void 0===o?m.default.noop:o,i=e.fail,r=void 0===i?m.default.noop:i;m.default.post("/aidemo",{type:"tts",speed:a.speed,vol:a.vol,person:a.person,text:a.text}).success(n).fail(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=n,t.scanBankCard=i,t.scanGeneralText=r,t.scanFace=l,t.scanPornography=s,t.getHeader=d,t.evaluateWakeWords=c,t.exportWakeWords=u,t.synthesizeSpeech=f;var p=a(0),m=o(p)},37:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=a(0),i=o(n),r=a(5),l=o(r),s=a(6),d=o(s),c=a(2),u=a(1),f=o(u);a(81);var p=[a(102),a(103),a(104),a(105),a(106),a(107),a(108),a(109)];(0,i.default)(document).ready(function(){(0,i.default)(".case-indicator > li").click(function(){var e=this;(0,i.default)(".case-indicator > li").each(function(t,a){(0,i.default)(a).toggleClass("active",t===(0,i.default)(e).index())}),(0,i.default)(".case-item").each(function(t,a){(0,i.default)(a).toggleClass("active",t===(0,i.default)(e).index())})}),(0,i.default)(window).scroll((0,l.default)(function(){(0,i.default)(document).scrollTop()>=100&&(0,i.default)(".tech-intro-detail").trigger("demo")},300)),(0,i.default)(".tech-intro-detail").one("demo",function(){(0,i.default)(".tech-intro-detail").addClass("scanned")});var e=!1,t=function(){e=!1,(0,i.default)("#demo-json > p").empty(),(0,i.default)("#demo-result .canvas-container").attr("class","canvas-container"),(0,i.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,i.default)("#demo-photo-upload  > input").val(""),(0,i.default)("#result-gallery").toggle(!1).find("ul").empty(),(0,i.default)("#face-details").hide().empty()},a=function(e){for(var t=(0,i.default)("#demo-result canvas"),a=t.attr("data-scale"),o=(0,i.default)("#demo-result canvas")[0].getContext("2d"),n=0,r=e.length;n<r;n++){var l=e[n],s=l.location;o.save(),o.beginPath(),o.lineWidth=4/a,o.fillStyle="transparent",o.strokeStyle="rgba(0, 115, 235, 0.8)",o.translate(s.left,s.top),o.rotate(l.rotation_angle/180*Math.PI),o.rect(0,0,s.width,s.height),o.fill(),o.stroke(),o.closePath(),o.restore()}},o=function(e,t){for(var a=(0,i.default)("#demo-result canvas"),o=a.attr("data-scale"),n=(0,i.default)("#demo-result canvas")[0].getContext("2d"),r=t?{x:e.location.left,y:e.location.top}:{x:0,y:0},l=t?e.rotation_angle:0,s=function(e,t){return 360*Math.atan(t/e)/(2*Math.PI)},d=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},c=0,u=e.landmark72.length;c<u;c++){var f=e.landmark72[c];n.beginPath(),n.lineWidth=1,n.fillStyle="rgba(0, 115, 235, 0.8)",n.strokeStyle="transparent";var p=(s(f.x-r.x,f.y-r.y)-l)/180*Math.PI,m=d(f.x-r.x,f.y-r.y);n.arc(m*Math.cos(p),m*Math.sin(p),2/o,0,2*Math.PI),n.fill(),n.stroke(),n.closePath()}},n=function(e){(0,i.default)("#result-gallery").toggle(e)},r=function(e){var t=(0,i.default)("#result-gallery > ul"),a=new Image;a.onload=function(){for(var o=0,n=e.result.length;o<n;o++){var r=e.result[o],l=(0,i.default)("<canvas>").attr("width",r.location.width).attr("height",r.location.height),s=l[0].getContext("2d");s.rotate(-r.rotation_angle*Math.PI/180),s.translate(-r.location.left,-r.location.top),s.drawImage(a,0,0);var d=(0,i.default)('<li><img src="'+l[0].toDataURL()+'"></li>');d.data("face",r).data("isAll",!1),t.append(d)}},a.src=t.find("img").eq(0).attr("src")},s=function(e,t){var a=(0,i.default)("#result-gallery > ul"),o=(0,i.default)('<li class="active"><img src="'+e+'"></li>');o.data("face",t).data("isAll",!0),a.empty().append(o)},u={age:{name:"年龄",transform:function(e){return Math.round(e)}},race:{name:"人种",transform:function(e){return{yellow:"黄种人",white:"白种人",black:"黑种人",arabs:"阿拉伯人"}[e]}},gender:{name:"性别",transform:function(e){return{male:"男性",female:"女性"}[e]}},expression:{name:"表情",transform:function(e){return{0:"不笑",1:"微笑",2:"大笑"}[e]}},glasses:{name:"眼镜",transform:function(e){return{0:"无眼镜",1:"普通眼镜",2:"墨镜"}[e]}}},m=function(e,t){var a=(0,i.default)("#face-details");return a.empty(),t?(a.hide(),!1):(a.show(),void Object.keys(u).forEach(function(t){var o=u[t].name,n=u[t].transform(e[t]);a.append((0,i.default)("<li></li>").html(o+" : "+n))}))},g=function(l,d,u){(0,i.default)("#demo-json > p").empty(),n(!1),(0,i.default)("#demo-result .canvas-container").attr("class","canvas-container loading"),(0,i.default)("#face-details").hide().empty();var p={success:function(t){return(0,i.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,i.default)("#demo-json > p").html(JSON.stringify(t,null,"\t")),(0,i.default)("#demo-result .canvas-container").removeClass("loading"),0===t.errno&&t.data.result_num?((0,i.default)("#demo-result .canvas-container").toggleClass("has-result",t.data.result_num>=1),s(d,t.data.result),1===t.data.result_num?(n(!1),o(t.data.result[0]),m(t.data.result[0],!1)):(n(!0),r(t.data),a(t.data.result),m(null,!0)),void(e=!1)):((0,i.default)("#demo-result .canvas-container").toggleClass("error-upload-fail",107===t.errno).toggleClass("error-timeout",28===t.errno).toggleClass("error-image-format",106===t.errno),(0,i.default)("#demo-result .canvas-container").toggleClass("error-no-result",!t.data||!t.data.result_num),(0,i.default)("#demo-result .canvas-container").empty(),e=!1,[106,107,28,0].indexOf(t.errno)===-1&&new f.default(t.msg),e)},fail:function(e){new f.default("接口发生错误："+e.status+" - "+e.statusText),t()}};"url"===l?p.imageUrl=u:"stream"===l&&(p.image=d),(0,c.scanFace)(p)};(0,i.default)("#demo-photo-upload  > input").change(function(a){if(""===(0,i.default)(this).val())return!1;if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var o=(0,i.default)(this)[0].files[0];new d.default({selector:"#demo-result .canvas-container",image:o,type:"stream",lazyRender:!0,success:function(e){(0,i.default)("#demo-photo-upload  > input").val(""),g("stream",e)},fail:t})}),(0,i.default)("#demo-photo-url").change(function(){(0,i.default)(".demo-card-list > li").removeClass("active")}),(0,i.default)("#scan-photo").click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");if((0,i.default)(this).hasClass("disabled")||!(0,i.default)("#demo-photo-url").val())return!1;e=!0,(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var a=(0,i.default)("#demo-photo-url").val();new d.default({selector:"#demo-result .canvas-container",image:a,type:"url",apiType:"face",success:function(e){g("url",e,a)},fail:t})}),(0,i.default)("#demo-photo-upload").click(function(){if((0,i.default)(this).hasClass("disabled"))return!1});var v=(0,i.default)(".demo-card-list > li");v.each(function(e,t){(0,i.default)(t).find("img").attr("src",""+p[e])}),v.click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,i.default)(".demo-card-list > li").removeClass("active"),(0,i.default)(this).addClass("active");var a=(0,i.default)(this).find("img").attr("src");(0,i.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new d.default({selector:"#demo-result .canvas-container",image:""+window.location.protocol+a,type:"url",toCheck:!1,success:function(e){g("url",e,a)},fail:t})}),(0,i.default)("#result-gallery").on("click","li",function(){(0,i.default)("#result-gallery li").removeClass("active");var e=(0,i.default)(this);e.addClass("active");var n=e.data("face"),r=e.data("isAll");new d.default({selector:"#demo-result .canvas-container",image:(0,i.default)(this).find("img").attr("src"),toCheck:!1,success:function(){r?a(n):o(n,!0),m(n,r)},fail:t})}),(0,i.default)(".demo-card-list > li")[0].click()})},6:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=a(0),l=o(r),s=a(2),d=a(1),c=o(d),u=a(9),f=a(8),p=a(10),m=function(){function e(t){var a=this,o=t.selector,i=t.image,r=t.type,s=t.apiType,d=t.toCheck,u=void 0===d||d,f=t.scale,p=void 0===f?1:f,m=t.success,g=t.fail;if(n(this,e),!(0,l.default)(o).context)throw"DemoCanvas：未寻找到容器!";if(this.container=(0,l.default)(o),this.type=r,this.scale=p,this.apiType=s,this.image=new Image,this.success=m||l.default.noop,this.fail=g||l.default.noop,this.image.onerror=function(){a.fail(),new c.default("图片加载失败，请重试")},u){var v={url:this.checkByUrl,stream:this.checkByStream}[this.type](i,s);l.default.when(v).then(function(e){a.image.onload=function(){a.render(!0)},a.image.src=e},function(e){a.image.onload=function(){a.render(!1)},a.image.src=e})}else this.image.onload=function(){a.render(!0)},this.image.src=i}return i(e,[{key:"checkByUrl",value:function(e,t){var a=l.default.Deferred();return(0,s.getHeader)({imageUrl:e,type:t,success:function(e){var t=e.data["Content-Type"],o=e.data["Content-Length"];return!t&&!o||0!==e.errno?void a.reject(u):/image\/(png|bmp|jpg|jpeg)/.test(t)?o>2097152?void a.reject(p):void a.resolve(e.data.image_data):void a.reject(f)},fail:function(){a.reject(u)}}),a.promise()}},{key:"checkByStream",value:function(e){var t=l.default.Deferred(),a=new FileReader;return e?(a.readAsDataURL(e),a.onload=function(a){return/image\/(png|bmp|jpeg)/.test(e.type)?e.size>2097152?(t.reject(p),!1):void t.resolve(a.target.result):(t.reject(f),!1)},a.onerror=function(){t.reject(u)},t.promise()):(t.reject(u),t.promise())}},{key:"render",value:function(e){var t=this.container.width(),a=this.container.height(),o=this.image.width,n=this.image.height,i=(0,l.default)("<canvas>您的浏览器暂时不支持canvas，请选用现代浏览器！</canvas>").attr("width",o).attr("height",n),r=i[0].getContext("2d");r.drawImage(this.image,0,0);var s=o/t,d=n/a,c=this.scale*(s>1||d>1?1/(s>=d?s:d):1);i.css({position:"relative",left:"50%",top:"50%","-webkit-transform":"translate(-50%, -50%) scale("+c+")","-moz-transform":"translate(-50%, -50%) scale("+c+")","-o-transform":"translate(-50%, -50%) scale("+c+")",transform:"translate(-50%, -50%) scale("+c+")"}),i.attr("data-scale",c),this.container.empty().append(i),e?this.success(this.image.src):this.fail()}}]),e}();t.default=m},8:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/image-format.png"},81:function(e,t){},9:function(e,t){e.exports="//ai.bdstatic.com/dist/1487644629/ai_images/error/not-found.png"}},[148]);