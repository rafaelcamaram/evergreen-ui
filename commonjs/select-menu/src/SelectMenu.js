"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrify = _interopRequireDefault(require("arrify"));

var _popover = require("../../popover");

var _constants = require("../../constants");

var _SelectMenuContent = _interopRequireDefault(require("./SelectMenuContent"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var _SelectedPropType = _interopRequireDefault(require("./SelectedPropType"));

var SelectMenu =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SelectMenu, _PureComponent);

  function SelectMenu() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SelectMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SelectMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDetailView", function (close, detailView) {
      if (typeof detailView === 'function') {
        return {
          detailView: detailView({
            close: close
          })
        };
      }

      if (detailView) {
        return {
          detailView: detailView
        };
      }

      return {};
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getEmptyView", function (close, emptyView) {
      if (typeof emptyView === 'function') {
        return {
          emptyView: emptyView({
            close: close
          })
        };
      }

      if (emptyView) {
        return {
          emptyView: emptyView
        };
      }

      return {};
    });
    return _this;
  }

  (0, _createClass2.default)(SelectMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          selected = _this$props.selected,
          position = _this$props.position,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          titleView = _this$props.titleView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["title", "width", "height", "options", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect"]);
      return _react.default.createElement(_popover.Popover, (0, _extends2.default)({
        minWidth: width,
        position: position,
        minHeight: height,
        content: function content(_ref) {
          var close = _ref.close;
          return _react.default.createElement(_SelectMenuContent.default, (0, _extends2.default)({
            width: width,
            height: height,
            options: options,
            title: title,
            hasFilter: hasFilter,
            filterPlaceholder: filterPlaceholder,
            filterIcon: filterIcon,
            hasTitle: hasTitle,
            isMultiSelect: isMultiSelect,
            titleView: titleView,
            listProps: {
              onSelect: function onSelect(item) {
                _this2.props.onSelect(item);
              },
              onDeselect: function onDeselect(item) {
                _this2.props.onDeselect(item);
              },
              onFilterChange: _this2.props.onFilterChange,
              selected: (0, _arrify.default)(selected)
            },
            close: close
          }, _this2.getDetailView(close, detailView), _this2.getEmptyView(close, emptyView), {
            closeOnSelect: closeOnSelect
          }));
        }
      }, props));
    }
  }]);
  return SelectMenu;
}(_react.PureComponent);

