import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _paneProps, _subpaneProps, _animationStylesClass;

import { css } from 'glamor';
import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Overlay } from '../../overlay';
import { Position } from '../../constants';
import SheetClose from './SheetClose';
var paneProps = (_paneProps = {}, _defineProperty(_paneProps, Position.LEFT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  left: 0,
  right: 'auto'
}), _defineProperty(_paneProps, Position.RIGHT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  right: 0,
  left: 'auto'
}), _defineProperty(_paneProps, Position.TOP, {
  width: '100vw',
  position: 'absolute',
  maxHeight: '100vh',
  top: 0,
  bottom: 'auto'
}), _defineProperty(_paneProps, Position.BOTTOM, {
  width: '100vw',
  maxHeight: '100vh',
  position: 'absolute',
  bottom: 0,
  top: 'auto'
}), _paneProps);
var subpaneProps = (_subpaneProps = {}, _defineProperty(_subpaneProps, Position.LEFT, {
  height: '100vh'
}), _defineProperty(_subpaneProps, Position.RIGHT, {
  height: '100vh'
}), _defineProperty(_subpaneProps, Position.TOP, {
  width: '100vw'
}), _defineProperty(_subpaneProps, Position.BOTTOM, {
  width: '100vw'
}), _subpaneProps);
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;

var withAnimations = function withAnimations(animateIn, animateOut) {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: "".concat(animateIn, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]': {
      animation: "".concat(animateOut, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};

var animationStylesClass = (_animationStylesClass = {}, _defineProperty(_animationStylesClass, Position.LEFT, _objectSpread({
  transform: "translateX(-100%)"
}, withAnimations(css.keyframes('anchoredLeftSlideInAnimation', {
  from: {
    transform: "translateX(-100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), css.keyframes('anchoredLeftSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(-100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.RIGHT, _objectSpread({
  transform: "translateX(100%)"
}, withAnimations(css.keyframes('anchoredRightSlideInAnimation', {
  from: {
    transform: "translateX(100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), css.keyframes('anchoredRightSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.TOP, _objectSpread({
  transform: "translateY(-100%)"
}, withAnimations(css.keyframes('anchoredTopSlideInAnimation', {
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), css.keyframes('anchoredTopSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
})))), _defineProperty(_animationStylesClass, Position.BOTTOM, _objectSpread({
  transform: "translateY(100%)"
}, withAnimations(css.keyframes('anchoredBottomSlideInAnimation', {
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), css.keyframes('anchoredBottomSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(100%)"
  }
})))), _animationStylesClass);

var SideSheet =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideSheet, _React$Component);

  function SideSheet() {
    _classCallCheck(this, SideSheet);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideSheet).apply(this, arguments));
  }

  _createClass(SideSheet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          isShown = _this$props.isShown,
          children = _this$props.children,
          containerProps = _this$props.containerProps,
          onOpenComplete = _this$props.onOpenComplete,
          onCloseComplete = _this$props.onCloseComplete,
          onBeforeClose = _this$props.onBeforeClose,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          position = _this$props.position,
          preventBodyScrolling = _this$props.preventBodyScrolling;
      return React.createElement(Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onBeforeClose: onBeforeClose,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return React.createElement(Pane, _extends({
          width: width
        }, paneProps[position], {
          css: animationStylesClass[position],
          "data-state": state
        }), React.createElement(SheetClose, {
          position: position,
          "data-state": state,
          isClosing: false,
          onClick: close
        }), React.createElement(Pane, _extends({
          elevation: 4,
          backgroundColor: "white",
          overflowY: "auto",
          maxHeight: "100vh",
          "data-state": state,
          width: width
        }, subpaneProps[position], containerProps), typeof children === 'function' ? children({
          close: close
        }) : children));
      });
    }
  }]);

  return SideSheet;
}(React.Component);

SideSheet.displayName = "SideSheet";

_defineProperty(SideSheet, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * When true, the Side Sheet is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the SideSheet.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: PropTypes.object,

  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: PropTypes.oneOf([Position.TOP, Position.BOTTOM, Position.LEFT, Position.RIGHT]).isRequired,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool
});

