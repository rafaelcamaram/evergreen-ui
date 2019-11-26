"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _overlay = require("../../overlay");

var _buttons = require("../../buttons");

var _theme = require("../../theme");

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var DEFAULT_ANIMATION_DURATION = 200;

var generateOpenAnimation = function generateOpenAnimation(animation) {
  return _glamor.css.keyframes('openAnimation', animation);
};

var generateCloseAnimation = function generateCloseAnimation(animation) {
  return _glamor.css.keyframes('closeAnimation', animation);
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
  (0, _inherits2.default)(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderChildren", function (close) {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: close
        });
      }

      if (typeof children === 'string') {
        return _react.default.createElement(_typography.Paragraph, null, children);
      }

      return children;
    });
    return _this;
  }

  (0, _createClass2.default)(Dialog, [{
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
      return _react.default.createElement(_overlay.Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        containerProps: (0, _objectSpread2.default)({
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }, overlayProps),
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
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
        }, containerProps), hasHeader && _react.default.createElement(_layers.Pane, {
          padding: 16,
          flexShrink: 0,
          borderBottom: "muted",
          display: "flex",
          alignItems: "center"
        }, _react.default.createElement(_typography.Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && _react.default.createElement(_buttons.IconButton, {
          appearance: "minimal",
          icon: "cross",
          onClick: function onClick() {
            return onCancel(close);
          }
        })), _react.default.createElement(_layers.Pane, (0, _extends2.default)({
          "data-state": state,
          display: "flex",
          overflow: "auto",
          padding: 16,
          flexDirection: "column",
          minHeight: minHeightContent
        }, contentContainerProps), _react.default.createElement(_layers.Pane, null, _this2.renderChildren(close))), hasFooter && _react.default.createElement(_layers.Pane, {
          borderTop: "muted",
          clearfix: true
        }, _react.default.createElement(_layers.Pane, {
          padding: 16,
          float: "right"
        }, hasCancel && _react.default.createElement(_buttons.Button, {
          tabIndex: 0,
          onClick: function onClick() {
            return onCancel(close);
          }
        }, cancelLabel), _react.default.createElement(_buttons.Button, {
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
}(_react.default.Component);

Dialog.displayName = "Dialog";
(0, _defineProperty2.default)(Dialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: _propTypes.default.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: _propTypes.default.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: _propTypes.default.node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: _propTypes.default.bool,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: _propTypes.default.bool,

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: _propTypes.default.bool,

  /**
   * When true, the close button is shown
   */
  hasClose: _propTypes.default.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes.default.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes.default.func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: _propTypes.default.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: _propTypes.default.string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: _propTypes.default.bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: _propTypes.default.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: _propTypes.default.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: _propTypes.default.string,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: _propTypes.default.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes.default.bool,

  /**
   * Width of the Dialog.
   */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: _propTypes.default.object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: _propTypes.default.object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: _propTypes.default.bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: _propTypes.default.object,

  /**
   * Props used to set the duration of the open and close animations related to
   * the Dialog component
   */
  animationDuration: _propTypes.default.number,

  /**
   * Props responsible to add a custom open CSS animation to the Dialog component
   */
  openAnimation: _propTypes.default.object,

  /**
   * Props responsible to add a custom close CSS animation to the Dialog component
   */
  closeAnimation: _propTypes.default.object
});
(0, _defineProperty2.default)(Dialog, "defaultProps", {
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

var _default = (0, _theme.withTheme)(Dialog);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWFsb2cvc3JjL0RpYWxvZy5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiIsImdlbmVyYXRlT3BlbkFuaW1hdGlvbiIsImFuaW1hdGlvbiIsImNzcyIsImtleWZyYW1lcyIsImdlbmVyYXRlQ2xvc2VBbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXMiLCJvcGVuQW5pbWF0aW9uIiwiY2xvc2VBbmltYXRpb24iLCJhbmltYXRpb25EdXJhdGlvbiIsIkRpYWxvZyIsImNsb3NlIiwiY2hpbGRyZW4iLCJwcm9wcyIsInRpdGxlIiwid2lkdGgiLCJpbnRlbnQiLCJpc1Nob3duIiwidG9wT2Zmc2V0Iiwic2lkZU9mZnNldCIsImhhc0hlYWRlciIsImhhc0Nsb3NlIiwiaGFzRm9vdGVyIiwiaGFzQ2FuY2VsIiwib25DbG9zZUNvbXBsZXRlIiwib25PcGVuQ29tcGxldGUiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImNvbmZpcm1MYWJlbCIsImlzQ29uZmlybUxvYWRpbmciLCJpc0NvbmZpcm1EaXNhYmxlZCIsImNhbmNlbExhYmVsIiwic2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsImNvbnRhaW5lclByb3BzIiwiY29udGVudENvbnRhaW5lclByb3BzIiwibWluSGVpZ2h0Q29udGVudCIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwib3ZlcmxheVByb3BzIiwic2lkZU9mZnNldFdpdGhVbml0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwibWF4V2lkdGgiLCJ0b3BPZmZzZXRXaXRoVW5pdCIsIm1heEhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJzdGF0ZSIsInJlbmRlckNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiLCJmcm9tIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLFlBQVksa0NBRFU7QUFFdEJDLEVBQUFBLFlBQVk7QUFGVSxDQUF4QjtBQUtBLElBQU1DLDBCQUEwQixHQUFHLEdBQW5DOztBQUVBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQUMsU0FBUyxFQUFJO0FBQ3pDLFNBQU9DLFlBQUlDLFNBQUosQ0FBYyxlQUFkLEVBQStCRixTQUEvQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNRyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUFILFNBQVMsRUFBSTtBQUMxQyxTQUFPQyxZQUFJQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0NGLFNBQWhDLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FDdEJDLGFBRHNCLEVBRXRCQyxjQUZzQixFQUluQjtBQUFBLE1BREhDLGlCQUNHLHVFQURpQlQsMEJBQ2pCO0FBQ0gsU0FBTztBQUNMLHlEQUFxRDtBQUNuREUsTUFBQUEsU0FBUyxZQUFLRCxxQkFBcUIsQ0FDakNNLGFBRGlDLENBQTFCLGNBRUpFLGlCQUZJLGdCQUVtQlosZUFBZSxDQUFDQyxZQUZuQztBQUQwQyxLQURoRDtBQU1MLCtCQUEyQjtBQUN6QkksTUFBQUEsU0FBUyxZQUFLRyxzQkFBc0IsQ0FDbENHLGNBRGtDLENBQTNCLGNBRUpDLGlCQUZJLGdCQUVtQlosZUFBZSxDQUFDRSxZQUZuQztBQURnQjtBQU50QixHQUFQO0FBWUQsQ0FqQkQ7O0lBbUJNVyxNOzs7Ozs7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QUFBQSxPQUFPLEVBQUU7QUFGUDtBQUxVO0FBaENJLEM7O2VBd01ULHNCQUFVdEQsTUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBhcmFncmFwaCwgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vLi4vb3ZlcmxheSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYFxufVxuXG5jb25zdCBERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTiA9IDIwMFxuXG5jb25zdCBnZW5lcmF0ZU9wZW5BbmltYXRpb24gPSBhbmltYXRpb24gPT4ge1xuICByZXR1cm4gY3NzLmtleWZyYW1lcygnb3BlbkFuaW1hdGlvbicsIGFuaW1hdGlvbilcbn1cblxuY29uc3QgZ2VuZXJhdGVDbG9zZUFuaW1hdGlvbiA9IGFuaW1hdGlvbiA9PiB7XG4gIHJldHVybiBjc3Mua2V5ZnJhbWVzKCdjbG9zZUFuaW1hdGlvbicsIGFuaW1hdGlvbilcbn1cblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0gKFxuICBvcGVuQW5pbWF0aW9uLFxuICBjbG9zZUFuaW1hdGlvbixcbiAgYW5pbWF0aW9uRHVyYXRpb24gPSBERUZBVUxUX0FOSU1BVElPTl9EVVJBVElPTlxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgICAgYW5pbWF0aW9uOiBgJHtnZW5lcmF0ZU9wZW5BbmltYXRpb24oXG4gICAgICAgIG9wZW5BbmltYXRpb25cbiAgICAgICl9ICR7YW5pbWF0aW9uRHVyYXRpb259bXMgJHthbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9ufSBib3RoYFxuICAgIH0sXG4gICAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2dlbmVyYXRlQ2xvc2VBbmltYXRpb24oXG4gICAgICAgIGNsb3NlQW5pbWF0aW9uXG4gICAgICApfSAke2FuaW1hdGlvbkR1cmF0aW9ufW1zICR7YW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvbn0gYm90aGBcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDaGlsZHJlbiBjYW4gYmUgYSBzdHJpbmcsIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICAgKiBXaGVuIHBhc3NpbmcgYSBzdHJpbmcsIDxQYXJhZ3JhcGggLz4gaXMgdXNlZCB0byB3cmFwIHRoZSBzdHJpbmcuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBEaWFsb2cuIFVzZWQgZm9yIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZGlhbG9nIGlzIHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIERpYWxvZy4gVGl0bGVzIHNob3VsZCB1c2UgVGl0bGUgQ2FzZS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBoZWFkZXIgd2l0aCB0aGUgdGl0bGUgYW5kIGNsb3NlIGljb24gYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0hlYWRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBmb290ZXIgd2l0aCB0aGUgY2FuY2VsIGFuZCBjb25maXJtIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNGb290ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2xvc2UgYnV0dG9uIGlzIHNob3duXG4gICAgICovXG4gICAgaGFzQ2xvc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBkb2VzIG5vdCBjbG9zZSB0aGUgRGlhbG9nLiBBIGNsb3NlIGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkXG4gICAgICogYXMgYSBwYXJhbWF0ZXIgeW91IGNhbiB1c2UgdG8gY2xvc2UgdGhlIGRpYWxvZy5cbiAgICAgKlxuICAgICAqIGBvbkNvbmZpcm09eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjb25maXJtIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjb25maXJtTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBzZXQgdG8gbG9hZGluZy5cbiAgICAgKi9cbiAgICBpc0NvbmZpcm1Mb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNvbmZpcm0gYnV0dG9uIGlzIHNldCB0byBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBpc0NvbmZpcm1EaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKiBUaGlzIGNsb3NlcyB0aGUgRGlhbG9nIGJ5IGRlZmF1bHQuXG4gICAgICpcbiAgICAgKiBgb25DYW5jZWw9eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNhbmNlbCBidXR0b24uXG4gICAgICovXG4gICAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgY2xpY2tpbmcgdGhlIG92ZXJsYXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHByZXNzaW5nIHRoZSBlc2Mga2V5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIERpYWxvZy5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYWNlIGFib3ZlIHRoZSBkaWFsb2cuXG4gICAgICogVGhpcyBvZmZzZXQgaXMgYWxzbyB1c2VkIGF0IHRoZSBib3R0b20gd2hlbiB0aGVyZSBpcyBub3QgZW5vdWdoIHZlcnRpY2FsXG4gICAgICogc3BhY2UgYXZhaWxhYmxlIG9uIHNjcmVlbiDigJQgYW5kIHRoZSBkaWFsb2cgc2Nyb2xscyBpbnRlcm5hbGx5LlxuICAgICAqL1xuICAgIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYWNlIG9uIHRoZSBsZWZ0L3JpZ2h0IHNpZGVzIG9mIHRoZSBkaWFsb2cgd2hlbiB0aGVyZSBpc24ndCBlbm91Z2hcbiAgICAgKiBob3Jpem9udGFsIHNwYWNlIGF2YWlsYWJsZSBvbiBzY3JlZW4uXG4gICAgICovXG4gICAgc2lkZU9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIGJvZHkgY29udGVudC5cbiAgICAgKiBNYWtlcyBpdCBsZXNzIHdlaXJkIHdoZW4gb25seSBzaG93aW5nIGxpdHRsZSBjb250ZW50LlxuICAgICAqL1xuICAgIG1pbkhlaWdodENvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgZGlhbG9nIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgY29udGVudCBjb250YWluZXIuXG4gICAgICovXG4gICAgY29udGVudENvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCBzY3JvbGxpbmcgaW4gdGhlIG91dGVyIGJvZHlcbiAgICAgKi9cbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIE92ZXJsYXkgY29tcG9uZW50LlxuICAgICAqL1xuICAgIG92ZXJsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHVzZWQgdG8gc2V0IHRoZSBkdXJhdGlvbiBvZiB0aGUgb3BlbiBhbmQgY2xvc2UgYW5pbWF0aW9ucyByZWxhdGVkIHRvXG4gICAgICogdGhlIERpYWxvZyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBhbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHJlc3BvbnNpYmxlIHRvIGFkZCBhIGN1c3RvbSBvcGVuIENTUyBhbmltYXRpb24gdG8gdGhlIERpYWxvZyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBvcGVuQW5pbWF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgcmVzcG9uc2libGUgdG8gYWRkIGEgY3VzdG9tIGNsb3NlIENTUyBhbmltYXRpb24gdG8gdGhlIERpYWxvZyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjbG9zZUFuaW1hdGlvbjogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc1Nob3duOiBmYWxzZSxcbiAgICBoYXNIZWFkZXI6IHRydWUsXG4gICAgaGFzQ2xvc2U6IHRydWUsXG4gICAgaGFzRm9vdGVyOiB0cnVlLFxuICAgIGhhc0NhbmNlbDogdHJ1ZSxcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICB3aWR0aDogNTYwLFxuICAgIHRvcE9mZnNldDogJzEydm1pbicsXG4gICAgc2lkZU9mZnNldDogJzE2cHgnLFxuICAgIG1pbkhlaWdodENvbnRlbnQ6IDgwLFxuICAgIGNvbmZpcm1MYWJlbDogJ0NvbmZpcm0nLFxuICAgIGlzQ29uZmlybUxvYWRpbmc6IGZhbHNlLFxuICAgIGlzQ29uZmlybURpc2FibGVkOiBmYWxzZSxcbiAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IHRydWUsXG4gICAgb25DYW5jZWw6IGNsb3NlID0+IGNsb3NlKCksXG4gICAgb25Db25maXJtOiBjbG9zZSA9PiBjbG9zZSgpLFxuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBvdmVybGF5UHJvcHM6IHt9LFxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDAsXG4gICAgb3BlbkFuaW1hdGlvbjoge1xuICAgICAgZnJvbToge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSxcbiAgICAgIHRvOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VBbmltYXRpb246IHtcbiAgICAgIGZyb206IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LFxuICAgICAgdG86IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbiA9IGNsb3NlID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oeyBjbG9zZSB9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gPFBhcmFncmFwaD57Y2hpbGRyZW59PC9QYXJhZ3JhcGg+XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGludGVudCxcbiAgICAgIGlzU2hvd24sXG4gICAgICB0b3BPZmZzZXQsXG4gICAgICBzaWRlT2Zmc2V0LFxuICAgICAgaGFzSGVhZGVyLFxuICAgICAgaGFzQ2xvc2UsXG4gICAgICBoYXNGb290ZXIsXG4gICAgICBoYXNDYW5jZWwsXG4gICAgICBvbkNsb3NlQ29tcGxldGUsXG4gICAgICBvbk9wZW5Db21wbGV0ZSxcbiAgICAgIG9uQ2FuY2VsLFxuICAgICAgb25Db25maXJtLFxuICAgICAgY29uZmlybUxhYmVsLFxuICAgICAgaXNDb25maXJtTG9hZGluZyxcbiAgICAgIGlzQ29uZmlybURpc2FibGVkLFxuICAgICAgY2FuY2VsTGFiZWwsXG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzLFxuICAgICAgY29udGFpbmVyUHJvcHMgPSB7fSxcbiAgICAgIGNvbnRlbnRDb250YWluZXJQcm9wcyxcbiAgICAgIG1pbkhlaWdodENvbnRlbnQsXG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZyxcbiAgICAgIG92ZXJsYXlQcm9wcyxcbiAgICAgIG9wZW5BbmltYXRpb24sXG4gICAgICBjbG9zZUFuaW1hdGlvbixcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNpZGVPZmZzZXRXaXRoVW5pdCA9IE51bWJlci5pc0ludGVnZXIoc2lkZU9mZnNldClcbiAgICAgID8gYCR7c2lkZU9mZnNldH1weGBcbiAgICAgIDogc2lkZU9mZnNldFxuICAgIGNvbnN0IG1heFdpZHRoID0gYGNhbGMoMTAwJSAtICR7c2lkZU9mZnNldFdpdGhVbml0fSAqIDIpYFxuXG4gICAgY29uc3QgdG9wT2Zmc2V0V2l0aFVuaXQgPSBOdW1iZXIuaXNJbnRlZ2VyKHRvcE9mZnNldClcbiAgICAgID8gYCR7dG9wT2Zmc2V0fXB4YFxuICAgICAgOiB0b3BPZmZzZXRcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBgY2FsYygxMDAlIC0gJHt0b3BPZmZzZXRXaXRoVW5pdH0gKiAyKWBcblxuICAgIHJldHVybiAoXG4gICAgICA8T3ZlcmxheVxuICAgICAgICBpc1Nob3duPXtpc1Nob3dufVxuICAgICAgICBzaG91bGRDbG9zZU9uQ2xpY2s9e3Nob3VsZENsb3NlT25PdmVybGF5Q2xpY2t9XG4gICAgICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcz17c2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzfVxuICAgICAgICBvbkV4aXRlZD17b25DbG9zZUNvbXBsZXRlfVxuICAgICAgICBvbkVudGVyZWQ9e29uT3BlbkNvbXBsZXRlfVxuICAgICAgICBjb250YWluZXJQcm9wcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIC4uLm92ZXJsYXlQcm9wc1xuICAgICAgICB9fVxuICAgICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZz17cHJldmVudEJvZHlTY3JvbGxpbmd9XG4gICAgICA+XG4gICAgICAgIHsoeyBzdGF0ZSwgY2xvc2UgfSkgPT4gKFxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIG1heFdpZHRoPXttYXhXaWR0aH1cbiAgICAgICAgICAgIG1heEhlaWdodD17bWF4SGVpZ2h0fVxuICAgICAgICAgICAgbWFyZ2luWD17c2lkZU9mZnNldFdpdGhVbml0fVxuICAgICAgICAgICAgbWFyZ2luWT17dG9wT2Zmc2V0V2l0aFVuaXR9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzKFxuICAgICAgICAgICAgICBvcGVuQW5pbWF0aW9uLFxuICAgICAgICAgICAgICBjbG9zZUFuaW1hdGlvbixcbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGFzSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBwYWRkaW5nPXsxNn1cbiAgICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIm11dGVkXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBpcz1cImg0XCIgc2l6ZT17NjAwfSBmbGV4PVwiMVwiPlxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICB7aGFzQ2xvc2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY3Jvc3NcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNhbmNlbChjbG9zZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIG92ZXJmbG93PVwiYXV0b1wiXG4gICAgICAgICAgICAgIHBhZGRpbmc9ezE2fVxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXttaW5IZWlnaHRDb250ZW50fVxuICAgICAgICAgICAgICB7Li4uY29udGVudENvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGFuZT57dGhpcy5yZW5kZXJDaGlsZHJlbihjbG9zZSl9PC9QYW5lPlxuICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICB7aGFzRm9vdGVyICYmIChcbiAgICAgICAgICAgICAgPFBhbmUgYm9yZGVyVG9wPVwibXV0ZWRcIiBjbGVhcmZpeD5cbiAgICAgICAgICAgICAgICA8UGFuZSBwYWRkaW5nPXsxNn0gZmxvYXQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgey8qIENhbmNlbCBzaG91bGQgYmUgZmlyc3QgdG8gbWFrZSBzdXJlIGZvY3VzIGdldHMgb24gaXQgZmlyc3QuICovfVxuICAgICAgICAgICAgICAgICAge2hhc0NhbmNlbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGFiSW5kZXg9ezB9IG9uQ2xpY2s9eygpID0+IG9uQ2FuY2VsKGNsb3NlKX0+XG4gICAgICAgICAgICAgICAgICAgICAge2NhbmNlbExhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0NvbmZpcm1Mb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDb25maXJtRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29uZmlybShjbG9zZSl9XG4gICAgICAgICAgICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgIDwvT3ZlcmxheT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKERpYWxvZylcbiJdfQ==