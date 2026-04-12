const phones=[

{
name:"OPPO Reno 12 Pro",
brand:"OPPO",
price:"36999",
spec:"50MP Camera • Dimensity 9200",
img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oppo%20Reno%2012%20Pro.jpg"
},

{
name:"OPPO A3 Pro",
brand:"OPPO",
price:"17999",
spec:"5100mAh Battery",
img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oppo%20A3%20Pro.jpg"
},

{
name:"OPPO Find X7",
brand:"OPPO",
price:"69999",
spec:"Flagship Camera",
img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oppo%20Find%20X7.jpg"
},

{
name:"Galaxy A55",
brand:"Samsung",
price:"34999",
spec:"6.6 AMOLED",
img:"https://commons.wikimedia.org/wiki/Special:FilePath/Samsung%20Galaxy%20A55.jpg"
},

{
name:"iPhone 15",
brand:"Apple",
price:"72900",
spec:"48MP Camera",
img:"https://commons.wikimedia.org/wiki/Special:FilePath/IPhone%2015.jpg"
},

{
name:"Vivo V40",
brand:"Vivo",
price:"44999",
spec:"ZEISS Camera",
img:"https://commons.wikimedia.org/wiki/Special:FilePath/Vivo%20V40.jpg"
},

{
name:"Redmi Note 13 Pro",
brand:"Redmi",
price:"24999",
spec:"200MP Camera",
img:"https://commons.wikimedia.org/wiki/Special:FilePath/Redmi%20Note%2013%20Pro.jpg"
},

{
name:"Realme 12 Pro",
brand:"Realme",
price:"29999",
spec:"Sony Camera",
img:"https://commons.wikimedia.org/wiki/Special:FilePath/Realme%2012%20Pro.jpg"
}

]

let current="all"

function render(){

let search=document.getElementById("search").value.toLowerCase()

let html=""

phones.forEach(p=>{

if((current==="all"||p.brand===current) && p.name.toLowerCase().includes(search)){

html+=`

<div class="phone-card" onclick="openPhone('${p.name}','${p.price}','${p.spec}')">

<img src="${p.img}">

<h3>${p.name}</h3>

<p class="price">₹${p.price}</p>

</div>

`

}

})

document.getElementById("phoneGrid").innerHTML=html

}

function filterBrand(b){

current=b
render()

}

function openPhone(name,price,spec){

document.getElementById("modal").style.display="flex"

document.getElementById("modalContent").innerHTML=`

<h2>${name}</h2>
<p>Price ₹${price}</p>
<p>${spec}</p>

`

}

document.getElementById("modal").onclick=function(){

this.style.display="none"

}

document.getElementById("search").addEventListener("input",render)

render()
