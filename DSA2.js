// Reverse a string.
// const reverseString = (str) => {
//   let reverse = str.split("").reverse().join("");
//   return reverse;
// };

// const result = reverseString("rehan");
// console.log(result);

// Find the largest number in an array.

// const largestNumber = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// const result = largestNumber([1, 2, 3, 4, 5]);
// console.log(result);

// FizzBuzz from 1 to 100.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && 5 === 0) {
//     console.log("fizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Count the number of vowels in a string.
// const countVowels = (arr) => {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const result = arr.filter(char => vowels.includes(char))
//   return result.length
// }
// const result = countVowels([
//   "A", "B", "C", "D", "E", "F", "G", "H",
//   "I", "J", "K", "L", "M", "N", "O", "P",
//   "Q", "R", "S", "T", "U", "V", "W", "X",
//   "Y", "Z", "a", "e", "i", "o", "u"
// ])

// console.log(result);

// Find the sum of all elements in an array.

// const sumOfAllElements = (sum) => {
//   const add = sum.reduce((p, c) => p + c, 0);
//   return add;
// };

// const result = sumOfAllElements([1, 2, 3, 4, 5]);
// console.log(result);

// Remove duplicates from an array.

// const duplicateArray = (arr) => {
//   return [...new Set(arr)];
// };
// const result = duplicateArray([1, 1, 1, 1, 1, 2, 3, 4, 5]);
// console.log(result);

// Find the first non-repeating character in a string.

// const nonRepeatingString = (char) => {
//   let character = char.includes();
//   return character;
// };

// const result = nonRepeatingString("a", "a", "b");
// console.log(result);

// Check if a number is prime.

// const primeNumber = (...num) => {
//   const number = num.filter((n) => n % 2 === 0);
//   return number;
// };

// const result = primeNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(result);

// 1. write a function a called countOccurens()
// that takes in a string and a characters returns
// the number of countOccurenses of that character in the string.

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

// 6. write a function called removeDuplicates
// that takes in a array and returns a
//  new array with duplicate array removed

// const removeDuplicates = (str) => {
//   return [...new Set(str)];
// };

// const result = removeDuplicates([1, 2, 3, 3, 3, 3, 4, 5]);
// console.log(result);

// 10. like this or not like this

// const displayLikes = (names) => {
//   const length = names.length;
//   if (length === 0) {
//     return "no one like this";
//   } else if (length === 1) {
//     return `${names[0]} , like this`;
//   } else if (length === 2) {
//     return `${names[0]} , ${names[1]} and like this`;
//   } else if (length === 3) {
//     return `${names[0]} , ${names[1]} , ${names[2]} and like this`;
//   } else if (length === 4) {
//     return `${names[0]} , ${names[1]} , ${names[2]} , ${names[3]} and like this`;
//   }
// };

// const result = displayLikes(["aadil", "user", "user2"]);
// console.log(result);

// // 9. fizbuzzy

// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0 && 5 === 0) {
//     console.log("fizzBuzz");
//   }
//   if (i % 3 === 0) {
//     console.log("fiuzz");
//   }

//   if (i % 5 === 0) {
//     console.log("Buzz");
//   }
//   console.log(i);
// }

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

// Write a function called findMissingNumber that takes in an array of unique
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

// const result = findMissingNumber([1, 2, 3, 5]);
// console.log(result);

// 8.Write a function diceGameSimulation(numSimulation) that simulates a dice game
// for a given number of times. In each simulation:

// Roll two dice (generate two random numbers between 1 and 6).
// Calculate their sum.
// Determine the result based on the sum:
// If the sum is 7 or 11 → result is "win"
// If the sum is 2, 3, or 12 → result is "lose"
// Otherwise → result is "roll again"

// const diceGameSimulation = (dice) => {
//   let results = [];

//   const dice1 = Math.floor(Math.random() * 6) + 1;
//   const dice2 = Math.floor(Math.random() * 6) + 1;

//   const sum = dice1 + dice2;

//   let result;

//   for (let i = 0; i < dice; i++) {
//     if (sum === 7 || sum === 11) {
//       result = "win";
//     }
//     if (sum === 2 || sum === 3 || sum === 12) {
//       result = "lose";
//     } else {
//       result = "again";
//     }
//     results.push({
//       dice1,
//       dice2,
//       result,
//       sum,
//     });
//   }
//   return results;
// };

// const dic = diceGameSimulation(10);
// console.table(dic);
