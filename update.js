let products = document.getElementById('products')
let baseServerURL = "https://63c55501f3a73b347853986b.mockapi.io";

window.addEventListener('load', ()=>{
    render()
    // renderemployee()
})

function render(){
    fetch('https://63c55501f3a73b347853986b.mockapi.io/users')
    .then(res => res.json())
    .then((data)=>{
        // console.log(true)
        // arr.push
        shopping(data)
    })
}


let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let update_employee = document.getElementById('update-employee')

let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let add_employee = document.getElementById('add-employee')



//--------------------------------------------------------------   ADDING NEW PRODUCT   -----------------------------
add_employee.addEventListener('click',()=>{
    let productname = empNameInput.value;
    let productimage = empImgInput.value;
    let productdescription = empDeptInput.value;
    let productprice = empSalaryInput.value;

    if(productname !== "" && productimage !== "" && productdescription !== "" && productprice !== ""){
        let userObj = {
            name:productname,
            image:productimage,
            description:productdescription,
            price:productprice
        }
        createProduct(userObj)
    } else {
        alert('Please fill remaining data')
    }
})

// ------------------------------------------------------------------- ADDING NEW PRODUCT FUNCTION-------------
function createProduct(userObj){
    fetch('https://63c55501f3a73b347853986b.mockapi.io/users',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
}


///-------------------------------------------------------   UPDATING THE PRODUCT DATA-------------------------

update_employee.addEventListener('click',()=>{

        let empId = updateEmpIdInput.value;
        let empName = updateEmpNameInput.value;
        let empImage = updateEmpImageInput.value;
        let empDept = updateEmpDeptInput.value;
        let empSalary = updateEmpSalaryInput.value;

        let empObj ={}
        if(empName) empObj['name'] = empName;
        if(empImage) empObj['image'] = empImage;
        if(empSalary) empObj['price'] = empSalary;
        if(empDept) empObj['description'] = empDept;
        if(empId) empObj['id'] = empId;

          fetch(`${baseServerURL}/users/${empId}`, {
            method : 'GET',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(empObj)
          })
          .then(res => res.json())
          .then(data => {
            alert(`Data of ${empId} updated.`)
            shopping(data)
          })
          .catch(err => alert(JSON.stringify(err)))
        //   shopping()
       })

////------------------------------------------------------------- UPDATE PRODUCT FUNCITON---------------------------
function updateProduct(userObj){
    fetch('https://63c55501f3a73b347853986b.mockapi.io/users',{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
}

//---------------------------------------------------------------------  SHOWING AND EDITING EXISTING PRODUCT-----
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

/////------------------------------------------------------------------------------------
        let remove = document.createElement('button')   
        remove.innerText = 'Remove'
        remove.style.color = 'red'
        remove.addEventListener('click',function(){
            fetch(`https://63c55501f3a73b347853986b.mockapi.io/users/${element.id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(element)
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
            })
        })

//========================================================

        let update = document.createElement('button')
        update.innerText = "Update"
        update.style.color = 'green'
        update.addEventListener('click', ()=>{
            updateEmpIdInput.value = element.id;
            updateEmpNameInput.value = element.name
            updateEmpImageInput.value =  element.image
            updateEmpDeptInput.value = element.description
            updateEmpSalaryInput.value = element.price
        })
///----------------------------------------------------------------
        box.append(img,name,description,price,remove,update)
        products.append(box)
    })
}

///----------------------------   delete
function remove(id){
    
}













/////******************************************************************************************************************************************** */

  
  //                                              Function to create list of employees on click of get employee
  function renderemployee(queryselector=null){
    fetch(`${baseServerURL}/users${queryselector ? queryselector : ""}`)
    .then(res => res.json())
    .then((data)=>{
      console.log(data)
      let empObj = data.map(emp => ({
        id: emp.id,
        title: emp.name,
        salary: emp.price,
        description:"Rs  " + emp.description,
        linkText:'Edit',
        linkUrl:'https://google.com',
        imageUrl:emp.image
      }))
      EmpData = empObj
      renderCards(empObj)
    })
   
  }
  
  function renderCards(cardData) {
    let cardList = `
      <div class="card-list">
        ${ cardData.map(item => getCard(item.id, item.title, item.description, item.linkText, item.linkUrl, item.imageUrl)).join('') }
      </div>
    `
    products.innerHTML = cardList;
  
  //                                                                        edit the particular employee >>>
  let readmore = document.querySelectorAll('.card__link');
  console.log(readmore)
  for(let edit of readmore){
    edit.addEventListener('click', (e)=>{
      alert(e.target.dataset.id)
      e.preventDefault();
    //   let currentuserId = e.dataset.id
      console.log(e)
      updateUser(currentuserId)
    })
  }
  }
  
  //                                                                      Function for updating employee data
  function updateUser(currentuserId){
    fetch(`${baseServerURL}/employees/${currentuserId}`)
    .then(res => res.json())
    .then(data => {
      updateEmpIdInput.value = data.id;
      updateEmpNameInput.value = data.name
      updateEmpImageInput.value =  data.image
      updateEmpDeptInput.value = data.description
      updateEmpSalaryInput.value = data.price
  
      // updateScoreEmpId.value = data.id;
      // updateScoreEmpSalary.value = data.salary;
  
    })
  }
  
  //                                                                 Responsible for creating html structure 
  function getCard(id, title, desc, linkText, linkUrl, imageUrl){
    let card = `
        <div class="card" data-id=${id}>
          <div class="card__img">
          <img src=${imageUrl} alt="food" />
          </div>
          <div class="card__body">
            <h3 class="card__item card__title">${title}</h3>
            <div class="card__item card__description">
              ${desc}
            </div>
            <a href='${linkUrl}' data-id=${id} class="card__item card__link">${linkText}</a>
          </div>
        </div>
    `
    return card
  }
  
  

