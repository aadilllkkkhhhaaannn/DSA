// OPPS : Object Oriented Programming Style

// Basically object ek asa data structure h jisme key value pair me data store karte h
// 1.Litreally
// const objectName = Object.freeze({
//   name: "aadil",
//   email: "aadil@gmail.com",
//   password: 12345,
// });

// console.log(objectName);

// // 2. Class Object

// const userAccount = new Object();

// userAccount.name = "aadil";
// userAccount.balance = 120000;

// // userAccount.name = "adil";

// // delete userAccount.name
// console.log(userAccount);

// 3. function to return

// function createAccount(name, balance) {
//   return {
//     name: name,
//     balance: balance,
//     accountNumber: Date.now(),
//   };
// }

// const user = createAccount("aadil", 10000);
// console.log(user);

// new Keyword In JavaScript, the new keyword is used to create an
//  instance of an object that has a constructor function or class behind it.

// 1.Constructor function
// Constructor - Constructor function is a speacial type of function used to create a initilize object.
// function BankAccount(name, balance) {
//   this.customerName = name;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// let name = new BankAccount("aadil", 1000);
// console.log(name);

// function ShadabBhai(name, balance) {
//   this.name = name;
//   this.balanace = balance;
//   this.AccountNumber = Date.now();
// }
// let intern = new ShadabBhai("user", 10000);
// let employee = new ShadabBhai("user", 50000);
// console.log(intern);
// console.log(employee);

// function BankAccount(name, balanace = 0) {
//   this.name = name;
//   this.accountNumber = Date.now();
//   this.balanace = balanace;
// }

// let user = new BankAccount("aadil", 10000);
// console.log(user);

// CLASS - class is a blueprint for creating objects

// class BankAccount {
//   name;
//   balanace;
//   accountNumber;

//   constructor(name, balanace = 0) {
//     this.name = name;
//     this.balanace = balanace;
//     this.accountNumber = Date.now();
//   }

//   deposit(num) {
//     this.balanace += num;
//   }
//   withdraw(num) {
//     this.balanace -= num;
//   }
// }

// let user = new BankAccount("aashu", 10000);

// user.deposit(20000);
// user.withdraw(25000);
// console.log(user);

// JavaScript me teen keywords hain jo hoisting ke dauran consider kiye jaate hain:
// var
// function (Function Declaration)
// class
