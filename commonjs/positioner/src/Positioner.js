"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _portal = require("../../portal");

var _stack = require("../../stack");

var _constants = require("../../constants");

var _getPosition2 = _interopRequireDefault(require("./getPosition"));

var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};

var initialState = function initialState() {
  return {
    top: null,
    left: null,
    transformOrigin: null
  };
};

var getCSS = function getCSS(_ref) {
  var initialScale = _ref.initialScale,
      animationDuration = _ref.animationDuration;
  return {
    position: 'fixed',
    opacity: 0,
    transitionTimingFunction: animationEasing.spring,
    transitionDuration: "".concat(animationDuration, "ms"),
    transitionProperty: 'opacity, transform',
    transform: "scale(".concat(initialScale, ") translateY(-1px)"),
    '&[data-state="entering"], &[data-state="entered"]': {
      opacity: 1,
      visibility: 'visible',
      transform: "scale(1)"
    },
    '&[data-state="exiting"]': {
      opacity: 0,
      transform: 'scale(1)'
    }
  };
};

var Positioner =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Positioner, _PureComponent);

  function Positioner(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Positioner);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Positioner).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getTargetRef", function (ref) {
      _this.targetRef = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (ref) {
      _this.positionerRef = ref;

      _this.props.innerRef(ref);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleEnter", function () {
      _this.update();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "update", function () {
      var prevHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var prevWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!_this.props.isShown || !_this.targetRef || !_this.positionerRef) return;

      var targetRect = _this.targetRef.getBoundingClientRect();

      var hasEntered = _this.positionerRef.getAttribute('data-state') === 'entered';
      var viewportHeight = document.documentElement.clientHeight;
      var viewportWidth = document.documentElement.clientWidth;
      var height;
      var width;

      if (hasEntered) {
        // Only when the animation is done should we opt-in to `getBoundingClientRect`
        var positionerRect = _this.positionerRef.getBoundingClientRect(); // https://github.com/segmentio/evergreen/issues/255
        // We need to ceil the width and height to prevent jitter when
        // the window is zoomed (when `window.devicePixelRatio` is not an integer)


        height = Math.round(positionerRect.height);
        width = Math.round(positionerRect.width);
      } else {
        // When the animation is in flight use `offsetWidth/Height` which
        // does not calculate the `transform` property as part of its result.
        // There is still change on jitter during the animation (although unoticable)
        // When the browser is zoomed in — we fix this with `Math.max`.
        height = Math.max(_this.positionerRef.offsetHeight, prevHeight);
        width = Math.max(_this.positionerRef.offsetWidth, prevWidth);
      }

      var _getPosition = (0, _getPosition2.default)({
        position: _this.props.position,
        targetRect: targetRect,
        targetOffset: _this.props.targetOffset,
        dimensions: {
          height: height,
          width: width
        },
        viewport: {
          width: viewportWidth,
          height: viewportHeight
        },
        viewportOffset: _this.props.bodyOffset
      }),
          rect = _getPosition.rect,
          transformOrigin = _getPosition.transformOrigin;

      _this.setState({
        left: rect.left,
        top: rect.top,
        transformOrigin: transformOrigin
      }, function () {
        _this.latestAnimationFrame = requestAnimationFrame(function () {
          _this.update(height, width);
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleExited", function () {
      _this.setState(function () {
        return (0, _objectSpread2.default)({}, initialState());
      }, function () {
        _this.props.onCloseComplete();
      });
    });
    _this.state = initialState();
    return _this;
  }

  (0, _createClass2.default)(Positioner, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.latestAnimationFrame) {
        cancelAnimationFrame(this.latestAnimationFrame);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          target = _this$props.target,
          isShown = _this$props.isShown,
          children = _this$props.children,
          initialScale = _this$props.initialScale,
          targetOffset = _this$props.targetOffset,
          animationDuration = _this$props.animationDuration;
      var _this$state = this.state,
          left = _this$state.left,
          top = _this$state.top,
          transformOrigin = _this$state.transformOrigin;
      return _react.default.createElement(_stack.Stack, {
        value: _constants.StackingOrder.POSITIONER
      }, function (zIndex) {
        return _react.default.createElement(_react.default.Fragment, null, target({
          getRef: _this2.getTargetRef,
          isShown: isShown
        }), _react.default.createElement(_Transition.default, {
          appear: true,
          in: isShown,
          timeout: animationDuration,
          onEnter: _this2.handleEnter,
          onEntered: _this2.props.onOpenComplete,
          onExited: _this2.handleExited,
          unmountOnExit: true
        }, function (state) {
          return _react.default.createElement(_portal.Portal, null, children({
            top: top,
            left: left,
            state: state,
            zIndex: zIndex,
            css: getCSS({
              targetOffset: targetOffset,
              initialScale: initialScale,
              animationDuration: animationDuration
            }),
            style: {
              transformOrigin: transformOrigin,
              left: left,
              top: top,
              zIndex: zIndex
            },
            getRef: _this2.getRef,
            animationDuration: animationDuration
          }));
        }));
      });
    }
  }]);
  return Positioner;
}(_react.PureComponent);

