// document.getElementsByTagName('h1')[0].style.color = 'red';

// document.getElementsByClassName('classselect')[0].style.color = 'green'

// document.getElementById('idselector').style.color = 'blue'

// document.querySelector('.quaryselectorclass').style.color = 'green'

// document.querySelector('#quaryselectorid').style.color = 'tomato'

// document.getElementsByName('nameselector')[0].style.color = 'red'
let grantparent = document.querySelector('div')

let parent = grantparent.children

let child = parent[1].children

// console.log(child); 

let grend = document.querySelector('.grand')

let grend2 = grend.querySelectorAll('.parent')

// console.log(grend2);
// parent element

let parant = document.querySelector('ul')

let pr = parant.parentElement
// console.log(pr);

let directparent = document.querySelector('li')
// console.log(directparent.closest('div'))

//sibling 

let sibling = document.querySelector('.parent')



let resultsebling = sibling.nextElementSibling

console.log(resultsebling);





