
document.querySelector("form").addEventListener("submit",mydoc)

let Usersinfo=[]

function mydoc(event){
  event.preventDefault()


  Name=document.querySelector("#name").value
  Email=document.querySelector("#email").value
  Address=document.querySelector("#address").value
  City=document.querySelector("#city").value
  State=document.querySelector("#state").value
 Zipcode=document.querySelector("#zipcode").value

let Usersobj={Name,Email,Address,City,State,Zipcode}

Usersinfo.push(Usersobj)
localStorage.setItem("UserData",JSON.stringify(Usersinfo))


}

