// A left rotation operation on an array of size shifts each of
// the array's elements  unit to the left. Given an integer,d,
// rotate the array that many steps left and return the result.

function rotateLeft(d, arr) {
  // Write your code here+
  let spliceArr = arr.splice(0, d);
  return [...arr, ...spliceArr];
}

const d = 2;
const arr = [1, 2, 3, 4, 5];

console.log(rotateLeft(d, arr));
