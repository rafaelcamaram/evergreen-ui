import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
import { getPrimaryButtonStylesForIntent } from '../helpers';
var primaryStyle = getPrimaryButtonStylesForIntent();
var defaultAppearance = Themer.createCheckboxAppearance({
  base: {
    color: 'white',
    backgroundColor: 'white',
    backgroundImage: "linear-gradient(to top, ".concat(scales.neutral.N2A, ", white)"),
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N3A)
  },
  disabled: {
    cursor: 'not-allowed',
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A),
    backgroundColor: scales.neutral.N2A,
    backgroundImage: 'none'
  },
  hover: {
    backgroundImage: "linear-gradient(to top, ".concat(scales.neutral.N2A, ", ").concat(scales.neutral.N1A, ")"),
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
  },
  focus: {
    boxShadow: "0 0 0 2px ".concat(scales.blue.B4A, ", inset 0 0 0 1px ").concat(scales.neutral.N5A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N3A)
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: scales.blue.B3A,
    boxShadow: "inset 0 0 0 1px ".concat(scales.blue.B5A)
  },
  checked: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.base,
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
  },
  checkedHover: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.hover,
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
  },
  checkedDisabled: {
    color: scales.neutral.N6A,
    backgroundImage: "linear-gradient(to top, ".concat(scales.neutral.N2A, ", ").concat(scales.neutral.N1A, ")"),
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
  },
  checkedActive: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.active,
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
  }
});
/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */

var getCheckboxAppearance = function getCheckboxAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getCheckboxAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0Q2hlY2tib3hDbGFzc05hbWUuanMiXSwibmFtZXMiOlsiVGhlbWVyIiwibWVtb2l6ZUNsYXNzTmFtZSIsInNjYWxlcyIsImdldFByaW1hcnlCdXR0b25TdHlsZXNGb3JJbnRlbnQiLCJwcmltYXJ5U3R5bGUiLCJkZWZhdWx0QXBwZWFyYW5jZSIsImNyZWF0ZUNoZWNrYm94QXBwZWFyYW5jZSIsImJhc2UiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsIm5ldXRyYWwiLCJOMkEiLCJib3hTaGFkb3ciLCJONEEiLCJOM0EiLCJkaXNhYmxlZCIsImN1cnNvciIsImhvdmVyIiwiTjFBIiwiZm9jdXMiLCJibHVlIiwiQjRBIiwiTjVBIiwiYWN0aXZlIiwiQjNBIiwiQjVBIiwiY2hlY2tlZCIsImxpbmVhckdyYWRpZW50IiwiY2hlY2tlZEhvdmVyIiwiY2hlY2tlZERpc2FibGVkIiwiTjZBIiwiY2hlY2tlZEFjdGl2ZSIsImdldENoZWNrYm94QXBwZWFyYW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsTUFBVCxRQUF1QixvQkFBdkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QiwyQkFBN0I7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLCtCQUFuQjtBQUNBLFNBQVNDLCtCQUFULFFBQWdELFlBQWhEO0FBRUEsSUFBTUMsWUFBWSxHQUFHRCwrQkFBK0IsRUFBcEQ7QUFFQSxJQUFNRSxpQkFBaUIsR0FBR0wsTUFBTSxDQUFDTSx3QkFBUCxDQUFnQztBQUN4REMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLEtBQUssRUFBRSxPQURIO0FBRUpDLElBQUFBLGVBQWUsRUFBRSxPQUZiO0FBR0pDLElBQUFBLGVBQWUsb0NBQTZCUixNQUFNLENBQUNTLE9BQVAsQ0FBZUMsR0FBNUMsYUFIWDtBQUlKQyxJQUFBQSxTQUFTLDRC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Ozs7QUFLQSxlQUFlSixnQkFBZ0IsQ0FBQ2dDLHFCQUFELENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgeyBnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50IH0gZnJvbSAnLi4vaGVscGVycydcblxuY29uc3QgcHJpbWFyeVN0eWxlID0gZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudCgpXG5cbmNvbnN0IGRlZmF1bHRBcHBlYXJhbmNlID0gVGhlbWVyLmNyZWF0ZUNoZWNrYm94QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHtzY2FsZXMubmV1dHJhbC5OMkF9LCB3aGl0ZSlgLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgLTFweCAxcHggMCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjNBXG4gICAgfWBcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMkEsXG4gICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZSdcbiAgfSxcbiAgaG92ZXI6IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAke3NjYWxlcy5uZXV0cmFsLk4yQX0sICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OMUFcbiAgICB9KWAsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OMkFcbiAgICB9YFxuICB9LFxuICBmb2N1czoge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3NjYWxlcy5ibHVlLkI0QX0sIGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjVBXG4gICAgfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjNBfWBcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CM0EsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLmJsdWUuQjVBfWBcbiAgfSxcbiAgY2hlY2tlZDoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRJbWFnZTogcHJpbWFyeVN0eWxlLmxpbmVhckdyYWRpZW50LmJhc2UsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjVBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OMkFcbiAgICB9YFxuICB9LFxuICBjaGVja2VkSG92ZXI6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHByaW1hcnlTdHlsZS5saW5lYXJHcmFkaWVudC5ob3ZlcixcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONUF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk4yQVxuICAgIH1gXG4gIH0sXG4gIGNoZWNrZWREaXNhYmxlZDoge1xuICAgIGNvbG9yOiBzY2FsZXMubmV1dHJhbC5ONkEsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJHtzY2FsZXMubmV1dHJhbC5OMkF9LCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjFBXG4gICAgfSlgLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgLTFweCAxcHggMCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjJBXG4gICAgfWBcbiAgfSxcbiAgY2hlY2tlZEFjdGl2ZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRJbWFnZTogcHJpbWFyeVN0eWxlLmxpbmVhckdyYWRpZW50LmFjdGl2ZSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk4yQVxuICAgIH1gXG4gIH1cbn0pXG5cbi8qKlxuICogVGhlcmUgaXMgb25seSBhIHNpbmdsZSBhcHBlYXJhbmNlIGluIHRoZSBkZWZhdWx0IHRoZW1lLlxuICogQHBhcmFtIHtTdHJpbmd9IGFwcGVhcmFuY2UuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAqL1xuY29uc3QgZ2V0Q2hlY2tib3hBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gZGVmYXVsdEFwcGVhcmFuY2Vcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBDaGVja2JveGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldENoZWNrYm94QXBwZWFyYW5jZSlcbiJdfQ==