console.log("");
console.log("");
console.log("");
console.log("Question 1 Answer");
//Question 1
let value = 8;

if (value % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

console.log("");
console.log("");
console.log("");
console.log("Question 2 Answer");
//Question 2
let num = 2;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
// Question 3
console.log("");
console.log("");
console.log("");
console.log("Question 3 Answer");

let a = 20;
let b = 40;
let c = 50;

if (a > b && b > c) {
  console.log("A is greater", a);
} else if (b > a && b > c) {
  console.log("B is greater", b);
} else {
  console.log("C is greater", c);
}
console.log("");
console.log("");
console.log("");
console.log("Question 4 Answer");

//Question 4
let l = 5;
for (let i = 1; i <= 10; i++) {
  console.log(l, "*", i, "=", i * 5);
}
console.log("");
console.log("");
console.log("");
console.log("Question 5 Answer");
//Question 5
let sum = 0;
for (let i = 1; i <= 10; i++) {
  console.log(sum, "+", i, "=", (sum += i));
}
console.log("");
console.log("");
console.log("");
console.log("Question 6 Answer");
//Question 6
let f = 123;
let reverse = 0;

while (f > 0) {
  let digit = f % 10;
  reverse = reverse * 10 + digit;
  f = Math.floor(f / 10);
}
console.log(reverse);

console.log("");
console.log("");
console.log("");
console.log("Question 7 Answer");
//Question 7

let str = "madam";
let reversed = str.split("").reverse().join("");

if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
console.log("");
console.log("");
console.log("");
console.log("Question 8 Answer");
//Question 8

let e = 5 * 4 * 3 * 2 * 1;
console.log(e);
console.log("");
console.log("");
console.log("");
console.log("Question 9 Answer");
//Question 9

const number = 45892;
console.log(number.toString().length);

console.log("");
console.log("");
console.log("");
console.log("Question 10 Answer");
//Question 10
const st = "sohail";
const s = "shaban";

console.log(st.match(/a/g).length);

console.log("");
console.log("");
console.log("");
console.log("Question 11 Answer");
//Question 11
let p = 7;
let prime = true;
if (p <= 1) {
  prime = false;
}
for (let i = 2; i < p; i++) {
  if (p % i === 0) {
    prime = false;
    break;
  }
}
if (prime) {
  console.log("Prime hai");
} else {
  console.log("Prime nahi hai");
}

console.log("");
console.log("");
console.log("");
console.log("Question 12 Answer");
//Question 12

let n = 7;

let first = 0;
let second = 1;

for (let i = 1; i <= n; i++) {
  console.log(first);
  let sum = first + second;
  first = second;
  second = sum;
}
console.log("");
console.log("");
console.log("");
console.log("Question 13 Answer");
//Question 13

let nu = 54321;
let sumNumber = 0;

while (nu > 0) {
  sumNumber += nu % 10; //1, 2
  nu = Math.floor(nu / 10); // 5432
}
console.log(sumNumber);

console.log("");
console.log("");
console.log("");
console.log("Question 14 Answer");
//Question 14

let number1 = 153;
let temp = num;
let digits1 = num.toString().length;
let sum1 = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum1 = sum1 + digit ** digits1;
  temp = Math.floor(temp / 10);
}

if (sum1 === num) {
  console.log("Armstrong Number");
} else {
  console.log("Not an Armstrong Number");
}

console.log("");
console.log("");
console.log("");
console.log("Question 15 Answer");
//Question 15
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024));

console.log("");
console.log("");
console.log("");
console.log("Question 16 Answer");
//Question 16

let m = 78261;
let digits = String(m).split("");
let maxDigit = Math.max(...digits);
console.log(maxDigit);

console.log("");
console.log("");
console.log("");
console.log("Question 17 Answer");
//Question 17
let stri = "Hello World";
let count = 0;

for (let i = 0; i < stri.length; i++) {
  let ch = stri.charAt(i).toLowerCase();

  if (
    ch >= "a" &&
    ch <= "z" &&
    ch !== "a" &&
    ch !== "e" &&
    ch !== "i" &&
    ch !== "o" &&
    ch !== "u"
  ) {
    count++;
  }
}

console.log(count);

console.log("");
console.log("");
console.log("");
console.log("Question 18 Answer");
//Question 18
const originalArray = [1, 2, 2, 3, 4, 4, 5, 9, 1];
const uniqueArray = [...new Set(originalArray)];
console.log(uniqueArray);

console.log("");
console.log("");
console.log("");
console.log("Question 19 Answer");
//Question 19

const numbers = [10, 5, 8, 20, 15];
const ascedingOrder = numbers.sort((a, b) => a - b);
console.log(ascedingOrder[ascedingOrder.length - 2]);

console.log("");
console.log("");
console.log("");
console.log("Question 20 Answer");
//Question 20

const mySentence = "hello world, this is a test";
const words = mySentence.split(" ");
console.log(words);
// ["hello" "" this ""is "" a "" test]
const capitalizedWords = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(capitalizedWords);
const result = capitalizedWords.join(" ");
console.log(result);
