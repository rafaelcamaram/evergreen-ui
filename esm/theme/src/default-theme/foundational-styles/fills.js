import palette from './palette';
import colors from './colors';
/**
 * Fills are used in Avatars and Badges.
 */

var fills = {};
fills.solid = {
  neutral: {
    color: 'white',
    backgroundColor: palette.neutral.base
  },
  blue: {
    color: 'white',
    backgroundColor: palette.blue.base
  },
  red: {
    color: 'white',
    backgroundColor: palette.red.base
  },
  orange: {
    color: 'white',
    backgroundColor: palette.orange.base
  },
  yellow: {
    color: palette.yellow.dark,
    backgroundColor: palette.yellow.base
  },
  green: {
    color: 'white',
    backgroundColor: palette.green.base
  },
  teal: {
    color: 'white',
    backgroundColor: palette.teal.base
  },
  purple: {
    color: 'white',
    backgroundColor: palette.purple.base
  }
};
fills.subtle = {
  neutral: {
    color: colors.text.default,
    backgroundColor: palette.neutral.light
  },
  blue: {
    color: palette.blue.dark,
    backgroundColor: palette.blue.light
  },
  red: {
    color: palette.red.dark,
    backgroundColor: palette.red.light
  },
  orange: {
    color: palette.orange.dark,
    backgroundColor: palette.orange.light
  },
  yellow: {
    color: palette.yellow.dark,
    backgroundColor: palette.yellow.light
  },
  green: {
    color: palette.green.dark,
    backgroundColor: palette.green.light
  },
  teal: {
    color: palette.teal.dark,
    backgroundColor: palette.teal.light
  },
  purple: {
    color: palette.purple.dark,
    backgroundColor: palette.purple.light
  }
};
fills.options = Object.keys(fills.solid);
export default fills;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9mb3VuZGF0aW9uYWwtc3R5bGVzL2ZpbGxzLmpzIl0sIm5hbWVzIjpbInBhbGV0dGUiLCJjb2xvcnMiLCJmaWxscyIsInNvbGlkIiwibmV1dHJhbCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYmFzZSIsImJsdWUiLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJkYXJrIiwiZ3JlZW4iLCJ0ZWFsIiwicHVycGxlIiwic3VidGxlIiwidGV4dCIsImRlZmF1bHQiLCJsaWdodCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxPQUFQLE1BQW9CLFdBQXBCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjtBQUVBOzs7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFFQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWM7QUFDWkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRSxPQURBO0FBRVBDLElBQUFBLGVBQWUsRUFBRU4sT0FBTyxDQUFDSSxPQUFSLENBQWdCRztBQUYxQixHQURHO0FBS1pDLEVBQUFBLElBQUksRUFBRTtBQUNKSCxJQUFBQSxLQUFLLEVBQUUsT0FESDtBQUVKQyxJQUFBQSxlQUFlLEVBQUVOLE9BQU8sQ0FBQ1EsSUFBUixDQUFhRDtBQUYxQixHQUxNO0FBU1pFLEVBQUFBLEdBQUcsRUFBRTtBQUNISixJQUFBQSxLQUFLLEVBQUUsT0FESjtBQUVIQyxJQUFBQSxlQUFlLEVBQUVOLE9BQU8sQ0FBQ1MsR0FBUixDQUFZRjtBQUYxQixHQVRPO0FBYVpHLEVBQUFBLE1BQU0sRUFBRTtBQUNOTCxJQUFBQSxLQUFLLEVBQUUsT0FERDtBQUVOQyxJQUFBQSxlQUFlLEVBQUVOLE9BQU8sQ0FBQ1UsTUFBUixDQUFlSDtBQUYxQixHQWJJO0FBaUJaSSxFQUFBQSxNQUFNLEVBQUU7QUFDTk4sSUFBQUEsS0FBSyxFQUFFTCxPQUFPLENBQUNXLE1BQVIsQ0FBZUMsSUFEaEI7QUFFTk4sSUFBQUEsZUFBZSxFQUFFTixPQUFPLENBQUNXLE1BQVIsQ0FBZUo7QUFGMUIsR0FqQkk7QUFxQlpNLEVBQUFBLEtBQUssRUFBRTtBQUNMUixJQUFBQSxLQUFLLEVBQUUsT0FERjtBQUVMQyxJQUFBQSxlQUFlLEVBQUVOLE9BQU8sQ0FBQ2EsS0FBUixDQUFjTjtBQUYxQixHQXJCSztBQXlCWk8sRUFBQUEsSUFBSSxFQUFFO0FBQ0pULElBQUFBLEtBQUssRUFBRSxPQURIO0FBRUpDLElBQUFBLGVBQWUsRUFBRU4sT0FBTyxDQUFDYyxJQUFSLENBQWFQO0FBRjFCLEdBekJNO0FBNkJaUSxFQUFBQSxNQUFNLEVBQUU7QUFDTlYsSUFBQUEsS0FBSyxFQUFFLE9BREQ7QUFFTkMsSUFBQUEsZUFBZSxFQUFFTixPQUFPLENBQUNlLE1BQVIsQ0FBZVI7QUFGMUI7QUE3QkksQ0FBZDtBQW1DQUwsS0FBSyxDQUFDYyxNQUFOLEdBQWU7QUFDYlosRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRUosTUFBTSxDQUFDZ0IsSUFBUCxDQUFZQyxPQURaO0FBRVBaLElBQUFBLGVBQWUsRUFBRU4sT0FBTyxDQUFDSSxPQUFSLENBQWdCZTtBQUYxQixHQURJO0FBS2JYLEVBQUFBLElBQUksRUFBRTtBQUNKSCxJQUFBQSxLQUFLLEVBQUVMLE9BQU8sQ0FBQ1EsSUFBUixDQUFhSSxJQURoQjtBQUVKTixJQUFBQSxlQUFlLEVBQUVOLE9BQU8sQ0FBQ1EsSUFBUixDQUFhVztBQUYxQixHQUxPO0FBU2JWLEVBQUFBLEdBQUcsRUFBRTtBQUNISixJQUFBQSxLQUFLLEVBQUVMLE9BQU8sQ0FBQ1MsR0FBUixDQUFZRyxJQURoQjtBQUVITixJQUFBQSxlQUFlLEVBQUVOLE9BQU8sQ0FBQ1MsR0FBUixDQUFZVTtBQUYxQixHQVRRO0FBYWJULEVBQUFBLE1BQU0sRUFBRTtBQUNOTCxJQUFBQSxLQUFLLEVBQUVMLE9BQU8sQ0FBQ1UsTUFBUixDQUFlRSxJQURoQjtBQUVOTixJQUFBQSxlQUFlLEVBQUVOLE9BQU8sQ0FBQ1UsTUFBUixDQUFlUztBQUYxQixHQWJLO0FBaUJiUixFQUFBQSxNQUFNLEVBQUU7QUFDTk4sSUFBQUEsS0FBSyxFQUFFTCxPQUFPLENBQUNXLE1BQVIsQ0FBZUMsSUFEaEI7QUFFTk4sSUFBQUEsZUFBZSxFQUFFTixPQUFPLENBQUNXLE1BQVIsQ0FBZVE7QUFGMUIsR0FqQks7QUFxQmJOLEVBQUFBLEtBQUssRUFBRTtBQUNMUixJQUFBQSxLQUFLLEVBQUVMLE9BQU8sQ0FBQ2EsS0FBUixDQUFjRCxJQURoQjtBQUVMTixJQUFBQSxlQUFlLEVBQUVOLE9BQU8sQ0FBQ2EsS0FBUixDQUFjTTtBQUYxQixHQXJCTTtBQXlCYkwsRUFBQUEsSUFBSSxFQUFFO0FBQ0pULElBQUFBLEtBQUssRUFBRUwsT0FBTyxDQUFDYyxJQUFSLENBQWFGLElBRGhCO0FBRUpOLElBQUFBLGVBQWUsRUFBRU4sT0FBTyxDQUFDYyxJQUFSLENBQWFLO0FBRjFCLEdBekJPO0FBNkJiSixFQUFBQSxNQUFNLEVBQUU7QUFDTlYsSUFBQUEsS0FBSyxFQUFFTCxPQUFPLENBQUNlLE1BQVIsQ0FBZUgsSUFEaEI7QUFFTk4sSUFBQUEsZUFBZSxFQUFFTixPQUFPLENBQUNlLE1BQVIsQ0FBZUk7QUFGMUI7QUE3QkssQ0FBZjtBQW1DQWpCLEtBQUssQ0FBQ2tCLE9BQU4sR0FBZ0JDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZcEIsS0FBSyxDQUFDQyxLQUFsQixDQUFoQjtBQUVBLGVBQWVELEtBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJ1xuXG4vKipcbiAqIEZpbGxzIGFyZSB1c2VkIGluIEF2YXRhcnMgYW5kIEJhZGdlcy5cbiAqL1xuY29uc3QgZmlsbHMgPSB7fVxuXG5maWxscy5zb2xpZCA9IHtcbiAgbmV1dHJhbDoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5uZXV0cmFsLmJhc2VcbiAgfSxcbiAgYmx1ZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ibHVlLmJhc2VcbiAgfSxcbiAgcmVkOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnJlZC5iYXNlXG4gIH0sXG4gIG9yYW5nZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5vcmFuZ2UuYmFzZVxuICB9LFxuICB5ZWxsb3c6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS55ZWxsb3cuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUueWVsbG93LmJhc2VcbiAgfSxcbiAgZ3JlZW46IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JlZW4uYmFzZVxuICB9LFxuICB0ZWFsOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnRlYWwuYmFzZVxuICB9LFxuICBwdXJwbGU6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUucHVycGxlLmJhc2VcbiAgfVxufVxuXG5maWxscy5zdWJ0bGUgPSB7XG4gIG5ldXRyYWw6IHtcbiAgICBjb2xvcjogY29sb3JzLnRleHQuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUubmV1dHJhbC5saWdodFxuICB9LFxuICBibHVlOiB7XG4gICAgY29sb3I6IHBhbGV0dGUuYmx1ZS5kYXJrLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ibHVlLmxpZ2h0XG4gIH0sXG4gIHJlZDoge1xuICAgIGNvbG9yOiBwYWxldHRlLnJlZC5kYXJrLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5yZWQubGlnaHRcbiAgfSxcbiAgb3JhbmdlOiB7XG4gICAgY29sb3I6IHBhbGV0dGUub3JhbmdlLmRhcmssXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLm9yYW5nZS5saWdodFxuICB9LFxuICB5ZWxsb3c6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS55ZWxsb3cuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUueWVsbG93LmxpZ2h0XG4gIH0sXG4gIGdyZWVuOiB7XG4gICAgY29sb3I6IHBhbGV0dGUuZ3JlZW4uZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JlZW4ubGlnaHRcbiAgfSxcbiAgdGVhbDoge1xuICAgIGNvbG9yOiBwYWxldHRlLnRlYWwuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUudGVhbC5saWdodFxuICB9LFxuICBwdXJwbGU6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS5wdXJwbGUuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUucHVycGxlLmxpZ2h0XG4gIH1cbn1cblxuZmlsbHMub3B0aW9ucyA9IE9iamVjdC5rZXlzKGZpbGxzLnNvbGlkKVxuXG5leHBvcnQgZGVmYXVsdCBmaWxsc1xuIl19