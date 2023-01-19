let products = document.getElementById('products')

window.addEventListener('load', ()=>{
    render()
})

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
    
    products.innerHTML = null

    data.forEach(element => {
        let box = document.createElement('div')
        box.setAttribute('id',"box")

        let img = document.createElement('img');
        img.setAttribute('src',element.image);
        img.style.width = '150px'
        img.style.height = '100px'
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

        let br = document.createElement('br')

        let update = document.createElement('button')
        update.innerText = "Update"
        update.style.marginLeft = '15px'
        update.addEventListener('click', ()=>{
            console.log('Update')
            
        })

        box.append(img,name,description,price,remove,br,update)
        products.append(box)
    })
}