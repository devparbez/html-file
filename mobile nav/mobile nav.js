let toggleopen = document.querySelector('.fa-bars')
let toggleclose = document.querySelector('.fa-xmark')
let ul = document.querySelector('ul')

toggleopen.addEventListener('click',()=>{
    ul.style.display = 'block'
})

toggleclose.addEventListener('click',()=>{
    ul.style.display = 'none'
   
})