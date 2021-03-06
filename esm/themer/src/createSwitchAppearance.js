import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var disabledState = '&[disabled] + div';
var hoverState = '&:not([disabled]):hover + div';
var focusState = '&:not([disabled]):focus + div';
var activeState = '&:not([disabled]):active + div';
var checkedState = '&:checked + div';
var checkedHoverState = '&:checked:hover + div';
var checkedActiveState = '&:not([disabled]):checked:active + div';
var checkedDisabledState = '&[disabled]:checked + div';
var hiddenCheckboxStyle = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0'
  /**
   * @param {object} items - object with a set of states.
   * @return {object} the final appearance.
   */

};

var createSwitchAppearance = function createSwitchAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'disabled', 'hover', 'active', 'focus', 'checked', 'checkedActive', 'checkedDisabled'],
    cb: function cb(prop) {
      console.error("Themer.createSwitchAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, hiddenCheckboxStyle, (_objectSpread2 = {
    '& + div > svg': {
      display: 'none'
    },
    '& + div': _objectSpread({
      cursor: 'pointer'
    }, createAppearance(items.base))
  }, _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, checkedState, _objectSpread({}, createAppearance(items.checked), {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedHoverState, _objectSpread({}, createAppearance(items.checkedHover), {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedActiveState, _objectSpread({}, createAppearance(items.checkedActive), {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedDisabledState, _objectSpread({}, createAppearance(items.checkedDisabled), {
    '& > svg': {
      display: 'block'
    }
  })), _objectSpread2));
};

export default createSwitchAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVN3aXRjaEFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJkaXNhYmxlZFN0YXRlIiwiaG92ZXJTdGF0ZSIsImZvY3VzU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImNoZWNrZWRTdGF0ZSIsImNoZWNrZWRIb3ZlclN0YXRlIiwiY2hlY2tlZEFjdGl2ZVN0YXRlIiwiY2hlY2tlZERpc2FibGVkU3RhdGUiLCJoaWRkZW5DaGVja2JveFN0eWxlIiwiYm9yZGVyIiwiY2xpcCIsImhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwid2hpdGVTcGFjZSIsIndpZHRoIiwib3BhY2l0eSIsImNyZWF0ZVN3aXRjaEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiZGlzcGxheSIsImN1cnNvciIsImJhc2UiLCJkaXNhYmxlZCIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiLCJjaGVja2VkIiwiY2hlY2tlZEhvdmVyIiwiY2hlY2tlZEFjdGl2ZSIsImNoZWNrZWREaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxnQkFBUCxNQUE2QixvQkFBN0I7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFFQSxJQUFNQyxhQUFhLEdBQUcsbUJBQXRCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLCtCQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRywrQkFBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsZ0NBQXBCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGlCQUFyQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLHVCQUExQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLHdDQUEzQjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLDJCQUE3QjtBQUVBLElBQU1DLG1CQUFtQixHQUFHO0FBQzFCQyxFQUFBQSxNQUFNLEVBQUUsR0FEa0I7QUFFMUJDLEVBQUFBLElBQUksRUFBRSwwQkFGb0I7QUFHMUJDLEVBQUFBLE1BQU0sRUFBRSxHQUhrQjtBQUkxQkMsRUFBQUEsUUFBUSxFQUFFLFFBSmdCO0FBSzFCQyxFQUFBQSxPQUFPLEVBQUUsR0FMaUI7QUFNMUJDLEVBQUFBLFFBQVEsRUFBRSxVQU5nQjtBQU8xQkMsRUFBQUEsVUFBVSxFQUFFLFFBUGM7QUFRMUJDLEVBQUFBLEtBQUssRUFBRSxHQVJtQjtBQVMxQkMsRUFBQUEsT0FBTyxFQUFFO0FBR1g7Ozs7O0FBWjRCLENBQTVCOztBQWdCQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQWdCO0FBQUE7O0FBQUEsTUFBZkMsS0FBZSx1RUFBUCxFQUFPO0FBQzdDcEIsRUFBQUEsbUJBQW1CLENBQUM7QUFDbEJvQixJQUFBQSxLQUFLLEVBQUxBLEtBRGtCO0FBRWxCQyxJQUFBQSxLQUFLLEVBQUUsQ0FDTCxNQURLLEVBRUwsVUFGSyxFQUdMLE9BSEssRUFJTCxRQUpLLEVBS0wsT0FMSyxFQU1MLFNBTkssRUFPTCxlQVBLLEVBUUwsaUJBUkssQ0FGVztBQVlsQkMsSUFBQUEsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtBQUNWQyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsd0RBQ2tERixJQURsRCxZQUVFSCxLQUZGO0FBSUQ7QUFqQmlCLEdBQUQsQ0FBbkI7QUFvQkEsMkJBQ0tYLG1CQURMO0FBRUUscUJBQWlCO0FBQUVpQixNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUZuQjtBQUdFO0FBQWFDLE1BQUFBLE1BQU0sRUFBRTtBQUFyQixPQUFtQzVCLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDUSxJQUFQLENBQW5EO0FBSEYscUNBSUczQixhQUpIO0FBS0kwQixJQUFBQSxNQUFNLEVBQUU7QUFMWixLQU1PNUIsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNTLFFBQVAsQ0FOdkIsb0NBUUczQixVQVJILEVBUWdCSCxnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1UsS0FBUCxDQVJoQyxtQ0FTRzNCLFVBVEgsRUFTZ0JKLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDVyxLQUFQLENBVGhDLG1DQVVHM0IsV0FWSCxFQVVpQkwsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNZLE1BQVAsQ0FWakMsbUNBV0czQixZQVhILG9CQVlPTixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ2EsT0FBUCxDQVp2QjtBQWFJLGVBQVc7QUFBRVAsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFiZix1Q0FlR3BCLGlCQWZILG9CQWdCT1AsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNjLFlBQVAsQ0FoQnZCO0FBaUJJLGVBQVc7QUFBRVIsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFqQmYsdUNBbUJHbkIsa0JBbkJILG9CQW9CT1IsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNlLGFBQVAsQ0FwQnZCO0FBcUJJLGVBQVc7QUFBRVQsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFyQmYsdUNBdUJHbEIsb0JBdkJILG9CQXdCT1QsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNnQixlQUFQLENBeEJ2QjtBQXlCSSxlQUFXO0FBQUVWLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBekJmO0FBNEJELENBakREOztBQW1EQSxlQUFlUCxzQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICcmW2Rpc2FibGVkXSArIGRpdidcbmNvbnN0IGhvdmVyU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6aG92ZXIgKyBkaXYnXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOmZvY3VzICsgZGl2J1xuY29uc3QgYWN0aXZlU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlICsgZGl2J1xuY29uc3QgY2hlY2tlZFN0YXRlID0gJyY6Y2hlY2tlZCArIGRpdidcbmNvbnN0IGNoZWNrZWRIb3ZlclN0YXRlID0gJyY6Y2hlY2tlZDpob3ZlciArIGRpdidcbmNvbnN0IGNoZWNrZWRBY3RpdmVTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpjaGVja2VkOmFjdGl2ZSArIGRpdidcbmNvbnN0IGNoZWNrZWREaXNhYmxlZFN0YXRlID0gJyZbZGlzYWJsZWRdOmNoZWNrZWQgKyBkaXYnXG5cbmNvbnN0IGhpZGRlbkNoZWNrYm94U3R5bGUgPSB7XG4gIGJvcmRlcjogJzAnLFxuICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgaGVpZ2h0OiAnMScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcGFkZGluZzogJzAnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIHdpZHRoOiAnMScsXG4gIG9wYWNpdHk6ICcwJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZVN3aXRjaEFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogW1xuICAgICAgJ2Jhc2UnLFxuICAgICAgJ2Rpc2FibGVkJyxcbiAgICAgICdob3ZlcicsXG4gICAgICAnYWN0aXZlJyxcbiAgICAgICdmb2N1cycsXG4gICAgICAnY2hlY2tlZCcsXG4gICAgICAnY2hlY2tlZEFjdGl2ZScsXG4gICAgICAnY2hlY2tlZERpc2FibGVkJ1xuICAgIF0sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVTd2l0Y2hBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uaGlkZGVuQ2hlY2tib3hTdHlsZSxcbiAgICAnJiArIGRpdiA+IHN2Zyc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gICAgJyYgKyBkaXYnOiB7IGN1cnNvcjogJ3BvaW50ZXInLCAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpIH0sXG4gICAgW2Rpc2FibGVkU3RhdGVdOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKVxuICAgIH0sXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpLFxuICAgIFthY3RpdmVTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbY2hlY2tlZFN0YXRlXToge1xuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkKSxcbiAgICAgICcmID4gc3ZnJzogeyBkaXNwbGF5OiAnYmxvY2snIH1cbiAgICB9LFxuICAgIFtjaGVja2VkSG92ZXJTdGF0ZV06IHtcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuY2hlY2tlZEhvdmVyKSxcbiAgICAgICcmID4gc3ZnJzogeyBkaXNwbGF5OiAnYmxvY2snIH1cbiAgICB9LFxuICAgIFtjaGVja2VkQWN0aXZlU3RhdGVdOiB7XG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmNoZWNrZWRBY3RpdmUpLFxuICAgICAgJyYgPiBzdmcnOiB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgIH0sXG4gICAgW2NoZWNrZWREaXNhYmxlZFN0YXRlXToge1xuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkRGlzYWJsZWQpLFxuICAgICAgJyYgPiBzdmcnOiB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTd2l0Y2hBcHBlYXJhbmNlXG4iXX0=