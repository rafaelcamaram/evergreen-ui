import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

var _sheetCloseStyles;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { css } from 'glamor';
import { Icon } from '../../icon';
import { Position } from '../../constants';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;
var sharedStyles = {
  padding: 4,
  borderRadius: 9999,
  position: 'absolute',
  cursor: 'pointer',
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  transition: "background-color 120ms",
  '&:hover': {
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },
  '&:active': {
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  }
};

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

var sheetCloseStyles = (_sheetCloseStyles = {}, _defineProperty(_sheetCloseStyles, Position.RIGHT, _objectSpread({
  left: 0,
  marginLeft: -12,
  marginTop: 12,
  transform: "translateX(-100%)"
}, withAnimations(css.keyframes('rotate360InAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%) rotate(-360deg)"
  }
}), css.keyframes('rotate360OutAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%) rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.LEFT, _objectSpread({
  marginRight: -12,
  right: 0,
  marginTop: 12,
  transform: "translateX(100%)"
}, withAnimations(css.keyframes('leftRotate360InAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%), rotate(360deg)"
  }
}), css.keyframes('leftRotate360OutAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%), rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.TOP, _objectSpread({
  right: 0,
  marginRight: 12,
  top: '100%',
  marginTop: 12,
  transform: "translateY(0)"
}, withAnimations(css.keyframes('topRotate360InAnimation', {
  from: {
    transform: "translateY(-200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), css.keyframes('topRotate360OutAnimation', {
  from: {
    transform: "translateY(0%) rotate(0deg)"
  },
  to: {
    transform: "translateY(-200%), rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.BOTTOM, _objectSpread({
  right: 0,
  marginRight: 12,
  bottom: '100%',
  marginBottom: 12,
  transform: "translateY(0)"
}, withAnimations(css.keyframes('bottomRotate360InAnimation', {
  from: {
    transform: "translateY(200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), css.keyframes('bottomRotate360OutAnimation', {
  from: {
    transform: "translateY(0%) rotate(0deg)"
  },
  to: {
    transform: "translateY(200%), rotate(360deg)"
  }
})))), _sheetCloseStyles);
var sheetCloseClassNameCache = {};

var getSheetCloseClassName = function getSheetCloseClassName(position) {
  if (!sheetCloseClassNameCache[position]) {
    sheetCloseClassNameCache[position] = css(_objectSpread({}, sheetCloseStyles[position], sharedStyles)).toString();
  }

  return sheetCloseClassNameCache[position];
};

var SheetClose =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SheetClose, _PureComponent);

  function SheetClose() {
    _classCallCheck(this, SheetClose);

    return _possibleConstructorReturn(this, _getPrototypeOf(SheetClose).apply(this, arguments));
  }

  _createClass(SheetClose, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isClosing = _this$props.isClosing,
          position = _this$props.position,
          props = _objectWithoutProperties(_this$props, ["isClosing", "position"]);

      return React.createElement(Box, _extends({
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        className: getSheetCloseClassName(position)
      }, props), React.createElement(Icon, {
        icon: "cross",
        color: "#fff"
      }));
    }
  }]);

  return SheetClose;
}(PureComponent);

SheetClose.displayName = "SheetClose";

_defineProperty(SheetClose, "propTypes", _objectSpread({}, Box.propTypes, {
  isClosing: PropTypes.bool,
  position: PropTypes.oneOf([Position.LEFT, Position.RIGHT, Position.TOP, Position.BOTTOM]).isRequired
}));

