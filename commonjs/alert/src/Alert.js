"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _theme = require("../../theme");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _icon = require("../../icon");

var Alert =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Alert, _PureComponent);

  function Alert() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Alert)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getIconForIntent", function (intent) {
      var theme = _this.props.theme;
      return _react.default.createElement(_icon.Icon, (0, _extends2.default)({
        size: 14
      }, theme.getIconForIntent(intent)));
    });
    return _this;
  }

  (0, _createClass2.default)(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          title = _this$props.title,
          intent = _this$props.intent,
          hasTrim = _this$props.hasTrim,
          hasIcon = _this$props.hasIcon,
          children = _this$props.children,
          appearance = _this$props.appearance,
          isRemoveable = _this$props.isRemoveable,
          onRemove = _this$props.onRemove,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "title", "intent", "hasTrim", "hasIcon", "children", "appearance", "isRemoveable", "onRemove"]);
      /**
       * Note that Alert return a className and additional properties.
       */

      var _theme$getAlertProps = theme.getAlertProps({
        appearance: appearance,
        intent: intent,
        hasTrim: hasTrim
      }),
          className = _theme$getAlertProps.className,
          themeProps = (0, _objectWithoutProperties2.default)(_theme$getAlertProps, ["className"]);

      return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
        className: className,
        role: "alert",
        backgroundColor: "white",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        paddingY: 12,
        paddingX: 16
      }, themeProps, props), hasIcon && _react.default.createElement(_layers.Pane, {
        marginRight: 10,
        marginLeft: 2,
        height: 20,
        display: "flex",
        alignItems: "center"
      }, this.getIconForIntent(intent)), _react.default.createElement(_layers.Pane, {
        display: "flex",
        width: "100%"
      }, _react.default.createElement(_layers.Pane, {
        flex: 1
      }, _react.default.createElement(_typography.Heading, {
        is: "h4",
        fontWeight: 600,
        size: 400,
        marginTop: 0,
        marginBottom: 0
      }, title), typeof children === 'string' ? _react.default.createElement(_typography.Paragraph, {
        size: 400,
        color: "muted"
      }, children) : children), isRemoveable && _react.default.createElement(_layers.Pane, {
        marginLeft: 24,
        flexShrink: 0,
        marginBottom: -2,
        marginTop: -2,
        marginRight: -2
      }, _react.default.createElement(_buttons.IconButton, {
        icon: "cross",
        appearance: "minimal",
        height: 24,
        onClick: onRemove
      }))));
    }
  }]);
  return Alert;
}(_react.PureComponent);

Alert.displayName = "Alert";
(0, _defineProperty2.default)(Alert, "propTypes", (0, _objectSpread2.default)({}, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes, _uiBox.dimensions.propTypes, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * The intent of the alert.
   */
  intent: _propTypes.default.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: _propTypes.default.node,

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim: _propTypes.default.bool,

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: _propTypes.default.bool,

  /**
   * When true, show a remove icon button.
   */
  isRemoveable: _propTypes.default.bool,

  /**
   * Function called when the remove button is clicked.
   */
  onRemove: _propTypes.default.func,

  /**
   * The appearance of the alert.
   */
  appearance: _propTypes.default.oneOf(['default', 'card']),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));
