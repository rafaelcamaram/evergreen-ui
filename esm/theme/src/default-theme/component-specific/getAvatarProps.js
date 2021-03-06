import fills from '../foundational-styles/fills';
/**
 * @param {boolean} isSolid
 * @param {string} color — automatic or actual color
 * @param {number} hashValue
 * @return {Object} { color, backgroundColor }
 */

var getAvatarProps = function getAvatarProps(_ref) {
  var isSolid = _ref.isSolid,
      color = _ref.color,
      hashValue = _ref.hashValue;
  var appearances = fills[isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    var keys = Object.keys(appearances);
    var key = keys[hashValue % keys.length];
    return appearances[key];
  }

  return appearances[color];
};

export default getAvatarProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QXZhdGFyUHJvcHMuanMiXSwibmFtZXMiOlsiZmlsbHMiLCJnZXRBdmF0YXJQcm9wcyIsImlzU29saWQiLCJjb2xvciIsImhhc2hWYWx1ZSIsImFwcGVhcmFuY2VzIiwia2V5cyIsIk9iamVjdCIsImtleSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQiw4QkFBbEI7QUFFQTs7Ozs7OztBQU1BLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBbUM7QUFBQSxNQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDeEQsTUFBTUMsV0FBVyxHQUFHTCxLQUFLLENBQUNFLE9BQU8sR0FBRyxPQUFILEdBQWEsUUFBckIsQ0FBekI7O0FBRUEsTUFBSUMsS0FBSyxLQUFLLFdBQWQsRUFBMkI7QUFDekIsUUFBTUcsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWUQsV0FBWixDQUFiO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixJQUFJLENBQUNGLFNBQVMsR0FBR0UsSUFBSSxDQUFDRyxNQUFsQixDQUFoQjtBQUNBLFdBQU9KLFdBQVcsQ0FBQ0csR0FBRCxDQUFsQjtBQUNEOztBQUVELFNBQU9ILFdBQVcsQ0FBQ0YsS0FBRCxDQUFsQjtBQUNELENBVkQ7O0FBWUEsZUFBZUYsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaWxscyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL2ZpbGxzJ1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTb2xpZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIOKAlCBhdXRvbWF0aWMgb3IgYWN0dWFsIGNvbG9yXG4gKiBAcGFyYW0ge251bWJlcn0gaGFzaFZhbHVlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHsgY29sb3IsIGJhY2tncm91bmRDb2xvciB9XG4gKi9cbmNvbnN0IGdldEF2YXRhclByb3BzID0gKHsgaXNTb2xpZCwgY29sb3IsIGhhc2hWYWx1ZSB9KSA9PiB7XG4gIGNvbnN0IGFwcGVhcmFuY2VzID0gZmlsbHNbaXNTb2xpZCA/ICdzb2xpZCcgOiAnc3VidGxlJ11cblxuICBpZiAoY29sb3IgPT09ICdhdXRvbWF0aWMnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFwcGVhcmFuY2VzKVxuICAgIGNvbnN0IGtleSA9IGtleXNbaGFzaFZhbHVlICUga2V5cy5sZW5ndGhdXG4gICAgcmV0dXJuIGFwcGVhcmFuY2VzW2tleV1cbiAgfVxuXG4gIHJldHVybiBhcHBlYXJhbmNlc1tjb2xvcl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXZhdGFyUHJvcHNcbiJdfQ==