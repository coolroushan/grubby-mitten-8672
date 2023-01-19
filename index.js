// navbar
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