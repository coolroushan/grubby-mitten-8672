// navbar
console.log("hello")
let locate = document.getElementById("location")
let arrow = document.getElementById("arrow")
let list = document.getElementById("list")
let text = document.getElementById("text");
let slider = document.getElementById('slider');
let rightMid = document.getElementById('right-mid');

locate.addEventListener("click", function () {
    list.classList.toggle("showing")
    arrow.classList.toggle("rotate")
})
function myFunction(output) {
    text.innerHTML = output
}


let image = document.getElementById("imgId")
let dropdown = document.getElementById("dropDownid")

image.addEventListener("click", () => {
    dropdown.classList.toggle("showProfile")
})


let dynamicData = [
    {
        "createdAt": "2023-01-16T07:16:06.018Z",
        "name": "Fulcrum 3 HP Air Compressor 50 liters, TB3050BM",
        "image": "https://static1.industrybuying.com/products/pneumatics/air-compressors/air-tank-compressor/PNE.AIR.24347772_1668115052521.webp",
        "price": 41624,
        "description": "by Fulcrum",
        "id": "1",
        "quantity": 1
    },
    {
        "createdAt": "2023-01-15T21:01:39.578Z",
        "name": "Fulcrum 2 Ton 3Mtr Chain Pulley Block 2T3M",
        "image": "https://static1.industrybuying.com/products/material-handling-and-packaging/chain-pulley-blocks-and-accessories/chain-pulley-block/MAT.CHA.91518751_1667990374012.webp",
        "price": 5500,
        "description": "by Fulcrum",
        "id": "2",
        "quantity": 1
    },
    {
        "createdAt": "2023-01-15T14:03:53.215Z",
        "name": "AgriPro Mini Power Tiller APMT52",
        "image": "https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.41517227_1667990253322.webp",
        "price": 1500,
        "description": "by AgriPro",
        "id": "3",
        "quantity": 1
    },
    {
        "createdAt": "2023-01-15T22:00:54.951Z",
        "name": "Fulcrum 150 Kg Heavy Duty Foldable Platform Trolley PH150",
        "image": "https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MAT.PLA.91518620_1667990365953.webp",
        "price": 5100,
        "description": "by Fulcrum",
        "id": "4",
        "quantity": 1
    },
    {
        "createdAt": "2023-01-16T08:10:41.884Z",
        "name": "POWERWASH High Pressure Washer 1600W PW-M28 with 6 Months Warranty",
        "image": "https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.PRE.22179136_1668012965323.webp",
        "price": 7856,
        "description": "by POWERWASH",
        "id": "5",
        "quantity": 1
    },
    {
        "createdAt": "2023-01-16T08:42:26.716Z",
        "name": "Powerwash Nozzle Pipe And Connector-Quick Connector ",
        "image": "https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.PRE.76767587_1667643647621.webp",
        "price": 1700,
        "description": "by POWERWASH",
        "id": "6",
        "quantity": 1
    },
    {
        "createdAt": "2023-01-16T09:13:00.920Z",
        "name": "AgriPro 16L Knapsack Manual Sprayer",
        "image": "https://static1.industrybuying.com/products/agriculture-garden-landscaping/sprayers/knapsack-sprayer/AGR.KNA.51517252_1667990257178.webp",
        "price": 3500,
        "description": "by AgriPro",
        "id": "7",
        "quantity": 1
    },
    {
        "createdAt": "2023-01-16T12:42:50.559Z",
        "name": "Dubam Fuser Assembly",
        "image": "https://static1.industrybuying.com/products/it-electronics/printers/printer-accessories/ITE.PRI.37496717_1670385990060.webp",
        "price": 3700,
        "description": "by Dubam",
        "id": "8",
        "quantity": 1
    }
]

window.addEventListener('load', () => {
    slideFun();

    rightMid.innerHTML = dynamicData.map(item => renderMainDiv(item)).join("");

});


function slideFun() {
    let images = [
        'imags/37H2C1AreeND.jpg',
        'imags/1671432246CP-PLUS-DESKTOP-(524X334).png',
        'imags/ODHmL0j6nled.jpg',
        'imags/pVGjggR2HJcR.png',
        'imags/uvH4Mcg1e2sG.png',
    ];
    let i = 0;
    setInterval(() => {
        slider.src = images[i]
        i++;
        if (i > 4) {
            i = 0;
        }
    }, 3000);
}

function renderMainDiv(item) {
    return `
    <div onmouseenter="onMouseEnter(${item.id})" onmouseleave="mouseLeave(${item.id})">
       ${hoverData(item)}
    </div>
`
}

function renderSecondaryDiv(item) {
   return `
   <a style="font-size: 15px;" href="#">${item.name}</a>
   <p style="margin: 10px 0;color: grey">${item.description}</p>
   <hr />
   <h3 class="mainPrice">Rs.${convertToRs(item.price)}</h3>
   <hr style="margin-top: 30%;">
   <div>
       <button style="background-color: #e8681f;" onclick="addToCart(${item.id})"> Add to cart</button>
       <button>Buy now</button>
    </div>
   `
}

function onMouseEnter(id){
    let replace = document.querySelector(`.right-mid>div:nth-child(${id})`);
    let item =dynamicData.find(f=>f.id==id);
    replace.innerHTML = renderSecondaryDiv(item);
}

function mouseLeave(id){
    let replace = document.querySelector(`.right-mid>div:nth-child(${id})`);
   let item= dynamicData.find(f=>f.id == id);
    replace.innerHTML = hoverData(item)
}

function hoverData(item) {
    return `
        <div>
            <img src="${item.image}" alt="">
        </div>
            <p>${item.name}</p>
            <p>${item.description}</p>
            <div class="lowerSection">
            <div class="mainPrice">
            Rs. ${convertToRs(item.price)}
            </div>
        </div>
        `
}
function convertToRs(price) {
    return price.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
}

function addToCart(id){
    let buy = JSON.parse(localStorage.getItem('buy')) || [];
    let item =dynamicData.find(f=>f.id==id);
    if(buy.filter(f=>f.id==item.id).length > 0){
        alert("Item already added");
    }else{
        buy.push(item);
        localStorage.setItem('buy',JSON.stringify(buy))
    }
}





// ------------------------------------  Total Visitors -----
let count = JSON.parse(localStorage.getItem('count'))||0

window.addEventListener('load', ()=>{
    count++
    localStorage.setItem('count', JSON.stringify(count))
    // visitors.innerText = count++
    // user.innerText = client.length
})