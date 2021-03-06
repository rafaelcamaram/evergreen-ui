"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _layers = require("../../layers");

var TableBody =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableBody, _PureComponent);

  function TableBody() {
    (0, _classCallCheck2.default)(this, TableBody);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableBody).apply(this, arguments));
  }

  (0, _createClass2.default)(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
        "data-evergreen-table-body": true,
        flex: "1",
        overflowY: "auto"
      }, props), children);
    }
  }]);
  return TableBody;
}(_react.PureComponent);

exports.default = TableBody;
TableBody.displayName = "TableBody";
(0, _defineProperty2.default)(TableBody, "propTypes", (0, _objectSpread2.default)({}, _layers.Pane.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVCb2R5LmpzIl0sIm5hbWVzIjpbIlRhYmxlQm9keSIsInByb3BzIiwiY2hpbGRyZW4iLCJQdXJlQ29tcG9uZW50IiwiUGFuZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs2QkFRVjtBQUFBLHdCQUN3QixLQUFLQyxLQUQ3QjtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ2NELEtBRGQ7QUFFUCxhQUNFLDZCQUFDLFlBQUQ7QUFBTSx5Q0FBTjtBQUFnQyxRQUFBLElBQUksRUFBQyxHQUFyQztBQUF5QyxRQUFBLFNBQVMsRUFBQztBQUFuRCxTQUE4REEsS0FBOUQsR0FDR0MsUUFESCxDQURGO0FBS0Q7OztFQWZvQ0Msb0I7OztBQUFsQkgsUzs4QkFBQUEsUywrQ0FLZEksYUFBS0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUJvZHkgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBkYXRhLWV2ZXJncmVlbi10YWJsZS1ib2R5IGZsZXg9XCIxXCIgb3ZlcmZsb3dZPVwiYXV0b1wiIHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==