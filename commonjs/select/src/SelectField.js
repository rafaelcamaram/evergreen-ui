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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _formField = require("../../form-field");

var _Select = _interopRequireDefault(require("./Select"));

var idCounter = 0;

var TextInputField =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextInputField, _PureComponent);

  function TextInputField() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TextInputField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TextInputField)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      id: (_this.props.id || idCounter++).toString()
    });
    return _this;
  }

  (0, _createClass2.default)(TextInputField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          unusedId = _this$props.id,
          hint = _this$props.hint,
          label = _this$props.label,
          description = _this$props.description,
          validationMessage = _this$props.validationMessage,
          inputHeight = _this$props.inputHeight,
          inputWidth = _this$props.inputWidth,
          disabled = _this$props.disabled,
          required = _this$props.required,
          isInvalid = _this$props.isInvalid,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["id", "hint", "label", "description", "validationMessage", "inputHeight", "inputWidth", "disabled", "required", "isInvalid", "appearance"]);
      var id = "SelectField-".concat(this.state.id);
      /**
       * Split the wrapper props from the input props.
       */

      var _splitBoxProps = (0, _uiBox.splitBoxProps)(props),
          matchedProps = _splitBoxProps.matchedProps,
          remainingProps = _splitBoxProps.remainingProps;

      return _react.default.createElement(_formField.FormField, (0, _extends2.default)({
        marginBottom: 24,
        label: label,
        isRequired: required,
        hint: hint,
        description: description,
        validationMessage: validationMessage,
        labelFor: id
      }, matchedProps), _react.default.createElement(_Select.default, (0, _extends2.default)({
        id: id,
        width: inputWidth,
        height: inputHeight,
        disabled: disabled,
        required: required,
        isInvalid: isInvalid,
        appearance: appearance
      }, remainingProps)));
    }
  }]);
  return TextInputField;
}(_react.PureComponent);

