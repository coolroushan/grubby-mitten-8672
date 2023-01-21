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


let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");


let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");



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
            let empId = updateEmpIdInput.value;
            let empName = updateEmpNameInput.value;
            let empImage = updateEmpImageInput.value;
            let empDept = updateEmpDeptInput.value;
            let empSalary = updateEmpSalaryInput.value;
            let empObj ={}
            if(empId) empObj['id'] = empId;
            if(empName) empObj['name'] = empName; 
            if(empImage) empObj['image'] = empImage;
            if(empDept) empObj['salary'] = empDept;
            if(empSalary) empObj['salary'] = empSalary;
            fetch(`https://63c55501f3a73b347853986b.mockapi.io/users/${Math.floor(Math.random()*100)}`, {
              method : 'PUT',
              headers : {
                'Content-Type' : 'application/json'
              },
              body : JSON.stringify(empObj)
            })
            .then(res => res.json())
            .then(data => {
              alert(`Data of ${empId} updated.`)
              renderemployee()
            })
            .catch(err => alert(JSON.stringify(err)))
            
        })

        box.append(img,name,description,price,remove,br,update)
        products.append(box)
    })
}