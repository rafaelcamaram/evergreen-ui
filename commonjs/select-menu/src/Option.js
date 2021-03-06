"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _layers = require("../../layers");

var _icon = require("../../icon");

var _image = require("../../image");

var _table = require("../../table");

var Option =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Option, _PureComponent);

  function Option() {
    (0, _classCallCheck2.default)(this, Option);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Option).apply(this, arguments));
  }

  (0, _createClass2.default)(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          isSelectable = _this$props.isSelectable,
          disabled = _this$props.disabled,
          style = _this$props.style,
          height = _this$props.height,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["label", "onSelect", "onDeselect", "isHighlighted", "isSelected", "isSelectable", "disabled", "style", "height", "icon"]);
      var textProps = {};

      if (disabled) {
        textProps.color = 'muted';
      }

      if (isSelected) {
        textProps.color = 'selected';
      }

      return _react.default.createElement(_table.TableRow, (0, _extends2.default)({
        isSelectable: isSelectable && !disabled,
        isHighlighted: isHighlighted,
        onSelect: onSelect,
        onDeselect: onDeselect,
        isSelected: isSelected,
        style: style,
        display: "flex",
        alignItems: "center",
        borderBottom: false
      }, props), _react.default.createElement(_layers.Pane, {
        paddingLeft: 12,
        paddingRight: 8,
        opacity: isSelected ? 1 : 0,
        flexGrow: 0,
        paddingTop: 4
      }, _react.default.createElement(_icon.Icon, {
        color: "selected",
        icon: "tick",
        size: 14
      })), _react.default.createElement(_table.TextTableCell, {
        height: height,
        borderBottom: "muted",
        textProps: textProps,
        paddingLeft: 0,
        borderRight: null,
        flex: 1,
        alignSelf: "stretch",
        cursor: disabled ? 'default' : 'pointer'
      }, _react.default.createElement(_layers.Pane, {
        alignItems: "center",
        display: "flex"
      }, icon && _react.default.createElement(_image.Image, {
        src: icon,
        width: 24,
        marginRight: 8
      }), label)));
    }
  }]);
  return Option;
}(_react.PureComponent);

