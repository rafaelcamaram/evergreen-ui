import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toaster } from '../../toaster';
import { withTheme } from '../../theme';
import { Pane } from '../../layers';
import safeInvoke from '../../lib/safe-invoke';
import { TableRowConsumer } from './TableRowContext';
import manageTableCellFocusInteraction from './manageTableCellFocusInteraction';

function executeArrowKeyOverride(override) {
  if (!override) {
    return;
  }

  if (typeof override === 'function') {
    override();
    return;
  }

  if (typeof override === 'string') {
    document.querySelector(override).focus();
    return;
  } // This needs to be the node, not a React ref.


  override.focus();
}

var TableCell =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableCell, _PureComponent);

  function TableCell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableCell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var _this$props$arrowKeys = _this.props.arrowKeysOverrides,
          arrowKeysOverrides = _this$props$arrowKeys === void 0 ? {} : _this$props$arrowKeys;

      if (_this.props.isSelectable) {
        var key = e.key;

        if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
          e.preventDefault();

          try {
            // Support arrow key overrides.
            var override = arrowKeysOverrides[key.substr('Arrow'.length).toLowerCase()];
            if (override === false) return;
            if (override) return executeArrowKeyOverride(override);
            manageTableCellFocusInteraction(key, _this.mainRef);
          } catch (error) {
            toaster.danger('Keyboard interaction not possible');
            console.error('Keyboard interaction not possible', error);
          }
        } else if (key === 'Escape') {
          _this.mainRef.blur();
        }
      }

      safeInvoke(_this.props.onKeyDown, e);
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      safeInvoke(_this.props.innerRef, ref);
    });

    return _this;
  }

  _createClass(TableCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          onClick = _this$props.onClick,
          onKeyPress = _this$props.onKeyPress,
          onKeyDown = _this$props.onKeyDown,
          isSelectable = _this$props.isSelectable,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? -1 : _this$props$tabIndex,
          className = _this$props.className,
          rightView = _this$props.rightView,
          arrowKeysOverrides = _this$props.arrowKeysOverrides,
          props = _objectWithoutProperties(_this$props, ["innerRef", "theme", "children", "appearance", "onClick", "onKeyPress", "onKeyDown", "isSelectable", "tabIndex", "className", "rightView", "arrowKeysOverrides"]);

      var themedClassName = theme.getTableCellClassName(appearance);
      return React.createElement(TableRowConsumer, null, function (height) {
        return React.createElement(Pane, _extends({
          innerRef: _this2.onRef,
          height: height,
          className: cx(themedClassName, className),
          tabIndex: isSelectable ? tabIndex : undefined,
          "data-isselectable": isSelectable,
          onClick: onClick,
          onKeyDown: _this2.handleKeyDown
        }, TableCell.styles, props), children, rightView ? rightView : null);
      });
    }
  }]);

  return TableCell;
}(PureComponent);

TableCell.displayName = "TableCell";

