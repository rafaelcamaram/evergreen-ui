"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _OptionsList = _interopRequireDefault(require("./OptionsList"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var DefaultTitleView = function DefaultTitleView(_ref) {
  var close = _ref.close,
      title = _ref.title,
      headerHeight = _ref.headerHeight;
  return _react.default.createElement(_layers.Pane, {
    display: "flex",
    alignItems: "center",
    borderBottom: "default",
    padding: 8,
    height: headerHeight,
    boxSizing: "border-box"
  }, _react.default.createElement(_layers.Pane, {
    flex: "1",
    display: "flex",
    alignItems: "center"
  }, _react.default.createElement(_typography.Heading, {
    size: 400
  }, title)), _react.default.createElement(_buttons.IconButton, {
    icon: "cross",
    appearance: "minimal",
    height: 24,
    onClick: close
  }));
};

DefaultTitleView.displayName = "DefaultTitleView";
DefaultTitleView.propTypes = {
  close: _propTypes.default.func,
  title: _propTypes.default.string,
  headerHeight: _propTypes.default.number
};

var SelectMenuContent =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SelectMenuContent, _PureComponent);

  function SelectMenuContent() {
    (0, _classCallCheck2.default)(this, SelectMenuContent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectMenuContent).apply(this, arguments));
  }

  (0, _createClass2.default)(SelectMenuContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          close = _this$props.close,
          listProps = _this$props.listProps,
          titleView = _this$props.titleView,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect;
      var headerHeight = 40;
      var optionsListHeight = hasTitle ? height - headerHeight : height;
      var hasDetailView = Boolean(detailView);
      var hasEmptyView = Boolean(emptyView);
      return _react.default.createElement(_layers.Pane, {
        display: "flex",
        height: height
      }, _react.default.createElement(_layers.Pane, {
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        borderRight: hasDetailView ? 'muted' : null
      }, hasTitle && titleView({
        close: close,
        title: title,
        headerHeight: headerHeight
      }), options.length === 0 && hasEmptyView ? _react.default.createElement(_layers.Pane, {
        height: optionsListHeight
      }, emptyView) : _react.default.createElement(_OptionsList.default, (0, _extends2.default)({
        height: optionsListHeight,
        hasFilter: hasFilter,
        filterPlaceholder: filterPlaceholder,
        filterIcon: filterIcon,
        options: options,
        isMultiSelect: isMultiSelect,
        close: close,
        closeOnSelect: closeOnSelect
      }, listProps))), hasDetailView && detailView);
    }
  }]);
  return SelectMenuContent;
}(_react.PureComponent);

