import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import { defaultControlStyles } from '../shared';
import scales from '../foundational-styles/scales';
import palette from '../foundational-styles/palette';
var SelectAppearances = {};
SelectAppearances.default = Themer.createSelectAppearance({
  base: defaultControlStyles.base,
  disabled: defaultControlStyles.disabled,
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(palette.red.base, ", inset 0 1px 2px ").concat(scales.neutral.N4A)
  },
  hover: defaultControlStyles.hover,
  focus: defaultControlStyles.focus,
  active: defaultControlStyles.active
});
/**
 * Get the appearance of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */

var getSelectAppearance = function getSelectAppearance() {
  return SelectAppearances.default;
};
/**
 * Get the className of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getSelectAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0U2VsZWN0Q2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIlRoZW1lciIsIm1lbW9pemVDbGFzc05hbWUiLCJkZWZhdWx0Q29udHJvbFN0eWxlcyIsInNjYWxlcyIsInBhbGV0dGUiLCJTZWxlY3RBcHBlYXJhbmNlcyIsImRlZmF1bHQiLCJjcmVhdGVTZWxlY3RBcHBlYXJhbmNlIiwiYmFzZSIsImRpc2FibGVkIiwiaW52YWxpZCIsImJveFNoYWRvdyIsInJlZCIsIm5ldXRyYWwiLCJONEEiLCJob3ZlciIsImZvY3VzIiwiYWN0aXZlIiwiZ2V0U2VsZWN0QXBwZWFyYW5jZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsTUFBVCxRQUF1QixvQkFBdkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QiwyQkFBN0I7QUFDQSxTQUFTQyxvQkFBVCxRQUFxQyxXQUFyQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsK0JBQW5CO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixnQ0FBcEI7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxFQUExQjtBQUVBQSxpQkFBaUIsQ0FBQ0MsT0FBbEIsR0FBNEJOLE1BQU0sQ0FBQ08sc0JBQVAsQ0FBOEI7QUFDeERDLEVBQUFBLElBQUksRUFBRU4sb0JBQW9CLENBQUNNLElBRDZCO0FBRXhEQyxFQUFBQSxRQUFRLEVBQUVQLG9CQUFvQixDQUFDTyxRQUZ5QjtBQUd4REMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFNBQVMsNEJBQXFCUCxPQUFPLENBQUNRLEdBQVIsQ0FBWUosSUFBakMsK0JBQ1BMLE1BQU0sQ0FBQ1UsT0FBUCxDQUFlQyxHQURSO0FBREYsR0FIK0M7QUFReERDLEVBQUFBLEtBQUssRUFBRWIsb0JBQW9CLENBQUNhLEtBUjRCO0FBU3hEQyxFQUFBQSxLQUFLLEVBQUVkLG9CQUFvQixDQUFDYyxLQVQ0QjtBQVV4REMsRUFBQUEsTUFBTSxFQUFFZixvQkFBb0IsQ0FBQ2U7QUFWMkIsQ0FBOUIsQ0FBNUI7QUFhQTs7Ozs7O0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDLFNBQU9iLGlCQUFpQixDQUFDQyxPQUF6QjtBQUNELENBRkQ7QUFJQTs7Ozs7OztBQUtBLGVBQWVMLGdCQUFnQixDQUFDaUIsbUJBQUQsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHsgZGVmYXVsdENvbnRyb2xTdHlsZXMgfSBmcm9tICcuLi9zaGFyZWQnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBTZWxlY3RBcHBlYXJhbmNlcyA9IHt9XG5cblNlbGVjdEFwcGVhcmFuY2VzLmRlZmF1bHQgPSBUaGVtZXIuY3JlYXRlU2VsZWN0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IGRlZmF1bHRDb250cm9sU3R5bGVzLmJhc2UsXG4gIGRpc2FibGVkOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5kaXNhYmxlZCxcbiAgaW52YWxpZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3BhbGV0dGUucmVkLmJhc2V9LCBpbnNldCAwIDFweCAycHggJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk40QVxuICAgIH1gXG4gIH0sXG4gIGhvdmVyOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5ob3ZlcixcbiAgZm9jdXM6IGRlZmF1bHRDb250cm9sU3R5bGVzLmZvY3VzLFxuICBhY3RpdmU6IGRlZmF1bHRDb250cm9sU3R5bGVzLmFjdGl2ZVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgU2VsZWN0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0U2VsZWN0QXBwZWFyYW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIFNlbGVjdEFwcGVhcmFuY2VzLmRlZmF1bHRcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBTZWxlY3RgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRTZWxlY3RBcHBlYXJhbmNlKVxuIl19