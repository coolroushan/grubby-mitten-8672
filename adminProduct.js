let agripro = document.getElementById('agripro')
let fulcrum = document.getElementById('fulcrum')
let powerwash = document.getElementById('powerwash')
let powerhouse = document.getElementById('powerhouse')
let nilkamal = document.getElementById('nilkamal')
let dubam = document.getElementById('dubam')
let softspan = document.getElementById('softspan')
let kirloskar = document.getElementById('kirloskar')
let hikvision = document.getElementById('hikvision')

let companydiv = document.getElementById('companydiv')

agripro.addEventListener('click',()=>{
    // console.log(true)
    // let agripro = arr.filter((element)=>{
    //     element.description == "by AgriPro"
    // })
    // shopping(agripro)
    render()
})

// window.addEventListener('load',()=>{
//     render()
// })



function render(){
    fetch('https://63c55501f3a73b347853986b.mockapi.io/users')
    .then(res => res.json())
    .then((data)=>{
        console.log(true)
        // arr.push
        shopping(data)
    })
}



function shopping(data){
    
    companydiv.innerHTML = null

    data.forEach(element => {
        let box = document.createElement('div')
        box.setAttribute('id',"box")

        let img = document.createElement('img');
        img.setAttribute('src',element.image);

        let name = document.createElement('p')
        name.innerText = element.name;
        name.style.lineHeight = '25px'

        let description = document.createElement('p');
        description.innerText = element.description;
        
        let price = document.createElement('p');
        price.setAttribute('id','price')
        price.textContent =`Rs. ${element.price}` ;

        let remove = document.createElement('button')
        remove.innerText = 'Remove'

        remove.addEventListener('click',()=>{
            console.log('removed')
        }) 

        let update = document.createElement('button')
        update.innerText = "Update"
        update.style.marginLeft = '10px'
        update.addEventListener('click', ()=>{
            console.log('Update')
            
        })

        box.append(img,name,description,price,remove,update)
        companydiv.append(box)
    })
}