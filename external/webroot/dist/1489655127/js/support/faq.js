duAI([8],{126:function(e,t){},15:function(e,t,n){"use strict";var r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),s=i.default;!function(e,t,n,r){var i="docAccordionMenu",s={speed:300,showDelay:0,hideDelay:0,singleOpen:!0,clickEffect:!0},a=function(t,n){this.element=t,this.settings=e.extend({},s,n),this._defaults=s,this._name=i,this.init()};e.extend(a.prototype,{init:function(){this.openSubmenu(),this.submenuIndicators(),s.clickEffect&&this.addClickEffect()},openSubmenu:function(){e(this.element).children("ul").find("li").bind("click touchstart",function(n){if(n.stopPropagation(),n.preventDefault(),e(this).children(".submenu").length>0){if("none"===e(this).children(".submenu").css("display"))return e(this).children(".submenu").delay(s.showDelay).slideDown(s.speed),s.singleOpen&&e(this).siblings().children(".submenu").slideUp(s.speed),!1;e(this).children(".submenu").delay(s.hideDelay).slideUp(s.speed),e(this).children(".submenu").siblings("a").hasClass("submenu-indicator-minus")}t.location.href=e(this).children("a").attr("href")})},submenuIndicators:function(){e(this.element).find(".submenu").length},addClickEffect:function(){var t=void 0,n=void 0,r=void 0,i=void 0;e(this.element).find("a").bind("click touchstart",function(s){e(".ink").remove(),0===e(this).children(".ink").length&&e(this).prepend('<span class="ink"></span>'),t=e(this).find(".ink"),t.removeClass("animate-ink"),t.height()||t.width()||(n=Math.max(e(this).outerWidth(),e(this).outerHeight()),t.css({height:n,width:n})),r=s.pageX-e(this).offset().left-t.width()/2,i=s.pageY-e(this).offset().top-t.height()/2,t.css({top:i+"px",left:r+"px"}).addClass("animate-ink")})}}),e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new a(this,t))}),this}}(s,window,document)},16:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;k(e),v(e).then(function(){if(t){var e=(0,a.default)("#"+t);e.length>0&&e[0].scrollIntoView()}})};var s=n(0),a=r(s),l=n(19),o=r(l);n(17);var u=n(18),c=r(u);n(15);var h="",p=(0,a.default)("#md_container"),f=(0,a.default)(".doc-breadcrumb .crumb"),d=(0,a.default)(".sidebar li"),g=function(){p.find("p").each(function(e){(0,a.default)(this).attr("id","Q"+(e+1))})},m=["简介","接入指南","鉴权认证机制","常见问题","账号问题","接口调用","其他"],b=function(){p.find("h1, h2").each(function(e,t){var n=(0,a.default)(t);n.attr("id",n.text())}),p.find("a[href]").each(function(e,t){var n=(0,a.default)(t);0!==n.attr("href").indexOf("#")&&n.attr("target","_blank")})},v=function(e){var t=a.default.Deferred();return a.default.ajax({type:"GET",url:"/data/"+e+".md?v="+Date.now(),success:function(n){h=e,p.html((0,o.default)(n)),(0,a.default)("code").addClass("prettyprint"),PR.prettyPrint(),b(),e.indexOf("FAQ")>0&&g(),t.resolve()}}),t},y=function(e){var t=[];e.forEach(function(e,n){n>0&&(t=[].concat(i(t),["<li>",'    <span class="divider">&gt;</span>',"</li>"])),t=[].concat(i(t),["<li>","    <span>"+e+"</span>","</li>"])}),f.html(t.join("\r"))},x=function(e){var t=(0,a.default)("#"+e);t.length>0&&t.first()[0].scrollIntoView({block:"start",behavior:"smooth"})},k=function(e){var t=(0,a.default)("[data-md="+e+"]").first(),n=[];t.parents(".submenu").css({display:"block"}).end().parents(".non-leaf, .root").andSelf().find(">a").each(function(e,t){n.push((0,a.default)(t).text().trim())}),y(n),t.addClass("active"),t.parents(".root").addClass("active")};(0,a.default)("#jquery-accordion-menu").docAccordionMenu(),function(){(0,a.default)(".sidebar > h1").click((0,c.default)(function(e){var t=(0,a.default)(e.currentTarget);t.find(".pm-button").toggleClass("active"),t.next().find(">ul").toggle(300)},300,{leading:!0,tailing:!1}))}(),function(){(0,a.default)(".leaf, .sdk-node, .guide-node").filter("[data-md]").on("click",function(e){var t=(0,a.default)(e.currentTarget),n=(0,a.default)(this);if(!n.hasClass("active")){var r=t.attr("data-md");d.removeClass("active"),n.addClass("active"),n.closest(".root").addClass("active");var i=[];n.parents(".non-leaf, .root").andSelf().find(">a").each(function(e,t){i.push((0,a.default)(t).text().trim())}),y(i);var s=n.text().trim();r!==h?v(r).then(function(){m.indexOf(s)<0&&x(s)}):x(s)}})}()},17:function(e,t){window.PR_SHOULD_USE_CONTINUATION=!0;var n,r;!function(){function e(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return t=c[n],t?t:"0"<=n&&n<="7"?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);var t=String.fromCharCode(e);return"\\"===t||"-"===t||"]"===t||"^"===t?"\\"+t:t}function r(e){var r=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),i=[],s="^"===r[0],a=["["];s&&a.push("^");for(var l=s?1:0,o=r.length;l<o;++l){var u=r[l];if(/\\[bdsw]/i.test(u))a.push(u);else{var c,h=t(u);l+2<o&&"-"===r[l+1]?(c=t(r[l+2]),l+=2):c=h,i.push([h,c]),c<65||h>122||(c<65||h>90||i.push([32|Math.max(65,h),32|Math.min(c,90)]),c<97||h>122||i.push([Math.max(97,h)&-33,Math.min(c,122)&-33]))}}i.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});for(var p=[],f=[],l=0;l<i.length;++l){var d=i[l];d[0]<=f[1]+1?f[1]=Math.max(f[1],d[1]):p.push(f=d)}for(var l=0;l<p.length;++l){var d=p[l];a.push(n(d[0])),d[1]>d[0]&&(d[1]+1>d[0]&&a.push("-"),a.push(n(d[1])))}return a.push("]"),a.join("")}for(var i=0,s=!1,a=!1,l=0,o=e.length;l<o;++l){var u=e[l];if(u.ignoreCase)a=!0;else if(/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){s=!0,a=!1;break}}for(var c={b:8,t:9,n:10,v:11,f:12,r:13},h=[],l=0,o=e.length;l<o;++l){var u=e[l];if(u.global||u.multiline)throw new Error(""+u);h.push("(?:"+function(e){for(var t=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=t.length,l=[],o=0,u=0;o<a;++o){var c=t[o];if("("===c)++u;else if("\\"===c.charAt(0)){var h=+c.substring(1);h&&(h<=u?l[h]=-1:t[o]=n(h))}}for(var o=1;o<l.length;++o)-1===l[o]&&(l[o]=++i);for(var o=0,u=0;o<a;++o){var c=t[o];if("("===c)++u,l[u]||(t[o]="(?:");else if("\\"===c.charAt(0)){var h=+c.substring(1);h&&h<=u&&(t[o]="\\"+l[h])}}for(var o=0;o<a;++o)"^"===t[o]&&"^"!==t[o+1]&&(t[o]="");if(e.ignoreCase&&s)for(var o=0;o<a;++o){var c=t[o],p=c.charAt(0);c.length>=2&&"["===p?t[o]=r(c):"\\"!==p&&(t[o]=c.replace(/[a-zA-Z]/g,function(e){var t=e.charCodeAt(0);return"["+String.fromCharCode(t&-33,32|t)+"]"}))}return t.join("")}(u)+")")}return new RegExp(h.join("|"),a?"gi":"g")}function t(e,t){function n(e){var o=e.nodeType;if(1==o){if(r.test(e.className))return;for(var u=e.firstChild;u;u=u.nextSibling)n(u);var c=e.nodeName.toLowerCase();"br"!==c&&"li"!==c||(i[l]="\n",a[l<<1]=s++,a[l++<<1|1]=e)}else if(3==o||4==o){var h=e.nodeValue;h.length&&(h=t?h.replace(/\r\n?/g,"\n"):h.replace(/[ \t\r\n]+/g," "),i[l]=h,a[l<<1]=s,s+=h.length,a[l++<<1|1]=e)}}var r=/(?:^|\s)nocode(?:\s|$)/,i=[],s=0,a=[],l=0;return n(e),{sourceCode:i.join("").replace(/\n$/,""),spans:a}}function i(e,t,n,r,i){if(n){var s={sourceNode:e,pre:1,langExtension:null,numberLines:null,sourceCode:n,spans:null,basePos:t,decorations:null};r(s),i.push.apply(i,s.decorations)}}function s(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling){var r=n.nodeType;t=1===r?t?e:n:3===r&&q.test(n.nodeValue)?e:t}return t===e?void 0:t}function a(t,n){var r,s={};!function(){for(var i=t.concat(n),a=[],l={},o=0,u=i.length;o<u;++o){var c=i[o],h=c[3];if(h)for(var p=h.length;--p>=0;)s[h.charAt(p)]=c;var f=c[1],d=""+f;l.hasOwnProperty(d)||(a.push(f),l[d]=null)}a.push(/[\0-\uffff]/),r=e(a)}();var a=n.length,l=function(e){for(var t=e.sourceCode,o=e.basePos,u=e.sourceNode,c=[o,j],p=0,f=t.match(r)||[],d={},g=0,m=f.length;g<m;++g){var b,v=f[g],y=d[v],x=void 0;if("string"==typeof y)b=!1;else{var k=s[v.charAt(0)];if(k)x=v.match(k[1]),y=k[0];else{for(var w=0;w<a;++w)if(k=n[w],x=v.match(k[1])){y=k[0];break}x||(y=j)}b=y.length>=5&&"lang-"===y.substring(0,5),!b||x&&"string"==typeof x[1]||(b=!1,y=I),b||(d[v]=y)}var _=p;if(p+=v.length,b){var S=x[1],C=v.indexOf(S),$=C+S.length;x[2]&&($=v.length-x[2].length,C=$-S.length);var N=y.substring(5);i(u,o+_,v.substring(0,C),l,c),i(u,o+_+C,S,h(N,S),c),i(u,o+_+$,v.substring($),l,c)}else c.push(o+_,y)}e.decorations=c};return l}function l(e){var t=[],n=[];e.tripleQuotedStrings?t.push([L,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push([L,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push([L,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&n.push([L,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(r>1?t.push([T,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push([T,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push([L,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push([T,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(n.push([T,/^\/\/[^\r\n]*/,null]),n.push([T,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var i=e.regexLiterals;if(i){var s=i>1?"":"\n\r",l=s?".":"[\\S\\s]",o="/(?=[^/*"+s+"])(?:[^/\\x5B\\x5C"+s+"]|\\x5C"+l+"|\\x5B(?:[^\\x5C\\x5D"+s+"]|\\x5C"+l+")*(?:\\x5D|$))+/";n.push(["lang-regex",RegExp("^"+D+"("+o+")")])}var u=e.types;u&&n.push([P,u]);var c=(""+e.keywords).replace(/^ | $/g,"");c.length&&n.push([E,new RegExp("^(?:"+c.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push([j,/^\s+/,null," \r\n\t "]);var h="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(h+="(?!s*/)"),n.push([O,/^@[a-z_$][a-z_$@0-9]*/i,null],[P,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[j,/^[a-z_$][a-z_$@0-9]*/i,null],[O,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[j,/^\\[\s\S]?/,null],[R,new RegExp(h),null]),a(t,n)}function o(e,t,n){function r(e){var t=e.nodeType;if(1!=t||s.test(e.className)){if((3==t||4==t)&&n){var o=e.nodeValue,u=o.match(a);if(u){var c=o.substring(0,u.index);e.nodeValue=c;var h=o.substring(u.index+u[0].length);if(h){var p=e.parentNode;p.insertBefore(l.createTextNode(h),e.nextSibling)}i(e),c||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)i(e),e.parentNode&&e.parentNode.removeChild(e);else for(var f=e.firstChild;f;f=f.nextSibling)r(f)}function i(e){function t(e,n){var r=n?e.cloneNode(!1):e,i=e.parentNode;if(i){var s=t(i,1),a=e.nextSibling;s.appendChild(r);for(var l=a;l;l=a)a=l.nextSibling,s.appendChild(l)}return r}for(;!e.nextSibling;)if(!(e=e.parentNode))return;for(var n,r=t(e.nextSibling,0);(n=r.parentNode)&&1===n.nodeType;)r=n;u.push(r)}for(var s=/(?:^|\s)nocode(?:\s|$)/,a=/\r\n?|\n/,l=e.ownerDocument,o=l.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var u=[o],c=0;c<u.length;++c)r(u[c]);t===(0|t)&&u[0].setAttribute("value",t);var h=l.createElement("ol");h.className="linenums";for(var p=Math.max(0,t-1|0)||0,c=0,f=u.length;c<f;++c)o=u[c],o.className="L"+(c+p)%10,o.firstChild||o.appendChild(l.createTextNode(" ")),h.appendChild(o);e.appendChild(h)}function u(e){var t=/\bMSIE\s(\d+)/.exec(navigator.userAgent);t=t&&+t[1]<=8;var n=e.sourceCode,r=n.length,i=0,s=e.spans,a=s.length,l=0,o=e.decorations,u=o.length,c=0;o[u]=r;var h,p;for(p=h=0;p<u;)o[p]!==o[p+2]?(o[h++]=o[p++],o[h++]=o[p++]):p+=2;for(u=h,p=h=0;p<u;){for(var f=o[p],d=o[p+1],g=p+2;g+2<=u&&o[g+1]===d;)g+=2;o[h++]=f,o[h++]=d,p=g}u=o.length=h;var m=e.sourceNode,b="";m&&(b=m.style.display,m.style.display="none");try{for(;l<a;){var v,y=(s[l],s[l+2]||r),x=o[c+2]||r,g=Math.min(y,x),k=s[l+1];if(1!==k.nodeType&&(v=n.substring(i,g))){t&&(v=v.replace(/\n/g,"\r")),k.nodeValue=v;var w=k.ownerDocument,_=w.createElement("span");_.className=o[c+1];var S=k.parentNode;S.replaceChild(_,k),_.appendChild(k),i<y&&(s[l+1]=k=w.createTextNode(n.substring(g,y)),S.insertBefore(k,_.nextSibling))}i=g,i>=y&&(l+=2),i>=x&&(c+=2)}}finally{m&&(m.style.display=b)}}function c(e,t){for(var n=t.length;--n>=0;){var r=t[n];M.hasOwnProperty(r)?g.console&&console.warn("cannot override language handler %s",r):M[r]=e}}function h(e,t){return e&&M.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),M[e]}function p(e){var n=e.langExtension;try{var r=t(e.sourceNode,e.pre),i=r.sourceCode;e.sourceCode=i,e.spans=r.spans,e.basePos=0,h(n,i)(e),u(e)}catch(e){g.console&&console.log(e&&e.stack||e)}}function f(e,t,n){var r=n||!1,i=t||null,s=document.createElement("div");return s.innerHTML="<pre>"+e+"</pre>",s=s.firstChild,r&&o(s,r,!0),p({langExtension:i,numberLines:r,sourceNode:s,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null}),s.innerHTML}function d(e,t){function n(e){return i.getElementsByTagName(e)}function r(){for(var t=g.PR_SHOULD_USE_CONTINUATION?d.now()+250:1/0;m<u.length&&d.now()<t;m++){for(var n=u[m],i=_,l=n;l=l.previousSibling;){var c=l.nodeType,h=(7===c||8===c)&&l.nodeValue;if(h?!/^\??prettify\b/.test(h):3!==c||/\S/.test(l.nodeValue))break;if(h){i={},h.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){i[t]=n});break}}var f=n.className;if((i!==_||v.test(f))&&!y.test(f)){for(var S=!1,C=n.parentNode;C;C=C.parentNode){var $=C.tagName;if(w.test($)&&C.className&&v.test(C.className)){S=!0;break}}if(!S){n.className+=" prettyprinted";var N=i.lang;if(!N){N=f.match(b);var A;!N&&(A=s(n))&&k.test(A.tagName)&&(N=A.className.match(b)),N&&(N=N[1])}var L;if(x.test(n.tagName))L=1;else{var E=n.currentStyle,T=a.defaultView,P=E?E.whiteSpace:T&&T.getComputedStyle?T.getComputedStyle(n,null).getPropertyValue("white-space"):0;L=P&&"pre"===P.substring(0,3)}var O=i.linenums;(O="true"===O||+O)||(O=f.match(/\blinenums\b(?::(\d+))?/),O=!!O&&(!O[1]||!O[1].length||+O[1])),O&&o(n,O,L);p({langExtension:N,sourceNode:n,numberLines:O,pre:L,sourceCode:null,basePos:null,spans:null,decorations:null})}}}m<u.length?g.setTimeout(r,250):"function"==typeof e&&e()}for(var i=t||document.body,a=i.ownerDocument||document,l=[n("pre"),n("code"),n("xmp")],u=[],c=0;c<l.length;++c)for(var h=0,f=l[c].length;h<f;++h)u.push(l[c][h]);l=null;var d=Date;d.now||(d={now:function(){return+new Date}});var m=0,b=/\blang(?:uage)?-([\w.]+)(?!\S)/,v=/\bprettyprint\b/,y=/\bprettyprinted\b/,x=/pre|xmp/i,k=/^code$/i,w=/^(?:pre|code|xmp)$/i,_={};r()}var g=window,m=["break,continue,do,else,for,if,return,while"],b=[m,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],v=[b,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],y=[v,"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],x=[v,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],k=[v,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],w=[v,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],_="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",S=[m,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],C=[m,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],$=[m,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],N=[y,k,x,w,_,S,C,$],A=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,L="str",E="kwd",T="com",P="typ",O="lit",R="pun",j="pln",I="src",D="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",q=/\S/,z=l({keywords:N,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),M={};c(z,["default-code"]),c(a([],[[j,/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],[T,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[R,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),c(a([[j,/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[R,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),c(a([],[["atv",/^[\s\S]+/]]),["uq.val"]),c(l({keywords:y,hashComments:!0,cStyleComments:!0,types:A}),["c","cc","cpp","cxx","cyc","m"]),c(l({keywords:"null,true,false"}),["json"]),c(l({keywords:k,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:A}),["cs"]),c(l({keywords:x,cStyleComments:!0}),["java"]),c(l({keywords:$,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),c(l({keywords:S,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),c(l({keywords:_,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),c(l({keywords:C,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),c(l({keywords:w,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),c(l({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),c(a([],[[L,/^[\s\S]+/]]),["regex"]);var U=g.PR={createSimpleLexer:a,registerLangHandler:c,sourceDecorator:l,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:T,PR_DECLARATION:"dec",PR_KEYWORD:E,PR_LITERAL:O,PR_NOCODE:"nocode",PR_PLAIN:j,PR_PUNCTUATION:R,PR_SOURCE:I,PR_STRING:L,PR_TAG:"tag",PR_TYPE:P,prettyPrintOne:n=f,prettyPrint:r=r=d},V=g.define;"function"==typeof V&&V.amd&&V("google-code-prettify",[],function(){return U})}()},18:function(e,t,n){(function(t){function n(e,t,n){function i(t){var n=g,r=m;return g=m=void 0,S=t,v=e.apply(r,n)}function s(e){return S=e,y=setTimeout(c,t),C?i(e):v}function o(e){var n=e-_,r=e-S,i=t-n;return $?k(i,b-r):i}function u(e){var n=e-_,r=e-S;return void 0===_||n>=t||n<0||$&&r>=b}function c(){var e=w();if(u(e))return h(e);y=setTimeout(c,o(e))}function h(e){return y=void 0,N&&g?i(e):(g=m=void 0,v)}function p(){void 0!==y&&clearTimeout(y),S=0,g=_=m=y=void 0}function f(){return void 0===y?v:h(w())}function d(){var e=w(),n=u(e);if(g=arguments,m=this,_=e,n){if(void 0===y)return s(_);if($)return y=setTimeout(c,t),i(_)}return void 0===y&&(y=setTimeout(c,t)),v}var g,m,b,v,y,_,S=0,C=!1,$=!1,N=!0;if("function"!=typeof e)throw new TypeError(l);return t=a(t)||0,r(n)&&(C=!!n.leading,$="maxWait"in n,b=$?x(a(n.maxWait)||0,t):b,N="trailing"in n?!!n.trailing:N),d.cancel=p,d.flush=f,d}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function s(e){return"symbol"==typeof e||i(e)&&y.call(e)==u}function a(e){if("number"==typeof e)return e;if(s(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=p.test(e);return n||f.test(e)?d(e.slice(2),n?2:8):h.test(e)?o:+e}var l="Expected a function",o=NaN,u="[object Symbol]",c=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,f=/^0o[0-7]+$/i,d=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,b=g||m||Function("return this")(),v=Object.prototype,y=v.toString,x=Math.max,k=Math.min,w=function(){return b.Date.now()};e.exports=n}).call(t,n(12))},19:function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||c.defaults,this.rules=h.normal,this.options.gfm&&(this.options.tables?this.rules=h.tables:this.rules=h.gfm)}function n(e,t){if(this.options=t||c.defaults,this.links=e,this.rules=p.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=p.breaks:this.rules=p.gfm:this.options.pedantic&&(this.rules=p.pedantic)}function r(e){this.options=e||{}}function i(e){this.tokens=[],this.token=null,this.options=e||c.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function s(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function o(){}function u(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function c(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=u({},c.defaults,n||{});var a,l,o=n.highlight,h=0;try{a=t.lex(e,n)}catch(e){return r(e)}l=a.length;var p=function(e){if(e)return n.highlight=o,r(e);var t;try{t=i.parse(a,n)}catch(t){e=t}return n.highlight=o,e?r(e):r(null,t)};if(!o||o.length<3)return p();if(delete n.highlight,!l)return p();for(;h<a.length;h++)!function(e){"code"!==e.type?--l||p():o(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--l||p():(e.text=n,e.escaped=!0,void(--l||p()))})}(a[h])}else try{return n&&(n=u({},c.defaults,n)),i.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||c.defaults).silent)return"<p>An error occured:</p><pre>"+s(e.message+"",!0)+"</pre>";throw e}}var h={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:o,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:o,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:o,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};h.bullet=/(?:[*+-]|\d+\.)/,h.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,h.item=l(h.item,"gm")(/bull/g,h.bullet)(),h.list=l(h.list)(/bull/g,h.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+h.def.source+")")(),h.blockquote=l(h.blockquote)("def",h.def)(),h._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",h.html=l(h.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,h._tag)(),h.paragraph=l(h.paragraph)("hr",h.hr)("heading",h.heading)("lheading",h.lheading)("blockquote",h.blockquote)("tag","<"+h._tag)("def",h.def)(),h.normal=u({},h),h.gfm=u({},h.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),h.gfm.paragraph=l(h.paragraph)("(?!","(?!"+h.gfm.fences.source.replace("\\1","\\2")+"|"+h.list.source.replace("\\1","\\3")+"|")(),h.tables=u({},h.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=h,t.lex=function(e,n){return new t(n).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,i,s,a,l,o,u,c,p,e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:s.replace(/\n+$/,"")});else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(t&&(s=this.rules.nptable.exec(e))){for(e=e.substring(s[0].length),o={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3].replace(/\n$/,"").split("\n")},c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=o.cells[c].split(/ *\| */);this.tokens.push(o)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t,!0),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),a=s[2],this.tokens.push({type:"list_start",ordered:a.length>1}),s=s[0].match(this.rules.item),r=!1,p=s.length,c=0;c<p;c++)o=s[c],u=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(u-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&c!==p-1&&(l=h.bullet.exec(s[c+1])[0],a===l||a.length>1&&l.length>1||(e=s.slice(c+1).join("\n")+e,c=p-1)),i=r||/\n\n(?!\s*$)/.test(o),c!==p-1&&(r="\n"===o.charAt(o.length-1),i||(i=r)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(o,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(!n&&t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),this.tokens.links[s[1].toLowerCase()]={href:s[2],title:s[3]};else if(t&&(s=this.rules.table.exec(e))){for(e=e.substring(s[0].length),o={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3].replace(/(?: *\| *)?\n$/,"").split("\n")},c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=o.cells[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(o)}else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:o,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:o,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=l(p.link)("inside",p._inside)("href",p._href)(),p.reflink=l(p.reflink)("inside",p._inside)(),p.normal=u({},p),p.pedantic=u({},p.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=u({},p.normal,{escape:l(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=u({},p.gfm,{br:l(p.br)("{2,}","*")(),text:l(p.gfm.text)("{2,}","*")()}),n.rules=p,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,n,r,i,a="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),a+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1]),r=this.mangle("mailto:")+n):(n=s(i[1]),r=n),a+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):s(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,a+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){a+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,a+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),a+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),a+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),a+=this.renderer.codespan(s(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),a+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),a+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),a+=this.renderer.text(s(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=s(i[1]),r=n,a+=this.renderer.link(r,null,n);return a},n.prototype.outputLink=function(e,t){var n=s(t.href),r=t.title?s(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,s(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+s(t,!0)+'">'+(n?e:s(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:s(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(a(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},r.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},i.parse=function(e,t,n){return new i(t,n).parse(e)},i.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":for(var s="",a=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,a);case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},o.exec=o,c.options=c.setOptions=function(e){return u(c.defaults,e),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1},c.Parser=i,c.parser=i.parse,c.Renderer=r,c.Lexer=t,c.lexer=t.lex,c.InlineLexer=n,c.inlineLexer=n.output,c.parse=c,e.exports=c}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,n(12))},209:function(e,t,n){e.exports=n(79)},79:function(e,t,n){"use strict";n(126);var r=n(16),i=function(e){return e&&e.__esModule?e:{default:e}}(r),s=window.location.hash.split("#")[1]||"",a="",l="";if(s){var o=s.split("_");a=o[0],l=o[1]}(0,i.default)(a||"FAQ-Account",l)}},[209]);