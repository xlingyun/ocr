duAI([14],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(76);


/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file 人脸闸机方案脚本入口
	 * @author shiliang@baidu.com
	 */
	'use strict';

	var _jquery = __webpack_require__(18);

	var _jquery2 = _interopRequireDefault(_jquery);

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
	});

/***/ }

});