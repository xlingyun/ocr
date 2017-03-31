/**
 * @file 适用于百度大脑md编译的marked renderer
 * @author FranckChen(chenfan02@baidu.com)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const handlebars = require('handlebars');
const isUrl = require('is-url');
const Renderer = require('marked').Renderer;
const hljs = require('highlight.js');

const codeTpl = handlebars.compile(
    fs.readFileSync(path.join(__dirname, 'partials', 'code.hbs')).toString()
);

hljs.configure({
    // tab -> 4个空格, 有时候pm文档会tab空格混写
    tabReplace: '    '
});

function md5(text) {
    return crypto.createHash('md5').update(text).digest('hex').substr(0, 8);
}

const titleSet = new Set();

/**
 * 为每个h1,h2标题附加id.以文章名-标题名-序号为依据，生成md5
 *
 * @param {string} mdName 文档名
 * @param {string} heading 标题名
 * @param {number=} index 序号
 * @return {string} 8位md5
 */
const getId = function (mdName, heading, index = 0) {
    const raw = index
        ? mdName + heading + index
        : mdName + heading;

    if (titleSet.has(raw)) {
        return getId(mdName + heading, +index + 1);
    }

    titleSet.add(raw);
    return md5(raw);
};

module.exports = class AiMDRenderer extends Renderer {
    constructor(mdName) {
        super();

        this._mdName = mdName;
        this._headings = [];
        this._imageData = [];

        // 标题处理
        this.heading = function (text, level) {
            // 只针对一、二级标题做锚点
            if (level <= 2) {
                const id = getId(mdName, text);

                this._headings.push({
                    level,
                    text,
                    id
                });

                return `
                    <h${level} id="${id}">
                        ${text}
                    </h${level}>
                `;
            }

            return `
                    <h${level}>
                        ${text}
                    </h${level}>
                `;
        };

        // 图片处理
        this.image = function (href, title, text) {
            // 如果图片url有误
            if (!isUrl(href)) {
                console.log(`${this._mdName}文档的图片链接${href}有误，忽略编译!`);

                return '';
            }

            this._imageData.push({
                href,
                title,
                text
            });

            return `{{>image imageData.[${this._imageData.length - 1}]}}`;
        };

        // 代码块
        this.code = function (code, language) {
            // 有时候pm会忘了写语言类型
            return codeTpl({
                code: hljs.highlightAuto(code).value
            });
        };

        // 行内代码
        this.codespan = function (code) {
            return codeTpl({
                code: hljs.highlightAuto(code).value
            });
        };

        this.link = function (href, title, text) {
            // 文档的所有连接，在新窗口打开
            return `<a href="${encodeURI(href)}" target="_blank" >${text}</a>`;
        };

        this.html =  function (html) {
            const cheerio = require('cheerio');
            const lodashUnescape = require('lodash.unescape');
            html = lodashUnescape(html);

            html = html.replace(/<\/?em>/g, '*');

            const $ = cheerio.load(html, {
                decodeEntities: false
            });

            const $codeBlock = $('.code-block');

            $codeBlock.each((index, element) => {
                const tabTitle = $(element)
                    .find('[data-lan]')
                    .map(
                        (index, element) => {
                            $(element).html(
                                `
                                <pre><code class="hljs">${hljs.highlightAuto($(element).html()).value}</code></pre>
                                `
                            );

                            const titleClass = index === 0 ? 'block-active' : '';

                            return `
                                <div class="code-block-title ${titleClass}"
                                     data-index="${index}">
                                    ${$(element).attr('data-lan')}
                                </div>`;
                        }
                    )
                    .get()
                    .join('\r');

                const tabTitleContainer = `<div class="code-block-tab-container">${tabTitle}</div>`;
                $(tabTitleContainer).prependTo(element);
            });

            return $.html();
        };
    }

    _getMdName() {
        return this._mdName;
    }

    _getHeadings() {
        return this._headings;
    }

    _getImages() {
        return this._imageData;
    }
};