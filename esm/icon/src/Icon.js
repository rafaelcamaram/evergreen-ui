import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint react/no-array-index-key: 0, eqeqeq: 0, no-eq-null: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { IconNames, IconSvgPaths16, IconSvgPaths20 } from '@blueprintjs/icons';
import { withTheme } from '../../theme';
export { IconNames };
/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */

var Icon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderSvgPaths", function (pathsSize, iconName) {
      var svgPathsRecord = pathsSize === Icon.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
      var pathStrings = svgPathsRecord[iconName];

      if (pathStrings == null) {
        return null;
      }

      return pathStrings.map(function (d, i) {
        return React.createElement("path", {
          key: i,
          d: d,
          fillRule: "evenodd"
        });
      });
    });

    return _this;
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          color = _this$props.color,
          icon = _this$props.icon,
          size = _this$props.size,
          title = _this$props.title,
          svgProps = _objectWithoutProperties(_this$props, ["theme", "color", "icon", "size", "title"]);

      var _this$props$style = this.props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;

      if (icon == null) {
        return null;
      }

      if (typeof icon !== 'string') {
        return icon;
      } // Choose which pixel grid is most appropriate for given icon size


      var pixelGridSize = size >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
      var paths = this.renderSvgPaths(pixelGridSize, icon);

      if (paths == null) {
        return null;
      }

      var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);

      if (color != null) {
        style = _objectSpread({}, style, {
          fill: theme.getIconColor(color)
        });
      }

      return React.createElement(Box, _extends({
        is: "svg"
      }, svgProps, {
        style: style,
        "data-icon": icon,
        width: size,
        height: size,
        viewBox: viewBox
      }), title ? React.createElement("title", null, title) : null, paths);
    }
  }]);

  return Icon;
}(PureComponent);

Icon.displayName = "Icon";

_defineProperty(Icon, "SIZE_STANDARD", 16);

_defineProperty(Icon, "SIZE_LARGE", 20);

