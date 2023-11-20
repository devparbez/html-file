// string floating string to tofixed kore floating number korar rules.

// Note: 1st e string text theke floating number e nite hone
// 2nd. pore floating number theke tofixed e nite hobe
// 3rd. pore abar parsefloat kore floating number e nite hobe 


let price = '444.3876'
price = parseFloat(price)
price = price.toFixed(2)
price = parseFloat(price)
console.log( price);

//parseINT

let number1 = '234'
console.log(parseInt(number1));

//to fixed only work when use float number
let number = 788.094;
number = number.toFixed(2)
number = parseFloat(number)
// console.log(number);

//parse float
let floatNumber = 768768.76868;
floatNumber = floatNumber.toFixed(2);
floatNumber = parseFloat(floatNumber)
// console.log(floatNumber);

//number
let user = 23.798789
user = user.toFixed(3)
let myuser = parseFloat(user)
// console.log(myuser);

// tostring type use

let num = 98.090;
num = num.toString()
console.log(num);

//number e convert

let numCon = '9878'
// numCon = Number(numCon)

console.log(Number(numCon));

//String convert

let nmuTo = 233;
// nmuTo = String(nmuTo)
console.log(String(nmuTo));