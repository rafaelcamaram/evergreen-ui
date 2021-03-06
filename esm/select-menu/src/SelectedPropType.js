import PropTypes from 'prop-types';
/**
 * Selected can either be a string (single values)
 * or an array of string (multiple values)
 * NOTE: multiple values are not supported atm
 */

var SelectedPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]);
export default SelectedPropType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0ZWRQcm9wVHlwZS5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJTZWxlY3RlZFByb3BUeXBlIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUVBOzs7Ozs7QUFLQSxJQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CLENBQzNDRixTQUFTLENBQUNHLE1BRGlDLEVBRTNDSCxTQUFTLENBQUNJLE9BQVYsQ0FBa0JKLFNBQVMsQ0FBQ0csTUFBNUIsQ0FGMkMsQ0FBcEIsQ0FBekI7QUFLQSxlQUFlRixnQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLyoqXG4gKiBTZWxlY3RlZCBjYW4gZWl0aGVyIGJlIGEgc3RyaW5nIChzaW5nbGUgdmFsdWVzKVxuICogb3IgYW4gYXJyYXkgb2Ygc3RyaW5nIChtdWx0aXBsZSB2YWx1ZXMpXG4gKiBOT1RFOiBtdWx0aXBsZSB2YWx1ZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYXRtXG4gKi9cbmNvbnN0IFNlbGVjdGVkUHJvcFR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGVkUHJvcFR5cGVcbiJdfQ==