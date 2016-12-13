{%extends file="brain/page/layout/layout.tpl"%}

{%block name="title"%}图像技术-百度大脑{%/block%}
{%block name="seo_keywords"%}百度大脑,Baidu Brain,百度AI,百度大脑开放平台,图像技术{%/block%}
{%block name="seo_description"%}图像技术，基于深度学习算法，智能识别图像中文字内容和含义、通过人脸图像比对验证相似度以及检测图片色情度。{%/block%}
{%block name="head_static"%}
{%require name="brain:page/tx/tx.css"%}
{%require name="brain:page/tx/tx.js"%}
{%/block%}
{%block name="content"%}
<div class="introduction" style="position: fixed;top: 0;width: 100%;left: 0;color: transparent !important;z-index: -1;">
    <h1>图像技术</h1>
    <p><b>基于深度学习算法，智能识别图像中文字内容和含义、通过人脸图像比对验证相似度以及检测图片色情度</b></p>
    <ul>
        <li><b>OCR</b></li>
        <li><b>人脸识别</b></li>
        <li><b>色情识别</b></li>
    </ul>
</div>
<div class="body">
    <div class="a" style="height: 500px; background-size: 100% 100%">
        <div class="sprite" style="height: 100%;background-position: center 0">
            <!--<a class="absolute btn-bg-blue"
               style="height: 45px; width: 140px; left: 761px; top: 353px;"
               href="http://hetu.baidu.com/api/?categoryId=187" target="_blank"></a>-->
        </div>
    </div>
    <div class="sprite relative" style="height: 443px;background-position: center -500px" id="intro">
        <a class="absolute btn-bg-white"
           style="height: 31px;  width: 81px; left: 89px; top: 347px; line-height: 28px; text-align: center;"
           href="https://cloud.baidu.com/product/ocr.html" target="_blank">查看更多</a>
        <a class="absolute btn-bg-white"
           style="height: 31px;  width: 82px; left: 561px; top: 347px; line-height: 28px; text-align: center;"
           href="https://cloud.baidu.com/product/bfr.html" target="_blank">查看更多</a>
        <a class="absolute btn-bg-white"
           style="height: 31px;  width: 82px; left: 1040px; top: 347px; line-height: 28px; text-align: center;"
           href="mailto:ai@baidu.com" target="_blank">技术咨询</a>
    </div>
    <!--<div class="sep-line"></div>-->
    <div>
        <div class="sprite" style="height: 385px;background-position: center -943px;"></div>
    </div>
    <!--<div class="sep-line"></div>-->
    <div>
        <div class="sprite" style="height: 110px;background-position: center -1327px;"></div>
    </div>

    <div class="s-w relative" style="height: 514px;overflow: hidden;">
        <div class="scroll" style="width: 100%; height: 100%; white-space: nowrap; font-size: 0;">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="tip-btn-w">
            <div class="tip-btn">拍照翻译</div>
            <div class="tip-btn">刷脸身份验证</div>
            <div class="tip-btn">色情图像识别</div>
        </div>
    </div>
    <!--
    <div style="background-color: #0077d5">
        <div class="sprite" style="height: 240px; background-position: center -1814px; ">
            <a href="#" style="    position: absolute;
    width: 260px;
    height: 65px;
    top: 123px;
    left: 0;"></a>
            <a href="http://idl-api.baidu.com/?r=demo/facebase" style=" position: absolute;
    width: 260px;
    height: 65px;
    top: 123px;
    left: 313px;"></a>
            <a href="http://idl-api.baidu.com/?r=demo/democlass&type=class970" style=" position: absolute;
    width: 260px;
    height: 65px;
    top: 123px;
    left: 626px;"></a>
            <a href="http://stu.baidu.com" style=" position: absolute;
    width: 260px;
    height: 65px;
    top: 123px;
    left: 939px;"></a>
        </div>
    </div>
    -->
    <!--
    <div class="sprite" style="height: 210px;background-position: center -2052px">
        <a style="position: absolute; left: 97px; top: 140px; width: 100px; height: 30px"
           href="http://hetu.baidu.com/api/platform/index?platformId=1533"></a>
        <a style="position: absolute; left: 404px; top: 140px; width: 100px; height: 30px"
           href="http://hetu.baidu.com/api/platform/index?platformId=1533"></a>
        <a style="position: absolute; left: 706px; top: 140px; width: 100px; height: 30px"
           href="http://hetu.baidu.com/api/platform/index?platformId=1533"></a>
        <a style="position: absolute; left: 1008px; top: 140px; width: 100px; height: 30px"
           href="http://hetu.baidu.com/api/platform/index?platformId=1533"></a>
    </div>
    -->
    <div style="background: #f5f5f5" id="contact-us">
        <div class="sprite" style="height: 172px;background-position: center -1965px">
          <a href="#" class="contact consult" style="text-align: left; outline: none; position: absolute;left: 125px;top: 93px;height: 30px; line-height: 24px;">立即提交</a>
          <a href="#" class="subscribe contact" style="text-align: left; outline: none; position: absolute;left: 369px;top: 93px;height: 30px; line-height: 24px;">邮件订阅</a>
          <a href="#" class="contact get-qr-code" role="button" style="width: 75px; height: 25px; position: absolute;width:175px; left: 550px; top: 93px; line-height: 24px;">
              <span>点击获取公众号二维码</span>
              <img src="/index/static/brain/page/home/img/qr-code.png" style="display:none; position: absolute; left: 50%; top: 50%;margin: -70px 0 0 -70px;">
          </a>
        </div>
    </div>
</div>

{%require name='brain:page/tx/tx.tpl'%}{%/block%}
