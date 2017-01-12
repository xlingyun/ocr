webpackJsonp([20],{0:function(e,t,n){e.exports=n(91)},33:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=n(17),r=s(i),l=r.default;!function(e,t,n,s){var i="docAccordionMenu",r={speed:300,showDelay:0,hideDelay:0,singleOpen:!0,clickEffect:!0},l=function(t,n){this.element=t,this.settings=e.extend({},r,n),this._defaults=r,this._name=i,this.init()};e.extend(l.prototype,{init:function(){this.openSubmenu(),this.submenuIndicators(),r.clickEffect&&this.addClickEffect()},openSubmenu:function(){e(this.element).children("ul").find("li").bind("click touchstart",function(n){if(n.stopPropagation(),n.preventDefault(),e(this).children(".submenu").length>0){if("none"===e(this).children(".submenu").css("display"))return e(this).children(".submenu").delay(r.showDelay).slideDown(r.speed),r.singleOpen&&e(this).siblings().children(".submenu").slideUp(r.speed),!1;e(this).children(".submenu").delay(r.hideDelay).slideUp(r.speed),e(this).children(".submenu").siblings("a").hasClass("submenu-indicator-minus")}t.location.href=e(this).children("a").attr("href")})},submenuIndicators:function(){e(this.element).find(".submenu").length>0},addClickEffect:function(){var t=void 0,n=void 0,s=void 0,i=void 0;e(this.element).find("a").bind("click touchstart",function(r){e(".ink").remove(),0===e(this).children(".ink").length&&e(this).prepend('<span class="ink"></span>'),t=e(this).find(".ink"),t.removeClass("animate-ink"),t.height()||t.width()||(n=Math.max(e(this).outerWidth(),e(this).outerHeight()),t.css({height:n,width:n})),s=r.pageX-e(this).offset().left-t.width()/2,i=r.pageY-e(this).offset().top-t.height()/2,t.css({top:i+"px",left:s+"px"}).addClass("animate-ink")})}}),e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new l(this,t))}),this}}(l,window,document)},34:function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||u.defaults,this.rules=c.normal,this.options.gfm&&(this.options.tables?this.rules=c.tables:this.rules=c.gfm)}function n(e,t){if(this.options=t||u.defaults,this.links=e,this.rules=p.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=p.breaks:this.rules=p.gfm:this.options.pedantic&&(this.rules=p.pedantic)}function s(e){this.options=e||{}}function i(e){this.tokens=[],this.token=null,this.options=e||u.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function r(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&([#\w]+);/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function o(e,t){return e=e.source,t=t||"",function n(s,i){return s?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(s,i),n):new RegExp(e,t)}}function a(){}function h(e){for(var t,n,s=1;s<arguments.length;s++){t=arguments[s];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function u(e,n,s){if(s||"function"==typeof n){s||(s=n,n=null),n=h({},u.defaults,n||{});var l,o,a=n.highlight,c=0;try{l=t.lex(e,n)}catch(e){return s(e)}o=l.length;var p=function(){var e,t;try{e=i.parse(l,n)}catch(e){t=e}return n.highlight=a,t?s(t):s(null,e)};if(!a||a.length<3)return p();if(delete n.highlight,!o)return p();for(;c<l.length;c++)!function(e){return"code"!==e.type?--o||p():a(e.text,e.lang,function(t,n){return null==n||n===e.text?--o||p():(e.text=n,e.escaped=!0,void(--o||p()))})}(l[c])}else try{return n&&(n=h({},u.defaults,n)),i.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||u.defaults).silent)return"<p>An error occured:</p><pre>"+r(e.message+"",!0)+"</pre>";throw e}}var c={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:a,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:a,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:a,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};c.bullet=/(?:[*+-]|\d+\.)/,c.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,c.item=o(c.item,"gm")(/bull/g,c.bullet)(),c.list=o(c.list)(/bull/g,c.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+c.def.source+")")(),c.blockquote=o(c.blockquote)("def",c.def)(),c._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",c.html=o(c.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,c._tag)(),c.paragraph=o(c.paragraph)("hr",c.hr)("heading",c.heading)("lheading",c.lheading)("blockquote",c.blockquote)("tag","<"+c._tag)("def",c.def)(),c.normal=h({},c),c.gfm=h({},c.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/}),c.gfm.paragraph=o(c.paragraph)("(?!","(?!"+c.gfm.fences.source.replace("\\1","\\2")+"|"+c.list.source.replace("\\1","\\3")+"|")(),c.tables=h({},c.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=c,t.lex=function(e,n){var s=new t(n);return s.lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var s,i,r,l,o,a,h,u,p,e=e.replace(/^ +$/gm,"");e;)if((r=this.rules.newline.exec(e))&&(e=e.substring(r[0].length),r[0].length>1&&this.tokens.push({type:"space"})),r=this.rules.code.exec(e))e=e.substring(r[0].length),r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?r:r.replace(/\n+$/,"")});else if(r=this.rules.fences.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"code",lang:r[2],text:r[3]});else if(r=this.rules.heading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else if(t&&(r=this.rules.nptable.exec(e))){for(e=e.substring(r[0].length),a={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/\n$/,"").split("\n")},u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=a.cells[u].split(/ *\| */);this.tokens.push(a)}else if(r=this.rules.lheading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2]?1:2,text:r[1]});else if(r=this.rules.hr.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"hr"});else if(r=this.rules.blockquote.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,t,!0),this.tokens.push({type:"blockquote_end"});else if(r=this.rules.list.exec(e)){for(e=e.substring(r[0].length),l=r[2],this.tokens.push({type:"list_start",ordered:l.length>1}),r=r[0].match(this.rules.item),s=!1,p=r.length,u=0;u<p;u++)a=r[u],h=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(h-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+h+"}","gm"),"")),this.options.smartLists&&u!==p-1&&(o=c.bullet.exec(r[u+1])[0],l===o||l.length>1&&o.length>1||(e=r.slice(u+1).join("\n")+e,u=p-1)),i=s||/\n\n(?!\s*$)/.test(a),u!==p-1&&(s="\n"===a.charAt(a.length-1),i||(i=s)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(a,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(r=this.rules.html.exec(e))e=e.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:"pre"===r[1]||"script"===r[1]||"style"===r[1],text:r[0]});else if(!n&&t&&(r=this.rules.def.exec(e)))e=e.substring(r[0].length),this.tokens.links[r[1].toLowerCase()]={href:r[2],title:r[3]};else if(t&&(r=this.rules.table.exec(e))){for(e=e.substring(r[0].length),a={type:"table",header:r[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=a.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(t&&(r=this.rules.paragraph.exec(e)))e=e.substring(r[0].length),this.tokens.push({type:"paragraph",text:"\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1]});else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:a,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:a,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=o(p.link)("inside",p._inside)("href",p._href)(),p.reflink=o(p.reflink)("inside",p._inside)(),p.normal=h({},p),p.pedantic=h({},p.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=h({},p.normal,{escape:o(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:o(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=h({},p.gfm,{br:o(p.br)("{2,}","*")(),text:o(p.gfm.text)("{2,}","*")()}),n.rules=p,n.output=function(e,t,s){var i=new n(t,s);return i.output(e)},n.prototype.output=function(e){for(var t,n,s,i,l="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),l+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1]),s=this.mangle("mailto:")+n):(n=r(i[1]),s=n),l+=this.renderer.link(s,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),l+=this.options.sanitize?r(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,l+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){l+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),l+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),l+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),l+=this.renderer.codespan(r(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),l+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),l+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),l+=r(this.smartypants(i[0]));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=r(i[1]),s=n,l+=this.renderer.link(s,null,n);return l},n.prototype.outputLink=function(e,t){var n=r(t.href),s=t.title?r(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,r(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/--/g,"—").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){for(var t,n="",s=e.length,i=0;i<s;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},s.prototype.code=function(e,t,n){if(this.options.highlight){var s=this.options.highlight(e,t);null!=s&&s!==e&&(n=!0,e=s)}return t?'<pre><code class="'+this.options.langPrefix+r(t,!0)+'">'+(n?e:r(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:r(e,!0))+"\n</code></pre>"},s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},s.prototype.html=function(e){return e},s.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},s.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},s.prototype.tablecell=function(e,t){var n=t.header?"th":"td",s=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return s+e+"</"+n+">\n"},s.prototype.strong=function(e){return"<strong>"+e+"</strong>"},s.prototype.em=function(e){return"<em>"+e+"</em>"},s.prototype.codespan=function(e){return"<code>"+e+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(e){return"<del>"+e+"</del>"},s.prototype.link=function(e,t,n){if(this.options.sanitize){try{var s=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===s.indexOf("javascript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},s.prototype.image=function(e,t,n){var s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">"},i.parse=function(e,t,n){var s=new i(t,n);return s.parse(e)},i.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},i.prototype.next=function(){return this.token=this.tokens.pop()},i.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},i.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},i.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,s,i,r="",l="";for(n="",e=0;e<this.token.header.length;e++)s={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(r+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",i=0;i<t.length;i++)n+=this.renderer.tablecell(this.inline.output(t[i]),{header:!1,align:this.token.align[i]});l+=this.renderer.tablerow(n)}return this.renderer.table(r,l);case"blockquote_start":for(var l="";"blockquote_end"!==this.next().type;)l+=this.tok();return this.renderer.blockquote(l);case"list_start":for(var l="",o=this.token.ordered;"list_end"!==this.next().type;)l+=this.tok();return this.renderer.list(l,o);case"list_item_start":for(var l="";"list_item_end"!==this.next().type;)l+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(l);case"loose_item_start":for(var l="";"list_item_end"!==this.next().type;)l+=this.tok();return this.renderer.listitem(l);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},a.exec=a,u.options=u.setOptions=function(e){return h(u.defaults,e),u},u.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new s,xhtml:!1},u.Parser=i,u.parser=i.parse,u.Renderer=s,u.Lexer=t,u.lexer=t.lex,u.InlineLexer=n,u.inlineLexer=n.output,u.parse=u,e.exports=u}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,function(){return this}())},91:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=n(17),r=s(i),l=n(33),o=(s(l),n(34)),a=s(o);n(!function(){var e=new Error('Cannot find module "../../../bower_components/code-prettify/src/prettify"');throw e.code="MODULE_NOT_FOUND",e}()),window.$=r.default,window.marked=a.default;var h="",u=function(e){var t=function(e){var t=Math.abs((0,r.default)("#md_container>h1").eq(0).offset().top-(0,r.default)("#md_container>h1").eq(e).offset().top);(0,r.default)("#md_container").scrollTop(t)},n=e.parent().find(">ul>li");n.each(function(e,n){(0,r.default)(n).click(function(){t(e)})})},c=function(e,t,n){h!==e&&r.default.ajax({type:"GET",url:"/data/"+e+".md",success:function(s){h=e,(0,r.default)("#md_container").html((0,a.default)(s)),(0,r.default)("code").addClass("prettyprint"),window.PR.prettyPrint(),"node"===n&&u(t)}})},p=function(){(0,r.default)(".click-node").click(function(){var e=(0,r.default)(this).attr("tag");e&&c(e,(0,r.default)(this),"node")}),(0,r.default)(".beginner.root .click-node").click(function(){var e=(0,r.default)(this).attr("tag");e&&c(e,(0,r.default)(this),"beginner")})};r.default.ajax({type:"GET",url:"/data/notice.md",success:function(e){(0,r.default)("#md_container").html((0,a.default)(e)),(0,r.default)("code").addClass("prettyprint"),window.PR.prettyPrint()}}),(0,r.default)(function(){(0,r.default)("#jquery-accordion-menu").docAccordionMenu()});var d=function(){(0,r.default)(".sidebar li").click(function(){var e=(0,r.default)(this);(0,r.default)(".sidebar li.active").removeClass("active"),(0,r.default)(this).addClass("active");for(var t=e.parents(),n=0;n<t.length;n++)if((0,r.default)(t[n]).hasClass("root")){(0,r.default)(t[n]).addClass("active");break}if(e.hasClass("leaf")||e.hasClass("sdk-node")){for(var s=[e.find(">a").text()],i=0;i<t.length;i++)if((0,r.default)(t[i]).hasClass("non-leaf")||(0,r.default)(t[i]).hasClass("root")){var l=(0,r.default)(t[i]).find(">a").text();s.splice(0,0,l)}for(var o="",a=0;a<s.length;a++)o+='<li><span class="divider">&gt;</span></li><li><span class="">'+s[a]+"</span></li>";(0,r.default)(".doc-breadcrumb .crumb").hide().html(o),(0,r.default)(".doc-breadcrumb .crumb li:eq(0)").remove(),(0,r.default)(".doc-breadcrumb .crumb").show()}else if(e.parent().hasClass("beginner")){var h="<li><span>"+e.text()+"</span></li>";(0,r.default)(".doc-breadcrumb .crumb").html(h)}})},f=function(){(0,r.default)(".sidebar .pm-button").click(function(){var e=(0,r.default)(this);e.hasClass("nav-plus1")&&e.hasClass("active")?(e.removeClass("active"),(0,r.default)(".toc.jquery-accordion-menu:eq(0)").show(500)):e.hasClass("nav-plus1")?(e.addClass("active"),(0,r.default)(".toc.jquery-accordion-menu:eq(0)").hide(500)):e.hasClass("nav-plus2")&&e.hasClass("active")?(e.removeClass("active"),(0,r.default)(".toc.jquery-accordion-menu:eq(1)").show(500)):(e.addClass("active"),(0,r.default)(".toc.jquery-accordion-menu:eq(1)").hide(500))})},g=function(){(0,r.default)(".doc-wrap .faq-menu > li:eq(0)").click()};(0,r.default)(function(){f(),d(),p(),g()})}});