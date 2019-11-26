import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var hoverState = '&:hover';
var selectedState = '&[aria-current="page"], &[aria-selected="true"], &:active';
var currentState = '&[aria-current="page"], &[aria-selected="true"]';
var focusState = '&:focus';
var disabledState = '&[aria-disabled="true"]';
var baseStyle = {
  cursor: 'pointer',
  outline: 'none'
  /**
   * @param {object} items - object with a set of states.
   * @return {object} the final appearance.
   */

};

var createTabAppearance = function createTabAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTabAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, selectedState, createAppearance(items.active)), _defineProperty(_objectSpread2, currentState, _objectSpread({
    cursor: 'default'
  }, createAppearance(items.current))), _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _objectSpread2));
};

export default createTabAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRhYkFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJob3ZlclN0YXRlIiwic2VsZWN0ZWRTdGF0ZSIsImN1cnJlbnRTdGF0ZSIsImZvY3VzU3RhdGUiLCJkaXNhYmxlZFN0YXRlIiwiYmFzZVN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsImNyZWF0ZVRhYkFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiLCJjdXJyZW50IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUNqQiwyREFERjtBQUVBLElBQU1DLFlBQVksR0FBRyxpREFBckI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcseUJBQXRCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxNQUFNLEVBQUUsU0FEUTtBQUVoQkMsRUFBQUEsT0FBTyxFQUFFO0FBR1g7Ozs7O0FBTGtCLENBQWxCOztBQVNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDMUNWLEVBQUFBLG1CQUFtQixDQUFDO0FBQ2xCVSxJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixFQUFxQyxTQUFyQyxFQUFnRCxVQUFoRCxDQUZXO0FBR2xCQyxJQUFBQSxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixxREFDK0NGLElBRC9DLFlBRUVILEtBRkY7QUFJRDtBQVJpQixHQUFELENBQW5CO0FBV0EsMkJBQ0tKLFNBREwsRUFFS1AsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ00sSUFBUCxDQUZyQix3REFHR2YsVUFISCxFQUdnQkYsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ08sS0FBUCxDQUhoQyxtQ0FJR2IsVUFKSCxFQUlnQkwsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ1EsS0FBUCxDQUpoQyxtQ0FLR2hCLGFBTEgsRUFLbUJILGdCQUFnQixDQUFDVyxLQUFLLENBQUNTLE1BQVAsQ0FMbkMsbUNBTUdoQixZQU5IO0FBT0lJLElBQUFBLE1BQU0sRUFBRTtBQVBaLEtBUU9SLGdCQUFnQixDQUFDVyxLQUFLLENBQUNVLE9BQVAsQ0FSdkIsb0NBVUdmLGFBVkg7QUFXSUUsSUFBQUEsTUFBTSxFQUFFO0FBWFosS0FZT1IsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ1csUUFBUCxDQVp2QjtBQWVELENBM0JEOztBQTZCQSxlQUFlWixtQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOmhvdmVyJ1xuY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9XG4gICcmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0sICZbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0sICY6YWN0aXZlJ1xuY29uc3QgY3VycmVudFN0YXRlID0gJyZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSwgJlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSdcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpmb2N1cydcbmNvbnN0IGRpc2FibGVkU3RhdGUgPSAnJlthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSdcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgb3V0bGluZTogJ25vbmUnXG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlVGFiQXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnaG92ZXInLCAnYWN0aXZlJywgJ2ZvY3VzJywgJ2N1cnJlbnQnLCAnZGlzYWJsZWQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVRhYkFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW3NlbGVjdGVkU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmFjdGl2ZSksXG4gICAgW2N1cnJlbnRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jdXJyZW50KVxuICAgIH0sXG4gICAgW2Rpc2FibGVkU3RhdGVdOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWJBcHBlYXJhbmNlXG4iXX0=