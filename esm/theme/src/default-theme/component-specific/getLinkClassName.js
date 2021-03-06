import tinycolor from 'tinycolor2';
import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import palette from '../foundational-styles/palette';
/**
 * The link appearance unlike the Button is based on the color property.
 * Currently the Link does not support the Intent or the appearance interface.
 * @param {string} color
 * @return {Object} appearance of the link.
 */

var getLinkAppearance = function getLinkAppearance(color) {
  switch (color) {
    case 'neutral':
      return Themer.createLinkAppearance({
        base: {
          color: palette.neutral.base
        },
        hover: {
          color: tinycolor(palette.neutral.base).lighten(10).toString()
        },
        active: {
          color: tinycolor(palette.neutral.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat(tinycolor(palette.neutral.base).setAlpha(0.4).toString())
        }
      });

    case 'green':
      return Themer.createLinkAppearance({
        base: {
          color: palette.green.base
        },
        hover: {
          color: tinycolor(palette.green.base).lighten(10).toString()
        },
        active: {
          color: tinycolor(palette.green.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat(tinycolor(palette.green.base).setAlpha(0.4).toString())
        }
      });

    case 'default':
    case 'blue':
    default:
      return Themer.createLinkAppearance({
        base: {
          color: palette.blue.base
        },
        hover: {
          color: tinycolor(palette.blue.base).lighten(10).toString()
        },
        active: {
          color: tinycolor(palette.blue.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat(tinycolor(palette.blue.base).setAlpha(0.4).toString())
        }
      });
  }
};
/**
 * Get the className of a `Link` component.
 * @param {string} color
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getLinkAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0TGlua0NsYXNzTmFtZS5qcyJdLCJuYW1lcyI6WyJ0aW55Y29sb3IiLCJUaGVtZXIiLCJtZW1vaXplQ2xhc3NOYW1lIiwicGFsZXR0ZSIsImdldExpbmtBcHBlYXJhbmNlIiwiY29sb3IiLCJjcmVhdGVMaW5rQXBwZWFyYW5jZSIsImJhc2UiLCJuZXV0cmFsIiwiaG92ZXIiLCJsaWdodGVuIiwidG9TdHJpbmciLCJhY3RpdmUiLCJkYXJrZW4iLCJmb2N1cyIsImJveFNoYWRvdyIsInNldEFscGhhIiwiZ3JlZW4iLCJibHVlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixvQkFBdkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QiwyQkFBN0I7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGdDQUFwQjtBQUVBOzs7Ozs7O0FBTUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsVUFBUUEsS0FBUjtBQUNFLFNBQUssU0FBTDtBQUNFLGFBQU9KLE1BQU0sQ0FBQ0ssb0JBQVAsQ0FBNEI7QUFDakNDLFFBQUFBLElBQUksRUFBRTtBQUNKRixVQUFBQSxLQUFLLEVBQUVGLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkQ7QUFEbkIsU0FEMkI7QUFJakNFLFFBQUFBLEtBQUssRUFBRTtBQUNMSixVQUFBQSxLQUFLLEVBQUVMLFNBQVMsQ0FBQ0csT0FBTyxDQUFDSyxPQUFSLENBQWdCRCxJQUFqQixDQUFULENBQ0pHLE9BREksQ0FDSSxFQURKLEVBRUpDLFFBRkk7QUFERixTQUowQjtBQVNqQ0MsUUFBQUEsTUFBTSxFQUFFO0FBQ05QLFVBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDRyxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JELElBQWpCLENBQVQsQ0FDSk0sTUFESSxDQUNHLEVBREgsRUFFSkYsUUFGSTtBQURELFNBVHlCO0FBY2pDRyxRQUFBQSxLQUFLLEVBQUU7QUFDTEMsVUFBQUEsU0FBUyxzQkFBZWYsU0FBUyxDQUFDRyxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JELElBQWpCLENBQVQsQ0FDckJTLFFBRHFCLENBQ1osR0FEWSxFQUVyQkwsUUFGcUIsRUFBZjtBQURKO0FBZDBCLE9BQTVCLENBQVA7O0FBb0JGLFNBQUssT0FBTDtBQUNFLGFBQU9WLE1BQU0sQ0FBQ0ssb0JBQVAsQ0FBNEI7QUFDakNDLFFBQUFBLElBQUksRUFBRTtBQUNKRixVQUFBQSxLQUFLLEVBQUVGLE9BQU8sQ0FBQ2MsS0FBUixDQUFjVjtBQURqQixTQUQyQjtBQUlqQ0UsUUFBQUEsS0FBSyxFQUFFO0FBQ0xKLFVBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDRyxPQUFPLENBQUNjLEtBQVIsQ0FBY1YsSUFBZixDQUFULENBQ0pHLE9BREksQ0FDSSxFQURKLEVBRUpDLFFBRkk7QUFERixTQUowQjtBQVNqQ0MsUUFBQUEsTUFBTSxFQUFFO0FBQ05QLFVBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDRyxPQUFPLENBQUNjLEtBQVIsQ0FBY1YsSUFBZixDQUFULENBQ0pNLE1BREksQ0FDRyxFQURILEVBRUpGLFFBRkk7QUFERCxTQVR5QjtBQWNqQ0csUUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFVBQUFBLFNBQVMsc0JBQWVmLFNBQVMsQ0FBQ0csT0FBTyxDQUFDYyxLQUFSLENBQWNWLElBQWYsQ0FBVCxDQUNyQlMsUUFEcUIsQ0FDWixHQURZLEVBRXJCTCxRQUZxQixFQUFmO0FBREo7QUFkMEIsT0FBNUIsQ0FBUDs7QUFvQkYsU0FBSyxTQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0E7QUFDRSxhQUFPVixNQUFNLENBQUNLLG9CQUFQLENBQTRCO0FBQ2pDQyxRQUFBQSxJQUFJLEVBQUU7QUFDSkYsVUFBQUEsS0FBSyxFQUFFRixPQUFPLENBQUNlLElBQVIsQ0FBYVg7QUFEaEIsU0FEMkI7QUFJakNFLFFBQUFBLEtBQUssRUFBRTtBQUNMSixVQUFBQSxLQUFLLEVBQUVMLFNBQVMsQ0FBQ0csT0FBTyxDQUFDZSxJQUFSLENBQWFYLElBQWQsQ0FBVCxDQUNKRyxPQURJLENBQ0ksRUFESixFQUVKQyxRQUZJO0FBREYsU0FKMEI7QUFTakNDLFFBQUFBLE1BQU0sRUFBRTtBQUNOUCxVQUFBQSxLQUFLLEVBQUVMLFNBQVMsQ0FBQ0csT0FBTyxDQUFDZSxJQUFSLENBQWFYLElBQWQsQ0FBVCxDQUNKTSxNQURJLENBQ0csRUFESCxFQUVKRixRQUZJO0FBREQsU0FUeUI7QUFjakNHLFFBQUFBLEtBQUssRUFBRTtBQUNMQyxVQUFBQSxTQUFTLHNCQUFlZixTQUFTLENBQUNHLE9BQU8sQ0FBQ2UsSUFBUixDQUFhWCxJQUFkLENBQVQsQ0FDckJTLFFBRHFCLENBQ1osR0FEWSxFQUVyQkwsUUFGcUIsRUFBZjtBQURKO0FBZDBCLE9BQTVCLENBQVA7QUE5Q0o7QUFtRUQsQ0FwRUQ7QUFzRUE7Ozs7Ozs7QUFLQSxlQUFlVCxnQkFBZ0IsQ0FBQ0UsaUJBQUQsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInXG5pbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG4vKipcbiAqIFRoZSBsaW5rIGFwcGVhcmFuY2UgdW5saWtlIHRoZSBCdXR0b24gaXMgYmFzZWQgb24gdGhlIGNvbG9yIHByb3BlcnR5LlxuICogQ3VycmVudGx5IHRoZSBMaW5rIGRvZXMgbm90IHN1cHBvcnQgdGhlIEludGVudCBvciB0aGUgYXBwZWFyYW5jZSBpbnRlcmZhY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3JcbiAqIEByZXR1cm4ge09iamVjdH0gYXBwZWFyYW5jZSBvZiB0aGUgbGluay5cbiAqL1xuY29uc3QgZ2V0TGlua0FwcGVhcmFuY2UgPSBjb2xvciA9PiB7XG4gIHN3aXRjaCAoY29sb3IpIHtcbiAgICBjYXNlICduZXV0cmFsJzpcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlTGlua0FwcGVhcmFuY2Uoe1xuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6IHBhbGV0dGUubmV1dHJhbC5iYXNlXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLm5ldXRyYWwuYmFzZSlcbiAgICAgICAgICAgIC5saWdodGVuKDEwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLm5ldXRyYWwuYmFzZSlcbiAgICAgICAgICAgIC5kYXJrZW4oMTApXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICB9LFxuICAgICAgICBmb2N1czoge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3Rpbnljb2xvcihwYWxldHRlLm5ldXRyYWwuYmFzZSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgICAudG9TdHJpbmcoKX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVMaW5rQXBwZWFyYW5jZSh7XG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5ncmVlbi5iYXNlXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLmdyZWVuLmJhc2UpXG4gICAgICAgICAgICAubGlnaHRlbigxMClcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIGNvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5ncmVlbi5iYXNlKVxuICAgICAgICAgICAgLmRhcmtlbigxMClcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7dGlueWNvbG9yKHBhbGV0dGUuZ3JlZW4uYmFzZSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgICAudG9TdHJpbmcoKX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlTGlua0FwcGVhcmFuY2Uoe1xuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6IHBhbGV0dGUuYmx1ZS5iYXNlXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLmJsdWUuYmFzZSlcbiAgICAgICAgICAgIC5saWdodGVuKDEwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLmJsdWUuYmFzZSlcbiAgICAgICAgICAgIC5kYXJrZW4oMTApXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICB9LFxuICAgICAgICBmb2N1czoge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3Rpbnljb2xvcihwYWxldHRlLmJsdWUuYmFzZSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgICAudG9TdHJpbmcoKX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBMaW5rYCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3JcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRMaW5rQXBwZWFyYW5jZSlcbiJdfQ==