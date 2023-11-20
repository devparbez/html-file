let shoppingcart = [
    {name:'pant', price:200},
    {name:'shart', price:100},
    {name:'pant', price:200},
    {name:'pant', price:500}
]
let res = shoppingcart.reduce((prv, cur) =>{
    return prv + cur.price
},0)

console.log(res);