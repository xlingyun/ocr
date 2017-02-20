/**
 * @file 常见问题
 * @author Franck Chen(chenfan02@baidu.com)
 */

import 'less/support/faq.less';

import loadDoc from '../common/doc.js';

// 默认打开的markdown文档名
const defaultMd = 'FAQ-Account';

// 分析hash路径获取到需要加载的文档以及锚点
const hashPath = window.location.hash.split('#')[1] || '';
const [docName, anchorId] = hashPath;
loadDoc(docName || defaultMd, anchorId);
