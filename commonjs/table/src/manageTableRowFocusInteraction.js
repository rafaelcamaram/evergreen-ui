"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = manageTableRowFocusInteraction;

/**
 * Function to help with focus management for selectable table rows.
 * @param {Object} key - React `event.key`.
 * @param {Element} ref - the cell to manage focus interaction for.
 */
function manageTableRowFocusInteraction(key, ref) {
  var nextItemToFocus; // eslint-disable-next-line unicorn/prefer-spread

  var tableBodyChildren = Array.from(ref.parentElement.children);
  var rowIndex = tableBodyChildren.indexOf(ref);

  if (key === 'ArrowUp' && rowIndex - 1 >= 0) {
    nextItemToFocus = tableBodyChildren[rowIndex - 1];
  } else if (key === 'ArrowDown' && rowIndex + 1 < tableBodyChildren.length) {
    nextItemToFocus = tableBodyChildren[rowIndex + 1];
  }

  if (nextItemToFocus && nextItemToFocus.hasAttribute('tabindex')) {
    nextItemToFocus.focus();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvbWFuYWdlVGFibGVSb3dGb2N1c0ludGVyYWN0aW9uLmpzIl0sIm5hbWVzIjpbIm1hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbiIsImtleSIsInJlZiIsIm5leHRJdGVtVG9Gb2N1cyIsInRhYmxlQm9keUNoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIiwicm93SW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwiaGFzQXR0cmlidXRlIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFLZSxTQUFTQSw4QkFBVCxDQUF3Q0MsR0FBeEMsRUFBNkNDLEdBQTdDLEVBQWtEO0FBQy9ELE1BQUlDLGVBQUosQ0FEK0QsQ0FFL0Q7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixHQUFHLENBQUNLLGFBQUosQ0FBa0JDLFFBQTdCLENBQTFCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHTCxpQkFBaUIsQ0FBQ00sT0FBbEIsQ0FBMEJSLEdBQTFCLENBQWpCOztBQUVBLE1BQUlELEdBQUcsS0FBSyxTQUFSLElBQXFCUSxRQUFRLEdBQUcsQ0FBWCxJQUFnQixDQUF6QyxFQUE0QztBQUMxQ04sSUFBQUEsZUFBZSxHQUFHQyxpQkFBaUIsQ0FBQ0ssUUFBUSxHQUFHLENBQVosQ0FBbkM7QUFDRCxHQUZELE1BRU8sSUFBSVIsR0FBRyxLQUFLLFdBQVIsSUFBdUJRLFFBQVEsR0FBRyxDQUFYLEdBQWVMLGlCQUFpQixDQUFDTyxNQUE1RCxFQUFvRTtBQUN6RVIsSUFBQUEsZUFBZSxHQUFHQyxpQkFBaUIsQ0FBQ0ssUUFBUSxHQUFHLENBQVosQ0FBbkM7QUFDRDs7QUFFRCxNQUFJTixlQUFlLElBQUlBLGVBQWUsQ0FBQ1MsWUFBaEIsQ0FBNkIsVUFBN0IsQ0FBdkIsRUFBaUU7QUFDL0RULElBQUFBLGVBQWUsQ0FBQ1UsS0FBaEI7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGdW5jdGlvbiB0byBoZWxwIHdpdGggZm9jdXMgbWFuYWdlbWVudCBmb3Igc2VsZWN0YWJsZSB0YWJsZSByb3dzLlxuICogQHBhcmFtIHtPYmplY3R9IGtleSAtIFJlYWN0IGBldmVudC5rZXlgLlxuICogQHBhcmFtIHtFbGVtZW50fSByZWYgLSB0aGUgY2VsbCB0byBtYW5hZ2UgZm9jdXMgaW50ZXJhY3Rpb24gZm9yLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24oa2V5LCByZWYpIHtcbiAgbGV0IG5leHRJdGVtVG9Gb2N1c1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItc3ByZWFkXG4gIGNvbnN0IHRhYmxlQm9keUNoaWxkcmVuID0gQXJyYXkuZnJvbShyZWYucGFyZW50RWxlbWVudC5jaGlsZHJlbilcbiAgY29uc3Qgcm93SW5kZXggPSB0YWJsZUJvZHlDaGlsZHJlbi5pbmRleE9mKHJlZilcblxuICBpZiAoa2V5ID09PSAnQXJyb3dVcCcgJiYgcm93SW5kZXggLSAxID49IDApIHtcbiAgICBuZXh0SXRlbVRvRm9jdXMgPSB0YWJsZUJvZHlDaGlsZHJlbltyb3dJbmRleCAtIDFdXG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJyAmJiByb3dJbmRleCArIDEgPCB0YWJsZUJvZHlDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBuZXh0SXRlbVRvRm9jdXMgPSB0YWJsZUJvZHlDaGlsZHJlbltyb3dJbmRleCArIDFdXG4gIH1cblxuICBpZiAobmV4dEl0ZW1Ub0ZvY3VzICYmIG5leHRJdGVtVG9Gb2N1cy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICBuZXh0SXRlbVRvRm9jdXMuZm9jdXMoKVxuICB9XG59XG4iXX0=