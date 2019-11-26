import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { css } from 'glamor';
import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Paragraph, Heading } from '../../typography';
import { Overlay } from '../../overlay';
import { Button, IconButton } from '../../buttons';
import { withTheme } from '../../theme';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var DEFAULT_ANIMATION_DURATION = 200;

var generateOpenAnimation = function generateOpenAnimation(animation) {
  return css.keyframes('openAnimation', animation);
};

var generateCloseAnimation = function generateCloseAnimation(animation) {
  return css.keyframes('closeAnimation', animation);
};

var animationStyles = function animationStyles(openAnimation, closeAnimation) {
  var animationDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ANIMATION_DURATION;
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: "".concat(generateOpenAnimation(openAnimation), " ").concat(animationDuration, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]': {
      animation: "".concat(generateCloseAnimation(closeAnimation), " ").concat(animationDuration, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (close) {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: close
        });
      }

      if (typeof children === 'string') {
        return React.createElement(Paragraph, null, children);
      }

      return children;
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          topOffset = _this$props.topOffset,
          sideOffset = _this$props.sideOffset,
          hasHeader = _this$props.hasHeader,
          hasClose = _this$props.hasClose,
          hasFooter = _this$props.hasFooter,
          hasCancel = _this$props.hasCancel,
          onCloseComplete = _this$props.onCloseComplete,
          onOpenComplete = _this$props.onOpenComplete,
          onCancel = _this$props.onCancel,
          onConfirm = _this$props.onConfirm,
          confirmLabel = _this$props.confirmLabel,
          isConfirmLoading = _this$props.isConfirmLoading,
          isConfirmDisabled = _this$props.isConfirmDisabled,
          cancelLabel = _this$props.cancelLabel,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          contentContainerProps = _this$props.contentContainerProps,
          minHeightContent = _this$props.minHeightContent,
          preventBodyScrolling = _this$props.preventBodyScrolling,
          overlayProps = _this$props.overlayProps,
          openAnimation = _this$props.openAnimation,
          closeAnimation = _this$props.closeAnimation,
          animationDuration = _this$props.animationDuration;
      var sideOffsetWithUnit = Number.isInteger(sideOffset) ? "".concat(sideOffset, "px") : sideOffset;
      var maxWidth = "calc(100% - ".concat(sideOffsetWithUnit, " * 2)");
      var topOffsetWithUnit = Number.isInteger(topOffset) ? "".concat(topOffset, "px") : topOffset;
      var maxHeight = "calc(100% - ".concat(topOffsetWithUnit, " * 2)");
      return React.createElement(Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        containerProps: _objectSpread({
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }, overlayProps),
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return React.createElement(Pane, _extends({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          borderRadius: 8,
          width: width,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          marginX: sideOffsetWithUnit,
          marginY: topOffsetWithUnit,
          display: "flex",
          flexDirection: "column",
          css: animationStyles(openAnimation, closeAnimation, animationDuration),
          "data-state": state
        }, containerProps), hasHeader && React.createElement(Pane, {
          padding: 16,
          flexShrink: 0,
          borderBottom: "muted",
          display: "flex",
          alignItems: "center"
        }, React.createElement(Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && React.createElement(IconButton, {
          appearance: "minimal",
          icon: "cross",
          onClick: function onClick() {
            return onCancel(close);
          }
        })), React.createElement(Pane, _extends({
          "data-state": state,
          display: "flex",
          overflow: "auto",
          padding: 16,
          flexDirection: "column",
          minHeight: minHeightContent
        }, contentContainerProps), React.createElement(Pane, null, _this2.renderChildren(close))), hasFooter && React.createElement(Pane, {
          borderTop: "muted",
          clearfix: true
        }, React.createElement(Pane, {
          padding: 16,
          float: "right"
        }, hasCancel && React.createElement(Button, {
          tabIndex: 0,
          onClick: function onClick() {
            return onCancel(close);
          }
        }, cancelLabel), React.createElement(Button, {
          tabIndex: 0,
          marginLeft: 8,
          appearance: "primary",
          isLoading: isConfirmLoading,
          disabled: isConfirmDisabled,
          onClick: function onClick() {
            return onConfirm(close);
          },
          intent: intent
        }, confirmLabel))));
      });
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.displayName = "Dialog";