_defineProperty(SideSheet, "defaultProps", {
  width: 620,
  onCloseComplete: function onCloseComplete() {},
  onOpenComplete: function onOpenComplete() {},
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  position: Position.RIGHT
});

export default SideSheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaWRlU2hlZXQuanMiXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJQYW5lIiwiT3ZlcmxheSIsIlBvc2l0aW9uIiwiU2hlZXRDbG9zZSIsInBhbmVQcm9wcyIsIkxFRlQiLCJoZWlnaHQiLCJtYXhXaWR0aCIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwiUklHSFQiLCJUT1AiLCJ3aWR0aCIsIm1heEhlaWdodCIsInRvcCIsImJvdHRvbSIsIkJPVFRPTSIsInN1YnBhbmVQcm9wcyIsImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsIkFOSU1BVElPTl9EVVJBVElPTiIsIndpdGhBbmltYXRpb25zIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsImFuaW1hdGlvbiIsImFuaW1hdGlvblN0eWxlc0NsYXNzIiwidHJhbnNmb3JtIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRvIiwiU2lkZVNoZWV0IiwicHJvcHMiLCJpc1Nob3duIiwiY2hpbGRyZW4iLCJjb250YWluZXJQcm9wcyIsIm9uT3BlbkNvbXBsZXRlIiwib25DbG9zZUNvbXBsZXRlIiwib25CZWZvcmVDbG9zZSIsInNob3VsZENsb3NlT25PdmVybGF5Q2xpY2siLCJzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MiLCJwcmV2ZW50Qm9keVNjcm9sbGluZyIsInN0YXRlIiwiY2xvc2UiLCJDb21wb25lbnQiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0Iiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsZUFBeEI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLGlCQUF6QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsY0FBdkI7QUFFQSxJQUFNQyxTQUFTLGlEQUNaRixRQUFRLENBQUNHLElBREcsRUFDSTtBQUNmQyxFQUFBQSxNQUFNLEVBQUUsT0FETztBQUVmQyxFQUFBQSxRQUFRLEVBQUUsT0FGSztBQUdmQyxFQUFBQSxRQUFRLEVBQUUsVUFISztBQUlmQyxFQUFBQSxJQUFJLEVBQUUsQ0FKUztBQUtmQyxFQUFBQSxLQUFLLEVBQUU7QUFMUSxDQURKLCtCQVFaUixRQUFRLENBQUNTLEtBUkcsRUFRSztBQUNoQkwsRUFBQUEsTUFBTSxFQUFFLE9BRFE7QUFFaEJDLEVBQUFBLFFBQVEsRUFBRSxPQUZNO0FBR2hCQyxFQUFBQSxRQUFRLEVBQUUsVUFITTtBQUloQkUsRUFBQUEsS0FBSyxFQUFFLENBSlM7QUFLaEJELEVBQUFBLElBQUksRUFBRTtBQUxVLENBUkwsK0JBZVpQLFFBQVEsQ0FBQ1UsR0FmRyxFQWVHO0FBQ2RDLEVBQUFBLEtBQUssRUFBRSxPQURPO0FBRWRMLEVBQUFBLFFBQVEsRUFBRSxVQUZJO0FBR2RNLEVBQUFBLFNBQVMsRUFBRSxPQUhHO0FBSWRDLEVBQUFBLEdBQUcsRUFBRSxDQUpTO0FBS2RDLEVBQUFBLE1BQU0sRUFBRTtBQUxNLENBZkgsK0JBc0JaZCxRQUFRLENBQUNlLE1BdEJHLEVBc0JNO0FBQ2pCSixFQUFBQSxLQUFLLEVBQUUsT0FEVTtBQUVqQkMsRUFBQUEsU0FBUyxFQUFFLE9BRk07QUFHakJOLEVBQUFBLFFBQVEsRUFBRSxVQUhPO0FBSWpCUSxFQUFBQSxNQUFNLEVBQUUsQ0FKUztBQUtqQkQsRUFBQUEsR0FBRyxFQUFFO0FBTFksQ0F0Qk4sY0FBZjtBQStCQSxJQUFNRyxZQUFZLHVEQUNmaEIsUUFBUSxDQUFDRyxJQURNLEVBQ0M7QUFDZkMsRUFBQUEsTUFBTSxFQUFFO0FBRE8sQ0FERCxrQ0FJZkosUUFBUSxDQUFDUyxLQUpNLEVBSUU7QUFDaEJMLEVBQUFBLE1BQU0sRUFBRTtBQURRLENBSkYsa0NBT2ZKLFFBQVEsQ0FBQ1UsR0FQTSxFQU9BO0FBQ2RDLEVBQUFBLEtBQUssRUFBRTtBQURPLENBUEEsa0NBVWZYLFFBQVEsQ0FBQ2UsTUFWTSxFQVVHO0FBQ2pCSixFQUFBQSxLQUFLLEVBQUU7QUFEVSxDQVZILGlCQUFsQjtBQWVBLElBQU1NLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsWUFBWSxrQ0FEVTtBQUV0QkMsRUFBQUEsWUFBWTtBQUZVLENBQXhCO0FBS0EsSUFBTUMsa0JBQWtCLEdBQUcsR0FBM0I7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxTQUFELEVBQVlDLFVBQVosRUFBMkI7QUFDaEQsU0FBTztBQUNMLHlEQUFxRDtBQUNuREMsTUFBQUEsU0FBUyxZQUFLRixTQUFMLGNBQWtCRixrQkFBbEIsZ0JBQ1BILGVBQWUsQ0FBQ0MsWUFEVDtBQUQwQyxLQURoRDtBQU1MLCtCQUEyQjtBQUN6Qk0sTUFBQUEsU0FBUyxZQUFLRCxVQUFMLGNBQW1CSCxrQkFBbkIsZ0JBQ1BILGVBQWUsQ0FBQ0UsWUFEVDtBQURnQjtBQU50QixHQUFQO0FBWUQsQ0FiRDs7QUFlQSxJQUFNTSxvQkFBb0IsdUVBQ3ZCekIsUUFBUSxDQUFDRyxJQURjO0FBRXRCdUIsRUFBQUEsU0FBUztBQUZhLEdBR25CTCxjQUFjLENBQ2YxQixHQUFHLENBQUNnQyxTQUFKLENBQWMsOEJBQWQsRUFBOEM7QUFDNUNDLEVBQUFBLElBQUksRUFBRTtBQUFFRixJQUFBQSxTQUFTO0FBQVgsR0FEc0M7QUFFNUNHLEVBQUFBLEVBQUUsRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVg7QUFGd0MsQ0FBOUMsQ0FEZSxFQUtmL0IsR0FBRyxDQUFDZ0MsU0FBSixDQUFjLCtCQUFkLEVBQStDO0FBQzdDQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUYsSUFBQUEsU0FBUztBQUFYLEdBRHVDO0FBRTdDRyxFQUFBQSxFQUFFLEVBQUU7QUFBRUgsSUFBQUEsU0FBUztBQUFYO0FBRnlDLENBQS9DLENBTGUsQ0FISywyQ0FjdkIxQixRQUFRLENBQUNTLEtBZGM7QUFldEJpQixFQUFBQSxTQUFTO0FBZmEsR0FnQm5CTCxjQUFjLENBQ2YxQixHQUFHLENBQUNnQyxTQUFKLENBQWMsK0JBQWQsRUFBK0M7QUFDN0NDLEVBQUFBLElBQUksRUFBRTtBQUFFRixJQUFBQSxTQUFTO0FBQVgsR0FEdUM7QUFFN0NHLEVBQUFBLEVBQUUsRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVg7QUFGeUMsQ0FBL0MsQ0FEZSxFQUtmL0IsR0FBRyxDQUFDZ0MsU0FBSixDQUFjLGdDQUFkLEVBQWdEO0FBQzlDQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUYsSUFBQUEsU0FBUztBQUFYLEdBRHdDO0FBRTlDRyxFQUFBQSxFQUFFLEVBQUU7QUFBRUgsSUFBQUEsU0FBUztBQUFYO0FBRjBDLENBQWhELENBTGUsQ0FoQkssMkNBMkJ2QjFCLFFBQVEsQ0FBQ1UsR0EzQmM7QUE0QnRCZ0IsRUFBQUEsU0FBUztBQTVCYSxHQTZCbkJMLGNBQWMsQ0FDZjFCLEdBQUcsQ0FBQ2dDLFNBQUosQ0FBYyw2QkFBZCxFQUE2QztBQUMzQ0MsRUFBQUEsSUFBSSxFQUFFO0FBQUVGLElBQUFBLFNBQVM7QUFBWCxHQURxQztBQUUzQ0csRUFBQUEsRUFBRSxFQUFFO0FBQUVILElBQUFBLFNBQVM7QUFBWDtBQUZ1QyxDQUE3QyxDQURlLEVBS2YvQixHQUFHLENBQUNnQyxTQUFKLENBQWMsOEJBQWQsRUFBOEM7QUFDNUNDLEVBQUFBLElBQUksRUFBRTtBQUFFRixJQUFBQSxTQUFTO0FBQVgsR0FEc0M7QUFFNUNHLEVBQUFBLEVBQUUsRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVg7QUFGd0MsQ0FBOUMsQ0FMZSxDQTdCSywyQ0F3Q3ZCMUIsUUFBUSxDQUFDZSxNQXhDYztBQXlDdEJXLEVBQUFBLFNBQVM7QUF6Q2EsR0EwQ25CTCxjQUFjLENBQ2YxQixHQUFHLENBQUNnQyxTQUFKLENBQWMsZ0NBQWQsRUFBZ0Q7QUFDOUNDLEVBQUFBLElBQUksRUFBRTtBQUFFRixJQUFBQSxTQUFTO0FBQVgsR0FEd0M7QUFFOUNHLEVBQUFBLEVBQUUsRUFBRTtBQUFFSCxJQUFBQSxTQUFTO0FBQVg7QUFGMEMsQ0FBaEQsQ0FEZSxFQUtmL0IsR0FBRyxDQUFDZ0MsU0FBSixDQUFjLGlDQUFkLEVBQWlEO0FBQy9DQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUYsSUFBQUEsU0FBUztBQUFYLEdBRHlDO0FBRS9DRyxFQUFBQSxFQUFFLEVBQUU7QUFBRUgsSUFBQUEsU0FBUztBQUFYO0FBRjJDLENBQWpELENBTGUsQ0ExQ0ssMEJBQTFCOztJQXVETUksUzs7Ozs7Ozs7Ozs7Ozs2QkEwRUs7QUFBQSx3QkFhSCxLQUFLQyxLQWJGO0FBQUEsVUFFTHBCLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBR0xxQixPQUhLLGVBR0xBLE9BSEs7QUFBQSxVQUlMQyxRQUpLLGVBSUxBLFFBSks7QUFBQSxVQUtMQyxjQUxLLGVBS0xBLGNBTEs7QUFBQSxVQU1MQyxjQU5LLGVBTUxBLGNBTks7QUFBQSxVQU9MQyxlQVBLLGVBT0xBLGVBUEs7QUFBQSxVQVFMQyxhQVJLLGVBUUxBLGFBUks7QUFBQSxVQVNMQyx5QkFUSyxlQVNMQSx5QkFUSztBQUFBLFVBVUxDLHdCQVZLLGVBVUxBLHdCQVZLO0FBQUEsVUFXTGpDLFFBWEssZUFXTEEsUUFYSztBQUFBLFVBWUxrQyxvQkFaSyxlQVlMQSxvQkFaSztBQWVQLGFBQ0Usb0JBQUMsT0FBRDtBQUNFLFFBQUEsT0FBTyxFQUFFUixPQURYO0FBRUUsUUFBQSxrQkFBa0IsRUFBRU0seUJBRnRCO0FBR0UsUUFBQSx3QkFBd0IsRUFBRUMsd0JBSDVCO0FBSUUsUUFBQSxhQUFhLEVBQUVGLGFBSmpCO0FBS0UsUUFBQSxRQUFRLEVBQUVELGVBTFo7QUFNRSxRQUFBLFNBQVMsRUFBRUQsY0FOYjtBQU9FLFFBQUEsb0JBQW9CLEVBQUVLO0FBUHhCLFNBU0c7QUFBQSxZQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxZQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxlQUNDLG9CQUFDLElBQUQ7QUFDRSxVQUFBLEtBQUssRUFBRS9CO0FBRFQsV0FFTVQsU0FBUyxDQUFDSSxRQUFELENBRmY7QUFHRSxVQUFBLEdBQUcsRUFBRW1CLG9CQUFvQixDQUFDbkIsUUFBRCxDQUgzQjtBQUlFLHdCQUFZbUM7QUFKZCxZQU1FLG9CQUFDLFVBQUQ7QUFDRSxVQUFBLFFBQVEsRUFBRW5DLFFBRFo7QUFFRSx3QkFBWW1DLEtBRmQ7QUFHRSxVQUFBLFNBQVMsRUFBRSxLQUhiO0FBSUUsVUFBQSxPQUFPLEVBQUVDO0FBSlgsVUFORixFQVlFLG9CQUFDLElBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBRSxDQURiO0FBRUUsVUFBQSxlQUFlLEVBQUMsT0FGbEI7QUFHRSxVQUFBLFNBQVMsRUFBQyxNQUhaO0FBSUUsVUFBQSxTQUFTLEVBQUMsT0FKWjtBQUtFLHdCQUFZRCxLQUxkO0FBTUUsVUFBQSxLQUFLLEVBQUU5QjtBQU5ULFdBT01LLFlBQVksQ0FBQ1YsUUFBRCxDQVBsQixFQVFNNEIsY0FSTixHQVVHLE9BQU9ELFFBQVAsS0FBb0IsVUFBcEIsR0FBaUNBLFFBQVEsQ0FBQztBQUFFUyxVQUFBQSxLQUFLLEVBQUxBO0FBQUYsU0FBRCxDQUF6QyxHQUF1RFQsUUFWMUQsQ0FaRixDQUREO0FBQUEsT0FUSCxDQURGO0FBdUNEOzs7O0VBaElxQnJDLEtBQUssQ0FBQytDLFM7O0FBQXhCYixTOztnQkFBQUEsUyxlQUNlO0FBQ2pCOzs7QUFHQUcsRUFBQUEsUUFBUSxFQUFFcEMsU0FBUyxDQUFDK0MsU0FBVixDQUFvQixDQUFDL0MsU0FBUyxDQUFDZ0QsSUFBWCxFQUFpQmhELFNBQVMsQ0FBQ2lELElBQTNCLENBQXBCLEVBQXNEQyxVQUovQzs7QUFNakI7OztBQUdBZixFQUFBQSxPQUFPLEVBQUVuQyxTQUFTLENBQUNtRCxJQVRGOztBQVdqQjs7O0FBR0FaLEVBQUFBLGVBQWUsRUFBRXZDLFNBQVMsQ0FBQ2lELElBZFY7O0FBZ0JqQjs7O0FBR0FYLEVBQUFBLGNBQWMsRUFBRXRDLFNBQVMsQ0FBQ2lELElBbkJUOztBQXFCakI7Ozs7O0FBS0FULEVBQUFBLGFBQWEsRUFBRXhDLFNBQVMsQ0FBQ2lELElBMUJSOztBQTRCakI7OztBQUdBUixFQUFBQSx5QkFBeUIsRUFBRXpDLFNBQVMsQ0FBQ21ELElBL0JwQjs7QUFpQ2pCOzs7QUFHQVQsRUFBQUEsd0JBQXdCLEVBQUUxQyxTQUFTLENBQUNtRCxJQXBDbkI7O0FBc0NqQjs7O0FBR0FyQyxFQUFBQSxLQUFLLEVBQUVkLFNBQVMsQ0FBQytDLFNBQVYsQ0FBb0IsQ0FBQy9DLFNBQVMsQ0FBQ29ELE1BQVgsRUFBbUJwRCxTQUFTLENBQUNxRCxNQUE3QixDQUFwQixFQUEwREgsVUF6Q2hEOztBQTJDakI7OztBQUdBYixFQUFBQSxjQUFjLEVBQUVyQyxTQUFTLENBQUNzRCxNQTlDVDs7QUFnRGpCOzs7QUFHQTdDLEVBQUFBLFFBQVEsRUFBRVQsU0FBUyxDQUFDdUQsS0FBVixDQUFnQixDQUN4QnBELFFBQVEsQ0FBQ1UsR0FEZSxFQUV4QlYsUUFBUSxDQUFDZSxNQUZlLEVBR3hCZixRQUFRLENBQUNHLElBSGUsRUFJeEJILFFBQVEsQ0FBQ1MsS0FKZSxDQUFoQixFQUtQc0MsVUF4RGM7O0FBMERqQjs7O0FBR0FQLEVBQUFBLG9CQUFvQixFQUFFM0MsU0FBUyxDQUFDbUQ7QUE3RGYsQzs7Z0JBRGZsQixTLGtCQWlFa0I7QUFDcEJuQixFQUFBQSxLQUFLLEVBQUUsR0FEYTtBQUVwQnlCLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFLENBRkw7QUFHcEJELEVBQUFBLGNBQWMsRUFBRSwwQkFBTSxDQUFFLENBSEo7QUFJcEJHLEVBQUFBLHlCQUF5QixFQUFFLElBSlA7QUFLcEJDLEVBQUFBLHdCQUF3QixFQUFFLElBTE47QUFNcEJqQyxFQUFBQSxRQUFRLEVBQUVOLFFBQVEsQ0FBQ1M7QUFOQyxDOztBQWtFeEIsZUFBZXFCLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uLy4uL292ZXJsYXknXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBTaGVldENsb3NlIGZyb20gJy4vU2hlZXRDbG9zZSdcblxuY29uc3QgcGFuZVByb3BzID0ge1xuICBbUG9zaXRpb24uTEVGVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgbWF4V2lkdGg6ICcxMDB2dycsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogJ2F1dG8nXG4gIH0sXG4gIFtQb3NpdGlvbi5SSUdIVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgbWF4V2lkdGg6ICcxMDB2dycsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcmlnaHQ6IDAsXG4gICAgbGVmdDogJ2F1dG8nXG4gIH0sXG4gIFtQb3NpdGlvbi5UT1BdOiB7XG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwdmgnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uQk9UVE9NXToge1xuICAgIHdpZHRoOiAnMTAwdncnLFxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDAsXG4gICAgdG9wOiAnYXV0bydcbiAgfVxufVxuXG5jb25zdCBzdWJwYW5lUHJvcHMgPSB7XG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIGhlaWdodDogJzEwMHZoJ1xuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnXG4gIH0sXG4gIFtQb3NpdGlvbi5UT1BdOiB7XG4gICAgd2lkdGg6ICcxMDB2dydcbiAgfSxcbiAgW1Bvc2l0aW9uLkJPVFRPTV06IHtcbiAgICB3aWR0aDogJzEwMHZ3J1xuICB9XG59XG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IHdpdGhBbmltYXRpb25zID0gKGFuaW1hdGVJbiwgYW5pbWF0ZU91dCkgPT4ge1xuICByZXR1cm4ge1xuICAgICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICAgIGFuaW1hdGlvbjogYCR7YW5pbWF0ZUlufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke1xuICAgICAgICBhbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9uXG4gICAgICB9IGJvdGhgXG4gICAgfSxcbiAgICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICAgIGFuaW1hdGlvbjogYCR7YW5pbWF0ZU91dH0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgICAgYW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvblxuICAgICAgfSBib3RoYFxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXNDbGFzcyA9IHtcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRMZWZ0U2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZExlZnRTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5SSUdIVF06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkUmlnaHRTbGlkZUluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRSaWdodFNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkVG9wU2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFRvcFNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTEwMCUpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLkJPVFRPTV06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkQm90dG9tU2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDEwMCUpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkQm90dG9tU2xpZGVPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cbn1cblxuY2xhc3MgU2lkZVNoZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDaGlsZHJlbiBjYW4gYmUgYSBzdHJpbmcsIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYCh7IGNsb3NlIH0pYC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIFNpZGUgU2hlZXQgaXMgc2hvd24uXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIG92ZXJsYXkgaXMgYWJvdXQgdG8gY2xvc2UuXG4gICAgICogUmV0dXJuIGBmYWxzZWAgdG8gcHJldmVudCB0aGUgc2hlZXQgZnJvbSBjbG9zaW5nLlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbiAtPiBCb29sZWFuYFxuICAgICAqL1xuICAgIG9uQmVmb3JlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBwcmVzc2luZyB0aGUgZXNjIGtleSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBTaWRlU2hlZXQuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyB0byBwYXNzIHRocm91Z2ggdGhlIFNpZGVTaGVldCBjb250YWluZXIgUGFuZS5cbiAgICAgKi9cbiAgICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9ucyB0aGUgc2hlZXQgdG8gdGhlIHRvcCwgbGVmdCwgcmlnaHQsIG9yIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uTEVGVCxcbiAgICAgIFBvc2l0aW9uLlJJR0hUXG4gICAgXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgc2Nyb2xsaW5nIGluIHRoZSBvdXRlciBib2R5XG4gICAgICovXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiA2MjAsXG4gICAgb25DbG9zZUNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBvbk9wZW5Db21wbGV0ZTogKCkgPT4ge30sXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IHRydWUsXG4gICAgcG9zaXRpb246IFBvc2l0aW9uLlJJR0hUXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGgsXG4gICAgICBpc1Nob3duLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjb250YWluZXJQcm9wcyxcbiAgICAgIG9uT3BlbkNvbXBsZXRlLFxuICAgICAgb25DbG9zZUNvbXBsZXRlLFxuICAgICAgb25CZWZvcmVDbG9zZSxcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2ssXG4gICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8T3ZlcmxheVxuICAgICAgICBpc1Nob3duPXtpc1Nob3dufVxuICAgICAgICBzaG91bGRDbG9zZU9uQ2xpY2s9e3Nob3VsZENsb3NlT25PdmVybGF5Q2xpY2t9XG4gICAgICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcz17c2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzfVxuICAgICAgICBvbkJlZm9yZUNsb3NlPXtvbkJlZm9yZUNsb3NlfVxuICAgICAgICBvbkV4aXRlZD17b25DbG9zZUNvbXBsZXRlfVxuICAgICAgICBvbkVudGVyZWQ9e29uT3BlbkNvbXBsZXRlfVxuICAgICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZz17cHJldmVudEJvZHlTY3JvbGxpbmd9XG4gICAgICA+XG4gICAgICAgIHsoeyBzdGF0ZSwgY2xvc2UgfSkgPT4gKFxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICB7Li4ucGFuZVByb3BzW3Bvc2l0aW9uXX1cbiAgICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzQ2xhc3NbcG9zaXRpb25dfVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNoZWV0Q2xvc2VcbiAgICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgaXNDbG9zaW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgZWxldmF0aW9uPXs0fVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIG92ZXJmbG93WT1cImF1dG9cIlxuICAgICAgICAgICAgICBtYXhIZWlnaHQ9XCIxMDB2aFwiXG4gICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIHsuLi5zdWJwYW5lUHJvcHNbcG9zaXRpb25dfVxuICAgICAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7IGNsb3NlIH0pIDogY2hpbGRyZW59XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgPC9PdmVybGF5PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlU2hlZXRcbiJdfQ==