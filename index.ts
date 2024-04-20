"use strict";
//string variable
let greeting = "hello world";
console.log(greeting);
//Q no 2:Assign integer values and perform arithmetic operations.
let num1 = 4;
let num2 = 5;
console.log(`${num1} + ${num2} =${num1 + num2}`);
console.log(`${num1} - ${num2} =${num1 - num2}`);
console.log(`${num1} * ${num2} =${num1 * num2}`);
console.log(`${num1} / ${num2} =${num1 / num2}`);
//Q no 3:Swap the values of two variables without using a third variable.
let x = 1;
let y = 2;
console.log(`"Before swap:',"x=",x ,"y=",y"`);
x = x * y;
y = x / y;
x = x / y;
console.log(`"After swap:',"x =",x ,"y =",y"`);
//Q no 4:Create a string variable and try changing its type.
let message;
message = "hello";
//message = "12";
//Q no 5:Use the modulus operator (%) to find the remainder.
console.log(`Remainder of ${num1} & ${num2} using % operator= ${num1 % num2}`);
//Q no 6:Increment a variable's value by 1 using two different methods.
let counter = 0;
counter += 1;
counter++;
console.log("Increment value : ", counter);
//Q no 7:Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a = true;
let b = false;
let c = true;
console.log("AND:", a && b);
console.log("OR:", a || b);
console.log("NOT", !c);
//Q no 8:Show examples of using compound assignment operators.
let num = 15;
num += 5;
console.log("+=", num);
num -= 2;
console.log("-=", num);
num *= 2;
console.log("*=", num);
num /= 3;
console.log("/=", num);
//Q no 9:Write a program to check if a number is even or odd.
let numb = 15;
if (numb % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}
//Q no 10: Check if age is 18 or older to determine voting eligibility.
let personage = 30;
if ("personage >=18") {
    console.log("Eeligible for vote");
}
else {
    console.log("Not Eligible for vote");
}
//Q no 11:Assign a grade based on a numerical score.
let score = 80;
if ("score >=95") {
    console.log("Grade A");
}
else if ("score >=80") {
    console.log("Grade B");
}
else if ("score >=70") {
    console.log("Grade C");
}
else if ("score >=60") {
    console.log("Grade D");
}
else if ("score >=50") {
    console.log("Grade E");
}
else if ("score >=40") {
    console.log("Grade F");
}
//Q no 12:Find the maximum of three numbers.
let X = 2;
let Y = 4;
let Z = 8;
let max = Math.max(X, Y, Z);
console.log("Max:", max);
//Q no 13:Check if a given year is a leap year.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("year is a leap year");
}
else {
    console.log("year isn't a leap year");
}
//Q no 14:Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 80;
let celsius = (fahrenheit - 32) * (5 / 9);
console.log("Celsius:", celsius.toFixed(2));
//Q no 15:Determine the sign of this number.
let number = -5;
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
//Q no 16:Print the multiplication table for this number up to 10.
const table = 5;
console.log("5 * 1 =", 5 * 1);
console.log("5 * 2 =", 5 * 2);
console.log("5 * 3 =", 5 * 3);
console.log("5 * 4 =", 5 * 4);
console.log("5 * 5 =", 5 * 5);
console.log("5 * 6 =", 5 * 6);
console.log("5 * 7 =", 5 * 7);
console.log("5 * 8 =", 5 * 8);
console.log("5 * 9 =", 5 * 9);
console.log("5 * 10 =", 5 * 10);
