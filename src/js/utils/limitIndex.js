/**
 * Function to limit an index (use it in array looping slideshow)
 * @param {Number} minimum Minimum
 * @param {Number} current Current
 * @param {Number} maximum Maximum
 * @returns Minimum if current > maximum, Maximum if current < minimum, Current otherwise
 */
export const limitIndex = (minimum, current, maximum) => {
  if (current > maximum) {
    return minimum;
  }

  if (current < minimum) {
    return maximum;
  }

  return current;
};
