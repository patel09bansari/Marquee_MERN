// debugger;

// var a = 10;
// // add(10, 10);
// add("Alice");

// function add(name){
//     console.log(name);
// }

// add("Alice");
// console.log("Hello World");

// function Morning(mor){
//     console.log("Morning");
// }
// function Afternoon(aft){
//     console.log("Afternoon");
// }
// function Evening(eve){
//     console.log("Evening");
// }

// switch("Afternoon"){
//     case "Morning":
//         Morning();
//         break;
//     case "Afternoon":
//         Afternoon();    
//     break;
//     case "Evening":
//         Evening();
//         break;
// }


// function license(age, license){
// if(age >= 18){
//     if(license == true){
//     console.log("You can drive");
// }
// } else {
//     console.log("You cant drive");
// }
// }

// license(10, false);


//function callback
// function hello(name){
//     console.log(name);
// }

// function greet(callback){
//     console.log("Hello");
//     callback();
// }
// greet(hello);



//high order function
// function mul(){
//     console.log("Heey");
// }


// function parent(){
//     return function child(){
//     console.log("I am parent");
// }

// console.log(child());
// }



//closure
// function outer(){
//     let x = 44;
//     return function inner(){
//         x++;
//         console.log(x);
//     }
// }
// let z = outer();
// z();
// z();

//accesses address but works on values and next time works on the same address and value is updated. 
// This is called closure. It is a function that has access to its outer function scope even after the outer function has returned.


//find: if not found the returns undefined, if found returns first occured the value.  
// let arr = [1, 2, 3, 44, 55, 6, 7, 58, 9];
// console.log(arr.find((value) => value == 9)); 


//map: iterate and transform (if you want) and return  a new array
// console.log(arr.map((value) => value == 9)); 
// console.log(arr.map((value) => value * 9)); 


//filter: return all the values that satisfy the condition.
// function filter(arr, target){
    // return arr.filter((value) => value >= target);
// }

// console.log(filter(arr, 10));

//array, '-', 2
// let array = [1, 2, 3, 4, 5];


//Anonnymous function: function without name for short term usage
//Callback function: function passed as an argument to another function later to be called back executed after the execution of the outer function.
//Arrow function: function with no name and no function keyword, used for short term usage, introduced in ES6, shorter syntax, no binding of this, cannot be used as constructor, cannot use yield inside it. 
// ()=>{}

//HOF: Higher Order Function: function that takes another function as an argument or returns a function as a result.
// console.log(array.reduce((acc, curr) => acc + curr, 0));


//31-08-2026
// Types of pattern of function: Callback function, Higher Order Function, Closure, Currying, Recursion, Memoization, Debouncing, Throttling, Partial Application, Composition, Pipelining, etc.

//Callback function: A callback function is a function that is passed as an argument to another function and is executed after the outer function has completed its execution. It allows for asynchronous programming and event handling in JavaScript.
// function sum(a, b , callback){  
//     console.log(a + b);
//     callback();
// }
// sum(12, 13, () => {
//     console.log("Callback executed");
// });



//synchronous callback: executed immediately after the outer function has completed its execution.
//example map, filter, reduce, forEach, etc. are synchronous callbacks.

//async callback: executed after the outer function has completed its execution, but not immediately. It is usually used for asynchronous operations like API calls, setTimeout, etc.    
//example setTimeout, setInterval, fetch, API calls etc. are asynchronous callbacks.

//it works for multiple times in specified interval of time. It is usually used for asynchronous operations like API calls, setTimeout, etc.
// setInterval(() => {
//     console.log("Hello World");
// }, interval);

//works for once in specified interval of time. It is usually used for asynchronous operations like API calls, setTimeout, etc.
// setTimeout(() => {
//     console.log("Hello World");
// }, 1000);


//Task 1
// let arr = [1, 2, 3, 4, 5];

// function sum(arr, fn1, fn2) {
//     fn1
//     let total = 0;
//     for (let i = 0; i <= arr.length - 1; i++) {
//         total += arr[i];
//     }
//     // fn1();
//     return total;
// }

