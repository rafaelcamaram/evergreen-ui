"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ScrollbarSize =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ScrollbarSize, _PureComponent);

  function ScrollbarSize() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ScrollbarSize);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ScrollbarSize)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      innerWidth: null,
      outerWidth: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOuterRef", function (ref) {
      _this.outerRef = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleInnerRef", function (ref) {
      _this.innerRef = ref;
    });
    return _this;
  }

  (0, _createClass2.default)(ScrollbarSize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var innerWidth = this.innerRef.getBoundingClientRect().width;
      var outerWidth = this.outerRef.getBoundingClientRect().width;
      this.setState({
        innerWidth: innerWidth,
        outerWidth: outerWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.innerWidth && this.state.outerWidth) {
        this.props.handleScrollbarSize(this.state.outerWidth - this.state.innerWidth);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        ref: this.handleOuterRef,
        "aria-hidden": true,
        style: {
          position: 'fixed',
          top: -500,
          left: -500,
          width: 100,
          overflowY: 'scroll'
        }
      }, _react.default.createElement("div", {
        ref: this.handleInnerRef
      }));
    }
  }]);
  return ScrollbarSize;
}(_react.PureComponent);

exports.default = ScrollbarSize;
ScrollbarSize.displayName = "ScrollbarSize";
(0, _defineProperty2.default)(ScrollbarSize, "propTypes", {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: _propTypes.default.func
});
(0, _defineProperty2.default)(ScrollbarSize, "defaultProps", {
  handleScrollbarSize: function handleScrollbarSize() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2Nyb2xsYmFyU2l6ZS5qcyJdLCJuYW1lcyI6WyJTY3JvbGxiYXJTaXplIiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJyZWYiLCJvdXRlclJlZiIsImlubmVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwiaGFuZGxlT3V0ZXJSZWYiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJvdmVyZmxvd1kiLCJoYW5kbGVJbm5lclJlZiIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFZWDtBQUNOQyxNQUFBQSxVQUFVLEVBQUUsSUFETjtBQUVOQyxNQUFBQSxVQUFVLEVBQUU7QUFGTixLO2lHQXNCUyxVQUFBQyxHQUFHLEVBQUk7QUFDdEIsWUFBS0MsUUFBTCxHQUFnQkQsR0FBaEI7QUFDRCxLO2lHQUVnQixVQUFBQSxHQUFHLEVBQUk7QUFDdEIsWUFBS0UsUUFBTCxHQUFnQkYsR0FBaEI7QUFDRCxLOzs7Ozs7d0NBdkJtQjtBQUNsQixVQUFNRixVQUFVLEdBQUcsS0FBS0ksUUFBTCxDQUFjQyxxQkFBZCxHQUFzQ0MsS0FBekQ7QUFDQSxVQUFNTCxVQUFVLEdBQUcsS0FBS0UsUUFBTCxDQUFjRSxxQkFBZCxHQUFzQ0MsS0FBekQ7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDWlAsUUFBQUEsVUFBVSxFQUFWQSxVQURZO0FBRVpDLFFBQUFBLFVBQVUsRUFBVkE7QUFGWSxPQUFkO0FBSUQ7Ozt5Q0FFb0I7QUFDbkIsVUFBSSxLQUFLTyxLQUFMLENBQVdSLFVBQVgsSUFBeUIsS0FBS1EsS0FBTCxDQUFXUCxVQUF4QyxFQUFvRDtBQUNsRCxhQUFLUSxLQUFMLENBQVdDLG1CQUFYLENBQ0UsS0FBS0YsS0FBTCxDQUFXUCxVQUFYLEdBQXdCLEtBQUtPLEtBQUwsQ0FBV1IsVUFEckM7QUFHRDtBQUNGOzs7NkJBVVE7QUFDUCxhQUNFO0FBQ0UsUUFBQSxHQUFHLEVBQUUsS0FBS1csY0FEWjtBQUVFLDJCQUZGO0FBR0UsUUFBQSxLQUFLLEVBQUU7QUFDTEMsVUFBQUEsUUFBUSxFQUFFLE9BREw7QUFFTEMsVUFBQUEsR0FBRyxFQUFFLENBQUMsR0FGRDtBQUdMQyxVQUFBQSxJQUFJLEVBQUUsQ0FBQyxHQUhGO0FBSUxSLFVBQUFBLEtBQUssRUFBRSxHQUpGO0FBS0xTLFVBQUFBLFNBQVMsRUFBRTtBQUxOO0FBSFQsU0FXRTtBQUFLLFFBQUEsR0FBRyxFQUFFLEtBQUtDO0FBQWYsUUFYRixDQURGO0FBZUQ7OztFQTFEd0NDLG9COzs7QUFBdEJsQixhOzhCQUFBQSxhLGVBQ0E7QUFDakI7OztBQUdBVyxFQUFBQSxtQkFBbUIsRUFBRVEsbUJBQVVDO0FBSmQsQzs4QkFEQXBCLGEsa0JBUUc7QUFDcEJXLEVBQUFBLG1CQUFtQixFQUFFLCtCQUFNLENBQUU7QUFEVCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFyU2l6ZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNpemUgb2YgdGhlIHNjcm9sbGJhciBieSBjcmVhdGluZyBhIGhpZGRlbiBmaXhlZCBkaXYuXG4gICAgICovXG4gICAgaGFuZGxlU2Nyb2xsYmFyU2l6ZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGFuZGxlU2Nyb2xsYmFyU2l6ZTogKCkgPT4ge31cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlubmVyV2lkdGg6IG51bGwsXG4gICAgb3V0ZXJXaWR0aDogbnVsbFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuaW5uZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICBjb25zdCBvdXRlcldpZHRoID0gdGhpcy5vdXRlclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5uZXJXaWR0aCxcbiAgICAgIG91dGVyV2lkdGhcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlubmVyV2lkdGggJiYgdGhpcy5zdGF0ZS5vdXRlcldpZHRoKSB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZVNjcm9sbGJhclNpemUoXG4gICAgICAgIHRoaXMuc3RhdGUub3V0ZXJXaWR0aCAtIHRoaXMuc3RhdGUuaW5uZXJXaWR0aFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU91dGVyUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm91dGVyUmVmID0gcmVmXG4gIH1cblxuICBoYW5kbGVJbm5lclJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5pbm5lclJlZiA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dGhpcy5oYW5kbGVPdXRlclJlZn1cbiAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB0b3A6IC01MDAsXG4gICAgICAgICAgbGVmdDogLTUwMCxcbiAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiByZWY9e3RoaXMuaGFuZGxlSW5uZXJSZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==