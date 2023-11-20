var objects = {
    bikeName: ['ktm', 'bajaj', 'sder'],
    price: 232,
    hight: 6.8,
    ase: true,
    'set': 'idea'
};

// console.log(objects.bikeName[2]);

var myCustomer = {
    hername :  'smiths',
    email:"msd@gmail.com",
    pass: 809089080,
    location : 'gazipur',
    adres : ['addd', 98, 'pklkj'],
    myVip: {
        vinNmumber: [21, 89, 90],
        vipService: "vip adrees"
    }

};

Object.freeze(myCustomer)
Object.freeze(myCustomer.myVip.vinNmumber);
delete myCustomer.myVip.vinNmumber [1];
myCustomer.server = 32;
myCustomer.email = 'khy@gmail.ph';
myCustomer.adres = ['tey', 'jhd'];
myCustomer.adres.sort();
delete myCustomer.email;

console.log(myCustomer);

var test = {
    term : [87, 0.90],
    trej: "uuyiy"
};
delete test.term;
Object.freeze(test);

// console.log(test);