// console.log(sum(arr, 
//     () => { console.log("Start"); }, 
//     () => { console.log("End"); }
// ));



//Task 2 
// function calculatePercentage(totalmarks){
//     let total=0;

//     for(let i=0;i<totalmarks.length;i++){
//         total=total+totalmarks[i]
//         console.log(total)
        
//     }
//     return total 
// }

// let marks=[80,75,77,99,89];
// let result=calculatePercentage(
//     marks
// );
//  console.log(result);


//class and object and constructor
//medium.com constructor-function..... website
// function user(name, age, course, marks) {
//     this.name = name;
//     this.age = age;
//     this.course = course;
//     this.marks = marks;

//     //Method
//     this.displayDetails = ()=>{
//         console.log(`Hello ${name}, age is ${age} years old and studying ${course} with marks ${marks} marks`);
//     }
// }

// let user1 = new user("John", 30, "Vadodara", 95);
// user1.displayDetails();



//01-09-2026

//diff between constructor: this, new keyword, new object creation
//regular function: performs specific task 
//properties are variables and methods are functions inside the class.


// Question: 
// 2. Create a BankAccount constructor with accountHolder, accountNumber, and balance.
// // Add deposit() and withdraw() ,interest(percent) methods.
// function BankAccount(name, accNumber,balance=0){
// this.accountHolderName = name;
// this.accountNumber=accNumber;
// this.balance=balance;


// // Create `Deposite` Method 
// // Balance: 10000
// // Task 1: Do calculation 
// // Task 2: Display ["Amount deposited of Amount:190 | Now Balance: 10190""] using callback Fn.
// this.deposit = ()=>{
// this.balance += 190;
// console.log(`Amount deposited : 190 | New Balance ${this.balance}`);
// }

// // Create `Withdraw` Method
// // Balance : 10190;
// // Task 1: Do calculation: make sure to check balance!=0 or balance>=amountToWinthdrwa
// // Task 2: Display ["Amount Withdrawn : 190 | Now Balance: 10000"] using callback Fn.
// this.withdraw = ()=>{
// if(this.balance != 0 || this.balance > 190){
//     this.balance -= 190;
//     console.log(`Amount withdrawn : 190 | Now blaance is ${this.balance}`);
// }
// } 
// }

// const Mohit = new BankAccount("Mohit","12050010005", 10000)
// const Vinay = new BankAccount("Vinay","12050020001",1201)
// Mohit.deposit();
// Mohit.withdraw();
// Vinay.deposit();
// Vinay.withdraw();



//*******now using callback for same example*******
function BankAccount(name, accNumber,balance=0){
this.accountHolderName = name;
this.accountNumber=accNumber;
this.balance=balance;

this.deposit = (amount, callback) => {
    this.balance += amount;
    let result = callback(amount, this.balance);
    return result;  
}

this.withdraw = (amountToWithdraw, callback) => {
    if(this.balance > amountToWithdraw){
        this.balance -= amountToWithdraw;
        let result = callback(amountToWithdraw, this.balance);
        return result;
    }
}

this.interest = (percent, callback) => {
    let interestAmount = (this.balance * percent) / 100;
    this.balance += interestAmount;
    let result = callback(interestAmount, this.balance);
    return result;
}

}

//callback function to display the result of deposit and withdraw
function displayDeposit(amount, balance){
    return `Amount deposited : ${amount} | New Balance ${balance}`;
}

function displayWithdraw(amount, balance ){
    return `Amount withdrawn : ${amount} | Now Balance: ${balance}`;
}

function displayInterest(amount, balance){
    return `Interest added: ${amount} | New Balance: ${balance}`;
}


const Mohit = new BankAccount("Mohit","12050010005", 10000)
const Vinay = new BankAccount("Vinay","12050020001",12000)

console.log(Mohit.deposit(10000, displayDeposit));
console.log(Mohit.withdraw(190, displayWithdraw));
console.log(Mohit.interest(5, displayInterest));

console.log(Vinay.deposit(500, displayDeposit));
console.log(Vinay.withdraw(100, displayWithdraw));
console.log(Vinay.interest(3, displayInterest));