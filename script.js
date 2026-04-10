const phones=[

showProducts(filtered)
}

const slides=["images/slider1.jpg","images/slider2.jpg","images/slider3.jpg"]
let index=0

setInterval(()=>{

index=(index+1)%slides.length
slide.src=slides[index]

},3000)

aiButton.onclick=()=>{
aiBox.style.display="block"
}

aiInput.onchange=()=>{

const q=aiInput.value.toLowerCase()

if(q.includes("best phone"))
aiResponse.innerText="Try Samsung Galaxy S23 FE or iPhone 15"

else if(q.includes("cheap"))
aiResponse.innerText="Check Oppo A38 or Vivo Y56"

else
aiResponse.innerText="Visit the store for more details"

}
