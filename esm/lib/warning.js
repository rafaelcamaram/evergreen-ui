var shownWarnings = [];
export default (function (condition, warning) {
  if (condition && !shownWarnings.includes(warning)) {
    console.error("Warning: ".concat(warning));
    shownWarnings.push(warning);
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvd2FybmluZy5qcyJdLCJuYW1lcyI6WyJzaG93bldhcm5pbmdzIiwiY29uZGl0aW9uIiwid2FybmluZyIsImluY2x1ZGVzIiwiY29uc29sZSIsImVycm9yIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsYUFBYSxHQUFHLEVBQXRCO0FBRUEsZ0JBQWUsVUFBQ0MsU0FBRCxFQUFZQyxPQUFaLEVBQXdCO0FBQ3JDLE1BQUlELFNBQVMsSUFBSSxDQUFDRCxhQUFhLENBQUNHLFFBQWQsQ0FBdUJELE9BQXZCLENBQWxCLEVBQW1EO0FBQ2pERSxJQUFBQSxPQUFPLENBQUNDLEtBQVIsb0JBQTBCSCxPQUExQjtBQUNBRixJQUFBQSxhQUFhLENBQUNNLElBQWQsQ0FBbUJKLE9BQW5CO0FBQ0Q7QUFDRixDQUxEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hvd25XYXJuaW5ncyA9IFtdXG5cbmV4cG9ydCBkZWZhdWx0IChjb25kaXRpb24sIHdhcm5pbmcpID0+IHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhc2hvd25XYXJuaW5ncy5pbmNsdWRlcyh3YXJuaW5nKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6ICR7d2FybmluZ31gKVxuICAgIHNob3duV2FybmluZ3MucHVzaCh3YXJuaW5nKVxuICB9XG59XG4iXX0=