duAI([16],{149:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var l=a(0),i=n(l),c=a(5),d=n(c);a(82),(0,i.default)(document).ready(function(){(0,i.default)(".case-indicator > li").click(function(){var e=this;(0,i.default)(".case-indicator > li").each(function(t,a){(0,i.default)(a).toggleClass("active",t===(0,i.default)(e).index())}),(0,i.default)(".case-item").each(function(t,a){(0,i.default)(a).toggleClass("active",t===(0,i.default)(e).index())})}),(0,i.default)(window).scroll((0,d.default)(function(){(0,i.default)(document).scrollTop()>=100&&(0,i.default)(".tech-intro-detail").trigger("demo")},300)),(0,i.default)(".tech-intro-detail").one("demo",function(){var e=0,t=(0,i.default)(".face-list > li"),a=setInterval(function(){t.removeClass("scanning").eq(e).addClass("scanning"),e++===t.length&&(t.addClass("scanned"),clearInterval(a))},700)})})},82:function(e,t){}},[149]);