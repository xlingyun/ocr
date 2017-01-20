duAI([42],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(225);


/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file nlp-中文DNN模型脚本入口
	 * @author shiliang@baidu.com
	 */
	'use strict';

	var _jquery = __webpack_require__(18);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _dnnData = __webpack_require__(226);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)(document).ready(function () {
	    // case点击效果
	    (0, _jquery2.default)('.case-indicator > li').click(function () {
	        var _this = this;

	        (0, _jquery2.default)('.case-indicator > li').each(function (i, e) {
	            (0, _jquery2.default)(e).toggleClass('active', i === (0, _jquery2.default)(_this).index());
	        });
	        (0, _jquery2.default)('.case-item').each(function (i, e) {
	            (0, _jquery2.default)(e).toggleClass('active', i === (0, _jquery2.default)(_this).index());
	        });
	    });

	    // 触发功能介绍动画
	    (0, _jquery2.default)(window).scroll(function () {
	        if ((0, _jquery2.default)(document).scrollTop() >= 100) {
	            (0, _jquery2.default)('.tech-intro-detail').trigger('demo');
	        }
	    });

	    // 绑定功能介绍动画
	    (0, _jquery2.default)('.tech-intro-detail').one('demo', function () {
	        (0, _jquery2.default)(this).find('.intro-demo').addClass('scanned');
	    });

	    // 刷新demo
	    var demoCounter = 0;
	    var minScore = 0;
	    (0, _jquery2.default)('.refresh-demo').click(function () {
	        minScore = 0;
	        var demoData = _dnnData.DNN_DATA[demoCounter++ % _dnnData.DNN_DATA.length];
	        (0, _jquery2.default)('.demo-input').attr('data-text', demoData.text);
	        var options = [];
	        for (var word in demoData.options) {
	            var html = ['<li>', '<a role="button" data-score="' + demoData.options[word] + '" class="btn-normal">', word, '</a>', '</li>'].join('');
	            minScore = minScore === 0 ? demoData.options[word] : demoData.options[word] < minScore ? demoData.options[word] : minScore;
	            options.push((0, _jquery2.default)(html));
	        }
	        (0, _jquery2.default)('#demo-options').html(options).find('a.btn-normal').eq(0).click();
	    });

	    // demo选项切换
	    (0, _jquery2.default)('#demo-options').on('click', 'a.btn-normal', function () {
	        (0, _jquery2.default)('#demo-options .btn-normal').removeClass('selected');
	        var option = (0, _jquery2.default)(this);
	        option.addClass('selected');
	        var input = (0, _jquery2.default)('.demo-input');
	        var text = input.attr('data-text');
	        input.html(text.replace(/\{option\}/g, '<span>' + option.html() + '</span>'));
	        var score = parseFloat(option.attr('data-score'));
	        (0, _jquery2.default)('.demo-score-detail').html(score).toggleClass('good', minScore === score).toggleClass('bad', minScore !== score);
	    });

	    (0, _jquery2.default)('.refresh-demo').click();
	});

/***/ },

/***/ 226:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @file nlp-中文DNN模型数据
	 * @author shiliang@baidu.com
	 */

	var DNN_DATA = exports.DNN_DATA = [{
	    text: '2016全国{option}卷答题模板',
	    options: {
	        '高考': 254.68,
	        '大考': 485.32,
	        '低考': 1410.37
	    }
	}, {
	    text: '床前{option}光，疑是地上霜',
	    options: {
	        '明月': 79.07,
	        '星星': 2824.07,
	        '白月': 2071.61
	    }
	}, {
	    text: '落霞与孤鹜{option}，秋水共长天一色',
	    options: {
	        '齐飞': 20.39,
	        '齐跑': 321.93,
	        '双飞': 84.66
	    }
	}, {
	    text: '众里寻{option}千百度，蓦然回首，那人却在，灯火阑珊处',
	    options: {
	        '他': 29.71,
	        '她': 44.93,
	        'ta': 158.06
	    }
	}, {
	    text: '基于和谐教学法的高校{option}舞蹈教学研究',
	    options: {
	        '体育': 82.05,
	        '教育': 250.02,
	        '德育': 237.48
	    }
	}, {
	    text: '亚马逊河里的四种最危险的{option}',
	    options: {
	        '动物': 356.63,
	        '花朵': 721.42,
	        '水果': 412.81
	    }
	}, {
	    text: '新能源汽车动力电池项目正式{option}',
	    options: {
	        '展开': 59.01,
	        '启动': 34.59,
	        '起飞': 121.29
	    }
	}, {
	    text: '曲曲折折的荷塘上面,弥望的是田田的{option}',
	    options: {
	        '树叶': 446.70,
	        '叶子': 350.22,
	        '树木': 529.83
	    }
	}, {
	    text: '我国的黄土高原上为什么常年覆盖着{option}？',
	    options: {
	        '黄土': 185.71,
	        '山丘': 247.26,
	        '巧克力': 333.96
	    }
	}, {
	    text: '太阳为什么会有太阳{option}？',
	    options: {
	        '黑子': 140.11,
	        '白子': 393.31,
	        '黑斑': 256.93
	    }
	}];

/***/ }

});