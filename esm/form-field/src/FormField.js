import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import FormFieldLabel from './FormFieldLabel';
import FormFieldDescription from './FormFieldDescription';
import FormFieldValidationMessage from './FormFieldValidationMessage';
import FormFieldHint from './FormFieldHint';

var FormField =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormField, _PureComponent);

  function FormField() {
    _classCallCheck(this, FormField);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormField).apply(this, arguments));
  }

  _createClass(FormField, [{
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
          props = _objectWithoutProperties(_this$props, ["hint", "label", "labelFor", "children", "isRequired", "labelProps", "description", "validationMessage"]);

      return React.createElement(Box, props, React.createElement(FormFieldLabel, _extends({
        htmlFor: labelFor,
        isAstrixShown: isRequired,
        marginBottom: description ? 0 : 4
      }, labelProps), label), typeof description === 'string' ? React.createElement(FormFieldDescription, {
        marginBottom: 4
      }, description) : description, children, typeof validationMessage === 'string' ? React.createElement(FormFieldValidationMessage, {
        marginTop: 8
      }, validationMessage) : validationMessage, typeof hint === 'string' ? React.createElement(FormFieldHint, {
        marginTop: 6
      }, hint) : hint);
    }
  }]);

  return FormField;
}(PureComponent);

FormField.displayName = "FormField";

_defineProperty(FormField, "propTypes", _objectSpread({
  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not show an asterix after the label.
   */
  isRequired: PropTypes.bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: PropTypes.node,

  /**
   * An optional hint under the input element.
   */
  hint: PropTypes.node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: PropTypes.node
}, dimensions.propTypes, spacing.propTypes, position.propTypes, layout.propTypes));

_defineProperty(FormField, "defaultProps", {
  labelProps: {
    size: 400
  }
});

