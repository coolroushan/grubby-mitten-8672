bag = [];

const url = `https://63c55501f3a73b347853986b.mockapi.io/users`;

async function getData() {
  try {
    let res = await fetch(url);
    let out = await res.json();
    bag = out;
    console.log(bag);

    displayProduct(out);
  } catch (err) {
    alert(err);
  }
}

getData();

// Fetching the Products By Using Api Link

function displayProduct(out) {
  document.querySelector("#Product-Section").innerHTML = "";

  out.forEach((elem) => {
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
    btn.textContent = "ADD TO CART";
    btn.style.fontFamily = "Arial, Helvetica, sans-serif";
    btn.style.backgroundColor = "white";
    btn.style.color = "rgb(233,97,30)";
    btn.style.border = "1px solid rgb(233,97,30) ";
    btn.style.padding = "8px";

    btn.addEventListener("click", function () {
      let cartdata = JSON.parse(localStorage.getItem("buy"));
      if (cartdata === null) cartdata = [];

      let ispresent = false;
      for (let i = 0; i < cartdata.length; i++) {
        if (cartdata[i].id == elem.id) {
          ispresent = true;
        }
      }

      if (ispresent == true) {
       alert("Product Already in Cart")
        
      } else {
        cartdata.push({ ...elem, quantity: 1 });
        alert("Product Added To Cart")
        localStorage.setItem("buy", JSON.stringify(cartdata));
        
        
      }
    });

    let buy = document.createElement("button");
    buy.textContent = "BUY NOW";
    buy.style.fontFamily = "Arial, Helvetica, sans-serif";
    buy.style.marginLeft = "7px";
    buy.style.backgroundColor = "white";
    buy.style.color = "rgb(66,66,66)";
    buy.style.border = "1px solid rgb(66,66,66) ";
    buy.style.padding = "8px";

    div.append(productimage, productName, productdes, productprice, btn, buy);

    document.querySelector("#Product-Section").append(div);
  });
}


// -------------------------------------------------------------------------------------------------------------------------
// Sorting the products by lower to higher price


function handlesort1() {
  bag.sort((a, b) => b.price - a.price);

  displayProduct(bag);
}

// Sorting the products by lower to higher price

function handlesort2() {
  bag.sort((a, b) => a.price - b.price);
  displayProduct(bag);
}


// ------------------------------------------------------------------------------------------------------------------------------

// Filter the products in lower price to higher price

function handlefilter() {
  let lower = document.querySelector("#lower").value;
  let higher = document.querySelector("#upper").value;

  let filterdata = bag.filter(function (elem) {
    if (elem.price >= lower && elem.price <= higher) {
      return elem;
    }
  });
  displayProduct(filterdata);
}


// ------------------------------------------------------------------------------------------------------------------------------


// To Search the Products

function search(){
  let q=document.querySelector("#searchid").value
 
 let newData=bag.filter(function(elem){
     return elem.name.toLocaleLowerCase().includes(q.toLocaleLowerCase());
 });
 
 displayProduct(newData)
 }
 
 
// ------------------------------------------------------------------------------------------------------------------------------



// Filter the products by brands

function Agripro() {
  let checkbox = document.getElementById("1");

  if (checkbox.checked == true) {
    let brand = document.getElementById("1").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

function Fulcrum() {
  let checkbox = document.getElementById("2");

  if (checkbox.checked == true) {
    let brand = document.getElementById("2").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

function POWERWASH() {
  let checkbox = document.getElementById("3");

  if (checkbox.checked == true) {
    let brand = document.getElementById("3").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

function NILKAMAL() {
  let checkbox = document.getElementById("4");

  if (checkbox.checked == true) {
    let brand = document.getElementById("4").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

function PowerHouse() {
  let checkbox = document.getElementById("5");

  if (checkbox.checked == true) {
    let brand = document.getElementById("5").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

function Dubam() {
  let checkbox = document.getElementById("6");

  if (checkbox.checked == true) {
    let brand = document.getElementById("6").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

function softspun() {
  let checkbox = document.getElementById("7");

  if (checkbox.checked == true) {
    let brand = document.getElementById("7").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

function Kirloskar() {
  let checkbox = document.getElementById("8");

  if (checkbox.checked == true) {
    let brand = document.getElementById("8").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

function HikVision() {
  let checkbox = document.getElementById("9");

  if (checkbox.checked == true) {
    let brand = document.getElementById("9").value;

    filterbrand = bag.filter(function (elem) {
      return elem.description == brand;
    });
  }

  displayProduct(filterbrand);
}

// -----------------------------------------------------------------------------------------------------------------------

// For Resetting Page

function reset() {
  displayProduct(bag);
}



// -----------------------------------------------------------------------------------------------------------------------

// navbar functionality


console.log("hello")
let locate=document.getElementById("location")
let arrow=document.getElementById("arrow")
let list=document.getElementById("list")
let text=document.getElementById("text");
locate.addEventListener("click",function (){
    list.classList.toggle("showing")
    arrow.classList.toggle("rotate")
})
function myFunction(output){
    text.innerHTML=output
}


    let image=document.getElementById("imgId")
    let dropdown=document.getElementById("dropDownid")

    image.addEventListener("click",()=>{
        dropdown.classList.toggle("showProfile")
    })

