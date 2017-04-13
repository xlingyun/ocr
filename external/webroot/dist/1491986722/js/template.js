!function(n){function r(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return n[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var a={};r.m=n,r.c=a,r.i=function(n){return n},r.d=function(n,a,i){r.o(n,a)||Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:i})},r.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(a,"a",a),a},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="//ai.bdstatic.com/dist/",r(r.s=751)}({339:function(n,r,a){n.exports='<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title>{%$title%}</title>\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <meta name="keywords" content="{%$keyword%}">\r\n    <meta name="description" content="{%$description%}">\r\n    <meta name="baidu-site-verification" content="GOPjfm49Yc" />\r\n    <script src="https://hm.baidu.com/hm.js?fdad4351b2e90e0f489d7fbfc47c8acf"></script>\r\n    <!--[if lt IE 9]>\r\n    <script src="https://cdn.bootcss.com/modernizr/2.8.3/modernizr.min.js"></script>\r\n    <![endif]-->\r\n    <link rel="shortcut icon" href="'+a(609)+'">\r\n\r\n    <!--[if IE 9]>\r\n    <link rel="stylesheet" href="<%= htmlWebpackPlugin.files.chunks.ie9.css[0] %>">\r\n    <![endif]-->\r\n    <link rel="stylesheet" href="<%= htmlWebpackPlugin.files.chunks.base.css[0] %>">\r\n    <link rel="stylesheet" href="<%= htmlWebpackPlugin.options.cssFile %>">\r\n</head>\r\n<body class="ai-platform">\r\n<header class="header-nav">\r\n    <div class="container">\r\n        <div class="logo">\r\n            <a href="https://ai.baidu.com">\r\n                <img src="'+a(600)+'" alt="百度大脑">\r\n            </a>\r\n        </div>\r\n        <nav class="top-nav">\r\n            <ul>\r\n                <li><a href="/">首页</a></li>\r\n                <li>\r\n                    <a>技术服务</a>\r\n                    <ul class="sub-top-nav" id="tech-service">\r\n                        <li id="tech-speech">\r\n                            <div class="tech-title">\r\n                                <span class="tech-title-icon"></span>语音技术\r\n                            </div>\r\n                            <div class="sub-tech-title">\r\n                                <span>语音识别</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="/tech/speech/asr">语音识别</a></li>\r\n                                <li><a href="/tech/speech/wake">语音唤醒</a></li>\r\n                            </ul>\r\n                            <div class="sub-tech-title">\r\n                                <span>语音合成</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="/tech/speech/tts">语音合成</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li id="tech-image">\r\n                            <div class="tech-title">\r\n                                <span class="tech-title-icon"></span>图像技术\r\n                            </div>\r\n                            <div class="sub-tech-title">\r\n                                <span>文字识别</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="/tech/ocr/general">通用文字识别</a></li>\r\n                                <li><a href="/tech/ocr/idcard">身份证识别</a></li>\r\n                                <li><a href="/tech/ocr/bankcard">银行卡识别</a></li>\r\n                                <li>\r\n                                    <a href="/tech/ocr/general_enhanced" id="ocr-enhanced-link">\r\n                                        通用文字识别（含生僻字版）\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                            <div class="sub-tech-title">\r\n                                <span>人脸识别</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="/tech/face/detect">人脸检测</a></li>\r\n                                <li><a href="/tech/face/compare">人脸对比</a></li>\r\n                                <li><a href="/tech/face/search">人脸查找</a></li>\r\n                            </ul>\r\n                            <div class="sub-tech-title">\r\n                                <span>黄反识别</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="/tech/antiporn">黄反识别</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li id="tech-nlp">\r\n                            <div class="tech-title">\r\n                                <span class="tech-title-icon"></span>自然语言\r\n                            </div>\r\n                            <div class="sub-tech-title">\r\n                                <span>词汇级</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="/tech/nlp/lexical">词法分析</a></li>\r\n                                <li><a href="/tech/nlp/word_embedding">中文词向量表示</a></li>\r\n                            </ul>\r\n                            <div class="sub-tech-title">\r\n                                <span>短文本级</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="/tech/nlp/dnnlm_cn">中文DNN语言模型</a></li>\r\n                                <li><a href="/tech/nlp/simnet">短文本相似度</a></li>\r\n                                <li><a href="/tech/nlp/comment_tag">评论观点抽取</a></li>\r\n                            </ul>\r\n                            <div class="sub-tech-title">\r\n                                <span>机器翻译</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="http://api.fanyi.baidu.com/api/trans/product/index" target="_blank">机器翻译平台</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li id="tech-user-profile">\r\n                            <div class="tech-title">\r\n                                <span class="tech-title-icon"></span>用户画像\r\n                            </div>\r\n                            <div class="sub-tech-title">\r\n                                <span>用户画像</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="http://datamart.baidu.com/datax-web/introduce_datax" target="_blank">用户画像平台</a></li>\r\n                            </ul>\r\n                            <div class="sub-tech-title">\r\n                                <span>推荐云平台</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="http://recsys.baidu.com/" target="_blank">推荐云平台</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li id="tech-machine-learning">\r\n                            <div class="tech-title">\r\n                                <span class="tech-title-icon"></span>机器学习\r\n                            </div>\r\n                            <div class="sub-tech-title">\r\n                                <span>PaddlePaddle</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="http://www.paddlepaddle.org/" target="_blank">PaddlePaddle</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li id="tech-ar">\r\n                            <div class="tech-title">\r\n                                <span class="tech-title-icon"></span>AR增强现实\r\n                            </div>\r\n                            <div class="sub-tech-title">\r\n                                <span>AR增强现实</span>\r\n                            </div>\r\n                            <ul class="tech-list">\r\n                                <li><a href="/tech/ar">AR内容平台</a></li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a>解决方案</a>\r\n                    <ul class="sub-top-nav">\r\n                        <li><a href="/solution/robot">机器人</a></li>\r\n                        <li><a href="/solution/faceprint">人脸核身</a></li>\r\n                        <li><a href="/solution/facegate">人脸闸机</a></li>\r\n                        <li><a href="/solution/dialog">号码风险识别</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href="/docs">文档中心</a>\r\n                </li>\r\n                <li>\r\n                    <a href="/sdk">SDK下载</a>\r\n                </li>\r\n                <li>\r\n                    <a>帮助与支持</a>\r\n                    <ul class="sub-top-nav">\r\n                        <li><a href="/support/video">教学视频</a></li>\r\n                        <li><a href="/support/faq">常见问题</a></li>\r\n                        <li><a href="/support/news">新闻中心</a></li>\r\n                        <li><a href="http://developer.baidu.com/forum#ai">技术论坛</a></li>\r\n                        <li><a href="/support/about">关于我们</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class="login">\r\n            <ul>\r\n                {%if $userInfo eq Null%}\r\n                <li><a href="https://login.bce.baidu.com?fromai=1&redirect=https%3A%2F%2Fai.baidu.com">登录</a></li>\r\n                <li><a class="btn-primary free-demo" role="button" href="https://console.bce.baidu.com/?fromai=1#/aip/overview">免费试用</a></li>\r\n                {%/if%}\r\n                {%if $userInfo != Null%}\r\n                {%if $userInfo.internalLink !== Null%}\r\n                <li><a class="btn-other internal-link" role="button" href="{%$userInfo.internalLink%}">内部版本</a></li>\r\n                {%/if%}\r\n                <li>\r\n                    <a class="console" href="https://console.bce.baidu.com/?fromai=1#/aip/overview">控制台</a>\r\n                </li>\r\n                <li>\r\n                    <a>{%$userInfo.uname%}</a>\r\n                    <ul class="sub-top-nav">\r\n                        <li><a href="https://passport.baidu.com/?logout&u=https://ai.baidu.com">退出</a></li>\r\n                    </ul>\r\n                </li>\r\n                {%/if%}\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</header>\r\n<div class="ai-platform page-content">\r\n    <%= require(\'view/\' +  htmlWebpackPlugin.options.mainContent + \'.html\') %>\r\n</div>\r\n<aside class="aside-action">\r\n    <ul>\r\n        <li class="consult">\r\n            <a id="ai-consult" data-spec="合作咨询"></a>\r\n        </li>\r\n        <li class="feedback">\r\n            <a data-spec="在线咨询"\r\n               href="https://ikefu.baidu.com/web/ai-platform"\r\n               target="_blank"\r\n               id="feedback-btn"></a>\r\n        </li>\r\n        <li class="back-top">\r\n            <a data-spec="返回顶部"></a>\r\n        </li>\r\n    </ul>\r\n</aside>\r\n<footer class="footer-nav">\r\n    <div class="container clear-float">\r\n        <div class="footer-links">\r\n            <nav class="quick-path">\r\n                <h3>控制台入口</h3>\r\n                <ul>\r\n                    <li><a href="https://console.bce.baidu.com/ai/?fromai=1#/ai/speech/overview/index">百度语音</a></li>\r\n                    <li><a href="https://console.bce.baidu.com/ai/?fromai=1#/ai/ocr/overview/index">文字识别</a></li>\r\n                    <li><a href="https://console.bce.baidu.com/ai/?fromai=1#/ai/face/overview/index">人脸识别</a></li>\r\n                    <li><a href="https://console.bce.baidu.com/ai/?fromai=1#/ai/nlp/overview/index">自然语言处理</a></li>\r\n                    <li><a href="https://console.bce.baidu.com/ai/?fromai=1#/ai/antiporn/overview/index">黄反识别</a></li>\r\n                </ul>\r\n            </nav>\r\n            <nav class="resource">\r\n                <h3>资源</h3>\r\n                <ul>\r\n                    <li><a href="/docs">新手指南</a></li>\r\n                    <li><a href="/docs">技术文档</a></li>\r\n                    <li><a href="/sdk">SDK下载</a></li>\r\n                </ul>\r\n            </nav>\r\n            <nav class="support">\r\n                <h3>支持与帮助</h3>\r\n                <ul>\r\n                    <li><a href="/support/video">教学视频</a></li>\r\n                    <li><a href="/support/faq">常见问题</a></li>\r\n                    <li><a href="/support/news">新闻中心</a></li>\r\n                    <li><a href="/support/about">关于我们</a></li>\r\n                </ul>\r\n            </nav>\r\n            <nav class="focus">\r\n                <h3>关注百度大脑</h3>\r\n                <div class="qr-code"></div>\r\n                <p>扫码关注官方公众号</p>\r\n                <a class="email-subscribe">邮件订阅</a>\r\n            </nav>\r\n        </div>\r\n        <div class="news">\r\n            <h3>新闻动态</h3>\r\n            <div class="news-container"></div>\r\n        </div>\r\n    </div>\r\n    <div class="container">\r\n        <nav class="friendly-links">\r\n            <h3>友情链接</h3>\r\n            <ul>\r\n                <li><a href="http://www.paddlepaddle.org/cn/index.html" target="_blank">PaddlePaddle机器学习平台</a></li>\r\n                <li><a href="http://yuyin.baidu.com/" target="_blank">百度语音</a></li>\r\n                <li><a href="http://fanyi.baidu.com/" target="_blank">百度翻译</a></li>\r\n                <li><a href="http://idl.baidu.com/" target="_blank">百度深度学习实验室</a></li>\r\n                <li><a href="http://bdp.baidu.com/" target="_blank">百度大数据+</a></li>\r\n                <li><a href="http://datamart.baidu.com/" target="_blank">百度大数据+数据开放平台</a></li>\r\n                <li><a href="http://recsys.baidu.com/" target="_blank">Recsys推荐云平台</a></li>\r\n                <li><a href="https://cloud.baidu.com/?t=cp:online-media%7Cci:%7Ccn:ai" target="_blank">百度云</a></li>\r\n                <li><a href="http://www.chuanke.com/" target="_blank">百度传课</a></li>\r\n                <li><a href="http://app.baidu.com" target="_blank">百度开发者平台</a></li>\r\n                <li><a href="http://zhongbao.baidu.com" target="_blank">百度数据众包</a></li>\r\n                <li><a href="http://union.baidu.com" target="_blank">百度联盟</a></li>\r\n                <li><a href="http://tongji.baidu.com" target="_blank">百度统计</a></li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n    <div class="container">\r\n        <p class="copyright">©2017 Baidu <a href="https://www.baidu.com/duty/" target="_blank">使用百度必读</a></p>\r\n    </div>\r\n</footer>\r\n<script src="<%= htmlWebpackPlugin.options.jsCommonBundle %>"></script>\r\n<script src="<%= htmlWebpackPlugin.options.jsFile %>"></script>\r\n<script>\r\n    (function(){\r\n        var bp = document.createElement(\'script\');\r\n        var curProtocol = window.location.protocol.split(\':\')[0];\r\n        if (curProtocol === \'https\'){\r\n            bp.src = \'https://zz.bdstatic.com/linksubmit/push.js\';\r\n        }\r\n        else{\r\n            bp.src = \'http://push.zhanzhang.baidu.com/push.js\';\r\n        }\r\n        var s = document.getElementsByTagName("script")[0];\r\n        s.parentNode.insertBefore(bp, s);\r\n    })();\r\n</script>\r\n</body>\r\n</html>\r\n'},600:function(n,r){n.exports="//ai.bdstatic.com/dist/1491986722/ai_images/logo.png"},609:function(n,r){n.exports="//ai.bdstatic.com/dist/ai_images/favicon-32.ico"},751:function(n,r,a){n.exports=a(339)}});