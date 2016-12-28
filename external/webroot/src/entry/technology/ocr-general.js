/**
 * @file ocr-通用印刷文字识别脚本入口
 * @author shiliang@baidu.com
 */
'use strict';

import $ from 'jquery';
import DemoCanvas from '../../component/widget/demoCanvas';
import {scanGeneralText} from '../../model/demoAPI';

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

    // 触发功能介绍动画
    $(window).scroll(() => {
        if ($(document).scrollTop() >= 100) {
            $('.tech-intro-detail').trigger('demo');
        }
    });

    // 绑定功能介绍动画
    $('.tech-intro-detail').one('demo', function () {
        $('.original-card').addClass('scanning');
        setTimeout(function () {
            $('.original-card').removeClass('scanning').addClass('scanned');
            $('.scan-result').addClass('scanned');
        }, 3000);
    });

    // 线上demo开始
    let isScanning = false;

    let resetDemo = () => {
        $('#demo-json > p').empty();
        $('#demo-result .result-background').attr('class', 'result-background');
        $('#demo-photo-upload, #scan-photo').removeClass('disabled');
        isScanning = false;
    };

    let startScan = function (type, imgSrc) {
        $('#demo-result .result-background').attr('class', 'result-background loading');
        $('#demo-result tbody').empty();
        let options = {
            success: function (res) {
                $('#demo-photo-upload, #scan-photo').removeClass('disabled');
                $('#demo-json > p').html(JSON.stringify(res, null, '\t'));
                $('#demo-result .result-background').removeClass('loading');

                if (res.errno !== 0) {
                    $('#demo-result .result-background').toggleClass('has-result man female', false)
                        .toggleClass('error-upload-fail', res.errno === 1)
                        .toggleClass('error-timeout', res.errno === 28)
                        .toggleClass('error-image-format', res.errno === 216201);
                    isScanning = false;
                    return false;
                }
                let hasNoResult = !res.data.words_result_num;

                for (let i = 0, len = res.data.words_result_num; i < len; i ++) {
                    let record = res.data.words_result[i];
                    $('#demo-result tbody').append([
                        '<tr>',
                            '<td>' + (i + 1) + '</td>',
                            '<td>' + record.words + '</td>',
                            '<td>' + record.location.left + '</td>',
                            '<td>' + record.location.top + '</td>',
                            '<td>' + record.location.width + '</td>',
                            '<td>' + record.location.height + '</td>',
                        '</tr>'
                    ].join(''));
                }

                $('#demo-result .result-background').toggleClass('has-result', !hasNoResult)
                    .toggleClass('error-no-result', hasNoResult);
                isScanning = false;
            },
            fail: function (xhr) {
                console.error('接口出错：' + xhr.status + ' - ' + xhr.statusText);
                resetDemo();
            }
        };
        if (type === 'url') {
            options.imageUrl = imgSrc;
        } else if (type === 'stream') {
            options.image = imgSrc;
        }

        scanGeneralText(options);
    };

    // 上传图片
    $('#demo-photo-upload  > input').change(function (e) {
        if (isScanning) {
            alert('操作正在进行中，请稍候再试！');
            return;
        }
        isScanning = true;
        $('#demo-photo-upload, #scan-photo').addClass('disabled');
        let file = $(this)[0].files[0];
        new DemoCanvas({
            selector: '#demo-origin',
            image: file,
            type: 'stream',
            success: imgSrc => {
                startScan('stream', imgSrc);
            },
            fail: resetDemo
        });
    });

    // demo 检测输入框事件绑定
    $('#demo-photo-url').change(function () {
        $('.demo-card-list > li').removeClass('active');
    });

    // 检测按钮事件
    $('#scan-photo').click(function () {
        if (isScanning) {
            alert('操作正在进行中，请稍候再试！');
            return;
        }
        isScanning = true;
        if ($(this).hasClass('disabled') || !$('#demo-photo-url').val()) {
            return false;
        }
        $('#demo-photo-upload, #scan-photo').addClass('disabled');
        new DemoCanvas({
            selector: '#demo-origin',
            image: $('#demo-photo-url').val(),
            type: 'url',
            success: imgSrc => {
                startScan('url', imgSrc);
            },
            fail: resetDemo
        });
    });

    // 阻止多次上传
    $('#demo-photo-upload').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
    });

    // 绑定实例图点击事件
    $('.demo-card-list > li').click(function () {
        if (isScanning) {
            alert('操作正在进行中，请稍候再试！');
            return;
        }
        isScanning = true;
        $('.demo-card-list > li').removeClass('active');
        $(this).addClass('active');
        let imgSrc = window.location.origin + $(this).find('img').attr('src');
        $('#demo-photo-upload, #scan-photo').addClass('disabled');
        new DemoCanvas({
            selector: '#demo-origin',
            image: imgSrc,
            type: 'url',
            success: imgSrc => {
                startScan('url', imgSrc);
            },
            fail: resetDemo
        });
    });

    // 触发初始化效果
    $('.demo-card-list > li')[0].click();
});