exports.default = Option;
Option.displayName = "Option";
(0, _defineProperty2.default)(Option, "propTypes", {
  label: _propTypes.default.string,
  icon: _propTypes.default.string,
  style: _propTypes.default.any,
  height: _propTypes.default.number,
  onSelect: _propTypes.default.func,
  onDeselect: _propTypes.default.func,
  isHighlighted: _propTypes.default.bool,
  isSelected: _propTypes.default.bool,
  isSelectable: _propTypes.default.bool,
  disabled: _propTypes.default.bool
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvT3B0aW9uLmpzIl0sIm5hbWVzIjpbIk9wdGlvbiIsInByb3BzIiwibGFiZWwiLCJvblNlbGVjdCIsIm9uRGVzZWxlY3QiLCJpc0hpZ2hsaWdodGVkIiwiaXNTZWxlY3RlZCIsImlzU2VsZWN0YWJsZSIsImRpc2FibGVkIiwic3R5bGUiLCJoZWlnaHQiLCJpY29uIiwidGV4dFByb3BzIiwiY29sb3IiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwibnVtYmVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7OzZCQWNWO0FBQUEsd0JBYUgsS0FBS0MsS0FiRjtBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xDLFFBSEssZUFHTEEsUUFISztBQUFBLFVBSUxDLFVBSkssZUFJTEEsVUFKSztBQUFBLFVBS0xDLGFBTEssZUFLTEEsYUFMSztBQUFBLFVBTUxDLFVBTkssZUFNTEEsVUFOSztBQUFBLFVBT0xDLFlBUEssZUFPTEEsWUFQSztBQUFBLFVBUUxDLFFBUkssZUFRTEEsUUFSSztBQUFBLFVBU0xDLEtBVEssZUFTTEEsS0FUSztBQUFBLFVBVUxDLE1BVkssZUFVTEEsTUFWSztBQUFBLFVBV0xDLElBWEssZUFXTEEsSUFYSztBQUFBLFVBWUZWLEtBWkU7QUFlUCxVQUFNVyxTQUFTLEdBQUcsRUFBbEI7O0FBQ0EsVUFBSUosUUFBSixFQUFjO0FBQ1pJLFFBQUFBLFNBQVMsQ0FBQ0MsS0FBVixHQUFrQixPQUFsQjtBQUNEOztBQUVELFVBQUlQLFVBQUosRUFBZ0I7QUFDZE0sUUFBQUEsU0FBUyxDQUFDQyxLQUFWLEdBQWtCLFVBQWxCO0FBQ0Q7O0FBRUQsYUFDRSw2QkFBQyxlQUFEO0FBQ0UsUUFBQSxZQUFZLEVBQUVOLFlBQVksSUFBSSxDQUFDQyxRQURqQztBQUVFLFFBQUEsYUFBYSxFQUFFSCxhQUZqQjtBQUdFLFFBQUEsUUFBUSxFQUFFRixRQUhaO0FBSUUsUUFBQSxVQUFVLEVBQUVDLFVBSmQ7QUFLRSxRQUFBLFVBQVUsRUFBRUUsVUFMZDtBQU1FLFFBQUEsS0FBSyxFQUFFRyxLQU5UO0FBT0UsUUFBQSxPQUFPLEVBQUMsTUFQVjtBQVFFLFFBQUEsVUFBVSxFQUFDLFFBUmI7QUFTRSxRQUFBLFlBQVksRUFBRTtBQVRoQixTQVVNUixLQVZOLEdBWUUsNkJBQUMsWUFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFLEVBRGY7QUFFRSxRQUFBLFlBQVksRUFBRSxDQUZoQjtBQUdFLFFBQUEsT0FBTyxFQUFFSyxVQUFVLEdBQUcsQ0FBSCxHQUFPLENBSDVCO0FBSUUsUUFBQSxRQUFRLEVBQUUsQ0FKWjtBQUtFLFFBQUEsVUFBVSxFQUFFO0FBTGQsU0FPRSw2QkFBQyxVQUFEO0FBQU0sUUFBQSxLQUFLLEVBQUMsVUFBWjtBQUF1QixRQUFBLElBQUksRUFBQyxNQUE1QjtBQUFtQyxRQUFBLElBQUksRUFBRTtBQUF6QyxRQVBGLENBWkYsRUFxQkUsNkJBQUMsb0JBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRUksTUFEVjtBQUVFLFFBQUEsWUFBWSxFQUFDLE9BRmY7QUFHRSxRQUFBLFNBQVMsRUFBRUUsU0FIYjtBQUlFLFFBQUEsV0FBVyxFQUFFLENBSmY7QUFLRSxRQUFBLFdBQVcsRUFBRSxJQUxmO0FBTUUsUUFBQSxJQUFJLEVBQUUsQ0FOUjtBQU9FLFFBQUEsU0FBUyxFQUFDLFNBUFo7QUFRRSxRQUFBLE1BQU0sRUFBRUosUUFBUSxHQUFHLFNBQUgsR0FBZTtBQVJqQyxTQVVFLDZCQUFDLFlBQUQ7QUFBTSxRQUFBLFVBQVUsRUFBQyxRQUFqQjtBQUEwQixRQUFBLE9BQU8sRUFBQztBQUFsQyxTQUNHRyxJQUFJLElBQUksNkJBQUMsWUFBRDtBQUFPLFFBQUEsR0FBRyxFQUFFQSxJQUFaO0FBQWtCLFFBQUEsS0FBSyxFQUFFLEVBQXpCO0FBQTZCLFFBQUEsV0FBVyxFQUFFO0FBQTFDLFFBRFgsRUFFR1QsS0FGSCxDQVZGLENBckJGLENBREY7QUF1Q0Q7OztFQTdFaUNZLG9COzs7QUFBZmQsTTs4QkFBQUEsTSxlQUNBO0FBQ2pCRSxFQUFBQSxLQUFLLEVBQUVhLG1CQUFVQyxNQURBO0FBRWpCTCxFQUFBQSxJQUFJLEVBQUVJLG1CQUFVQyxNQUZDO0FBR2pCUCxFQUFBQSxLQUFLLEVBQUVNLG1CQUFVRSxHQUhBO0FBSWpCUCxFQUFBQSxNQUFNLEVBQUVLLG1CQUFVRyxNQUpEO0FBS2pCZixFQUFBQSxRQUFRLEVBQUVZLG1CQUFVSSxJQUxIO0FBTWpCZixFQUFBQSxVQUFVLEVBQUVXLG1CQUFVSSxJQU5MO0FBT2pCZCxFQUFBQSxhQUFhLEVBQUVVLG1CQUFVSyxJQVBSO0FBUWpCZCxFQUFBQSxVQUFVLEVBQUVTLG1CQUFVSyxJQVJMO0FBU2pCYixFQUFBQSxZQUFZLEVBQUVRLG1CQUFVSyxJQVRQO0FBVWpCWixFQUFBQSxRQUFRLEVBQUVPLG1CQUFVSztBQVZILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi9pbWFnZSdcbmltcG9ydCB7IFRhYmxlUm93LCBUZXh0VGFibGVDZWxsIH0gZnJvbSAnLi4vLi4vdGFibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpc0hpZ2hsaWdodGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgb25TZWxlY3QsXG4gICAgICBvbkRlc2VsZWN0LFxuICAgICAgaXNIaWdobGlnaHRlZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHN0eWxlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgaWNvbixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRleHRQcm9wcyA9IHt9XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0ZXh0UHJvcHMuY29sb3IgPSAnbXV0ZWQnXG4gICAgfVxuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIHRleHRQcm9wcy5jb2xvciA9ICdzZWxlY3RlZCdcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlUm93XG4gICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlICYmICFkaXNhYmxlZH1cbiAgICAgICAgaXNIaWdobGlnaHRlZD17aXNIaWdobGlnaHRlZH1cbiAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICBvbkRlc2VsZWN0PXtvbkRlc2VsZWN0fVxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGJvcmRlckJvdHRvbT17ZmFsc2V9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPFBhbmVcbiAgICAgICAgICBwYWRkaW5nTGVmdD17MTJ9XG4gICAgICAgICAgcGFkZGluZ1JpZ2h0PXs4fVxuICAgICAgICAgIG9wYWNpdHk9e2lzU2VsZWN0ZWQgPyAxIDogMH1cbiAgICAgICAgICBmbGV4R3Jvdz17MH1cbiAgICAgICAgICBwYWRkaW5nVG9wPXs0fVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gY29sb3I9XCJzZWxlY3RlZFwiIGljb249XCJ0aWNrXCIgc2l6ZT17MTR9IC8+XG4gICAgICAgIDwvUGFuZT5cbiAgICAgICAgPFRleHRUYWJsZUNlbGxcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBib3JkZXJCb3R0b209XCJtdXRlZFwiXG4gICAgICAgICAgdGV4dFByb3BzPXt0ZXh0UHJvcHN9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgICAgYm9yZGVyUmlnaHQ9e251bGx9XG4gICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICBhbGlnblNlbGY9XCJzdHJldGNoXCJcbiAgICAgICAgICBjdXJzb3I9e2Rpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInfVxuICAgICAgICA+XG4gICAgICAgICAgPFBhbmUgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICAgICAgICB7aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSB3aWR0aD17MjR9IG1hcmdpblJpZ2h0PXs4fSAvPn1cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgIDwvVGV4dFRhYmxlQ2VsbD5cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgKVxuICB9XG59XG4iXX0=