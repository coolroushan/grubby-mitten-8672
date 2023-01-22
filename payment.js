// To StoreUser Data from Payment Page
let Usersinfo = JSON.parse(localStorage.getItem("UserData")) || [];

// To StoreUser Data from Products Page
let ProductInfo = JSON.parse(localStorage.getItem("ProductData")) || [];

// To Get the Data from CartArray
let CartData = JSON.parse(localStorage.getItem("buy")) || [];

function checkoutdata() {
  Name = document.querySelector("#name").value;
  Email = document.querySelector("#email").value;
  Address = document.querySelector("#address").value;
  City = document.querySelector("#city").value;
  State = document.querySelector("#state").value;
  Zipcode = document.querySelector("#zipcode").value;

  let Usersobj = { Name, Email, Address, City, State, Zipcode };

  Usersinfo.push(Usersobj);
  localStorage.setItem("UserData", JSON.stringify(Usersinfo));

  CartData.forEach(function (elem) {
    ProductInfo.push(elem);
    localStorage.setItem("ProductData", JSON.stringify(ProductInfo));
  });
}

// ---------------------------------------------------------------------------------------------------------------------------------------

// Functionality Part Of PopUp Div

var buttons = document.querySelectorAll(".modal_btns button");
var close_btns = document.querySelectorAll(".close_btn");
var modal_wrapper = document.querySelector(".modal_wrapper");
var s_modal = document.querySelector(".s_modal");
var e_modal = document.querySelector(".e_modal");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal_wrapper.classList.add("active");
    if (btn.classList.contains("success_btn")) {
      s_modal.classList.add("active");
      e_modal.classList.remove("active");
    }
  });
});

close_btns.forEach(function (close) {
  close.addEventListener("click", function () {
    modal_wrapper.classList.remove("active");
    s_modal.classList.remove("active");
    e_modal.classList.remove("active");
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------

// Must fill Condition Apply on Checkout Button

let input = document.querySelector(".mustfill");
let button = document.querySelector(".success_btn");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".mustfill").value === "") {
    button.disabled = true; //button remains disabled
  } else {
    button.disabled = false; //button is enabled
  }
}