_defineProperty(Dialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: PropTypes.node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: PropTypes.bool,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: PropTypes.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: PropTypes.string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: PropTypes.bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: PropTypes.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: PropTypes.string,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: PropTypes.object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: PropTypes.object,

  /**
   * Props used to set the duration of the open and close animations related to
   * the Dialog component
   */
  animationDuration: PropTypes.number,

  /**
   * Props responsible to add a custom open CSS animation to the Dialog component
   */
  openAnimation: PropTypes.object,

  /**
   * Props responsible to add a custom close CSS animation to the Dialog component
   */
  closeAnimation: PropTypes.object
});

_defineProperty(Dialog, "defaultProps", {
  isShown: false,
  hasHeader: true,
  hasClose: true,
  hasFooter: true,
  hasCancel: true,
  intent: 'none',
  width: 560,
  topOffset: '12vmin',
  sideOffset: '16px',
  minHeightContent: 80,
  confirmLabel: 'Confirm',
  isConfirmLoading: false,
  isConfirmDisabled: false,
  cancelLabel: 'Cancel',
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  preventBodyScrolling: false,
  overlayProps: {},
  animationDuration: 200,
  openAnimation: {
    from: {
      transform: 'scale(0.8)',
      opacity: 0
    },
    to: {
      transform: 'scale(1)',
      opacity: 1
    }
  },
  closeAnimation: {
    from: {
      transform: 'scale(1)',
      opacity: 1
    },
    to: {
      transform: 'scale(0.8)',
      opacity: 0
    }
  }
});

