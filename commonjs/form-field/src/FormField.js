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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _FormFieldLabel = _interopRequireDefault(require("./FormFieldLabel"));

var _FormFieldDescription = _interopRequireDefault(require("./FormFieldDescription"));

var _FormFieldValidationMessage = _interopRequireDefault(require("./FormFieldValidationMessage"));

var _FormFieldHint = _interopRequireDefault(require("./FormFieldHint"));

var FormField =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(FormField, _PureComponent);

  function FormField() {
    (0, _classCallCheck2.default)(this, FormField);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormField).apply(this, arguments));
  }

  (0, _createClass2.default)(FormField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hint = _this$props.hint,
          label = _this$props.label,
          labelFor = _this$props.labelFor,
          children = _this$props.children,
          isRequired = _this$props.isRequired,
          labelProps = _this$props.labelProps,
          description = _this$props.description,
          validationMessage = _this$props.validationMessage,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["hint", "label", "labelFor", "children", "isRequired", "labelProps", "description", "validationMessage"]);
      return _react.default.createElement(_uiBox.default, props, _react.default.createElement(_FormFieldLabel.default, (0, _extends2.default)({
        htmlFor: labelFor,
        isAstrixShown: isRequired,
        marginBottom: description ? 0 : 4
      }, labelProps), label), typeof description === 'string' ? _react.default.createElement(_FormFieldDescription.default, {
        marginBottom: 4
      }, description) : description, children, typeof validationMessage === 'string' ? _react.default.createElement(_FormFieldValidationMessage.default, {
        marginTop: 8
      }, validationMessage) : validationMessage, typeof hint === 'string' ? _react.default.createElement(_FormFieldHint.default, {
        marginTop: 6
      }, hint) : hint);
    }
  }]);
  return FormField;
}(_react.PureComponent);

