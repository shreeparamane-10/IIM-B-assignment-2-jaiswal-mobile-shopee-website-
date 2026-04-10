const phonesContainer=document.getElementById("phones")

function openPopup(phone){

popup.style.display="block"

popupData.innerHTML=`

<h2>${phone.name}</h2>

<p>Brand: ${phone.brand}</p>

<p>Price: ₹${phone.price}</p>

`

}


search.oninput=()=>{

const value=search.value.toLowerCase()

const filtered=phones.filter(p=>p.name.toLowerCase().includes(value))

displayPhones(filtered)

}


brandFilter.onchange=filter
priceFilter.onchange=filter

function filter(){

let result=[...phones]

if(brandFilter.value!="all")

result=result.filter(p=>p.brand==brandFilter.value)

if(priceFilter.value!="all")

result=result.filter(p=>p.price<priceFilter.value)


displayPhones(result)

}


close.onclick=()=>popup.style.display="none"


displayPhones(phones)


function askAI(){

let q=aiInput.value.toLowerCase()

if(q.includes("gaming"))
aiOutput.innerText="Try Realme Narzo 70 or OPPO F25 Pro"

else if(q.includes("camera"))
aiOutput.innerText="OPPO Reno 11 and iPhone 15 have excellent cameras"

else if(q.includes("cheap"))
aiOutput.innerText="Redmi A3 or Redmi 13C are budget friendly"

else
aiOutput.innerText="Search Samsung, OPPO, Vivo or Apple phones"

}
