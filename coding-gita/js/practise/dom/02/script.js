var card = document.querySelector("#hoverCard");

console.log(card);

// card.addEventListener("mouseenter",()=>{
//     card.style.backgroundColor = "yellow";
// })

// card.addEventListener("mouseleave",()=>{
//     card.style.backgroundColor = "blue";
// })


card.addEventListener("mouseover",()=>{
    card.style.backgroundColor = "yellow";
})

card.addEventListener("mouseout",()=>{
    card.style.backgroundColor = "blue";
})

document.addEventListener("click",(event)=>{
    console.log(event.target.getAttribute("id"));
    event.target.setAttribute("class","document");
    
})

document.addEventListener("mousemove",(event)=>{
    console.log("current x-axis is " + event.clientX + "current y-axis is " + event.clientY);
    
})

document.addEventListener("wheel",(event)=>{
    if(event.deltaY >0){
        console.log("downward direction");
    }
    else if(event.deltaY < 0){
        console.log("upward direction");
    }
    else{
        console.log("static position");
    }
})