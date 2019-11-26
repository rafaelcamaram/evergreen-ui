import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var baseStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  flex: 1,
  background: 'none',
  width: '100%',
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  ':-moz-focusring': {
    color: 'transparent',
    textShadow: '0 0 0 #000'
  }
};
var disabledState = '[disabled]';
var invalidState = '&[aria-invalid="true"]';
var hoverState = '&:not([disabled]):hover';
var focusState = '&:not([disabled]):focus';
var activeState = '&:not([disabled]):active';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createSelectAppearance = function createSelectAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'disabled', 'invalid', 'hover', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createSelectAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread({}, baseStyle, createAppearance(items.base), (_objectSpread2 = {}, _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _defineProperty(_objectSpread2, invalidState, createAppearance(items.invalid)), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _objectSpread2));
};

export default createSelectAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVNlbGVjdEFwcGVhcmFuY2UuanMiXSwibmFtZXMiOlsiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJiYXNlU3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsImJvcmRlciIsImZsZXgiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJXZWJraXRGb250U21vb3RoaW5nIiwidGV4dERlY29yYXRpb24iLCJvdXRsaW5lIiwiY3Vyc29yIiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwiZGlzYWJsZWRTdGF0ZSIsImludmFsaWRTdGF0ZSIsImhvdmVyU3RhdGUiLCJmb2N1c1N0YXRlIiwiYWN0aXZlU3RhdGUiLCJjcmVhdGVTZWxlY3RBcHBlYXJhbmNlIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImJhc2UiLCJkaXNhYmxlZCIsImludmFsaWQiLCJob3ZlciIsImZvY3VzIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFERjtBQUVoQkMsRUFBQUEsYUFBYSxFQUFFLE1BRkM7QUFHaEJDLEVBQUFBLE1BQU0sRUFBRSxNQUhRO0FBSWhCQyxFQUFBQSxJQUFJLEVBQUUsQ0FKVTtBQUtoQkMsRUFBQUEsVUFBVSxFQUFFLE1BTEk7QUFNaEJDLEVBQUFBLEtBQUssRUFBRSxNQU5TO0FBT2hCQyxFQUFBQSxtQkFBbUIsRUFBRSxhQVBMO0FBUWhCQyxFQUFBQSxjQUFjLEVBQUUsTUFSQTtBQVNoQkMsRUFBQUEsT0FBTyxFQUFFLE1BVE87QUFVaEJDLEVBQUFBLE1BQU0sRUFBRSxTQVZRO0FBV2hCLHFCQUFtQjtBQUNqQkMsSUFBQUEsS0FBSyxFQUFFLGFBRFU7QUFFakJDLElBQUFBLFVBQVUsRUFBRTtBQUZLO0FBWEgsQ0FBbEI7QUFpQkEsSUFBTUMsYUFBYSxHQUFHLFlBQXRCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLHdCQUFyQjtBQUNBLElBQU1DLFVBQVUsR0FBRyx5QkFBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcseUJBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLDBCQUFwQjtBQUVBOzs7OztBQUlBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBZ0I7QUFBQTs7QUFBQSxNQUFmQyxLQUFlLHVFQUFQLEVBQU87QUFDN0NwQixFQUFBQSxtQkFBbUIsQ0FBQztBQUNsQm9CLElBQUFBLEtBQUssRUFBTEEsS0FEa0I7QUFFbEJDLElBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLFNBQXJCLEVBQWdDLE9BQWhDLEVBQXlDLFFBQXpDLEVBQW1ELE9BQW5ELENBRlc7QUFHbEJDLElBQUFBLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxLQUFSLHdEQUNrREYsSUFEbEQsWUFFRUgsS0FGRjtBQUlEO0FBUmlCLEdBQUQsQ0FBbkI7QUFXQSwyQkFDS25CLFNBREwsRUFFS0YsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNNLElBQVAsQ0FGckIsd0RBR0daLGFBSEg7QUFJSUgsSUFBQUEsTUFBTSxFQUFFO0FBSlosS0FLT1osZ0JBQWdCLENBQUNxQixLQUFLLENBQUNPLFFBQVAsQ0FMdkIsb0NBT0daLFlBUEgsRUFPa0JoQixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1EsT0FBUCxDQVBsQyxtQ0FRR1osVUFSSCxFQVFnQmpCLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDUyxLQUFQLENBUmhDLG1DQVNHWixVQVRILEVBU2dCbEIsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNVLEtBQVAsQ0FUaEMsbUNBVUdaLFdBVkgsRUFVaUJuQixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1csTUFBUCxDQVZqQztBQVlELENBeEJEOztBQTBCQSxlQUFlWixzQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGZsZXg6IDEsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgJzotbW96LWZvY3VzcmluZyc6IHtcbiAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB0ZXh0U2hhZG93OiAnMCAwIDAgIzAwMCdcbiAgfVxufVxuXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJ1tkaXNhYmxlZF0nXG5jb25zdCBpbnZhbGlkU3RhdGUgPSAnJlthcmlhLWludmFsaWQ9XCJ0cnVlXCJdJ1xuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpob3ZlcidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6Zm9jdXMnXG5jb25zdCBhY3RpdmVTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlU2VsZWN0QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnZGlzYWJsZWQnLCAnaW52YWxpZCcsICdob3ZlcicsICdhY3RpdmUnLCAnZm9jdXMnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVNlbGVjdEFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfSxcbiAgICBbaW52YWxpZFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5pbnZhbGlkKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VsZWN0QXBwZWFyYW5jZVxuIl19