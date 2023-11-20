let mydate = new Date()
// console.log('my date: '+ mydate.getDate()  + '/'+ mydate.getMonth() +'/' + mydate.getFullYear())

let date = new Date(2023, 12, 10, 10, 15, 30)
// console.log(date.toDateString());

let localTime = new Date()

console.log(localTime.toLocaleTimeString());

console.log(localTime.toDateString());

console.log(localTime.getMonth());
