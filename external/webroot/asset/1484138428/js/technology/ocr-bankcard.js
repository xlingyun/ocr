webpackJsonp([48],{0:function(e,t,n){e.exports=n(242)},20:function(e,t,n){var o,o;!function(t){e.exports=t()}(function(){return function e(t,n,i){function r(s,l){if(!n[s]){if(!t[s]){var c="function"==typeof o&&o;if(!l&&c)return o(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){var n=t[s][1][e];return r(n?n:e)},d,d.exports,e,t,n,i)}return n[s].exports}for(var a="function"==typeof o&&o,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){"use strict";function o(e,t){var o;if("/"==e.charAt(0))o=n.resolveInclude(e.replace(/^\/*/,""),t.root||"/",!0);else{if(!t.filename)throw new Error("`include` use relative path requires the 'filename' option.");o=n.resolveInclude(e,t.filename)}return o}function i(e,t){var o,i=e.filename,r=arguments.length>1;if(e.cache){if(!i)throw new Error("cache option requires a filename");if(o=n.cache.get(i))return o;r||(t=u.readFileSync(i).toString().replace(_,""))}else if(!r){if(!i)throw new Error("Internal EJS error: no file name or template provided");t=u.readFileSync(i).toString().replace(_,"")}return o=n.compile(t,e),e.cache&&n.cache.set(i,o),o}function r(e,t){var n=f.shallowCopy({},t);return n.filename=o(e,n),i(n)}function a(e,t){var n,i,r=f.shallowCopy({},t);n=o(e,r),i=u.readFileSync(n).toString().replace(_,""),r.filename=n;var a=new c(i,r);return a.generateSource(),{source:a.source,filename:n,template:i}}function s(e,t,n,o){var i=t.split("\n"),r=Math.max(o-3,0),a=Math.min(i.length,o+3),s=f.escapeXML(n),l=i.slice(r,a).map(function(e,t){var n=t+r+1;return(n==o?" >> ":"    ")+n+"| "+e}).join("\n");throw e.path=s,e.message=(s||"ejs")+":"+o+"\n"+l+"\n\n"+e.message,e}function l(e){return e.replace(/;(\s*$)/,"$1")}function c(e,t){t=t||{};var o={};this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",this.dependencies=[],o.client=t.client||!1,o.escapeFunction=t.escape||f.escapeXML,o.compileDebug=t.compileDebug!==!1,o.debug=!!t.debug,o.filename=t.filename,o.delimiter=t.delimiter||n.delimiter||m,o.strict=t.strict||!1,o.context=t.context,o.cache=t.cache||!1,o.rmWhitespace=t.rmWhitespace,o.root=t.root,o.localsName=t.localsName||n.localsName||g,o.strict?o._with=!1:o._with="undefined"==typeof t._with||t._with,this.opts=o,this.regex=this.createRegex()}var u=e("fs"),d=e("path"),f=e("./utils"),p=!1,h=e("../package.json").version,m="%",g="locals",v="ejs",y="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",b=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename"],_=/^\uFEFF/;n.cache=f.cache,n.localsName=g,n.resolveInclude=function(e,t,n){var o=d.dirname,i=d.extname,r=d.resolve,a=r(n?t:o(t),e),s=i(e);return s||(a+=".ejs"),a},n.compile=function(e,t){var n;return t&&t.scope&&(p||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),p=!0),t.context||(t.context=t.scope),delete t.scope),n=new c(e,t),n.compile()},n.render=function(e,t,n){var o=t||{},r=n||{};return 2==arguments.length&&f.shallowCopyFromList(r,o,b),i(r,e)(o)},n.renderFile=function(){var e,t=Array.prototype.slice.call(arguments),n=t.shift(),o=t.pop(),r=t.shift()||{},a=t.pop()||{},s=b.slice();a=f.shallowCopy({},a),s.push("cache"),3==arguments.length&&(r.settings&&r.settings["view options"]?f.shallowCopyFromList(a,r.settings["view options"],s):f.shallowCopyFromList(a,r,s)),a.filename=n;try{e=i(a)(r)}catch(e){return o(e)}return o(null,e)},n.clearCache=function(){n.cache.reset()},c.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},c.prototype={createRegex:function(){var e=y,t=f.escapeRegExpChars(this.opts.delimiter);return e=e.replace(/%/g,t),new RegExp(e)},compile:function(){var e,t,n=this.opts,o="",i="",a=n.escapeFunction;this.source||(this.generateSource(),o+="  var __output = [], __append = __output.push.bind(__output);\n",n._with!==!1&&(o+="  with ("+n.localsName+" || {}) {\n",i+="  }\n"),i+='  return __output.join("");\n',this.source=o+this.source+i),e=n.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+(n.filename?JSON.stringify(n.filename):"undefined")+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line);\n}\n":this.source,n.debug&&console.log(e),n.client&&(e="escape = escape || "+a.toString()+";\n"+e,n.compileDebug&&(e="rethrow = rethrow || "+s.toString()+";\n"+e)),n.strict&&(e='"use strict";\n'+e);try{t=new Function(n.localsName+", escape, include, rethrow",e)}catch(e){throw e instanceof SyntaxError&&(n.filename&&(e.message+=" in "+n.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint"),e}if(n.client)return t.dependencies=this.dependencies,t;var l=function(e){var o=function(t,o){var i=f.shallowCopy({},e);return o&&(i=f.shallowCopy(i,o)),r(t,n)(i)};return t.apply(n.context,[e||{},a,o,s])};return l.dependencies=this.dependencies,l},generateSource:function(){var e=this.opts;e.rmWhitespace&&(this.templateText=this.templateText.replace(/\r/g,"").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var t=this,o=this.parseTemplateText(),i=this.opts.delimiter;o&&o.length&&o.forEach(function(e,r){var s,l,c,u,d,p;if(0===e.indexOf("<"+i)&&0!==e.indexOf("<"+i+i)&&(l=o[r+2],l!=i+">"&&l!="-"+i+">"&&l!="_"+i+">"))throw new Error('Could not find matching close tag for "'+e+'".');return(c=e.match(/^\s*include\s+(\S+)/))&&(s=o[r-1],s&&(s=="<"+i||s=="<"+i+"-"||s=="<"+i+"_"))?(u=f.shallowCopy({},t.opts),d=a(c[1],u),p=t.opts.compileDebug?"    ; (function(){\n      var __line = 1\n      , __lines = "+JSON.stringify(d.template)+"\n      , __filename = "+JSON.stringify(d.filename)+";\n      try {\n"+d.source+"      } catch (e) {\n        rethrow(e, __lines, __filename, __line);\n      }\n    ; }).call(this)\n":"    ; (function(){\n"+d.source+"    ; }).call(this)\n",t.source+=p,void t.dependencies.push(n.resolveInclude(c[1],u.filename))):void t.scanLine(e)})},parseTemplateText:function(){for(var e,t=this.templateText,n=this.regex,o=n.exec(t),i=[];o;)e=o.index,0!==e&&(i.push(t.substring(0,e)),t=t.slice(e)),i.push(o[0]),t=t.slice(o[0].length),o=n.exec(t);return t&&i.push(t),i},scanLine:function(e){function t(){n.truncate?(e=e.replace(/^(?:\r\n|\r|\n)/,""),n.truncate=!1):n.opts.rmWhitespace&&(e=e.replace(/^\n/,"")),e&&(e=e.replace(/\\/g,"\\\\"),e=e.replace(/\n/g,"\\n"),e=e.replace(/\r/g,"\\r"),e=e.replace(/"/g,'\\"'),n.source+='    ; __append("'+e+'")\n')}var n=this,o=this.opts.delimiter,i=0;switch(i=e.split("\n").length-1,e){case"<"+o:case"<"+o+"_":this.mode=c.modes.EVAL;break;case"<"+o+"=":this.mode=c.modes.ESCAPED;break;case"<"+o+"-":this.mode=c.modes.RAW;break;case"<"+o+"#":this.mode=c.modes.COMMENT;break;case"<"+o+o:this.mode=c.modes.LITERAL,this.source+='    ; __append("'+e.replace("<"+o+o,"<"+o)+'")\n';break;case o+o+">":this.mode=c.modes.LITERAL,this.source+='    ; __append("'+e.replace(o+o+">",o+">")+'")\n';break;case o+">":case"-"+o+">":case"_"+o+">":this.mode==c.modes.LITERAL&&t(),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case c.modes.EVAL:case c.modes.ESCAPED:case c.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case c.modes.EVAL:this.source+="    ; "+e+"\n";break;case c.modes.ESCAPED:this.source+="    ; __append(escape("+l(e)+"))\n";break;case c.modes.RAW:this.source+="    ; __append("+l(e)+")\n";break;case c.modes.COMMENT:break;case c.modes.LITERAL:t()}}else t()}n.opts.compileDebug&&i&&(this.currentLine+=i,this.source+="    ; __line = "+this.currentLine+"\n")}},n.escapeXML=f.escapeXML,n.__express=n.renderFile,e.extensions&&(e.extensions[".ejs"]=function(e,t){var o=t||e.filename,i={filename:o,client:!0},r=u.readFileSync(o).toString(),a=n.compile(r,i);e._compile("module.exports = "+a.toString()+";",o)}),n.VERSION=h,n.name=v,"undefined"!=typeof window&&(window.ejs=n)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(e,t,n){"use strict";function o(e){return r[e]||e}var i=/[|\\{}()[\]^$+*?.]/g;n.escapeRegExpChars=function(e){return e?String(e).replace(i,"\\$&"):""};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},a=/[&<>\'"]/g,s='var _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n';n.escapeXML=function(e){return void 0==e?"":String(e).replace(a,o)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+";\n"+s},n.shallowCopy=function(e,t){t=t||{};for(var n in t)e[n]=t[n];return e},n.shallowCopyFromList=function(e,t,n){return n.forEach(function(n){"undefined"!=typeof t[n]&&(e[n]=t[n])}),e},n.cache={_data:{},set:function(e,t){this._data[e]=t},get:function(e){return this._data[e]},reset:function(){this._data={}}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,n){(function(e){function t(e,t){for(var n=0,o=e.length-1;o>=0;o--){var i=e[o];"."===i?e.splice(o,1):".."===i?(e.splice(o,1),n++):n&&(e.splice(o,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function o(e,t){if(e.filter)return e.filter(t);for(var n=[],o=0;o<e.length;o++)t(e[o],o,e)&&n.push(e[o]);return n}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(e){return i.exec(e).slice(1)};n.resolve=function(){for(var n="",i=!1,r=arguments.length-1;r>=-1&&!i;r--){var a=r>=0?arguments[r]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,i="/"===a.charAt(0))}return n=t(o(n.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+n||"."},n.normalize=function(e){var i=n.isAbsolute(e),r="/"===a(e,-1);return e=t(o(e.split("/"),function(e){return!!e}),!i).join("/"),e||i||(e="."),e&&r&&(e+="/"),(i?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function o(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=o(e.split("/")),r=o(t.split("/")),a=Math.min(i.length,r.length),s=a,l=0;l<a;l++)if(i[l]!==r[l]){s=l;break}for(var c=[],l=s;l<i.length;l++)c.push("..");return c=c.concat(r.slice(s)),c.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var t=r(e),n=t[0],o=t[1];return n||o?(o&&(o=o.substr(0,o.length-1)),n+o):"."},n.basename=function(e,t){var n=r(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return r(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,e("_process"))},{_process:5}],5:[function(e,t,n){function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(d===setTimeout)return setTimeout(e,0);if((d===o||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){g&&h&&(g=!1,h.length?m=h.concat(m):v=-1,m.length&&l())}function l(){if(!g){var e=r(s);g=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var d,f,p=t.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:o}catch(e){d=o}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(e){f=i}}();var h,m=[],g=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||g||r(l)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],6:[function(e,t,n){t.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"2.5.4",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",contributors:["Timothy Gu <timothygu99@gmail.com> (https://timothygu.github.io)"],license:"Apache-2.0",main:"./lib/ejs.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{},devDependencies:{browserify:"^13.0.1",eslint:"^3.0.0","git-directory-deploy":"^1.5.1",istanbul:"~0.4.3",jake:"^8.0.0",jsdoc:"^3.4.0","lru-cache":"^4.0.1",mocha:"^3.0.2","uglify-js":"^2.6.2"},engines:{node:">=0.10.0"},scripts:{test:"mocha",lint:'eslint "**/*.js" Jakefile',coverage:"istanbul cover node_modules/mocha/bin/_mocha",doc:"jake doc",devdoc:"jake doc[dev]"}}},{}]},{},[1])(1)})},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(25),s=n(20),l=o(s),c=n(18),u=o(c),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",n=arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i(this,e),this.container=t,this.id=n||"modal-"+(new Date).getTime(),this.title=o,this.isOpen=!1}return r(e,[{key:"init",value:function(){var e=l.default.render(a.MODAL_TMPL,{id:this.id,title:this.title});(0,u.default)(this.container).append(e),this.bindEvent()}},{key:"setContent",value:function(e){this.getModal().find(".modal-content").html(e)}},{key:"show",value:function(){this.isOpen=!0,this.getModal().show(),(0,u.default)("body").addClass("modal-show")}},{key:"hide",value:function(){this.isOpen=!1,this.getModal().hide(),(0,u.default)("body").removeClass("modal-show")}},{key:"destroy",value:function(){this.hide(),this.getModal().remove()}},{key:"getModal",value:function(){return(0,u.default)("#"+this.id)}},{key:"bindEvent",value:function(){function e(){(0,u.default)(".ai-modal").trigger("close")}var t=this;this.getModal().on("click",".modal-x",function(){t.hide()}),this.getModal().on("click",function(e){e.stopPropagation()}),this.getModal().on("close",function(){t.isOpen&&t.hide()}),(0,u.default)("body").off("close",e).on("click",e)}}]),e}();t.default=d},25:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MODAL_TMPL=['<div class="ai-modal" id="<%= id %>">','<header class="modal-header">',"<h3><%= title %></h3>",'<a class="modal-x"></a>',"</header>",'<section class="modal-content">',"</section>","</div>"].join(""),t.ALERT_MODAL_TMPL=['<div class="ai-modal alert" id="<%= id %>">','<header class="modal-header">',"<h3><%= title %></h3>",'<a class="modal-x"></a>',"</header>",'<section class="modal-content">','<div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;"><%=content%></div>','<div style="text-align: center;">','<button type="button" class="btn-normal cancel">确定</button>',"</div>","</section>","</div>"].join(""),t.CONFIRM_MODAL_TMPL=['<div class="ai-modal alert" id="<%= id %>">','<header class="modal-header">',"<h3><%= title %></h3>",'<a class="modal-x"></a>',"</header>",'<section class="modal-content">','<div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;"><%=content%></div>','<div style="text-align: center;">','<button type="button" class="btn-primary submit">确定</button>','<button type="button" class="btn-normal cancel" style="margin-left: 15px;">取消</button>',"</div>","</section>","</div>"].join("")},126:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(18),s=o(a),l=n(127),c=n(128),u=o(c),d=function(){function e(t){var n=this,o=t.selector,r=t.image,a=t.type,l=t.apiType,c=t.toCheck,d=void 0===c||c,f=t.scale,p=void 0===f?1:f,h=t.success,m=t.fail;if(i(this,e),!(0,s.default)(o).context)throw"DemoCanvas：未寻找到容器!";if(this.container=(0,s.default)(o),this.type=a,this.scale=p,this.apiType=l,this.image=new Image,this.success=h||s.default.noop,this.fail=m||s.default.noop,this.image.onerror=function(){n.fail(),new u.default("图片加载失败，请重试")},d){var g={url:this.checkByUrl,stream:this.checkByStream}[this.type](r,l);s.default.when(g).then(function(e){n.image.onload=function(){n.render(!0)},n.image.src=e},function(e){n.image.onload=function(){n.render(!1)},n.image.src=e})}else this.image.onload=function(){n.render(!0)},this.image.src=r}return r(e,[{key:"checkByUrl",value:function(e,t){var n=s.default.Deferred();return(0,l.getHeader)({imageUrl:e,type:t,success:function(e){var t=e.data["Content-Type"],o=e.data["Content-Length"];return!t&&!o||0!==e.errno?void n.reject("/ai_images/error/not-found.png"):/image\/(png|bmp|jpg|jpeg)/.test(t)?o>2097152?void n.reject("/ai_images/error/too-large.png"):void n.resolve(e.data.image_data):void n.reject("/ai_images/error/image-format.png")},fail:function(){n.reject("/ai_images/error/not-found.png")}}),n.promise()}},{key:"checkByStream",value:function(e){var t=s.default.Deferred(),n=new FileReader;return e?(n.readAsDataURL(e),n.onload=function(n){return/image\/(png|bmp|jpeg)/.test(e.type)?e.size>2097152?(t.reject("/ai_images/error/too-large.png"),!1):void t.resolve(n.target.result):(t.reject("/ai_images/error/image-format.png"),!1)},n.onerror=function(){t.reject("/ai_images/error/not-found.png")},t.promise()):(t.reject("/ai_images/error/not-found.png"),t.promise())}},{key:"render",value:function(e){var t=this.container.width(),n=this.container.height(),o=this.image.width,i=this.image.height,r=(0,s.default)("<canvas>您的浏览器暂时不支持canvas，请选用现代浏览器！</canvas>").attr("width",o).attr("height",i),a=r[0].getContext("2d");a.drawImage(this.image,0,0);var l=o/t,c=i/n,u=this.scale*(l>1||c>1?1/(l>=c?l:c):1);r.css({position:"relative",left:"50%",top:"50%","-webkit-transform":"translate(-50%, -50%) scale("+u+")","-moz-transform":"translate(-50%, -50%) scale("+u+")","-o-transform":"translate(-50%, -50%) scale("+u+")",transform:"translate(-50%, -50%) scale("+u+")"}),r.attr("data-scale",u),this.container.empty().append(r),e?this.success(this.image.src):this.fail()}}]),e}();t.default=d},127:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"idcard",image:n,image_url:i}).success(a).fail(l)}function r(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"bankcard",image:n,image_url:i}).success(a).fail(l)}function a(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"commontext",image:n,image_url:i}).success(a).fail(l)}function s(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"face",image:n,image_url:i}).success(a).fail(l)}function l(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"pornography",image:n,image_url:i}).success(a).fail(l)}function c(e){var t=e.imageUrl,n=void 0===t?null:t,o=e.type,i=e.success,r=void 0===i?h.default.noop:i,a=e.fail,s=void 0===a?h.default.noop:a;h.default.post("/aidemo",{action:"getHeader",type:o,image_url:n}).success(r).fail(s)}function u(e){var t=e.words,n=void 0===t?null:t,o=e.success,i=void 0===o?h.default.noop:o,r=e.fail,a=void 0===r?h.default.noop:r;h.default.post("/aidemo",{type:"wakescore",kw:n}).success(i).fail(a)}function d(e){var t=e.words,n=void 0===t?null:t,o=e.success,i=void 0===o?h.default.noop:o;window.open("/aidemo?type=wakedownload&kw="+n,"_blank"),i()}function f(e){var t=e.data,n=void 0===t?{}:t,o=e.success,i=void 0===o?h.default.noop:o,r=e.fail,a=void 0===r?h.default.noop:r;h.default.post("/aidemo",{type:"tts",speed:n.speed,vol:n.vol,person:n.person,text:n.text}).success(i).fail(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=i,t.scanBankCard=r,t.scanGeneralText=a,t.scanFace=s,t.scanPornography=l,t.getHeader=c,t.evaluateWakeWords=u,t.exportWakeWords=d,t.synthesizeSpeech=f;var p=n(18),h=o(p)},128:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)},c=n(20),u=o(c),d=n(18),f=o(d),p=n(24),h=o(p),m=n(25),g=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.title="提示",n.content=e||"",n.init(),n}return a(t,e),s(t,[{key:"init",value:function(){var e=u.default.render(m.ALERT_MODAL_TMPL,{id:this.id,title:this.title,content:this.content});(0,f.default)(this.container).append(e),this.bindEvent(),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,f.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this);var n=this.getModal();n.on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(h.default);t.default=g},242:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(18),r=o(i),a=n(126),s=o(a),l=n(127),c=n(128),u=o(c);(0,r.default)(document).ready(function(){(0,r.default)(".case-indicator > li").click(function(){var e=this;(0,r.default)(".case-indicator > li").each(function(t,n){(0,r.default)(n).toggleClass("active",t===(0,r.default)(e).index())}),(0,r.default)(".case-item").each(function(t,n){(0,r.default)(n).toggleClass("active",t===(0,r.default)(e).index())})}),(0,r.default)(window).scroll(function(){(0,r.default)(document).scrollTop()>=100&&(0,r.default)(".tech-intro-detail").trigger("demo")}),(0,r.default)(".tech-intro-detail").one("demo",function(){(0,r.default)(".original-card").addClass("scanning"),setTimeout(function(){(0,r.default)(".original-card").removeClass("scanning").addClass("scanned"),(0,r.default)(".scan-result").addClass("scanned")},3e3)});var e=!1,t=function(){(0,r.default)("#demo-json > p").empty(),(0,r.default)("#demo-photo-upload  > input").val(""),(0,r.default)("#demo-result .result-background").attr("class","result-background"),(0,r.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),e=!1},n=function(n,o,i){(0,r.default)("#demo-json > p").empty(),(0,r.default)("#demo-result .result-background").attr("class","result-background loading");var a={success:function(t){if((0,r.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,r.default)("#demo-json > p").html(JSON.stringify(t,null,"\t")),(0,r.default)("#demo-result .result-background").removeClass("loading"),0!==t.errno)return(0,r.default)("#demo-result .result-background").toggleClass("has-result man female",!1).toggleClass("error-upload-fail",107===t.errno).toggleClass("error-timeout",28===t.errno).toggleClass("error-no-result",216631===t.errno||216630===t.errno).toggleClass("error-image-format",106===t.errno),e=!1,[106,107,28,216631,216630].indexOf(t.errno)===-1&&new u.default(t.msg),!1;var n=!t.data.result.bank_card_number;(0,r.default)("#demo-result .result-background").find(".bank-card-num").html(t.data.result.bank_card_number),(0,r.default)("#demo-result .result-background").toggleClass("has-result",!n).toggleClass("error-no-result",n),e=!1},fail:function(e){new u.default("接口发生错误："+e.status+" - "+e.statusText),t()}};"url"===n?a.imageUrl=i:"stream"===n&&(a.image=o),(0,l.scanBankCard)(a)};(0,r.default)("#demo-photo-upload  > input").change(function(o){if(""===(0,r.default)(this).val())return!1;if(e)return void new u.default("操作正在进行中，请稍候再试！");e=!0,(0,r.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var i=(0,r.default)(this)[0].files[0];new s.default({selector:"#demo-origin",image:i,type:"stream",success:function(e){(0,r.default)("#demo-photo-upload  > input").val(""),n("stream",e)},fail:t})}),(0,r.default)("#demo-photo-url").change(function(){(0,r.default)(".demo-card-list > li").removeClass("active")}),(0,r.default)("#scan-photo").click(function(){if(e)return void new u.default("操作正在进行中，请稍候再试！");if((0,r.default)(this).hasClass("disabled")||!(0,r.default)("#demo-photo-url").val())return!1;e=!0,(0,r.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var o=(0,r.default)("#demo-photo-url").val();new s.default({selector:"#demo-origin",image:o,type:"url",apiType:"bankcard",success:function(e){n("url",e,o)},fail:t})}),(0,r.default)("#demo-photo-upload").click(function(){if((0,r.default)(this).hasClass("disabled"))return!1}),(0,r.default)(".demo-card-list > li").click(function(){if(e)return void new u.default("操作正在进行中，请稍候再试！");e=!0,(0,r.default)(".demo-card-list > li").removeClass("active"),(0,r.default)(this).addClass("active");var o=window.location.protocol+"//"+window.location.host+(0,r.default)(this).find("img").attr("src");(0,r.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new s.default({selector:"#demo-origin",image:o,type:"url",toCheck:!1,success:function(e){n("url",e,o)},fail:t})}),(0,r.default)(".demo-card-list > li")[0].click()})}});