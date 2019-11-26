"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _layers = require("../../layers");

var TableVirtualBody =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableVirtualBody, _PureComponent);
  (0, _createClass2.default)(TableVirtualBody, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.height !== state.calculatedHeight) {
        return {
          isIntegerHeight: Number.isInteger(props.height)
        };
      } // Return null to indicate no change to state.


      return null;
    }
  }]);

  function TableVirtualBody(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TableVirtualBody);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableVirtualBody).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isIntegerHeight: false,
      calculatedHeight: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "initializeHelpers", function () {
      _this.autoHeights = [];
      _this.autoHeightRefs = [];
      _this.averageAutoHeight = _this.props.defaultHeight;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "processAutoHeights", function () {
      var isUpdated = false; // This will determine the averageAutoHeight.

      var total = 0;
      var totalAmount = 0; // Loop through all of the refs that have height="auto".

      _this.autoHeightRefs.forEach(function (ref, index) {
        // If the height is already calculated, skip it,
        // but calculate the height for the total.
        if (_this.autoHeights[index]) {
          total += _this.autoHeights[index];
          totalAmount += 1;
          return;
        } // Make sure the ref has a child


        if (ref && ref.childNodes && ref.childNodes[0] && Number.isInteger(ref.childNodes[0].offsetHeight)) {
          var height = ref.childNodes[0].offsetHeight; // Add to the total to calculate the averageAutoHeight.

          total += height;
          totalAmount += 1; // Cache the height.

          _this.autoHeights[index] = height; // Set the update flag to true.

          isUpdated = true;
        }
      }); // Save the average height.


      _this.averageAutoHeight = total / totalAmount; // There are some new heights detected that had previously not been calculated.
      // Call forceUpdate to make sure the virtual list renders again.

      if (isUpdated) _this.forceUpdate();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRef", function (ref) {
      _this.paneRef = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onVirtualHelperRef", function (index, ref) {
      _this.autoHeightRefs[index] = ref;
      requestAnimationFrame(function () {
        _this.processAutoHeights();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onResize", function () {
      _this.updateOnResize();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updateOnResize", function () {
      _this.initializeHelpers(); // Simply return when we now the height of the pane is fixed.


      if (_this.state.isIntegerHeight) return; // Return if we are in a weird edge case in which the ref is no longer valid.

      if (_this.paneRef) {
        var calculatedHeight = _this.paneRef.offsetHeight;

        if (calculatedHeight > 0) {
          // Save the calculated height which is needed for the VirtualList.
          _this.setState({
            calculatedHeight: calculatedHeight
          }); // Prevent updateOnResize being called recursively when there is a valid height.


          return;
        }
      } // When height is still 0 (or paneRef is not valid) try recursively until success.


      requestAnimationFrame(function () {
        _this.updateOnResize();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getItemSize", function (children) {
      var _this$props = _this.props,
          allowAutoHeight = _this$props.allowAutoHeight,
          useAverageAutoHeightEstimation = _this$props.useAverageAutoHeightEstimation,
          defaultHeight = _this$props.defaultHeight; // Prefer to return a array of all heights.

      if (!allowAutoHeight) {
        return children.map(function (child) {
          if (!_react.default.isValidElement(child)) return defaultHeight;
          var height = child.props.height;

          if (Number.isInteger(height)) {
            return height;
          }

          return defaultHeight;
        });
      } // If allowAutoHeight is true, return a function instead.


      var itemSizeFn = function itemSizeFn(index) {
        if (!_react.default.isValidElement(children[index])) return defaultHeight;
        var height = children[index].props.height; // When the height is number simply, simply return it.

        if (Number.isInteger(height)) {
          return height;
        } // When allowAutoHeight is set and  the height is set to "auto"...


        if (allowAutoHeight && children[index].props.height === 'auto') {
          // ... and the height is calculated, return the calculated height.
          if (_this.autoHeights[index]) return _this.autoHeights[index]; // ... if the height is not yet calculated, return the averge

          if (useAverageAutoHeightEstimation) return _this.averageAutoHeight;
        } // Return the default height.


        return defaultHeight;
      };

      return itemSizeFn;
    });

    _this.initializeHelpers(); // Add a onResize.


    _this.onResize = (0, _lodash.default)(_this.onResize, 200);
    return _this;
  }

  (0, _createClass2.default)(TableVirtualBody, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Call this to initialize and set
      this.updateOnResize();
      window.addEventListener('resize', this.onResize, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          inputChildren = _this$props2.children,
          paneHeight = _this$props2.height,
          defaultHeight = _this$props2.defaultHeight,
          allowAutoHeight = _this$props2.allowAutoHeight,
          overscanCount = _this$props2.overscanCount,
          estimatedItemSize = _this$props2.estimatedItemSize,
          useAverageAutoHeightEstimation = _this$props2.useAverageAutoHeightEstimation,
          scrollToIndex = _this$props2.scrollToIndex,
          scrollOffset = _this$props2.scrollOffset,
          scrollToAlignment = _this$props2.scrollToAlignment,
          onScroll = _this$props2.onScroll,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "height", "defaultHeight", "allowAutoHeight", "overscanCount", "estimatedItemSize", "useAverageAutoHeightEstimation", "scrollToIndex", "scrollOffset", "scrollToAlignment", "onScroll"]); // Children always needs to be an array.

      var children = Array.isArray(inputChildren) ? inputChildren : _react.default.Children.toArray(inputChildren);
      var itemSize = this.getItemSize(children); // VirtualList needs a fixed height.

      var _this$state = this.state,
          calculatedHeight = _this$state.calculatedHeight,
          isIntegerHeight = _this$state.isIntegerHeight;
      return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
        "data-evergreen-table-body": true,
        innerRef: this.onRef,
        height: paneHeight,
        flex: "1",
        overflow: "hidden"
      }, props), _react.default.createElement(_reactTinyVirtualList.default, {
        height: isIntegerHeight ? paneHeight : calculatedHeight,
        width: "100%",
        estimatedItemSize: allowAutoHeight && useAverageAutoHeightEstimation ? this.averageAutoHeight : estimatedItemSize || null,
        itemSize: itemSize,
        overscanCount: overscanCount,
        itemCount: _react.default.Children.count(children),
        scrollToIndex: scrollToIndex,
        scrollOffset: scrollOffset,
        scrollToAlignment: scrollToAlignment,
        onScroll: onScroll,
        renderItem: function renderItem(_ref) {
          var index = _ref.index,
              style = _ref.style;
          var child = children[index];
          var key = child.key || index;
          var props = {
            key: key,
            style: style // If some children are strings by accident, support this gracefully.

          };

          if (!_react.default.isValidElement(child)) {
            if (typeof child === 'string') {
              return _react.default.createElement("div", props, child);
            }

            return _react.default.createElement("div", props, "\xA0");
          } // When allowing height="auto" for rows, and a auto height item is
          // rendered for the first time...


          if (allowAutoHeight && _react.default.isValidElement(child) && child.props.height === 'auto' && // ... and only when the height is not already been calculated.
          !_this2.autoHeights[index]) {
            // ... render the item in a helper div, the ref is used to calculate
            // the height of its children.
            return _react.default.createElement("div", (0, _extends2.default)({
              ref: function ref(_ref2) {
                return _this2.onVirtualHelperRef(index, _ref2);
              },
              "data-virtual-index": index
            }, props, {
              style: (0, _objectSpread2.default)({
                opacity: 0
              }, props.style)
            }), child);
          } // When allowAutoHeight is false, or when the height is known.
          // Simply render the item.


          return _react.default.cloneElement(child, props);
        }
      }));
    }
  }]);
  return TableVirtualBody;
}(_react.PureComponent);

