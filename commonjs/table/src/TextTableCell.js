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

var _TableCell = _interopRequireDefault(require("./TableCell"));

var ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

var TextTableCell =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextTableCell, _PureComponent);

  function TextTableCell() {
    (0, _classCallCheck2.default)(this, TextTableCell);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextTableCell).apply(this, arguments));
  }

  (0, _createClass2.default)(TextTableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isNumber = _this$props.isNumber,
          placeholder = _this$props.placeholder,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "textProps", "isNumber", "placeholder"]);
      return _react.default.createElement(_TableCell.default, props, _react.default.createElement(_typography.Text, (0, _extends2.default)({
        size: 300,
        flex: "1"
      }, ellipsis, isNumber ? {
        fontFamily: 'mono'
      } : {}, textProps), children));
    }
  }]);
  return TextTableCell;
}(_react.PureComponent);

exports.default = TextTableCell;
TextTableCell.displayName = "TextTableCell";
(0, _defineProperty2.default)(TextTableCell, "propTypes", (0, _objectSpread2.default)({}, _TableCell.default.propTypes, {
  /**
   * Adds fontFamily: mono.
   */
  isNumber: _propTypes.default.bool.isRequired,

  /**
   * Pass additional props to the Text component.
   */
  textProps: _propTypes.default.object
}));
(0, _defineProperty2.default)(TextTableCell, "defaultProps", {
  isNumber: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGV4dFRhYmxlQ2VsbC5qcyJdLCJuYW1lcyI6WyJlbGxpcHNpcyIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIlRleHRUYWJsZUNlbGwiLCJwcm9wcyIsImNoaWxkcmVuIiwidGV4dFByb3BzIiwiaXNOdW1iZXIiLCJwbGFjZWhvbGRlciIsImZvbnRGYW1pbHkiLCJQdXJlQ29tcG9uZW50IiwiVGFibGVDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLEVBQUFBLFFBQVEsRUFBRSxRQURLO0FBRWZDLEVBQUFBLFlBQVksRUFBRSxVQUZDO0FBR2ZDLEVBQUFBLFVBQVUsRUFBRTtBQUhHLENBQWpCOztJQU1xQkMsYTs7Ozs7Ozs7Ozs7OzZCQXNCVjtBQUFBLHdCQUMwRCxLQUFLQyxLQUQvRDtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFNBRFgsZUFDV0EsU0FEWDtBQUFBLFVBQ3NCQyxRQUR0QixlQUNzQkEsUUFEdEI7QUFBQSxVQUNnQ0MsV0FEaEMsZUFDZ0NBLFdBRGhDO0FBQUEsVUFDZ0RKLEtBRGhEO0FBR1AsYUFDRSw2QkFBQyxrQkFBRCxFQUFlQSxLQUFmLEVBQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxRQUFBLElBQUksRUFBRSxHQURSO0FBRUUsUUFBQSxJQUFJLEVBQUM7QUFGUCxTQUdNTCxRQUhOLEVBSU9RLFFBQVEsR0FBRztBQUFFRSxRQUFBQSxVQUFVLEVBQUU7QUFBZCxPQUFILEdBQTRCLEVBSjNDLEVBS01ILFNBTE4sR0FPR0QsUUFQSCxDQURGLENBREY7QUFhRDs7O0VBdEN3Q0ssb0I7OztBQUF0QlAsYTs4QkFBQUEsYSwrQ0FLZFEsbUJBQVVDLFM7QUFFYjs7O0FBR0FMLEVBQUFBLFFBQVEsRUFBRU0sbUJBQVVDLElBQVYsQ0FBZUMsVTs7QUFFekI7OztBQUdBVCxFQUFBQSxTQUFTLEVBQUVPLG1CQUFVRzs7OEJBZkpiLGEsa0JBa0JHO0FBQ3BCSSxFQUFBQSxRQUFRLEVBQUU7QUFEVSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuL1RhYmxlQ2VsbCdcblxuY29uc3QgZWxsaXBzaXMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0VGFibGVDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVDZWxsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgZm9udEZhbWlseTogbW9uby5cbiAgICAgKi9cbiAgICBpc051bWJlcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgYWRkaXRpb25hbCBwcm9wcyB0byB0aGUgVGV4dCBjb21wb25lbnQuXG4gICAgICovXG4gICAgdGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTnVtYmVyOiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRleHRQcm9wcywgaXNOdW1iZXIsIHBsYWNlaG9sZGVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUNlbGwgey4uLnByb3BzfT5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBzaXplPXszMDB9XG4gICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgIHsuLi5lbGxpcHNpc31cbiAgICAgICAgICB7Li4uKGlzTnVtYmVyID8geyBmb250RmFtaWx5OiAnbW9ubycgfSA6IHt9KX1cbiAgICAgICAgICB7Li4udGV4dFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICApXG4gIH1cbn1cbiJdfQ==