exports.default = SelectMenuContent;
SelectMenuContent.displayName = "SelectMenuContent";
(0, _defineProperty2.default)(SelectMenuContent, "propTypes", {
  close: _propTypes.default.func,
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  headerHeight: _propTypes.default.number,
  options: _propTypes.default.arrayOf(_OptionShapePropType.default),
  hasTitle: _propTypes.default.bool,
  hasFilter: _propTypes.default.bool,
  filterPlaceholder: _propTypes.default.string,
  filterIcon: _propTypes.default.string,
  listProps: _propTypes.default.shape(_OptionsList.default.propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes.default.bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes.default.bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: _propTypes.default.node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: _propTypes.default.node
});
(0, _defineProperty2.default)(SelectMenuContent, "defaultProps", {
  options: [],
  hasTitle: true,
  hasFilter: true,
  titleView: DefaultTitleView
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudUNvbnRlbnQuanMiXSwibmFtZXMiOlsiRGVmYXVsdFRpdGxlVmlldyIsImNsb3NlIiwidGl0bGUiLCJoZWFkZXJIZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiU2VsZWN0TWVudUNvbnRlbnQiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImhhc1RpdGxlIiwiaGFzRmlsdGVyIiwiZmlsdGVyUGxhY2Vob2xkZXIiLCJmaWx0ZXJJY29uIiwibGlzdFByb3BzIiwidGl0bGVWaWV3IiwiZGV0YWlsVmlldyIsImVtcHR5VmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwib3B0aW9uc0xpc3RIZWlnaHQiLCJoYXNEZXRhaWxWaWV3IiwiQm9vbGVhbiIsImhhc0VtcHR5VmlldyIsImxlbmd0aCIsIlB1cmVDb21wb25lbnQiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsImJvb2wiLCJzaGFwZSIsIk9wdGlvbnNMaXN0Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsWUFBakIsUUFBaUJBLFlBQWpCO0FBQUEsU0FDdkIsNkJBQUMsWUFBRDtBQUNFLElBQUEsT0FBTyxFQUFDLE1BRFY7QUFFRSxJQUFBLFVBQVUsRUFBQyxRQUZiO0FBR0UsSUFBQSxZQUFZLEVBQUMsU0FIZjtBQUlFLElBQUEsT0FBTyxFQUFFLENBSlg7QUFLRSxJQUFBLE1BQU0sRUFBRUEsWUFMVjtBQU1FLElB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QmpCOzs7QUFHQWhCLEVBQUFBLFVBQVUsRUFBRWYsbUJBQVUrQixJQS9CTDs7QUFpQ2pCOzs7QUFHQWYsRUFBQUEsU0FBUyxFQUFFaEIsbUJBQVUrQjtBQXBDSixDOzhCQURBM0IsaUIsa0JBd0NHO0FBQ3BCSSxFQUFBQSxPQUFPLEVBQUUsRUFEVztBQUVwQkMsRUFBQUEsUUFBUSxFQUFFLElBRlU7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRSxJQUhTO0FBSXBCSSxFQUFBQSxTQUFTLEVBQUVuQjtBQUpTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgT3B0aW9uc0xpc3QgZnJvbSAnLi9PcHRpb25zTGlzdCdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcblxuY29uc3QgRGVmYXVsdFRpdGxlVmlldyA9ICh7IGNsb3NlLCB0aXRsZSwgaGVhZGVySGVpZ2h0IH0pID0+IChcbiAgPFBhbmVcbiAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgYm9yZGVyQm90dG9tPVwiZGVmYXVsdFwiXG4gICAgcGFkZGluZz17OH1cbiAgICBoZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgPlxuICAgIDxQYW5lIGZsZXg9XCIxXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICA8SGVhZGluZyBzaXplPXs0MDB9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgPC9QYW5lPlxuICAgIDxJY29uQnV0dG9uIGljb249XCJjcm9zc1wiIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgaGVpZ2h0PXsyNH0gb25DbGljaz17Y2xvc2V9IC8+XG4gIDwvUGFuZT5cbilcblxuRGVmYXVsdFRpdGxlVmlldy5wcm9wVHlwZXMgPSB7XG4gIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlclxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TWVudUNvbnRlbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBoZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG4gICAgaGFzVGl0bGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVySWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaXN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZShPcHRpb25zTGlzdC5wcm9wVHlwZXMpLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTm9kZSB0aGF0IGlzIHBsYWNlZCBpbiB0aGUgaGVhZGVyIHNlY3Rpb24sIGFib3ZlIHRoZSBvcHRpb25zLlxuICAgICAqL1xuICAgIHRpdGxlVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgcGxhY2VkIHJpZ2h0IG5leHQgdG8gdGhlIG9wdGlvbnMuXG4gICAgICovXG4gICAgZGV0YWlsVmlldzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgZGlzcGxheWVkIGluc3RlYWQgb2Ygb3B0aW9ucyBsaXN0IHdoZW4gdGhlcmUgYXJlIG5vIG9wdGlvbnMuXG4gICAgICovXG4gICAgZW1wdHlWaWV3OiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBoYXNUaXRsZTogdHJ1ZSxcbiAgICBoYXNGaWx0ZXI6IHRydWUsXG4gICAgdGl0bGVWaWV3OiBEZWZhdWx0VGl0bGVWaWV3XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBoYXNUaXRsZSxcbiAgICAgIGhhc0ZpbHRlcixcbiAgICAgIGZpbHRlclBsYWNlaG9sZGVyLFxuICAgICAgZmlsdGVySWNvbixcbiAgICAgIGNsb3NlLFxuICAgICAgbGlzdFByb3BzLFxuICAgICAgdGl0bGVWaWV3LFxuICAgICAgZGV0YWlsVmlldyxcbiAgICAgIGVtcHR5VmlldyxcbiAgICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgICBjbG9zZU9uU2VsZWN0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IDQwXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RIZWlnaHQgPSBoYXNUaXRsZSA/IGhlaWdodCAtIGhlYWRlckhlaWdodCA6IGhlaWdodFxuXG4gICAgY29uc3QgaGFzRGV0YWlsVmlldyA9IEJvb2xlYW4oZGV0YWlsVmlldylcbiAgICBjb25zdCBoYXNFbXB0eVZpZXcgPSBCb29sZWFuKGVtcHR5VmlldylcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgPFBhbmVcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGJvcmRlclJpZ2h0PXtoYXNEZXRhaWxWaWV3ID8gJ211dGVkJyA6IG51bGx9XG4gICAgICAgID5cbiAgICAgICAgICB7aGFzVGl0bGUgJiYgdGl0bGVWaWV3KHsgY2xvc2UsIHRpdGxlLCBoZWFkZXJIZWlnaHQgfSl9XG4gICAgICAgICAge29wdGlvbnMubGVuZ3RoID09PSAwICYmIGhhc0VtcHR5VmlldyA/IChcbiAgICAgICAgICAgIDxQYW5lIGhlaWdodD17b3B0aW9uc0xpc3RIZWlnaHR9PntlbXB0eVZpZXd9PC9QYW5lPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8T3B0aW9uc0xpc3RcbiAgICAgICAgICAgICAgaGVpZ2h0PXtvcHRpb25zTGlzdEhlaWdodH1cbiAgICAgICAgICAgICAgaGFzRmlsdGVyPXtoYXNGaWx0ZXJ9XG4gICAgICAgICAgICAgIGZpbHRlclBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgZmlsdGVySWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgaXNNdWx0aVNlbGVjdD17aXNNdWx0aVNlbGVjdH1cbiAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlfVxuICAgICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXtjbG9zZU9uU2VsZWN0fVxuICAgICAgICAgICAgICB7Li4ubGlzdFByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIHtoYXNEZXRhaWxWaWV3ICYmIGRldGFpbFZpZXd9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=