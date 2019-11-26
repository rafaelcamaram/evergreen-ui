import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
import palette from '../foundational-styles/palette';
var TagInputAppearances = {};
TagInputAppearances.default = Themer.createTagInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 1px 2px ").concat(scales.neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(palette.red.base, ", inset 0 1px 2px ").concat(scales.neutral.N4A)
  },
  focus: {
    boxShadow: "inset 0 0 2px ".concat(scales.neutral.N4A, ", inset 0 0 0 1px ").concat(scales.blue.B7, ", 0 0 0 3px ").concat(scales.blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A),
    backgroundColor: scales.neutral.N2
  }
});
/**
 * Get the appearance of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */

var getTextInputAppearance = function getTextInputAppearance() {
  return TagInputAppearances.default;
};
/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getTextInputAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGFnSW5wdXRDbGFzc05hbWUuanMiXSwibmFtZXMiOlsiVGhlbWVyIiwibWVtb2l6ZUNsYXNzTmFtZSIsInNjYWxlcyIsInBhbGV0dGUiLCJUYWdJbnB1dEFwcGVhcmFuY2VzIiwiZGVmYXVsdCIsImNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZSIsImJhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJuZXV0cmFsIiwiTjVBIiwiTjRBIiwiaW52YWxpZCIsInJlZCIsImZvY3VzIiwiYmx1ZSIsIkI3IiwiQjRBIiwiZGlzYWJsZWQiLCJOMiIsImdldFRleHRJbnB1dEFwcGVhcmFuY2UiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQVQsUUFBdUIsb0JBQXZCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsMkJBQTdCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGdDQUFwQjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLEVBQTVCO0FBRUFBLG1CQUFtQixDQUFDQyxPQUFwQixHQUE4QkwsTUFBTSxDQUFDTSx3QkFBUCxDQUFnQztBQUM1REMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGVBQWUsRUFBRSxPQURiO0FBRUpDLElBQUFBLFNBQVMsNEJBQXFCUCxNQUFNLENBQUNRLE9BQVAsQ0FBZUMsR0FBcEMsK0JBQ1BULE1BQU0sQ0FBQ1EsT0FBUCxDQUFlRSxHQURSO0FBRkwsR0FEc0Q7QUFPNURDLEVBQUFBLE9BQU8sRUFBRTtBQUNQSixJQUFBQSxTQUFTLDRCQUFxQk4sT0FBTyxDQUFDVyxHQUFSLENBQVlQLElBQWpDLCtCQUNQTCxNQUFNLENBQUNRLE9BQVAsQ0FBZUUsR0FEUjtBQURGLEdBUG1EO0FBWTVERyxFQUFBQSxLQUFLLEVBQUU7QUFDTE4sSUFBQUEsU0FBUywwQkFBbUJQLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlRSxHQUFsQywrQkFDUFYsTUFBTSxDQUFDYyxJQUFQLENBQVlDLEVBREwseUJBRU1mLE1BQU0sQ0FBQ2MsSUFBUCxDQUFZRSxHQUZsQjtBQURKLEdBWnFEO0FBaUI1REMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JWLElBQUFBLFNBQVMsNEJBQXFCUCxNQUFNLENBQUNRLE9BQVAsQ0FBZUUsR0FBcEMsQ0FERDtBQUVSSixJQUFBQSxlQUFlLEVBQUVOLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlVTtBQUZ4QjtBQWpCa0QsQ0FBaEMsQ0FBOUI7QUF1QkE7Ozs7OztBQUtBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUNuQyxTQUFPakIsbUJBQW1CLENBQUNDLE9BQTNCO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7O0FBS0EsZUFBZUosZ0JBQWdCLENBQUNvQixzQkFBRCxDQUEvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBUYWdJbnB1dEFwcGVhcmFuY2VzID0ge31cblxuVGFnSW5wdXRBcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjVBfSwgaW5zZXQgMCAxcHggMnB4ICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICB9YFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgfWBcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMnB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICBzY2FsZXMuYmx1ZS5CN1xuICAgIH0sIDAgMCAwIDNweCAke3NjYWxlcy5ibHVlLkI0QX1gXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMlxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBUYWdJbnB1dGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIHRoZSBhcHBlYXJhbmNlIG5hbWVcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRUZXh0SW5wdXRBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gVGFnSW5wdXRBcHBlYXJhbmNlcy5kZWZhdWx0XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgVGFnSW5wdXRgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSB0aGUgYXBwZWFyYW5jZSBuYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0VGV4dElucHV0QXBwZWFyYW5jZSlcbiJdfQ==