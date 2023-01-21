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

let arr = []

function render(){
    fetch('https://63c55501f3a73b347853986b.mockapi.io/users')
    .then(res => res.json())
    .then((data)=>{
        arr = data

//------------------------------------------------------------------AgriPro
        agripro.addEventListener('click',()=>{
          let agri = arr.filter((ele)=>{
            if(ele.description == "by AgriPro"){
              return ele
            }
          })
          shopping(agri)
      })
//-----------------------------------------------------------------FULCRUM
fulcrum.addEventListener('click',()=>{
  let fulcrum = arr.filter((ele)=>{
    if(ele.description == 'by Fulcrum'){
      return ele
    }
  })
  shopping(fulcrum)
})
//----------------------------------------------------------------POWERWASH
powerwash.addEventListener('click',()=>{
  let powerwash = arr.filter((ele)=>{
    if(ele.description == "by POWERWASH"){
      return ele
    }
  })
  shopping(powerwash)
})
//----------------------------------------------------------------POWERHOUSE
powerhouse.addEventListener('click',()=>{
  let powerhouse = arr.filter((ele)=>{
    if(ele.description == "by PowerHouse"){
      return ele
    }
  })
  shopping(powerhouse)
})
//----------------------------------------------------------------NILKAMAL
nilkamal.addEventListener('click',()=>{
  let nilkamal = arr.filter((ele)=>{
    if(ele.description == "by NILKAMAL"){
      return ele
    }
  })
  shopping(nilkamal)
})
//----------------------------------------------------------------DUBAM
dubam.addEventListener('click',()=>{
  let dubam = arr.filter((ele)=>{
    if(ele.description == "by Dubam"){
      return ele
    }
  })
  shopping(dubam)
})
//----------------------------------------------------------------SOFTSPAN
softspan.addEventListener('click',()=>{
  let softspan = arr.filter((ele)=>{
    if(ele.description == "by softspun"){
      return ele
    }
  })
  shopping(softspan)
})
//----------------------------------------------------------------KIRLOSKAR
kirloskar.addEventListener('click',()=>{
  let kirloskar = arr.filter((ele)=>{
    if(ele.description == "by Kirloskar"){
      return ele
    }
  })
  shopping(kirloskar)
})
//----------------------------------------------------------------HIKVISION
hikvision.addEventListener('click',()=>{
  let hikvision = arr.filter((ele)=>{
    if(ele.description == "by HikVision"){
      return ele
    }
  })
  shopping(hikvision)
})
})
}
render()

///-----------------------------------Main function responsible for creating divs
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


        box.append(img,name,description,price)
        companydiv.append(box)
    })
}



// const url = `https://63c55501f3a73b347853986b.mockapi.io/users`;


// async function getData() {
//     try {
//       let res = await fetch(url);
//       var out = await res.json();
//       arr = out;
//     //   console.log(arr);
  
//     //   displayProduct(out);
//     } catch (err) {
//       alert(err);
//     }
//   }
  
//   getData();

