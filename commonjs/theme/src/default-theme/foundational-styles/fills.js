"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _palette = _interopRequireDefault(require("./palette"));

var _colors = _interopRequireDefault(require("./colors"));

/**
 * Fills are used in Avatars and Badges.
 */
var fills = {};
fills.solid = {
  neutral: {
    color: 'white',
    backgroundColor: _palette.default.neutral.base
  },
  blue: {
    color: 'white',
    backgroundColor: _palette.default.blue.base
  },
  red: {
    color: 'white',
    backgroundColor: _palette.default.red.base
  },
  orange: {
    color: 'white',
    backgroundColor: _palette.default.orange.base
  },
  yellow: {
    color: _palette.default.yellow.dark,
    backgroundColor: _palette.default.yellow.base
  },
  green: {
    color: 'white',
    backgroundColor: _palette.default.green.base
  },
  teal: {
    color: 'white',
    backgroundColor: _palette.default.teal.base
  },
  purple: {
    color: 'white',
    backgroundColor: _palette.default.purple.base
  }
};
fills.subtle = {
  neutral: {
    color: _colors.default.text.default,
    backgroundColor: _palette.default.neutral.light
  },
  blue: {
    color: _palette.default.blue.dark,
    backgroundColor: _palette.default.blue.light
  },
  red: {
    color: _palette.default.red.dark,
    backgroundColor: _palette.default.red.light
  },
  orange: {
    color: _palette.default.orange.dark,
    backgroundColor: _palette.default.orange.light
  },
  yellow: {
    color: _palette.default.yellow.dark,
    backgroundColor: _palette.default.yellow.light
  },
  green: {
    color: _palette.default.green.dark,
    backgroundColor: _palette.default.green.light
  },
  teal: {
    color: _palette.default.teal.dark,
    backgroundColor: _palette.default.teal.light
  },
  purple: {
    color: _palette.default.purple.dark,
    backgroundColor: _palette.default.purple.light
  }
};
fills.options = Object.keys(fills.solid);
var _default = fills;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9mb3VuZGF0aW9uYWwtc3R5bGVzL2ZpbGxzLmpzIl0sIm5hbWVzIjpbImZpbGxzIiwic29saWQiLCJuZXV0cmFsIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFzZSIsImJsdWUiLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJkYXJrIiwiZ3JlZW4iLCJ0ZWFsIiwicHVycGxlIiwic3VidGxlIiwiY29sb3JzIiwidGV4dCIsImRlZmF1bHQiLCJsaWdodCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLEVBQWQ7QUFFQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWM7QUFDWkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRSxPQURBO0FBRVBDLElBQUFBLGVBQWUsRUFBRUMsaUJBQVFILE9BQVIsQ0FBZ0JJO0FBRjFCLEdBREc7QUFLWkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pKLElBQUFBLEtBQUssRUFBRSxPQURIO0FBRUpDLElBQUFBLGVBQWUsRUFBRUMsaUJBQVFFLElBQVIsQ0FBYUQ7QUFGMUIsR0FMTTtBQVNaRSxFQUFBQSxHQUFHLEVBQUU7QUFDSEwsSUFBQUEsS0FBSyxFQUFFLE9BREo7QUFFSEMsSUFBQUEsZUFBZSxFQUFFQyxpQkFBUUcsR0FBUixDQUFZRjtBQUYxQixHQVRPO0FBYVpHLEVBQUFBLE1BQU0sRUFBRTtBQUNOTixJQUFBQSxLQUFLLEVBQUUsT0FERDtBQUVOQyxJQUFBQSxlQUFlLEVBQUVDLGlCQUFRSSxNQUFSLENBQWVIO0FBRjFCLEdBYkk7QUFpQlpJLEVBQUFBLE1BQU0sRUFBRTtBQUNOUCxJQUFBQSxLQUFLLEVBQUVFLGlCQUFRSyxNQUFSLENBQWVDLElBRGhCO0FBRU5QLElBQUFBLGVBQWUsRUFBRUMsaUJBQVFLLE1BQVIsQ0FBZUo7QUFGMUIsR0FqQkk7QUFxQlpNLEVBQUFBLEtBQUssRUFBRTtBQUNMVCxJQUFBQSxLQUFLLEVBQUUsT0FERjtBQUVMQyxJQUFBQSxlQUFlLEVBQUVDLGlCQUFRTyxLQUFSLENBQWNOO0FBRjFCLEdBckJLO0FBeUJaTyxFQUFBQSxJQUFJLEVBQUU7QUFDSlYsSUFBQUEsS0FBSyxFQUFFLE9BREg7QUFFSkMsSUFBQUEsZUFBZSxFQUFFQyxpQkFBUVEsSUFBUixDQUFhUDtBQUYxQixHQXpCTTtBQTZCWlEsRUFBQUEsTUFBTSxFQUFFO0FBQ05YLElBQUFBLEtBQUssRUFBRSxPQUREO0FBRU5DLElBQUFBLGVBQWUsRUFBRUMsaUJBQVFTLE1BQVIsQ0FBZVI7QUFGMUI7QUE3QkksQ0FBZDtBQW1DQU4sS0FBSyxDQUFDZSxNQUFOLEdBQWU7QUFDYmIsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEtBQUssRUFBRWEsZ0JBQU9DLElBQVAsQ0FBWUMsT0FEWjtBQUVQZCxJQUFBQSxlQUFlLEVBQUVDLGlCQUFRSCxPQUFSLENBQWdCaUI7QUFGMUIsR0FESTtBQUtiWixFQUFBQSxJQUFJLEVBQUU7QUFDSkosSUFBQUEsS0FBSyxFQUFFRSxpQkFBUUUsSUFBUixDQUFhSSxJQURoQjtBQUVKUCxJQUFBQSxlQUFlLEVBQUVDLGlCQUFRRSxJQUFSLENBQWFZO0FBRjFCLEdBTE87QUFTYlgsRUFBQUEsR0FBRyxFQUFFO0FBQ0hMLElBQUFBLEtBQUssRUFBRUUsaUJBQVFHLEdBQVIsQ0FBWUcsSUFEaEI7QUFFSFAsSUFBQUEsZUFBZSxFQUFFQyxpQkFBUUcsR0FBUixDQUFZVztBQUYxQixHQVRRO0FBYWJWLEVBQUFBLE1BQU0sRUFBRTtBQUNOTixJQUFBQSxLQUFLLEVBQUVFLGlCQUFRSSxNQUFSLENBQWVFLElBRGhCO0FBRU5QLElBQUFBLGVBQWUsRUFBRUMsaUJBQVFJLE1BQVIsQ0FBZVU7QUFGMUIsR0FiSztBQWlCYlQsRUFBQUEsTUFBTSxFQUFFO0FBQ05QLElBQUFBLEtBQUssRUFBRUUsaUJBQVFLLE1BQVIsQ0FBZUMsSUFEaEI7QUFFTlAsSUFBQUEsZUFBZSxFQUFFQyxpQkFBUUssTUFBUixDQUFlUztBQUYxQixHQWpCSztBQXFCYlAsRUFBQUEsS0FBSyxFQUFFO0FBQ0xULElBQUFBLEtBQUssRUFBRUUsaUJBQVFPLEtBQVIsQ0FBY0QsSUFEaEI7QUFFTFAsSUFBQUEsZUFBZSxFQUFFQyxpQkFBUU8sS0FBUixDQUFjTztBQUYxQixHQXJCTTtBQXlCYk4sRUFBQUEsSUFBSSxFQUFFO0FBQ0pWLElBQUFBLEtBQUssRUFBRUUsaUJBQVFRLElBQVIsQ0FBYUYsSUFEaEI7QUFFSlAsSUFBQUEsZUFBZSxFQUFFQyxpQkFBUVEsSUFBUixDQUFhTTtBQUYxQixHQXpCTztBQTZCYkwsRUFBQUEsTUFBTSxFQUFFO0FBQ05YLElBQUFBLEtBQUssRUFBRUUsaUJBQVFTLE1BQVIsQ0FBZUgsSUFEaEI7QUFFTlAsSUFBQUEsZUFBZSxFQUFFQyxpQkFBUVMsTUFBUixDQUFlSztBQUYxQjtBQTdCSyxDQUFmO0FBbUNBbkIsS0FBSyxDQUFDb0IsT0FBTixHQUFnQkMsTUFBTSxDQUFDQyxJQUFQLENBQVl0QixLQUFLLENBQUNDLEtBQWxCLENBQWhCO2VBRWVELEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJ1xuXG4vKipcbiAqIEZpbGxzIGFyZSB1c2VkIGluIEF2YXRhcnMgYW5kIEJhZGdlcy5cbiAqL1xuY29uc3QgZmlsbHMgPSB7fVxuXG5maWxscy5zb2xpZCA9IHtcbiAgbmV1dHJhbDoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5uZXV0cmFsLmJhc2VcbiAgfSxcbiAgYmx1ZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ibHVlLmJhc2VcbiAgfSxcbiAgcmVkOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnJlZC5iYXNlXG4gIH0sXG4gIG9yYW5nZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5vcmFuZ2UuYmFzZVxuICB9LFxuICB5ZWxsb3c6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS55ZWxsb3cuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUueWVsbG93LmJhc2VcbiAgfSxcbiAgZ3JlZW46IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JlZW4uYmFzZVxuICB9LFxuICB0ZWFsOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnRlYWwuYmFzZVxuICB9LFxuICBwdXJwbGU6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUucHVycGxlLmJhc2VcbiAgfVxufVxuXG5maWxscy5zdWJ0bGUgPSB7XG4gIG5ldXRyYWw6IHtcbiAgICBjb2xvcjogY29sb3JzLnRleHQuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUubmV1dHJhbC5saWdodFxuICB9LFxuICBibHVlOiB7XG4gICAgY29sb3I6IHBhbGV0dGUuYmx1ZS5kYXJrLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ibHVlLmxpZ2h0XG4gIH0sXG4gIHJlZDoge1xuICAgIGNvbG9yOiBwYWxldHRlLnJlZC5kYXJrLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5yZWQubGlnaHRcbiAgfSxcbiAgb3JhbmdlOiB7XG4gICAgY29sb3I6IHBhbGV0dGUub3JhbmdlLmRhcmssXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLm9yYW5nZS5saWdodFxuICB9LFxuICB5ZWxsb3c6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS55ZWxsb3cuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUueWVsbG93LmxpZ2h0XG4gIH0sXG4gIGdyZWVuOiB7XG4gICAgY29sb3I6IHBhbGV0dGUuZ3JlZW4uZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JlZW4ubGlnaHRcbiAgfSxcbiAgdGVhbDoge1xuICAgIGNvbG9yOiBwYWxldHRlLnRlYWwuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUudGVhbC5saWdodFxuICB9LFxuICBwdXJwbGU6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS5wdXJwbGUuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUucHVycGxlLmxpZ2h0XG4gIH1cbn1cblxuZmlsbHMub3B0aW9ucyA9IE9iamVjdC5rZXlzKGZpbGxzLnNvbGlkKVxuXG5leHBvcnQgZGVmYXVsdCBmaWxsc1xuIl19