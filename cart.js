let cartdata = JSON.parse(localStorage.getItem("buy"));

if (cartdata == null) cartdata = [];

displayProduct(cartdata);

let sum = 0;
for (let i = 0; i < cartdata.length; i++) {
  sum = sum + cartdata[i].price * cartdata[i].quantity;
}

document.querySelector("#order-total").textContent = sum;

let count = cartdata.length;
document.querySelector("#product-count").textContent = count;

function displayProduct(out) {

document.querySelector("#cart-container").innerHTML = "";



//Get the Data from CartData Array to Show Products By Applying For Each Loop


out.forEach((elem, i) => {

let div = document.createElement("div");

let productimage = document.createElement("img");
    productimage.setAttribute("src", elem.image);

let productName = document.createElement("p");
    productName.innerText = elem.name;
    productName.style.fontFamily = "Arial, Helvetica, sans-serif";
    productName.style.fontSize = "15px";
    productName.style.color = "rgb(66,66,66)";
    productName.style.marginTop="10px"

let productdes = document.createElement("p");
    productdes.innerText = elem.description;
    productdes.style.fontFamily = "Arial, Helvetica, sans-serif";
    productdes.style.fontSize = "12px";
    productdes.style.marginTop="10px"

let productprice = document.createElement("h3");
    productprice.innerText = `Rs. ${elem.price}`;
    productprice.style.fontFamily = "Arial, Helvetica, sans-serif";
    productprice.style.fontSize = "15px";
    productprice.style.color = "rgb(233,97,30)";
    productprice.style.marginTop="10px"
    productprice.style.marginBottom="10px"

let btn = document.createElement("button");
    btn.textContent = "REMOVE";
    btn.style.fontFamily = "Arial, Helvetica, sans-serif";
    btn.style.backgroundColor = "white";
    btn.style.color = "rgb(233,97,30)";
    btn.style.border = "1px solid rgb(233,97,30) ";
    btn.style.padding = "8px";
    btn.addEventListener("click", function () {
      deletedata(elem, i);
    });

let buy = document.createElement("button");
    buy.textContent = "BUY NOW";
    buy.style.fontFamily = "Arial, Helvetica, sans-serif";
    buy.style.marginLeft = "7px";
    buy.style.backgroundColor = "white";
    buy.style.color = "rgb(66,66,66)";
    buy.style.border = "1px solid rgb(66,66,66) ";
    buy.style.padding = "8px";

let increment = document.createElement("button");
    increment.textContent = "+";
    increment.style.marginLeft = "20px";
    increment.style.backgroundColor = "rgb(233,97,30)";
    increment.style.border = "none";
    increment.style.color = "white";
    increment.style.padding = "8px";
    increment.style.borderRadius = "2px";
    increment.addEventListener("click", function () {
      incrementvalue(elem);
    });

let quantity = document.createElement("span");
    quantity.textContent = elem.quantity;
    quantity.style.padding = "10px";

let decrement = document.createElement("button");
    decrement.textContent = "-";
    decrement.style.backgroundColor = "rgb(233,97,30)";
    decrement.style.border = "none";
    decrement.style.color = "white";
    decrement.style.padding = "8px";
    decrement.style.borderRadius = "2px";
    decrement.style.paddingLeft = "9px";
    decrement.addEventListener("click", function () {
      decrementvalue(elem);
    });

    div.append(productimage,productName,productdes,productprice,btn,buy,increment,quantity,decrement);

    document.querySelector("#cart-container").append(div);
  });
}

// --------------------------------------------------------------------------------------------------------------------------------------------------
// function for deleting the products from cartdata

function deletedata(i) {
  cartdata = cartdata.filter(function (index) {
    return index !== i;
  });

  displayProduct(cartdata);
  localStorage.setItem("buy", JSON.stringify(cartdata));

  let sum = 0;
  for (let i = 0; i < cartdata.length; i++) {
    sum = sum + cartdata[i].price * cartdata[i].quantity;
  }

  document.querySelector("#order-total").textContent = sum;

  let count = cartdata.length;
  document.querySelector("#product-count").textContent = count;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// for incrementing the value of product

function incrementvalue(elem) {
  
// Applying loop to incrementing value

  for (let i = 0; i < cartdata.length; i++) {
    if (cartdata[i].id == elem.id) {
      cartdata[i].quantity++;
      break;
    }
  }

  localStorage.setItem("buy", JSON.stringify(cartdata));



  let sum = 0;
  for (let i = 0; i < cartdata.length; i++) {
    sum = sum + cartdata[i].price * cartdata[i].quantity;
  }



  document.querySelector("#order-total").textContent = sum;
  displayProduct(cartdata);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------

// for decrementing the value of product

function decrementvalue(elem) {

// Applying loop to decrementing value

  for (let i = 0; i < cartdata.length; i++) {
    if (cartdata[i].id == elem.id && elem.quantity > 1) {
      cartdata[i].quantity--;

      break;
    }
  }

  localStorage.setItem("buy", JSON.stringify(cartdata));

  let sum = 0;
  for (let i = 0; i < cartdata.length; i++) {
    sum = sum + cartdata[i].price * cartdata[i].quantity;
  }

  document.querySelector("#order-total").textContent = sum;
  displayProduct(cartdata);
}


// ----------------------------------------------------------------------------------------------------------------------------------------------



// To Search Products in Cart Page

function search(){
  let q=document.querySelector("#searchid").value
 
 let newData=cartdata.filter(function(elem){
     return elem.name.toLocaleLowerCase().includes(q.toLocaleLowerCase());
 });
 
 displayProduct(newData)
 }
 