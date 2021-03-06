import isDev from './isDev';
import hasOwnProperty from './hasOwnProperty';

function missingStateWarning(_ref) {
  var items = _ref.items,
      props = _ref.props,
      cb = _ref.cb;
  if (!isDev) return;
  props.forEach(function (prop) {
    if (!hasOwnProperty(items, prop)) {
      cb(prop);
    }
  });
}

export default missingStateWarning;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL21pc3NpbmdTdGF0ZVdhcm5pbmcuanMiXSwibmFtZXMiOlsiaXNEZXYiLCJoYXNPd25Qcm9wZXJ0eSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJpdGVtcyIsInByb3BzIiwiY2IiLCJmb3JFYWNoIiwicHJvcCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixTQUFsQjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsa0JBQTNCOztBQUVBLFNBQVNDLG1CQUFULE9BQW1EO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLEtBQWEsUUFBYkEsS0FBYTtBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTtBQUNqRCxNQUFJLENBQUNMLEtBQUwsRUFBWTtBQUNaSSxFQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDcEIsUUFBSSxDQUFDTixjQUFjLENBQUNFLEtBQUQsRUFBUUksSUFBUixDQUFuQixFQUFrQztBQUNoQ0YsTUFBQUEsRUFBRSxDQUFDRSxJQUFELENBQUY7QUFDRDtBQUNGLEdBSkQ7QUFLRDs7QUFFRCxlQUFlTCxtQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0RldiBmcm9tICcuL2lzRGV2J1xuaW1wb3J0IGhhc093blByb3BlcnR5IGZyb20gJy4vaGFzT3duUHJvcGVydHknXG5cbmZ1bmN0aW9uIG1pc3NpbmdTdGF0ZVdhcm5pbmcoeyBpdGVtcywgcHJvcHMsIGNiIH0pIHtcbiAgaWYgKCFpc0RldikgcmV0dXJuXG4gIHByb3BzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShpdGVtcywgcHJvcCkpIHtcbiAgICAgIGNiKHByb3ApXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtaXNzaW5nU3RhdGVXYXJuaW5nXG4iXX0=