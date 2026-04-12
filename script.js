const phones = [

{
name:"OPPO Reno 12 Pro",
brand:"OPPO",
price:"36999",
spec:"50MP Camera • Dimensity Chip",
img:"https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno12-pro-1.jpg"
},

{
name:"OPPO Reno 11 Pro",
brand:"OPPO",
price:"39999",
spec:"50MP Camera • 120Hz AMOLED",
img:"https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno11-pro-1.jpg"
},

{
name:"OPPO A3 Pro",
brand:"OPPO",
price:"17999",
spec:"5100mAh Battery",
img:"https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a3-pro-1.jpg"
},

{
name:"OPPO Find X7",
brand:"OPPO",
price:"69999",
spec:"Flagship Camera",
img:"https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-1.jpg"
},

{
name:"OPPO F25 Pro",
brand:"OPPO",
price:"23999",
spec:"64MP Camera",
img:"https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f25-pro-1.jpg"
},

{
name:"Galaxy A55",
brand:"Samsung",
price:"34999",
spec:"6.6 AMOLED Display",
img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a55-1.jpg"
},

{
name:"iPhone 15",
brand:"Apple",
price:"72900",
spec:"48MP Camera",
img:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg"
},

{
name:"Vivo V40",
brand:"Vivo",
price:"44999",
spec:"ZEISS Camera",
img:"https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v40-1.jpg"
},

{
name:"Redmi Note 13 Pro",
brand:"Redmi",
price:"24999",
spec:"200MP Camera",
img:"https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-1.jpg"
},

{
name:"Realme 12 Pro",
brand:"Realme",
price:"29999",
spec:"Sony Camera",
img:"https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-1.jpg"
}

];

let current="all";

function render(){

let search=document.getElementById("search").value.toLowerCase();

let html="";

phones.forEach(p=>{

if((current==="all" || p.brand===current) && p.name.toLowerCase().includes(search)){

html+=`

<div class="phone-card" onclick="openPhone('${p.name}','${p.price}','${p.spec}','${p.img}')">

<img src="${p.img}" alt="${p.name}">

<h3>${p.name}</h3>

<p class="price">₹${p.price}</p>

</div>

`;

}

});

document.getElementById("phoneGrid").innerHTML=html;

}

function filterBrand(b){

current=b;
render();

}

function openPhone(name,price,spec,img){

document.getElementById("modal").style.display="flex";

document.getElementById("modalContent").innerHTML=`

<img src="${img}" style="width:200px;display:block;margin:auto">

<h2>${name}</h2>

<p>Price ₹${price}</p>

<p>${spec}</p>

`;

}

document.getElementById("modal").onclick=function(){

this.style.display="none";

}

document.getElementById("search").addEventListener("input",render);

render();
