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

export default getAvatarInitialsFontSize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZS5qcyJdLCJuYW1lcyI6WyJnZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplIiwic2l6ZSIsInNpemVMaW1pdE9uZUNoYXJhY3RlciIsIk1hdGgiLCJjZWlsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQSxJQUFNQSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUNDLElBQUQsRUFBT0MscUJBQVAsRUFBaUM7QUFDakUsTUFBSUQsSUFBSSxJQUFJQyxxQkFBWixFQUFtQztBQUNqQyxXQUFPQyxJQUFJLENBQUNDLElBQUwsQ0FBVUgsSUFBSSxHQUFHLEdBQWpCLENBQVA7QUFDRDs7QUFFRCxTQUFPRSxJQUFJLENBQUNDLElBQUwsQ0FBVUgsSUFBSSxHQUFHLEdBQWpCLENBQVA7QUFDRCxDQU5EOztBQVFBLGVBQWVELHlCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICogQHBhcmFtIHtudW1iZXJ9IHNpemVMaW1pdE9uZUNoYXJhY3RlclxuICogQHJldHVybiB7bnVtYmVyfSBmb250IHNpemVcbiAqL1xuY29uc3QgZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZSA9IChzaXplLCBzaXplTGltaXRPbmVDaGFyYWN0ZXIpID0+IHtcbiAgaWYgKHNpemUgPD0gc2l6ZUxpbWl0T25lQ2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChzaXplIC8gMi4yKVxuICB9XG5cbiAgcmV0dXJuIE1hdGguY2VpbChzaXplIC8gMi42KVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplXG4iXX0=