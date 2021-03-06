/**
 * @file 模板脚本入口
 * @author wangjiedong@baidu.com
 */

import $ from 'jquery';

let docAccordionMenu;

let jQuery = $;
(function ($, window, document, undefined) {
    let pluginName = 'docAccordionMenu';
    let defaults = {
        speed: 300,
        showDelay: 0,
        hideDelay: 0,
        singleOpen: true,
        clickEffect: true
    };
    var Plugin = function (element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    };
    $.extend(Plugin.prototype, {
        init: function () {
            this.openSubmenu();
            this.submenuIndicators();
            if (defaults.clickEffect) {
                this.addClickEffect();
            }
        },
        openSubmenu: function () {
            $(this.element).children('ul').find('li').bind('click touchstart', function (e) {
                e.stopPropagation();
                e.preventDefault();
                if ($(this).children('.submenu').length > 0) {
                    if ($(this).children('.submenu').css('display') === 'none') {
                        $(this).children('.submenu').delay(defaults.showDelay).slideDown(defaults.speed);
                        if (defaults.singleOpen) {
                            $(this).siblings().children('.submenu').slideUp(defaults.speed);
                        }
                        return false;
                    } else {
                        $(this).children('.submenu').delay(defaults.hideDelay).slideUp(defaults.speed);
                    }
                    if ($(this).children('.submenu').siblings('a').hasClass('submenu-indicator-minus')) {
                    }
                }
                window.location.href = $(this).children('a').attr('href');
            });
        },
        submenuIndicators: function () {
            if ($(this.element).find('.submenu').length > 0) {
            }
        },
        addClickEffect: function () {
            let ink;
            let d;
            let x;
            let y;
            $(this.element).find('a').bind('click touchstart', function (e) {
                $('.ink').remove();
                if ($(this).children('.ink').length === 0) {
                    $(this).prepend('<span class="ink"></span>');
                }
                ink = $(this).find('.ink');
                ink.removeClass('animate-ink');
                if (!ink.height() && !ink.width()) {
                    d = Math.max($(this).outerWidth(), $(this).outerHeight());
                    ink.css({
                        height: d,
                        width: d
                    });
                }
                x = e.pageX - $(this).offset().left - ink.width() / 2;
                y = e.pageY - $(this).offset().top - ink.height() / 2;
                ink.css({
                    top: y + 'px',
                    left: x + 'px'
                }).addClass('animate-ink');
            });
        }
    });
    $.fn[pluginName] = function (options) {
        this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
        return this;
    };
})(jQuery, window, document);
