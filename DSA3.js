// 1.findMissing Number

// const findMissingNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   let n = arr.length + 1;
//   let total = (n * (n + 1)) / 2;
//   return total - sum;
// };

// const result = findMissingNumber([1, 3, 4, 5]);
// console.log(result);

// 2.dice game simulation

// const diceGameSimulation = (dice) => {
//   let results = [];

//   const dic1 = Math.floor(Math.random() * 6) + 1;
//   const dic2 = Math.floor(Math.random() * 6) + 1;
//   const sum = dic1 + dic2;

//   let result;

//   for (let i = 0; i < dice; i++) {
//     if (sum === 3 || sum === 7) {
//       result = "win";
//     }
//     if (sum === 2 || sum === 5) {
//       result = "lose";
//     } else {
//       result = "again";
//     }
//     results.push({
//         dic1,
//         dic2,
//         result,
//         sum,
//     });
// }

//   return results;
// };

// const result = diceGameSimulation(10);
// console.table(result);

// const arr = [1, 2, 3, 4, 5];

// const value = () => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };

// countOccurences

// const countOccurences = (str, char) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = countOccurences("banana", "a");
// console.log(result);

// find the max number in the array

// const findMaximumNumber = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// const result = findMaximumNumber([1, 2, 3, 4, 5]);
// console.log(result);

// findMissingNumber

// const findMissingNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   let n = arr.length + 1;
//   let total = (n * (n + 1)) / 2;
//   return total - sum;
// };

// const result = findMissingNumber([1, 3, 4, 5]);
// console.log(result);

