duAI([0],{1:function(e,t,n){var o,o;!function(t){e.exports=t()}(function(){return function e(t,n,i){function r(s,l){if(!n[s]){if(!t[s]){var c="function"==typeof o&&o;if(!l&&c)return o(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){var n=t[s][1][e];return r(n?n:e)},d,d.exports,e,t,n,i)}return n[s].exports}for(var a="function"==typeof o&&o,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){"use strict";function o(e,t){var o;if("/"==e.charAt(0))o=n.resolveInclude(e.replace(/^\/*/,""),t.root||"/",!0);else{if(!t.filename)throw new Error("`include` use relative path requires the 'filename' option.");o=n.resolveInclude(e,t.filename)}return o}function i(e,t){var o,i=e.filename,r=arguments.length>1;if(e.cache){if(!i)throw new Error("cache option requires a filename");if(o=n.cache.get(i))return o;r||(t=u.readFileSync(i).toString().replace(b,""))}else if(!r){if(!i)throw new Error("Internal EJS error: no file name or template provided");t=u.readFileSync(i).toString().replace(b,"")}return o=n.compile(t,e),e.cache&&n.cache.set(i,o),o}function r(e,t){var n=f.shallowCopy({},t);return n.filename=o(e,n),i(n)}function a(e,t){var n,i,r=f.shallowCopy({},t);n=o(e,r),i=u.readFileSync(n).toString().replace(b,""),r.filename=n;var a=new c(i,r);return a.generateSource(),{source:a.source,filename:n,template:i}}function s(e,t,n,o){var i=t.split("\n"),r=Math.max(o-3,0),a=Math.min(i.length,o+3),s=f.escapeXML(n),l=i.slice(r,a).map(function(e,t){var n=t+r+1;return(n==o?" >> ":"    ")+n+"| "+e}).join("\n");throw e.path=s,e.message=(s||"ejs")+":"+o+"\n"+l+"\n\n"+e.message,e}function l(e){return e.replace(/;(\s*$)/,"$1")}function c(e,t){t=t||{};var o={};this.templateText=e,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",this.dependencies=[],o.client=t.client||!1,o.escapeFunction=t.escape||f.escapeXML,o.compileDebug=t.compileDebug!==!1,o.debug=!!t.debug,o.filename=t.filename,o.delimiter=t.delimiter||n.delimiter||m,o.strict=t.strict||!1,o.context=t.context,o.cache=t.cache||!1,o.rmWhitespace=t.rmWhitespace,o.root=t.root,o.localsName=t.localsName||n.localsName||g,o.strict?o._with=!1:o._with="undefined"==typeof t._with||t._with,this.opts=o,this.regex=this.createRegex()}var u=e("fs"),d=e("path"),f=e("./utils"),p=!1,h=e("../package.json").version,m="%",g="locals",v="ejs",y="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",_=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename"],b=/^\uFEFF/;n.cache=f.cache,n.localsName=g,n.resolveInclude=function(e,t,n){var o=d.dirname,i=d.extname,r=d.resolve,a=r(n?t:o(t),e),s=i(e);return s||(a+=".ejs"),a},n.compile=function(e,t){var n;return t&&t.scope&&(p||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),p=!0),t.context||(t.context=t.scope),delete t.scope),n=new c(e,t),n.compile()},n.render=function(e,t,n){var o=t||{},r=n||{};return 2==arguments.length&&f.shallowCopyFromList(r,o,_),i(r,e)(o)},n.renderFile=function(){var e,t=Array.prototype.slice.call(arguments),n=t.shift(),o=t.pop(),r=t.shift()||{},a=t.pop()||{},s=_.slice();a=f.shallowCopy({},a),s.push("cache"),3==arguments.length&&(r.settings&&r.settings["view options"]?f.shallowCopyFromList(a,r.settings["view options"],s):f.shallowCopyFromList(a,r,s)),a.filename=n;try{e=i(a)(r)}catch(e){return o(e)}return o(null,e)},n.clearCache=function(){n.cache.reset()},c.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},c.prototype={createRegex:function(){var e=y,t=f.escapeRegExpChars(this.opts.delimiter);return e=e.replace(/%/g,t),new RegExp(e)},compile:function(){var e,t,n=this.opts,o="",i="",a=n.escapeFunction;this.source||(this.generateSource(),o+="  var __output = [], __append = __output.push.bind(__output);\n",n._with!==!1&&(o+="  with ("+n.localsName+" || {}) {\n",i+="  }\n"),i+='  return __output.join("");\n',this.source=o+this.source+i),e=n.compileDebug?"var __line = 1\n  , __lines = "+JSON.stringify(this.templateText)+"\n  , __filename = "+(n.filename?JSON.stringify(n.filename):"undefined")+";\ntry {\n"+this.source+"} catch (e) {\n  rethrow(e, __lines, __filename, __line);\n}\n":this.source,n.debug&&console.log(e),n.client&&(e="escape = escape || "+a.toString()+";\n"+e,n.compileDebug&&(e="rethrow = rethrow || "+s.toString()+";\n"+e)),n.strict&&(e='"use strict";\n'+e);try{t=new Function(n.localsName+", escape, include, rethrow",e)}catch(e){throw e instanceof SyntaxError&&(n.filename&&(e.message+=" in "+n.filename),e.message+=" while compiling ejs\n\n",e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n",e.message+="https://github.com/RyanZim/EJS-Lint"),e}if(n.client)return t.dependencies=this.dependencies,t;var l=function(e){var o=function(t,o){var i=f.shallowCopy({},e);return o&&(i=f.shallowCopy(i,o)),r(t,n)(i)};return t.apply(n.context,[e||{},a,o,s])};return l.dependencies=this.dependencies,l},generateSource:function(){var e=this.opts;e.rmWhitespace&&(this.templateText=this.templateText.replace(/\r/g,"").replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var t=this,o=this.parseTemplateText(),i=this.opts.delimiter;o&&o.length&&o.forEach(function(e,r){var s,l,c,u,d,p;if(0===e.indexOf("<"+i)&&0!==e.indexOf("<"+i+i)&&(l=o[r+2],l!=i+">"&&l!="-"+i+">"&&l!="_"+i+">"))throw new Error('Could not find matching close tag for "'+e+'".');return(c=e.match(/^\s*include\s+(\S+)/))&&(s=o[r-1],s&&(s=="<"+i||s=="<"+i+"-"||s=="<"+i+"_"))?(u=f.shallowCopy({},t.opts),d=a(c[1],u),p=t.opts.compileDebug?"    ; (function(){\n      var __line = 1\n      , __lines = "+JSON.stringify(d.template)+"\n      , __filename = "+JSON.stringify(d.filename)+";\n      try {\n"+d.source+"      } catch (e) {\n        rethrow(e, __lines, __filename, __line);\n      }\n    ; }).call(this)\n":"    ; (function(){\n"+d.source+"    ; }).call(this)\n",t.source+=p,void t.dependencies.push(n.resolveInclude(c[1],u.filename))):void t.scanLine(e)})},parseTemplateText:function(){for(var e,t=this.templateText,n=this.regex,o=n.exec(t),i=[];o;)e=o.index,0!==e&&(i.push(t.substring(0,e)),t=t.slice(e)),i.push(o[0]),t=t.slice(o[0].length),o=n.exec(t);return t&&i.push(t),i},scanLine:function(e){function t(){n.truncate?(e=e.replace(/^(?:\r\n|\r|\n)/,""),n.truncate=!1):n.opts.rmWhitespace&&(e=e.replace(/^\n/,"")),e&&(e=e.replace(/\\/g,"\\\\"),e=e.replace(/\n/g,"\\n"),e=e.replace(/\r/g,"\\r"),e=e.replace(/"/g,'\\"'),n.source+='    ; __append("'+e+'")\n')}var n=this,o=this.opts.delimiter,i=0;switch(i=e.split("\n").length-1,e){case"<"+o:case"<"+o+"_":this.mode=c.modes.EVAL;break;case"<"+o+"=":this.mode=c.modes.ESCAPED;break;case"<"+o+"-":this.mode=c.modes.RAW;break;case"<"+o+"#":this.mode=c.modes.COMMENT;break;case"<"+o+o:this.mode=c.modes.LITERAL,this.source+='    ; __append("'+e.replace("<"+o+o,"<"+o)+'")\n';break;case o+o+">":this.mode=c.modes.LITERAL,this.source+='    ; __append("'+e.replace(o+o+">",o+">")+'")\n';break;case o+">":case"-"+o+">":case"_"+o+">":this.mode==c.modes.LITERAL&&t(),this.mode=null,this.truncate=0===e.indexOf("-")||0===e.indexOf("_");break;default:if(this.mode){switch(this.mode){case c.modes.EVAL:case c.modes.ESCAPED:case c.modes.RAW:e.lastIndexOf("//")>e.lastIndexOf("\n")&&(e+="\n")}switch(this.mode){case c.modes.EVAL:this.source+="    ; "+e+"\n";break;case c.modes.ESCAPED:this.source+="    ; __append(escape("+l(e)+"))\n";break;case c.modes.RAW:this.source+="    ; __append("+l(e)+")\n";break;case c.modes.COMMENT:break;case c.modes.LITERAL:t()}}else t()}n.opts.compileDebug&&i&&(this.currentLine+=i,this.source+="    ; __line = "+this.currentLine+"\n")}},n.escapeXML=f.escapeXML,n.__express=n.renderFile,e.extensions&&(e.extensions[".ejs"]=function(e,t){var o=t||e.filename,i={filename:o,client:!0},r=u.readFileSync(o).toString(),a=n.compile(r,i);e._compile("module.exports = "+a.toString()+";",o)}),n.VERSION=h,n.name=v,"undefined"!=typeof window&&(window.ejs=n)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(e,t,n){"use strict";function o(e){return r[e]||e}var i=/[|\\{}()[\]^$+*?.]/g;n.escapeRegExpChars=function(e){return e?String(e).replace(i,"\\$&"):""};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},a=/[&<>\'"]/g,s='var _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n';n.escapeXML=function(e){return void 0==e?"":String(e).replace(a,o)},n.escapeXML.toString=function(){return Function.prototype.toString.call(this)+";\n"+s},n.shallowCopy=function(e,t){t=t||{};for(var n in t)e[n]=t[n];return e},n.shallowCopyFromList=function(e,t,n){return n.forEach(function(n){"undefined"!=typeof t[n]&&(e[n]=t[n])}),e},n.cache={_data:{},set:function(e,t){this._data[e]=t},get:function(e){return this._data[e]},reset:function(){this._data={}}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,n){(function(e){function t(e,t){for(var n=0,o=e.length-1;o>=0;o--){var i=e[o];"."===i?e.splice(o,1):".."===i?(e.splice(o,1),n++):n&&(e.splice(o,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function o(e,t){if(e.filter)return e.filter(t);for(var n=[],o=0;o<e.length;o++)t(e[o],o,e)&&n.push(e[o]);return n}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,r=function(e){return i.exec(e).slice(1)};n.resolve=function(){for(var n="",i=!1,r=arguments.length-1;r>=-1&&!i;r--){var a=r>=0?arguments[r]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,i="/"===a.charAt(0))}return n=t(o(n.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+n||"."},n.normalize=function(e){var i=n.isAbsolute(e),r="/"===a(e,-1);return e=t(o(e.split("/"),function(e){return!!e}),!i).join("/"),e||i||(e="."),e&&r&&(e+="/"),(i?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function o(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=o(e.split("/")),r=o(t.split("/")),a=Math.min(i.length,r.length),s=a,l=0;l<a;l++)if(i[l]!==r[l]){s=l;break}for(var c=[],l=s;l<i.length;l++)c.push("..");return c=c.concat(r.slice(s)),c.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var t=r(e),n=t[0],o=t[1];return n||o?(o&&(o=o.substr(0,o.length-1)),n+o):"."},n.basename=function(e,t){var n=r(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return r(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,e("_process"))},{_process:5}],5:[function(e,t,n){function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(d===setTimeout)return setTimeout(e,0);if((d===o||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){g&&h&&(g=!1,h.length?m=h.concat(m):v=-1,m.length&&l())}function l(){if(!g){var e=r(s);g=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var d,f,p=t.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:o}catch(e){d=o}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(e){f=i}}();var h,m=[],g=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||g||r(l)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],6:[function(e,t,n){t.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"2.5.4",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",contributors:["Timothy Gu <timothygu99@gmail.com> (https://timothygu.github.io)"],license:"Apache-2.0",main:"./lib/ejs.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{},devDependencies:{browserify:"^13.0.1",eslint:"^3.0.0","git-directory-deploy":"^1.5.1",istanbul:"~0.4.3",jake:"^8.0.0",jsdoc:"^3.4.0","lru-cache":"^4.0.1",mocha:"^3.0.2","uglify-js":"^2.6.2"},engines:{node:">=0.10.0"},scripts:{test:"mocha",lint:'eslint "**/*.js" Jakefile',coverage:"istanbul cover node_modules/mocha/bin/_mocha",doc:"jake doc",devdoc:"jake doc[dev]"}}},{}]},{},[1])(1)})},10:function(e,t){e.exports="/ai_dist/1484894584/ai_images/error/not-found.png"},11:function(e,t){e.exports="/ai_dist/1484894584/ai_images/error/too-large.png"},111:function(e,t){e.exports="/ai_dist/1484894584/ai_images/technology/ocr-general/demo-card-1.png"},112:function(e,t){e.exports="/ai_dist/1484894584/ai_images/technology/ocr-general/demo-card-2.png"},113:function(e,t){e.exports="/ai_dist/1484894584/ai_images/technology/ocr-general/demo-card-3.png"},114:function(e,t){e.exports="/ai_dist/1484894584/ai_images/technology/ocr-general/demo-card-4.png"},115:function(e,t){e.exports="/ai_dist/1484894584/ai_images/technology/ocr-general/demo-card-5.png"},116:function(e,t){e.exports="/ai_dist/1484894584/ai_images/technology/ocr-general/demo-card-6.jpg"},117:function(e,t){e.exports="/ai_dist/1484894584/ai_images/technology/ocr-general/demo-card-7.png"},118:function(e,t){e.exports="/ai_dist/1484894584/ai_images/technology/ocr-general/demo-card-8.png"},152:function(e,t,n){e.exports=n(45)},2:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MODAL_TMPL=['<div class="ai-modal" id="<%= id %>">','<header class="modal-header">',"<h3><%= title %></h3>",'<a class="modal-x"></a>',"</header>",'<section class="modal-content">',"</section>","</div>"].join(""),t.ALERT_MODAL_TMPL=['<div class="ai-modal alert" id="<%= id %>">','<header class="modal-header">',"<h3><%= title %></h3>",'<a class="modal-x"></a>',"</header>",'<section class="modal-content">','<div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;"><%=content%></div>','<div style="text-align: center;">','<button type="button" class="btn-normal cancel">确定</button>',"</div>","</section>","</div>"].join(""),t.CONFIRM_MODAL_TMPL=['<div class="ai-modal alert" id="<%= id %>">','<header class="modal-header">',"<h3><%= title %></h3>",'<a class="modal-x"></a>',"</header>",'<section class="modal-content">','<div style="text-align: center; color: #666;font-size: 14px;margin-bottom: 20px;"><%=content%></div>','<div style="text-align: center;">','<button type="button" class="btn-primary submit">确定</button>','<button type="button" class="btn-normal cancel" style="margin-left: 15px;">取消</button>',"</div>","</section>","</div>"].join("")},4:function(e,t,n){(function(t){function n(e,t,n){function o(t){var n=m,o=g;return m=g=void 0,T=t,y=e.apply(o,n)}function r(e){return T=e,_=setTimeout(u,t),k?o(e):y}function a(e){var n=e-b,o=e-T,i=t-n;return E?x(i,v-o):i}function c(e){var n=e-b,o=e-T;return void 0===b||n>=t||n<0||E&&o>=v}function u(){var e=j();return c(e)?d(e):void(_=setTimeout(u,a(e)))}function d(e){return _=void 0,C&&m?o(e):(m=g=void 0,y)}function f(){void 0!==_&&clearTimeout(_),T=0,m=b=g=_=void 0}function p(){return void 0===_?y:d(j())}function h(){var e=j(),n=c(e);if(m=arguments,g=this,b=e,n){if(void 0===_)return r(b);if(E)return _=setTimeout(u,t),o(b)}return void 0===_&&(_=setTimeout(u,t)),y}var m,g,v,y,_,b,T=0,k=!1,E=!1,C=!0;if("function"!=typeof e)throw new TypeError(l);return t=s(t)||0,i(n)&&(k=!!n.leading,E="maxWait"in n,v=E?w(s(n.maxWait)||0,t):v,C="trailing"in n?!!n.trailing:C),h.cancel=f,h.flush=p,h}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(l);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||r(e)&&b.call(e)==u}function s(e){if("number"==typeof e)return e;if(a(e))return c;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||h.test(e)?m(e.slice(2),n?2:8):f.test(e)?c:+e}var l="Expected a function",c=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,y=g||v||Function("return this")(),_=Object.prototype,b=_.toString,w=Math.max,x=Math.min,j=function(){return y.Date.now()};e.exports=o}).call(t,n(2))},45:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(0),r=o(i),a=n(4),s=o(a),l=n(8),c=o(l),u=n(6),d=n(5),f=o(d);n(84);var p=[n(111),n(112),n(113),n(114),n(115),n(116),n(117),n(118)];(0,r.default)(document).ready(function(){(0,r.default)(".case-indicator > li").click(function(){var e=this;(0,r.default)(".case-indicator > li").each(function(t,n){(0,r.default)(n).toggleClass("active",t===(0,r.default)(e).index())}),(0,r.default)(".case-item").each(function(t,n){(0,r.default)(n).toggleClass("active",t===(0,r.default)(e).index())})}),(0,r.default)(window).scroll((0,s.default)(function(){(0,r.default)(document).scrollTop()>=100&&(0,r.default)(".tech-intro-detail").trigger("demo")},300)),(0,r.default)(".tech-intro-detail").one("demo",function(){(0,r.default)(".original-card").addClass("scanning"),setTimeout(function(){(0,r.default)(".original-card").removeClass("scanning").addClass("scanned"),(0,r.default)(".scan-result").addClass("scanned")},3e3)});var e=!1,t=function(){(0,r.default)("#demo-json > p").empty(),(0,r.default)("#demo-result .result-background").attr("class","result-background"),(0,r.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,r.default)("#demo-photo-upload  > input").val(""),e=!1},n=function(n,o,i){(0,r.default)("#demo-result .result-background").attr("class","result-background loading"),(0,r.default)("#demo-result tbody").empty();var a={success:function(t){if((0,r.default)("#demo-photo-upload, #scan-photo").removeClass("disabled"),(0,r.default)("#demo-json > p").html(JSON.stringify(t,null,"\t")),(0,r.default)("#demo-result .result-background").removeClass("loading"),0!==t.errno)return(0,r.default)("#demo-result .result-background").toggleClass("has-result man female",!1).toggleClass("error-upload-fail",107===t.errno).toggleClass("error-timeout",28===t.errno).toggleClass("error-image-format",106===t.errno),e=!1,[106,107,28].indexOf(t.errno)===-1&&new f.default(t.msg),!1;for(var n=!t.data.words_result_num,o=0,i=t.data.words_result_num;o<i;o++){var a=t.data.words_result[o];(0,r.default)("#demo-result tbody").append(["<tr>","<td>"+(o+1)+"</td>","<td>"+a.words+"</td>","<td>"+a.location.left+"</td>","<td>"+a.location.top+"</td>","<td>"+a.location.width+"</td>","<td>"+a.location.height+"</td>","</tr>"].join(""))}(0,r.default)("#demo-result .result-background").toggleClass("has-result",!n).toggleClass("error-no-result",n),e=!1},fail:function(e){new f.default("接口发生错误："+e.status+" - "+e.statusText),t()}};"url"===n?a.imageUrl=i:"stream"===n&&(a.image=o),(0,u.scanGeneralText)(a)};(0,r.default)("#demo-photo-upload  > input").change(function(o){if(""===(0,r.default)(this).val())return!1;if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,r.default)("#demo-photo-upload, #scan-photo").addClass("disabled");var i=(0,r.default)(this)[0].files[0];new c.default({selector:"#demo-origin",image:i,type:"stream",success:function(e){(0,r.default)("#demo-photo-upload  > input").val(""),n("stream",e)},fail:t})}),(0,r.default)("#demo-photo-url").change(function(){(0,r.default)(".demo-card-list > li").removeClass("active")}),(0,r.default)("#scan-photo").click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");if((0,r.default)(this).hasClass("disabled")||!(0,r.default)("#demo-photo-url").val())return!1;e=!0;var o=(0,r.default)("#demo-photo-url").val();(0,r.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new c.default({selector:"#demo-origin",image:o,type:"url",apiType:"commontext",success:function(e){n("url",e,o)},fail:t})}),(0,r.default)("#demo-photo-upload").click(function(){if((0,r.default)(this).hasClass("disabled"))return!1});var o=(0,r.default)(".demo-card-list > li");o.each(function(e,t){(0,r.default)(t).find("img").attr("src",window.location.protocol+"//"+window.location.host+p[e])}),o.click(function(){if(e)return void new f.default("操作正在进行中，请稍候再试！");e=!0,(0,r.default)(".demo-card-list > li").removeClass("active"),(0,r.default)(this).addClass("active");var o=(0,r.default)(this).find("img").attr("src");(0,r.default)("#demo-photo-upload, #scan-photo").addClass("disabled"),new c.default({selector:"#demo-origin",image:o,type:"url",toCheck:!1,success:function(e){n("url",e,o)},fail:t})}),(0,r.default)(".demo-card-list > li")[0].click()})},5:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)},c=n(1),u=o(c),d=n(0),f=o(d),p=n(7),h=o(p),m=n(3),g=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.title="提示",n.content=e||"",n.init(),n}return a(t,e),s(t,[{key:"init",value:function(){var e=u.default.render(m.ALERT_MODAL_TMPL,{id:this.id,title:this.title,content:this.content});(0,f.default)(this.container).append(e),this.bindEvent(),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.getModal().hide().remove(),(0,f.default)("body").removeClass("modal-show")}},{key:"bindEvent",value:function(){var e=this;l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"bindEvent",this).call(this);var n=this.getModal();n.on("click","button.cancel",function(t){t.preventDefault(),e.hide()})}}]),t}(h.default);t.default=g},6:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"idcard",image:n,image_url:i}).success(a).fail(l)}function r(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"bankcard",image:n,image_url:i}).success(a).fail(l)}function a(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"commontext",image:n,image_url:i}).success(a).fail(l)}function s(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"face",image:n,image_url:i}).success(a).fail(l)}function l(e){var t=e.image,n=void 0===t?null:t,o=e.imageUrl,i=void 0===o?null:o,r=e.success,a=void 0===r?h.default.noop:r,s=e.fail,l=void 0===s?h.default.noop:s;h.default.post("/aidemo",{type:"pornography",image:n,image_url:i}).success(a).fail(l)}function c(e){var t=e.imageUrl,n=void 0===t?null:t,o=e.type,i=e.success,r=void 0===i?h.default.noop:i,a=e.fail,s=void 0===a?h.default.noop:a;h.default.post("/aidemo",{action:"getHeader",type:o,image_url:n}).success(r).fail(s)}function u(e){var t=e.words,n=void 0===t?null:t,o=e.success,i=void 0===o?h.default.noop:o,r=e.fail,a=void 0===r?h.default.noop:r;h.default.post("/aidemo",{type:"wakescore",kw:n}).success(i).fail(a)}function d(e){var t=e.words,n=void 0===t?null:t,o=e.success,i=void 0===o?h.default.noop:o;window.open("/aidemo?type=wakedownload&kw="+n,"_blank"),i()}function f(e){var t=e.data,n=void 0===t?{}:t,o=e.success,i=void 0===o?h.default.noop:o,r=e.fail,a=void 0===r?h.default.noop:r;h.default.post("/aidemo",{type:"tts",speed:n.speed,vol:n.vol,person:n.person,text:n.text}).success(i).fail(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.scanIDCard=i,t.scanBankCard=r,t.scanGeneralText=a,t.scanFace=s,t.scanPornography=l,t.getHeader=c,t.evaluateWakeWords=u,t.exportWakeWords=d,t.synthesizeSpeech=f;var p=n(0),h=o(p)},7:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(3),s=n(1),l=o(s),c=n(0),u=o(c),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",n=arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i(this,e),this.container=t,this.id=n||"modal-"+(new Date).getTime(),this.title=o,this.isOpen=!1}return r(e,[{key:"init",value:function(){var e=l.default.render(a.MODAL_TMPL,{id:this.id,title:this.title});(0,u.default)(this.container).append(e),this.bindEvent()}},{key:"setContent",value:function(e){this.getModal().find(".modal-content").html(e)}},{key:"show",value:function(){this.isOpen=!0,this.getModal().show(),(0,u.default)("body").addClass("modal-show")}},{key:"hide",value:function(){this.isOpen=!1,this.getModal().hide(),(0,u.default)("body").removeClass("modal-show")}},{key:"destroy",value:function(){this.hide(),this.getModal().remove()}},{key:"getModal",value:function(){return(0,u.default)("#"+this.id)}},{key:"bindEvent",value:function(){function e(){(0,u.default)(".ai-modal").trigger("close")}var t=this;this.getModal().on("click",".modal-x",function(){t.hide()}),this.getModal().on("click",function(e){e.stopPropagation()}),this.getModal().on("close",function(){t.isOpen&&t.hide()}),(0,u.default)("body").off("close",e).on("click",e)}}]),e}();t.default=d},8:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),s=o(a),l=n(6),c=n(5),u=o(c),d=n(10),f=n(9),p=n(11),h=function(){function e(t){var n=this,o=t.selector,r=t.image,a=t.type,l=t.apiType,c=t.toCheck,d=void 0===c||c,f=t.scale,p=void 0===f?1:f,h=t.success,m=t.fail;if(i(this,e),!(0,s.default)(o).context)throw"DemoCanvas：未寻找到容器!";if(this.container=(0,s.default)(o),this.type=a,this.scale=p,this.apiType=l,this.image=new Image,this.success=h||s.default.noop,this.fail=m||s.default.noop,this.image.onerror=function(){n.fail(),new u.default("图片加载失败，请重试")},d){var g={url:this.checkByUrl,stream:this.checkByStream}[this.type](r,l);s.default.when(g).then(function(e){n.image.onload=function(){n.render(!0)},n.image.src=e},function(e){n.image.onload=function(){n.render(!1)},n.image.src=e})}else this.image.onload=function(){n.render(!0)},this.image.src=r}return r(e,[{key:"checkByUrl",value:function(e,t){var n=s.default.Deferred();return(0,l.getHeader)({imageUrl:e,type:t,success:function(e){var t=e.data["Content-Type"],o=e.data["Content-Length"];return!t&&!o||0!==e.errno?void n.reject(d):/image\/(png|bmp|jpg|jpeg)/.test(t)?o>2097152?void n.reject(p):void n.resolve(e.data.image_data):void n.reject(f)},fail:function(){n.reject(d)}}),n.promise()}},{key:"checkByStream",value:function(e){var t=s.default.Deferred(),n=new FileReader;return e?(n.readAsDataURL(e),n.onload=function(n){return/image\/(png|bmp|jpeg)/.test(e.type)?e.size>2097152?(t.reject(p),!1):void t.resolve(n.target.result):(t.reject(f),!1)},n.onerror=function(){t.reject(d)},t.promise()):(t.reject(d),t.promise())}},{key:"render",value:function(e){var t=this.container.width(),n=this.container.height(),o=this.image.width,i=this.image.height,r=(0,s.default)("<canvas>您的浏览器暂时不支持canvas，请选用现代浏览器！</canvas>").attr("width",o).attr("height",i),a=r[0].getContext("2d");a.drawImage(this.image,0,0);var l=o/t,c=i/n,u=this.scale*(l>1||c>1?1/(l>=c?l:c):1);r.css({position:"relative",left:"50%",top:"50%","-webkit-transform":"translate(-50%, -50%) scale("+u+")","-moz-transform":"translate(-50%, -50%) scale("+u+")","-o-transform":"translate(-50%, -50%) scale("+u+")",transform:"translate(-50%, -50%) scale("+u+")"}),r.attr("data-scale",u),this.container.empty().append(r),e?this.success(this.image.src):this.fail()}}]),e}();t.default=h},84:function(e,t){},9:function(e,t){e.exports="/ai_dist/1484894584/ai_images/error/image-format.png"}},[152]);