exports.default = TextInputField;
TextInputField.displayName = "TextInputField";
(0, _defineProperty2.default)(TextInputField, "propTypes", (0, _objectSpread2.default)({}, _Select.default.propTypes, _formField.FormField.propTypes, {
  /**
   * The label used above the input element.
   */
  label: _propTypes.default.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: _propTypes.default.string,

  /**
   * Whether or not to show an asterix after the label.
   */
  isRequired: _propTypes.default.bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: _propTypes.default.node,

  /**
   * An optional hint under the input element.
   */
  hint: _propTypes.default.node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: _propTypes.default.node,

  /**
   * The height of the input element.
   */
  inputHeight: _propTypes.default.number,

  /**
   * The width of the input width.
   */
  inputWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
}));
(0, _defineProperty2.default)(TextInputField, "defaultProps", {
  /**
   * The input width should be as wide as the form field.
   */
  inputWidth: '100%',
  inputHeight: 32
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc3JjL1NlbGVjdEZpZWxkLmpzIl0sIm5hbWVzIjpbImlkQ291bnRlciIsIlRleHRJbnB1dEZpZWxkIiwiaWQiLCJwcm9wcyIsInRvU3RyaW5nIiwidW51c2VkSWQiLCJoaW50IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiaW5wdXRIZWlnaHQiLCJpbnB1dFdpZHRoIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImlzSW52YWxpZCIsImFwcGVhcmFuY2UiLCJzdGF0ZSIsIm1hdGNoZWRQcm9wcyIsInJlbWFpbmluZ1Byb3BzIiwiUHVyZUNvbXBvbmVudCIsIlNlbGVjdCIsInByb3BUeXBlcyIsIkZvcm1GaWVsZCIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwibGFiZWxGb3IiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSUEsU0FBUyxHQUFHLENBQWhCOztJQUVxQkMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBMERYO0FBQ05DLE1BQUFBLEVBQUUsRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0QsRUFBWCxJQUFpQkYsU0FBUyxFQUEzQixFQUErQkksUUFBL0I7QUFERSxLOzs7Ozs7NkJBSUM7QUFBQSx3QkFxQkgsS0FBS0QsS0FyQkY7QUFBQSxVQUdERSxRQUhDLGVBR0xILEVBSEs7QUFBQSxVQU1MSSxJQU5LLGVBTUxBLElBTks7QUFBQSxVQU9MQyxLQVBLLGVBT0xBLEtBUEs7QUFBQSxVQVFMQyxXQVJLLGVBUUxBLFdBUks7QUFBQSxVQVNMQyxpQkFUSyxlQVNMQSxpQkFUSztBQUFBLFVBWUxDLFdBWkssZUFZTEEsV0FaSztBQUFBLFVBYUxDLFVBYkssZUFhTEEsVUFiSztBQUFBLFVBY0xDLFFBZEssZUFjTEEsUUFkSztBQUFBLFVBZUxDLFFBZkssZUFlTEEsUUFmSztBQUFBLFVBZ0JMQyxTQWhCSyxlQWdCTEEsU0FoQks7QUFBQSxVQWlCTEMsVUFqQkssZUFpQkxBLFVBakJLO0FBQUEsVUFvQkZaLEtBcEJFO0FBdUJQLFVBQU1ELEVBQUUseUJBQWtCLEtBQUtjLEtBQUwsQ0FBV2QsRUFBN0IsQ0FBUjtBQUVBOzs7O0FBekJPLDJCQTRCa0MsMEJBQWNDLEtBQWQsQ0E1QmxDO0FBQUEsVUE0QkNjLFlBNUJELGtCQTRCQ0EsWUE1QkQ7QUFBQSxVQTRCZUMsY0E1QmYsa0JBNEJlQSxjQTVCZjs7QUE4QlAsYUFDRSw2QkFBQyxvQkFBRDtBQUNFLFFBQUEsWUFBWSxFQUFFLEVBRGhCO0FBRUUsUUFBQSxLQUFLLEVBQUVYLEtBRlQ7QUFHRSxRQUFBLFVBQVUsRUFBRU0sUUFIZDtBQUlFLFFBQUEsSUFBSSxFQUFFUCxJQUpSO0FBS0UsUUFBQSxXQUFXLEVBQUVFLFdBTGY7QUFNRSxRQUFBLGlCQUFpQixFQUFFQyxpQkFOckI7QUFPRSxRQUFBLFFBQVEsRUFBRVA7QUFQWixTQVFNZSxZQVJOLEdBVUUsNkJBQUMsZUFBRDtBQUNFLFFBQUEsRUFBRSxFQUFFZixFQUROO0FBRUUsUUFBQSxLQUFLLEVBQUVTLFVBRlQ7QUFHRSxRQUFBLE1BQU0sRUFBRUQsV0FIVjtBQUlFLFFBQUEsUUFBUSxFQUFFRSxRQUpaO0FBS0UsUUFBQSxRQUFRLEVBQUVDLFFBTFo7QUFNRSxRQUFBLFNBQVMsRUFBRUMsU0FOYjtBQU9FLFFBQUEsVUFBVSxFQUFFQztBQVBkLFNBUU1HLGNBUk4sRUFWRixDQURGO0FBdUJEOzs7RUFuSHlDQyxvQjs7O0FBQXZCbEIsYzs4QkFBQUEsYywrQ0FLZG1CLGdCQUFPQyxTLEVBQ1BDLHFCQUFVRCxTO0FBRWI7OztBQUdBZCxFQUFBQSxLQUFLLEVBQUVnQixtQkFBVUMsSUFBVixDQUFlQyxVOztBQUV0Qjs7O0FBR0FDLEVBQUFBLFFBQVEsRUFBRUgsbUJBQVVJLE07O0FBRXBCOzs7QUFHQUYsRUFBQUEsVUFBVSxFQUFFRixtQkFBVUssSTs7QUFFdEI7OztBQUdBcEIsRUFBQUEsV0FBVyxFQUFFZSxtQkFBVUMsSTs7QUFFdkI7OztBQUdBbEIsRUFBQUEsSUFBSSxFQUFFaUIsbUJBQVVDLEk7O0FBRWhCOzs7O0FBSUFmLEVBQUFBLGlCQUFpQixFQUFFYyxtQkFBVUMsSTs7QUFFN0I7OztBQUdBZCxFQUFBQSxXQUFXLEVBQUVhLG1CQUFVTSxNOztBQUV2Qjs7O0FBR0FsQixFQUFBQSxVQUFVLEVBQUVZLG1CQUFVTyxTQUFWLENBQW9CLENBQUNQLG1CQUFVTSxNQUFYLEVBQW1CTixtQkFBVUksTUFBN0IsQ0FBcEI7OzhCQS9DSzFCLGMsa0JBa0RHO0FBQ3BCOzs7QUFHQVUsRUFBQUEsVUFBVSxFQUFFLE1BSlE7QUFLcEJELEVBQUFBLFdBQVcsRUFBRTtBQUxPLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BsaXRCb3hQcm9wcyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2Zvcm0tZmllbGQnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0J1xuXG5sZXQgaWRDb3VudGVyID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXRGaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBTZWxlY3QgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlNlbGVjdC5wcm9wVHlwZXMsXG4gICAgLi4uRm9ybUZpZWxkLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUGFzc2VkIG9uIHRoZSBsYWJlbCBhcyBhIGh0bWxGb3IgcHJvcC5cbiAgICAgKi9cbiAgICBsYWJlbEZvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgYW4gYXN0ZXJpeCBhZnRlciB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgaXNSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBkZXNjcmlwdGlvbiBvZiB0aGUgZmllbGQgdW5kZXIgdGhlIGxhYmVsLCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBoaW50IHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGhpbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogSWYgYSB2YWxpZGF0aW9uIG1lc3NhZ2UgaXMgcGFzc2VkIGl0IGlzIHNob3duIHVuZGVyIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICogYW5kIGFib3ZlIHRoZSBoaW50LiBUaGlzIGlzIHVuYWZmZWN0ZWQgYnkgYGlzSW52YWxpZGAuXG4gICAgICovXG4gICAgdmFsaWRhdGlvbk1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBpbnB1dEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgd2lkdGguXG4gICAgICovXG4gICAgaW5wdXRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCB3aWR0aCBzaG91bGQgYmUgYXMgd2lkZSBhcyB0aGUgZm9ybSBmaWVsZC5cbiAgICAgKi9cbiAgICBpbnB1dFdpZHRoOiAnMTAwJScsXG4gICAgaW5wdXRIZWlnaHQ6IDMyXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpZDogKHRoaXMucHJvcHMuaWQgfHwgaWRDb3VudGVyKyspLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICAvLyBXZSBhcmUgdXNpbmcgdGhlIGlkIGZyb20gdGhlIHN0YXRlXG4gICAgICBpZDogdW51c2VkSWQsXG5cbiAgICAgIC8vIEZvcm1GaWVsZCBwcm9wc1xuICAgICAgaGludCxcbiAgICAgIGxhYmVsLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcblxuICAgICAgLy8gVGV4dElucHV0IHByb3BzXG4gICAgICBpbnB1dEhlaWdodCxcbiAgICAgIGlucHV0V2lkdGgsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHJlcXVpcmVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgYXBwZWFyYW5jZSxcblxuICAgICAgLy8gUmVzdCBwcm9wcyBhcmUgc3ByZWFkIG9uIHRoZSBGb3JtRmllbGRcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGlkID0gYFNlbGVjdEZpZWxkLSR7dGhpcy5zdGF0ZS5pZH1gXG5cbiAgICAvKipcbiAgICAgKiBTcGxpdCB0aGUgd3JhcHBlciBwcm9wcyBmcm9tIHRoZSBpbnB1dCBwcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IG1hdGNoZWRQcm9wcywgcmVtYWluaW5nUHJvcHMgfSA9IHNwbGl0Qm94UHJvcHMocHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1GaWVsZFxuICAgICAgICBtYXJnaW5Cb3R0b209ezI0fVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIGlzUmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBoaW50PXtoaW50fVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIHZhbGlkYXRpb25NZXNzYWdlPXt2YWxpZGF0aW9uTWVzc2FnZX1cbiAgICAgICAgbGFiZWxGb3I9e2lkfVxuICAgICAgICB7Li4ubWF0Y2hlZFByb3BzfVxuICAgICAgPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHdpZHRoPXtpbnB1dFdpZHRofVxuICAgICAgICAgIGhlaWdodD17aW5wdXRIZWlnaHR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBpc0ludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIHsuLi5yZW1haW5pbmdQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUZpZWxkPlxuICAgIClcbiAgfVxufVxuIl19