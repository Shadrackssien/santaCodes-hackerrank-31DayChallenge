// Given a 6  X 6  2D Array, arr:
// An hourglass in A is a subset of values with indices falling in this pattern in
// arr's graphical representation:
// There are 16  hourglasses in arr. An hourglass sum is the sum of an hourglass'
// values. Calculate the hourglass sum for every hourglass in arr, then print the
// maximum hourglass sum. The array will always be 6 X 6.

function hourglassSum(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let currentSum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

// Example:

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(arr)); // Output: 19
