import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { spacing, dimensions, position, layout } from 'ui-box';
import { withTheme } from '../../theme';
import { Pane } from '../../layers';
import { Heading, Paragraph } from '../../typography';
import { IconButton } from '../../buttons';
import { Icon } from '../../icon';

var Alert =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  function Alert() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Alert)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getIconForIntent", function (intent) {
      var theme = _this.props.theme;
      return React.createElement(Icon, _extends({
        size: 14
      }, theme.getIconForIntent(intent)));
    });

    return _this;
  }

  _createClass(Alert, [{
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
          props = _objectWithoutProperties(_this$props, ["theme", "title", "intent", "hasTrim", "hasIcon", "children", "appearance", "isRemoveable", "onRemove"]);
      /**
       * Note that Alert return a className and additional properties.
       */


      var _theme$getAlertProps = theme.getAlertProps({
        appearance: appearance,
        intent: intent,
        hasTrim: hasTrim
      }),
          className = _theme$getAlertProps.className,
          themeProps = _objectWithoutProperties(_theme$getAlertProps, ["className"]);

      return React.createElement(Pane, _extends({
        className: className,
        role: "alert",
        backgroundColor: "white",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        paddingY: 12,
        paddingX: 16
      }, themeProps, props), hasIcon && React.createElement(Pane, {
        marginRight: 10,
        marginLeft: 2,
        height: 20,
        display: "flex",
        alignItems: "center"
      }, this.getIconForIntent(intent)), React.createElement(Pane, {
        display: "flex",
        width: "100%"
      }, React.createElement(Pane, {
        flex: 1
      }, React.createElement(Heading, {
        is: "h4",
        fontWeight: 600,
        size: 400,
        marginTop: 0,
        marginBottom: 0
      }, title), typeof children === 'string' ? React.createElement(Paragraph, {
        size: 400,
        color: "muted"
      }, children) : children), isRemoveable && React.createElement(Pane, {
        marginLeft: 24,
        flexShrink: 0,
        marginBottom: -2,
        marginTop: -2,
        marginRight: -2
      }, React.createElement(IconButton, {
        icon: "cross",
        appearance: "minimal",
        height: 24,
        onClick: onRemove
      }))));
    }
  }]);

  return Alert;
}(PureComponent);

Alert.displayName = "Alert";

