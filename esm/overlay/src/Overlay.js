import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import cx from 'classnames';
import { css } from 'glamor';
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Box from 'ui-box';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import { StackingOrder } from '../../constants';
import { withTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import preventBodyScroll from '../../lib/prevent-body-scroll';
var animationEasing = {
  standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0.0, 0.6, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var fadeInAnimation = css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var fadeOutAnimation = css.keyframes('fadeOutAnimation', {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});

var animationStyles = function animationStyles(backgroundColor) {
  return {
    '&::before': {
      backgroundColor: backgroundColor,
      left: 0,
      top: 0,
      position: 'fixed',
      display: 'block',
      width: '100%',
      height: '100%',
      content: '" "'
    },
    '&[data-state="entering"]::before, &[data-state="entered"]::before': {
      animation: "".concat(fadeInAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]::before, &[data-state="exited"]::before': {
      animation: "".concat(fadeOutAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};
/**
 * Overlay is essentially a wrapper around react-transition-group/Transition
 * Learn more: https://reactcommunity.org/react-transition-group/
 */


var Overlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props) {
    var _this;

    _classCallCheck(this, Overlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Overlay).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "bringFocusInsideOverlay", function () {
      // Always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(function () {
        // Container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE
        if (_this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !_this.props.isShown) {
          return;
        }

        var isFocusOutsideModal = !_this.containerElement.contains(document.activeElement);

        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other clowns
          var autofocusElement = _this.containerElement.querySelector('[autofocus]');

          var wrapperElement = _this.containerElement.querySelector('[tabindex]');

          var buttonElement = _this.containerElement.querySelector('button');

          if (autofocusElement) {
            autofocusElement.focus();
          } else if (wrapperElement) {
            wrapperElement.focus();
          } else if (buttonElement) {
            buttonElement.focus();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bringFocusBackToTarget", function () {
      return requestAnimationFrame(function () {
        if (_this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
            return;
          }

        var isFocusInsideModal = _this.containerElement.contains(document.activeElement); // Bring back focus on the target.


        if (_this.previousActiveElement && (document.activeElement === document.body || isFocusInsideModal)) {
          _this.previousActiveElement.focus();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27 && _this.props.shouldCloseOnEscapePress) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      var shouldClose = safeInvoke(_this.props.onBeforeClose);

      if (shouldClose !== false) {
        _this.setState({
          exiting: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBodyScroll", function (preventScroll) {
      if (_this.props.preventBodyScrolling) {
        preventBodyScroll(preventScroll);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      _this.handleBodyScroll(true);

      safeInvoke(_this.props.onEnter);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntering", function (node) {
      document.body.addEventListener('keydown', _this.onEsc, false);

      _this.props.onEntering(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntered", function (node) {
      _this.previousActiveElement = document.activeElement;

      _this.bringFocusInsideOverlay();

      _this.props.onEntered(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExit", function () {
      _this.handleBodyScroll(false);

      safeInvoke(_this.props.onExit);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExiting", function (node) {
      document.body.removeEventListener('keydown', _this.onEsc, false);

      _this.bringFocusBackToTarget();

      _this.props.onExiting(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExited", function (node) {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onExited(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (e.target !== e.currentTarget || !_this.props.shouldCloseOnClick) {
        return;
      }

      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onContainerRef", function (ref) {
      _this.containerElement = ref;
    });

    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  _createClass(Overlay, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isShown && this.props.isShown) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          exited: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleBodyScroll(false);
      document.body.removeEventListener('keydown', this.onEsc, false);
    }
    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          isShown = _this$props.isShown,
          children = _this$props.children;
      var _this$state = this.state,
          exiting = _this$state.exiting,
          exited = _this$state.exited;
      if (exited) return null;
      return React.createElement(Stack, {
        value: StackingOrder.OVERLAY
      }, function (zIndex) {
        return React.createElement(Portal, null, React.createElement(Transition, {
          appear: true,
          unmountOnExit: true,
          timeout: ANIMATION_DURATION,
          in: isShown && !exiting,
          onExit: _this2.handleExit,
          onExiting: _this2.handleExiting,
          onExited: _this2.handleExited,
          onEnter: _this2.handleEnter,
          onEntering: _this2.handleEntering,
          onEntered: _this2.handleEntered
        }, function (state) {
          return React.createElement(Box, _extends({
            onClick: _this2.handleBackdropClick,
            innerRef: _this2.onContainerRef,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: zIndex,
            "data-state": state
          }, containerProps, {
            className: cx(containerProps.className, css(animationStyles(theme.overlayBackgroundColor)).toString())
          }), typeof children === 'function' ? children({
            state: state,
            close: _this2.close
          }) : children);
        }));
      });
    }
  }]);

  return Overlay;
}(React.Component);

Overlay.displayName = "Overlay";

_defineProperty(Overlay, "propTypes", {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: PropTypes.bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: PropTypes.object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: PropTypes.func,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(Overlay, "defaultProps", {
  onHide: function onHide() {},
  shouldCloseOnClick: true,
  shouldCloseOnEscapePress: true,
  preventBodyScrolling: false,
  onExit: function onExit() {},
  onExiting: function onExiting() {},
  onExited: function onExited() {},
  onEnter: function onEnter() {},
  onEntering: function onEntering() {},
  onEntered: function onEntered() {}
});

export default withTheme(Overlay);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vdmVybGF5L3NyYy9PdmVybGF5LmpzIl0sIm5hbWVzIjpbImN4IiwiY3NzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJUcmFuc2l0aW9uIiwiQm94IiwiUG9ydGFsIiwiU3RhY2siLCJTdGFja2luZ09yZGVyIiwid2l0aFRoZW1lIiwic2FmZUludm9rZSIsInByZXZlbnRCb2R5U2Nyb2xsIiwiYW5pbWF0aW9uRWFzaW5nIiwic3RhbmRhcmQiLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJzaGFycCIsInNwcmluZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsImZhZGVJbkFuaW1hdGlvbiIsImtleWZyYW1lcyIsImZyb20iLCJvcGFjaXR5IiwidG8iLCJmYWRlT3V0QW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwibGVmdCIsInRvcCIsInBvc2l0aW9uIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGVudCIsImFuaW1hdGlvbiIsIk92ZXJsYXkiLCJwcm9wcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnRhaW5lckVsZW1lbnQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJpc1Nob3duIiwiaXNGb2N1c091dHNpZGVNb2RhbCIsImNvbnRhaW5zIiwiYXV0b2ZvY3VzRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyRWxlbWVudCIsImJ1dHRvbkVsZW1lbnQiLCJmb2N1cyIsImlzRm9jdXNJbnNpZGVNb2RhbCIsInByZXZpb3VzQWN0aXZlRWxlbWVudCIsImJvZHkiLCJlIiwia2V5Q29kZSIsInNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyIsImNsb3NlIiwic2hvdWxkQ2xvc2UiLCJvbkJlZm9yZUNsb3NlIiwic2V0U3RhdGUiLCJleGl0aW5nIiwicHJldmVudFNjcm9sbCIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwiaGFuZGxlQm9keVNjcm9sbCIsIm9uRW50ZXIiLCJub2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRXNjIiwib25FbnRlcmluZyIsImJyaW5nRm9jdXNJbnNpZGVPdmVybGF5Iiwib25FbnRlcmVkIiwib25FeGl0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJyaW5nRm9jdXNCYWNrVG9UYXJnZXQiLCJvbkV4aXRpbmciLCJleGl0ZWQiLCJvbkV4aXRlZCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJzaG91bGRDbG9zZU9uQ2xpY2siLCJyZWYiLCJzdGF0ZSIsInByZXZQcm9wcyIsInRoZW1lIiwiY29udGFpbmVyUHJvcHMiLCJjaGlsZHJlbiIsIk9WRVJMQVkiLCJ6SW5kZXgiLCJoYW5kbGVFeGl0IiwiaGFuZGxlRXhpdGluZyIsImhhbmRsZUV4aXRlZCIsImhhbmRsZUVudGVyIiwiaGFuZGxlRW50ZXJpbmciLCJoYW5kbGVFbnRlcmVkIiwiaGFuZGxlQmFja2Ryb3BDbGljayIsIm9uQ29udGFpbmVyUmVmIiwiY2xhc3NOYW1lIiwib3ZlcmxheUJhY2tncm91bmRDb2xvciIsInRvU3RyaW5nIiwiQ29tcG9uZW50Iiwib25lT2ZUeXBlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwib2JqZWN0Iiwib25IaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixtQ0FBdkI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixjQUF2QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsYUFBdEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGlCQUE5QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2QjtBQUNBLE9BQU9DLGlCQUFQLE1B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RyxJQWhFRjs7QUFrRWpCOzs7Ozs7O0FBT0FqQyxFQUFBQSxVQUFVLEVBQUVoRSxTQUFTLENBQUNpRyxJQXpFTDs7QUEyRWpCOzs7Ozs7O0FBT0EvQixFQUFBQSxTQUFTLEVBQUVsRSxTQUFTLENBQUNpRyxJQWxGSjs7QUFvRmpCOzs7QUFHQWxCLEVBQUFBLEtBQUssRUFBRS9FLFNBQVMsQ0FBQ29HLE1BQVYsQ0FBaUJGO0FBdkZQLEM7O2dCQURmbEUsTyxrQkEyRmtCO0FBQ3BCcUUsRUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQUUsQ0FESTtBQUVwQjFCLEVBQUFBLGtCQUFrQixFQUFFLElBRkE7QUFHcEJ4QixFQUFBQSx3QkFBd0IsRUFBRSxJQUhOO0FBSXBCTyxFQUFBQSxvQkFBb0IsRUFBRSxLQUpGO0FBS3BCUyxFQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQUxJO0FBTXBCRyxFQUFBQSxTQUFTLEVBQUUscUJBQU0sQ0FBRSxDQU5DO0FBT3BCRSxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQVBFO0FBUXBCWixFQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQVJHO0FBU3BCSSxFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQVRBO0FBVXBCRSxFQUFBQSxTQUFTLEVBQUUscUJBQU0sQ0FBRTtBQVZDLEM7O0FBaU94QixlQUFlNUQsU0FBUyxDQUFDMEIsT0FBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICcuLi8uLi9wb3J0YWwnXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uLy4uL3N0YWNrJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHByZXZlbnRCb2R5U2Nyb2xsIGZyb20gJy4uLy4uL2xpYi9wcmV2ZW50LWJvZHktc2Nyb2xsJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIHN0YW5kYXJkOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpYCxcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNoYXJwOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2ZhZGVJbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgdG86IHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn0pXG5cbmNvbnN0IGZhZGVPdXRBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdmYWRlT3V0QW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0gYmFja2dyb3VuZENvbG9yID0+ICh7XG4gICcmOjpiZWZvcmUnOiB7XG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBjb250ZW50OiAnXCIgXCInXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXTo6YmVmb3JlLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdOjpiZWZvcmUnOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtmYWRlSW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9uXG4gICAgfSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXTo6YmVmb3JlLCAmW2RhdGEtc3RhdGU9XCJleGl0ZWRcIl06OmJlZm9yZSc6IHtcbiAgICBhbmltYXRpb246IGAke2ZhZGVPdXRBbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9uXG4gICAgfSBib3RoYFxuICB9XG59KVxuXG4vKipcbiAqIE92ZXJsYXkgaXMgZXNzZW50aWFsbHkgYSB3cmFwcGVyIGFyb3VuZCByZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25cbiAqIExlYXJuIG1vcmU6IGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvXG4gKi9cbmNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENoaWxkcmVuIGNhbiBiZSBhIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYGNsb3NlOiBmdW5jYFxuICAgICAqIGFuZCBgc3RhdGU6IEVOVEVSSU5HIHwgRU5URVJFRCB8IEVYSVRJTkcgfCBFWElURURgLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXMuXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0byBiZSBwYXNzZWQgdGhyb3VnaCBvbiB0aGUgaW5uZXIgQm94LlxuICAgICAqL1xuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCBib2R5IHNjcm9sbGluZyBvdXRzaWRlIHRoZSBjb250ZXh0IG9mIHRoZSBvdmVybGF5XG4gICAgICovXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHByZXNzaW5nIHRoZSBlc2Mga2V5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb3ZlcmxheSBpcyBhYm91dCB0byBjbG9zZS5cbiAgICAgKiBSZXR1cm4gYGZhbHNlYCB0byBwcmV2ZW50IHRoZSBzaGVldCBmcm9tIGNsb3NpbmcuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uIC0+IEJvb2xlYW5gXG4gICAgICovXG4gICAgb25CZWZvcmVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKGV4aXRTdGF0ZTogQW55Pywgbm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgICAqIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudC5cbiAgICAgKlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICAgKiBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnQuXG4gICAgICpcbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICAgKiBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnQuXG4gICAgICpcbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25IaWRlOiAoKSA9PiB7fSxcbiAgICBzaG91bGRDbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBvbkV4aXQ6ICgpID0+IHt9LFxuICAgIG9uRXhpdGluZzogKCkgPT4ge30sXG4gICAgb25FeGl0ZWQ6ICgpID0+IHt9LFxuICAgIG9uRW50ZXI6ICgpID0+IHt9LFxuICAgIG9uRW50ZXJpbmc6ICgpID0+IHt9LFxuICAgIG9uRW50ZXJlZDogKCkgPT4ge31cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhpdGluZzogZmFsc2UsXG4gICAgICBleGl0ZWQ6ICFwcm9wcy5pc1Nob3duXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghcHJldlByb3BzLmlzU2hvd24gJiYgdGhpcy5wcm9wcy5pc1Nob3duKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBleGl0ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzIGJvcnJvd2VkIGZyb20gQmx1ZXByaW50SlNcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL3JlbGVhc2UvMi4wLjAvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkudHN4XG4gICAqL1xuICBicmluZ0ZvY3VzSW5zaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICAvLyBBbHdheXMgZGVsYXkgZm9jdXMgbWFuaXB1bGF0aW9uIHRvIGp1c3QgYmVmb3JlIHJlcGFpbnQgdG8gcHJldmVudCBzY3JvbGwganVtcGluZ1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gQ29udGFpbmVyIHJlZiBtYXkgYmUgdW5kZWZpbmVkIGJldHdlZW4gY29tcG9uZW50IG1vdW50aW5nIGFuZCBQb3J0YWwgcmVuZGVyaW5nXG4gICAgICAvLyBhY3RpdmVFbGVtZW50IG1heSBiZSB1bmRlZmluZWQgaW4gc29tZSByYXJlIGNhc2VzIGluIElFXG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICF0aGlzLnByb3BzLmlzU2hvd25cbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb2N1c091dHNpZGVNb2RhbCA9ICF0aGlzLmNvbnRhaW5lckVsZW1lbnQuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgIC8vIEVsZW1lbnQgbWFya2VkIGF1dG9mb2N1cyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIG90aGVyIGNsb3duc1xuICAgICAgICBjb25zdCBhdXRvZm9jdXNFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJ1thdXRvZm9jdXNdJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleF0nKVxuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG5cbiAgICAgICAgaWYgKGF1dG9mb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgICBhdXRvZm9jdXNFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVyRWxlbWVudCkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbGVtZW50KSB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRm9jdXNJbnNpZGVNb2RhbCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuXG4gICAgICAvLyBCcmluZyBiYWNrIGZvY3VzIG9uIHRoZSB0YXJnZXQuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmXG4gICAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbClcbiAgICAgICkge1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uRXNjID0gZSA9PiB7XG4gICAgLy8gRXNjIGtleVxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmIHRoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCBzaG91bGRDbG9zZSA9IHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkJlZm9yZUNsb3NlKVxuICAgIGlmIChzaG91bGRDbG9zZSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQm9keVNjcm9sbCA9IHByZXZlbnRTY3JvbGwgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnByZXZlbnRCb2R5U2Nyb2xsaW5nKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChwcmV2ZW50U2Nyb2xsKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlQm9keVNjcm9sbCh0cnVlKVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkVudGVyKVxuICB9XG5cbiAgaGFuZGxlRW50ZXJpbmcgPSBub2RlID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSlcbiAgfVxuXG4gIGhhbmRsZUVudGVyZWQgPSBub2RlID0+IHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICB0aGlzLmJyaW5nRm9jdXNJbnNpZGVPdmVybGF5KClcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJlZChub2RlKVxuICB9XG5cbiAgaGFuZGxlRXhpdCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZUJvZHlTY3JvbGwoZmFsc2UpXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uRXhpdClcbiAgfVxuXG4gIGhhbmRsZUV4aXRpbmcgPSBub2RlID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgICB0aGlzLmJyaW5nRm9jdXNCYWNrVG9UYXJnZXQoKVxuICAgIHRoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpXG4gIH1cblxuICBoYW5kbGVFeGl0ZWQgPSBub2RlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhpdGluZzogZmFsc2UsIGV4aXRlZDogdHJ1ZSB9KVxuICAgIHRoaXMucHJvcHMub25FeGl0ZWQobm9kZSlcbiAgfVxuXG4gIGhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCB8fCAhdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uQ2xpY2spIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25Db250YWluZXJSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBjb250YWluZXJQcm9wcyA9IHt9LFxuICAgICAgaXNTaG93bixcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgZXhpdGluZywgZXhpdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoZXhpdGVkKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFjayB2YWx1ZT17U3RhY2tpbmdPcmRlci5PVkVSTEFZfT5cbiAgICAgICAge3pJbmRleCA9PiAoXG4gICAgICAgICAgPFBvcnRhbD5cbiAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgIGFwcGVhclxuICAgICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgICAgIHRpbWVvdXQ9e0FOSU1BVElPTl9EVVJBVElPTn1cbiAgICAgICAgICAgICAgaW49e2lzU2hvd24gJiYgIWV4aXRpbmd9XG4gICAgICAgICAgICAgIG9uRXhpdD17dGhpcy5oYW5kbGVFeGl0fVxuICAgICAgICAgICAgICBvbkV4aXRpbmc9e3RoaXMuaGFuZGxlRXhpdGluZ31cbiAgICAgICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgICBvbkVudGVyaW5nPXt0aGlzLmhhbmRsZUVudGVyaW5nfVxuICAgICAgICAgICAgICBvbkVudGVyZWQ9e3RoaXMuaGFuZGxlRW50ZXJlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5vbkNvbnRhaW5lclJlZn1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICAgICAgdG9wPXswfVxuICAgICAgICAgICAgICAgICAgbGVmdD17MH1cbiAgICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgICAgICAgICAgekluZGV4PXt6SW5kZXh9XG4gICAgICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY3NzKGFuaW1hdGlvblN0eWxlcyh0aGVtZS5vdmVybGF5QmFja2dyb3VuZENvbG9yKSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogdGhpcy5jbG9zZVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoT3ZlcmxheSlcbiJdfQ==