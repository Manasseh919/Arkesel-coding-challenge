function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
const arr = [1, 3, 5, 6, 7, 9];
const target = 1;

const index = binarySearch(arr, target);
console.log(index); // Output: 2



// The binarySearch function accepts two parameters: an array arr sorted 
// ascending order and an integer target representing the value to be found in the array.
// Two variables, left and right, are set to 0 and the length of the array minus one, respectively. 
// During each iteration of the while loop, these variables are used as pointers
//  to divide the array into two halves.
// The while loop continues as long as left is less than or equal to right,
//  indicating that there are still elements in the array to be searched.
// Using the formula (left + right) / 2, the mid variable is set to the 
// middle index of the current array segment inside the while loop.