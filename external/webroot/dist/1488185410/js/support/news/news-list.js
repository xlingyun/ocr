duAI([9],{170:function(n,t,e){n.exports=e(35)},35:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function a(n){var t=[];n.forEach(function(n){var e=n.title,i=n.desc,a=n.time,l=n.href,c=['<div class="news-list">',"    <a href="+l+">",'        <h2 class="block-title">'+e+'<span class="time">'+a+"</span></h2>","    </a>","    <p>"+i+"</p>","</div>"].join("\r");t.push(c)}),f.html(t.join("\r"))}function l(n){var t=new Date;t.setTime(n);var e=t.getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var a=t.getDate();return a=a<10?"0"+a:a,[e,i,a].join("-")}var c=e(0),u=i(c);e(61),e(77);var s=10,o=(0,u.default)(".pg").page({pageNum:s}),r="./news?action=list&pn=0&rn=9999999",f=(0,u.default)("#news-container");u.default.get(r,void 0,void 0,"json").then(function(n){return n.data.map(function(n){return{title:n.title,desc:n.abs,time:l(1e3*parseInt(n.time,10)),href:"./news?action=detail&id="+n.id}})},function(){return[]}).always(function(n){a(n.slice(0,s)),o.onChange(function(t){a(n.slice(t.index*s,t.index*s+s)),document.documentElement.scrollTop=0}),o(n.length)})},61:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e){var i='<ul class="pn">';t.forEach(function(n){i+='<li data-l="'+n+'">'+n+"</li>"}),i+="</ul>",n.html(i),n.find("li").on("click",function(){e((0,c.default)(this).data("l"))})}var l=e(0),c=i(l);c.default.extend(c.default.fn,{page:function(n){function t(){var n='<div class="cfx" style="text-align: center">';n+=e(),n+=i(),n+="</div>",p.html(n)}function e(){for(var n='<div class="page" style="display: inline-block; vertical-align: middle"><span class="pg-func prev'+(0===f?" disabled":"")+'">上一页</span>',t=l(o,r),e=0;e<t;e++)e===f-3&&e>0&&(n+="<span>...</span>"),(e<f+3&&e>f-3||e===t-1||0===e)&&(n+='<span class="page-num'+(e===f?" pg-on":"")+'" data-index="'+e+'">'+(e+1)+"</span>"),e===f+3&&e<t-1&&(n+="<span>...</span>");return n+='<span class="pg-func next'+(f===t-1?" disabled":"")+'">下一页</span></div>'}function i(){var n='<div style="display: inline-block; vertical-align: middle"><span style="margin-left: 20px"><form style="display: inline-block" class="sl-index" >去第<input style="text-align: center; margin:0 10px;width: 30px;height: 20px;color: #333333;" type="text" value="'+(f+1)+'"/>页</form></span></div>';return n}function l(n,t){return~~((n-.1)/t)+1}function u(){t(),d.forEach(function(n){n({pageNum:r,index:f})})}function s(n){o=n,f=0,t()}var o,r=n.pageNum||10,f=0,d=[],p=this;return p.on("click",".prev",function(){f>0&&f--,u()}),p.on("click",".next",function(){var n=l(o,r);f<n-1&&f++,u()}),p.on("click",".page-num",function(){var n=(0,c.default)(this).data("index");f=~~n,u()}),p.on("click",".first",function(){f=0,u()}),p.on("click",".last",function(){f=l(o,r)-1,u()}),p.on("click",".page-tip",function(){var n=(0,c.default)(".pan",p);return n.children().length?void n.empty():void a(n,[10,20,50],function(n){r=n,f=0,u()})}),p.on("submit",".sl-index",function(n){n.preventDefault();var t=parseInt((0,c.default)(this).find("input").val(),10);isNaN(t)&&(t=0),t<1&&(t=1),t>l(o,r)&&(t=l(o,r)),f=t-1,u()}),s.onChange=function(n){d.push(n)},Object.defineProperties(s,{pageNum:{get:function(){return r}},index:{get:function(){return f}}}),s}})},77:function(n,t){}},[170]);