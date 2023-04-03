function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // sort intervals based on start time
    const merged = []; // initialize an empty stack to hold the merged intervals
    for (const interval of intervals) {
      if (merged.length === 0 || interval[0] > merged[merged.length - 1][1]) {
        // if stack is empty or current interval does not overlap with top interval in stack, push current interval onto stack
        merged.push(interval);
      } else {
        // otherwise, merge the two intervals by updating the end time of top interval in stack
        merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
      }
    }
    return merged;
  }


//   Sort the intervals by the time they begin.
// Create an empty stack to store the merged intervals.
// In the sorted array, loop through each interval.
// Push the current interval onto the stack if the stack is empty or if it does not overlap with the top interval in the stack.
// If the current interval overlaps with the top interval in the stack, merge the two intervals by updating the top interval's end time to be the maximum of both intervals' end times.
// The stack will contain the merged intervals after looping through all intervals.