function reverseArray(a) {
  // Write your code here
  let newArr = [];
  for (let i = a.length - 1; i >= 0; i--) {
    newArr.push(a[i]);
  }
  return newArr;
}
const a = [1, 2, 3, 4, 5];
console.log(reverseArray(a));

//OR

// function reverseArray(a) {
//   const newArr = [...a].reverse();
//   return newArr;
// }

// const a = [1, 2, 3, 4, 5];
// console.log(reverseArray(a));