export { FormField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94IiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIkZvcm1GaWVsZExhYmVsIiwiRm9ybUZpZWxkRGVzY3JpcHRpb24iLCJGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSIsIkZvcm1GaWVsZEhpbnQiLCJGb3JtRmllbGQiLCJwcm9wcyIsImhpbnQiLCJsYWJlbCIsImxhYmVsRm9yIiwiY2hpbGRyZW4iLCJpc1JlcXVpcmVkIiwibGFiZWxQcm9wcyIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsInByb3BUeXBlcyIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsSUFBY0MsVUFBZCxFQUEwQkMsT0FBMUIsRUFBbUNDLFFBQW5DLEVBQTZDQyxNQUE3QyxRQUEyRCxRQUEzRDtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsa0JBQTNCO0FBQ0EsT0FBT0Msb0JBQVAsTUFBaUMsd0JBQWpDO0FBQ0EsT0FBT0MsMEJBQVAsTUFBdUMsOEJBQXZDO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixpQkFBMUI7O0lBRXFCQyxTOzs7Ozs7Ozs7Ozs7OzZCQTREVjtBQUFBLHdCQVdILEtBQUtDLEtBWEY7QUFBQSxVQUVMQyxJQUZLLGVBRUxBLElBRks7QUFBQSxVQUdMQyxLQUhLLGVBR0xBLEtBSEs7QUFBQSxVQUlMQyxRQUpLLGVBSUxBLFFBSks7QUFBQSxVQUtMQyxRQUxLLGVBS0xBLFFBTEs7QUFBQSxVQU1MQyxVQU5LLGVBTUxBLFVBTks7QUFBQSxVQU9MQyxVQVBLLGVBT0xBLFVBUEs7QUFBQSxVQVFMQyxXQVJLLGVBUUxBLFdBUks7QUFBQSxVQVNMQyxpQkFUSyxlQVNMQSxpQkFUSztBQUFBLFVBVUZSLEtBVkU7O0FBYVAsYUFDRSxvQkFBQyxHQUFELEVBQVNBLEtBQVQsRUFDRSxvQkFBQyxjQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUVHLFFBRFg7QUFFRSxRQUFBLGFBQWEsRUFBRUUsVUFGakI7QUFHRSxRQUFBLFlBQVksRUFBRUUsV0FBVyxHQUFHLENBQUgsR0FBTztBQUhsQyxTQUlNRCxVQUpOLEdBTUdKLEtBTkgsQ0FERixFQVNHLE9BQU9LLFdBQVAsS0FBdUIsUUFBdkIsR0FDQyxvQkFBQyxvQkFBRDtBQUFzQixRQUFBLFlBQVksRUFBRTtBQUFwQyxTQUNHQSxXQURILENBREQsR0FLQ0EsV0FkSixFQWdCR0gsUUFoQkgsRUFpQkcsT0FBT0ksaUJBQVAsS0FBNkIsUUFBN0IsR0FDQyxvQkFBQywwQkFBRDtBQUE0QixRQUFBLFNBQVMsRUFBRTtBQUF2QyxTQUNHQSxpQkFESCxDQURELEdBS0NBLGlCQXRCSixFQXdCRyxPQUFPUCxJQUFQLEtBQWdCLFFBQWhCLEdBQ0Msb0JBQUMsYUFBRDtBQUFlLFFBQUEsU0FBUyxFQUFFO0FBQTFCLFNBQThCQSxJQUE5QixDQURELEdBR0NBLElBM0JKLENBREY7QUFnQ0Q7Ozs7RUF6R29DYixhOztBQUFsQlcsUzs7Z0JBQUFBLFM7QUFFakI7OztBQUdBRyxFQUFBQSxLQUFLLEVBQUViLFNBQVMsQ0FBQ29CLElBQVYsQ0FBZUosVTs7QUFFdEI7OztBQUdBRixFQUFBQSxRQUFRLEVBQUVkLFNBQVMsQ0FBQ3FCLE07O0FBRXBCOzs7QUFHQUwsRUFBQUEsVUFBVSxFQUFFaEIsU0FBUyxDQUFDc0IsSTs7QUFFdEI7OztBQUdBSixFQUFBQSxXQUFXLEVBQUVsQixTQUFTLENBQUNvQixJOztBQUV2Qjs7O0FBR0FSLEVBQUFBLElBQUksRUFBRVosU0FBUyxDQUFDb0IsSTs7QUFFaEI7Ozs7QUFJQUQsRUFBQUEsaUJBQWlCLEVBQUVuQixTQUFTLENBQUNvQjtHQUsxQmxCLFVBQVUsQ0FBQ3FCLFMsRUFLWHBCLE9BQU8sQ0FBQ29CLFMsRUFLUm5CLFFBQVEsQ0FBQ21CLFMsRUFLVGxCLE1BQU0sQ0FBQ2tCLFM7O2dCQW5ET2IsUyxrQkFzREc7QUFDcEJPLEVBQUFBLFVBQVUsRUFBRTtBQUNWTyxJQUFBQSxJQUFJLEVBQUU7QUFESTtBQURRLEM7O1NBdERIZCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCBGb3JtRmllbGRMYWJlbCBmcm9tICcuL0Zvcm1GaWVsZExhYmVsJ1xuaW1wb3J0IEZvcm1GaWVsZERlc2NyaXB0aW9uIGZyb20gJy4vRm9ybUZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgZnJvbSAnLi9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSdcbmltcG9ydCBGb3JtRmllbGRIaW50IGZyb20gJy4vRm9ybUZpZWxkSGludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgICAqL1xuICAgIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3Qgc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWxQcm9wczoge1xuICAgICAgc2l6ZTogNDAwXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhpbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsRm9yLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQcm9wcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB7Li4ucHJvcHN9PlxuICAgICAgICA8Rm9ybUZpZWxkTGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtsYWJlbEZvcn1cbiAgICAgICAgICBpc0FzdHJpeFNob3duPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17ZGVzY3JpcHRpb24gPyAwIDogNH1cbiAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9Gb3JtRmllbGRMYWJlbD5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgPEZvcm1GaWVsZERlc2NyaXB0aW9uIG1hcmdpbkJvdHRvbT17NH0+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9Gb3JtRmllbGREZXNjcmlwdGlvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHt0eXBlb2YgdmFsaWRhdGlvbk1lc3NhZ2UgPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgIDxGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSBtYXJnaW5Ub3A9ezh9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VcbiAgICAgICAgKX1cbiAgICAgICAge3R5cGVvZiBoaW50ID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICA8Rm9ybUZpZWxkSGludCBtYXJnaW5Ub3A9ezZ9PntoaW50fTwvRm9ybUZpZWxkSGludD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBoaW50XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdfQ==