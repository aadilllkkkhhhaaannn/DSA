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

// // 2. write a function called findmaximum number that takes in
// //  a array of numbers and returns the largest number
// //  in the array

// const findmaximum = (array) => {
//   let max = [0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// };

// const result = findmaximum([1, 34, 45, 3, 6, 46, 3, 6]);
// console.log(result);

// find minimum number

// const findMinimumNumber = (array) => {
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min;
// };

// const results = findMinimumNumber([1, 2, 3, 4, 5, 6]);
// console.log(results);

// 3. Write a function called titleCase that takes in a string and
//  returns the string with first letter of each word capitalized

// const titleCase = (str) => {
//   const words = str.length.toUpperCase().split("");
//   for (let i = 0; i < str.length; i++) {

//   }
//   return words;
// };

// const result = titleCase("i am cat");

// 4. Write a function called reverseString that
//  takes in a string and returns of that string

// const reverseString = (str) => {
//   const reverse = str.split("").reverse().join(" ");
//   return reverse;
// };

// const result = reverseString("adil");
// console.log(result);

// 5. Write a function to find the maximum of two numbers.

// const findmaximum = (num) => {
//   let max = num[0];

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//       max = num[i];
//     }
//   }
//   return max;
// };

// const result = findmaximum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

// 6. Reverse a given string.

// const reverseString = (str) => {
//   let reverse = str.split("").reverse().join("");
//   return reverse;
// };

// const result = reverseString("12345");
// console.log(result);

// 7. Calculate the sum of all elements in an array.

// const calculateAllNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// const result = calculateAllNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

// 8. Count the number of vowels in a string.

// const countNumber = (str) => {
//   let count = 0;
//   const vowels = "aeiou";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = countNumber("adil");
// console.log(result);

// 9. Check if a string is a palindrome.

// const palindrome = (string) => {
//   const reversed = string.split("").reverse().join("");
//   return reversed === string;
// };

// const result = palindrome("madam");
// console.log(result);

// 10. Find the smallest number in an array.

// const findMinimumNumber = (array) => {
//   let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min;
// };

// const result = findMinimumNumber([10, 2, 3]);
// console.log(result);

// for interview

// // // 1. write a function a called countOccurens()
// // // that takes in a string and a characters returns
// // // the number of countOccurenses of that character in the string.

// const countOccurenses = (str, char) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = countOccurenses("bababa", "b");
// console.log(result);

// // 2. write a function called findmaximum number that takes in
// //  a array of numbers and returns the largest number
// //  in the array

// const findMaxmumNumber = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// const result = findMaxmumNumber([1, 2, 54, 56, 4, 55]);
// console.log(result);

// example of hoisting
// console.log(x);
// var x = 5;

//  //

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

// const num = [1, 2, 4, 5];
// console.log(findMissingNumber(num));

// const findMaxmumNumber = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// const result = findMaxmumNumber([1, 2, 3, 4, 5]);
// console.log(result);

// CountOccoucrenses

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

// n/2

// 3. Write a function called titleCase that takes in a string and
//  returns the string with first letter of each word capitalized

// const titleCase = (str) => {
//   const words = str.toLowerCase().split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words;
// };
// const result = titleCase("i am a developer");
// console.log(result);

// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };

// const result = reverseString("aadil");
// console.log(result);

// 6. write a function called removeDuplicates
// that takes in a array and returns a
//  new array with duplicate array removed

// const findMissingNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let n = arr.length + 1;
//   let total = (n * (n + 1)) / 2;
//   return total - sum;
// };
// const findMissingNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let n = arr.length + 1;
//   let total = (n * (n + 1)) / 2;
//   return total - sum;
// };

// const result = findMissingNumber([1, 2, 3, 4, 6]);
// console.log(result);

// const displayLikes = (names) => {
//   const length = names.length;

//   if (length === 0) {
//     return "no one like this";
//   } else if (length === 1) {
//     return `${names[0]} likes this`;
//   } else if (length === 2) {
//     return `${names[0]} and ${names[1]} liked this`;
//   } else if (length === 3) {
//     return `${names[0]} , ${names[1]} and ${names[2]} liked this`;
//   } else {
//     return `${names[0]}, ${names[1]} and ${length - 2} other liked this`;
//   }
// };

// const result = displayLikes(["aadil", "rehan", "imran sir", "yasir"]);
// console.log(result);

// const likedPerson = (names) => {
//   const length = names.length;

//   if (length === 0) {
//     return "no one like this";
//   } else if (length === 1) {
//     return `${names[0]} like this`;
//   } else if (length === 2) {
//     return `${names[0]} and ${names[1]} likes this`;
//   } else if (length === 3) {
//     return `${names[0]} , ${names[1]} and ${names[2]} likes this`;
//   } else if (length === 4) {
//     return `${names[0]} , ${names[1]} , ${names[2]} and ${names[3]} likes this`;
//   }
// };
// const result = likedPerson(["yasir"]);
// console.log(result);

// findMissingLetter

// const findMissingletter = (arr) => {
//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const startIndex = alphabet.indexOf(arr[0]);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alphabet[startIndex + i]) return alphabet[startIndex + i];
//   }
//   return "";
// };

// const result = findMissingletter(["A", "C"]);
// console.log(result);

// Dice simulation

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

// find Maximum number

// const findMaximumNumber = (str) => {
//   let max = str[0];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] > max) {
//       max = str[i];
//     }
//   }
//   return max;
// };

// const result = findMaximumNumber([1, 2, 3, 4, 5]);
// console.log(result);

// count vowels

// const countOccurens = (str, char) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = countOccurens("banaaana", "a");
// console.log(result);

// liked by person

// const likedPerson = (likes) => {
//   const length = likes.length;

//   if (length === 0) {
//     return "no one like this";
//   } else if (length === 1) {
//     return `${likes[0]} , like this`;
//   } else if (length === 2) {
//     return `${likes[0]} and ${likes[1]} , liked this`;
//   } else if (length === 3) {
//     return `${likes[0]} , ${likes[1]} and ${likes[2]} , liked this`;
//   } else if (length === 4) {
//     return `${likes[0]} , ${likes[1]} , ${likes[2]} and ${likes[3]} , liked this`;
//   }
// };

// const result = likedPerson(["name", "me", "alfaix"]);
// console.log(result);

// const findMaximumNumber = (str) => {
//   let max = str[0];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] > max) {
//       max = str[i];
//     }
//   }
//   return max;
// };

// const result = findMaximumNumber([1, 2, 3, 4, 5]);
// console.log(result);

// const findMissingNumber = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let n = arr.length + 1;
//   const total = (n * (n + 1)) / 2;
//   return total - sum;
// };

// const result = findMissingNumber([1, 3, 4, 5]);
// console.log(result);

// // // 1. write a function a called countOccurens()
// // // that takes in a string and a characters returns
// // // the number of countOccurenses of that character in the string.

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

// 4. Write a function called reverseString that
//  takes in a string and returns of that string

// const reverseString = (str) => {
//   const reverse = str.split("").reverse().join("");
//   return reverse;
// };

// const result = reverseString("aadil");
// console.log(result);

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// 6. write a function called removeDuplicates
// that takes in a array and returns a
//  new array with duplicate array removed

// const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };

// const result = removeDuplicates([1, 2, 2, 2, 2, 3, 4, 5, 6]);
// console.log(result);

// 10. like this or not like this

// const likedPerson = (names) => {
//   const length = names.length;

//   if (length === 0) {
//     return "no one like this";
//   } else if (length === 1) {
//     return `${names[0]} , like this`;
//   } else if (length === 2) {
//     return `${names[0]} and ${names[1]} liked this`;
//   } else if (length === 3) {
//     return `${names[0]} , ${names[1]} and ${names[2]} liked this`;
//   } else if (length === 4) {
//     return `${names[0]} , ${names[1]} , ${names[2]} and ${names[3]} , liked this`;
//   }
// };
// const result = likedPerson(["alfaiz", "user", "user2"]);
// console.log(result);

// const arr = ["arr", name, 1234];
// console.log(arr);

// let mixedArray = [42, "Hello", "Ravi", 3.14, "123", "Apple", 2025];
// console.log(mixedArray);

// const number = (num) => {
//   for (let i = 0; i < num; i++) {
//     console.log(["I Love You"]);
//   }
// };

// number(100);

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