exports.default = TableVirtualBody;
TableVirtualBody.displayName = "TableVirtualBody";
(0, _defineProperty2.default)(TableVirtualBody, "propTypes", (0, _objectSpread2.default)({}, _layers.Pane.propTypes, {
  /**
   * Children needs to be an array of a single node.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),

  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight: _propTypes.default.number,

  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an expirmental feature.
   */
  allowAutoHeight: _propTypes.default.bool,

  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount: _propTypes.default.number.isRequired,

  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize: _propTypes.default.number,

  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation: _propTypes.default.bool,

  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex: _propTypes.default.number,

  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset: _propTypes.default.number,

  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment: _propTypes.default.oneOf(['start', 'center', 'end', 'auto']),

  /**
   * The onScroll callback passed to react-tiny-virtual-list
   */
  onScroll: _propTypes.default.func
}));
(0, _defineProperty2.default)(TableVirtualBody, "defaultProps", {
  defaultHeight: 48,
  allowAutoHeight: false,
  overscanCount: 5,
  useAverageAutoHeightEstimation: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVWaXJ0dWFsQm9keS5qcyJdLCJuYW1lcyI6WyJUYWJsZVZpcnR1YWxCb2R5IiwicHJvcHMiLCJzdGF0ZSIsImhlaWdodCIsImNhbGN1bGF0ZWRIZWlnaHQiLCJpc0ludGVnZXJIZWlnaHQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJhdXRvSGVpZ2h0cyIsImF1dG9IZWlnaHRSZWZzIiwiYXZlcmFnZUF1dG9IZWlnaHQiLCJkZWZhdWx0SGVpZ2h0IiwiaXNVcGRhdGVkIiwidG90YWwiLCJ0b3RhbEFtb3VudCIsImZvckVhY2giLCJyZWYiLCJpbmRleCIsImNoaWxkTm9kZXMiLCJvZmZzZXRIZWlnaHQiLCJmb3JjZVVwZGF0ZSIsInBhbmVSZWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcm9jZXNzQXV0b0hlaWdodHMiLCJ1cGRhdGVPblJlc2l6ZSIsImluaXRpYWxpemVIZWxwZXJzIiwic2V0U3RhdGUiLCJjaGlsZHJlbiIsImFsbG93QXV0b0hlaWdodCIsInVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbiIsIm1hcCIsImNoaWxkIiwiUmVhY3QiLCJpc1ZhbGlkRWxlbWVudCIsIml0ZW1TaXplRm4iLCJvblJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5wdXRDaGlsZHJlbiIsInBhbmVIZWlnaHQiLCJvdmVyc2NhbkNvdW50IiwiZXN0aW1hdGVkSXRlbVNpemUiLCJzY3JvbGxUb0luZGV4Iiwic2Nyb2xsT2Zmc2V0Iiwic2Nyb2xsVG9BbGlnbm1lbnQiLCJvblNjcm9sbCIsIkFycmF5IiwiaXNBcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIml0ZW1TaXplIiwiZ2V0SXRlbVNpemUiLCJvblJlZiIsImNvdW50Iiwic3R5bGUiLCJrZXkiLCJvblZpcnR1YWxIZWxwZXJSZWYiLCJvcGFjaXR5IiwiY2xvbmVFbGVtZW50IiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsIm51bWJlciIsImJvb2wiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRXFCQSxnQjs7Ozs7OzZDQTBFYUMsSyxFQUFPQyxLLEVBQU87QUFDNUMsVUFBSUQsS0FBSyxDQUFDRSxNQUFOLEtBQWlCRCxLQUFLLENBQUNFLGdCQUEzQixFQUE2QztBQUMzQyxlQUFPO0FBQ0xDLFVBQUFBLGVBQWUsRUFBRUMsTUFBTSxDQUFDQyxTQUFQLENBQWlCTixLQUFLLENBQUNFLE1BQXZCO0FBRFosU0FBUDtBQUdELE9BTDJDLENBTzVDOzs7QUFDQSxhQUFPLElBQVA7QUFDRDs7O0FBRUQsNEJBQVlGLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQixzSEFBTUEsS0FBTjtBQURpQix3RkFoQlg7QUFDTkksTUFBQUEsZUFBZSxFQUFFLEtBRFg7QUFFTkQsTUFBQUEsZ0JBQWdCLEVBQUU7QUFGWixLQWdCVztBQUFBLG9HQW1CQyxZQUFNO0FBQ3hCLFlBQUtJLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxZQUFLQyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsWUFBS0MsaUJBQUwsR0FBeUIsTUFBS1QsS0FBTCxDQUFXVSxhQUFwQztBQUNELEtBdkJrQjtBQUFBLHFHQTZCRSxZQUFNO0FBQ3pCLFVBQUlDLFNBQVMsR0FBRyxLQUFoQixDQUR5QixDQUd6Qjs7QUFDQSxVQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFVBQUlDLFdBQVcsR0FBRyxDQUFsQixDQUx5QixDQU96Qjs7QUFDQSxZQUFLTCxjQUFMLENBQW9CTSxPQUFwQixDQUE0QixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDMUM7QUFDQTtBQUNBLFlBQUksTUFBS1QsV0FBTCxDQUFpQlMsS0FBakIs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QVVPLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixLQUFwQixFQUEyQixNQUEzQixDQUFoQixDOztBQUNuQjs7O0FBR0F4QixFQUFBQSxRQUFRLEVBQUVpQixtQkFBVVE7OzhCQTNESHZFLGdCLGtCQThERztBQUNwQlcsRUFBQUEsYUFBYSxFQUFFLEVBREs7QUFFcEJpQixFQUFBQSxlQUFlLEVBQUUsS0FGRztBQUdwQmEsRUFBQUEsYUFBYSxFQUFFLENBSEs7QUFJcEJaLEVBQUFBLDhCQUE4QixFQUFFO0FBSlosQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVmlydHVhbExpc3QgZnJvbSAncmVhY3QtdGlueS12aXJ0dWFsLWxpc3QnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVWaXJ0dWFsQm9keSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBQYW5lIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5QYW5lLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENoaWxkcmVuIG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIGEgc2luZ2xlIG5vZGUuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxuICAgICAgUHJvcFR5cGVzLm5vZGVcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgaGVpZ2h0IG9mIGVhY2ggcm93LlxuICAgICAqIDQ4IGlzIHRoZSBkZWZhdWx0IGhlaWdodCBvZiBhIFRhYmxlUm93LlxuICAgICAqL1xuICAgIGRlZmF1bHRIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHN1cHBvcnQgYGhlaWdodD1cImF1dG9cImAgb24gY2hpbGRyZW4gYmVpbmcgcmVuZGVyZWQuXG4gICAgICogVGhpcyBpcyBzb21ld2hhdCBvZiBhbiBleHBpcm1lbnRhbCBmZWF0dXJlLlxuICAgICAqL1xuICAgIGFsbG93QXV0b0hlaWdodDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3ZlcnNjYW5Db3VudCBwcm9wZXJ0eSBwYXNzZWQgdG8gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3QuXG4gICAgICovXG4gICAgb3ZlcnNjYW5Db3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBwYXNzZWQsIHRoaXMgaXMgdXNlZCBhcyB0aGUgYGVzdGltYXRlZEl0ZW1TaXplYCBpbiByZWFjdC10aW55LXZpcnR1YWwtbGlzdC5cbiAgICAgKiBPbmx5IHdoZW4gYGFsbG93QXV0b0hlaWdodGAgYW5kYHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbmAgYXJlIGZhbHNlLlxuICAgICAqL1xuICAgIGVzdGltYXRlZEl0ZW1TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBhbGxvd0F1dG9IZWlnaHQgaXMgdHJ1ZSBhbmQgdGhpcyBwcm9wIGlzIHRydWUsIHRoZSBlc3RpbWF0ZWQgaGVpZ2h0XG4gICAgICogd2lsbCBiZSBjb21wdXRlZCBiYXNlZCBvbiB0aGUgYXZlcmFnZSBoZWlnaHQgb2YgYXV0byBoZWlnaHQgcm93cy5cbiAgICAgKi9cbiAgICB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNjcm9sbFRvSW5kZXggcHJvcGVydHkgcGFzc2VkIHRvIHJlYWN0LXRpbnktdmlydHVhbC1saXN0XG4gICAgICovXG4gICAgc2Nyb2xsVG9JbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgc2Nyb2xsT2Zmc2V0IHByb3BlcnR5IHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdFxuICAgICAqL1xuICAgIHNjcm9sbE9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiBUaGUgc2Nyb2xsVG9BbGlnbm1lbnQgcHJvcGVydHkgcGFzc2VkIHRvIHJlYWN0LXRpbnktdmlydHVhbC1saXN0XG4gICAgICovXG4gICAgc2Nyb2xsVG9BbGlnbm1lbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YXJ0JywgJ2NlbnRlcicsICdlbmQnLCAnYXV0byddKSxcbiAgICAvKipcbiAgICAgKiBUaGUgb25TY3JvbGwgY2FsbGJhY2sgcGFzc2VkIHRvIHJlYWN0LXRpbnktdmlydHVhbC1saXN0XG4gICAgICovXG4gICAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZmF1bHRIZWlnaHQ6IDQ4LFxuICAgIGFsbG93QXV0b0hlaWdodDogZmFsc2UsXG4gICAgb3ZlcnNjYW5Db3VudDogNSxcbiAgICB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb246IHRydWVcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlzSW50ZWdlckhlaWdodDogZmFsc2UsXG4gICAgY2FsY3VsYXRlZEhlaWdodDogMFxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMuaGVpZ2h0ICE9PSBzdGF0ZS5jYWxjdWxhdGVkSGVpZ2h0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ludGVnZXJIZWlnaHQ6IE51bWJlci5pc0ludGVnZXIocHJvcHMuaGVpZ2h0KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBudWxsIHRvIGluZGljYXRlIG5vIGNoYW5nZSB0byBzdGF0ZS5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuaW5pdGlhbGl6ZUhlbHBlcnMoKVxuXG4gICAgLy8gQWRkIGEgb25SZXNpemUuXG4gICAgdGhpcy5vblJlc2l6ZSA9IGRlYm91bmNlKHRoaXMub25SZXNpemUsIDIwMClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIENhbGwgdGhpcyB0byBpbml0aWFsaXplIGFuZCBzZXRcbiAgICB0aGlzLnVwZGF0ZU9uUmVzaXplKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSlcbiAgfVxuXG4gIGluaXRpYWxpemVIZWxwZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuYXV0b0hlaWdodHMgPSBbXVxuICAgIHRoaXMuYXV0b0hlaWdodFJlZnMgPSBbXVxuICAgIHRoaXMuYXZlcmFnZUF1dG9IZWlnaHQgPSB0aGlzLnByb3BzLmRlZmF1bHRIZWlnaHRcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcHJvY2VzcyBhbGwgaXRlbXMgdGhhdCBoYXZlIGhlaWdodD1cImF1dG9cIiBzZXQuXG4gICAqIEl0IHdpbGwgbG9vcCB0aHJvdWdoIGFsbCByZWZzIGFuZCBnZXQgY2FsY3VsYXRlIHRoZSBoZWlnaHQuXG4gICAqL1xuICBwcm9jZXNzQXV0b0hlaWdodHMgPSAoKSA9PiB7XG4gICAgbGV0IGlzVXBkYXRlZCA9IGZhbHNlXG5cbiAgICAvLyBUaGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBhdmVyYWdlQXV0b0hlaWdodC5cbiAgICBsZXQgdG90YWwgPSAwXG4gICAgbGV0IHRvdGFsQW1vdW50ID0gMFxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgcmVmcyB0aGF0IGhhdmUgaGVpZ2h0PVwiYXV0b1wiLlxuICAgIHRoaXMuYXV0b0hlaWdodFJlZnMuZm9yRWFjaCgocmVmLCBpbmRleCkgPT4ge1xuICAgICAgLy8gSWYgdGhlIGhlaWdodCBpcyBhbHJlYWR5IGNhbGN1bGF0ZWQsIHNraXAgaXQsXG4gICAgICAvLyBidXQgY2FsY3VsYXRlIHRoZSBoZWlnaHQgZm9yIHRoZSB0b3RhbC5cbiAgICAgIGlmICh0aGlzLmF1dG9IZWlnaHRzW2luZGV4XSkge1xuICAgICAgICB0b3RhbCArPSB0aGlzLmF1dG9IZWlnaHRzW2luZGV4XVxuICAgICAgICB0b3RhbEFtb3VudCArPSAxXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHJlZiBoYXMgYSBjaGlsZFxuICAgICAgaWYgKFxuICAgICAgICByZWYgJiZcbiAgICAgICAgcmVmLmNoaWxkTm9kZXMgJiZcbiAgICAgICAgcmVmLmNoaWxkTm9kZXNbMF0gJiZcbiAgICAgICAgTnVtYmVyLmlzSW50ZWdlcihyZWYuY2hpbGROb2Rlc1swXS5vZmZzZXRIZWlnaHQpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcmVmLmNoaWxkTm9kZXNbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICAgICAgLy8gQWRkIHRvIHRoZSB0b3RhbCB0byBjYWxjdWxhdGUgdGhlIGF2ZXJhZ2VBdXRvSGVpZ2h0LlxuICAgICAgICB0b3RhbCArPSBoZWlnaHRcbiAgICAgICAgdG90YWxBbW91bnQgKz0gMVxuXG4gICAgICAgIC8vIENhY2hlIHRoZSBoZWlnaHQuXG4gICAgICAgIHRoaXMuYXV0b0hlaWdodHNbaW5kZXhdID0gaGVpZ2h0XG5cbiAgICAgICAgLy8gU2V0IHRoZSB1cGRhdGUgZmxhZyB0byB0cnVlLlxuICAgICAgICBpc1VwZGF0ZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFNhdmUgdGhlIGF2ZXJhZ2UgaGVpZ2h0LlxuICAgIHRoaXMuYXZlcmFnZUF1dG9IZWlnaHQgPSB0b3RhbCAvIHRvdGFsQW1vdW50XG5cbiAgICAvLyBUaGVyZSBhcmUgc29tZSBuZXcgaGVpZ2h0cyBkZXRlY3RlZCB0aGF0IGhhZCBwcmV2aW91c2x5IG5vdCBiZWVuIGNhbGN1bGF0ZWQuXG4gICAgLy8gQ2FsbCBmb3JjZVVwZGF0ZSB0byBtYWtlIHN1cmUgdGhlIHZpcnR1YWwgbGlzdCByZW5kZXJzIGFnYWluLlxuICAgIGlmIChpc1VwZGF0ZWQpIHRoaXMuZm9yY2VVcGRhdGUoKVxuICB9XG5cbiAgb25SZWYgPSByZWYgPT4ge1xuICAgIHRoaXMucGFuZVJlZiA9IHJlZlxuICB9XG5cbiAgb25WaXJ0dWFsSGVscGVyUmVmID0gKGluZGV4LCByZWYpID0+IHtcbiAgICB0aGlzLmF1dG9IZWlnaHRSZWZzW2luZGV4XSA9IHJlZlxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMucHJvY2Vzc0F1dG9IZWlnaHRzKClcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVPblJlc2l6ZSgpXG4gIH1cblxuICB1cGRhdGVPblJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLmluaXRpYWxpemVIZWxwZXJzKClcblxuICAgIC8vIFNpbXBseSByZXR1cm4gd2hlbiB3ZSBub3cgdGhlIGhlaWdodCBvZiB0aGUgcGFuZSBpcyBmaXhlZC5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0ludGVnZXJIZWlnaHQpIHJldHVyblxuXG4gICAgLy8gUmV0dXJuIGlmIHdlIGFyZSBpbiBhIHdlaXJkIGVkZ2UgY2FzZSBpbiB3aGljaCB0aGUgcmVmIGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICBpZiAodGhpcy5wYW5lUmVmKSB7XG4gICAgICBjb25zdCBjYWxjdWxhdGVkSGVpZ2h0ID0gdGhpcy5wYW5lUmVmLm9mZnNldEhlaWdodFxuXG4gICAgICBpZiAoY2FsY3VsYXRlZEhlaWdodCA+IDApIHtcbiAgICAgICAgLy8gU2F2ZSB0aGUgY2FsY3VsYXRlZCBoZWlnaHQgd2hpY2ggaXMgbmVlZGVkIGZvciB0aGUgVmlydHVhbExpc3QuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNhbGN1bGF0ZWRIZWlnaHRcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBQcmV2ZW50IHVwZGF0ZU9uUmVzaXplIGJlaW5nIGNhbGxlZCByZWN1cnNpdmVseSB3aGVuIHRoZXJlIGlzIGEgdmFsaWQgaGVpZ2h0LlxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGVuIGhlaWdodCBpcyBzdGlsbCAwIChvciBwYW5lUmVmIGlzIG5vdCB2YWxpZCkgdHJ5IHJlY3Vyc2l2ZWx5IHVudGlsIHN1Y2Nlc3MuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlT25SZXNpemUoKVxuICAgIH0pXG4gIH1cblxuICBnZXRJdGVtU2l6ZSA9IGNoaWxkcmVuID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGxvd0F1dG9IZWlnaHQsXG4gICAgICB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb24sXG4gICAgICBkZWZhdWx0SGVpZ2h0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIFByZWZlciB0byByZXR1cm4gYSBhcnJheSBvZiBhbGwgaGVpZ2h0cy5cbiAgICBpZiAoIWFsbG93QXV0b0hlaWdodCkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm4gZGVmYXVsdEhlaWdodFxuICAgICAgICBjb25zdCB7IGhlaWdodCB9ID0gY2hpbGQucHJvcHNcblxuICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihoZWlnaHQpKSB7XG4gICAgICAgICAgcmV0dXJuIGhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRIZWlnaHRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gSWYgYWxsb3dBdXRvSGVpZ2h0IGlzIHRydWUsIHJldHVybiBhIGZ1bmN0aW9uIGluc3RlYWQuXG4gICAgY29uc3QgaXRlbVNpemVGbiA9IGluZGV4ID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW5baW5kZXhdKSkgcmV0dXJuIGRlZmF1bHRIZWlnaHRcbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBjaGlsZHJlbltpbmRleF0ucHJvcHNcblxuICAgICAgLy8gV2hlbiB0aGUgaGVpZ2h0IGlzIG51bWJlciBzaW1wbHksIHNpbXBseSByZXR1cm4gaXQuXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihoZWlnaHQpKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHRcbiAgICAgIH1cblxuICAgICAgLy8gV2hlbiBhbGxvd0F1dG9IZWlnaHQgaXMgc2V0IGFuZCAgdGhlIGhlaWdodCBpcyBzZXQgdG8gXCJhdXRvXCIuLi5cbiAgICAgIGlmIChhbGxvd0F1dG9IZWlnaHQgJiYgY2hpbGRyZW5baW5kZXhdLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIC8vIC4uLiBhbmQgdGhlIGhlaWdodCBpcyBjYWxjdWxhdGVkLCByZXR1cm4gdGhlIGNhbGN1bGF0ZWQgaGVpZ2h0LlxuICAgICAgICBpZiAodGhpcy5hdXRvSGVpZ2h0c1tpbmRleF0pIHJldHVybiB0aGlzLmF1dG9IZWlnaHRzW2luZGV4XVxuXG4gICAgICAgIC8vIC4uLiBpZiB0aGUgaGVpZ2h0IGlzIG5vdCB5ZXQgY2FsY3VsYXRlZCwgcmV0dXJuIHRoZSBhdmVyZ2VcbiAgICAgICAgaWYgKHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbikgcmV0dXJuIHRoaXMuYXZlcmFnZUF1dG9IZWlnaHRcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHRoZSBkZWZhdWx0IGhlaWdodC5cbiAgICAgIHJldHVybiBkZWZhdWx0SGVpZ2h0XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1TaXplRm5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbjogaW5wdXRDaGlsZHJlbixcbiAgICAgIGhlaWdodDogcGFuZUhlaWdodCxcbiAgICAgIGRlZmF1bHRIZWlnaHQsXG4gICAgICBhbGxvd0F1dG9IZWlnaHQsXG4gICAgICBvdmVyc2NhbkNvdW50LFxuICAgICAgZXN0aW1hdGVkSXRlbVNpemUsXG4gICAgICB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb24sXG4gICAgICBzY3JvbGxUb0luZGV4LFxuICAgICAgc2Nyb2xsT2Zmc2V0LFxuICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQsXG4gICAgICBvblNjcm9sbCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIENoaWxkcmVuIGFsd2F5cyBuZWVkcyB0byBiZSBhbiBhcnJheS5cbiAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkoaW5wdXRDaGlsZHJlbilcbiAgICAgID8gaW5wdXRDaGlsZHJlblxuICAgICAgOiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGlucHV0Q2hpbGRyZW4pXG5cbiAgICBjb25zdCBpdGVtU2l6ZSA9IHRoaXMuZ2V0SXRlbVNpemUoY2hpbGRyZW4pXG5cbiAgICAvLyBWaXJ0dWFsTGlzdCBuZWVkcyBhIGZpeGVkIGhlaWdodC5cbiAgICBjb25zdCB7IGNhbGN1bGF0ZWRIZWlnaHQsIGlzSW50ZWdlckhlaWdodCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGRhdGEtZXZlcmdyZWVuLXRhYmxlLWJvZHlcbiAgICAgICAgaW5uZXJSZWY9e3RoaXMub25SZWZ9XG4gICAgICAgIGhlaWdodD17cGFuZUhlaWdodH1cbiAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPFZpcnR1YWxMaXN0XG4gICAgICAgICAgaGVpZ2h0PXtpc0ludGVnZXJIZWlnaHQgPyBwYW5lSGVpZ2h0IDogY2FsY3VsYXRlZEhlaWdodH1cbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGVzdGltYXRlZEl0ZW1TaXplPXtcbiAgICAgICAgICAgIGFsbG93QXV0b0hlaWdodCAmJiB1c2VBdmVyYWdlQXV0b0hlaWdodEVzdGltYXRpb25cbiAgICAgICAgICAgICAgPyB0aGlzLmF2ZXJhZ2VBdXRvSGVpZ2h0XG4gICAgICAgICAgICAgIDogZXN0aW1hdGVkSXRlbVNpemUgfHwgbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtU2l6ZT17aXRlbVNpemV9XG4gICAgICAgICAgb3ZlcnNjYW5Db3VudD17b3ZlcnNjYW5Db3VudH1cbiAgICAgICAgICBpdGVtQ291bnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKX1cbiAgICAgICAgICBzY3JvbGxUb0luZGV4PXtzY3JvbGxUb0luZGV4fVxuICAgICAgICAgIHNjcm9sbE9mZnNldD17c2Nyb2xsT2Zmc2V0fVxuICAgICAgICAgIHNjcm9sbFRvQWxpZ25tZW50PXtzY3JvbGxUb0FsaWdubWVudH1cbiAgICAgICAgICBvblNjcm9sbD17b25TY3JvbGx9XG4gICAgICAgICAgcmVuZGVySXRlbT17KHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBjaGlsZC5rZXkgfHwgaW5kZXhcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIHN0eWxlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHNvbWUgY2hpbGRyZW4gYXJlIHN0cmluZ3MgYnkgYWNjaWRlbnQsIHN1cHBvcnQgdGhpcyBncmFjZWZ1bGx5LlxuICAgICAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PntjaGlsZH08L2Rpdj5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4gYWxsb3dpbmcgaGVpZ2h0PVwiYXV0b1wiIGZvciByb3dzLCBhbmQgYSBhdXRvIGhlaWdodCBpdGVtIGlzXG4gICAgICAgICAgICAvLyByZW5kZXJlZCBmb3IgdGhlIGZpcnN0IHRpbWUuLi5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgYWxsb3dBdXRvSGVpZ2h0ICYmXG4gICAgICAgICAgICAgIFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSAmJlxuICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJyAmJlxuICAgICAgICAgICAgICAvLyAuLi4gYW5kIG9ubHkgd2hlbiB0aGUgaGVpZ2h0IGlzIG5vdCBhbHJlYWR5IGJlZW4gY2FsY3VsYXRlZC5cbiAgICAgICAgICAgICAgIXRoaXMuYXV0b0hlaWdodHNbaW5kZXhdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gLi4uIHJlbmRlciB0aGUgaXRlbSBpbiBhIGhlbHBlciBkaXYsIHRoZSByZWYgaXMgdXNlZCB0byBjYWxjdWxhdGVcbiAgICAgICAgICAgICAgLy8gdGhlIGhlaWdodCBvZiBpdHMgY2hpbGRyZW4uXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5vblZpcnR1YWxIZWxwZXJSZWYoaW5kZXgsIHJlZil9XG4gICAgICAgICAgICAgICAgICBkYXRhLXZpcnR1YWwtaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NoaWxkfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4gYWxsb3dBdXRvSGVpZ2h0IGlzIGZhbHNlLCBvciB3aGVuIHRoZSBoZWlnaHQgaXMga25vd24uXG4gICAgICAgICAgICAvLyBTaW1wbHkgcmVuZGVyIHRoZSBpdGVtLlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==