_defineProperty(TableCell, "propTypes", _objectSpread({}, Pane.propTypes, {
  /*
   * Makes the TableCell focusable. Used by EditableCell.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Optional node to be placed on the right side of the table cell.
   * Useful for icons and icon buttons.
   */
  rightView: PropTypes.node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Advanced arrow keys overrides for selectable cells.
   * A string will be used as a selector.
   */
  arrowKeysOverrides: PropTypes.shape({
    up: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    down: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])])
  }),

  /**
   * Class name passed to the table cell.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(TableCell, "defaultProps", {
  appearance: 'default'
});

_defineProperty(TableCell, "styles", {
  paddingX: 12,
  boxSizing: 'border-box',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  overflow: 'hidden'
});

export default withTheme(TableCell);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVDZWxsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImN4IiwidG9hc3RlciIsIndpdGhUaGVtZSIsIlBhbmUiLCJzYWZlSW52b2tlIiwiVGFibGVSb3dDb25zdW1lciIsIm1hbmFnZVRhYmxlQ2VsbEZvY3VzSW50ZXJhY3Rpb24iLCJleGVjdXRlQXJyb3dLZXlPdmVycmlkZSIsIm92ZXJyaWRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJUYWJsZUNlbGwiLCJlIiwicHJvcHMiLCJhcnJvd0tleXNPdmVycmlkZXMiLCJpc1NlbGVjdGFibGUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN1YnN0ciIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwibWFpblJlZiIsImVycm9yIiwiZGFuZ2VyIiwiY29uc29sZSIsImJsdXIiLCJvbktleURvd24iLCJyZWYiLCJpbm5lclJlZiIsInRoZW1lIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwib25DbGljayIsIm9uS2V5UHJlc3MiLCJ0YWJJbmRleCIsImNsYXNzTmFtZSIsInJpZ2h0VmlldyIsInRoZW1lZENsYXNzTmFtZSIsImdldFRhYmxlQ2VsbENsYXNzTmFtZSIsImhlaWdodCIsIm9uUmVmIiwidW5kZWZpbmVkIiwiaGFuZGxlS2V5RG93biIsInN0eWxlcyIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibm9kZSIsIm9iamVjdCIsInNoYXBlIiwidXAiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZWxlbWVudCIsIm9uZU9mIiwiZG93biIsImxlZnQiLCJyaWdodCIsInBhZGRpbmdYIiwiYm94U2l6aW5nIiwiZmxleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFNocmluayIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJ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LEM7O2dCQW5FbEJwQixTLFlBdUVZO0FBQ2RnRCxFQUFBQSxRQUFRLEVBQUUsRUFESTtBQUVkQyxFQUFBQSxTQUFTLEVBQUUsWUFGRztBQUdkQyxFQUFBQSxJQUFJLEVBQUUsQ0FIUTtBQUlkQyxFQUFBQSxPQUFPLEVBQUUsTUFKSztBQUtkQyxFQUFBQSxVQUFVLEVBQUUsUUFMRTtBQU1kQyxFQUFBQSxVQUFVLEVBQUUsQ0FORTtBQU9kQyxFQUFBQSxRQUFRLEVBQUU7QUFQSSxDOztBQTJGbEIsZUFBZWhFLFNBQVMsQ0FBQ1UsU0FBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHRvYXN0ZXIgfSBmcm9tICcuLi8uLi90b2FzdGVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHsgVGFibGVSb3dDb25zdW1lciB9IGZyb20gJy4vVGFibGVSb3dDb250ZXh0J1xuaW1wb3J0IG1hbmFnZVRhYmxlQ2VsbEZvY3VzSW50ZXJhY3Rpb24gZnJvbSAnLi9tYW5hZ2VUYWJsZUNlbGxGb2N1c0ludGVyYWN0aW9uJ1xuXG5mdW5jdGlvbiBleGVjdXRlQXJyb3dLZXlPdmVycmlkZShvdmVycmlkZSkge1xuICBpZiAoIW92ZXJyaWRlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIG92ZXJyaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3ZlcnJpZGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiBvdmVycmlkZSA9PT0gJ3N0cmluZycpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG92ZXJyaWRlKS5mb2N1cygpXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIHRoZSBub2RlLCBub3QgYSBSZWFjdCByZWYuXG4gIG92ZXJyaWRlLmZvY3VzKClcbn1cblxuY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gICAgLypcbiAgICAgKiBNYWtlcyB0aGUgVGFibGVDZWxsIGZvY3VzYWJsZS4gVXNlZCBieSBFZGl0YWJsZUNlbGwuXG4gICAgICogV2lsbCBhZGQgdGFiSW5kZXg9ey0xIHx8IHRoaXMucHJvcHMudGFiSW5kZXh9LlxuICAgICAqL1xuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdGFibGUgcm93LiBEZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydCBkZWZhdWx0LlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsIG5vZGUgdG8gYmUgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSB0YWJsZSBjZWxsLlxuICAgICAqIFVzZWZ1bCBmb3IgaWNvbnMgYW5kIGljb24gYnV0dG9ucy5cbiAgICAgKi9cbiAgICByaWdodFZpZXc6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQWR2YW5jZWQgYXJyb3cga2V5cyBvdmVycmlkZXMgZm9yIHNlbGVjdGFibGUgY2VsbHMuXG4gICAgICogQSBzdHJpbmcgd2lsbCBiZSB1c2VkIGFzIGEgc2VsZWN0b3IuXG4gICAgICovXG4gICAgYXJyb3dLZXlzT3ZlcnJpZGVzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgICAgXSksXG4gICAgICBkb3duOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICAgIF0pLFxuICAgICAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gICAgICBdKSxcbiAgICAgIHJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICAgIF0pXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgdGFibGUgY2VsbC5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBwYWRkaW5nWDogMTIsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZmxleDogMSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleFNocmluazogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBjb25zdCB7IGFycm93S2V5c092ZXJyaWRlcyA9IHt9IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdGFibGUpIHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBlXG4gICAgICBpZiAoXG4gICAgICAgIGtleSA9PT0gJ0Fycm93VXAnIHx8XG4gICAgICAgIGtleSA9PT0gJ0Fycm93RG93bicgfHxcbiAgICAgICAga2V5ID09PSAnQXJyb3dMZWZ0JyB8fFxuICAgICAgICBrZXkgPT09ICdBcnJvd1JpZ2h0J1xuICAgICAgKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFN1cHBvcnQgYXJyb3cga2V5IG92ZXJyaWRlcy5cbiAgICAgICAgICBjb25zdCBvdmVycmlkZSA9XG4gICAgICAgICAgICBhcnJvd0tleXNPdmVycmlkZXNba2V5LnN1YnN0cignQXJyb3cnLmxlbmd0aCkudG9Mb3dlckNhc2UoKV1cbiAgICAgICAgICBpZiAob3ZlcnJpZGUgPT09IGZhbHNlKSByZXR1cm5cbiAgICAgICAgICBpZiAob3ZlcnJpZGUpIHJldHVybiBleGVjdXRlQXJyb3dLZXlPdmVycmlkZShvdmVycmlkZSlcblxuICAgICAgICAgIG1hbmFnZVRhYmxlQ2VsbEZvY3VzSW50ZXJhY3Rpb24oa2V5LCB0aGlzLm1haW5SZWYpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdG9hc3Rlci5kYW5nZXIoJ0tleWJvYXJkIGludGVyYWN0aW9uIG5vdCBwb3NzaWJsZScpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignS2V5Ym9hcmQgaW50ZXJhY3Rpb24gbm90IHBvc3NpYmxlJywgZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLm1haW5SZWYuYmx1cigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uS2V5RG93biwgZSlcbiAgfVxuXG4gIG9uUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMuaW5uZXJSZWYsIHJlZilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbm5lclJlZixcbiAgICAgIHRoZW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5UHJlc3MsXG4gICAgICBvbktleURvd24sXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICB0YWJJbmRleCA9IC0xLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcmlnaHRWaWV3LFxuICAgICAgYXJyb3dLZXlzT3ZlcnJpZGVzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0VGFibGVDZWxsQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlUm93Q29uc3VtZXI+XG4gICAgICAgIHtoZWlnaHQgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5vblJlZn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgICB0YWJJbmRleD17aXNTZWxlY3RhYmxlID8gdGFiSW5kZXggOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhdGEtaXNzZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICB7Li4uVGFibGVDZWxsLnN0eWxlc31cbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIHtyaWdodFZpZXcgPyByaWdodFZpZXcgOiBudWxsfVxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvVGFibGVSb3dDb25zdW1lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRhYmxlQ2VsbClcbiJdfQ==