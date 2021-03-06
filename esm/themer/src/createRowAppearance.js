import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var hoverState = '&[data-isselectable="true"]:hover';
var focusState = '&[data-isselectable="true"]:focus, &[aria-selected="true"]';
var activeState = '&[aria-current="true"], &[data-isselectable="true"]:active';
var currentState = '&[aria-current="true"]';
var baseStyle = {
  '&[data-isselectable="true"]': {
    cursor: 'pointer'
  },
  outline: 'none'
  /**
   * @param {object} items - object with a set of states.
   * @return {object} the final appearance.
   */

};

var createRowAppearance = function createRowAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current'],
    cb: function cb(prop) {
      console.error("Themer.createRowAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, currentState, createAppearance(items.current)), _objectSpread2));
};

export default createRowAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVJvd0FwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY3VycmVudFN0YXRlIiwiYmFzZVN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsImNyZWF0ZVJvd0FwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUVBLElBQU1DLFVBQVUsR0FBRyxtQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsNERBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLDREQUFwQjtBQUNBLElBQU1DLFlBQVksR0FBRyx3QkFBckI7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEIsaUNBQStCO0FBQzdCQyxJQUFBQSxNQUFNLEVBQUU7QUFEcUIsR0FEZjtBQUloQkMsRUFBQUEsT0FBTyxFQUFFO0FBR1g7Ozs7O0FBUGtCLENBQWxCOztBQVdBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDMUNULEVBQUFBLG1CQUFtQixDQUFDO0FBQ2xCUyxJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixFQUFxQyxTQUFyQyxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixxREFDK0NGLElBRC9DLFlBRUVILEtBRkY7QUFJRDtBQVJpQixHQUFELENBQW5CO0FBV0EsMkJBQ0tKLFNBREwsRUFFS04sZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ00sSUFBUCxDQUZyQix3REFHR2QsVUFISCxFQUdnQkYsZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ08sS0FBUCxDQUhoQyxtQ0FJR2QsVUFKSCxFQUlnQkgsZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ1EsS0FBUCxDQUpoQyxtQ0FLR2QsV0FMSCxFQUtpQkosZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ1MsTUFBUCxDQUxqQyxtQ0FNR2QsWUFOSCxFQU1rQkwsZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ1UsT0FBUCxDQU5sQztBQVFELENBcEJEOztBQXNCQSxlQUFlWCxtQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmW2RhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXTpob3ZlcidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl06Zm9jdXMsICZbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nXG5jb25zdCBhY3RpdmVTdGF0ZSA9ICcmW2FyaWEtY3VycmVudD1cInRydWVcIl0sICZbZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJdOmFjdGl2ZSdcbmNvbnN0IGN1cnJlbnRTdGF0ZSA9ICcmW2FyaWEtY3VycmVudD1cInRydWVcIl0nXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgJyZbZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJdJzoge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH0sXG4gIG91dGxpbmU6ICdub25lJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZVJvd0FwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2FjdGl2ZScsICdmb2N1cycsICdjdXJyZW50J10sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVSb3dBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpLFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbY3VycmVudFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jdXJyZW50KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvd0FwcGVhcmFuY2VcbiJdfQ==