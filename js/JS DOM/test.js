let div = document.querySelector(".container")

let h1 = div.querySelector('h1')

let pera = document.createElement('p')


let node = document.createTextNode('this creat node')

pera.appendChild(node)

// div.insertBefore(pera, h1)



div.replaceChild(pera, h1)

