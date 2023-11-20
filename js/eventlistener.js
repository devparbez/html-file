function dateFunction(){
    let tm = buton.innerHTML = new Date
    tm.toLocaleTimeString()
}

let buton = document.getElementById('btn')
buton.addEventListener('click', dateFunction)

