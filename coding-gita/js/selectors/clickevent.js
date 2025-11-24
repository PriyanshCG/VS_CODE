// const h1=document.getElementById("h1");
// console.log(h1);
//  console.log(h1.textContent)
// body.style.backgroundColor="yellow"
// h1.textContent="Done through Javascript";

// const heading=document.getElementsByClassName("heading");
// console.log(heading);
// body.style.backgroundColor="red"

let data=prompt()
const button=document.getElementById("color");
let heading=document.getElementById("heading");
const body=document.getElementById("body");
button.addEventListener("click",()=>{

    
    body.style.backgroundColor="red";
    console.log("This is done through button");
    heading.innerText=data
})