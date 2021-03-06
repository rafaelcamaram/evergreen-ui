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
import { Pane } from '../../layers';

var TableBody =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableBody, _PureComponent);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableBody).apply(this, arguments));
  }

  _createClass(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(Pane, _extends({
        "data-evergreen-table-body": true,
        flex: "1",
        overflowY: "auto"
      }, props), children);
    }
  }]);

  return TableBody;
}(PureComponent);

TableBody.displayName = "TableBody";

_defineProperty(TableBody, "propTypes", _objectSpread({}, Pane.propTypes));

export { TableBody as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVCb2R5LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJUYWJsZUJvZHkiLCJwcm9wcyIsImNoaWxkcmVuIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7O0lBRXFCQyxTOzs7Ozs7Ozs7Ozs7OzZCQVFWO0FBQUEsd0JBQ3dCLEtBQUtDLEtBRDdCO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDY0QsS0FEZDs7QUFFUCxhQUNFLG9CQUFDLElBQUQ7QUFBTSx5Q0FBTjtBQUFnQyxRQUFBLElBQUksRUFBQyxHQUFyQztBQUF5QyxRQUFBLFNBQVMsRUFBQztBQUFuRCxTQUE4REEsS0FBOUQsR0FDR0MsUUFESCxDQURGO0FBS0Q7Ozs7RUFmb0NKLGE7O0FBQWxCRSxTOztnQkFBQUEsUyxpQ0FLZEQsSUFBSSxDQUFDSSxTOztTQUxTSCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQm9keSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBQYW5lIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5QYW5lLnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIGRhdGEtZXZlcmdyZWVuLXRhYmxlLWJvZHkgZmxleD1cIjFcIiBvdmVyZmxvd1k9XCJhdXRvXCIgey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl19