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

// 2. write a function called findmaximum number that takes in
//  a array of numbers and returns the largest number
//  in the array

// const findmaximum = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// const result = findmaximum([1, 23, 4, 5, 6, 5, 4, 4, 5]);
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

// 4. Write a function called reverseString that
//  takes in a string and returns of that string

// const reverseString = (str) => {
//   const reverse = str.split("").reverse().join("");
//   return reverse;
// };

// const result = reverseString("alfaiz");
// console.log(result);

// 5. write a function called countVowels
// that takes in a array string and returns
// the number of vowels in the string

// const countVowels = (str) => {
//   for (let i = 0; i < str.length; i++) {
//   }
// };

// const result = countVowels("a", "e", "i", "o", "u");
// console.log(result);

// 6. write a function called removeDuplicates
// that takes in a array and returns a
//  new array with duplicate array removed

// const removeDuplicates = (arr) => {
//   const uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// };

// 2 option

//     function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = removeDuplicates(numbers);

// console.log(uniqueNumbers);

// const result = removeDuplicates([1, 2, 3, 4, 5, 6, 6]);
// console.log(result);

// 7. write a function a palindrome is a word , phrase number ('madam')

// const isPalindrome = (str) => {
//   const reversed = str.split("").reverse().join("");
//   return reversed === str;
// };

// const result = isPalindrome("madam");
// console.log(result);

// 8. write a function called arrayIntersection that takes
//  in a two array and return array and console the common number in array

// const arrayIntersection = (arr1, arr2) => {
//   const interSection = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !interSection.includes(arr1)) {
//       interSection.push(arr1[i]);
//     }
//   }
//   return interSection;
// };

// const result = arrayIntersection([1, 2, 3, 4, 5], [4, 5, 6]);
// console.log(result);

// 9. fizbuzzy pending

// 10. like this or not like this

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
//     return `${names[0]}, ${names[1]} and ${length - 2} other like this`;
//   }
// };

// const result = displayLikes(["aadil", "rehan", "imran sir", "yasir"]);
// console.log(result);

// 11. find missing letter that takes in a string and returns the first

// const findMissingletter = (arr) => {
//   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const startIndex = alphabet.indexOf(arr[0]);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alphabet[startIndex + i]) return alphabet[startIndex + i];
//   }
//   return " ";
// };

// const result = findMissingletter(["A", "C", "D"]);
// console.log(result);

// 11. write a function called findFirstNonReeatinCharacter
//  that takes in a string and return

// const findFirstNonReeatinCharacter = (str) => {
//   const charCount = {};
//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//     return null;
//   }
//   return charCount;
// };

// const result = findFirstNonReeatinCharacter("banana");
// console.log(result);

// 1. write a function a called countOccurens()
// that takes in a string and a characters returns
// the number of countOccurenses of that character in the string.

// const countOccurenses = (arr, char) => {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === char) {
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

// const findMaximumNumber = (str) => {
//   let max = str[0];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] > max) {
//       max = str[i];
//     }
//   }
//   return max;
// };

// Dice simulation

// function diceGameSimulation(numSimulations) {
//   const results = [];

//   for (let i = 0; i < numSimulations; i++) {
//     const dice1 = Math.floor(Math.random() * 6) + 1;
//     const dice2 = Math.floor(Math.random() * 6) + 1;
//     const sum = dice1 + dice2;

//     let result;
//     if (sum === 7 || sum === 11) {
//       result = "win";
//     } else if (sum === 2 || sum === 3 || sum === 12) {
//       result = "lose";
//     } else {
//       result = "roll again";
//     }

//     results.push({
//       dice1,
//       dice2,
//       sum,
//       result,
//     });
//   }

//   return results;
// }

// const result = diceGameSimulation(1);
// console.table(result);

// write a function called formatPhoneNumber that takes in a
// array of numbers and returns a string representing
// the phone number formed by contacting the numbers
// in the specified format

// const formatPhoneNumber = (numbers) => {
//   const areaCode = numbers.slice(0, 3).join("");
//   const prefix = numbers.slice(3, 6).join("");
//   console.log(prefix);
//   return null;
// };

// const result = formatPhoneNumber([9, 8, 2, 6, 0, 4, 6, 8, 9, 0]);
// console.log(result);
// // output "(982) 604-6890"

// writer a function a called sumOffEvenSquares that takes
// an array of numbers and returns the sum of the
// squares of the even numbers in the array

// const sumOffEvenSquares = (numbers) => {
//   const evenSquare = numbers
//     .filter((num) => num % 2 === 0)
//     .map((num) => num ** 2);
//   return evenSquare.reduce((p, c) => p + c, 0);
// };

// const result = sumOffEvenSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

// const sumOffEvenSquares = (numbers) => {
//   const evenSquare = numbers
//     .filter((num) => num % 2 === 0)
//     .map((num) => num ** 2);
//   return evenSquare.reduce((p, c) => p + c, 0);
// };

// const result = sumOffEvenSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);
