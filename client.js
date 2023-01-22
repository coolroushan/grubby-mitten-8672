let tbody = document.getElementById('tablebody')

let client = JSON.parse(localStorage.getItem('UserData'))||[]


localStorage.setItem('client', JSON.stringify(client))

console.log(client)


function data(){

    tbody.innerHTML = null
    for(let i=0; i<client.length; i++){
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerText = i+1

        let td2 = document.createElement('td')
        td2.innerText = client[i].Name

        let td3 = document.createElement('td')
        td3.innerText = client[i].Email

        let td4 = document.createElement('td')
        td4.innerText = client[i].Address

        let td5 = document.createElement('td')
        td5.innerText = client[i].City+','+client[i].State

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
    }
}

data()