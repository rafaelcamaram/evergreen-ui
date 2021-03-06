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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var FormFieldLabel =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(FormFieldLabel, _PureComponent);

  function FormFieldLabel() {
    (0, _classCallCheck2.default)(this, FormFieldLabel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormFieldLabel).apply(this, arguments));
  }

  (0, _createClass2.default)(FormFieldLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isAstrixShown = _this$props.isAstrixShown,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "isAstrixShown"]);
      return _react.default.createElement(_typography.Label, (0, _extends2.default)({
        display: "block"
      }, props), children, ' ', isAstrixShown && _react.default.createElement("span", {
        title: "This field is required."
      }, "*"));
    }
  }]);
  return FormFieldLabel;
}(_react.PureComponent);

exports.default = FormFieldLabel;
FormFieldLabel.displayName = "FormFieldLabel";
(0, _defineProperty2.default)(FormFieldLabel, "propTypes", (0, _objectSpread2.default)({}, _typography.Label.propTypes, {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: _propTypes.default.bool
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRMYWJlbC5qcyJdLCJuYW1lcyI6WyJGb3JtRmllbGRMYWJlbCIsInByb3BzIiwiY2hpbGRyZW4iLCJpc0FzdHJpeFNob3duIiwiUHVyZUNvbXBvbmVudCIsIkxhYmVsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs2QkFhVjtBQUFBLHdCQUN1QyxLQUFLQyxLQUQ1QztBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLGFBRFgsZUFDV0EsYUFEWDtBQUFBLFVBQzZCRixLQUQ3QjtBQUVQLGFBQ0UsNkJBQUMsaUJBQUQ7QUFBTyxRQUFBLE9BQU8sRUFBQztBQUFmLFNBQTJCQSxLQUEzQixHQUNHQyxRQURILEVBQ2EsR0FEYixFQUVHQyxhQUFhLElBQUk7QUFBTSxRQUFBLEtBQUssRUFBQztBQUFaLGFBRnBCLENBREY7QUFNRDs7O0VBckJ5Q0Msb0I7OztBQUF2QkosYzs4QkFBQUEsYywrQ0FLZEssa0JBQU1DLFM7QUFFVDs7O0FBR0FILEVBQUFBLGFBQWEsRUFBRUksbUJBQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkTGFiZWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgTGFiZWwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkxhYmVsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaXNBc3RyaXhTaG93bjogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpc0FzdHJpeFNob3duLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8TGFiZWwgZGlzcGxheT1cImJsb2NrXCIgey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufXsnICd9XG4gICAgICAgIHtpc0FzdHJpeFNob3duICYmIDxzcGFuIHRpdGxlPVwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIj4qPC9zcGFuPn1cbiAgICAgIDwvTGFiZWw+XG4gICAgKVxuICB9XG59XG4iXX0=