exports.default = Positioner;
Positioner.displayName = "Positioner";
(0, _defineProperty2.default)(Positioner, "propTypes", {
  /**
   * The position the element that is being positioned is on.
   * Smart positioning might override this.
   */
  position: _propTypes.default.oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]).isRequired,

  /**
   * When true, show the element being positioned.
   */
  isShown: _propTypes.default.bool,

  /**
   * Function that returns the element being positioned.
   */
  children: _propTypes.default.func.isRequired,

  /**
   * Function that returns the ref of the element being positioned.
   */
  innerRef: _propTypes.default.func.isRequired,

  /**
   * The minimum distance from the body to the element being positioned.
   */
  bodyOffset: _propTypes.default.number.isRequired,

  /**
   * The minimum distance from the target to the element being positioned.
   */
  targetOffset: _propTypes.default.number.isRequired,

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: _propTypes.default.func.isRequired,

  /**
   * Initial scale of the element being positioned.
   */
  initialScale: _propTypes.default.number.isRequired,

  /**
   * Duration of the animation.
   */
  animationDuration: _propTypes.default.number.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes.default.func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes.default.func.isRequired
});
(0, _defineProperty2.default)(Positioner, "defaultProps", {
  position: _constants.Position.BOTTOM,
  bodyOffset: 6,
  targetOffset: 6,
  initialScale: 0.9,
  animationDuration: 300,
  innerRef: function innerRef() {},
  onOpenComplete: function onOpenComplete() {},
  onCloseComplete: function onCloseComplete() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3NpdGlvbmVyL3NyYy9Qb3NpdGlvbmVyLmpzIl0sIm5hbWVzIjpbImFuaW1hdGlvbkVhc2luZyIsInNwcmluZyIsImluaXRpYWxTdGF0ZSIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJnZXRDU1MiLCJpbml0aWFsU2NhbGUiLCJhbmltYXRpb25EdXJhdGlvbiIsInBvc2l0aW9uIiwib3BhY2l0eSIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zZm9ybSIsInZpc2liaWxpdHkiLCJQb3NpdGlvbmVyIiwicHJvcHMiLCJjb250ZXh0IiwicmVmIiwidGFyZ2V0UmVmIiwicG9zaXRpb25lclJlZiIsImlubmVyUmVmIiwidXBkYXRlIiwicHJldkhlaWdodCIsInByZXZXaWR0aCIsImlzU2hvd24iLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFzRW50ZXJlZCIsImdldEF0dHJpYnV0ZSIsInZpZXdwb3J0SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJ2aWV3cG9ydFdpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uZXJSZWN0IiwiTWF0aCIsInJvdW5kIiwibWF4Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJ0YXJnZXRPZmZzZXQiLCJkaW1lbnNpb25zIiwidmlld3BvcnQiLCJ2aWV3cG9ydE9mZnNldCIsImJvZHlPZmZzZXQiLCJyZWN0Iiwic2V0U3RhdGUiLCJsYXRlc3RBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uQ2xvc2VDb21wbGV0ZSIsInN0YXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsIlN0YWNraW5nT3JkZXIiLCJQT1NJVElPTkVSIiwiekluZGV4IiwiZ2V0UmVmIiwiZ2V0VGFyZ2V0UmVmIiwiaGFuZGxlRW50ZXIiLCJvbk9wZW5Db21wbGV0ZSIsImhhbmRsZUV4aXRlZCIsImNzcyIsInN0eWxlIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mIiwiUG9zaXRpb24iLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU07QUFEZ0IsQ0FBeEI7O0FBSUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxJQUFBQSxHQUFHLEVBQUUsSUFEcUI7QUFFMUJDLElBQUFBLElBQUksRUFBRSxJQUZvQjtBQUcxQkMsSUFBQUEsZUFBZSxFQUFFO0FBSFMsR0FBUDtBQUFBLENBQXJCOztBQU1BLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsWUFBSCxRQUFHQSxZQUFIO0FBQUEsTUFBaUJDLGlCQUFqQixRQUFpQkEsaUJBQWpCO0FBQUEsU0FBMEM7QUFDdkRDLElBQUFBLFFBQVEsRUFBRSxPQUQ2QztBQUV2REMsSUFBQUEsT0FBTyxFQUFFLENBRjhDO0FBR3ZEQyxJQUFBQSx3QkFBd0IsRUFBRVgsZUFBZSxDQUFDQyxNQUhhO0FBSXZEVyxJQUFBQSxrQkFBa0IsWUFBS0osaUJBQUwsT0FKcUM7QUFLdkRLLElBQUFBLGtCQUFrQixFQUFFLG9CQUxtQztBQU12REMsSUFBQUEsU0FBUyxrQkFBV1AsWUFBWCx1QkFOOEM7QUFPdkQseURBQXFEO0FBQ25ERyxNQUFBQSxPQUFPLEVBQUUsQ0FEMEM7QUFFbkRLLE1B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QUFWLENBQWVGO0FBakVkLEM7OEJBREFqRSxVLGtCQXFFRztBQUNwQlAsRUFBQUEsUUFBUSxFQUFFK0Qsb0JBQVNJLE1BREM7QUFFcEIzQixFQUFBQSxVQUFVLEVBQUUsQ0FGUTtBQUdwQkosRUFBQUEsWUFBWSxFQUFFLENBSE07QUFJcEJ0QyxFQUFBQSxZQUFZLEVBQUUsR0FKTTtBQUtwQkMsRUFBQUEsaUJBQWlCLEVBQUUsR0FMQztBQU1wQmMsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FORTtBQU9wQjJDLEVBQUFBLGNBQWMsRUFBRSwwQkFBTSxDQUFFLENBUEo7QUFRcEJYLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFO0FBUkwsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICcuLi8uLi9wb3J0YWwnXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uLy4uL3N0YWNrJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciwgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgZ2V0UG9zaXRpb24gZnJvbSAnLi9nZXRQb3NpdGlvbidcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAoKSA9PiAoe1xuICB0b3A6IG51bGwsXG4gIGxlZnQ6IG51bGwsXG4gIHRyYW5zZm9ybU9yaWdpbjogbnVsbFxufSlcblxuY29uc3QgZ2V0Q1NTID0gKHsgaW5pdGlhbFNjYWxlLCBhbmltYXRpb25EdXJhdGlvbiB9KSA9PiAoe1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgb3BhY2l0eTogMCxcbiAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBhbmltYXRpb25FYXNpbmcuc3ByaW5nLFxuICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2FuaW1hdGlvbkR1cmF0aW9ufW1zYCxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiAnb3BhY2l0eSwgdHJhbnNmb3JtJyxcbiAgdHJhbnNmb3JtOiBgc2NhbGUoJHtpbml0aWFsU2NhbGV9KSB0cmFuc2xhdGVZKC0xcHgpYCxcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbmVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIHRoZSBlbGVtZW50IHRoYXQgaXMgYmVpbmcgcG9zaXRpb25lZCBpcyBvbi5cbiAgICAgKiBTbWFydCBwb3NpdGlvbmluZyBtaWdodCBvdmVycmlkZSB0aGlzLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSByZWYgb2YgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIGRpc3RhbmNlIGZyb20gdGhlIGJvZHkgdG8gdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBib2R5T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBkaXN0YW5jZSBmcm9tIHRoZSB0YXJnZXQgdG8gdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICB0YXJnZXRPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiBhIG5vZGUgZm9yIHRoZSB0YXJnZXQuXG4gICAgICogKHsgZ2V0UmVmOiAoKSAtPiBSZWYsIGlzU2hvd246IEJvb2wgfSkgLT4gUmVhY3QgTm9kZVxuICAgICAqL1xuICAgIHRhcmdldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgc2NhbGUgb2YgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBpbml0aWFsU2NhbGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIER1cmF0aW9uIG9mIHRoZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uQk9UVE9NLFxuICAgIGJvZHlPZmZzZXQ6IDYsXG4gICAgdGFyZ2V0T2Zmc2V0OiA2LFxuICAgIGluaXRpYWxTY2FsZTogMC45LFxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgaW5uZXJSZWY6ICgpID0+IHt9LFxuICAgIG9uT3BlbkNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBvbkNsb3NlQ29tcGxldGU6ICgpID0+IHt9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGUoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMubGF0ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF0ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgfVxuICB9XG5cbiAgZ2V0VGFyZ2V0UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLnRhcmdldFJlZiA9IHJlZlxuICB9XG5cbiAgZ2V0UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uZXJSZWYgPSByZWZcbiAgICB0aGlzLnByb3BzLmlubmVyUmVmKHJlZilcbiAgfVxuXG4gIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZSA9IChwcmV2SGVpZ2h0ID0gMCwgcHJldldpZHRoID0gMCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc1Nob3duIHx8ICF0aGlzLnRhcmdldFJlZiB8fCAhdGhpcy5wb3NpdGlvbmVyUmVmKSByZXR1cm5cblxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLnRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGhhc0VudGVyZWQgPVxuICAgICAgdGhpcy5wb3NpdGlvbmVyUmVmLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpID09PSAnZW50ZXJlZCdcblxuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcblxuICAgIGxldCBoZWlnaHRcbiAgICBsZXQgd2lkdGhcbiAgICBpZiAoaGFzRW50ZXJlZCkge1xuICAgICAgLy8gT25seSB3aGVuIHRoZSBhbmltYXRpb24gaXMgZG9uZSBzaG91bGQgd2Ugb3B0LWluIHRvIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgXG4gICAgICBjb25zdCBwb3NpdGlvbmVyUmVjdCA9IHRoaXMucG9zaXRpb25lclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2VnbWVudGlvL2V2ZXJncmVlbi9pc3N1ZXMvMjU1XG4gICAgICAvLyBXZSBuZWVkIHRvIGNlaWwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgdG8gcHJldmVudCBqaXR0ZXIgd2hlblxuICAgICAgLy8gdGhlIHdpbmRvdyBpcyB6b29tZWQgKHdoZW4gYHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvYCBpcyBub3QgYW4gaW50ZWdlcilcbiAgICAgIGhlaWdodCA9IE1hdGgucm91bmQocG9zaXRpb25lclJlY3QuaGVpZ2h0KVxuICAgICAgd2lkdGggPSBNYXRoLnJvdW5kKHBvc2l0aW9uZXJSZWN0LndpZHRoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXaGVuIHRoZSBhbmltYXRpb24gaXMgaW4gZmxpZ2h0IHVzZSBgb2Zmc2V0V2lkdGgvSGVpZ2h0YCB3aGljaFxuICAgICAgLy8gZG9lcyBub3QgY2FsY3VsYXRlIHRoZSBgdHJhbnNmb3JtYCBwcm9wZXJ0eSBhcyBwYXJ0IG9mIGl0cyByZXN1bHQuXG4gICAgICAvLyBUaGVyZSBpcyBzdGlsbCBjaGFuZ2Ugb24gaml0dGVyIGR1cmluZyB0aGUgYW5pbWF0aW9uIChhbHRob3VnaCB1bm90aWNhYmxlKVxuICAgICAgLy8gV2hlbiB0aGUgYnJvd3NlciBpcyB6b29tZWQgaW4g4oCUIHdlIGZpeCB0aGlzIHdpdGggYE1hdGgubWF4YC5cbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb25lclJlZi5vZmZzZXRIZWlnaHQsIHByZXZIZWlnaHQpXG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHRoaXMucG9zaXRpb25lclJlZi5vZmZzZXRXaWR0aCwgcHJldldpZHRoKVxuICAgIH1cblxuICAgIGNvbnN0IHsgcmVjdCwgdHJhbnNmb3JtT3JpZ2luIH0gPSBnZXRQb3NpdGlvbih7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvbixcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICB0YXJnZXRPZmZzZXQ6IHRoaXMucHJvcHMudGFyZ2V0T2Zmc2V0LFxuICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9LFxuICAgICAgdmlld3BvcnQ6IHtcbiAgICAgICAgd2lkdGg6IHZpZXdwb3J0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdmlld3BvcnRIZWlnaHRcbiAgICAgIH0sXG4gICAgICB2aWV3cG9ydE9mZnNldDogdGhpcy5wcm9wcy5ib2R5T2Zmc2V0XG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmxhdGVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZShoZWlnaHQsIHdpZHRoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGhhbmRsZUV4aXRlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmluaXRpYWxTdGF0ZSgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZUNvbXBsZXRlKClcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0LFxuICAgICAgaXNTaG93bixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaW5pdGlhbFNjYWxlLFxuICAgICAgdGFyZ2V0T2Zmc2V0LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb25cbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIHRyYW5zZm9ybU9yaWdpbiB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFjayB2YWx1ZT17U3RhY2tpbmdPcmRlci5QT1NJVElPTkVSfT5cbiAgICAgICAge3pJbmRleCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3RhcmdldCh7IGdldFJlZjogdGhpcy5nZXRUYXJnZXRSZWYsIGlzU2hvd24gfSl9XG5cbiAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICAgICAgICBpbj17aXNTaG93bn1cbiAgICAgICAgICAgICAgICB0aW1lb3V0PXthbmltYXRpb25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgICAgIG9uRW50ZXJlZD17dGhpcy5wcm9wcy5vbk9wZW5Db21wbGV0ZX1cbiAgICAgICAgICAgICAgICBvbkV4aXRlZD17dGhpcy5oYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICAgICAgICAgIDxQb3J0YWw+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgekluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGNzczogZ2V0Q1NTKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGdldFJlZjogdGhpcy5nZXRSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKVxuICB9XG59XG4iXX0=