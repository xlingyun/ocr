duAI([26],{323:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g=a(2),I=function(t){return t&&t.__esModule?t:{default:t}}(g);a(588),a(628);var c={NEGATIVE:0,POSITIVE:1,NONE:2},o=[["位置很好找，房间很干净。","环境不错不过价格有点贵，而且前台推荐的旅游线路也是偏贵。地理位置超棒！","周边交通方便，房间安静卫生，性价比高","卫生好，设施好，环境好，服务好","价格比较便宜，交通便利，没有洗澡的","整体房间还好，客房服务这块也还不错。","交通便利，酒店设施一般，性价比一般","房间比较大，环境还可以","房间挺温馨的，采光好，超市、市场、车站都在附近，很方便","服务态度不好，交通不是太方便，其他还好"],["真的非常好，是冲着评论去的，味道非常好，态度也好","不错哦#烧春鸡# 很不错，环境也不错啊！服务也很好，小妹也漂亮","价格实惠 口感不错 品质出众","当地的朋友带去玩的 环境不太好 但是烧烤很好吃 非常入味 虾也很新鲜","味道很不错，很喜欢吃。服务也很好感觉很亲切，吃的很舒服，谢谢","奶茶很好喝，炸鸡也很好吃，下次还会买","团购划算 优惠活动多 店面不错","菜量很足，味道很辣，也很美味，环境一般了。服务态度很好。","性价比非常高，东西也好吃，环境非常好","位置很好找，正好修地铁，车很少，还比较安静，周围的吃饭的地方很多，下楼就要，环境不错，卫生"],["服务态度不好，让调个温度等了好长时间，以后再也不来了","环境不错，新歌很多！音响也好","音质很好，非常不错哦，环境也很好","还不错，比较实惠。不过里面的环境不是很好！音响还可以！","环境非常好，服务非常好，音效非常好","音乐效果很好，新装修的环境不错，服务也好！！！","里面环境很好，服务态度也好，音响效果也不错，送的蓝莓李很好吃","5分，环境还不错，服务态度有待提高","麦克风不错 音效出色 团购价划算","好好好好，服务好，设备好，环境好"],["如果要提油耗日系车当然低，这是他们的优势。车身轻安全性能低是他们的死穴！牧马人的内饰谈不上精致，但是相对给男人来开显得粗狂大气，动力足！户外撒野绝对给力！普拉高速不稳定，属于城市SUV如果越野就坑爹了。。综合性能比较，牧马人性价比高。","个人觉得福克斯好，外观漂亮年轻，动力和操控性都不错","空间挺大的   油耗也很低   我磨合期7.4L/KM  相信过了磨合期会更低","个人感觉骊威不如POLO，对车了解的不多，买车的话可以推荐你参加石家庄乐 购汽车网的团购，价格比较实惠，比自己买省不少。","外观不错，流线做得很好，看起来比较大方。车内空间算比较大，就是价格有点高。中国第一百货办的“三子抽奖”，车子免费送，免费的，谁不想要啊！","建议5000公里，更换机油和三滤，桑塔纳的配件很便宜，汽油滤清器和空气滤清器加一起也不超过50元，一年下来也多花不了多少，但是对车一定是有好处的。","性能挺好的啊，性价比也还可以，你是做什么用途啊？","MG7本身的车身行车稳定已经做的很好了,开过你就知道。装ESP就相当于给会游泳的人塞上个救生圈。","北斗星更好些，油耗低，皮实，保养维修费用低。","客观的说同为日本车，FIT无论从品牌保值，油耗，空间，操控等等都是马2不能比的，马2小气，空间狭小，飞度实用性强，后备箱同级卓越，再看看保有量，飞度满街飞，马2机会看不到，所以飞度完胜！"]],u=[[[{scope:"位置很好",attitude:c.POSITIVE,weight:2,tag:"位置"},{scope:"房间很干净",attitude:c.POSITIVE,weight:2,tag:"房间"}],[{scope:"环境不错",attitude:c.POSITIVE,weight:2,tag:"环境"},{scope:"地理位置超棒",attitude:c.POSITIVE,weight:2,tag:"位置"}],[{scope:"交通方便",attitude:c.POSITIVE,weight:2,tag:"交通"},{scope:"周边交通方便",attitude:c.POSITIVE,weight:2,tag:"交通"},{scope:"房间安静",attitude:c.POSITIVE,weight:2,tag:"房间"},{scope:"性价比高",attitude:c.POSITIVE,weight:2,tag:"性价比"}],[{scope:"卫生好",attitude:c.POSITIVE,weight:2,tag:"环境"},{scope:"设施好",attitude:c.POSITIVE,weight:2,tag:"设施"},{scope:"环境好",attitude:c.POSITIVE,weight:2,tag:"环境"},{scope:"服务好",attitude:c.POSITIVE,weight:2,tag:"服务"}],[{scope:"价格比较便宜",attitude:c.POSITIVE,weight:2,tag:"性价比"},{scope:"交通便利",attitude:c.POSITIVE,weight:2,tag:"交通"}],[{scope:"房间还好",attitude:c.POSITIVE,weight:2,tag:"房间"},{scope:"客房服务这块也还不错",attitude:c.POSITIVE,weight:2,tag:"客房服务"}],[{scope:"交通便利",attitude:c.POSITIVE,weight:2,tag:"交通"},{scope:"酒店设施一般",attitude:c.NEGATIVE,weight:2,tag:"设施"},{scope:"设施一般",attitude:c.NEGATIVE,weight:2,tag:"设施"}],[{scope:"房间比较大",attitude:c.NEGATIVE,weight:2,tag:"房间"},{scope:"环境还可以",attitude:c.POSITIVE,weight:2,tag:"环境"}],[{scope:"房间挺温馨",attitude:c.POSITIVE,weight:2,tag:"房间"},{scope:"采光好",attitude:c.POSITIVE,weight:2,tag:"采光"}],[{scope:"服务态度不好",attitude:c.NEGATIVE,weight:2,tag:"服务"},{scope:"态度不好",attitude:c.NEGATIVE,weight:2,tag:"服务"},{scope:"交通不是太方便",attitude:c.NEGATIVE,weight:2,tag:"交通"}]],[[{scope:"味道非常好",attitude:c.POSITIVE,weight:2,tag:"味道"},{scope:"态度也好",attitude:c.POSITIVE,weight:2,tag:"态度"}],[{scope:"环境也不错",attitude:c.POSITIVE,weight:2,tag:"环境"},{scope:"服务也很好",attitude:c.POSITIVE,weight:2,tag:"服务"}],[{scope:"价格实惠",attitude:c.POSITIVE,weight:2,tag:"价格"},{scope:"口感不错",attitude:c.POSITIVE,weight:2,tag:"口感"}],[{scope:"环境不太好",attitude:c.NEGATIVE,weight:2,tag:"环境"},{scope:"烧烤很好吃",attitude:c.POSITIVE,weight:2,tag:"烧烤"},{scope:"虾也很新鲜",attitude:c.POSITIVE,weight:2,tag:"虾"}],[{scope:"味道很不错",attitude:c.POSITIVE,weight:2,tag:"味道"},{scope:"服务也很好",attitude:c.POSITIVE,weight:2,tag:"服务"}],[{scope:"奶茶很好",attitude:c.POSITIVE,weight:2,tag:"奶茶"},{scope:"炸鸡也很好吃",attitude:c.POSITIVE,weight:2,tag:"炸鸡"}],[{scope:"团购划算",attitude:c.POSITIVE,weight:2,tag:"团购价格"},{scope:"活动多",attitude:c.POSITIVE,weight:2,tag:"优惠活动"},{scope:"优惠活动多",attitude:c.POSITIVE,weight:2,tag:"优惠活动"},{scope:"店面不错",attitude:c.POSITIVE,weight:2,tag:"店面"}],[{scope:"菜量很足",attitude:c.POSITIVE,weight:2,tag:"份量"},{scope:"量很足",attitude:c.POSITIVE,weight:2,tag:"份量"},{scope:"味道很辣",attitude:c.POSITIVE,weight:2,tag:"味道"},{scope:"环境一般",attitude:c.NEGATIVE,weight:2,tag:"环境"}],[{scope:"性价比非常高",attitude:c.POSITIVE,weight:2,tag:"性价比"},{scope:"东西也好吃",attitude:c.POSITIVE,weight:2,tag:"东西"},{scope:"环境非常好",attitude:c.POSITIVE,weight:2,tag:"环境"}],[{scope:"位置很好",attitude:c.POSITIVE,weight:2,tag:"位置"},{scope:"环境不错",attitude:c.POSITIVE,weight:2,tag:"环境"}]],[[{scope:"服务态度不好",attitude:c.NEGATIVE,weight:2,tag:"服务态度"},{scope:"态度不好",attitude:c.NEGATIVE,weight:2,tag:"服务态度"}],[{scope:"环境不错",attitude:c.POSITIVE,weight:2,tag:"环境"},{scope:"音响也好",attitude:c.POSITIVE,weight:2,tag:"音响"}],[{scope:"音质很好",attitude:c.POSITIVE,weight:2,tag:"音质"}],[{scope:"环境不是很好",attitude:c.NEGATIVE,weight:2,tag:"环境"},{scope:"音响还可以",attitude:c.POSITIVE,weight:2,tag:"音效"}],[{scope:"环境非常好",attitude:c.POSITIVE,weight:2,tag:"环境"},{scope:"服务非常好",attitude:c.POSITIVE,weight:2,tag:"服务"},{scope:"音效非常好",attitude:c.POSITIVE,weight:2,tag:"音效"}],[{scope:"音乐效果很好",attitude:c.POSITIVE,weight:2,tag:"音乐效果"},{scope:"环境不错",attitude:c.NEGATIVE,weight:2,tag:"环境"},{scope:"新装修",attitude:c.NEGATIVE,weight:2,tag:"装修"},{scope:"服务也好",attitude:c.NEGATIVE,weight:2,tag:"服务"}],[{scope:"环境很好",attitude:c.POSITIVE,weight:2,tag:"环境"},{scope:"服务态度也好",attitude:c.POSITIVE,weight:2,tag:"服务态度"},{scope:"效果也不错",attitude:c.POSITIVE,weight:2,tag:"效果"},{scope:"音响效果也不错",attitude:c.POSITIVE,weight:2,tag:"音效"}],[{scope:"环境还不错",attitude:c.POSITIVE,weight:2,tag:"环境"},{scope:"服务态度有待提高",attitude:c.NEGATIVE,weight:2,tag:"服务态度"}],[{scope:"麦克风不错",attitude:c.POSITIVE,weight:2,tag:"麦克风"},{scope:"音效出色",attitude:c.POSITIVE,weight:2,tag:"音效"},{scope:"团购价划算",attitude:c.POSITIVE,weight:2,tag:"团购"},{scope:"团购价划算",attitude:c.POSITIVE,weight:2,tag:"团购"}],[{scope:"服务好",attitude:c.POSITIVE,weight:2,tag:"服务"},{scope:"设备好",attitude:c.POSITIVE,weight:2,tag:"印象"},{scope:"环境好",attitude:c.POSITIVE,weight:2,tag:"环境"}]],[[{scope:"内饰谈不上精致",attitude:c.NEGATIVE,weight:2,tag:"内饰"},{scope:"动力足",attitude:c.POSITIVE,weight:2,tag:"动力"}],[{scope:"外观漂亮",attitude:c.POSITIVE,weight:2,tag:"外形"},{scope:"动力和操控性都不错",attitude:c.POSITIVE,weight:2,tag:"操控性"},{scope:"动力和操控性都不错",attitude:c.POSITIVE,weight:2,tag:"动力"}],[{scope:"空间挺大",attitude:c.POSITIVE,weight:2,tag:"空间"},{scope:"油耗也很低",attitude:c.POSITIVE,weight:2,tag:"耗油量"}],[{scope:"价格比较实惠",attitude:c.POSITIVE,weight:2,tag:"价钱"}],[{scope:"外观不错",attitude:c.POSITIVE,weight:2,tag:"外观"},{scope:"车内空间算比较大",attitude:c.POSITIVE,weight:2,tag:"空间"},{scope:"价格有点高",attitude:c.NEGATIVE,weight:2,tag:"价格"}],[{scope:"配件很便宜",attitude:c.POSITIVE,weight:2,tag:"配件"}],[{scope:"性能挺好",attitude:c.POSITIVE,weight:2,tag:"性能"},{scope:"性价比也还可以",attitude:c.POSITIVE,weight:2,tag:"性价比"}],[{scope:"车身行车稳定",attitude:c.POSITIVE,weight:2,tag:"车身"}],[{scope:"油耗低",attitude:c.POSITIVE,weight:2,tag:"耗油量"},{scope:"费用低",attitude:c.POSITIVE,weight:2,tag:"费用"}],[{scope:"空间狭小",attitude:c.NEGATIVE,weight:2,tag:"空间"},{scope:"实用性强",attitude:c.POSITIVE,weight:2,tag:"实用性"}]]],d=(0,I.default)("#demo-case-container"),s=(0,I.default)("#tag-list-container"),E=0,h=function(t){var e={},a=[],g=0;o[t].forEach(function(I,o){var d=[].map.call(I,function(t){return{word:t,attitude:c.NONE}});u[t][o].forEach(function(t){for(var a=t.scope,o=t.attitude,u=t.tag,s=t.weight,E=I.indexOf(a),h=a.length,p=E;p<E+h;p++)d[p].attitude=o;if(e.hasOwnProperty(u))e[u][o].value+=s;else{var w;e[u]=(w={},i(w,c.POSITIVE,{value:0}),i(w,c.NEGATIVE,{value:0}),w),e[u][o].value=s}var T=e[u][o].value;e[u][o].value>g&&(g=T)}),a.push(d)});var I=[];a.forEach(function(t,e){var a=t.map(function(t){var e=t.word;return'<span class="attitude-'+t.attitude+'">'+e+"</span>"}).join("");I.push('<div class="comment-demo-case">'+(e+1)+"."+a+"</div>")});var E=[];Object.keys(e).forEach(function(t){var a=e[t][c.POSITIVE].value,i=e[t][c.NEGATIVE].value,I=a/g*100+"%",o=i/g*100+"%",u=['<div class="comment-tag-item">','    <div class="comment-negative-bar">','        <div class="comment-negative-value" style="width: '+o+'"></div>',"    </div>",'    <div class="comment-tag-name-container">','        <div class="comment-tag-name">'+t+"</div>","    </div>",'    <div class="comment-positive-bar">','        <div class="comment-positive-value" style="width: '+I+'"></div>',"    </div>","</div>"].join("\r");E.push(u)}),d.html(I.join("\r")),s.html(E.join("\r"))};h(E);var p=(0,I.default)("#demo-switch"),w=o.length;p.on("click",function(){var t=E+1;t>=w&&(t=0),h(t),E=t}),(0,I.default)(".case-indicator > li").click(function(){var t=this;(0,I.default)(".case-indicator > li").each(function(e,a){(0,I.default)(a).toggleClass("active",e===(0,I.default)(t).index())}),(0,I.default)(".case-item").each(function(e,a){(0,I.default)(a).toggleClass("active",e===(0,I.default)(t).index())})})},588:function(t,e){},628:function(t,e,a){t.exports=a.p+"./../../template/cloud/nlp-comment_tag.html"},747:function(t,e,a){t.exports=a(323)}},[747]);