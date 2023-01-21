let tbody = document.getElementById('tablebody')

let client = JSON.parse(localStorage.getItem('client'))||[]


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
client = orders

localStorage.setItem('client', JSON.stringify(client))

console.log(client)


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

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
    }
}

data()