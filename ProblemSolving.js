//1. Reverse a string

// const reverseString = (str) => {
//   const reverse = str.split("").reverse().join('');
//   return reverse;
// };

// const result = reverseString("12356");
// console.log(result);

//2. Count vowels in a string

// const vowels = (str, char) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = vowels("banana", "a");
// console.log(result);

// 3. Find the most frequent character in a string

// Remove duplicates from a string

// const removeDuplicats = (str) => {
//   return [...new Set(str)]
// };

// const result = removeDuplicats([1, 1, 1, 1, 2, 3, 4, 5]);
// console.log(result);

// 4. Find the maximum and minimum in an array

// const findMaximumNumber = (arr) => {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// 5. const result = findMaximumNumber([1, 2, 3, 4, 5]);
// console.log(result);

// Check if array is sorted

// const isSortedArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// 6. const result = isSortedArray([1, 2, 4, 5]);
// console.log(result);

// const isSortedArray = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// const result = isSortedArray([1, 2, 3, 4, 5]);
// console.log(result);

// 7. Find the second largest element

// const findMaximumNumber = (arr) => {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >> max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// const result = findMaximumNumber([1, 2, 3, 4, 5]);
// console.log(result);

