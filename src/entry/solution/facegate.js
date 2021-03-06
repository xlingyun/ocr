/**
 * @file 人脸闸机方案脚本入口
 * @author shiliang@baidu.com
 */

import $ from 'jquery';

import 'less/solution/facegate.less';

$(document).ready(function () {
    // case点击效果
    $('.case-indicator > li').click(function () {
        $('.case-indicator > li').each((i, e) => {
            $(e).toggleClass('active', i === $(this).index());
        });
        $('.case-item').each((i, e) => {
            $(e).toggleClass('active', i === $(this).index());
        });
    });
});