export default withTheme(Dialog);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWFsb2cvc3JjL0RpYWxvZy5qcyJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlByb3BUeXBlcyIsIlBhbmUiLCJQYXJhZ3JhcGgiLCJIZWFkaW5nIiwiT3ZlcmxheSIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJ3aXRoVGhlbWUiLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsImdlbmVyYXRlT3BlbkFuaW1hdGlvbiIsImFuaW1hdGlvbiIsImtleWZyYW1lcyIsImdlbmVyYXRlQ2xvc2VBbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXMiLCJvcGVuQW5pbWF0aW9uIiwiY2xvc2VBbmltYXRpb24iLCJhbmltYXRpb25EdXJhdGlvbiIsIkRpYWxvZyIsImNsb3NlIiwiY2hpbGRyZW4iLCJwcm9wcyIsInRpdGxlIiwid2lkdGgiLCJpbnRlbnQiLCJpc1Nob3duIiwidG9wT2Zmc2V0Iiwic2lkZU9mZnNldCIsImhhc0hlYWRlciIsImhhc0Nsb3NlIiwiaGFzRm9vdGVyIiwiaGFzQ2FuY2VsIiwib25DbG9zZUNvbXBsZXRlIiwib25PcGVuQ29tcGxldGUiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImNvbmZpcm1MYWJlbCIsImlzQ29uZmlybUxvYWRpbmciLCJpc0NvbmZpcm1EaXNhYmxlZCIsImNhbmNlbExhYmVsIiwic2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsImNvbnRhaW5lclByb3BzIiwiY29udGVudENvbnRhaW5lclByb3BzIiwibWluSGVpZ2h0Q29udGVudCIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwib3ZlcmxheVByb3BzIiwic2lkZU9mZnNldFdpdGhVbml0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwibWF4V2lkdGgiLCJ0b3BPZmZzZXRXaXRoVW5pdCIsIm1heEhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJzdGF0ZSIsInJlbmRlckNoaWxkcmVuIiwiQ29tcG9uZW50Iiwib25lT2ZUeXBlIiwibm9kZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLE9BQXBCLFFBQW1DLGtCQUFuQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsZUFBeEI7QUFDQSxTQUFTQyxNQUFULEVBQWlCQyxVQUFqQixRQUFtQyxlQUFuQztBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFFQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLFlBQVksa0NBRFU7QUFFdEJDLEVBQUFBLFlBQVk7QUFGVSxDQUF4QjtBQUtBLElBQU1DLDBCQUEwQixHQUFHLEdBQW5DOztBQUVBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQUMsU0FBUyxFQUFJO0FBQ3pDLFNBQU9mLEdBQUcsQ0FBQ2dCLFNBQUosQ0FBYyxlQUFkLEVBQStCRCxTQUEvQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNRSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUFGLFNBQVMsRUFBSTtBQUMxQyxTQUFPZixHQUFHLENBQUNnQixTQUFKLENBQWMsZ0JBQWQsRUFBZ0NELFNBQWhDLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FDdEJDLGFBRHNCLEVBRXRCQyxjQUZzQixFQUluQjtBQUFBLE1BREhDLGlCQUNHLHVFQURpQlIs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QUFBQSxXQUFJQSxLQUFLLEVBQVQ7QUFBQSxHQWxCSTtBQW1CcEIwQixFQUFBQSxvQkFBb0IsRUFBRSxLQW5CRjtBQW9CcEJDLEVBQUFBLFlBQVksRUFBRSxFQXBCTTtBQXFCcEI3QixFQUFBQSxpQkFBaUIsRUFBRSxHQXJCQztBQXNCcEJGLEVBQUFBLGFBQWEsRUFBRTtBQUNicUQsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFNBQVMsRUFBRSxZQURQO0FBRUpDLE1BQUFBLE9BQU8sRUFBRTtBQUZMLEtBRE87QUFLYkMsSUFBQUEsRUFBRSxFQUFFO0FBQ0ZGLE1BQUFBLFNBQVMsRUFBRSxVQURUO0FBRUZDLE1BQUFBLE9BQU8sRUFBRTtBQUZQO0FBTFMsR0F0Qks7QUFnQ3BCdEQsRUFBQUEsY0FBYyxFQUFFO0FBQ2RvRCxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsU0FBUyxFQUFFLFVBRFA7QUFFSkMsTUFBQUEsT0FBTyxFQUFFO0FBRkwsS0FEUTtBQUtkQyxJQUFBQSxFQUFFLEVBQUU7QUFDRkYsTUFBQUEsU0FBUyxFQUFFLFlBRFQ7QUFFRkMsTUFBQUEsT0FBTyxFQUFFO0FBRlA7QUFMVTtBQWhDSSxDOztBQXdNeEIsZUFBZWpFLFNBQVMsQ0FBQ2EsTUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBQYXJhZ3JhcGgsIEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uLy4uL292ZXJsYXknXG5pbXBvcnQgeyBCdXR0b24sIEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWBcbn1cblxuY29uc3QgREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT04gPSAyMDBcblxuY29uc3QgZ2VuZXJhdGVPcGVuQW5pbWF0aW9uID0gYW5pbWF0aW9uID0+IHtcbiAgcmV0dXJuIGNzcy5rZXlmcmFtZXMoJ29wZW5BbmltYXRpb24nLCBhbmltYXRpb24pXG59XG5cbmNvbnN0IGdlbmVyYXRlQ2xvc2VBbmltYXRpb24gPSBhbmltYXRpb24gPT4ge1xuICByZXR1cm4gY3NzLmtleWZyYW1lcygnY2xvc2VBbmltYXRpb24nLCBhbmltYXRpb24pXG59XG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IChcbiAgb3BlbkFuaW1hdGlvbixcbiAgY2xvc2VBbmltYXRpb24sXG4gIGFuaW1hdGlvbkR1cmF0aW9uID0gREVGQVVMVF9BTklNQVRJT05fRFVSQVRJT05cbikgPT4ge1xuICByZXR1cm4ge1xuICAgICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICAgIGFuaW1hdGlvbjogYCR7Z2VuZXJhdGVPcGVuQW5pbWF0aW9uKFxuICAgICAgICBvcGVuQW5pbWF0aW9uXG4gICAgICApfSAke2FuaW1hdGlvbkR1cmF0aW9ufW1zICR7YW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvbn0gYm90aGBcbiAgICB9LFxuICAgICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgICAgYW5pbWF0aW9uOiBgJHtnZW5lcmF0ZUNsb3NlQW5pbWF0aW9uKFxuICAgICAgICBjbG9zZUFuaW1hdGlvblxuICAgICAgKX0gJHthbmltYXRpb25EdXJhdGlvbn1tcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgc3RyaW5nLCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAgICogV2hlbiBwYXNzaW5nIGEgc3RyaW5nLCA8UGFyYWdyYXBoIC8+IGlzIHVzZWQgdG8gd3JhcCB0aGUgc3RyaW5nLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgRGlhbG9nLiBVc2VkIGZvciB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGRpYWxvZyBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBEaWFsb2cuIFRpdGxlcyBzaG91bGQgdXNlIFRpdGxlIENhc2UuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgaGVhZGVyIHdpdGggdGhlIHRpdGxlIGFuZCBjbG9zZSBpY29uIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZm9vdGVyIHdpdGggdGhlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzRm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNhbmNlbCBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNsb3NlIGJ1dHRvbiBpcyBzaG93blxuICAgICAqL1xuICAgIGhhc0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIFRoaXMgZG9lcyBub3QgY2xvc2UgdGhlIERpYWxvZy4gQSBjbG9zZSBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZFxuICAgICAqIGFzIGEgcGFyYW1hdGVyIHlvdSBjYW4gdXNlIHRvIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAgICpcbiAgICAgKiBgb25Db25maXJtPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgY29uZmlybSBidXR0b24uXG4gICAgICovXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY29uZmlybSBidXR0b24gaXMgc2V0IHRvIGxvYWRpbmcuXG4gICAgICovXG4gICAgaXNDb25maXJtTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBzZXQgdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgaXNDb25maXJtRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBjbG9zZXMgdGhlIERpYWxvZyBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogYG9uQ2FuY2VsPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAqL1xuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBwcmVzc2luZyB0aGUgZXNjIGtleSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBEaWFsb2cuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGFjZSBhYm92ZSB0aGUgZGlhbG9nLlxuICAgICAqIFRoaXMgb2Zmc2V0IGlzIGFsc28gdXNlZCBhdCB0aGUgYm90dG9tIHdoZW4gdGhlcmUgaXMgbm90IGVub3VnaCB2ZXJ0aWNhbFxuICAgICAqIHNwYWNlIGF2YWlsYWJsZSBvbiBzY3JlZW4g4oCUIGFuZCB0aGUgZGlhbG9nIHNjcm9sbHMgaW50ZXJuYWxseS5cbiAgICAgKi9cbiAgICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGFjZSBvbiB0aGUgbGVmdC9yaWdodCBzaWRlcyBvZiB0aGUgZGlhbG9nIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoXG4gICAgICogaG9yaXpvbnRhbCBzcGFjZSBhdmFpbGFibGUgb24gc2NyZWVuLlxuICAgICAqL1xuICAgIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBib2R5IGNvbnRlbnQuXG4gICAgICogTWFrZXMgaXQgbGVzcyB3ZWlyZCB3aGVuIG9ubHkgc2hvd2luZyBsaXR0bGUgY29udGVudC5cbiAgICAgKi9cbiAgICBtaW5IZWlnaHRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGRpYWxvZyBjb250YWluZXIuXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGNvbnRlbnQgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRlbnRDb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgc2Nyb2xsaW5nIGluIHRoZSBvdXRlciBib2R5XG4gICAgICovXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBPdmVybGF5IGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBvdmVybGF5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB1c2VkIHRvIHNldCB0aGUgZHVyYXRpb24gb2YgdGhlIG9wZW4gYW5kIGNsb3NlIGFuaW1hdGlvbnMgcmVsYXRlZCB0b1xuICAgICAqIHRoZSBEaWFsb2cgY29tcG9uZW50XG4gICAgICovXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyByZXNwb25zaWJsZSB0byBhZGQgYSBjdXN0b20gb3BlbiBDU1MgYW5pbWF0aW9uIHRvIHRoZSBEaWFsb2cgY29tcG9uZW50XG4gICAgICovXG4gICAgb3BlbkFuaW1hdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHJlc3BvbnNpYmxlIHRvIGFkZCBhIGN1c3RvbSBjbG9zZSBDU1MgYW5pbWF0aW9uIHRvIHRoZSBEaWFsb2cgY29tcG9uZW50XG4gICAgICovXG4gICAgY2xvc2VBbmltYXRpb246IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNTaG93bjogZmFsc2UsXG4gICAgaGFzSGVhZGVyOiB0cnVlLFxuICAgIGhhc0Nsb3NlOiB0cnVlLFxuICAgIGhhc0Zvb3RlcjogdHJ1ZSxcbiAgICBoYXNDYW5jZWw6IHRydWUsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgd2lkdGg6IDU2MCxcbiAgICB0b3BPZmZzZXQ6ICcxMnZtaW4nLFxuICAgIHNpZGVPZmZzZXQ6ICcxNnB4JyxcbiAgICBtaW5IZWlnaHRDb250ZW50OiA4MCxcbiAgICBjb25maXJtTGFiZWw6ICdDb25maXJtJyxcbiAgICBpc0NvbmZpcm1Mb2FkaW5nOiBmYWxzZSxcbiAgICBpc0NvbmZpcm1EaXNhYmxlZDogZmFsc2UsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIG9uQ2FuY2VsOiBjbG9zZSA9PiBjbG9zZSgpLFxuICAgIG9uQ29uZmlybTogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZzogZmFsc2UsXG4gICAgb3ZlcmxheVByb3BzOiB7fSxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogMjAwLFxuICAgIG9wZW5BbmltYXRpb246IHtcbiAgICAgIGZyb206IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sXG4gICAgICB0bzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlQW5pbWF0aW9uOiB7XG4gICAgICBmcm9tOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSxcbiAgICAgIHRvOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4gPSBjbG9zZSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgY2xvc2UgfSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIDxQYXJhZ3JhcGg+e2NoaWxkcmVufTwvUGFyYWdyYXBoPlxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgd2lkdGgsXG4gICAgICBpbnRlbnQsXG4gICAgICBpc1Nob3duLFxuICAgICAgdG9wT2Zmc2V0LFxuICAgICAgc2lkZU9mZnNldCxcbiAgICAgIGhhc0hlYWRlcixcbiAgICAgIGhhc0Nsb3NlLFxuICAgICAgaGFzRm9vdGVyLFxuICAgICAgaGFzQ2FuY2VsLFxuICAgICAgb25DbG9zZUNvbXBsZXRlLFxuICAgICAgb25PcGVuQ29tcGxldGUsXG4gICAgICBvbkNhbmNlbCxcbiAgICAgIG9uQ29uZmlybSxcbiAgICAgIGNvbmZpcm1MYWJlbCxcbiAgICAgIGlzQ29uZmlybUxvYWRpbmcsXG4gICAgICBpc0NvbmZpcm1EaXNhYmxlZCxcbiAgICAgIGNhbmNlbExhYmVsLFxuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayxcbiAgICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyxcbiAgICAgIGNvbnRhaW5lclByb3BzID0ge30sXG4gICAgICBjb250ZW50Q29udGFpbmVyUHJvcHMsXG4gICAgICBtaW5IZWlnaHRDb250ZW50LFxuICAgICAgcHJldmVudEJvZHlTY3JvbGxpbmcsXG4gICAgICBvdmVybGF5UHJvcHMsXG4gICAgICBvcGVuQW5pbWF0aW9uLFxuICAgICAgY2xvc2VBbmltYXRpb24sXG4gICAgICBhbmltYXRpb25EdXJhdGlvblxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBzaWRlT2Zmc2V0V2l0aFVuaXQgPSBOdW1iZXIuaXNJbnRlZ2VyKHNpZGVPZmZzZXQpXG4gICAgICA/IGAke3NpZGVPZmZzZXR9cHhgXG4gICAgICA6IHNpZGVPZmZzZXRcbiAgICBjb25zdCBtYXhXaWR0aCA9IGBjYWxjKDEwMCUgLSAke3NpZGVPZmZzZXRXaXRoVW5pdH0gKiAyKWBcblxuICAgIGNvbnN0IHRvcE9mZnNldFdpdGhVbml0ID0gTnVtYmVyLmlzSW50ZWdlcih0b3BPZmZzZXQpXG4gICAgICA/IGAke3RvcE9mZnNldH1weGBcbiAgICAgIDogdG9wT2Zmc2V0XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gYGNhbGMoMTAwJSAtICR7dG9wT2Zmc2V0V2l0aFVuaXR9ICogMilgXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE92ZXJsYXlcbiAgICAgICAgaXNTaG93bj17aXNTaG93bn1cbiAgICAgICAgc2hvdWxkQ2xvc2VPbkNsaWNrPXtzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrfVxuICAgICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M9e3Nob3VsZENsb3NlT25Fc2NhcGVQcmVzc31cbiAgICAgICAgb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgICAgb25FbnRlcmVkPXtvbk9wZW5Db21wbGV0ZX1cbiAgICAgICAgY29udGFpbmVyUHJvcHM9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAuLi5vdmVybGF5UHJvcHNcbiAgICAgICAgfX1cbiAgICAgICAgcHJldmVudEJvZHlTY3JvbGxpbmc9e3ByZXZlbnRCb2R5U2Nyb2xsaW5nfVxuICAgICAgPlxuICAgICAgICB7KHsgc3RhdGUsIGNsb3NlIH0pID0+IChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBlbGV2YXRpb249ezR9XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBtYXhXaWR0aD17bWF4V2lkdGh9XG4gICAgICAgICAgICBtYXhIZWlnaHQ9e21heEhlaWdodH1cbiAgICAgICAgICAgIG1hcmdpblg9e3NpZGVPZmZzZXRXaXRoVW5pdH1cbiAgICAgICAgICAgIG1hcmdpblk9e3RvcE9mZnNldFdpdGhVbml0fVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBjc3M9e2FuaW1hdGlvblN0eWxlcyhcbiAgICAgICAgICAgICAgb3BlbkFuaW1hdGlvbixcbiAgICAgICAgICAgICAgY2xvc2VBbmltYXRpb24sXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hhc0hlYWRlciAmJiAoXG4gICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgcGFkZGluZz17MTZ9XG4gICAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b209XCJtdXRlZFwiXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgaXM9XCJoNFwiIHNpemU9ezYwMH0gZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAge2hhc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNyb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DYW5jZWwoY2xvc2UpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBvdmVyZmxvdz1cImF1dG9cIlxuICAgICAgICAgICAgICBwYWRkaW5nPXsxNn1cbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIG1pbkhlaWdodD17bWluSGVpZ2h0Q29udGVudH1cbiAgICAgICAgICAgICAgey4uLmNvbnRlbnRDb250YWluZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhbmU+e3RoaXMucmVuZGVyQ2hpbGRyZW4oY2xvc2UpfTwvUGFuZT5cbiAgICAgICAgICAgIDwvUGFuZT5cblxuICAgICAgICAgICAge2hhc0Zvb3RlciAmJiAoXG4gICAgICAgICAgICAgIDxQYW5lIGJvcmRlclRvcD1cIm11dGVkXCIgY2xlYXJmaXg+XG4gICAgICAgICAgICAgICAgPFBhbmUgcGFkZGluZz17MTZ9IGZsb2F0PVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBDYW5jZWwgc2hvdWxkIGJlIGZpcnN0IHRvIG1ha2Ugc3VyZSBmb2N1cyBnZXRzIG9uIGl0IGZpcnN0LiAqL31cbiAgICAgICAgICAgICAgICAgIHtoYXNDYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRhYkluZGV4PXswfSBvbkNsaWNrPXsoKSA9PiBvbkNhbmNlbChjbG9zZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNDb25maXJtTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQ29uZmlybURpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm0oY2xvc2UpfVxuICAgICAgICAgICAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICA8L092ZXJsYXk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShEaWFsb2cpXG4iXX0=