_defineProperty(Alert, "propTypes", _objectSpread({}, spacing.propTypes, position.propTypes, layout.propTypes, dimensions.propTypes, {
  /**
   * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * When true, show a border on the left matching the type.
   */
  hasTrim: PropTypes.bool,

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon: PropTypes.bool,

  /**
   * When true, show a remove icon button.
   */
  isRemoveable: PropTypes.bool,

  /**
   * Function called when the remove button is clicked.
   */
  onRemove: PropTypes.func,

  /**
   * The appearance of the alert.
   */
  appearance: PropTypes.oneOf(['default', 'card']),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Alert, "defaultProps", {
  intent: 'none',
  hasTrim: true,
  hasIcon: true,
  isRemoveable: false,
  appearance: 'default'
});

export default withTheme(Alert);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbGVydC9zcmMvQWxlcnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3BhY2luZyIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImxheW91dCIsIndpdGhUaGVtZSIsIlBhbmUiLCJIZWFkaW5nIiwiUGFyYWdyYXBoIiwiSWNvbkJ1dHRvbiIsIkljb24iLCJBbGVydCIsImludGVudCIsInRoZW1lIiwicHJvcHMiLCJnZXRJY29uRm9ySW50ZW50IiwidGl0bGUiLCJoYXNUcmltIiwiaGFzSWNvbiIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsImlzUmVtb3ZlYWJsZSIsIm9uUmVtb3ZlIiwiZ2V0QWxlcnRQcm9wcyIsImNsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJub2RlIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxVQUFsQixFQUE4QkMsUUFBOUIsRUFBd0NDLE1BQXhDLFFBQXNELFFBQXREO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxTQUFsQixRQUFtQyxrQkFBbkM7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGVBQTNCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixZQUFyQjs7SUFFTUMsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VFQWlFZSxVQUFBQyxNQUFNLEVBQUk7QUFBQSxVQUNuQkMsS0FEbUIsR0FDVCxNQUFLQyxLQURJLENBQ25CRCxLQURtQjtBQUczQixhQUFPLG9CQUFDLElBQUQ7QUFBTSxR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QU0sQ0FBQ3NCLFMsRUFDUHhCLFVBQVUsQ0FBQ3dCLFM7QUFFZDs7O0FBR0FQLEVBQUFBLFFBQVEsRUFBRW5CLFNBQVMsQ0FBQzJCLFNBQVYsQ0FBb0IsQ0FBQzNCLFNBQVMsQ0FBQzRCLE1BQVgsRUFBbUI1QixTQUFTLENBQUM2QixJQUE3QixDQUFwQixDOztBQUVWOzs7QUFHQWpCLEVBQUFBLE1BQU0sRUFBRVosU0FBUyxDQUFDOEIsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLEVBQ0xDLFU7O0FBRUg7OztBQUdBZixFQUFBQSxLQUFLLEVBQUVoQixTQUFTLENBQUM2QixJOztBQUVqQjs7O0FBR0FaLEVBQUFBLE9BQU8sRUFBRWpCLFNBQVMsQ0FBQ2dDLEk7O0FBRW5COzs7QUFHQWQsRUFBQUEsT0FBTyxFQUFFbEIsU0FBUyxDQUFDZ0MsSTs7QUFFbkI7OztBQUdBWCxFQUFBQSxZQUFZLEVBQUVyQixTQUFTLENBQUNnQyxJOztBQUV4Qjs7O0FBR0FWLEVBQUFBLFFBQVEsRUFBRXRCLFNBQVMsQ0FBQ2lDLEk7O0FBRXBCOzs7QUFHQWIsRUFBQUEsVUFBVSxFQUFFcEIsU0FBUyxDQUFDOEIsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQWhCLEM7O0FBRVo7OztBQUdBakIsRUFBQUEsS0FBSyxFQUFFYixTQUFTLENBQUNrQyxNQUFWLENBQWlCSDs7O2dCQXREdEJwQixLLGtCQXlEa0I7QUFDcEJDLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCSyxFQUFBQSxPQUFPLEVBQUUsSUFGVztBQUdwQkMsRUFBQUEsT0FBTyxFQUFFLElBSFc7QUFJcEJHLEVBQUFBLFlBQVksRUFBRSxLQUpNO0FBS3BCRCxFQUFBQSxVQUFVLEVBQUU7QUFMUSxDOztBQXVHeEIsZUFBZWYsU0FBUyxDQUFDTSxLQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHNwYWNpbmcsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nLCBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGFsZXJ0LiBXaGVuIGEgc3RyaW5nIGlzIHBhc3NlZCBpdCBpcyB3cmFwcGVkIGluIGEgYDxUZXh0IHNpemU9ezQwMH0gLz5gIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgYm9yZGVyIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLlxuICAgICAqL1xuICAgIGhhc1RyaW06IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IGEgaWNvbiBvbiB0aGUgbGVmdCBtYXRjaGluZyB0aGUgdHlwZSxcbiAgICAgKi9cbiAgICBoYXNJY29uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIHJlbW92ZSBpY29uIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpc1JlbW92ZWFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHJlbW92ZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjYXJkJ10pLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGhhc1RyaW06IHRydWUsXG4gICAgaGFzSWNvbjogdHJ1ZSxcbiAgICBpc1JlbW92ZWFibGU6IGZhbHNlLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgZ2V0SWNvbkZvckludGVudCA9IGludGVudCA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIDxJY29uIHNpemU9ezE0fSB7Li4udGhlbWUuZ2V0SWNvbkZvckludGVudChpbnRlbnQpfSAvPlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICB0aXRsZSxcbiAgICAgIGludGVudCxcbiAgICAgIGhhc1RyaW0sXG4gICAgICBoYXNJY29uLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNSZW1vdmVhYmxlLFxuICAgICAgb25SZW1vdmUsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvKipcbiAgICAgKiBOb3RlIHRoYXQgQWxlcnQgcmV0dXJuIGEgY2xhc3NOYW1lIGFuZCBhZGRpdGlvbmFsIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnRoZW1lUHJvcHMgfSA9IHRoZW1lLmdldEFsZXJ0UHJvcHMoe1xuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGludGVudCxcbiAgICAgIGhhc1RyaW1cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcGFkZGluZ1k9ezEyfVxuICAgICAgICBwYWRkaW5nWD17MTZ9XG4gICAgICAgIHsuLi50aGVtZVByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtoYXNJY29uICYmIChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgICAgbWFyZ2luTGVmdD17Mn1cbiAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5nZXRJY29uRm9ySW50ZW50KGludGVudCl9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxQYW5lIGZsZXg9ezF9PlxuICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgaXM9XCJoNFwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cbiAgICAgICAgICAgICAgc2l6ZT17NDAwfVxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9ezB9XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17MH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICB7aXNSZW1vdmVhYmxlICYmIChcbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezI0fVxuICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209ey0yfVxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9ey0yfVxuICAgICAgICAgICAgICBtYXJnaW5SaWdodD17LTJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImNyb3NzXCJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShBbGVydClcbiJdfQ==