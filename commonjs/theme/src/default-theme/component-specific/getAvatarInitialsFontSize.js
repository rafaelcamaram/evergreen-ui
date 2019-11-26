"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @param {number} size
 * @param {number} sizeLimitOneCharacter
 * @return {number} font size
 */
var getAvatarInitialsFontSize = function getAvatarInitialsFontSize(size, sizeLimitOneCharacter) {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2);
  }

  return Math.ceil(size / 2.6);
};

var _default = getAvatarInitialsFontSize;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZS5qcyJdLCJuYW1lcyI6WyJnZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplIiwic2l6ZSIsInNpemVMaW1pdE9uZUNoYXJhY3RlciIsIk1hdGgiLCJjZWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7O0FBS0EsSUFBTUEseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDQyxJQUFELEVBQU9DLHFCQUFQLEVBQWlDO0FBQ2pFLE1BQUlELElBQUksSUFBSUMscUJBQVosRUFBbUM7QUFDakMsV0FBT0MsSUFBSSxDQUFDQyxJQUFMLENBQVVILElBQUksR0FBRyxHQUFqQixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0UsSUFBSSxDQUFDQyxJQUFMLENBQVVILElBQUksR0FBRyxHQUFqQixDQUFQO0FBQ0QsQ0FORDs7ZUFRZUQseUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZUxpbWl0T25lQ2hhcmFjdGVyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGZvbnQgc2l6ZVxuICovXG5jb25zdCBnZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplID0gKHNpemUsIHNpemVMaW1pdE9uZUNoYXJhY3RlcikgPT4ge1xuICBpZiAoc2l6ZSA8PSBzaXplTGltaXRPbmVDaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHNpemUgLyAyLjIpXG4gIH1cblxuICByZXR1cm4gTWF0aC5jZWlsKHNpemUgLyAyLjYpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEF2YXRhckluaXRpYWxzRm9udFNpemVcbiJdfQ==