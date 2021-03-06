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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _Radio = _interopRequireDefault(require("./Radio"));

var radioCount = 1; // Used for generating unique input names

var RadioGroup =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(RadioGroup, _PureComponent);

  function RadioGroup(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, RadioGroup);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadioGroup).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (event) {
      var value = event.target.value; // Save a render cycle when it's a controlled input

      if (!_this.props.value) {
        _this.setState({
          value: value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    });
    _this.state = {
      value: props.defaultValue || props.options[0].value
    };
    _this.name = "RadioGroup-".concat(radioCount);
    radioCount += 1;
    return _this;
  }

  (0, _createClass2.default)(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          size = _this$props.size,
          label = _this$props.label,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          options = _this$props.options,
          onChange = _this$props.onChange,
          isRequired = _this$props.isRequired,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["size", "label", "defaultValue", "value", "options", "onChange", "isRequired"]); // Allows it to behave like a controlled input

      var selected = value || this.state.value;
      return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
        role: "group",
        "aria-label": label
      }, props), label && _react.default.createElement(_typography.Text, {
        color: "muted",
        fontWeight: 500
      }, label), options.map(function (item) {
        return _react.default.createElement(_Radio.default, {
          key: item.value,
          size: size,
          name: _this2.name,
          value: item.value,
          label: item.label,
          checked: selected === item.value,
          disabled: item.isDisabled,
          onChange: _this2.handleChange,
          isRequired: isRequired
        });
      }));
    }
  }]);
  return RadioGroup;
}(_react.PureComponent);

exports.default = RadioGroup;
RadioGroup.displayName = "RadioGroup";
(0, _defineProperty2.default)(RadioGroup, "propTypes", (0, _objectSpread2.default)({}, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes, _uiBox.dimensions.propTypes, {
  /**
   * The options for the radios of the Radio Group.
   */
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.node.isRequired,
    value: _propTypes.default.string.isRequired,
    isDisabled: _propTypes.default.bool
  })).isRequired,

  /**
   * The selected item value when controlled.
   */
  value: _propTypes.default.string,

  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue: _propTypes.default.string,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Label to display above the radio button options.
   */
  label: _propTypes.default.string,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: _propTypes.default.oneOf([12, 16]).isRequired,

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: _propTypes.default.bool.isRequired
}));
(0, _defineProperty2.default)(RadioGroup, "defaultProps", {
  options: [],
  onChange: function onChange() {},
  size: 12,
  isRequired: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW9Hcm91cC5qcyJdLCJuYW1lcyI6WyJyYWRpb0NvdW50IiwiUmFkaW9Hcm91cCIsInByb3BzIiwiY29udGV4dCIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb25zIiwibmFtZSIsInNpemUiLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJzZWxlY3RlZCIsIm1hcCIsIml0ZW0iLCJpc0Rpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwiUHVyZUNvbXBvbmVudCIsInNwYWNpbmciLCJwcm9wVHlwZXMiLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQUlBLFVBQVUsR0FBRyxDQUFqQixDLENBQW1COztJQUVFQyxVOzs7OztBQTJEbkIsc0JBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUE7QUFDMUIsZ0hBQU1ELEtBQU4sRUFBYUMsT0FBYjtBQUQwQiwrRkFXYixVQUFBQyxLQUFLLEVBQUk7QUFBQSxVQUNkQyxLQURjLEdBQ0pELEtBQUssQ0FBQ0UsTUFERixDQUNkRCxLQURjLEVBR3RCOztBQUNBLFVBQUksQ0FBQyxNQUFLSCxLQUFMLENBQVdHLEtBQWhCLEVBQXVCO0FBQ3JCLGNBQUtFLFFBQUwsQ0FBYztBQUFFRixVQUFBQSxLQUFLLEVBQUxBO0FBQUYsU0FBZDtBQUNEOztBQUVELFVBQUksTUFBS0gsS0FBTCxDQUFXTSxRQUFmLEVBQXlCO0FBQ3ZCLGNBQUtOLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkgsS0FBcEI7QUFD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O0FBR3BCSyxFQUFBQSxJQUFJLEVBQUUsRUFIYztBQUlwQkUsRUFBQUEsVUFBVSxFQUFFO0FBSlEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0LCBkaW1lbnNpb25zIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vUmFkaW8nXG5cbmxldCByYWRpb0NvdW50ID0gMSAvLyBVc2VkIGZvciBnZW5lcmF0aW5nIHVuaXF1ZSBpbnB1dCBuYW1lc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25zIGZvciB0aGUgcmFkaW9zIG9mIHRoZSBSYWRpbyBHcm91cC5cbiAgICAgKi9cbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBpc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgICAgfSlcbiAgICApLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSB2YWx1ZSB3aGVuIGNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgUmFkaW8gR3JvdXAgd2hlbiB1bmNvbnRyb2xsZWQuXG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gc3RhdGUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIHRvIGRpc3BsYXkgYWJvdmUgdGhlIHJhZGlvIGJ1dHRvbiBvcHRpb25zLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIHJhZGlvIGNpcmNsZS4gVGhpcyBhbHNvIGluZm9ybXMgdGhlIHRleHQgc2l6ZSBhbmQgc3BhY2luZy5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzEyLCAxNl0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBnZXQgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFtdLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBzaXplOiAxMixcbiAgICBpc1JlcXVpcmVkOiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogcHJvcHMuZGVmYXVsdFZhbHVlIHx8IHByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSBgUmFkaW9Hcm91cC0ke3JhZGlvQ291bnR9YFxuICAgIHJhZGlvQ291bnQgKz0gMVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuXG4gICAgLy8gU2F2ZSBhIHJlbmRlciBjeWNsZSB3aGVuIGl0J3MgYSBjb250cm9sbGVkIGlucHV0XG4gICAgaWYgKCF0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2l6ZSxcbiAgICAgIGxhYmVsLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgdmFsdWUsXG4gICAgICBvcHRpb25zLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gQWxsb3dzIGl0IHRvIGJlaGF2ZSBsaWtlIGEgY29udHJvbGxlZCBpbnB1dFxuICAgIGNvbnN0IHNlbGVjdGVkID0gdmFsdWUgfHwgdGhpcy5zdGF0ZS52YWx1ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9e2xhYmVsfSB7Li4ucHJvcHN9PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwibXV0ZWRcIiBmb250V2VpZ2h0PXs1MDB9PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgICAge29wdGlvbnMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxSYWRpb1xuICAgICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgIG5hbWU9e3RoaXMubmFtZX1cbiAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZCA9PT0gaXRlbS52YWx1ZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtLmlzRGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl19