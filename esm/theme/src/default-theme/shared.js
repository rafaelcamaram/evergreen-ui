import { linearGradient } from './helpers';
import scales from './foundational-styles/scales';
var defaultControlStyles = {
  disabled: {
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: scales.neutral.N2A,
    boxShadow: 'none',
    color: scales.neutral.N7A,
    pointerEvents: 'none'
  },
  base: {
    backgroundColor: 'white',
    backgroundImage: linearGradient('#FFFFFF', '#F4F5F7'),
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
  },
  hover: {
    backgroundImage: linearGradient('#FAFBFB', '#EAECEE')
  },
  focus: {
    boxShadow: "0 0 0 3px ".concat(scales.blue.B4A, ", inset 0 0 0 1px ").concat(scales.neutral.N5A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N4A)
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: scales.blue.B3A,
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
  },
  focusAndActive: {
    boxShadow: "0 0 0 3px ".concat(scales.blue.B4A, ", inset 0 0 0 1px ").concat(scales.neutral.N5A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
  } // Can't figure out to disable rule for xo linter.

};
var ignore = null;
export { defaultControlStyles, ignore };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9zaGFyZWQuanMiXSwibmFtZXMiOlsibGluZWFyR3JhZGllbnQiLCJzY2FsZXMiLCJkZWZhdWx0Q29udHJvbFN0eWxlcyIsImRpc2FibGVkIiwib3BhY2l0eSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRDb2xvciIsIm5ldXRyYWwiLCJOMkEiLCJib3hTaGFkb3ciLCJjb2xvciIsIk43QSIsInBvaW50ZXJFdmVudHMiLCJiYXNlIiwiTjRBIiwiaG92ZXIiLCJmb2N1cyIsImJsdWUiLCJCNEEiLCJONUEiLCJhY3RpdmUiLCJCM0EiLCJmb2N1c0FuZEFjdGl2ZSIsImlnbm9yZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsY0FBVCxRQUErQixXQUEvQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsOEJBQW5CO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUc7QUFDM0JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUUsR0FERDtBQUVSQyxJQUFBQSxlQUFlLEVBQUUsTUFGVDtBQUdSQyxJQUFBQSxlQUFlLEVBQUVMLE1BQU0sQ0FBQ00sT0FBUCxDQUFlQyxHQUh4QjtBQUlSQyxJQUFBQSxTQUFTLEVBQUUsTUFKSDtBQUtSQyxJQUFBQSxLQUFLLEVBQUVULE1BQU0sQ0FBQ00sT0FBUCxDQUFlSSxHQUxkO0FBTVJDLElBQUFBLGFBQWEsRUFBRTtBQU5QLEdBRGlCO0FBUzNCQyxFQUFBQSxJQUFJLEVBQUU7QUFDSlAsSUFBQUEsZUFBZSxFQUFFLE9BRGI7QUFFSkQsSUFBQUEsZUFBZSxFQUFFTCxjQUFjLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FGM0I7QUFHSlMsSUFBQUEsU0FBUyw0QkFBcUJSLE1BQU0sQ0FBQ00sT0FBUCxDQUFlTyxHQUFwQyxrQ0FDUGIsTUFBTSxDQUFDTSxPQUFQLENBQWVDLEdBRFI7QUFITCxHQVRxQjtBQWdCM0JPLEVBQUFBLEtBQUssRUFBRTtBQUNMVixJQUFBQSxlQUFlLEVBQUVMLGNBQWMsQ0FBQyxTQUFELEVBQVksU0FBWjtBQUQxQixHQWhCb0I7QUFtQjNCZ0IsRUFBQUEsS0FBSyxFQUFFO0FBQ0xQLElBQUFBLFNBQVMsc0JBQWVSLE1BQU0sQ0FBQ2dCLElBQVAsQ0FBWUMsR0FBM0IsK0JBQ1BqQixNQUFNLENBQUNNLE9BQVAsQ0FBZVksR0FEUixrQ0FFZWxCLE1BQU0sQ0FBQ00sT0FBUCxDQUFlTyxHQUY5QjtBQURKLEdBbkJvQjtBQXdCM0JNLEVBQUFBLE1BQU0sRUFBRTtBQUNOZixJQUFBQSxlQUFlLEVBQUUsTUFEWDtBQUVOQyxJQUFBQSxlQUFlLEVBQUVMLE1BQU0sQ0FBQ2dCLElBQVAsQ0FBWUksR0FGdkI7QUFHTlosSUFBQUEsU0FBUyw0QkFBcUJSLE1BQU0sQ0FBQ00sT0FBUCxDQUFlTyxHQUFwQyxpQ0FDUGIsTUFBTSxDQUFDTSxPQUFQLENBQWVDLEdBRFI7QUFISCxHQXhCbUI7QUErQjNCYyxFQUFBQSxjQUFjLEVBQUU7QUFDZGIsSUFBQUEsU0FBUyxzQkFBZVIsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZQyxHQUEzQiwrQkFDUGpCLE1BQU0sQ0FBQ00sT0FBUCxDQUFlWSxHQURSLGlDQUVjbEIsTUFBTSxDQUFDTSxPQUFQLENBQWVDLEdBRjdCO0FBREssR0EvQlcsQ0FzQzdCOztBQXRDNkIsQ0FBN0I7QUF1Q0EsSUFBTWUsTUFBTSxHQUFHLElBQWY7QUFFQSxTQUFTckIsb0JBQVQsRUFBK0JxQixNQUEvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpbmVhckdyYWRpZW50IH0gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuXG5jb25zdCBkZWZhdWx0Q29udHJvbFN0eWxlcyA9IHtcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiAwLjgsXG4gICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMkEsXG4gICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgY29sb3I6IHNjYWxlcy5uZXV0cmFsLk43QSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSxcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50KCcjRkZGRkZGJywgJyNGNEY1RjcnKSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk4yQVxuICAgIH1gXG4gIH0sXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBsaW5lYXJHcmFkaWVudCgnI0ZBRkJGQicsICcjRUFFQ0VFJylcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtzY2FsZXMuYmx1ZS5CNEF9LCBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk41QVxuICAgIH0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk40QX1gXG4gIH0sXG4gIGFjdGl2ZToge1xuICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjNBLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgMXB4IDFweCAwICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OMkFcbiAgICB9YFxuICB9LFxuICBmb2N1c0FuZEFjdGl2ZToge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke3NjYWxlcy5ibHVlLkI0QX0sIGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjVBXG4gICAgfSwgaW5zZXQgMCAxcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICB9XG59XG5cbi8vIENhbid0IGZpZ3VyZSBvdXQgdG8gZGlzYWJsZSBydWxlIGZvciB4byBsaW50ZXIuXG5jb25zdCBpZ25vcmUgPSBudWxsXG5cbmV4cG9ydCB7IGRlZmF1bHRDb250cm9sU3R5bGVzLCBpZ25vcmUgfVxuIl19