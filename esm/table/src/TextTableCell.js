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
import { Text } from '../../typography';
import TableCell from './TableCell';
var ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

var TextTableCell =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextTableCell, _PureComponent);

  function TextTableCell() {
    _classCallCheck(this, TextTableCell);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextTableCell).apply(this, arguments));
  }

  _createClass(TextTableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isNumber = _this$props.isNumber,
          placeholder = _this$props.placeholder,
          props = _objectWithoutProperties(_this$props, ["children", "textProps", "isNumber", "placeholder"]);

      return React.createElement(TableCell, props, React.createElement(Text, _extends({
        size: 300,
        flex: "1"
      }, ellipsis, isNumber ? {
        fontFamily: 'mono'
      } : {}, textProps), children));
    }
  }]);

  return TextTableCell;
}(PureComponent);

TextTableCell.displayName = "TextTableCell";

_defineProperty(TextTableCell, "propTypes", _objectSpread({}, TableCell.propTypes, {
  /**
   * Adds fontFamily: mono.
   */
  isNumber: PropTypes.bool.isRequired,

  /**
   * Pass additional props to the Text component.
   */
  textProps: PropTypes.object
}));

_defineProperty(TextTableCell, "defaultProps", {
  isNumber: false
});

export { TextTableCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlQ2VsbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUZXh0IiwiVGFibGVDZWxsIiwiZWxsaXBzaXMiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJUZXh0VGFibGVDZWxsIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRQcm9wcyIsImlzTnVtYmVyIiwicGxhY2Vob2xkZXIiLCJmb250RmFtaWx5IiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixhQUF0QjtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxRQUFRLEVBQUUsUUFESztBQUVmQyxFQUFBQSxZQUFZLEVBQUUsVUFGQztBQUdmQyxFQUFBQSxVQUFVLEVBQUU7QUFIRyxDQUFqQjs7SUFNcUJDLGE7Ozs7Ozs7Ozs7Ozs7NkJBc0JWO0FBQUEsd0JBQzBELEtBQUtDLEtBRC9EO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsU0FEWCxlQUNXQSxTQURYO0FBQUEsVUFDc0JDLFFBRHRCLGVBQ3NCQSxRQUR0QjtBQUFBLFVBQ2dDQyxXQURoQyxlQUNnQ0EsV0FEaEM7QUFBQSxVQUNnREosS0FEaEQ7O0FBR1AsYUFDRSxvQkFBQyxTQUFELEVBQWVBLEtBQWYsRUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUUsR0FEUjtBQUVFLFFBQUEsSUFBSSxFQUFDO0FBRlAsU0FHTUwsUUFITixFQUlPUSxRQUFRLEdBQUc7QUFBRUUsUUFBQUEsVUFBVSxFQUFFO0FBQWQsT0FBSCxHQUE0QixFQUozQyxFQUtNSCxTQUxOLEdBT0dELFFBUEgsQ0FERixDQURGO0FBYUQ7Ozs7RUF0Q3dDVixhOztBQUF0QlEsYTs7Z0JBQUFBLGEsaUNBS2RMLFNBQVMsQ0FBQ1ksUztBQUViOzs7QUFHQUgsRUFBQUEsUUFBUSxFQUFFWCxTQUFTLENBQUNlLElBQVYsQ0FBZUMsVTs7QUFFekI7OztBQUdBTixFQUFBQSxTQUFTLEVBQUVWLFNBQVMsQ0FBQ2lCOzs7Z0JBZkpWLGEsa0JBa0JHO0FBQ3BCSSxFQUFBQSxRQUFRLEVBQUU7QUFEVSxDOztTQWxCSEosYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5cbmNvbnN0IGVsbGlwc2lzID0ge1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dFRhYmxlQ2VsbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUYWJsZUNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRhYmxlQ2VsbC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGZvbnRGYW1pbHk6IG1vbm8uXG4gICAgICovXG4gICAgaXNOdW1iZXI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzIGFkZGl0aW9uYWwgcHJvcHMgdG8gdGhlIFRleHQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHRleHRQcm9wczogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc051bWJlcjogZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB0ZXh0UHJvcHMsIGlzTnVtYmVyLCBwbGFjZWhvbGRlciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVDZWxsIHsuLi5wcm9wc30+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgc2l6ZT17MzAwfVxuICAgICAgICAgIGZsZXg9XCIxXCJcbiAgICAgICAgICB7Li4uZWxsaXBzaXN9XG4gICAgICAgICAgey4uLihpc051bWJlciA/IHsgZm9udEZhbWlseTogJ21vbm8nIH0gOiB7fSl9XG4gICAgICAgICAgey4uLnRleHRQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgKVxuICB9XG59XG4iXX0=