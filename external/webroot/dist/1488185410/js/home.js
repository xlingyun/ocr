duAI([27],{161:function(t,e,n){t.exports=n(26)},26:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(0),l=a(i),u=n(20),c=a(u);n(68),(0,l.default)(document).ready(function(){function t(t,e){return t&&clearInterval(t),t=setInterval(e,u)}function e(e){a=e,i=t(i,n)}function n(){var t=(0,l.default)(".banner-content > li");t.each(function(e,n){if((0,l.default)(n).toggleClass("active",e===a%t.length),(0,l.default)(n).hasClass("video-bg")){var i=(0,l.default)(n).find("video")[0];try{e===a%t.length?(i.play(),(0,l.default)(n).find("video").css("opacity",1)):(i.currentTime=0,i.pause(),(0,l.default)(n).find("video").css("opacity",0))}catch(t){}}}),(0,l.default)(".banner-indicator > li").each(function(e,n){(0,l.default)(n).toggleClass("active",e===a%t.length)}),a++}var a=0,i=null,u=6e3;(0,l.default)(".banner-indicator > li").click(function(){var t=(0,l.default)(this).index();a=t,n(),e(t+1)}),(0,l.default)(".banner-indicator > li").eq(0).click(),new c.default({selector:".page-content .news-container",newsCounter:3}).render(),(0,l.default)(".solution-tab a").click(function(t){t.preventDefault(),(0,l.default)(".solution-tab a").removeClass("active"),(0,l.default)(this).addClass("active"),(0,l.default)(".solution-detail > div").hide(),(0,l.default)((0,l.default)(this).attr("href")).show()})})},68:function(t,e){}},[161]);