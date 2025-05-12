// 1. write a function a called countOccurens()
// that takes in a string and a characters returns
// the number of countOccurenses of that character in the string.

// const countOccurenses = (str, char) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = countOccurenses("banana", "a");
// console.log(result);

// 2. write a function called findmaximum number that takes in
//  a array of numbers and returns the largest number
//  in the array

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

// 3. Write a function called titleCase that takes in a string and
//  returns the string with first letter of each word capitalized

// const titleCase = (str) => {
//   const words = str.toLowerCase().split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words;
// };

// const result = titleCase("i am cat");
// console.log(result);

// const titleCase = (str) => {
//   const words = str.toLowerCase().split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words;
// };

// const result = titleCase("i am cat");
// console.log(result);

// 4. Write a function called reverseString that
//  takes in a string and returns of that string

// const reverseString = (str) => {
//   const reverse = str.split("").reverse().join("");
//   return reverse;
// };

// const result = reverseString("aadil");
// console.log(result);

// 5. write a function called removeDuplicates
// that takes in a array and returns a
//  new array with duplicate array removed

// const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };

// const result = removeDuplicates([1, 1, 2, 3, 4, 5]);
// console.log(result);

// 6. fizbuzzy

// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0) {
//     console.log("fizzz");
//   }
//   if (i % 5 === 0) {
//     console.log("buzz");
//   }
//   if (i % 3 === 0 && 5 === 0) {
//     console.log("fizzbuzz");
//   } else {
//     console.log(i);
//   }
// }

// 7. Write a function called findMissingNumber that takes in an array of unique
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

// const result = findMissingNumber([1, 3, 4, 5]);
// console.log(result);

// 8. like this or not like this

// const displayLikes = (names) => {
//   const length = names.length;

//   if (length === 0) {
//     return "no one like this";
//   } else if (length === 1) {
//     return `${names[0]} , like this`;
//   } else if (length === 2) {
//     return `${names[0]} , ${names[1]} and liked this`;
//   } else if (length === 3) {
//     return `${names[0]} , ${names[1]} and ${names[2]} and liked this`;
//   }
// };

// const result = displayLikes(["aadil", "sir"]);
// console.log(result);

// 9. Dice simulation

// const diceGameSimulation = (dice) => {
//   const results = [];

//   for (let i = 0; i < dice; i++) {
//     const dice1 = Math.floor(Math.random() * 6) + 1;
//     const dice2 = Math.floor(Math.random() * 6) + 1;

//     const sum = dice1 + dice2;
//     let result;

//     if (sum === 7 || sum === 11) {
//       result = "win";
//     }
//     if (sum === 3 || sum === 5) {
//       result = "loose";
//     } else {
//       result = "role again";
//     }
//     results.push({
//       dice1,
//       dice2,
//       result,
//       sum,
//     });
//     return results;
//   }
// };

// const result = diceGameSimulation(10);
// console.table(result);

// 10. writer a function a called sumOffEvenSquares that takes
// an array of numbers and returns the sum of the
// squares of the even numbers in the array

// const sumOffEvenSquares = (number) => {
//   const evenSquare = number
//     .filter((num) => num % 2 === 0)
//     .map((num) => num ** 2)
//     .reduce((p, c) => p + c, 0);
//   return evenSquare;
// };

// const result = sumOffEvenSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

// 8. like this or not like this

// 10. writer a function a called sumOffEvenSquares that takes
// an array of numbers and returns the sum of the
// squares of the even numbers in the array
