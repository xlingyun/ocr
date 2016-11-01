{%extends file="brain/page/layout/layout.tpl"%}

{%block name="title"%}百度大脑{%/block%}
{%block name="seo_keywords"%}百度大脑,机器学习,大数据,图像识别,语音识别{%/block%}
{%block name="seo_description"%}{%/block%}
{%block name="head_static"%}
{%require name="brain:page/voice/voice.css"%}
{%require name="brain:page/voice/voice.js"%}
{%/block%}
{%block name="header"%}
    {%widget
    name="brain:widget/nav/nav.tpl"
    page_name="nav"
    %}
{%/block%}
{%block name="content"%}
    {%widget
    name="brain:widget/voice/voice.tpl"
    page_name="voice"
    %}
{%require name='brain:page/voice/voice.tpl'%}{%/block%}

