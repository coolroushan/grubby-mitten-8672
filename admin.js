let user = document.getElementById('count')
let visitors = document.getElementById('Visitors')
let products = document.getElementById("Product")

let count = JSON.parse(localStorage.getItem('count'))||0
let client = JSON.parse(localStorage.getItem('client'))||[]

let arr = []

let length = 0
function render(){
    fetch('https://63c55501f3a73b347853986b.mockapi.io/users')
    .then(res => res.json())
    .then((data)=>{
        arr = data.map((ele)=>{
            return ele
        })
        console.log(arr)
        length = arr.length
        products.innerText = length
        // shopping(data)
    })
}
render()
window.addEventListener('load', ()=>{
    count++
    localStorage.setItem('count', JSON.stringify(count))
    visitors.innerText = count++
    user.innerText = client.length
})

/////////////------------------------------table--------------------
let tbody = document.getElementById('tablebody')

let orders = [
    {
        category: "by AgriPro",
        name: 'camera',
        quantity: 4,
        Price: 3467,
        Orderstatus: 'Pending'
    },
    {
        category: "by AgriPro",
        name: 'camera',
        quantity: 4,
        Price: 3467,
        Orderstatus: 'Pending'
    },
    {
        category: "by AgriPro",
        name: 'camera',
        quantity: 4,
        Price: 3467,
        Orderstatus: 'Pending'
    },
    {
        category: "by AgriPro",
        name: 'camera',
        quantity: 4,
        Price: 3467,
        Orderstatus: 'Pending'
    },
    {
        category: "by AgriPro",
        name: 'camera',
        quantity: 4,
        Price: 3467,
        Orderstatus: 'Pending'
    }

]



function data(){

    tbody.innerHTML = null
    for(let i=0; i<5; i++){
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerText = i+1

        let td2 = document.createElement('td')
        td2.innerText = orders[i].category

        let td3 = document.createElement('td')
        td3.innerText = orders[i].name

        let td4 = document.createElement('td')
        td4.innerText = orders[i].quantity

        let td5 = document.createElement('td')
        td5.innerText = orders[i].Price

        let td6 = document.createElement('td')
        
        if( i === 0){
        setTimeout(() => {
            td6.innerText = 'Processing'
            td6.style.color = 'yellow'
            setTimeout(() => {
                td6.innerText = "Order Confirmed"
                td6.style.color = 'green'
            }, 5000)
          }, 1000)
        } else {
            td6.innerText = "Order Confirmed"
            td6.style.color = 'green'
        }
        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
    }
}

data()

// tbody.innerHTML = "hello"