export { SheetClose as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaGVldENsb3NlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsImNzcyIsIkljb24iLCJQb3NpdGlvbiIsImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsIkFOSU1BVElPTl9EVVJBVElPTiIsInNoYXJlZFN0eWxlcyIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJ3aXRoQW5pbWF0aW9ucyIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRpb24iLCJzaGVldENsb3NlU3R5bGVzIiwiUklHSFQiLCJsZWZ0IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsInRyYW5zZm9ybSIsImtleWZyYW1lcyIsImZyb20iLCJ0byIsIkxFRlQiLCJtYXJnaW5SaWdodCIsInJpZ2h0IiwiVE9QIiwidG9wIiwiQk9UVE9NIiwiYm90dG9tIiwibWFyZ2luQm90dG9tIiwic2hlZXRDbG9zZUNsYXNzTmFtZUNhY2hlIiwiZ2V0U2hlZXRDbG9zZUNsYXNzTmFtZSIsInRvU3RyaW5nIiwiU2hlZXRDbG9zZSIsInByb3BzIiwiaXNDbG9zaW5nIiwicHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixpQkFBekI7QUFFQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLEVB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fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3Qgc2hhcmVkU3R5bGVzID0ge1xuICBwYWRkaW5nOiA0LFxuICBib3JkZXJSYWRpdXM6IDk5OTksXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpYCxcbiAgdHJhbnNpdGlvbjogYGJhY2tncm91bmQtY29sb3IgMTIwbXNgLFxuICAnJjpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilgXG4gIH0sXG4gICcmOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClgXG4gIH1cbn1cblxuY29uc3Qgd2l0aEFuaW1hdGlvbnMgPSAoYW5pbWF0ZUluLCBhbmltYXRlT3V0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgICAgYW5pbWF0aW9uOiBgJHthbmltYXRlSW59ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICAgIGFuaW1hdGlvbkVhc2luZy5kZWNlbGVyYXRpb25cbiAgICAgIH0gYm90aGBcbiAgICB9LFxuICAgICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgICAgYW5pbWF0aW9uOiBgJHthbmltYXRlT3V0fSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke1xuICAgICAgICBhbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9uXG4gICAgICB9IGJvdGhgXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNoZWV0Q2xvc2VTdHlsZXMgPSB7XG4gIFtQb3NpdGlvbi5SSUdIVF06IHtcbiAgICBsZWZ0OiAwLFxuICAgIG1hcmdpbkxlZnQ6IC0xMixcbiAgICBtYXJnaW5Ub3A6IDEyLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ3JvdGF0ZTM2MEluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoLTM2MGRlZylgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygncm90YXRlMzYwT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIG1hcmdpblJpZ2h0OiAtMTIsXG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luVG9wOiAxMixcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2xlZnRSb3RhdGUzNjBJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2xlZnRSb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5UT1BdOiB7XG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IDEyLFxuICAgIHRvcDogJzEwMCUnLFxuICAgIG1hcmdpblRvcDogMTIsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCd0b3BSb3RhdGUzNjBJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0yMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCd0b3BSb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0yMDAlKSwgcm90YXRlKDM2MGRlZylgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uQk9UVE9NXToge1xuICAgIHJpZ2h0OiAwLFxuICAgIG1hcmdpblJpZ2h0OiAxMixcbiAgICBib3R0b206ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IDEyLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnYm90dG9tUm90YXRlMzYwSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgyMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdib3R0b21Sb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDIwMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc2hlZXRDbG9zZUNsYXNzTmFtZUNhY2hlID0ge31cblxuY29uc3QgZ2V0U2hlZXRDbG9zZUNsYXNzTmFtZSA9IHBvc2l0aW9uID0+IHtcbiAgaWYgKCFzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGVbcG9zaXRpb25dKSB7XG4gICAgc2hlZXRDbG9zZUNsYXNzTmFtZUNhY2hlW3Bvc2l0aW9uXSA9IGNzcyh7XG4gICAgICAuLi5zaGVldENsb3NlU3R5bGVzW3Bvc2l0aW9uXSxcbiAgICAgIC4uLnNoYXJlZFN0eWxlc1xuICAgIH0pLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiBzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGVbcG9zaXRpb25dXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWV0Q2xvc2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuICAgIGlzQ2xvc2luZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFQsXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5CT1RUT01cbiAgICBdKS5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0Nsb3NpbmcsIHBvc2l0aW9uLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2dldFNoZWV0Q2xvc2VDbGFzc05hbWUocG9zaXRpb24pfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJY29uIGljb249XCJjcm9zc1wiIGNvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdfQ==