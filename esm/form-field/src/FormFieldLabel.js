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
import { Label } from '../../typography';

var FormFieldLabel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormFieldLabel, _PureComponent);

  function FormFieldLabel() {
    _classCallCheck(this, FormFieldLabel);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormFieldLabel).apply(this, arguments));
  }

  _createClass(FormFieldLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isAstrixShown = _this$props.isAstrixShown,
          props = _objectWithoutProperties(_this$props, ["children", "isAstrixShown"]);

      return React.createElement(Label, _extends({
        display: "block"
      }, props), children, ' ', isAstrixShown && React.createElement("span", {
        title: "This field is required."
      }, "*"));
    }
  }]);

  return FormFieldLabel;
}(PureComponent);

FormFieldLabel.displayName = "FormFieldLabel";

_defineProperty(FormFieldLabel, "propTypes", _objectSpread({}, Label.propTypes, {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: PropTypes.bool
}));

export { FormFieldLabel as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRMYWJlbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJMYWJlbCIsIkZvcm1GaWVsZExhYmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzQXN0cml4U2hvd24iLCJwcm9wVHlwZXMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtCQUF0Qjs7SUFFcUJDLGM7Ozs7Ozs7Ozs7Ozs7NkJBYVY7QUFBQSx3QkFDdUMsS0FBS0MsS0FENUM7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxhQURYLGVBQ1dBLGFBRFg7QUFBQSxVQUM2QkYsS0FEN0I7O0FBRVAsYUFDRSxvQkFBQyxLQUFEO0FBQU8sUUFBQSxPQUFPLEVBQUM7QUFBZixTQUEyQkEsS0FBM0IsR0FDR0MsUUFESCxFQUNhLEdBRGIsRUFFR0MsYUFBYSxJQUFJO0FBQU0sUUFBQSxLQUFLLEVBQUM7QUFBWixhQUZwQixDQURGO0FBTUQ7Ozs7RUFyQnlDTixhOztBQUF2QkcsYzs7Z0JBQUFBLGMsaUNBS2RELEtBQUssQ0FBQ0ssUztBQUVUOzs7QUFHQUQsRUFBQUEsYUFBYSxFQUFFTCxTQUFTLENBQUNPOzs7U0FWUkwsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZExhYmVsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIExhYmVsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5MYWJlbC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIGlzQXN0cml4U2hvd246IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaXNBc3RyaXhTaG93biwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPExhYmVsIGRpc3BsYXk9XCJibG9ja1wiIHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAgICB7aXNBc3RyaXhTaG93biAmJiA8c3BhbiB0aXRsZT1cIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCI+Kjwvc3Bhbj59XG4gICAgICA8L0xhYmVsPlxuICAgIClcbiAgfVxufVxuIl19