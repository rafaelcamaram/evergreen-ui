var previousOverflow;
var previousPaddingRight;
/**
 * Toggle the body scroll / overflow and additional styling
 * necessary to preserve scroll position and body width (scrollbar replacement)
 *
 * @param {boolean} preventScroll - whether or not to prevent body scrolling
 */

export default function preventBodyScroll(preventScroll) {
  /** Get the width before toggling the style so we can calculate the scrollbar width for a smooth, jankless style change */
  var _document$body$getBou = document.body.getBoundingClientRect(),
      width = _document$body$getBou.width;
  /** Apply or remove overflow style */


  if (preventScroll) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = previousOverflow || '';
  }
  /** Get the _new width_ of the body (this will tell us the scrollbar width) */


  var newWidth = document.body.getBoundingClientRect().width;
  var scrollBarWidth = newWidth - width;
  /** If there's a diff due to scrollbars, then account for it with padding */

  if (preventScroll) {
    previousPaddingRight = document.body.style.paddingRight;
    document.body.style.paddingRight = Math.max(0, scrollBarWidth || 0) + 'px';
  } else {
    document.body.style.paddingRight = previousPaddingRight || '';
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvcHJldmVudC1ib2R5LXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJwcmV2aW91c092ZXJmbG93IiwicHJldmlvdXNQYWRkaW5nUmlnaHQiLCJwcmV2ZW50Qm9keVNjcm9sbCIsInByZXZlbnRTY3JvbGwiLCJkb2N1bWVudCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInN0eWxlIiwib3ZlcmZsb3ciLCJuZXdXaWR0aCIsInNjcm9sbEJhcldpZHRoIiwicGFkZGluZ1JpZ2h0IiwiTWF0aCIsIm1heCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsZ0JBQUo7QUFDQSxJQUFJQyxvQkFBSjtBQUVBOzs7Ozs7O0FBTUEsZUFBZSxTQUFTQyxpQkFBVCxDQUEyQkMsYUFBM0IsRUFBMEM7QUFDdkQ7QUFEdUQsOEJBRXJDQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MscUJBQWQsRUFGcUM7QUFBQSxNQUUvQ0MsS0FGK0MseUJBRS9DQSxLQUYrQztBQUl2RDs7O0FBQ0EsTUFBSUosYUFBSixFQUFtQjtBQUNqQkgsSUFBQUEsZ0JBQWdCLEdBQUdJLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRyxLQUFkLENBQW9CQyxRQUF2QztBQUNBTCxJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0csS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFDRCxHQUhELE1BR087QUFDTEwsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNHLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCVCxnQkFBZ0IsSUFBSSxFQUFuRDtBQUNEO0FBRUQ7OztBQUNBLE1BQU1VLFFBQVEsR0FBR04sUUFBUSxDQUFDQyxJQUFULENBQWNDLHFCQUFkLEdBQXNDQyxLQUF2RDtBQUNBLE1BQU1JLGNBQWMsR0FBR0QsUUFBUSxHQUFHSCxLQUFsQztBQUVBOztBQUNBLE1BQUlKLGFBQUosRUFBbUI7QUFDakJGLElBQUFBLG9CQUFvQixHQUFHRyxRQUFRLENBQUNDLElBQVQsQ0FBY0csS0FBZCxDQUFvQkksWUFBM0M7QUFDQVIsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNHLEtBQWQsQ0FBb0JJLFlBQXBCLEdBQW1DQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlILGNBQWMsSUFBSSxDQUE5QixJQUFtQyxJQUF0RTtBQUNELEdBSEQsTUFHTztBQUNMUCxJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0csS0FBZCxDQUFvQkksWUFBcEIsR0FBbUNYLG9CQUFvQixJQUFJLEVBQTNEO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImxldCBwcmV2aW91c092ZXJmbG93XG5sZXQgcHJldmlvdXNQYWRkaW5nUmlnaHRcblxuLyoqXG4gKiBUb2dnbGUgdGhlIGJvZHkgc2Nyb2xsIC8gb3ZlcmZsb3cgYW5kIGFkZGl0aW9uYWwgc3R5bGluZ1xuICogbmVjZXNzYXJ5IHRvIHByZXNlcnZlIHNjcm9sbCBwb3NpdGlvbiBhbmQgYm9keSB3aWR0aCAoc2Nyb2xsYmFyIHJlcGxhY2VtZW50KVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJldmVudFNjcm9sbCAtIHdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgYm9keSBzY3JvbGxpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmVudEJvZHlTY3JvbGwocHJldmVudFNjcm9sbCkge1xuICAvKiogR2V0IHRoZSB3aWR0aCBiZWZvcmUgdG9nZ2xpbmcgdGhlIHN0eWxlIHNvIHdlIGNhbiBjYWxjdWxhdGUgdGhlIHNjcm9sbGJhciB3aWR0aCBmb3IgYSBzbW9vdGgsIGphbmtsZXNzIHN0eWxlIGNoYW5nZSAqL1xuICBjb25zdCB7IHdpZHRoIH0gPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgLyoqIEFwcGx5IG9yIHJlbW92ZSBvdmVyZmxvdyBzdHlsZSAqL1xuICBpZiAocHJldmVudFNjcm9sbCkge1xuICAgIHByZXZpb3VzT3ZlcmZsb3cgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHByZXZpb3VzT3ZlcmZsb3cgfHwgJydcbiAgfVxuXG4gIC8qKiBHZXQgdGhlIF9uZXcgd2lkdGhfIG9mIHRoZSBib2R5ICh0aGlzIHdpbGwgdGVsbCB1cyB0aGUgc2Nyb2xsYmFyIHdpZHRoKSAqL1xuICBjb25zdCBuZXdXaWR0aCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgY29uc3Qgc2Nyb2xsQmFyV2lkdGggPSBuZXdXaWR0aCAtIHdpZHRoXG5cbiAgLyoqIElmIHRoZXJlJ3MgYSBkaWZmIGR1ZSB0byBzY3JvbGxiYXJzLCB0aGVuIGFjY291bnQgZm9yIGl0IHdpdGggcGFkZGluZyAqL1xuICBpZiAocHJldmVudFNjcm9sbCkge1xuICAgIHByZXZpb3VzUGFkZGluZ1JpZ2h0ID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IE1hdGgubWF4KDAsIHNjcm9sbEJhcldpZHRoIHx8IDApICsgJ3B4J1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcHJldmlvdXNQYWRkaW5nUmlnaHQgfHwgJydcbiAgfVxufVxuIl19