_defineProperty(Icon, "propTypes", {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: PropTypes.string,

  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: PropTypes.node.isRequired,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: PropTypes.number.isRequired,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: PropTypes.string,

  /**
   * CSS style properties.
   */
  style: PropTypes.object,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(Icon, "defaultProps", {
  size: 16,
  color: 'currentColor'
});

export default withTheme(Icon);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29uL3NyYy9JY29uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsIkljb25OYW1lcyIsIkljb25TdmdQYXRoczE2IiwiSWNvblN2Z1BhdGhzMjAiLCJ3aXRoVGhlbWUiLCJJY29uIiwicGF0aHNTaXplIiwiaWNvbk5hbWUiLCJzdmdQYXRoc1JlY29yZCIsIlNJWkVfU1RBTkRBUkQiLCJwYXRoU3RyaW5ncyIsIm1hcCIsImQiLCJpIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9yIiwiaWNvbiIsInNpemUiLCJ0aXRsZSIsInN2Z1Byb3BzIiwic3R5bGUiLCJwaXhlbEdyaWRTaXplIiwiU0laRV9MQVJHRSIsInBhdGhzIiwicmVuZGVyU3ZnUGF0aHMiLCJ2aWV3Qm94IiwiZmlsbCIsImdldEljb25Db2xvciIsInN0cmluZyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLGNBQXBCLEVBQW9DQyxjQUFwQyxRQUEwRCxvQkFBMUQ7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBRUEsU0FBU0gsU0FBVDtBQUVBOzs7Ozs7SUFNTUksSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FFQXdEYSxVQUFDQyxTQUFELEVBQVlDLFFBQVosRUFBeUI7QUFDeEMsVUFBTUMsY0FBYyxHQUNsQkYsU0FBUyxLQUFLRCxJQUFJLENBQUNJLGFBQW5CLEdBQW1DUCxjQUFuQyxHQUFvREMsY0FEdEQ7QUFFQSxVQUFNTyxXQUFXLEdBQUdGLGNBQWMsQ0FBQ0QsUUFBRCxDQUFsQzs7QUFFQSxVQUFJRyxXQUFXLElBQUksSUFBbkIs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Ii8qIGVzbGludCByZWFjdC9uby1hcnJheS1pbmRleC1rZXk6IDAsIGVxZXFlcTogMCwgbm8tZXEtbnVsbDogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgSWNvbk5hbWVzLCBJY29uU3ZnUGF0aHMxNiwgSWNvblN2Z1BhdGhzMjAgfSBmcm9tICdAYmx1ZXByaW50anMvaWNvbnMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuZXhwb3J0IHsgSWNvbk5hbWVzIH1cblxuLyoqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGEgcmVtaXggb2YgdGhlIEljb24gY29tcG9uZW50IGluIEJsdWVwcmludGpzOlxuICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iLzgxM2U5M2YyL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLnRzeCNMMTVcbiAqIFJlZmVyIHRvIHRoZSBMSUNFTlNFIGZvciBCbHVlcHJpbnRKUyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vcGFsYW50aXIvYmx1ZXByaW50L2Jsb2IvZGV2ZWxvcC9MSUNFTlNFXG4gKi9cblxuY2xhc3MgSWNvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgU0laRV9TVEFOREFSRCA9IDE2XG5cbiAgc3RhdGljIFNJWkVfTEFSR0UgPSAyMFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29sb3Igb2YgaWNvbi4gRXF1aXZhbGVudCB0byBzZXR0aW5nIENTUyBgZmlsbGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIGEgQmx1ZXByaW50IFVJIGljb24sIG9yIGFuIGljb24gZWxlbWVudCwgdG8gcmVuZGVyLlxuICAgICAqIFRoaXMgcHJvcCBpcyByZXF1aXJlZCBiZWNhdXNlIGl0IGRldGVybWluZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudCwgYnV0IGl0IGNhblxuICAgICAqIGJlIGV4cGxpY2l0bHkgc2V0IHRvIGZhbHN5IHZhbHVlcyB0byByZW5kZXIgbm90aGluZy5cbiAgICAgKlxuICAgICAqIC0gSWYgYG51bGxgIG9yIGB1bmRlZmluZWRgIG9yIGBmYWxzZWAsIHRoaXMgY29tcG9uZW50IHdpbGwgcmVuZGVyIG5vdGhpbmcuXG4gICAgICogLSBJZiBnaXZlbiBhbiBgSWNvbk5hbWVgIChhIHN0cmluZyBsaXRlcmFsIHVuaW9uIG9mIGFsbCBpY29uIG5hbWVzKSxcbiAgICAgKiAgIHRoYXQgaWNvbiB3aWxsIGJlIHJlbmRlcmVkIGFzIGFuIGA8c3ZnPmAgd2l0aCBgPHBhdGg+YCB0YWdzLlxuICAgICAqIC0gSWYgZ2l2ZW4gYSBgSlNYLkVsZW1lbnRgLCB0aGF0IGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZCBhbmQgX2FsbCBvdGhlciBwcm9wcyBvbiB0aGlzIGNvbXBvbmVudCBhcmUgaWdub3JlZC5fXG4gICAgICogICBUaGlzIHR5cGUgaXMgc3VwcG9ydGVkIHRvIHNpbXBsaWZ5IHVzYWdlIG9mIHRoaXMgY29tcG9uZW50IGluIG90aGVyIEJsdWVwcmludCBjb21wb25lbnRzLlxuICAgICAqICAgQXMgYSBjb25zdW1lciwgeW91IHNob3VsZCBuZXZlciB1c2UgYDxJY29uIGljb249ezxlbGVtZW50IC8+fWAgZGlyZWN0bHk7IHNpbXBseSByZW5kZXIgYDxlbGVtZW50IC8+YCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGljb246IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSBpY29uLCBpbiBwaXhlbHMuXG4gICAgICogQmx1ZXByaW50IGNvbnRhaW5zIDE2cHggYW5kIDIwcHggU1ZHIGljb24gaW1hZ2VzLFxuICAgICAqIGFuZCBjaG9vc2VzIHRoZSBhcHByb3ByaWF0ZSByZXNvbHV0aW9uIGJhc2VkIG9uIHRoaXMgcHJvcC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvbiBzdHJpbmcuXG4gICAgICogQnJvd3NlcnMgdXN1YWxseSByZW5kZXIgdGhpcyBhcyBhIHRvb2x0aXAgb24gaG92ZXIsIHdoZXJlYXMgc2NyZWVuXG4gICAgICogcmVhZGVycyB3aWxsIHVzZSBpdCBmb3IgYXVyYWwgZmVlZGJhY2suXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBpcyBzZXQgdG8gdGhlIGljb24ncyBuYW1lIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQ1NTIHN0eWxlIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogMTYsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InXG4gIH1cblxuICByZW5kZXJTdmdQYXRocyA9IChwYXRoc1NpemUsIGljb25OYW1lKSA9PiB7XG4gICAgY29uc3Qgc3ZnUGF0aHNSZWNvcmQgPVxuICAgICAgcGF0aHNTaXplID09PSBJY29uLlNJWkVfU1RBTkRBUkQgPyBJY29uU3ZnUGF0aHMxNiA6IEljb25TdmdQYXRoczIwXG4gICAgY29uc3QgcGF0aFN0cmluZ3MgPSBzdmdQYXRoc1JlY29yZFtpY29uTmFtZV1cblxuICAgIGlmIChwYXRoU3RyaW5ncyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoU3RyaW5ncy5tYXAoKGQsIGkpID0+IDxwYXRoIGtleT17aX0gZD17ZH0gZmlsbFJ1bGU9XCJldmVub2RkXCIgLz4pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgY29sb3IsIGljb24sIHNpemUsIHRpdGxlLCAuLi5zdmdQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCB7IHN0eWxlID0ge30gfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpY29uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpY29uICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGljb25cbiAgICB9XG5cbiAgICAvLyBDaG9vc2Ugd2hpY2ggcGl4ZWwgZ3JpZCBpcyBtb3N0IGFwcHJvcHJpYXRlIGZvciBnaXZlbiBpY29uIHNpemVcbiAgICBjb25zdCBwaXhlbEdyaWRTaXplID1cbiAgICAgIHNpemUgPj0gSWNvbi5TSVpFX0xBUkdFID8gSWNvbi5TSVpFX0xBUkdFIDogSWNvbi5TSVpFX1NUQU5EQVJEXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLnJlbmRlclN2Z1BhdGhzKHBpeGVsR3JpZFNpemUsIGljb24pXG4gICAgaWYgKHBhdGhzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3Qgdmlld0JveCA9IGAwIDAgJHtwaXhlbEdyaWRTaXplfSAke3BpeGVsR3JpZFNpemV9YFxuXG4gICAgaWYgKGNvbG9yICE9IG51bGwpIHtcbiAgICAgIHN0eWxlID0geyAuLi5zdHlsZSwgZmlsbDogdGhlbWUuZ2V0SWNvbkNvbG9yKGNvbG9yKSB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJzdmdcIlxuICAgICAgICB7Li4uc3ZnUHJvcHN9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgZGF0YS1pY29uPXtpY29ufVxuICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgICB2aWV3Qm94PXt2aWV3Qm94fVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAge3BhdGhzfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShJY29uKVxuIl19