exports.default = SelectMenu;
SelectMenu.displayName = "SelectMenu";
(0, _defineProperty2.default)(SelectMenu, "propTypes", {
  /**
   * The title of the Select Menu.
   */
  title: _propTypes.default.string,

  /**
   * The width of the Select Menu.
   */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The height of the Select Menu.
   */
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: _propTypes.default.arrayOf(_OptionShapePropType.default),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: _propTypes.default.func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: _propTypes.default.func,

  /**
   * The selected value/values.
   */
  selected: _SelectedPropType.default,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes.default.bool,

  /**
   * When true, show the title.
   */
  hasTitle: _propTypes.default.bool,

  /**
   * When true, show the filter.
   */
  hasFilter: _propTypes.default.bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: _propTypes.default.string,

  /**
   * The icon of the search filter.
   */
  filterIcon: _propTypes.default.string,

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: _propTypes.default.func,

  /**
   * The position of the Select Menu.
   */
  position: _propTypes.default.oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes.default.bool
});
(0, _defineProperty2.default)(SelectMenu, "defaultProps", {
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  width: 240,
  height: 248,
  position: _constants.Position.BOTTOM_LEFT,
  isMultiSelect: false,
  filterPlaceholder: 'Filter...',
  filterIcon: 'search',
  closeOnSelect: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudS5qcyJdLCJuYW1lcyI6WyJTZWxlY3RNZW51IiwiY2xvc2UiLCJkZXRhaWxWaWV3IiwiZW1wdHlWaWV3IiwicHJvcHMiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsInNlbGVjdGVkIiwicG9zaXRpb24iLCJoYXNUaXRsZSIsImhhc0ZpbHRlciIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsInRpdGxlVmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwib25TZWxlY3QiLCJpdGVtIiwib25EZXNlbGVjdCIsIm9uRmlsdGVyQ2hhbmdlIiwiZ2V0RGV0YWlsVmlldyIsImdldEVtcHR5VmlldyIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhcnJheU9mIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsImZ1bmMiLCJTZWxlY3RlZFByb3BUeXBlIiwiYm9vbCIsIm9uZU9mIiwiUG9zaXRpb24iLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQXNISCxVQUFDQyxLQUFELEVBQVFDLFVBQVIsRUFBdUI7QUFDckMsVUFBSSxPQUFPQSxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDLGVBQU87QUFDTEEsVUFBQUEsVUFBVSxFQUFFQSxVQUFVLENBQUM7QUFBRUQsWUFBQUEsS0FBSyxFQUFMQTtBQUFGLFdBQUQ7QUFEakIsU0FBUDtBQUdEOztBQUVELFVBQUlDLFVBQUosRUFBZ0I7QUFDZCxlQUFP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Tzs7QUErRWpCOzs7OztBQUtBdkMsRUFBQUEsVUFBVSxFQUFFdUIsbUJBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0YsbUJBQVVNLElBQVgsRUFBaUJOLG1CQUFVaUIsSUFBM0IsQ0FBcEIsQ0FwRks7O0FBc0ZqQjs7Ozs7QUFLQTNCLEVBQUFBLFNBQVMsRUFBRVUsbUJBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0YsbUJBQVVNLElBQVgsRUFBaUJOLG1CQUFVaUIsSUFBM0IsQ0FBcEIsQ0EzRk07O0FBNkZqQjs7OztBQUlBdkMsRUFBQUEsU0FBUyxFQUFFc0IsbUJBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0YsbUJBQVVNLElBQVgsRUFBaUJOLG1CQUFVaUIsSUFBM0IsQ0FBcEIsQ0FqR007O0FBbUdqQjs7O0FBR0F6QixFQUFBQSxhQUFhLEVBQUVRLG1CQUFVUTtBQXRHUixDOzhCQURBakMsVSxrQkEwR0c7QUFDcEJrQixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQURFO0FBRXBCRSxFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQUZBO0FBR3BCZCxFQUFBQSxLQUFLLEVBQUUsR0FIYTtBQUlwQkMsRUFBQUEsTUFBTSxFQUFFLEdBSlk7QUFLcEJHLEVBQUFBLFFBQVEsRUFBRXlCLG9CQUFTSyxXQUxDO0FBTXBCeEIsRUFBQUEsYUFBYSxFQUFFLEtBTks7QUFPcEJILEVBQUFBLGlCQUFpQixFQUFFLFdBUEM7QUFRcEJDLEVBQUFBLFVBQVUsRUFBRSxRQVJRO0FBU3BCRyxFQUFBQSxhQUFhLEVBQUU7QUFUSyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBhcnJpZnkgZnJvbSAnYXJyaWZ5J1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBTZWxlY3RNZW51Q29udGVudCBmcm9tICcuL1NlbGVjdE1lbnVDb250ZW50J1xuaW1wb3J0IE9wdGlvblNoYXBlUHJvcFR5cGUgZnJvbSAnLi9PcHRpb25TaGFwZVByb3BUeXBlJ1xuaW1wb3J0IFNlbGVjdGVkUHJvcFR5cGUgZnJvbSAnLi9TZWxlY3RlZFByb3BUeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RNZW51IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbnMgdG8gc2hvdyBpbiB0aGUgbWVudS5cbiAgICAgKiBbeyBsYWJlbDogU3RyaW5nLCB2YWx1ZTogU3RyaW5nIHwgTnVtYmVyIH1dXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIGFuIG9wdGlvbiBpcyBkZXNlbGVjdGVkLlxuICAgICAqL1xuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIHZhbHVlL3ZhbHVlcy5cbiAgICAgKi9cbiAgICBzZWxlY3RlZDogU2VsZWN0ZWRQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbXVsdGkgc2VsZWN0IGlzIGFjY291bnRlZCBmb3IuXG4gICAgICovXG4gICAgaXNNdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgdGhlIHRpdGxlLlxuICAgICAqL1xuICAgIGhhc1RpdGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyB0aGUgZmlsdGVyLlxuICAgICAqL1xuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhY2Vob2xkZXIgb2YgdGhlIHNlYXJjaCBmaWx0ZXIuXG4gICAgICovXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWNvbiBvZiB0aGUgc2VhcmNoIGZpbHRlci5cbiAgICAgKi9cbiAgICBmaWx0ZXJJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgYXMgdGhlIG9uQ2hhbmdlKCkgZXZlbnQgZm9yIHRoZSBmaWx0ZXIuXG4gICAgICovXG4gICAgb25GaWx0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgICBQb3NpdGlvbi5CT1RUT01fUklHSFRcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5vZGUsIG9yIGEgbm9kZSBpdHNlbGYsIHRoYXQgaXNcbiAgICAgKiByZW5kZXJlZCBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgU2VsZWN0IE1lbnUgdG8gZ2l2ZSBhZGRpdGlvbmFsXG4gICAgICogaW5mb3JtYXRpb24gd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgZGV0YWlsVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAgICogcmVuZGVyZWQgaW4gdGhlIGhlYWRlciBzZWN0aW9uIG9mIHRoZSBTZWxlY3QgTWVudSB0byBjdXN0b21pemVcbiAgICAgKiB0aGUgaGVhZGVyLlxuICAgICAqL1xuICAgIHRpdGxlVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAgICogcmVuZGVyZWQgaW5zdGVhZCBvZiB0aGUgb3B0aW9ucyBsaXN0IHdoZW4gdGhlcmUgYXJlIG5vIG9wdGlvbnMuXG4gICAgICovXG4gICAgZW1wdHlWaWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbkRlc2VsZWN0OiAoKSA9PiB7fSxcbiAgICB3aWR0aDogMjQwLFxuICAgIGhlaWdodDogMjQ4LFxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICBpc011bHRpU2VsZWN0OiBmYWxzZSxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogJ0ZpbHRlci4uLicsXG4gICAgZmlsdGVySWNvbjogJ3NlYXJjaCcsXG4gICAgY2xvc2VPblNlbGVjdDogZmFsc2VcbiAgfVxuXG4gIGdldERldGFpbFZpZXcgPSAoY2xvc2UsIGRldGFpbFZpZXcpID0+IHtcbiAgICBpZiAodHlwZW9mIGRldGFpbFZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRldGFpbFZpZXc6IGRldGFpbFZpZXcoeyBjbG9zZSB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXRhaWxWaWV3KSB7XG4gICAgICByZXR1cm4geyBkZXRhaWxWaWV3IH1cbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGdldEVtcHR5VmlldyA9IChjbG9zZSwgZW1wdHlWaWV3KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlbXB0eVZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVtcHR5VmlldzogZW1wdHlWaWV3KHsgY2xvc2UgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW1wdHlWaWV3KSB7XG4gICAgICByZXR1cm4geyBlbXB0eVZpZXcgfVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBvcHRpb25zLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGhhc1RpdGxlLFxuICAgICAgaGFzRmlsdGVyLFxuICAgICAgZmlsdGVyUGxhY2Vob2xkZXIsXG4gICAgICBmaWx0ZXJJY29uLFxuICAgICAgZGV0YWlsVmlldyxcbiAgICAgIGVtcHR5VmlldyxcbiAgICAgIHRpdGxlVmlldyxcbiAgICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIG1pbldpZHRoPXt3aWR0aH1cbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICBtaW5IZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgY29udGVudD17KHsgY2xvc2UgfSkgPT4gKFxuICAgICAgICAgIDxTZWxlY3RNZW51Q29udGVudFxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgaGFzRmlsdGVyPXtoYXNGaWx0ZXJ9XG4gICAgICAgICAgICBmaWx0ZXJQbGFjZWhvbGRlcj17ZmlsdGVyUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBmaWx0ZXJJY29uPXtmaWx0ZXJJY29ufVxuICAgICAgICAgICAgaGFzVGl0bGU9e2hhc1RpdGxlfVxuICAgICAgICAgICAgaXNNdWx0aVNlbGVjdD17aXNNdWx0aVNlbGVjdH1cbiAgICAgICAgICAgIHRpdGxlVmlldz17dGl0bGVWaWV3fVxuICAgICAgICAgICAgbGlzdFByb3BzPXt7XG4gICAgICAgICAgICAgIG9uU2VsZWN0OiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uRGVzZWxlY3Q6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EZXNlbGVjdChpdGVtKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkZpbHRlckNoYW5nZTogdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFycmlmeShzZWxlY3RlZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbG9zZT17Y2xvc2V9XG4gICAgICAgICAgICB7Li4udGhpcy5nZXREZXRhaWxWaWV3KGNsb3NlLCBkZXRhaWxWaWV3KX1cbiAgICAgICAgICAgIHsuLi50aGlzLmdldEVtcHR5VmlldyhjbG9zZSwgZW1wdHlWaWV3KX1cbiAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q9e2Nsb3NlT25TZWxlY3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cbiJdfQ==