duAI([16],{16:function(e,t,n){"use strict";function r(e){var t=e.image,n=void 0===t?null:t,r=e.imageUrl,o=void 0===r?null:r,i=e.success,a=void 0===i?h.default.noop:i,l=e.fail,s=void 0===l?h.default.noop:l;h.default.post("/aidemo",{type:"idcard",image:n,image_url:o}).success(a).fail(s)}function o(e){var t=e.image,n=void 0===t?null:t,r=e.imageUrl,o=void 0===r?null:r,i=e.success,a=void 0===i?h.default.noop:i,l=e.fail,s=void 0===l?h.default.noop:l;h.default.post("/aidemo",{type:"bankcard",image:n,image_url:o}).success(a).fail(s)}function i(e){var t=e.image,n=void 0===t?null:t,r=e.imageUrl,o=void 0===r?null:r,i=e.success,a=void 0===i?h.default.noop:i,l=e.fail,s=void 0===l?h.default.noop:l;h.default.post("/aidemo",{type:"commontext",image:n,image_url:o}).success(a).fail(s)}function a(e){var t=e.image,n=void 0===t?null:t,r=e.imageUrl,o=void 0===r?null:r,i=e.success,a=void 0===i?h.default.noop:i,l=e.fail,s=void 0===l?h.default.noop:l;h.default.post("/aidemo",{type:"face",image:n,image_url:o}).success(a).fail(s)}function l(e){var t=e.image,n=void 0===t?null:t,r=e.imageUrl,o=void 0===r?null:r,i=e.success,a=void 0===i?h.default.noop:i,l=e.fail,s=void 0===l?h.default.noop:l;h.default.post("/aidemo",{type:"pornography",image:n,image_url:o}).success(a).fail(s)}function s(e){var t=e.image,n=void 0===t?null:t,r=e.imageUrl,o=void 0===r?null:r,i=e.success,a=void 0===i?h.default.noop:i,l=e.fail,s=void 0===l?h.default.noop:l;h.default.post("/aidemo",{type:"terror",image:n,image_url:o}).success(a).fail(s)}function c(e){var t=e.imageUrl,n=void 0===t?null:t,r=e.type,o=e.success,i=void 0===o?h.default.noop:o,a=e.fail,l=void 0===a?h.default.noop:a;h.default.post("/aidemo",{action:"getHeader",type:r,image_url:n}).success(i).fail(l)}function u(e){var t=e.words,n=void 0===t?null:t,r=e.success,o=void 0===r?h.default.noop:r,i=e.fail,a=void 0===i?h.default.noop:i;h.default.post("/aidemo",{type:"wakescore",kw:n}).success(o).fail(a)}function f(e){var t=e.words,n=void 0===t?null:t,r=e.success,o=void 0===r?h.default.noop:r;window.open("/aidemo?type=wakedownload&kw="+n,"_blank"),o()}function d(e){var t=e.data,n=void 0===t?{}:t,r=e.success,o=void 0===r?h.default.noop:r,i=e.fail,a=void 0===i?h.default.noop:i;h.default.post("/aidemo",{type:"tts",speed:n.speed,vol:n.vol,person:n.person,text:n.text}).success(o).fail(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=r,t.scanBankCard=o,t.scanGeneralText=i,t.scanFace=a,t.scanPornography=l,t.scanTerrorgraphy=s,t.getHeader=c,t.evaluateWakeWords=u,t.exportWakeWords=f,t.synthesizeSpeech=d;var p=n(2),h=function(e){return e&&e.__esModule?e:{default:e}}(p)},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},c=n(2),u=r(c),f=n(44),d=r(f),p=n(31),h=r(p),m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.title="提示",n.content=e||"",n.init(),n}return a(t,e),l(t,[{key:"init",value:function(){var e=(0,h.default)({id:this.id,title:this.title,content:this.content});(0,u.default)(this.container).append(e),this.bindEvent(),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,u.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this),this.getModal().on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(d.default);t.default=m},31:function(e,t,n){var r=n(21);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,o){var i,a,l=null!=t?t:e.nullContext||{},s=n.helperMissing,c=e.escapeExpression;return'<div class="ai-modal alert" id="'+c((a=null!=(a=n.id||(null!=t?t.id:t))?a:s,"function"==typeof a?a.call(l,{name:"id",hash:{},data:o}):a))+'">\r\n    <header class="modal-header">\r\n        <h3>'+c((a=null!=(a=n.title||(null!=t?t.title:t))?a:s,"function"==typeof a?a.call(l,{name:"title",hash:{},data:o}):a))+'</h3>\r\n        <a class="modal-x"></a>\r\n    </header>\r\n    <section class="modal-content">\r\n        <div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;">\r\n            '+(null!=(a=null!=(a=n.content||(null!=t?t.content:t))?a:s,i="function"==typeof a?a.call(l,{name:"content",hash:{},data:o}):a)?i:"")+'\r\n        </div>\r\n        <div style="text-align: center;">\r\n            <button type="button" class="btn-normal cancel">确定</button>\r\n        </div>\r\n    </section>\r\n</div>\r\n'},useData:!0})},341:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(568),i=r(o),a=n(2),l=r(a),s=n(16),c=n(20),u=r(c),f=n(365),d=r(f);n(609),n(647),(0,l.default)(document).ready(function(){(0,l.default)(".case-indicator > li").click(function(){var e=this;(0,l.default)(".case-indicator > li").each(function(t,n){(0,l.default)(n).toggleClass("active",t===(0,l.default)(e).index())}),(0,l.default)(".case-item").each(function(t,n){(0,l.default)(n).toggleClass("active",t===(0,l.default)(e).index())})}),(0,l.default)(".rule-toggle").click(function(){var e=(0,l.default)(".demo-rule").hasClass("collapsed");(0,l.default)(".demo-rule").toggleClass("collapsed",!e),(0,l.default)(this).html(e?"收起内容":"展开内容")});var e=function(e,t){var n={star:0,desc:"",length:0,zl:0},r=0,o="得分低于60, 不可用作唤醒词",i="",a=["拍照","茄子","增大音量","减小音量","播放","停止","暂停","上一首","下一首","打开电灯","关闭电灯","增大亮度","减小亮度","打开手电筒","关闭手电筒"];if(l.default.inArray(e,a)>=0)n.zl=1,r=5;else if(/\d+/.test(e))r=1;else{for(var s=!1,c=0,u=0,f=0;f<e.length;f++)null!==e.charAt(f).match(/^[a-zA-Z]$/)&&c++,null===e.charAt(f).match(/^[\u4e00-\u9fa5a-zA-Z]$/)&&u++;c>2&&(s=!0,r=1,i="一个唤醒词最多只能包含两个英文字母，且唤醒词中暂时不支持英文单词，请更换别的唤醒词。"),u>0&&(s=!0,r=1,i="唤醒词不可包含汉字和英文字母以外的字符，请使用相应的汉字作为唤醒词，如非常6+7，建议您使用“非常六加七”"),!1===s&&(4===e.length?t<500?r=5:t>=500&&t<1e3?r=4:t>=1e3<1500&&(r=3):3!==e.length&&5!==e.length||(r=t<500?3:t>=500&&t<1e3?2:1))}switch(r){case 5:o="非常适用于作为唤醒词。";break;case 4:o="可以用作唤醒词，唤醒词只允许3-5个字, 并且推荐4个字。";break;case 3:o="不建议用作唤醒词，唤醒词只允许3-5个字, 并且推荐4个字。";break;default:o="不可用作唤醒词，唤醒词只允许3-5个字, 并且推荐4个字。"}return""!==i&&(o=i),n.star=r,n.desc=o,n.length=e.length,n},t=0,n=['<li data-star="<%=score.star%>">','<div class="word"><%=word%></div>','<div class="clear-float">','<div class="word-score">',"<% for (var i = 1; i <= 5; i++) { %>","<div class=\"<%=score.star >= i ? 'star' : 'no-star'%>\"></div>","<%}%>","</div>",'<div class="word-desc"><%=score.desc%></div>',"</div>","</li>"].join(""),r=function(e,t){(0,l.default)("#evaluated-words").append(i.default.render(n,{word:e,score:t}))};(0,l.default)("#evaluate").click(function(){var n=(0,l.default)("#demo-wake-word").val();if(!n)return!1;(0,s.evaluateWakeWords)({words:n,success:function(n){return 1===n.errno?(new u.default("访问接口出错，请登陆百度账号后再尝试该项服务！"),!1):0!==n.errno?(new u.default("访问接口出错，请稍候再试！"),!1):((0,l.default)("#demo-wake-word").val(""),(0,l.default)(".evaluated-result").show(),t=n.data.sCount,void Object.keys(n.data.sData).forEach(function(t){var o=e(t,n.data.sData[t]);r(t,o)}))}})}),(0,l.default)("#evaluated-words").on("click","li",function(){if((0,l.default)(this).attr("data-star")<=3)return new u.default("你好，只能导出三星以上唤醒词！"),!1;(0,l.default)(this).toggleClass("checked")}),(0,l.default)("#export-evaluated-words").click(function(e){e.stopPropagation();var n=(0,l.default)("#evaluated-words").find("li.checked");if(n.length>10)return new u.default("对不起，您只能选择10个以内的唤醒词！"),!1;if(0===n.length)return new u.default("对不起，您未选择任何唤醒词！"),!1;var r=["拍照","茄子","增大音量","减小音量","播放","停止","暂停","上一首","下一首","打开电灯","关闭电灯","增大亮度","减小亮度","打开手电筒","关闭手电筒"],o=0,i=0,a=[];return n.each(function(e,t){var n=(0,l.default)(t).find(".word").html();a.push(n),o+=2===n.length?1:0,i+=-1===r.indexOf(n)?1:0}),o>3?(new u.default("对不起，您最多可以设置3个两字指令唤醒词!"),!1):i>3?(new u.default("对不起，您最多可以设置3个自定义唤醒词!"),!1):t>=3?(new u.default("对不起，您本月已导出3次唤醒词，无法再使用该服务!"),!1):(a=a.join(","),void new d.default("确认导出","您好，您本次选择提的交唤醒词是["+a+" ]，您本月还有"+(3-t)+"次提交机会，请确认提交！",function(){(0,s.exportWakeWords)({words:a}),(0,l.default)(".evaluated-result").hide(),(0,l.default)("#evaluated-words").empty()}))})})},365:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},c=n(2),u=r(c),f=n(44),d=r(f),p=n(654),h=r(p),m=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.default.noop;o(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.title=e||"确认信息",a.content=n||"",a.confirm=r,a.init(),a}return a(t,e),l(t,[{key:"init",value:function(){var e=(0,h.default)({id:this.id,title:this.title,content:this.content});(0,u.default)(this.container).append(e),this.bindEvent(),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,u.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this);var n=this.getModal();n.on("click","button.cancel",function(t){t.preventDefault(),e.hide()}),n.on("click","button.submit",function(t){t.preventDefault(),e.confirm(),e.hide()})}}]),t}(d.default);t.default=m},568:function(e,t,n){var r,r;!function(t){e.exports=t()}(function(){return function e(t,n,o){function i(l,s){if(!n[l]){if(!t[l]){var c="function"==typeof r&&r;if(!s&&c)return r(l,!0);if(a)return r(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[l]={exports:{}};t[l][0].call(f.exports,function(e){var n=t[l][1][e];return i(n||e)},f,f.exports,e,t,n,o)}return n[l].exports}for(var a="function"==typeof r&&r,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(e,t,n){"use strict";function r(e,t){var r;if("/"==e.charAt(0))r=n.resolveInclude(e.replace(/^\/*/,""),t.root||"/",!0);else{if(!t.filename)throw new Error("`include` use relative path requires the 'filename' option.");r=n.resolveInclude(e,t.filename)}return r}function o(e,t){var r,o=e.filename,i=arguments.length>1;if(e.cache){if(!o)throw new Error("cache option requires a filename");if(r=n.cache.get(o))return r;i||(t=a(o).toString().replace(w,""))}else if(!i){if(!o)throw new Error("Internal EJS error: no file name or template provided");t=a(o).toString().replace(w,"")}return r=n.compile(t,e),e.cache&&n.cache.set(o,r),r}function i(e,t,n){var r;try{r=o(e)(t)}catch(e){return n(e)}return n(null,r)}function a(e){return n.fileLoader(e)}function l(e,t){var n=h.shallowCopy({},t);return n.filename=r(e,n),o(n)}function s(e,t){var n,o,i=h.shallowCopy({},t);n=r(e,i),o=a(n).toString().replace(w,""),i.filename=n;var l=new f(o,i);return l.generateSource(),{source:l.source,filename:n,template:o}}function c(e,t,n,r,o){var i=t.split("\n"),a=Math.max(r-3,0),l=Math.min(i.length,r+3),s=o(n),c=i.slice(a,l).map(function(e,t){var n=t+a+1;return(n==r?" >> ":"    ")+n+"| "+e}).join("\n");throw e.path=s,e.message=(s||"ejs")+":"+r+"\n"+c+"\n\n"+e.message,e}function u(e){return e.replace(/;(\s*$)/,"$1")}function f(e,t){t=t||{};var r={};this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",this.dependencies=[],r.client=t.client||!1,r.escapeFunction=t.escape||h.escapeXML,r.compileDebug=!1!==t.compileDebug,r.debug=!!t.debug,r.filename=t.filename,r.delimiter=t.delimiter||n.delimiter||g,r.strict=t.strict||!1,r.context=t.context,r.cache=t.cache||!1,r.rmWhitespace=t.rmWhitespace,r.root=t.root,r.localsName=t.localsName||n.localsName||y,r.strict?r._with=!1:r._with=void 0===t._with||t._with,this.opts=r,this.regex=this.createRegex()}var d=e("fs"),p=e("path"),h=e("./utils"),m=!1,v=e("../package.json").version,g="%",y="locals",_=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename"],b=_.concat("cache"),w=/^\uFEFF/;n.cache=h.cache,n.fileLoader=d.readFileSync,n.localsName=y,n.resolveInclude=function(e,t,n){var r=p.dirname,o=p.extname,i=p.resolve,a=i(n?t:r(t),e);return o(e)||(a+=".ejs"),a},n.compile=function(e,t){var n;return t&&t.scope&&(m||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),m=!0),t.context||(t.context=t.scope),delete t.scope),n=new f(e,t),n.compile()},n.render=function(e,t,n){var r=t||{},i=n||{};return 2==arguments.length&&h.shallowCopyFromList(i,r,_),o(i,e)(r)},n.renderFile=function(){var e,t=arguments[0],n=arguments[arguments.length-1],r={filename:t};return arguments.length>2?(e=arguments[1],3===arguments.length?e.settings&&e.settings["view options"]?h.shallowCopyFromList(r,e.settings["view options"],b):h.shallowCopyFromList(r,e,b):h.shallowCopy(r,arguments[2]),r.filename=t):e={},i(r,e,n)},n.clearCache=function(){n.cache.reset()},f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var e="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",t=h.escapeRegExpChars(this.opts.delimiter);return e=e.replace(/%/g,t),new RegExp(e)},compile:function(){var e,t,n=this.opts,r="",o="",i=n.escapeFunction;this.source||(this.generateSource(),r+="  var __output = [], __append = __output.push.bind(__output);\n",!1!==n._with&&(r+="  with ("+n.localsName+" || {}) {\n",o+="  }\n"),o+='  return __output.join("");\n',this.source=r+this.source+o),e=n.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+(n.filename?JSON.stringify(n.filename):"undefined")+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n":this.source,n.debug&&console.log(e),n.client&&(e="escapeFn = escapeFn || "+i.toString()+";\n"+e,n.compileDebug&&(e="rethrow = rethrow || "+c.toString()+";\n"+e)),n.strict&&(e='"use strict";\n'+e);try{t=new Function(n.localsName+", escapeFn, include, rethrow",e)}catch(e){throw e instanceof SyntaxError&&(n.filename&&(e.message+=" in "+n.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint"),e}if(n.client)return t.dependencies=this.dependencies,t;var a=function(e){var r=function(t,r){var o=h.shallowCopy({},e);return r&&(o=h.shallowCopy(o,r)),l(t,n)(o)};return t.apply(n.context,[e||{},i,r,c])};return a.dependencies=this.dependencies,a},generateSource:function(){this.opts.rmWhitespace&&(this.templateText=this.templateText.replace(/\r/g,"").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var e=this,t=this.parseTemplateText(),r=this.opts.delimiter;t&&t.length&&t.forEach(function(o,i){var a,l,c,u,f,d;if(0===o.indexOf("<"+r)&&0!==o.indexOf("<"+r+r)&&(l=t[i+2])!=r+">"&&l!="-"+r+">"&&l!="_"+r+">")throw new Error('Could not find matching close tag for "'+o+'".');if((c=o.match(/^\s*include\s+(\S+)/))&&(a=t[i-1])&&(a=="<"+r||a=="<"+r+"-"||a=="<"+r+"_"))return u=h.shallowCopy({},e.opts),f=s(c[1],u),d=e.opts.compileDebug?"    ; (function(){\n      var __line = 1\n      , __lines = "+JSON.stringify(f.template)+"\n      , __filename = "+JSON.stringify(f.filename)+";\n      try {\n"+f.source+"      } catch (e) {\n        rethrow(e, __lines, __filename, __line);\n      }\n    ; }).call(this)\n":"    ; (function(){\n"+f.source+"    ; }).call(this)\n",e.source+=d,void e.dependencies.push(n.resolveInclude(c[1],u.filename));e.scanLine(o)})},parseTemplateText:function(){for(var e,t=this.templateText,n=this.regex,r=n.exec(t),o=[];r;)e=r.index,0!==e&&(o.push(t.substring(0,e)),t=t.slice(e)),o.push(r[0]),t=t.slice(r[0].length),r=n.exec(t);return t&&o.push(t),o},scanLine:function(e){function t(){n.truncate?(e=e.replace(/^(?:\r\n|\r|\n)/,""),n.truncate=!1):n.opts.rmWhitespace&&(e=e.replace(/^\n/,"")),e&&(e=e.replace(/\\/g,"\\\\"),e=e.replace(/\n/g,"\\n"),e=e.replace(/\r/g,"\\r"),e=e.replace(/"/g,'\\"'),n.source+='    ; __append("'+e+'")\n')}var n=this,r=this.opts.delimiter,o=0;switch(o=e.split("\n").length-1,e){case"<"+r:case"<"+r+"_":this.mode=f.modes.EVAL;break;case"<"+r+"=":this.mode=f.modes.ESCAPED;break;case"<"+r+"-":this.mode=f.modes.RAW;break;case"<"+r+"#":this.mode=f.modes.COMMENT;break;case"<"+r+r:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+e.replace("<"+r+r,"<"+r)+'")\n';break;case r+r+">":this.mode=f.modes.LITERAL,this.source+='    ; __append("'+e.replace(r+r+">",r+">")+'")\n';break;case r+">":case"-"+r+">":case"_"+r+">":this.mode==f.modes.LITERAL&&t(),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+e+"\n";break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+u(e)+"))\n";break;case f.modes.RAW:this.source+="    ; __append("+u(e)+")\n";break;case f.modes.COMMENT:break;case f.modes.LITERAL:t()}}else t()}n.opts.compileDebug&&o&&(this.currentLine+=o,this.source+="    ; __line = "+this.currentLine+"\n")}},n.escapeXML=h.escapeXML,n.__express=n.renderFile,e.extensions&&(e.extensions[".ejs"]=function(e,t){var r=t||e.filename,o={filename:r,client:!0},i=a(r).toString(),l=n.compile(i,o);e._compile("module.exports = "+l.toString()+";",r)}),n.VERSION=v,n.name="ejs","undefined"!=typeof window&&(window.ejs=n)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(e,t,n){"use strict";function r(e){return o[e]||e}n.escapeRegExpChars=function(e){return e?String(e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"):""};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};n.escapeXML=function(e){return void 0==e?"":String(e).replace(/[&<>\'"]/g,r)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'},n.shallowCopy=function(e,t){t=t||{};for(var n in t)e[n]=t[n];return e},n.shallowCopyFromList=function(e,t,n){for(var r=0;r<n.length;r++){var o=n[r];void 0!==t[o]&&(e[o]=t[o])}return e},n.cache={_data:{},set:function(e,t){this._data[e]=t},get:function(e){return this._data[e]},reset:function(){this._data={}}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,n){(function(e){function t(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};n.resolve=function(){for(var n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,o="/"===a.charAt(0))}return n=t(r(n.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+n||"."},n.normalize=function(e){var o=n.isAbsolute(e),i="/"===a(e,-1);return e=t(r(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var o=r(e.split("/")),i=r(t.split("/")),a=Math.min(o.length,i.length),l=a,s=0;s<a;s++)if(o[s]!==i[s]){l=s;break}for(var c=[],s=l;s<o.length;s++)c.push("..");return c=c.concat(i.slice(l)),c.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var t=i(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},n.basename=function(e,t){var n=i(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return i(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,e("_process"))},{_process:5}],5:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function l(){v&&h&&(v=!1,h.length?m=h.concat(m):g=-1,m.length&&s())}function s(){if(!v){var e=i(l);v=!0;for(var t=m.length;t;){for(h=m,m=[];++g<t;)h&&h[g].run();g=-1,t=m.length}h=null,v=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var f,d,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var h,m=[],v=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||v||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],6:[function(e,t,n){t.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"2.5.5",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",contributors:["Timothy Gu <timothygu99@gmail.com> (https://timothygu.github.io)"],license:"Apache-2.0",main:"./lib/ejs.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{},devDependencies:{browserify:"^13.0.1",eslint:"^3.0.0","git-directory-deploy":"^1.5.1",istanbul:"~0.4.3",jake:"^8.0.0",jsdoc:"^3.4.0","lru-cache":"^4.0.1",mocha:"^3.0.2","uglify-js":"^2.6.2"},engines:{node:">=0.10.0"},scripts:{test:"mocha",lint:'eslint "**/*.js" Jakefile',coverage:"istanbul cover node_modules/mocha/bin/_mocha",doc:"jake doc",devdoc:"jake doc[dev]"}}},{}]},{},[1])(1)})},609:function(e,t){},647:function(e,t,n){e.exports=n.p+"./../../template/cloud/speech-wake.html"},654:function(e,t,n){var r=n(21);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,o){var i,a,l=null!=t?t:e.nullContext||{},s=n.helperMissing,c=e.escapeExpression;return'<div class="ai-modal alert" id="'+c((a=null!=(a=n.id||(null!=t?t.id:t))?a:s,"function"==typeof a?a.call(l,{name:"id",hash:{},data:o}):a))+'">\r\n    <header class="modal-header">\r\n        <h3>'+c((a=null!=(a=n.title||(null!=t?t.title:t))?a:s,"function"==typeof a?a.call(l,{name:"title",hash:{},data:o}):a))+'</h3>\r\n        <a class="modal-x"></a>\r\n    </header>\r\n    <section class="modal-content">\r\n        <div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;">\r\n            '+(null!=(a=null!=(a=n.content||(null!=t?t.content:t))?a:s,i="function"==typeof a?a.call(l,{name:"content",hash:{},data:o}):a)?i:"")+'\r\n        </div>\r\n        <div style="text-align: center;">\r\n            <button type="button" class="btn-primary submit">确定</button>\r\n            <button type="button" class="btn-normal cancel" style="margin-left: 15px;">取消</button>\r\n        </div>\r\n    </section>\r\n</div>\r\n'},useData:!0})},768:function(e,t,n){e.exports=n(341)}},[768]);