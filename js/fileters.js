let user = [
    {name: 'bohn alat', email: 'unvalid', age:0},
    {name: 'dohn sara', email: 'unvalid', age:10},
    {name: 'lon', email: 'valid', age:120},
    {name: 'John', email: 'valid', age:20}
]

let fn = user.filter((num) => num.age >= 20)

console.log(fn);

