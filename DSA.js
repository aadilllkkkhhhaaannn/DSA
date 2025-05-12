// // // 1. write a function a called countOccurens()
// // // that takes in a string and a characters returns
// // // the number of countOccurenses of that character in the string.

// const countOccurens = (str, char) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = countOccurens("banana", "a");
// console.log(result);

// // 2. write a function called findmaximum number that takes in
// //  a array of numbers and returns the largest number
// //  in the array

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

// 3. Write a function called reverseString that
//  takes in a string and returns of that string

// const reverseString = (str) => {
//   const string = str.split("").reverse().join("");

//   return string;
// };

// const result = reverseString("aadil");
// console.log(result);

// 4. Calculate the sum of all elements in an array.

// const calculateAllNumber = (num) => {
//   let number = 0;
//   for (let i = 0; i < num.length; i++) {
//     number += num[i];
//   }
//   return number;
// };

// const result = calculateAllNumber([1, 2, 3, 4, 5]);
// console.log(result);

// 5. Find the smallest number in an array.

// const findSmallestNumber = (str) => {
//   let min = str[0];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] < min) {
//       min = str[i];
//     }
//   }
//   return min;
// };

// const result = findSmallestNumber([5, 4, 3, 2, 1]);
// console.log(result);

// 6. Write a function called findMissingNumber that takes in an array of unique
//  numbers from 1 to n (inclusive), where one number is missing.
//  It should return the missing number.

// const findMissingNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let n = arr.length + 1;
//   let total = (n * (n + 1)) / 2;
//   return total - sum;
// };

// const result = findMissingNumber([1,3]);
// console.log(result);

// 7. display likes

// const displayLikes = (str) => {
//   let length = str.length;
//   if (str.length === 0) {
//     return "no one like this";
//   } else if (str.length === 1) {
//     return `${str[0]} , like this`;
//   } else if (str.length === 2) {
//     return `${str[0]} and ${str[1]}, liked this`;
//   } else if (str.length === 3) {
//     return `${str[0]} , ${str[1]} and ${str[2]} , liked this`;
//   } else if (str.length === 4) {
//     return `${str[0]} , ${str[1]} , ${str[2]} and ${str[3]} , liked this`;
//   }

//   return length;
// };

// const result = displayLikes(["me", "you", "they"]);
// console.log(result);

// //   8.Write a function diceGameSimulation(numSimulation) that simulates a dice game
//  for a given number of times. In each simulation:

// Roll two dice (generate two random numbers between 1 and 6).
// Calculate their sum.
// Determine the result based on the sum:
// If the sum is 7 or 11 → result is "win"
// If the sum is 2, 3, or 12 → result is "lose"
// Otherwise → result is "roll again"

// const diceGameSimulation = (numSimulation) => {
//   let results = [];

//   const dice1 = Math.floor(Math.random() * 6) + 1;
//   const dice2 = Math.floor(Math.random() * 6) + 1;

//   const sum = dice1 + dice2;

//   let result;

//   for (let i = 0; i < numSimulation; i++) {
//     if (sum === 7 || sum === 11) {
//       result = "win";
//     } else if (sum === 2 || sum === 3 || sum === 12) {
//       result = "lose";
//     } else {
//       result = "role again";
//     }

//     results.push({
//       dice1,
//       dice2,
//       sum,
//       result,
//     });
//   }

//   return results;
// };

// const dice = diceGameSimulation(10);
// console.table(dice);
