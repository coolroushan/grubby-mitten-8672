

let user = document.getElementById('count')
let visitors = document.getElementById('Visitors')
let products = document.getElementById("Products")

let count = JSON.parse(localStorage.getItem('count'))||0

// count = counting

window.addEventListener('load', ()=>{
    count++
    // user.innerText = 23
    console.log(count)
localStorage.setItem('count', JSON.stringify(count))
visitors.innerText = count++

// products.innerText = 12
})

// let count = localStorage.setItem(JSON.stringify('count'))||0
