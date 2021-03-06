/**
 * @file ocr-通用印刷文字识别脚本入口
 * @author shiliang@baidu.com
 */

import $ from 'jquery';
import throttle from 'lodash.throttle';
import DemoCanvas from '../../component/widget/demoCanvas';
import {scanGeneralText} from '../../model/demoAPI';
import AlertModal from '../../component/widget/alertModal';


/* eslint-disable */
import 'less/technology/ocr-general.less';

import '!file-loader?name=./../../template/cloud/[name].html!extract-loader!html-loader!view/technology/ocr-general.html';
/* eslint-enable */

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
    $(window).scroll(
        throttle(
            () => {
                if ($(document).scrollTop() >= 100) {
                    $('.tech-function-detail').trigger('demo');
                }
            },
            300
        )
    );

    $(window).scroll(
        throttle(
            () => {
                if ($(document).scrollTop() >= 500) {
                    $('.tech-tab').addClass('tech-top');
                } else {
                    $('.tech-tab').removeClass('tech-top');
                }
            },
            16
        )
    )

    // tab切换
    $('.ocr-general-1, .ocr-general-2').hide();
    $('.tech-tab-list .tech-tab-item').eq(0).addClass('tech-tab-change');
    $('.tech-tab-list').on('click', '.tech-tab-item', function() {
        $(this).addClass('tech-tab-change').siblings().removeClass('tech-tab-change');
        $('.ocr-general-'+($(this).index())).show().siblings('.ocr-general').hide();
    })

    // 绑定功能介绍动画
    $('.tech-function-detail').one('demo', function () {
        $('.tech-function-original-card').addClass('tech-function-scanning');
        setTimeout(function () {
            $('.tech-function-original-card').removeClass('tech-function-scanning').addClass('tech-function-scanned');
            $('.tech-function-scan-result').addClass('tech-function-scanned');
        }, 3000);
    });

    // 线上demo开始
    let isScanning = false;

    let resetDemo = () => {
        $('#demo-json > p').empty();
        $('#demo-result .result-background').attr('class', 'result-background');
        $('#demo-photo-upload, #scan-photo').removeClass('disabled');
        $('#demo-photo-upload  > input').val('');
        isScanning = false;
    };

    let startScan = function (type, imgSrc, url) {
        $('#demo-result .result-background').attr('class', 'result-background loading');
        $('#demo-result tbody').empty();
        let options = {
            success(res) {
                $('#demo-photo-upload, #scan-photo').removeClass('disabled');
                $('#demo-json > p').html(JSON.stringify(res, null, '\t'));
                $('#demo-result .result-background').removeClass('loading');

                if (res.errno !== 0) {
                    $('#demo-result .result-background').toggleClass('has-result man female', false)
                        .toggleClass('error-upload-fail', res.errno === 107)
                        .toggleClass('error-timeout', res.errno === 28)
                        .toggleClass('error-image-format', res.errno === 106);
                    isScanning = false;
                    if ([106, 107, 28].indexOf(res.errno) === -1) {
                        new AlertModal(res.msg);
                    }
                    return false;
                }
                let hasNoResult = !res.data.words_result_num;
                for (let i = 0, len = res.data.words_result_num; i < len; i++) {
                    let record = res.data.words_result[i];
                    $('#demo-result tbody').append([
                        '<tr>',
                            '<td>' + (i + 1) + '</td>',
                            '<td>' + record.words + '</td>',
                        '</tr>'
                    ].join(''));
                }

                $('#demo-result .result-background').toggleClass('has-result', !hasNoResult)
                    .toggleClass('error-no-result', hasNoResult);
                isScanning = false;
            },
            fail(xhr) {
                new AlertModal('接口发生错误：' + xhr.status + ' - ' + xhr.statusText);
                resetDemo();
            }
        };
        if (type === 'url') {
            options.imageUrl = url;
        }
        else if (type === 'stream') {
            options.image = imgSrc;
        }

        scanGeneralText(options);
    };

    // 上传图片
    $('#demo-photo-upload  > input').change(function (e) {
        if ($(this).val() === '') {
            return false;
        }
        if (isScanning) {
            new AlertModal('操作正在进行中，请稍候再试！');
            return;
        }
        isScanning = true;
        $('#demo-photo-upload, #scan-photo').addClass('disabled');
        let file = $(this)[0].files[0];
        new DemoCanvas({
            selector: '#demo-origin-general',
            image: file,
            type: 'stream',
            success(imgSrc) {
                $('#demo-photo-upload  > input').val('');
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
            new AlertModal('操作正在进行中，请稍候再试！');
            return;
        }
        if ($(this).hasClass('disabled') || !$('#demo-photo-url').val()) {
            return false;
        }
        isScanning = true;
        let url = $('#demo-photo-url').val();
        $('#demo-photo-upload, #scan-photo').addClass('disabled');
        new DemoCanvas({
            selector: '#demo-origin-general',
            image: url,
            type: 'url',
            apiType: 'commontext',
            success(imgSrc) {
                startScan('url', imgSrc, url);
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

    const $demoCardImgList = $('.demo-card-list > li');

    // 绑定实例图点击事件
    $demoCardImgList.click(function () {
        if (isScanning) {
            new AlertModal('操作正在进行中，请稍候再试！');
            return;
        }
        isScanning = true;
        $('.demo-card-list > li').removeClass('active');
        $(this).addClass('active');
        let url = `${window.location.protocol}${$(this).find('img').attr('src')}`;
        $('#demo-photo-upload, #scan-photo').addClass('disabled');
        new DemoCanvas({
            selector: '#demo-origin-general',
            image: url,
            type: 'url',
            toCheck: false,
            success(imgSrc) {
                startScan('url', imgSrc, url);
            },
            fail: resetDemo
        });
    });

    // 触发初始化效果
    $('.demo-card-list > li')[0].click();
});