exports.default = FormField;
FormField.displayName = "FormField";
(0, _defineProperty2.default)(FormField, "propTypes", (0, _objectSpread2.default)({
  /**
   * The label used above the input element.
   */
  label: _propTypes.default.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: _propTypes.default.string,

  /**
   * Whether or not show an asterix after the label.
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
  validationMessage: _propTypes.default.node
}, _uiBox.dimensions.propTypes, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes));
(0, _defineProperty2.default)(FormField, "defaultProps", {
  labelProps: {
    size: 400
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiRm9ybUZpZWxkIiwicHJvcHMiLCJoaW50IiwibGFiZWwiLCJsYWJlbEZvciIsImNoaWxkcmVuIiwiaXNSZXF1aXJlZCIsImxhYmVsUHJvcHMiLCJkZXNjcmlwdGlvbiIsInZhbGlkYXRpb25NZXNzYWdlIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiZGltZW5zaW9ucyIsInByb3BUeXBlcyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7NkJBNERWO0FBQUEsd0JBV0gsS0FBS0MsS0FYRjtBQUFBLFVBRUxDLElBRkssZUFFTEEsSUFGSztBQUFBLFVBR0xDLEtBSEssZUFHTEEsS0FISztBQUFBLFVBSUxDLFFBSkssZUFJTEEsUUFKSztBQUFBLFVBS0xDLFFBTEssZUFLTEEsUUFMSztBQUFBLFVBTUxDLFVBTkssZUFNTEEsVUFOSztBQUFBLFVBT0xDLFVBUEssZUFPTEEsVUFQSztBQUFBLFVBUUxDLFdBUkssZUFRTEEsV0FSSztBQUFBLFVBU0xDLGlCQVRLLGVBU0xBLGlCQVRLO0FBQUEsVUFVRlIsS0FWRTtBQWFQLGFBQ0UsNkJBQUMsY0FBRCxFQUFTQSxLQUFULEVBQ0UsNkJBQUMsdUJBQUQ7QUFDRSxRQUFBLE9BQU8sRUFBRUcsUUFEWDtBQUVFLFFBQUEsYUFBYSxFQUFFRSxVQUZqQjtBQUdFLFFBQUEsWUFBWSxFQUFFRSxXQUFXLEdBQUcsQ0FBSCxHQUFPO0FBSGxDLFNBSU1ELFVBSk4sR0FNR0osS0FOSCxDQURGLEVBU0csT0FBT0ssV0FBUCxLQUF1QixRQUF2QixHQUNDLDZCQUFDLDZCQUFEO0FBQXNCLFFBQUEsWUFBWSxFQUFFO0FBQXBDLFNBQ0dBLFdBREgsQ0FERCxHQUtDQSxXQWRKLEVBZ0JHSCxRQWhCSCxFQWlCRyxPQUFPSSxpQkFBUCxLQUE2QixRQUE3QixHQUNDLDZCQUFDLG1DQUFEO0FBQTRCLFFBQUEsU0FBUyxFQUFFO0FBQXZDLFNBQ0dBLGlCQURILENBREQsR0FLQ0EsaUJBdEJKLEVBd0JHLE9BQU9QLElBQVAsS0FBZ0IsUUFBaEIsR0FDQyw2QkFBQyxzQkFBRDtBQUFlLFFBQUEsU0FBUyxFQUFFO0FBQTFCLFNBQThCQSxJQUE5QixDQURELEdBR0NBLElBM0JKLENBREY7QUFnQ0Q7OztFQXpHb0NRLG9COzs7QUFBbEJWLFM7OEJBQUFBLFM7QUFFakI7OztBQUdBRyxFQUFBQSxLQUFLLEVBQUVRLG1CQUFVQyxJQUFWLENBQWVOLFU7O0FBRXRCOzs7QUFHQUYsRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUUsTTs7QUFFcEI7OztBQUdBUCxFQUFBQSxVQUFVLEVBQUVLLG1CQUFVRyxJOztBQUV0Qjs7O0FBR0FOLEVBQUFBLFdBQVcsRUFBRUcsbUJBQVVDLEk7O0FBRXZCOzs7QUFHQVYsRUFBQUEsSUFBSSxFQUFFUyxtQkFBVUMsSTs7QUFFaEI7Ozs7QUFJQUgsRUFBQUEsaUJBQWlCLEVBQUVFLG1CQUFVQztHQUsxQkcsa0JBQVdDLFMsRUFLWEMsZUFBUUQsUyxFQUtSRSxnQkFBU0YsUyxFQUtURyxjQUFPSCxTOzhCQW5ET2hCLFMsa0JBc0RHO0FBQ3BCTyxFQUFBQSxVQUFVLEVBQUU7QUFDVmEsSUFBQUEsSUFBSSxFQUFFO0FBREk7QUFEUSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCBGb3JtRmllbGRMYWJlbCBmcm9tICcuL0Zvcm1GaWVsZExhYmVsJ1xuaW1wb3J0IEZvcm1GaWVsZERlc2NyaXB0aW9uIGZyb20gJy4vRm9ybUZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgZnJvbSAnLi9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSdcbmltcG9ydCBGb3JtRmllbGRIaW50IGZyb20gJy4vRm9ybUZpZWxkSGludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgICAqL1xuICAgIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3Qgc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWxQcm9wczoge1xuICAgICAgc2l6ZTogNDAwXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhpbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsRm9yLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQcm9wcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB7Li4ucHJvcHN9PlxuICAgICAgICA8Rm9ybUZpZWxkTGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtsYWJlbEZvcn1cbiAgICAgICAgICBpc0FzdHJpeFNob3duPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17ZGVzY3JpcHRpb24gPyAwIDogNH1cbiAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9Gb3JtRmllbGRMYWJlbD5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgPEZvcm1GaWVsZERlc2NyaXB0aW9uIG1hcmdpbkJvdHRvbT17NH0+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9Gb3JtRmllbGREZXNjcmlwdGlvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHt0eXBlb2YgdmFsaWRhdGlvbk1lc3NhZ2UgPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgIDxGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSBtYXJnaW5Ub3A9ezh9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VcbiAgICAgICAgKX1cbiAgICAgICAge3R5cGVvZiBoaW50ID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICA8Rm9ybUZpZWxkSGludCBtYXJnaW5Ub3A9ezZ9PntoaW50fTwvRm9ybUZpZWxkSGludD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBoaW50XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdfQ==