// spread oparetor is ...anyarryname

let num = [3, 6, 1]
let num2 = [90, 80,3 , ...num]
// console.log(num2);

// minimum number 
let ary = [2,3,4,1];
// console.log(...ary);

//maximum numbar

let maxnum = [1, 6, 8,10]
// console.log(Math.max(...maxnum));

let numb = [2, 3, 4]
function sumfunc(num1, num2, num3) {
    return num1+num2+ num3
}

console.log(sumfunc(...numb))