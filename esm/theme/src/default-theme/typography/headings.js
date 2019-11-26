import colors from '../foundational-styles/colors';
import fontFamilies from './fontFamilies';
/**
 * Heading styles.
 * @property {Object} headings.900
 * @property {Object} headings.800
 * @property {Object} headings.700
 * @property {Object} headings.600
 * @property {Object} headings.500 - Default.
 * @property {Object} headings.400
 * @property {Object} headings.300
 * @property {Object} headings.200
 * @property {Object} headings.100
 */

export default {
  '900': {
    fontSize: '35px',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.2px',
    marginTop: 52,
    fontFamily: fontFamilies.display,
    color: colors.text.dark
  },
  '800': {
    fontSize: '29px',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '-0.2px',
    marginTop: 40,
    fontFamily: fontFamilies.display,
    color: colors.text.dark
  },
  '700': {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28px',
    letterSpacing: '-0.07px',
    marginTop: 40,
    fontFamily: fontFamilies.display,
    color: colors.text.dark
  },
  '600': {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginTop: 28,
    fontFamily: fontFamilies.display,
    color: colors.text.dark
  },
  '500': {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 24,
    fontFamily: fontFamilies.ui,
    color: colors.text.dark
  },
  '400': {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.text.dark
  },
  '300': {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.text.dark
  },
  '200': {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.text.muted
  },
  '100': {
    fontSize: '11px',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '16px',
    letterSpacing: '0.6px',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.text.muted
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90eXBvZ3JhcGh5L2hlYWRpbmdzLmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsImZvbnRGYW1pbGllcyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibWFyZ2luVG9wIiwiZm9udEZhbWlseSIsImRpc3BsYXkiLCJjb2xvciIsInRleHQiLCJkYXJrIiwidWkiLCJtdXRlZCIsInRleHRUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLE1BQVAsTUFBbUIsK0JBQW5CO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixnQkFBekI7QUFFQTs7Ozs7Ozs7Ozs7OztBQVlBLGVBQWU7QUFDYixTQUFPO0FBQ0xDLElBQUFBLFFBQVEsRUFBRSxNQURMO0FBRUxDLElBQUFBLFVBQVUsRUFBRSxHQUZQO0FBR0xDLElBQUFBLFVBQVUsRUFBRSxNQUhQO0FBSUxDLElBQUFBLGFBQWEsRUFBRSxRQUpWO0FBS0xDLElBQUFBLFNBQVMsRUFBRSxFQUxOO0FBTUxDLElBQUFBLFVBQVUsRUFBRU4sWUFBWSxDQUFDTyxPQU5wQjtBQU9MQyxJQUFBQSxLQUFLLEVBQUVULE1BQU0sQ0FBQ1UsSUFBUCxDQUFZQztBQVBkLEdBRE07QUFVYixTQUFPO0FBQ0xULElBQUFBLFFBQVEsRUFBRSxNQURMO0FBRUxDLElBQUFBLFVBQVUsRUFBRSxHQUZQO0FBR0xDLElBQUFBLFVBQVUsRUFBRSxNQUhQO0FBSUxDLElBQUFBLGFBQWEsRUFBRSxRQUpWO0FBS0xDLElBQUFBLFNBQVMsRUFBRSxFQUxOO0FBTUxDLElBQUFBLFVBQVUsRUFBRU4sWUFBWSxDQUFDTyxPQU5wQjtBQU9MQyxJQUFBQSxLQUFLLEVBQUVULE1BQU0sQ0FBQ1UsSUFBUCxDQUFZQztBQVBkLEdBVk07QUFtQmIsU0FBTztBQUNMVCxJQUFBQSxRQUFRLEVBQUUsTUFETDtBQUVMQyxJQUFBQSxVQUFVLEVBQUUsR0FGUDtBQUdMQyxJQUFBQSxVQUFVLEVBQUUsTUFIUDtBQUlMQyxJQUFBQSxhQUFhLEVBQUUsU0FKVjtBQUtMQyxJQUFBQSxTQUFTLEVBQUUsRUFMTjtBQU1MQyxJQUFBQSxVQUFVLEVBQUVOLFlBQVksQ0FBQ08sT0FOcEI7QUFPTEMsSUFBQUEsS0FBSyxFQUFFVCxNQUFNLENBQUNVLElBQVAsQ0FBWUM7QUFQZCxHQW5CTTtBQTRCYixTQUFPO0FBQ0xULElBQUFBLFFBQVEsRUFBRSxNQURMO0FBRUxDLElBQUFBLFVBQVUsRUFBRSxHQUZQO0FBR0xDLElBQUFBLFVBQVUsRUFBRSxNQUhQO0FBSUxDLElBQUFBLGFBQWEsRUFBRSxTQUpWO0FBS0xDLElBQUFBLFNBQVMsRUFBRSxFQUxOO0FBTUxDLElBQUFBLFVBQVUsRUFBRU4sWUFBWSxDQUFDTyxPQU5wQjtBQU9MQyxJQUFBQSxLQUFLLEVBQUVULE1BQU0sQ0FBQ1UsSUFBUCxDQUFZQztBQVBkLEdBNUJNO0FBcUNiLFNBQU87QUFDTFQsSUFBQUEsUUFBUSxFQUFFLE1BREw7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLEdBRlA7QUFHTEMsSUFBQUEsVUFBVSxFQUFFLE1BSFA7QUFJTEMsSUFBQUEsYUFBYSxFQUFFLFNBSlY7QUFLTEMsSUFBQUEsU0FBUyxFQUFFLEVBTE47QUFNTEMsSUFBQUEsVUFBVSxFQUFFTixZQUFZLENBQUNXLEVBTnBCO0FBT0xILElBQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDVSxJQUFQLENBQVlDO0FBUGQsR0FyQ007QUE4Q2IsU0FBTztBQUNMVCxJQUFBQSxRQUFRLEVBQUUsTUFETDtBQUVMQyxJQUFBQSxVQUFVLEVBQUUsR0FGUDtBQUdMQyxJQUFBQSxVQUFVLEVBQUUsTUFIUDtBQUlMQyxJQUFBQSxhQUFhLEVBQUUsU0FKVjtBQUtMQyxJQUFBQSxTQUFTLEVBQUUsRUFMTjtBQU1MQyxJQUFBQSxVQUFVLEVBQUVOLFlBQVksQ0FBQ1csRUFOcEI7QUFPTEgsSUFBQUEsS0FBSyxFQUFFVCxNQUFNLENBQUNVLElBQVAsQ0FBWUM7QUFQZCxHQTlDTTtBQXVEYixTQUFPO0FBQ0xULElBQUFBLFFBQVEsRUFBRSxNQURMO0FBRUxDLElBQUFBLFVBQVUsRUFBRSxHQUZQO0FBR0xDLElBQUFBLFVBQVUsRUFBRSxNQUhQO0FBSUxDLElBQUFBLGFBQWEsRUFBRSxHQUpWO0FBS0xDLElBQUFBLFNBQVMsRUFBRSxFQUxOO0FBTUxDLElBQUFBLFVBQVUsRUFBRU4sWUFBWSxDQUFDVyxFQU5wQjtBQU9MSCxJQUFBQSxLQUFLLEVBQUVULE1BQU0sQ0FBQ1UsSUFBUCxDQUFZQztBQVBkLEdBdkRNO0FBZ0ViLFNBQU87QUFDTFQsSUFBQUEsUUFBUSxFQUFFLE1BREw7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLEdBRlA7QUFHTEMsSUFBQUEsVUFBVSxFQUFFLE1BSFA7QUFJTEMsSUFBQUEsYUFBYSxFQUFFLEdBSlY7QUFLTEMsSUFBQUEsU0FBUyxFQUFFLEVBTE47QUFNTEMsSUFBQUEsVUFBVSxFQUFFTixZQUFZLENBQUNXLEVBTnBCO0FBT0xILElBQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDVSxJQUFQLENBQVlHO0FBUGQsR0FoRU07QUF5RWIsU0FBTztBQUNMWCxJQUFBQSxRQUFRLEVBQUUsTUFETDtBQUVMQyxJQUFBQSxVQUFVLEVBQUUsR0FGUDtBQUdMVyxJQUFBQSxhQUFhLEVBQUUsV0FIVjtBQUlMVixJQUFBQSxVQUFVLEVBQUUsTUFKUDtBQUtMQyxJQUFBQSxhQUFhLEVBQUUsT0FMVjtBQU1MQyxJQUFBQSxTQUFTLEVBQUUsRUFOTjtBQU9MQyxJQUFBQSxVQUFVLEVBQUVOLFlBQVksQ0FBQ1csRUFQcEI7QUFRTEgsSUFBQUEsS0FBSyxFQUFFVCxNQUFNLENBQUNVLElBQVAsQ0FBWUc7QUFSZDtBQXpFTSxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL2NvbG9ycydcbmltcG9ydCBmb250RmFtaWxpZXMgZnJvbSAnLi9mb250RmFtaWxpZXMnXG5cbi8qKlxuICogSGVhZGluZyBzdHlsZXMuXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuOTAwXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuODAwXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuNzAwXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuNjAwXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuNTAwIC0gRGVmYXVsdC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkaW5ncy40MDBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkaW5ncy4zMDBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkaW5ncy4yMDBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkaW5ncy4xMDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAnOTAwJzoge1xuICAgIGZvbnRTaXplOiAnMzVweCcsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcbiAgICBtYXJnaW5Ub3A6IDUyLFxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbGllcy5kaXNwbGF5LFxuICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kYXJrXG4gIH0sXG4gICc4MDAnOiB7XG4gICAgZm9udFNpemU6ICcyOXB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4ycHgnLFxuICAgIG1hcmdpblRvcDogNDAsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLmRpc3BsYXksXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgfSxcbiAgJzcwMCc6IHtcbiAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3cHgnLFxuICAgIG1hcmdpblRvcDogNDAsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLmRpc3BsYXksXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgfSxcbiAgJzYwMCc6IHtcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3cHgnLFxuICAgIG1hcmdpblRvcDogMjgsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLmRpc3BsYXksXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgfSxcbiAgJzUwMCc6IHtcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA1cHgnLFxuICAgIG1hcmdpblRvcDogMjQsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLnVpLFxuICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kYXJrXG4gIH0sXG4gICc0MDAnOiB7XG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4wNXB4JyxcbiAgICBtYXJnaW5Ub3A6IDE2LFxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbGllcy51aSxcbiAgICBjb2xvcjogY29sb3JzLnRleHQuZGFya1xuICB9LFxuICAnMzAwJzoge1xuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMCcsXG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBmb250RmFtaWx5OiBmb250RmFtaWxpZXMudWksXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgfSxcbiAgJzIwMCc6IHtcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJzAnLFxuICAgIG1hcmdpblRvcDogMTYsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLnVpLFxuICAgIGNvbG9yOiBjb2xvcnMudGV4dC5tdXRlZFxuICB9LFxuICAnMTAwJzoge1xuICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC42cHgnLFxuICAgIG1hcmdpblRvcDogMTYsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLnVpLFxuICAgIGNvbG9yOiBjb2xvcnMudGV4dC5tdXRlZFxuICB9XG59XG4iXX0=