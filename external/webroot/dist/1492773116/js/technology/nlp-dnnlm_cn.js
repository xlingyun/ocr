duAI([23],{325:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=e(2),i=n(a),l=e(29),d=n(l),s=e(365);e(592),e(632),(0,i.default)(document).ready(function(){(0,i.default)(".case-indicator > li").click(function(){var t=this;(0,i.default)(".case-indicator > li").each(function(o,e){(0,i.default)(e).toggleClass("active",o===(0,i.default)(t).index())}),(0,i.default)(".case-item").each(function(o,e){(0,i.default)(e).toggleClass("active",o===(0,i.default)(t).index())})}),(0,i.default)(window).scroll((0,d.default)(function(){(0,i.default)(document).scrollTop()>=100&&(0,i.default)(".tech-intro-detail").trigger("demo")},300)),(0,i.default)(".tech-intro-detail").one("demo",function(){(0,i.default)(this).find(".intro-demo").addClass("scanned")});var t=0,o=0;(0,i.default)(".refresh-demo").click(function(){o=0;var e=s.DNN_DATA[t++%s.DNN_DATA.length];(0,i.default)(".demo-input").attr("data-text",e.text);var n=Object.keys(e.options).map(function(t){var n=["<li>",'    <a role="button" data-score="'+e.options[t]+'" class="btn-normal">'+t+"</a>","</li>"].join("");return o=0===o?e.options[t]:e.options[t]<o?e.options[t]:o,(0,i.default)(n)});(0,i.default)("#demo-options").html(n).find("a.btn-normal").eq(0).click()}),(0,i.default)("#demo-options").on("click","a.btn-normal",function(){(0,i.default)("#demo-options .btn-normal").removeClass("selected");var t=(0,i.default)(this);t.addClass("selected");var e=(0,i.default)(".demo-input"),n=e.attr("data-text");e.html(n.replace(/\{option\}/g,"<span>"+t.html()+"</span>"));var a=parseFloat(t.attr("data-score"));(0,i.default)(".demo-score-detail").html(a).toggleClass("good",o===a).toggleClass("bad",o!==a)}),(0,i.default)(".refresh-demo").click()})},365:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.DNN_DATA=[{text:"2016全国{option}卷答题模板",options:{"高考":254.68,"大考":485.32,"低考":1410.37}},{text:"床前{option}光，疑是地上霜",options:{"明月":79.07,"星星":2824.07,"白月":2071.61}},{text:"落霞与孤鹜{option}，秋水共长天一色",options:{"齐飞":20.39,"齐跑":321.93,"双飞":84.66}},{text:"众里寻{option}千百度，蓦然回首，那人却在，灯火阑珊处",options:{"他":29.71,"她":44.93,ta:158.06}},{text:"基于和谐教学法的高校{option}舞蹈教学研究",options:{"体育":82.05,"教育":250.02,"德育":237.48}},{text:"亚马逊河里的四种最危险的{option}",options:{"动物":356.63,"花朵":721.42,"水果":412.81}},{text:"新能源汽车动力电池项目正式{option}",options:{"展开":59.01,"启动":34.59,"起飞":121.29}},{text:"曲曲折折的荷塘上面,弥望的是田田的{option}",options:{"树叶":446.7,"叶子":350.22,"树木":529.83}},{text:"我国的黄土高原上为什么常年覆盖着{option}？",options:{"黄土":185.71,"山丘":247.26,"巧克力":333.96}},{text:"太阳为什么会有太阳{option}？",options:{"黑子":140.11,"白子":393.31,"黑斑":256.93}}]},592:function(t,o){},632:function(t,o,e){t.exports=e.p+"./../../template/cloud/nlp-dnnlm_cn.html"},752:function(t,o,e){t.exports=e(325)}},[752]);