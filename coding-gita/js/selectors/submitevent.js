const form=document.getElementById("userForm");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");

let h2=document.getElementById("h2");

console.log(fname);

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    h2.innerText=fname.value + " " +lname.value;
    fname.value= "";
    lname.value= "";
});
const btn=document.getElementById("clickMe");
const body=document.getElementById("body");


btn.addEventListener("click", () => {
     const number = Math.floor(Math.random() * 256);
    const number1 = Math.floor(Math.random() * 256);
    const number2 = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${number}, ${number1}, ${number2})`;
    document.body.style.backgroundColor = rgbColor;
});