(0, _defineProperty2.default)(Alert, "defaultProps", {
  intent: 'none',
  hasTrim: true,
  hasIcon: true,
  isRemoveable: false,
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(Alert);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvQWxlcnQuanMiXSwibmFtZXMiOlsiQWxlcnQiLCJpbnRlbnQiLCJ0aGVtZSIsInByb3BzIiwiZ2V0SWNvbkZvckludGVudCIsInRpdGxlIiwiaGFzVHJpbSIsImhhc0ljb24iLCJjaGlsZHJlbiIsImFwcGVhcmFuY2UiLCJpc1JlbW92ZWFibGUiLCJvblJlbW92ZSIsImdldEFsZXJ0UHJvcHMiLCJjbGFzc05hbWUiLCJ0aGVtZVByb3BzIiwiUHVyZUNvbXBvbmVudCIsInNwYWNpbmciLCJwcm9wVHlwZXMiLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUdBaUVlLFVBQUFDLE1BQU0sRUFBSTtBQUFBLFVBQ25CQyxLQURtQixHQUNULE1BQUtDLEtBREksQ0FDbkJELEtBRG1CO0FBRzNCLGFBQU8sNkJBQUMsVUFBRDtBQUFNLFFBQUEsSUFBSSxFQUFFO0FBQVosU0FBb0JBLEtBQUssQ0FBQ0UsZ0JBQU4sQ0FBdUJILE1BQXZCLENBQXBCLEVBQVA7QUFDRCxLOzs7Ozs7NkJBRVE7QUFBQSx3QkFhSCxLQUFLRSxLQWJGO0FBQUEsVUFFTEQsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFJTEcsS0FKSyxlQUlMQSxLQUpLO0FBQUEsVUFLTEosTUFMSyxlQUtMQSxNQUxLO0FBQUEsVUFNTEssT0FOSyxlQU1MQSxPQU5LO0FBQUEsVUFPTEMsT0FQSyxlQU9MQSxPQVBLO0FBQUEsVUFRTEMsUUFSSyxlQVFMQSxRQVJLO0FBQUEsVUFTTEMsVUFUSyxlQVNMQSxV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LEk7O0FBRW5COzs7QUFHQXBCLEVBQUFBLE9BQU8sRUFBRWMsbUJBQVVNLEk7O0FBRW5COzs7QUFHQWpCLEVBQUFBLFlBQVksRUFBRVcsbUJBQVVNLEk7O0FBRXhCOzs7QUFHQWhCLEVBQUFBLFFBQVEsRUFBRVUsbUJBQVVPLEk7O0FBRXBCOzs7QUFHQW5CLEVBQUFBLFVBQVUsRUFBRVksbUJBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksTUFBWixDQUFoQixDOztBQUVaOzs7QUFHQXZCLEVBQUFBLEtBQUssRUFBRW1CLG1CQUFVUSxNQUFWLENBQWlCSDs7OEJBdER0QjFCLEssa0JBeURrQjtBQUNwQkMsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJLLEVBQUFBLE9BQU8sRUFBRSxJQUZXO0FBR3BCQyxFQUFBQSxPQUFPLEVBQUUsSUFIVztBQUlwQkcsRUFBQUEsWUFBWSxFQUFFLEtBSk07QUFLcEJELEVBQUFBLFVBQVUsRUFBRTtBQUxRLEM7O2VBdUdULHNCQUFVVCxLQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgc3BhY2luZywgZGltZW5zaW9ucywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IEhlYWRpbmcsIFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuXG5jbGFzcyBBbGVydCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgYWxlcnQuIFdoZW4gYSBzdHJpbmcgaXMgcGFzc2VkIGl0IGlzIHdyYXBwZWQgaW4gYSBgPFRleHQgc2l6ZT17NDAwfSAvPmAgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBib3JkZXIgb24gdGhlIGxlZnQgbWF0Y2hpbmcgdGhlIHR5cGUuXG4gICAgICovXG4gICAgaGFzVHJpbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBpY29uIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLFxuICAgICAqL1xuICAgIGhhc0ljb246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgcmVtb3ZlIGljb24gYnV0dG9uLlxuICAgICAqL1xuICAgIGlzUmVtb3ZlYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgcmVtb3ZlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbGVydC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgaGFzVHJpbTogdHJ1ZSxcbiAgICBoYXNJY29uOiB0cnVlLFxuICAgIGlzUmVtb3ZlYWJsZTogZmFsc2UsXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnXG4gIH1cblxuICBnZXRJY29uRm9ySW50ZW50ID0gaW50ZW50ID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPEljb24gc2l6ZT17MTR9IHsuLi50aGVtZS5nZXRJY29uRm9ySW50ZW50KGludGVudCl9IC8+XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIHRpdGxlLFxuICAgICAgaW50ZW50LFxuICAgICAgaGFzVHJpbSxcbiAgICAgIGhhc0ljb24sXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBpc1JlbW92ZWFibGUsXG4gICAgICBvblJlbW92ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8qKlxuICAgICAqIE5vdGUgdGhhdCBBbGVydCByZXR1cm4gYSBjbGFzc05hbWUgYW5kIGFkZGl0aW9uYWwgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgLi4udGhlbWVQcm9wcyB9ID0gdGhlbWUuZ2V0QWxlcnRQcm9wcyh7XG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaW50ZW50LFxuICAgICAgaGFzVHJpbVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBwYWRkaW5nWT17MTJ9XG4gICAgICAgIHBhZGRpbmdYPXsxNn1cbiAgICAgICAgey4uLnRoZW1lUHJvcHN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc0ljb24gJiYgKFxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICBtYXJnaW5SaWdodD17MTB9XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXsyfVxuICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLmdldEljb25Gb3JJbnRlbnQoaW50ZW50KX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgPFBhbmUgZmxleD17MX0+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBpcz1cImg0XCJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD17NjAwfVxuICAgICAgICAgICAgICBzaXplPXs0MDB9XG4gICAgICAgICAgICAgIG1hcmdpblRvcD17MH1cbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIHtpc1JlbW92ZWFibGUgJiYgKFxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD17MjR9XG4gICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17LTJ9XG4gICAgICAgICAgICAgIG1hcmdpblRvcD17LTJ9XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0PXstMn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiY3Jvc3NcIlxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFuZT5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEFsZXJ0KVxuIl19